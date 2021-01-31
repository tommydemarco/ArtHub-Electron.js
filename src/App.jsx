import { useContext } from "react";

import firebase from "./utils/firebase";
import "firebase/auth";

import { appContext, actionTypes } from "./context";

import Auth from "./pages/Auth/Auth";

function App() {
  const { dispatch } = useContext(appContext);

  // firebase.auth().onAuthStateChanged((currentUser) => {
  //   if (currentUser) {
  //     dispatch({ type: actionTypes.LOGIN, payload: currentUser });
  //   } else {
  //     dispatch({ type: actionTypes.LOGOUT });
  //   }
  // });

  return (
    <div className="main">
      <Auth />
    </div>
  );
}

export default App;
