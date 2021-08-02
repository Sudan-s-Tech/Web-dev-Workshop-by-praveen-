import React from "react";

const Skills = ({ Data }) => {
  return (
    <tr id="Skills">
      <td>
        <div className="author_content">
          <h1 className="title">My Skills</h1>
          <p>
            My education background and my passion towards coding allowed me to
            thrive in this career
          </p>
          <p>
            I aquired a quite good knowledge in this domain and have working
            experience on
            <em> Linux</em> platform as well.
          </p>
          <p>
            I always love to learn more things, and prefer to work in a team.
          </p>
          <strong>Thank You.</strong>
        </div>
      </td>
      <td>
        <section>
          <em>Web developer & designer</em>
          <div className="languages">
            {Data.map(({ lang, prcnt }, index) => (
              <div key={`lan${index}`}>
                <label htmlFor={lang}>{lang}</label>
                <div className="progress">
                  <div
                    className="progress-value progress2"
                    style={{ width: `${prcnt}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </td>
    </tr>
  );
};

export default Skills;
