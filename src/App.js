import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const enabledDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enable", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <BrowserRouter>
        <NavBar mode={mode} bdyClr={enabledDark} />
        <Alert alert={alert}/>
        <Routes>
          <Route
            exact
            path="/"
            element={<TextArea mode={mode} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
       <NavBar mode={mode} bdyClr={enabledDark} />
       <Alert alert={alert}/>
       <TextArea mode={mode} showAlert={showAlert} />

  
    </>
  );
}

export default App;
