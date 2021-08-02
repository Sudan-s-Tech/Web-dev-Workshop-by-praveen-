const MProjects = ({ Projects }) => {
  return (
    <div className="about projects">
      <h2 className="title2">Projects</h2>
      <br/>
      {Projects.map((info) => (
        <div className="box" key={info.Year}>
          <div className="year_company">
            <h5>{info.Year}</h5>
          </div>
          <div className="text">
            <h4>{info.Name}</h4>
            <p>{info.desc}</p>

            <br />
            <p>
              <a href={info.link} target="_blank" rel="noreferrer">
                {info.link}
              </a>
            </p>
          </div>
        </div>
      ))}
      <br/>
    </div>
  );
};

export default MProjects;
