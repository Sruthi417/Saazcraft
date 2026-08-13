import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Nav"
import Motive from "../components/Motive/Motive"

const page = () => {
  return (
    <main>
       <Navbar/>
      <Hero />
      <Motive/>
     
    </main>
  )
}

export default page;