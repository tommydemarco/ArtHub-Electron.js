import { Button as SemanticButton } from "semantic-ui-react";

import css from "./Button.module.scss";

const Button = (props) => {
  const { isLink, onClick, children, secondary, className, loading } = props;
  const classes = [css.Button];

  if (typeof className === "string" && className.length) {
    classes.push(className);
  }

  const Element = isLink ? "a" : SemanticButton;
  return (
    <Element
      className={classes.join(" ")}
      onClick={onClick}
      primary={!secondary}
      loading={loading}
    >
      {children}
    </Element>
  );
};

export default Button;
