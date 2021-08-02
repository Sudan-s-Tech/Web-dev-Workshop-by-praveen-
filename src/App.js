import "./styles.css";
import Sidebar from "./sidebar";
import Config from "./config.json";
import Main from "./main";
import Header from "./header";
const App = () => (
 <div className="container"><Header Data={Config.Sidebar}/>
  <div className="inner-container">
    <Sidebar Data={Config.Sidebar} />
    <Main Data={Config.Main} />
  </div>
  </div> 
);
export default App;
