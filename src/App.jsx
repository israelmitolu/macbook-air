import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScrolling from "./components/SmoothScrolling";

const App = () => {
  return (
    <SmoothScrolling>
      <main className="bg-black overflow-y-auto">
        <Navbar />
        <Footer />
      </main>
    </SmoothScrolling>
  );
};

export default App;
