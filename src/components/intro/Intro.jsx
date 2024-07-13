import Image from "next/image";
import style from "./intro.module.css";
import React from "react";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.appName}>MY APP</span> REACT NATIVE APPLICATION
        </h1>
        <p className={style.desc}>
          Find movie character details that you need....
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <div className={style.introImageContainer}>
          <Image src="/screen.jpg" fill alt="Intro Image" />
        </div>
      </div>
    </div>
  );
};
  
export default Intro;
