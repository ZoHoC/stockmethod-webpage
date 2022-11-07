import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(prevToggle => !prevToggle);
  }

  return (
    <div className="App">
      <Header toggle={toggle} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
