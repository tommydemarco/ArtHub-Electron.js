import React, { useState } from "react";

import CustomInput from "../Input";

const LoginForm = () => {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(userMail);
  return (
    <div>
      <CustomInput
        type="email"
        placeholder="email"
        value={userMail}
        setValue={setUserMail}
        full={true}
        icon="at"
      />
      <CustomInput
        type="password"
        placeholder="password"
        value={userPassword}
        setValue={setUserPassword}
        full={true}
        icon="key"
      />
    </div>
  );
};

export default LoginForm;
