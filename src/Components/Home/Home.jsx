import React from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      {/* this is banner section */}
      <Banner />

      {/* this is books section */}
      <Books />
    </div>
  );
};

export default Home;
