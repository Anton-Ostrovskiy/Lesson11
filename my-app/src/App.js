import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Ideas from "./components/Ideas/Ideas";
import Provide from "./components/Provide/Provide";
import RoadMap from "./components/RoadMap/RoadMap";


function App() {
  return (
    <div className="App">
      <Header/>
      <Ideas/>
      <AboutUs/>
      <Provide/>
      <RoadMap/>
    </div>
  );
}

export default App;
