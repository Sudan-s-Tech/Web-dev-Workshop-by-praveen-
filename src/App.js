import Header from "./components/Header";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Contactme from "./components/Contactme";
import Config from "./config.json";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <table>
          <tbody>
            <Intro Data={Config.Intro} DataSocial={Config.Social} />
            <Skills Data={Config.Skills} />
            <Work Data={Config.Work} />
            <Contactme />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
