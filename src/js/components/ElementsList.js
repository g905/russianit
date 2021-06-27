import React from "react";
import PropTypes from "prop-types";
import Element from "./Element";

const ElementsList = ({ elements, onElementClick }) => (
  <ul>
    {elements &&
      elements.map((element, index) => (
        <Element
          key={element.id}
          id={element.id}
          {...element}
          onClick={() => onElementClick(element.id)}
        />
      ))}
  </ul>
);

ElementsList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onElementClick: PropTypes.func.isRequired,
};

export default ElementsList;
