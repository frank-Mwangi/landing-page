import { Navbar, Hero, About, TeamProfile, Features, Modal } from "./component";
import { useState } from "react";
function App() {
  const [ isSideOpen, setIsSidebarOpen ] = useState(false)
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  return (
    <main>
      { isSideOpen && <Modal closeSidebar={closeSidebar} /> }
      <Navbar openSidebar={openSidebar} />
      <Hero />
      <About />
      <Features />
      <TeamProfile />
    </main>
  );
}

export default App;
