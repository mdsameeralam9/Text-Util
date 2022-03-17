import React, { useState } from "react";

export default function TextArea(props) {
  const [result, setResult] = useState("");

  // convert letter to upper case and lower case
  const clickHandler = () => {
    if (result !== result.toUpperCase()) {
      const u = result.toUpperCase();
      setResult(u);
      props.showAlert("Converted to Upper Case", "success");
    } else {
      const l = result.toLowerCase();
      setResult(l);
      props.showAlert("Converted to  Lower Case", "success");
    }
  };

  // clear the text field
  const clearHandler = () => {
    setResult("");
    props.showAlert("Text removed", "success");
  };

  // Capitalize case
  const capitaliz = () => {
    const txt = result
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setResult(txt);
    props.showAlert("Text Capitalized", "success");
  };

  // copy text
  const copyHandler = () => {
    let text = document.getElementById("myInput");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to ClipBoard", "success");
  };

  // remove extra spaces
  const removeExtraSpace = () => {
    let text = result.replace(/\s+/g, " ");
    setResult(text);
    props.showAlert("Extra Space removed", "success");
  };

  // sentence case
  const sentenceCase = () => {
    var n = result.split(".");
    var vfinal = "";
    for (let i = 0; i < n.length; i++) {
      var spaceput = "";
      var spaceCount = n[i].replace(/^(\s*).*$/, "$1").length;
      n[i] = n[i].replace(/^\s+/, "");
      var newstring = n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
      for (let j = 0; j < spaceCount; j++) spaceput = spaceput + " ";
      vfinal = vfinal + spaceput + newstring + ".";
    }
    vfinal = vfinal.substring(0, vfinal.length - 1);
    setResult(vfinal)
  }

  // change handler
  const changehandler = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className="container my-3">
      <div className="mb-3">
        <h1>Change The Text To UpperCase</h1>
        <textarea
          id="myInput"
          className="form-control"
          value={result}
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={changehandler}
        ></textarea>
      </div>
      <button type="button" className="btn btn-dark" onClick={clickHandler}>
        UpperCase & LowerCase
      </button>

      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={sentenceCase}
      >
        sentence Case
      </button>

      <button
        type="button"
        className="btn btn-secondary mx-3"
        onClick={capitaliz}
      >
        Capitalize Case
      </button>

      <button
        type="button"
        className="btn btn-success mx-3"
        onClick={copyHandler}
      >
        Copy Text
      </button>

      <button
        type="button"
        className="btn btn-info mx-3"
        onClick={removeExtraSpace}
      >
        Remove Extra Space
      </button>

      <button
        type="button"
        className="btn btn-warning mx-3"
        onClick={clickHandler}
      >
        Convert UpperCase
      </button>

      <button
        type="button"
        className="btn btn-danger mx-3"
        onClick={clearHandler}
      >
        clear All text
      </button>

      <div className="container my-3">
        <h1>Words and letter Counter</h1>
        <p>
          {result.split(" ").length === 1 ? 0 : result.split(" ").length - 1}{" "}
          and {result.length}
        </p>
        <h1>Preview</h1>
        <p>
          {result.length > 0
            ? result
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </div>
  );
}
