import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScrolling from "./components/SmoothScrolling";
import StickyNav from "./components/StickyNav";

const App = () => {
  return (
    <SmoothScrolling>
      <main className="bg-white bg-opacity-80 overflow-y-auto">
        <Navbar />
        <StickyNav />
        <Footer />
      </main>
    </SmoothScrolling>
  );
};

export default App;
