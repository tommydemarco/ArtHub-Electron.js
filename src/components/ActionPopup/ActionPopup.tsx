import { FC } from "react";
import css from "./ActionPopup.module.scss";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const ActionPopup: FC<Props> = ({ children }): JSX.Element => {
  return <div className={css.ActionPopup}>{children}</div>;
};

export default ActionPopup;
