import { useLayoutEffect } from 'react';
import '../src/styles/reset.css';
import '../src/styles/App.css';
import Navbar from './components/header/Navbar';
import About from './layouts/about/About';
import Contact from './layouts/contact/Contact';
import Home from './layouts/home/Home.jsx';
import Gallery from './layouts/gallery/Gallery';

function App() {
  useLayoutEffect(() => {
    const loader_wrap = document.querySelector('.loader_wrap');
    const loader = document.querySelector('.loader');

    if (loader && loader_wrap) {
      loader.style.display = 'none';
      loader_wrap.style.display = 'none';
    }
  }, []);

  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
