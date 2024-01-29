import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>

    </div>
  );
}

export default App;
