import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import Stats from "../app/components/Stats";
import Features from "../app/components/Features";
import Collab from "../app/components/Collab";
import Contact from "./components/Contact";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div style={{ background: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.68) 32.29%, rgba(193, 150, 255, 0.35) 54.17%, rgba(255, 255, 255, 0.25) 74.48%, rgba(233, 217, 255, 0.12) 100%)" }}>
        <Stats />
        <Features />
        <Collab />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
