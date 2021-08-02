import React from "react";
import Social from "./Social";

const Intro = ({ Data, DataSocial }) => {
  const { name, profession, gitusr, qualification, hobbies, lang } = Data;
  return (
    <tr>
      <td>
        <div className="author_content">
          <h1 className="title">{name}</h1>
          <p>
            Hello there! Before talking about qualifications and professional
            abilities, I would like to introduce myself.
          </p>
          <p>
            I am <em>{name}</em> and I am from India. Taking {profession} as a
            profession not only fulfils my pocket but also my heart because it
            has been my passion since my early teenage.
          </p>
          <p>
            I believe that people should do things in which they are good at or
            in which their heart lays.
          </p>
        </div>
        <div className="author_name">
          <img
            src={`https://github.com/${gitusr}.png?size=250`}
            style={{
              borderRadius: "200px",
              transform: "translate(-21%, -21%)",
            }}
            alt="avatar"
          />
        </div>
      </td>
      <td>
        <section className="works">
          <div>
            <em>Qualification:</em>
            <ul>
              {qualification.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>
          <div>
            <em>Hobbies:</em>
            <ul>
              <li>{hobbies}</li>
            </ul>
          </div>
          <div>
            <em>Languages:</em>

            {lang.map((lang) => (
              <ul>
                <li key={lang}>
                  {lang.name} - {lang.prcnt}%
                </li>
              </ul>
            ))}
          </div>
        </section>
        <Social Data={DataSocial} />
      </td>
    </tr>
  );
};

export default Intro;
