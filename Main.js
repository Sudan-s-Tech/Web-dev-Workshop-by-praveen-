import MProfile from "./MProfile";
import MExperience from "./MExperience";
import MSkills from "./MSkills";
import MInterest from "./MInterest";

const Main = ({ Data }) => {
  const { aboutYou, expDetails, skills, interests } = Data;
  return (
    <div className="right_Side">
      <MProfile aboutYou={aboutYou} />
      <MExperience expDetails={expDetails} />
      <MSkills skills={skills} />
      <MInterest interests={interests} />
    </div>
  );
};

export default Main;
