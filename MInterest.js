const MInterest = ({ interests }) => {
  return (
    <div className="about interest">
      <h2 className="title2">Interests</h2>
      <ul>
        {interests.map((interest) => (
          <li key={interest.Icon}>
            <i className={"fa fa-" + interest.Icon} aria-hidden="true"></i>{" "}
            {interest.Text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MInterest;
