import React from "react";
import PropTypes from "prop-types";
import store from "../store";
import { connect } from "react-redux";
import { zoomIn, zoomOut } from "../actions";

const ZoomButtons = () => (
  <div class="zoomBtns">
    <button
      class="zoom_in"
      onClick={(svg) =>
        store.dispatch(zoomIn(document.getElementsByTagName("svg")[0]))
      }
    >
      +
    </button>
    <button
      class="zoom_out"
      onClick={(svg) =>
        store.dispatch(zoomOut(document.getElementsByTagName("svg")[0]))
      }
    >
      -
    </button>
  </div>
);

function getZoom(state) {
  return state.zoom;
}

const mapStateToProps = (state) => {
  return {
    zoom: state.zoom,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    zoomIn: (svg) => {
      dispatch(zoomIn(svg));
    },
    zoomOut: (svg) => {
      dispatch(zoomOut(svg));
    },
  };
};

const Zoom = connect(mapStateToProps, mapDispatchToProps)(ZoomButtons);

export default Zoom;
