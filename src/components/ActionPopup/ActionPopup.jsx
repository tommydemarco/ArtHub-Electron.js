import React, { useState } from "react";

import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

import css from "./ActionPopup.module.scss";

const ActionPopup = ({ children }) => {
  const [login, setLogin] = useState(true);

  return (
    <div className={css.ActionPopup}>
      {login ? (
        <LoginForm changeMode={setLogin} />
      ) : (
        <RegisterForm changeMode={setLogin} />
      )}
    </div>
  );
};

export default ActionPopup;
