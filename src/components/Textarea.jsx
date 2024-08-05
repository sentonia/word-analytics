import { useState } from "react";
import Warning from "./Warning";
import PropTypes from "prop-types";
import { ILLEGAL_WORDS } from "../lib/constants";

const findIllegalWord = (text) => {
  return ILLEGAL_WORDS.find((illegalWord) => text.includes(illegalWord.word));
};

export default function Textarea({ text, setText }) {
  const [warningMessage, setWarningMessage] = useState("");

  const handleChangeText = (e) => {
    let newText = e.target.value;
    let foundIllegalWord = findIllegalWord(newText);
    if (foundIllegalWord) {
      setWarningMessage(foundIllegalWord.message);
      newText = newText.replace(foundIllegalWord.word, "");
    } else {
      setWarningMessage("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        name="textarea"
        value={text}
        onChange={handleChangeText}
        placeholder="Enter your text"
        spellCheck={false}
      />
      <Warning message={warningMessage} />
    </div>
  );
}

Textarea.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};
