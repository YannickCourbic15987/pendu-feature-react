import React, { useState } from "react";
import ToucheDeClavier from "./ToucheDeClavier";
import MaskedWord from "./MaskedWord";
function Clavier() {
  const word = [
    "composant",
    "erreur",
    "thinkreact",
    "bloc",
    "usestate",
    "useref",
  ];
  let [wordToFind, setWordToFind] = useState(
    word[Math.ceil(Math.random() * word.length - 1)]
  );
  const lettres = "azertyuiopqsdfghjklmwxcvbn".split("");

  return (
    <div>
      Clavier
      <ToucheDeClavier lettres={lettres} word={wordToFind} />
      <MaskedWord mask={wordToFind} />
    </div>
  );
}

export default Clavier;
