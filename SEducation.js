const SEducation = ({ Education }) => {
  return (
    <div className="contactInfo education">
      <h3 className="title">Education</h3>
      <ul>
        {Education.map((edu) => (
          <li key={edu.Years}>
            <h5>{edu.Years}</h5>
            <h4>{edu.Degree}</h4>
            <h4>{edu.Univ}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SEducation;
