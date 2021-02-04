import React from "react";

import { Icon, Input } from "semantic-ui-react";

import css from "./Input.module.scss";

const CustomInput = ({ full, type, placeholder, value, setValue, icon }) => {
  const inputClasses = [css.Input];

  if (full === true) inputClasses.push(css["Input--full-width"]);

  return (
    <Input
      className={inputClasses.join(" ")}
      type={type}
      placeholder={placeholder}
      iconPosition="left"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {icon && <Icon name={icon} />}
      <input />
    </Input>
  );
};

export default CustomInput;
