import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="wrapper homepage main-wrapper">
      <Nav />

      {/* <!-- Header --> */}
      <header className="main-head">
        <div className="inner home">
          <h1 id="announce">
            Find mental health professionals of colour in Tiotia:ke (Montreal)
          </h1>
          <a
            href="seeking-services.html"
            className="button purple clear-style"
            id="seek"
          >
            Seeking Services
          </a>
          <a
            href="offering-services.html"
            className="button purple clear-style"
            id="offer"
          >
            Offering Services
          </a>
          <a
            href="offering-services.html"
            className="button yellow clear-style"
            id="newsletter"
          >
            Join Our Newsletter
          </a>
        </div>
      </header>

      <Footer />
    </div>
  );
};

export default Home;
