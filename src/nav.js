import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "./logo-net.png";
import user from "./user.png";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "black"}`}>
      <img className="netflix-logo images" src={logo} alt="" />
      <img className="user images" src={user} alt="" />
    </nav>
  );
}

export default Nav;
