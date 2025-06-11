import { useState } from "react";
import img from "../assets/7xm682a0c6d10433.jpg";

import CloseFeatured from "../components/CloseFeatured";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import OpenFeatured from "../components/OpenFeatured";

export default function HomePage() {
  const [hidden, sethidden] = useState(false);

  return (
    <div
      className="h-screen bg-cover text-white flex flex-row "
      style={{ backgroundImage: `url(${img})` }}
    >
      <Navbar />
      {!hidden && <Featured />}
      {!hidden && <CloseFeatured sethidden={sethidden} />}
      {hidden && <OpenFeatured  sethidden={sethidden}/>}
    </div>
  );
}
