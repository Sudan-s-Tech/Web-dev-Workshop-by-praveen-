const SProfileText = ({ Profile }) => {
  return (
    <div className="profileText">
      <div className="imgBx">
        <img className="photo" src={Profile.Image} alt={Profile.Name} />
      </div>
      <br />
      <h2>
        {Profile.Name}
        <br />
        <span>{Profile.Role}</span>
      </h2>
    </div>
  );
};

export default SProfileText;
