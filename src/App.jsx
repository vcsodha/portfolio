import Background from "./components/Background"
import TopNav from "./components/TopNav"
import ScrollProgress from "./components/ScrollProgress"

import Intro from "./components/sections/Intro"
import WhatIBuild from "./components/sections/WhatIBuild"
import ProjectMoments from "./components/sections/ProjectMoments"
import Skills from "./components/sections/Skills"
import Education from "./components/sections/Education"   
import Experience from "./components/sections/Experience"
import Contact from "./components/sections/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative">
      <Background />
      <ScrollProgress />
      <TopNav />
      <Intro />
      <WhatIBuild />
      <ProjectMoments />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
