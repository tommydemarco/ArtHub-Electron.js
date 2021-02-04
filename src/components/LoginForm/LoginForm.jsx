import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import Button from "../Button";
import CustomInput from "../Input";

import css from "../../pages/Auth/Auth.module.scss";

const LoginForm = ({ changeMode }) => {
  const [t] = useTranslation("global");

  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleAuthAction = () => {};

  return (
    <div>
      <CustomInput
        type="email"
        placeholder={t("email")}
        value={userMail}
        setValue={setUserMail}
        full={true}
        icon="at"
      />
      <CustomInput
        type="password"
        placeholder={t("password")}
        value={userPassword}
        setValue={setUserPassword}
        full={true}
        icon="key"
      />
      <div className={css.Auth__group}>
        <Button onClick={handleAuthAction}>{t("login")}</Button>
        <Button secondary={true} onClick={() => changeMode(false)}>
          {t("signup-inst")}
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
