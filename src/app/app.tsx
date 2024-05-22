import styles from './app.module.scss';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Tokenomics } from './components/tokenomics/tokenomics';
import { Roadmap } from './components/roadmap/roadmap';
import { Footer } from './components/footer/footer';
import footerSrc from './assets/footer.jpg';
import { useRef } from 'react';

export function App() {
  return (
    <div className={styles['container']}>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div className={styles['bg-gradient']}>
        <div id="about">
          <About />
        </div>
        <div id="tokenomics">
          <Tokenomics />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <Footer />
      </div>
      <img src={footerSrc} alt="" />
    </div>
  );
}

export default App;
