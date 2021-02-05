import { Button as SemanticButton } from "semantic-ui-react";

import css from "./Button.module.scss";

interface Props {
  isLink: boolean;
  onClick: Function;
  children: JSX.Element[] | JSX.Element;
  secondary: boolean;
  className: string;
  loading: boolean;
}

const Button = (props: Props): JSX.Element => {
  const { isLink, onClick, children, secondary, className, loading } = props;
  const classes = [css.Button];

  if (typeof className === "string" && className.length) {
    classes.push(className);
  }

  const Element = isLink ? "a" : SemanticButton;
  return (
    <Element
      className={classes.join(" ")}
      onClick={(e: Event) => onClick(e)}
      primary={!secondary}
      loading={loading}
    >
      {children}
    </Element>
  );
};

export default Button;
