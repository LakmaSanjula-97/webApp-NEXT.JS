import React from 'react'
import Image from "next/image";
import style from "./description.module.css";

const Description = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.introImageContainer}>
          <Image src="/tachnology1.png" fill alt=" Image" />
        </div>
      </div>
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.appName}>MY APP</span>
          <br></br> REACT NATIVE APPLICATION
        </h1>
        <p className={style.desc}>Join with us....</p>
        <button className={style.button}>DOWNLOAD HERE</button>
      </div>
    </div>
  );
}

export default Description

