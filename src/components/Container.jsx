import Statistics from "./Statistics";
import Textarea from "./Textarea";
import { useState } from "react";
import { INSTAGRAM_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const combinedStatData = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instaCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Statistics stats={combinedStatData} />
    </main>
  );
}
