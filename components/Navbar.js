import Link from "next/link";
import { useState } from "react";
import style from "../styles/components/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
// Component
const Navbar = () => {
  // controlling the navbar
  const [show, setShow] = useState(false);
  function handleMenu() {
    setShow(!show);
  }
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src='assets/Ziyatech-sm.png' alt='ziyatech_logo' />
      </div>
      <div className={style.menu_btn} onClick={handleMenu}>
        <FontAwesomeIcon icon={show ? faTimes : faBars} />
      </div>
      <ul
        className={cx(
          style.nav_links_container,
          show ? style.show : style.hide
        )}
      >
        <li className={style.nav_links}>
          <Link href='/'>home</Link>
        </li>
        <li className={style.nav_links}>
          <a href='#services'>services</a>
        </li>
        <li className={style.nav_links}>
          <button>
            <a href='#contact'>contact</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
