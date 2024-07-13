import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 All rights reserved.</div>
      <div>
        <Image
          src="/facebook.png"
          width={35}
          height={35}
          alt="Facebook Account"
          className={styles.icon}
        />
        <Image
          src="/insta.png"
          width={35}
          height={35}
          alt="Insta Account"
          className={styles.icon}
        />
        <Image
          src="/twitter.png"
          width={35}
          height={35}
          alt="Twitter Account"
          className={styles.icon}
        />
        <Image
          src="/pinterest.png"
          width={35}
          height={35}
          alt="Pinterest Account"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
