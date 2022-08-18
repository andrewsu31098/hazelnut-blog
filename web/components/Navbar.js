import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { IconContext } from "react-icons";
import { tabletQuery } from "../utilities/breakpoints.js";

import styles from "../styles/layout/Navbar.module.scss";

import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { useEffect } from "react";

const navPages = [
  { name: "Home", path: "/" },
  {
    name: "Blog",
    path: "#getStarted",
  },
  {
    name: "Newsletter",
    path: "/newsletter",
  },
];

function Navbar(props) {
  var isTablet = useMediaQuery({
    query: tabletQuery,
  });

  const navPageComponents = navPages.map(({ name, path }, index) => (
    <Link key={path + index} href={path}>
      <a>{name}</a>
    </Link>
  ));

  const navLinks = (
    <div className={styles.navLinks}>
      <div className={styles.navPages}>{navPageComponents}</div>

      <div className={styles.navIcons}>
        <a
          href="https://www.linkedin.com/in/andrew-s-a1a9a0159/"
          target="_blank"
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: 30, color: "white" }}
          >
            <>
              <AiOutlineLinkedin className={styles.reactIcon} />
            </>
          </IconContext.Provider>
        </a>
        <a href="https://github.com/andrewsu31098" target="_blank">
          <IconContext.Provider
            value={{ className: "shared-class", size: 30, color: "white" }}
          >
            <>
              <AiOutlineGithub className={styles.reactIcon} />
            </>
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.toolbar}></div>
      <nav className={styles.navbar}>
        <img src="/mini-hazelnut.png" className={styles.navbarLogo} />
        <div className={styles.navLinks}>{!isTablet ? navLinks : null}</div>
      </nav>
    </>
  );
}

export default Navbar;
