import { useContext, useEffect } from "react";

import firebase from "./utils/firebase";
import "firebase/auth";

import { appContext, actionTypes } from "./context";
import { useTranslation } from "react-i18next";

import Auth from "./pages/Auth/Auth";
import { toast } from "react-toastify";

function App(): JSX.Element {
  const { t } = useTranslation();

  const { dispatch } = useContext(appContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser && currentUser?.emailVerified) {
        dispatch({ type: actionTypes.LOGIN, payload: currentUser });
      } else if (currentUser && !currentUser?.emailVerified) {
        firebase.auth().signOut();
        toast(t("verify-email"));
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
