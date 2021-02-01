import React, { useState } from "react";

import CustomInput from "../Input";

const LoginForm = () => {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <div>
      <CustomInput
        type="email"
        placeholder="email"
        value={userMail}
        setValue={setUserMail}
        full={true}
      />
      <CustomInput
        type="password"
        placeholder="password"
        value={userPassword}
        setValue={setUserPassword}
        full={true}
      />
    </div>
  );
};

export default LoginForm;
