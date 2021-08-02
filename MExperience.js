const MExperience = ({ expDetails }) => {
  return (
    <div className="about experience-sec">
      <h2 className="title2">Experience</h2>
      {expDetails.map((detail) => (
        <div className="box">
          <div className="year_company">
            <h5>{detail.duration}</h5>
            <h5>{detail.company_Name}</h5>
          </div>
          <div className="text">
            <h4>{detail.role}</h4>
            <p>{detail.role_Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MExperience;
