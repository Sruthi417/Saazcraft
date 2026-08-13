import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Nav"
import Motive from "../components/Motive/Motive"
import Features from "../components/Feature/Feature"

const page = () => {
  return (
    <main>
       <Navbar/>
      <Hero />
      <Motive/>
      <Features/>
     
    </main>
  )
}

export default page;