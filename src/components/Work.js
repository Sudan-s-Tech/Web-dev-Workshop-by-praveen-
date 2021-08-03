import React from "react";

const Work = ({ Data }) => {
  return (
    <tr>
      <td id="MyWorks">
        <div className="author_content">
          <h1 className="title">My Projects</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <strong>Here are some of the projects I've worked on:</strong>
        </div>
      </td>
      <td>
        <section className="works">
          <div>
            <em>Projects:</em>

            {Data.map(({ name, descr }, index) => (
              <ul key={name}>
                <li>
                  {name}
                  <ul>
                    <li>{descr}</li>
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        </section>
      </td>
    </tr>
  );
};

export default Work;
