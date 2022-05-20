import React, { Fragment } from "react";
import BoutonContains from "./BoutonContains";

function ToucheDeClavier(props) {
  console.log(props.word);
  const handlecheck = (e) => {
    console.log(e.target.textContent);

    let contains = e.target.textContent;
    let tabwordfind = props.word.split("");

    for (let i = 0; i < props.word.length; i++) {
      if (tabwordfind[i] === contains) {
        console.log("oui ça marche maintenant , je suis ému ");
      }
    }
  };
  return (
    <div>
      {props.lettres.map((letter, index) => {
        return (
          <Fragment key={index}>
            <BoutonContains btn={letter} clickprops={handlecheck} />
          </Fragment>
        );
      })}
    </div>
  );
}

export default ToucheDeClavier;
