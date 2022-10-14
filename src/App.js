import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Project } from "./components/project/Project";
import { Qualification } from "./components/qualification/Qualification";
import { Skill } from "./components/skill/Skill";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skill />
        {/* <Qualification /> */}
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
