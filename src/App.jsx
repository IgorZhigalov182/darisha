import '../src/styles/reset.css';
import '../src/styles/App.css';
import Navbar from './components/header/Navbar';
import About from './layouts/about/About';
import Contact from './layouts/contact/Contact';
import Cover from './layouts/home/Home';
import Works from './layouts/works/Works';

function App() {
  return (
    <>
      <Cover />
      <Navbar />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
