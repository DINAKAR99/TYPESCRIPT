import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./Person";
import { MutableRef } from "./components/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Toast } from "./components/Toast";

function App() {
  return <Toast position="cenet" />;
}

export default App;
