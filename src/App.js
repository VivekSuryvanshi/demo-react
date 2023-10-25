import "./App.css";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home";
import GoToTop from "./components/GoToTop/GoToTop";
import Chemicals from "./pages/Products/Chemicals/Chemicals";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import AgroCommodities from "./pages/Products/AgroCommodities/AgroCommodities";
// import Products from "./pages/Products/Products";
import EdibleNonEdibleOil from "./pages/Products/EdibleNonEdibleOil/EdibleNonEdibleOil";
// import PetroleumProducts from "./pages/Products/PetroleumProducts/PetroleumProducts";
// import CattlefeedFertilizers from "./pages/Products/CattlefeedFertilizers/CattlefeedFertilizers";
// import BioFuels from "./pages/Products/BioFuels/BioFuels";
// import MineralsOres from "./pages/Products/MineralsOres/MineralsOres";
// import Metals from "./pages/Products/Metals/Metals";
// import BuildingMaterials from "./pages/Products/BuildingMaterials/BuildingMaterials";
import Services from "./pages/Servicess/Services";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/PageNotFound/NotFound";


function App() {
  return (
      // <BrowserRouter>
      //  <Header />
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/about" element={<About />} />
      //     <Route path="/products" element={<Products />}>
      //       <Route path="agro-commodities" element={<AgroCommodities />} />
      //       <Route
      //         path="edible-non-edible-oil"
      //         element={<EdibleNonEdibleOil />}
      //       />
      //       <Route path="chemicals" element={<Chemicals />} />
      //       <Route path="petroleum-products" element={<PetroleumProducts />} />
      //       <Route
      //         path="cattlefeed-fertilizers"
      //         element={<CattlefeedFertilizers />}
      //       />
      //       <Route path="bio-fuels" element={<BioFuels />} />
      //       <Route path="minerals-ores" element={<MineralsOres />} />
      //       <Route path="metals" element={<Metals />} />
      //       <Route path="building-materials" element={<BuildingMaterials />} />
      //     </Route>
      //     <Route path="/services" element={<Services />} />
      //     <Route path="/contact" element={<Contact />} />
      //     <Route path="*" element={<NotFound />} />
      //   </Routes>
      //   <GoToTop />
      // </BrowserRouter>
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/AgroCommodities" element={<AgroCommodities />} />
          <Route path="/product/EdibleNonEdibleOil" element={<EdibleNonEdibleOil />} />
          <Route path="/chemicals" element={<Chemicals />}/>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        <GoToTop />
      </BrowserRouter>
  );
}

export default App;
