const MProfile = (aboutYou) => {
  return (
    <div className="right_Side">
      <div className="about profile-sec">
        <h2 className="title2">Profile</h2>
        <p>
          {aboutYou.descriptionPara1}
          <br />
          <br />
          {aboutYou.descriptionPara2}
        </p>
      </div>
    </div>
  );
};

export default MProfile;
