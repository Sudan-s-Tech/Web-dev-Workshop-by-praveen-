const MSkills = ({ skills }) => {
  return (
    <div className="about skills">
      <h2 className="title2">Professionals skills</h2>
      {skills.map((sk) => (
        <div className="box" key={sk.name}>
          <h4>{sk.skill}</h4>
          <div className="percent">
            <div style={{ width: sk.efficiency + "%" }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MSkills;
