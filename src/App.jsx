import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScrolling from "./components/SmoothScrolling";
import StickyNav from "./components/StickyNav";
import Hero from "./sections/Hero";
import MagSafeColors from "./sections/MagSafeColors";
import Performance from "./sections/Performance";
import PortableDesign from "./sections/PortableDesign";
import Slider from "./sections/Slider";

const App = () => {
  return (
    <SmoothScrolling>
      <main className="bg-white bg-opacity-80 overflow-y-auto relative">
        <Navbar />
        <StickyNav />
        <Hero />
        <PortableDesign />
        <MagSafeColors />
        <Slider />
        <Performance />
        <Footer />
      </main>
    </SmoothScrolling>
  );
};

export default App;
