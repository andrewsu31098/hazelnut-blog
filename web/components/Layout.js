// components/layout.js

import Navbar from "./Navbar.js";
import { slide as Menu } from "react-burger-menu";

import { useMediaQuery } from "react-responsive";

export default function Layout({ children }) {
  const sideBar = (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
  const isSmall = useMediaQuery({
    query: "(max-width: 700px)",
  });

  return (
    <>
      <div id="outer-container">
        {isSmall ? sideBar : null}
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
