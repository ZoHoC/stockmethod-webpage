import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(prevToggle => !prevToggle);
  }

  function handleClickHome() {
    setToggle(false);
  }

  return (
    <div className="App">
      <Header toggle={toggle} handleClick={handleClick} handleClickHome={handleClickHome} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
