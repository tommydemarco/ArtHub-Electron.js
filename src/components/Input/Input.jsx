import React from "react";

import { Input } from "semantic-ui-react";

import css from "./Input.module.scss";

const CustomInput = ({ full, type, placeholder, value, setValue }) => {
  const inputClasses = [css.Input];

  if (full === true) inputClasses.push(css["Input--full-width"]);

  return (
    <Input
      className={inputClasses.join(" ")}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default CustomInput;
