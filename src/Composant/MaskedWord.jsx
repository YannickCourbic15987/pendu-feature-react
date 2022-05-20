import React, { Fragment } from "react";

function MaskedWord(props) {
  const Crypted = props.mask.split("");

  return (
    <div>
      {" "}
      {Crypted.map((element, index) => {
        return <Fragment key={index}>{element}</Fragment>;
      })}
    </div>
  );
}

export default MaskedWord;
