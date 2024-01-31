import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Kanye from "./components/Kanye/kanye";
import './index.css';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Kanye/>

    </div>
  );
}

export default App;
