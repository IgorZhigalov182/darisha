import '../src/styles/reset.css';
import '../src/styles/App.css';
import Navbar from './components/header/Navbar';
import About from './layouts/about/About';
import Contact from './layouts/contact/Contact';
import Cover from './layouts/home/Home';
import Gallery from './layouts/gallery/Gallery';

function App() {
  return (
    <>
      <Cover />
      <Navbar />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
