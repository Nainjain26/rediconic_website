import Approach from "@/Components/Approach";
import Cards from "@/Components/Cards";
import Clients from "@/Components/Clients";
import { navItems } from "@/Components/data";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import Logo from "@/Components/Logo";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Logo/>
        <Experience />
      
        {/* <Approach /> */}
        <Cards/>
        <Footer/>
      </div>
    </main>
  );
}
