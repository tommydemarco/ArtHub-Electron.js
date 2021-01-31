import { useContext } from "react";

import firebase from "./utils/firebase";
import "firebase/auth";

import { appContext, actionTypes } from "./context";

function App() {
  const { state, dispatch } = useContext(appContext);

  firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser) {
      dispatch({ type: actionTypes.LOGIN, payload: currentUser });
    } else {
      dispatch({ type: actionTypes.LOGOUT });
    }
  });

  return (
    <div className="main">
      {state.user === null && <h1>You are not logged in</h1>}
    </div>
  );
}

export default App;
