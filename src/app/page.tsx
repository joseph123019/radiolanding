// pages/index.js
import Experience from '@app/components/Experience';
import Header from '@app/components/Header';
import Hero from '@app/components/Hero';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;
