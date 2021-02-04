import React, { useState, useMemo, useRef } from "react";

import firebase from "../../utils/firebase";
import "firebase/auth";

import { useTranslation } from "react-i18next";
import { Form, Checkbox } from "semantic-ui-react";

import Button from "../Button";
import CustomInput from "../Input";

import css from "../../pages/Auth/Auth.module.scss";

const RegisterForm = ({ changeMode }) => {
  const { t, i18n } = useTranslation("global");

  const agreeButton = useMemo(
    () => (
      <>
        {t("aknowledge")} <a>{t("t-c")}</a>
      </>
    ),
    [i18n]
  );

  const handleAuthAction = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  const checkboxRef = useRef(null);

  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <form onSubmit={handleAuthAction}>
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
      <Checkbox label={{ children: agreeButton }} ref={checkboxRef} />
      <div className={css.Auth__group}>
        <Button type="submit">{t("signup")}</Button>
        <Button secondary={true} onClick={() => changeMode(true)}>
          {t("login-inst")}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
