import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Players from "./pages/Players";
import Player from "./pages/player";
import * as serviceWorker from "./serviceWorker";
import { Router } from "@reach/router";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyCrSGNAxF-RGkDyBelkEn8C8HO6d2uy_Uw",
  authDomain: "axis-stats.firebaseapp.com",
  databaseURL: "https://axis-stats.firebaseio.com",
  projectId: "axis-stats",
  storageBucket: "axis-stats.appspot.com",
  messagingSenderId: "102831339140",
  appId: "1:102831339140:web:cf6502bea6284c7039b4d1",
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/" />
      <Players path="players" />
      <Player path="player/:id:" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
