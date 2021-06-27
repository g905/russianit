import React from "react";
import PropTypes from "prop-types";

const Element = ({ idx, onClick, title }) => (
  <li>
    {title}
    <span class="removeElement" onClick={onClick}>
      &times;
    </span>
  </li>
);

Element.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Element;
