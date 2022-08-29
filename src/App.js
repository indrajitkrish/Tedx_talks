import React, { useState } from "react";
import "./styles.css";

const talks = {
  Education: [
    {
      name: "How education helped me rewrite my life",
      by: "Ashweetha Shetty • TEDWomen 2018",
      rating: "3.5/5",
      link:
        "https://www.ted.com/talks/ashweetha_shetty_how_education_helped_me_rewrite_my_life?language=en"
    },
    {
      name: "Broken English: Every Indian Kid's Ordeal",
      by: " Esha Manwani • TEDxHLCC",
      rating: "3.3/5",
      link:
        "https://www.ted.com/talks/esha_manwani_broken_english_every_indian_kid_s_ordeal"
    },
    {
      name: "A New 3Rs for Education",
      by: "Jose Bowen • TEDxSMU",
      rating: "3.8/5",
      link: "https://www.ted.com/talks/jose_bowen_a_new_3rs_for_education"
    },
    {
      name: "Creative ways to get kids to thrive in school",
      by: "Olympia Della Flora • TED Salon",
      rating: "4/5",
      link:
        "https://www.ted.com/talks/olympia_della_flora_creative_ways_to_get_kids_to_thrive_in_school?language=en"
    }
  ],
  Agriculture: [
    {
      name: "Food security",
      by: "Mr. Nammalvar at TEDxIIMTrichy",
      rating: "4.5/5",
      link: "https://www.youtube.com/watch?v=vt_c69ii4vI"
    },
    {
      name: "Without farmers, you'd be hungry, naked and sober",
      by: "Eric Sannerud • TEDxStCloud",
      rating: "3.9/5",
      link:
        "https://www.ted.com/talks/eric_sannerud_without_farmers_you_d_be_hungry_naked_and_sober_apr_2020?language=en"
    },
    {
      name: "Paper beats plastic? How to rethink environmental folklore",
      by: "Leyla Acaroglu • TED2013",
      rating: "4.2/5",
      link:
        "https://www.ted.com/talks/leyla_acaroglu_paper_beats_plastic_how_to_rethink_environmental_folklore"
    }
  ],
  Actors: [
    {
      name: "Thoughts on humanity, fame and love",
      by: "Shah Rukh Khan • TED2017",
      rating: "4.7/5",
      link:
        "https://www.ted.com/talks/shah_rukh_khan_thoughts_on_humanity_fame_and_love?language=en"
    },
    {
      name: "the Climate Summit for Local Leaders",
      by: "Leonardo DiCaprio",
      rating: "4.5/5",
      link: "https://www.youtube.com/watch?v=lEdRbi0IImA"
    },
    {
      name: "A one-woman global village",
      by: "Sarah Jones • TED2009",
      rating: "4.0/5",
      link: "https://www.ted.com/talks/sarah_jones_a_one_woman_global_village"
    }
  ],
  Innovation: [
    {
      name: "A future worth getting excited about",
      by: "Elon Musk • TED2022",
      rating: "4.1/5",
      link:
        "https://www.ted.com/talks/elon_musk_a_future_worth_getting_excited_about?language=en"
    },
    {
      name: "The art of innovation",
      by: "Guy Kawasaki | TEDxBerkeley",
      rating: "3.6/5",
      link: "https://www.youtube.com/watch?v=Mtjatz9r-Vc"
    },
    {
      name: "Questioning the universe",
      by: "Stephen Hawking • TED2008",
      rating: "3.9/5",
      link: "https://www.ted.com/talks/stephen_hawking_questioning_the_universe"
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
                  fontSize: "1rem",
                  paddingTop: "0.3rem",
                  paddingLeft: "0.5rem"
                }}
              >
                <span>⭐</span>
                {speech.rating}
              </div>
              <div
                style={{
                  fontSize: "1 rem",
                  paddingTop: "0.3rem",
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
