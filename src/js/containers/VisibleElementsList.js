import { connect } from "react-redux";
import { removeElement } from "../actions";
import ElementsList from "../components/ElementsList";

const getElements = (els) => {
  return els;
};

const mapStateToProps = (state) => {
  return {
    elements: getElements(state.elements),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onElementClick: (id) => {
      let idd = id.toString().replace("#", "");
      let el = document.getElementById(idd);
      el && el.setAttribute("stroke", "");
      dispatch(removeElement({ id: id }));
    },
  };
};

const VisibleElementsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementsList);

export default VisibleElementsList;
