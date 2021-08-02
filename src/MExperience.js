const MExperience = ({ Experience }) => {
  return (
    <div className="about experience">
      <h2 className="title2">Experience</h2>
      <br/>
      {Experience.map((info) => (
        <div className="box" key={info.Year}>
          <div className="year_company">
            <h5>{info.Year}</h5>
            <h5>{info.Company}</h5>
          </div>
          <div className="text">
            <h4>{info.Position}</h4>
            <p>{info.desc}</p>
          </div>
        </div>
      ))}
      <br/>
    </div>
  );
};

export default MExperience;
