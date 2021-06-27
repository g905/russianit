import React from "react";
import PropTypes from "prop-types";

const Element = ({ id, onClick, title }) => (
  <li onClick={onClick}>
    {id} : {title}
  </li>
);

Element.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Element;
