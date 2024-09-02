import Image from "next/image";
import Navbar from "@/components/Navbar";
import First from "@/components/First";
import Mainbar from "@/components/Mainbar";
import Second from "@/components/Second";

export default function Home() {
  return (
    <main className="bg-[#E2DFD0] flex flex-col">
      <Navbar/>
      <First/>
      <Mainbar/>
      <Second/>

    </main>
  );
}
