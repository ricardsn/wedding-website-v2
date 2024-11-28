import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header.component';
import Welcome from './components/Welcome/Welcome.component';
import Plan from './components/Plan/Plan.component';
import Footer from './components/Footer/Footer.component';
import Divider from './components/Divider/Divider.component';


function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animation');

    const handleScroll = () => {
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Wedding">
        <Header />
        <Divider />
        <Welcome />
        <Divider />
        <Plan />
        <Divider />
        <Footer />
    </div>
  );
}

export default App;
