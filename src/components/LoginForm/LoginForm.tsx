import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import Button from "../Button";
import CustomInput from "../Input";

import css from "../../pages/Auth/Auth.module.scss";

const LoginForm = ({ changeMode }): JSX.Element => {
  const [t] = useTranslation("global");

  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleAuthAction = (e) => {
    e.preventDefault();

    let errors = {};
    let formValid = true;

    if (!validateEmail(userMail)) {
      errors.email = true;
      formValid = false;
    }
    if (!validatePassword(userPassword)) {
      errors.password = true;
      formValid = false;
    }

    setErrors(errors);

    if (!formValid) return;

    setIsLoading(true);

    (async function (mail, password) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(mail, password);
        changeUserName();
        sendVerificationEmail();
        toast.success(t("signup-success"));
      } catch (e) {
        if (e?.code === "auth/email-already-in-use")
          toast.error(t("email-taken"));
        else toast.error(t("generic-signup-error"));
      } finally {
        setIsLoading(false);
      }
    })(userMail, userPassword);
  };

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
