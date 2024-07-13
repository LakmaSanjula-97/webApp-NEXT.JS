import React from "react";
import style from "./service.module.css";
import Image from "next/image";

const Service = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>What We Can Do?</h1>
        <h1 className={style.subtitle}>Services we can help you with</h1>
        <div className={style.services}>
          <div className={style.service}>
            <div className={style.serviceLabel}>SIGN UP</div>
            <div className={style.imageContainer}>
              <Image
                src="/register.png"
                fill
                style={{ objectFit: "cover" }}
                alt="Design"
                className={style.roundImage}
              />
            </div>
          </div>
          <div className={style.service}>
            <div className={style.serviceLabel}>SING IN</div>
            <div className={style.imageContainer}>
              <Image
                src="/login.png"
                fill
                style={{ objectFit: 'cover' }}
                alt="Development"
                className={style.roundImage}
              />
            </div>
          </div>
          <div className={style.service}>
            <div className={style.serviceLabel}>RESET PASSWORD</div>
            <div className={style.imageContainer}>
              <Image
                src="/reset.png"
                fill
                style={{ objectFit: 'cover' }}
                alt="Development"
                className={style.roundImage}
              />
            </div>
          </div>
        </div>
        <div className={style.services}>
          <div className={style.service}>
            <div className={style.serviceLabel}>VIEW CHARACTER DETAILS</div>
            <div className={style.imageContainer}>
              <Image
                src="/detail.png"
                fill
                style={{ objectFit: 'cover' }}
                alt="Design"
                className={style.roundImage}
              />
            </div>
          </div>
          <div className={style.service}>
            <div className={style.serviceLabel}>GET DETAILS</div>
            <div className={style.imageContainer}>
              <Image
                src="/home.png"
                fill
                style={{ objectFit: 'cover' }}
                alt="Development"
                className={style.roundImage}
              />
            </div>
          </div>
          <div className={style.service}>
            <div className={style.serviceLabel}>MANAGE ACCOUNT</div>
            <div className={style.imageContainer}>
              <Image
                src="/profile.png"
                fill
                style={{ objectFit: 'cover' }}
                alt="Development"
                className={style.roundImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
