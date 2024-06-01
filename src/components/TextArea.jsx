import { useState } from "react";
import Warnings from "./Warnings";

export default function TextArea({text, setText}) {

    // const [showWarning, setShowWarning] = useState(false);
    const [warningText, setWarningText] = useState('');
    // // adding state for word count
    // const [numberOfCharacters, setNumberOfCharacters] = useState(0);
    // no need of seperate state. We can derive it from text length.

    const handleChange = (e) => {
        // this is controlled text area means value of the textarea is driven by react state.
        let newText = e.target.value;
        if (newText.includes("<script>")) {
            // alert("Not Allowed");
            setWarningText("No script tag allowed"); 
            // setShowWarning(true);
            newText = newText.replace("<script>", "");
        } else {
          setWarningText(""); 
        }
        setText(newText);
        // setNumberOfCharacters(newText.length);
    }
  return (
    <>
      <textarea 
        value={text}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"
        onChange={handleChange}
      />
      {/* { showWarning ? <Warnings warningText = {warningText} /> : null } */}
      {/* { warningText ? <Warnings warningText = {warningText} /> : null } */}
      <Warnings warningText = {warningText} />

    </>
  )
}
