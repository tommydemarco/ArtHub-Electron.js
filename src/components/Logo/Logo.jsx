import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import css from "./Login.module.scss";

const Logo = ({ element, variant }) => {
  const logoClasses = [css.Logo];

  logo.push(css.Logo + "--" + variant);

  const Element = element;
  return <Element className={logoClasses.join(" ")}>MOTI-TASK</Element>;
};

Logo.propTypes = {
  element: PropTypes.string.isRequired,
  variant: PropTypes.number,
};

export default Logo;
