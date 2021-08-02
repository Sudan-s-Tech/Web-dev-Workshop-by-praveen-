import Main from "./MainProfile/Main";
import Sidebar from "./Sidebar/Sidebar";
import Config from "./config.json";
import "./styles.css";

const App = () => (
  <div className="container">
    <Sidebar Data={Config.Sidebar} />
    <Main Data={Config.Main} />
  </div>
);
export default App;
