import Hero from "./components/hero/hero";
import Programme from "./Programme/programe";
import AboutUniversity from "./about/page";
import Teachers from "./teachers/page";
import Contact from "./contact/page";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Programme/>
      <AboutUniversity/>
      <Teachers/>
      <Contact/>
    </div>
  )
}