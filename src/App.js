import "./App.css";
import Home from "./Components/Home/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/About/About/About";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import Mission from "./Components/Mission/Mission";
import OurPolicy from "./Components/OurPolicy/OurPolicy";
import RoSystem from "./Components/RoSystem/RoSystem/RoSystem";
import MultiPage from "./Components/MultiPage/MultiPage";
import WaterDis from "./Components/WaterDis/WaterDis";
import ShownFilter from "./Components/ShownFilters/ShownFilter";
import Cooler from "./Components/Cooler/Cooler";
import MultimediaFilter from "./Components/MultimediaFilter/MultimediaFilter";
import ActivateCarbon from "./Components/ActivateCarbon/ActivateCarbon";
import Softeners from "./Components/Softeners/Softeners";
import BagFilters from "./Components/BagFilters/BagFilters";
import Micro from "./Components/Micro/Micro";
import Strelizers from "./Components/Strelizers/Strelizers";
import Csi from "./Components/Csi/Csi";
import DmSystem from "./Components/DmSystem/DmSystem";
import GreayWater from "./Components/GreayWater/GreayWater";
import Sewage from "./Components/Sewage/Sewage";
import ChildWater from "./Components/ChildWater/ChildWater";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Accosories from "./Components/Accosories/Accosories";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/ourpolicy" element={<OurPolicy />} />
        <Route path="/rosystem" element={<RoSystem />} />
        <Route path="/multipage" element={<MultiPage />} />
        <Route path="/dispenser" element={<WaterDis />} />
        <Route path="/shown" element={<ShownFilter />} />
        <Route path="/cooler" element={<Cooler />} />
        <Route path="/multifilter" element={<MultimediaFilter />} />
        <Route path="/activecarbon" element={<ActivateCarbon />} />
        <Route path="/softeners" element={<Softeners />} />
        <Route path="/bagfilters" element={<BagFilters />} />
        <Route path="/micro" element={<Micro />} />
        <Route path="/strelizers" element={<Strelizers />} />
        <Route path="/csi" element={<Csi />} />
        <Route path="/dmystem" element={<DmSystem />} />
        <Route path="/greaywater" element={<GreayWater />} />
        <Route path="/sewage" element={<Sewage />} />
        <Route path="/childwater" element={<ChildWater />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accosories" element={<Accosories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
