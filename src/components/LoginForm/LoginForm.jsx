import React, { useState } from "react";

import firebase from "../../utils/firebase";
import "firebase/auth";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { validateEmail, validatePassword } from "../../utils/validations";

import Button from "../Button";
import CustomInput from "../Input";

import css from "../../pages/Auth/Auth.module.scss";

const LoginForm = ({ changeMode }) => {
  const [t] = useTranslation("global");

  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      try {
        await firebase.auth().signInWithEmailAndPassword(mail, password);
      } catch (e) {
        console.log(e.code);
        if (e?.code === "auth/user-not-found")
          toast.error(t("wrong-credentials"));
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
        error={errors.email}
      />
      <CustomInput
        type="password"
        placeholder={t("password")}
        value={userPassword}
        setValue={setUserPassword}
        full={true}
        icon="key"
        error={errors.password}
      />
      <div className={css.Auth__group}>
        <Button onClick={handleAuthAction} loading={isLoading}>
          {t("login")}
        </Button>
        <Button secondary={true} onClick={() => changeMode(false)}>
          {t("signup-inst")}
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
