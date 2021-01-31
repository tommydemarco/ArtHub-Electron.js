import React, { useContext } from "react";

import { appContext } from "./context";

const component = () => {
  const context = useContext(appContext);
  console.log(context);

  return <div></div>;
};

export default component;
