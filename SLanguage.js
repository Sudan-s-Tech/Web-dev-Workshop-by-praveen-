const SLanguage = ({ Languages }) => {
  return (
    <div className="contactInfo language">
      <h3 className="title">Languages</h3>
      <ul>
        {Languages.map((lang) => (
          <li key={lang.Name}>
            <span className="text">{lang.Name}</span>
            <span className="percent">
              <div style={{ width: lang.Mark + "%" }}></div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SLanguage;
