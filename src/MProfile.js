const MProfile = ({ Profile }) => {
  return (
    <div className="about profile">
      <h2 className="title2">Profile</h2>
      <br/>
      <p>
        {Profile.Para1}
        <br /> <br />
        {Profile.Para2}
      </p>
      <br/>
    </div>
  );
};

export default MProfile;
