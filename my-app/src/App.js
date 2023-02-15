import Experience from "./components/Experience";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bg-auto bg-[url('/public/white_brick_3.jpg')] ">
      <NavBar windowWidth={windowWidth}/>
      <Header />
      <ProjectContainer />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
