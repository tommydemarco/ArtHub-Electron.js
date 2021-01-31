import React from "react";

import css from "./Button.module.scss";

const Button = ({ isLink, onClick, children }) => {
  const Element = isLink ? "a" : "button";
  return (
    <Element className={css.Button} onClick={onClick}>
      {children}
    </Element>
  );
};

export default Button;
