import React from "react";
import style from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>Contact Us</h1>
        <h1 className={style.subtitle}>Get In Touch With Us</h1>
        <div className={style.formContainer}>
          <div className={style.left}>
            <Image
              src="/Email.png"
              width={300}
              height={300}
              alt="Contact Image"
            />
          </div>
          <div className={style.right}>
            <form className={style.form}>
              <div className={style.inputGroup}>
                <input type="text" placeholder="Name" className={style.input} />
              </div>
              <div className={style.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  className={style.input}
                />
              </div>
              <div className={style.inputGroup}>
                <textarea
                  placeholder="Message"
                  className={style.textarea}
                ></textarea>
              </div>
              <button type="submit" className={style.button}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
