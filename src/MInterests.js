const MInterests = ({ Interests }) => {
  return (
    <div className="about interest">
      <h2 className="title2">Interests</h2>
      <br/>
      <ul>
        {Interests.map((info) => (
          <li>
            <i className={"fa fa-" + info.Icon} aria-hidden="true"></i>
            {info.text}
          </li>
        ))}
      </ul>
      <br/>
    </div>
  );
};

export default MInterests;
