import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥝": "kiwi",
  "🍇": "grapes",
  "🍈": "melon",
  "🍉": "watermelon",
  "🍊": "tangerine",
  "🍋": "lemon",
  "🍌": "banana",
  "🍍": "pineapple",
  "🥭": "mango",
  "🍎": "apple",
  "🍏": "green apple",
  "🍐": "pear",
  "🍒": "cherry",
  "🍓": "strawberry",
  "🥥": "coconut",
  "": ""
};

var emojis = Object.keys(emojiDictionary);

//styles
var containerCenter = { "max-width": "500px", margin: "auto" };
var navigation = {
  margin: "0 auto 1.25rem auto ",
  boxShadow: "0 1px 10px rgba(146,161,176,.15)",
  padding: "1.25rem 2rem 1.25rem 2rem",
  maxWidth: "900px",
  borderBottomLeftRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  background: "#DB2777",
  color: "white"
};
var navBrand = { "text-align": "left", "font-size": "1.1rem" };

var footer = {
  backgroundColor: "#DB2777",
  padding: "2.85rem",
  textAlign: "center",
  color: "white",
  borderTopRightRadius: "1rem",
  boxShadow: "0 1px 25px #E5E7EB",
  margin: "3rem 0 0 0"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " We don't know what this emoji means 😔";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav style={navigation}>
        <div style={navBrand}>fruitEmojis</div>
      </nav>
      <div style={containerCenter}>
        <h1>
          Fruit Emoji
          <div
            style={{
              color: "#DB2777",
              marginLeft: "0.5rem",
              fontWeight: "500"
            }}
          >
            Interpreter
          </div>
        </h1>
        <input
          style={{
            border: "none",
            boxShadow: "0 1px 25px #E5E7EB",
            padding: "1rem 2rem 1rem 2rem",
            fontSize: "1rem",
            margin: "1rem",
            borderRadius: "0.5rem"
          }}
          onChange={emojiInputHandler}
          placeholder="Enter emoji here"
        ></input>
        <h2>{meaning}</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)"
          }}
        >
          {emojis.map((emoji) => {
            return (
              <span
                style={{
                  fontSize: "2.5rem",
                  padding: "1rem",
                  margin: "0.5rem",
                  cursor: "pointer",
                  borderRadius: "1rem",
                  boxShadow: "0 1px 25px #E5E7EB"
                }}
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
      <footer style={footer}>An apple a day keeps the doctor away !</footer>
    </div>
  );
}
