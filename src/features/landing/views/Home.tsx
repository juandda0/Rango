import Benefits from "../components/Benefits";
import Community from "../components/Community";
import Expansion from "../components/Expansion";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import PreRegister from "../components/PreRegister";
import Rankings from "../components/Rankings";
import WhatItIs from "../components/WhatIsIt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <WhatItIs />
      <HowItWorks />
      <Rankings />
      <Community />
      <Benefits />
      <Expansion />
      <PreRegister />
      <Footer />
    </main>
  );
}
