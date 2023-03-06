import AboutUs from './components/AboutUs/AboutUs';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Review from './components/Review/Review';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Community />
      <AboutUs />
      <Review />
      <Footer />
    </main>
  );
}

export default App;
