import React, { useState } from "react";

import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import AuthOptions from "../../components/AuthOptions";
import VideoBackground from "../../components/VideoBackground";
import ActionPopup from "../../components/ActionPopup";

import css from "./Auth.module.scss";

const Auth = () => {
  const [mode, setMode] = useState(null);

  const handleForm = (mode) => {
    switch (mode) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      default:
        return <AuthOptions />;
    }
  };
  return (
    <>
      <VideoBackground />
      <div className={css.Auth}>
        <ActionPopup>{handleForm(mode)}</ActionPopup>
      </div>
    </>
  );
};

export default Auth;
