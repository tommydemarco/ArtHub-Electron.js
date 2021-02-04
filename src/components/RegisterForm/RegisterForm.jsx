import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import Button from "../Button";
import CustomInput from "../Input";

const RegisterForm = ({ changeMode }) => {
  const { t } = useTranslation("global");

  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
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
      <CustomInput
        type="password"
        placeholder={t("rep-password")}
        value={userPassword}
        setValue={setUserPassword}
        full={true}
        icon="key"
      />
      <Button>{t("signup")}</Button>
      <Button secondary={true} onClick={() => changeMode(true)}>
        {t("login-inst")}
      </Button>
    </div>
  );
};

export default RegisterForm;
