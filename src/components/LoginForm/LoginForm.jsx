import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import Button from "../Button";
import CustomInput from "../Input";

const LoginForm = ({ changeMode }) => {
  const [t] = useTranslation("global");

  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    console.log(t);
  });

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
      <Button>{t("login")}</Button>
      <Button secondary={true} onClick={() => changeMode(false)}>
        {t("register-inst")}
      </Button>
    </div>
  );
};

export default LoginForm;
