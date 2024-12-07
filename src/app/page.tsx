import Image from "next/image";
import { Topheader } from "./Components/Topheader";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import Pfeatured1 from "./Components/Pfeatured1";
import { Featured } from "./Components/Featured";
import { Category } from "./Components/Category";
import { NewArrival } from "./Components/NewArrival";

export default function Home() {
  return (<div>
<Navbar />
<Topheader />
<Hero />
<Featured />
<Category />
<NewArrival />

  </div>)
}
    