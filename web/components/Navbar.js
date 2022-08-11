import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { IconContext } from "react-icons";

import styles from "../styles/layout/Navbar.module.scss";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineSearch,
} from "react-icons/ai";

const navPages = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

function Navbar(props) {
  const isSmall = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const navPageComponents = navPages.map(({ name, path }) => (
    <Link href={path}>
      <a>{name}</a>
    </Link>
  ));

  const navLinks = (
    <div className={styles.navLinks}>
      <div className={styles.navPages}>{navPageComponents}</div>

      <div className={styles.navIcons}>
        <a href="/">
          <IconContext.Provider
            value={{ className: "shared-class", size: 30, color: "white" }}
          >
            <>
              <AiOutlineLinkedin className={styles.reactIcon} />
            </>
          </IconContext.Provider>
        </a>
        <a href="/blog">
          <IconContext.Provider
            value={{ className: "shared-class", size: 30, color: "white" }}
          >
            <>
              <AiOutlineGithub className={styles.reactIcon} />
            </>
          </IconContext.Provider>
        </a>
        <a href="/about">
          <IconContext.Provider
            value={{ className: "shared-class", size: 30, color: "white" }}
          >
            <>
              <AiOutlineSearch className={styles.reactIcon} />
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
        <div className={styles.navLinks}>{!isSmall ? navLinks : null}</div>
      </nav>
    </>
  );
}

export default Navbar;
