import React from "react";
import style from "./technology.module.css";
import Image from "next/image";

const Technology = () => {
  return (
    <div>
      <div className={style.headercontainer}>
        <h1 className={style.title}>Technology</h1>
        <h1 className={style.subtitle}>Thechnology that we used</h1>
      </div>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.imageGrid}>
            <Image src="/native.png" width={150} height={150} alt="Image 1" />
            <Image src="/android.jpeg" width={150} height={150} alt="Image 2" />
            <Image
              src="/tachnology1.png"
              width={150}
              height={150}
              alt="Image 3"
            />
            <Image src="/ios.jpeg" width={150} height={150} alt="Image 4" />
            <Image src="/firebase.png" width={150} height={150} alt="Image 5" />
            <Image
              src="/technology2.png"
              width={150}
              height={150}
              alt="Image 6"
            />
          </div>
        </div>
        <div className={style.right}>
          <h1 className={style.title2}>Development</h1>
          <p className={style.description}>
            React Native brings the best parts of developing with React to
            native development. It is a best-in-class JavaScript library for
            building user interfaces.React Native brings the best parts of
            developing with React to native development. It is a best-in-class
            JavaScript library for building user interfaces.React Native brings
            the best parts of developing with React to native development. It is
            a best-in-class JavaScript library for building user interfaces.
          </p>
          <button className={style.contactButton}>DOWNLOAD</button>
        </div>
      </div>
    </div>
  );
};

export default Technology;
