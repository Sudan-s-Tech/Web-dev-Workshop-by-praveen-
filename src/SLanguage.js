const SLanguage = ({ Language }) => {
  return (
    <div className="contactInfo language">
      <h2 className="title2">Languages</h2>
      <br/>
      <ul>
        {Language.map((info) => (
          <li>
            <span className="text">{info.Name}</span>
            <span className="percent">
              <div style={{ width: info.proficiency + "%" }}></div>
            </span>
          </li>
        ))}
      </ul>
      <br/>
    </div>
  );
};

export default SLanguage;
