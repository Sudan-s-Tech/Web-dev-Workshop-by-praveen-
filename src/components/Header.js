import React from "react";

const Header = () => {
  let count = 0;
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
        <a
          className="icon"
          id="icon"
          onClick={
            //NAVIGATION

            function opennav() {
              if (count === 0) {
                document.getElementById("nav").style.height = "260px";
                document.getElementById("icon").style.color = "#3399ff";
                document.getElementById("nav").style.borderRadius = "0px";
                count++;
              } else {
                document.getElementById("nav").style.height = "45px";
                document.getElementById("icon").style.color = "#000";
                document.getElementById("nav").style.borderRadius = "40px";
                count = 0;
              }
            }
          }
        >
          <i className="fa fa-bars"></i>
        </a>
      </nav>
    </header>
  );
};

export default Header;
