 
import { Navbar } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { Testimonials } from '../components/landing/Testimonials';
import { Contact } from '../components/landing/Contact';
import { Footer } from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}