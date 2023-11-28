import { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import '../src/styles/reset.css';
import '../src/styles/App.css';
import Navbar from './components/header/Navbar';
import About from './layouts/about/About';
import Contact from './layouts/contact/Contact';
import Home from './layouts/home/Home';
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

  const LazyGallery = lazy(() => import('../src/layouts/gallery/Gallery.jsx'));
  const LazyContact = lazy(() => import('../src/layouts/contact/Contact.jsx'));

  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Suspense fallback={<h1>loading...</h1>}>
        <LazyGallery />
      </Suspense>
      <Suspense fallback={<h1>loading...</h1>}>
        <LazyContact />
      </Suspense>
      {/* <Gallery /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;
