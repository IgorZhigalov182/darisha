import '../src/styles/reset.css';
import '../src/styles/App.css';
import Navbar from './components/header/Navbar';
import About from './layouts/about/About';
import Contact from './layouts/contact/Contact';
import Cover from './layouts/cover/Cover';
import Works from './layouts/works/Works';

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
