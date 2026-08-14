import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Nav"
import Motive from "../components/Motive/Motive"
import Features from "../components/Feature/Feature"
import {Reviews} from "../components/Review/Review"
import Tools from "../components/Tools/Tools";
import Pricing from "../components/Pricing/Pricing";
import Partner from "../components/Partners/Partner";
import Team from "../components/Team/Team";
import FAQ from "../components/Faq/Faq";
import Contact from "../components/Contact/Contact";

const page = () => {
  return (
    <main>
       <Navbar/>
      <Hero />
      <Motive/>
      <Features/>
      <Reviews/>
      <Tools/>
      <Pricing/>
      <Partner/>
      <Team/>
      <FAQ/>
      <Contact/>
     
    </main>
  )
}

export default page;