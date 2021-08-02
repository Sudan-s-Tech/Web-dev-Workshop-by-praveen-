const SAccomplishments = ({ Accomplishments }) => {
  return (
    <div className="contactInfo education">
      <h2 className="title2">Accomplishments</h2>
      <br/>
      <ul>
        {Accomplishments.map((info) => (
          <div>
            <p className="title-text">{info.title}</p>
            <p className="role">Role : {info.role}</p>
            <p className="org">{info.Org}</p>
            <br />
          </div>
        ))}
      </ul>
      <br/>
    </div>
  );
};

export default SAccomplishments;
