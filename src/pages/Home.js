import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => (
  <>
    <Hero>
      <Banner
        title="premium apartments"
        subtitle="deluxe rooms starting at 230&#163;"
      >
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
  </>
);

export default Home;
