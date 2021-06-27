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
      dispatch(removeElement({ id: id }));
    },
  };
};

const VisibleElementsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementsList);

export default VisibleElementsList;
