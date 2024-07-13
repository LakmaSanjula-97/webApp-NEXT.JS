import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "",
  },
  {
    id: 2,
    title: "Service",
    url: "",
  },
  {
    id: 3,
    title: "Technology",
    url: "",
  },
  {
    id: 4,
    title: "Get",
    url: "",
  },
  {
    id: 5,
    title: "Contact",
    url: "",
  },
  {
    id: 6,
    title: "",
    url: "",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/" className={styles.logo}>
          My App
        </Link>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
