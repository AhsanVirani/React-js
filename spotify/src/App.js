import React, { useContext } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return <React.Fragment>{ctx.token ? <Player /> : <Login />}</React.Fragment>;
}

export default App;
