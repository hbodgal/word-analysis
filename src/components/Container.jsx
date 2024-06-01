import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

export default function Container() {

  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    numberOfCharacters: text.length
  }

  return (
  <main className="container">
    <TextArea text={ text } setText={setText} />
    <Stats stats={stats}/>
  </main>
  )
}
