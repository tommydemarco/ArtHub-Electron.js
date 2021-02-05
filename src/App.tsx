import { useContext, useEffect } from "react";

import firebase from "./utils/firebase";
import "firebase/auth";

import { appContext, actionTypes } from "./context";

import Auth from "./pages/Auth/Auth";

function App(): JSX.Element {
  const { dispatch } = useContext(appContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser && currentUser?.emailVerified) {
        dispatch({ type: actionTypes.LOGIN, payload: currentUser });
      } else {
        dispatch({ type: actionTypes.LOGOUT });
      }
      console.log(currentUser);
    });
  }, []);

  return (
    <div className="main">
      <Auth />
    </div>
  );
}

export default App;
