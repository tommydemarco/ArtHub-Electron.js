import React from "react";
import { Button as SemanticButton } from "semantic-ui-react";

import css from "./Button.module.scss";

const Button = ({ isLink, onClick, children, secondary }) => {
  const Element = isLink ? "a" : SemanticButton;
  return (
    <Element className={css.Button} onClick={onClick} primary={!secondary}>
      {children}
    </Element>
  );
};

export default Button;
