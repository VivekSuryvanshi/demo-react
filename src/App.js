import { React, lazy, Suspense  } from "react";
import { Routes, Route, BrowserRouter,Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/GoToTop";
import Whatsapp from "./components/Whatsapp_icon/Whatsapp";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Services from "./pages/Servicess/Services";
// import Contact from "./pages/Contact/Contact";
// import AgroCommodities from "./pages/Products/AgroCommodities/AgroCommodities";
// import EdibleNonEdibleOil from "./pages/Products/EdibleNonEdibleOil/EdibleNonEdibleOil";
// import Chemicals from "./pages/Products/Chemicals/Chemicals";
// import PetroleumProducts from "./pages/Products/PetroleumProducts/PetroleumProducts";
// import CattlefeedFertilizers from "./pages/Products/CattlefeedFertilizers/CattlefeedFertilizers";
// import BioFuels from "./pages/Products/BioFuels/BioFuels";
// import MineralsOres from "./pages/Products/MineralsOres/MineralsOres";
// import Metals from "./pages/Products/Metals/Metals";
// import BuildingMaterials from "./pages/Products/BuildingMaterials/BuildingMaterials";
// import Products from "./pages/Products/Products";
import NotFound from "./pages/PageNotFound/NotFound";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Servicess/Services"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const AgroCommodities = lazy(() =>
  import("./pages/Products/AgroCommodities/AgroCommodities")
);
const EdibleNonEdibleOil = lazy(() =>
  import("./pages/Products/EdibleNonEdibleOil/EdibleNonEdibleOil")
);
const Chemicals = lazy(() => import("./pages/Products/Chemicals/Chemicals"));
const PetroleumProducts = lazy(() =>
  import("./pages/Products/PetroleumProducts/PetroleumProducts")
);
const CattlefeedFertilizers = lazy(() =>
  import("./pages/Products/CattlefeedFertilizers/CattlefeedFertilizers")
);
const BioFuels = lazy(() => import("./pages/Products/BioFuels/BioFuels"));
const MineralsOres = lazy(() =>
  import("./pages/Products/MineralsOres/MineralsOres")
);
const Metals = lazy(() => import("./pages/Products/Metals/Metals"));
const BuildingMaterials = lazy(() =>
  import("./pages/Products/BuildingMaterials/BuildingMaterials")
);
const Terms = lazy(() => import("./pages/PrivacyAndTerms/Terms"));
const Privacy = lazy(() => import("./pages/PrivacyAndTerms/Privacy"));

function App() {
  // useEffect(() => {
  //   document.title = "Bhagirath BVM Grand (HK)";  
  // }, []);
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1 className="text-center p-5">Application is Loading please wait...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route
            path="/product/AgroCommodities"
            element={<AgroCommodities />}
          />
          <Route
            path="/product/EdibleNonEdibleOil"
            element={<EdibleNonEdibleOil />}
          />
          <Route
            path="/product/PetroleumProducts"
            element={<PetroleumProducts />}
          />
          <Route
            path="/product/CattlefeedFertilizers"
            element={<CattlefeedFertilizers />}
          />
          <Route path="/product/BioFuels" element={<BioFuels />} />
          <Route path="/product/MineralsOres" element={<MineralsOres />} />
          <Route path="/product/Metals" element={<Metals />} />
          <Route
            path="/product/BuildingMaterials"
            element={<BuildingMaterials />}
          />
          <Route path="/chemicals" element={<Chemicals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <CookieConsent debug={true} location="top" buttonText="I Accept" buttonStyle={{color:"white", backgroundColor:"rgb(92, 165, 149)"}} style={{backgroundColor:"#000",fontSize:"20px",textAlign:"center",zIndex:"10000"}}>This site uses Cookies. See our <Link to="/privacy#PrivacyAndPolicy" style={{color:"rgb(92, 165, 149)"}}>Privacy Policy</Link> for more details.</CookieConsent>
      <Footer />
      <Whatsapp />
      <GoToTop />
    </BrowserRouter>
  );
}

export default App;
