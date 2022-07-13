import React, { useState } from "react";
import "./styles.css";

const talks = {
  Education: [
    {
      name: "How education helped me rewrite my life",
      by: "Ashweetha Shetty • TEDWomen 2018",
      link:
        "https://www.ted.com/talks/ashweetha_shetty_how_education_helped_me_rewrite_my_life?language=en"
    },
    {
      name: "Broken English: Every Indian Kid's Ordeal",
      by: " Esha Manwani • TEDxHLCC",
      link:
        "https://www.ted.com/talks/esha_manwani_broken_english_every_indian_kid_s_ordeal"
    }
  ],
  Agriculture: [
    {
      name: "Food security",
      by: "Mr. Nammalvar at TEDxIIMTrichy",
      link: "https://www.youtube.com/watch?v=vt_c69ii4vI"
    }
  ],
  Actors: [
    {
      name: "Thoughts on humanity, fame and love",
      by: "Shah Rukh Khan • TED2017",
      link:
        "https://www.ted.com/talks/shah_rukh_khan_thoughts_on_humanity_fame_and_love?language=en"
    }
  ],
  Innovation: [
    {
      name: "A future worth getting excited about",
      by: "Elon Musk • TED2022",
      link:
        "https://www.ted.com/talks/elon_musk_a_future_worth_getting_excited_about?language=en"
    }
  ]
};
var tedx = Object.keys(talks);
export default function App() {
  const [select, setGenre] = useState("Innovation");
  function selectHandler(speech) {
    setGenre(speech);
  }
  return (
    <div className="App">
      <h1>
        🗣️🎤<span style={{ color: "red" }}>Tedx</span> Talks{" "}
      </h1>
      <p>Check out the Tedx talks. Select a genre as you like</p>
      <div>
        {tedx.map((speech) => (
          <button onClick={() => selectHandler(speech)}>{speech}</button>
        ))}
      </div>
      <hr />
      <div style={{}}>
        <ul style={{ listStyleType: "none" }}>
          {talks[select].map((speech) => (
            <li
              key={speech.name}
              style={{
                border: "1px solid grey",
                marginLeft: "0rem",
                marginBottom: "1rem",
                width: "70%"
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  paddingTop: "1rem",
                  paddingLeft: "0.5rem"
                }}
              >
                {speech.name}
              </div>
              <div
                style={{
                  fontSize: "1 rem",
                  paddingLeft: "0.6rem"
                }}
              >
                <a
                  style={{
                    color: "red",
                    textDecoration: "none",
                    fontSize: "1 rem"
                  }}
                  href={speech.link}
                >
                  {speech.by}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
