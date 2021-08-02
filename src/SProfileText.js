const SProfileText = ({ ProfileInfo }) => {
  return (
    <div className="profileText">
      <div className="imgBx">
        <img className="photo" alt="pic" src={ProfileInfo.Image} />
      </div>
      <br />
      <div>
      <h1 className="pname">
        {ProfileInfo.Name} <br />
        <span className="prole"> {ProfileInfo.Role}</span>{" "}
      </h1>
      </div>
    </div>
  );
};

export default SProfileText;
