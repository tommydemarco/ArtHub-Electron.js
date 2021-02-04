import React from "react";
import { Button as SemanticButton } from "semantic-ui-react";

import css from "./Button.module.scss";

const Button = ({ isLink, onClick, children, secondary, className }) => {
  const classes = [css.Button];

  if (typeof className === "string" && className.length) {
    classes.push(className);
  }

  const Element = isLink ? "a" : SemanticButton;
  return (
    <Element
      className={classes.join(" ")}
      onClick={onClick}
      className={css.Button}
      primary={!secondary}
    >
      {children}
    </Element>
  );
};

export default Button;
