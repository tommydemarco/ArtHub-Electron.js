import React, { useState, useEffect, useMemo, useRef } from "react";

import firebase from "../../utils/firebase";
import "firebase/auth";

import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";
import { Checkbox } from "semantic-ui-react";
import { validateEmail, validatePassword } from "../../utils/validations";

import Button from "../Button";
import CustomInput from "../Input";

import css from "../../pages/Auth/Auth.module.scss";

const RegisterForm = ({ changeMode }) => {
  const { t, i18n } = useTranslation("global");

  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const agreeButton = useMemo(
    () => (
      <>
        {t("aknowledge")} <a>{t("t-c")}</a>
      </>
    ),
    [i18n]
  );

  const checkboxRef = useRef(null);

  const handleAuthAction = (e) => {
    e.preventDefault();

    let errors = {};
    let formValid = true;

    if (!userName) {
      errors.username = true;
      formValid = false;
    }
    if (!validateEmail(userMail)) {
      errors.email = true;
      formValid = false;
    }
    if (!validatePassword(userPassword) || userPassword !== repeatPassword) {
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
        changeMode(true);
      } catch (e) {
        if (e?.code === "auth/email-already-in-use")
          toast.error(t("email-taken"));
        else toast.error(t("generic-signup-error"));
      } finally {
        setIsLoading(false);
      }
    })(userMail, userPassword);
  };

  const changeUserName = async () => {
    try {
      await firebase
        .auth()
        .currentUser.updateProfile({ displayName: userName });
    } catch (e) {
      //handle global error
    }
  };

  const sendVerificationEmail = async () => {
    try {
      await firebase.auth().currentUser.sendEmailVerification();
    } catch (e) {
      //handle email error
    }
  };

  return (
    <form onSubmit={handleAuthAction}>
      <CustomInput
        type="text"
        placeholder={t("username")}
        value={userName}
        setValue={setUserName}
        full={true}
        icon="user"
        error={errors.username}
      />
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
      <CustomInput
        type="password"
        placeholder={t("rep-password")}
        value={repeatPassword}
        setValue={setRepeatPassword}
        full={true}
        icon="key"
        error={errors.password}
      />
      <Checkbox label={{ children: agreeButton }} ref={checkboxRef} />
      <div className={css.Auth__group}>
        <Button type="submit" loading={isLoading}>
          {t("signup")}
        </Button>
        <Button secondary={true} onClick={() => changeMode(true)}>
          {t("login-inst")}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
