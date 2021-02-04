import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import Button from "../../components/Button";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import RegisterForm from "../../components/RegisterForm";
import VideoBackground from "../../components/VideoBackground";
import ActionPopup from "../../components/ActionPopup";

import css from "./Auth.module.scss";

const Auth = () => {
  const [t] = useTranslation("global");

  const [login, setLogin] = useState(true);

  return (
    <>
      <VideoBackground />
      <div className={css.Auth}>
        <ActionPopup>
          <Logo element="h2" variant={1} />
          <div className={css.Auth__forms}>
            {login ? (
              <LoginForm changeMode={setLogin} />
            ) : (
              <RegisterForm changeMode={setLogin} />
            )}
          </div>
        </ActionPopup>
      </div>
    </>
  );
};

export default Auth;
