import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
// import { getStorage } from "@firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAmDZlAaZRL1MFRENw1cHpPDD0uXxdP5Lk",
  authDomain: "count-f0de4.firebaseapp.com",
  databaseURL: "https://count-f0de4-default-rtdb.firebaseio.com",
  projectId: "count-f0de4",
  storageBucket: "count-f0de4.appspot.com",
  messagingSenderId: "935238386323",
  appId: "1:935238386323:web:acbfd82e898a21234b4366",
  measurementId: "G-4PJ28REZRV",
};
let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(config);
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}
const db = firebaseApp.firestore();
const App = () => {
  const [getNum, setNum] = useState(0);
  useEffect(() => {
    db.collection("countnum")
      .doc("Y7AngZzkbJ4BfCANLGUn")
      .onSnapshot((doc) => {
        let tempVal = doc.data().num;
        setNum(tempVal);
      });
  }, []);
  function increaseVal() {
    db.collection("countnum")
      .doc("Y7AngZzkbJ4BfCANLGUn")
      .set({
        num: getNum + 1,
      });
  }
  return (
    <div>
      <p>{getNum}</p>
      <button onClick={() => increaseVal()}>Click me!</button>
    </div>
  );
};
export default App;
