import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Heyo! welcome to MindScapes!</b> Discover all stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>TITLE OF THE POST</h1>
          <p className={styles.postDesc}>
            DESCIPTION OF THE POST. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod
            aliquam nisl nunc euismod nisi.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;