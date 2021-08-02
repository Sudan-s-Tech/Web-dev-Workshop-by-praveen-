import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="nav" id="nav">
        <a href="#">HOME</a>
        <a href="#">ABOUT ME</a>
        <a href="#Skills">SKILLS</a>
        <a href="#MyWorks">MY WORKS</a>
        <a href="#ContactMe">CONTACT ME</a>
        <a href="#" className="active">
          DOWNLOAD CV <i className="fa fa-download"></i>
        </a>
        <a className="icon" id="icon">
          <i className="fa fa-bars"></i>
        </a>
      </nav>
    </header>
  );
};

export default Header;
