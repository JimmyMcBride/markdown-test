import React, { useState } from "react";
import Editor from "for-editor";

export default function App() {
  const [value, setValue] = useState("");
  function handleChange(value) {
    setValue(value);
  }
  console.log(value);
  return <Editor language="en" value={value} onChange={handleChange} />;
}
