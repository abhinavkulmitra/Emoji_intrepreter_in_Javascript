import React, { useState } from "react";
import "./styles.css";

const emojisDictionary = {
  "🐶": "barks",
  "🐱": "Meow",
  "🐭": "squeak and squeal",
  "🐰": "drum",
  "🐻": "growl",
  "🐯": "roar",
  "🐮": "moo",
  "🐸": "ribbit"
};

const emojiList = Object.keys(emojisDictionary);

export default function App() {
  const [userInput, setNewInput] = useState("");

  function typeInputHandler(event) {
    if (emojisDictionary[event.target.value])
      setNewInput(
        event.target.value + " : " + emojisDictionary[event.target.value]
      );
    else {
      setNewInput("This is unavailable in our dictionary.");
    }
  }

  function clickInputHandler(el) {
    setNewInput(el + " : " + emojisDictionary[el]);
  }

  return (
    <div className="App">
      <h1>Forest's Music</h1>

      <input onChange={typeInputHandler}></input>

      <h2>{userInput}</h2>

      {emojiList.map((item) => {
        return (
          <span key={item} onClick={() => clickInputHandler(item)}>
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
