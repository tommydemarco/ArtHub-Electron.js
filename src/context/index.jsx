import React, { useReducer } from "react";

const appContext = React.createContext();

const initialValue = {
  user: null,
};

const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export { appContext };
export default Context;
