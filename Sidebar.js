import SContactInfo from "./SContactInfo";
import SEducation from "./SEducation";
import SLanguage from "./SLanguage";
import SProfileText from "./SProfileText";

const Sidebar = ({ Data }) => {
  const { Profile, ContactInfo, Education, Languages } = Data;
  return (
    <div className="left_Side">
      <SProfileText Profile={Profile} />
      <SContactInfo ContactInfo={ContactInfo} />
      <SEducation Education={Education} />
      <SLanguage Languages={Languages} />
    </div>
  );
};

export default Sidebar;
