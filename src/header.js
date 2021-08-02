
import SProfileText from "./SProfileText";

const Header = ({ Data }) => {
  const {
    ProfileInfo
  } = Data;
  return (
    <div>
      <SProfileText ProfileInfo={ProfileInfo} />
    </div>
  );
};
export default Header;
