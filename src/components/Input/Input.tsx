import React from "react";

import { Icon, Input as CustomInput } from "semantic-ui-react";

import css from "./Input.module.scss";

const Input = ({
  full,
  type,
  placeholder,
  value,
  setValue,
  icon,
  error,
}): JSX.Element => {
  const inputClasses = [css.Input];

  if (full === true) inputClasses.push(css["Input--full-width"]);

  return (
    <CustomInput
      className={inputClasses.join(" ")}
      type={type}
      placeholder={placeholder}
      iconPosition="left"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={error}
    >
      {icon && <Icon name={icon} />}
      <input />
    </CustomInput>
  );
};

export default Input;
