const SEducation = ({ Education }) => {
  return (
    <div className="contactInfo education">
      <h2 className="title2">Education</h2>
      <br/>
      <ul>
        {Education.map((info) => (
          <li key={info.Years}>
            <h5>{info.Years}</h5>
            <h4>{info.Degree}</h4>
            <h4>{info.Univ}</h4>
          </li>
        ))}
      </ul>
      <br/>
    </div>
  );
};

export default SEducation;
