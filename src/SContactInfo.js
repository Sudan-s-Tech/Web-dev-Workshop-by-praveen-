const SContactInfo = ({ ContactInfo }) => {
  return (
    <div className="contactInfo">
      <h2 className="title2">Contact Info</h2>
      <br/>
      <ul>
        {ContactInfo.map((info) => (
          <li key={info.Icon}>
            <span className="icon">
              <i className={"fa fa-" + info.Icon} aria-hidden="true"></i>
            </span>
            <a
              href={info.href}
              target="_blank"
              rel="noreferrer"
              className="text"
            >
              <span>{info.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <br/>
    </div>
  );
};

export default SContactInfo;
