import React from "react";

import css from "./ActionPopup.module.scss";

const ActionPopup = ({ children }) => {
  return <div className={css.ActionPopup}>{children}</div>;
};

export default ActionPopup;
