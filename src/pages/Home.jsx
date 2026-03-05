import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TrackRecord from '../components/sections/TrackRecord';
import Journey from '../components/sections/Journey';
import Programs from '../components/sections/Programs';
import CalorieCalculatorPreview from '../components/sections/CalorieCalculatorPreview';
import Newsletter from '../components/sections/Newsletter';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TrackRecord />
      <Journey />
      <Programs />
      <CalorieCalculatorPreview />
      <Newsletter />
      <FAQ />
    </>
  );
}
