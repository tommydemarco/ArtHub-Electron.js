import React, { useReducer } from "react";

const appContext = React.createContext();

const initialValue = {
  user: null,
  loading: false,
};

export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOADING_START: "LOADING_START",
  LOADING_END: "LOADING_END",
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
    case actionTypes.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADING_END:
      return {
        ...state,
        loading: false,
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
