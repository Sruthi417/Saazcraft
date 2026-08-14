import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Nav"
import Motive from "../components/Motive/Motive"
import Features from "../components/Feature/Feature"
import {Reviews} from "../components/Review/Review"
import Tools from "../components/Tools/Tools";
import Pricing from "../components/Pricing/Pricing";
import Partner from "../components/Partners/Partner";

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
     
    </main>
  )
}

export default page;