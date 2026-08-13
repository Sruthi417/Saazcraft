import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Nav"
import Motive from "../components/Motive/Motive"
import Features from "../components/Feature/Feature"
import {Reviews} from "../components/Review/Review"

const page = () => {
  return (
    <main>
       <Navbar/>
      <Hero />
      <Motive/>
      <Features/>
      <Reviews/>
     
    </main>
  )
}

export default page;