import SAccomplishments from "./SAccomplishments";
import SContactInfo from "./SContactInfo";
import SEducation from "./SEducation";
import SLanguage from "./SLanguage";
import MInterests from "./MInterests";

const Sidebar = ({ Data }) => {
  const {
    ProfileInfo,
    ContactInfo,
    Education,
    Language,
    Accomplishments,
    Interests
    
  } = Data;
  return (
    <div className="left_Side">
      <SContactInfo ContactInfo={ContactInfo} />
      <SEducation Education={Education} />
      <SAccomplishments Accomplishments={Accomplishments} />
      <SLanguage Language={Language} />
      <MInterests Interests={Interests} />
     
    </div>
  );
};
export default Sidebar;
