import React from "react";
import Navbar from "../components/Navbar";
import LayerMovie from "../components/LayerMovie";
import ListMovie from "../components/ListMovie";
import Footer from "../components/Footer";
import FormHome from "../components/FormHome";
import UpcomingMovie from "../components/UpcomingMovie";

function Home() {
  return (
    <div>
      <Navbar />
      <LayerMovie />
      <ListMovie />
      <UpcomingMovie />
      <FormHome />
      <Footer />
    </div>
  );
}

export default Home;
