import React, { useState } from "react";
import Button from "../common/Button";

export default function CreateDate({ onCreate }) {
  // React hooks
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    onCreate(inputValue);
  };

  return (
    <form>
      <input value={inputValue} onInput={onInputChange} />
      <Button onClick={onSubmit} value={"Napravi ovca"} />
    </form>
  );
}
