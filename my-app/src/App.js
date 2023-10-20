import AboutUs from "./components/AboutUs/AboutUs";
import ButtonTop from "./components/ButtonTop/ButtonTop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Ideas from "./components/Ideas/Ideas";
import Projects from "./components/Projects/Projects";
import Provide from "./components/Provide/Provide";
import RoadMap from "./components/RoadMap/RoadMap";


function App() {
  return (
    <div className="App">
      <ButtonTop/>
      <Header/>
      <Ideas/>
      <AboutUs/>
      <Provide/>
      <RoadMap/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
