import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="logo" className={styles.img} width={50} height={50}/>
                    <h1 className={styles.logoText}>MindScapes</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat asperiores iusto deleniti maiores cumque vel voluptas ex, optio sit odio at nostrum natus doloremque in quae corporis iure alias!
                    </p>
                    <div className={styles.icons}>
                        <img src="/facebook.png" alt="facebook" height={18} width={18} />
                        <img src="/tiktok.png" alt="tiktok" height={18} width={18} />
                        <img src="/instagram.png" alt="instagram" height={18} width={18} />
                        <img src="/youtube.png" alt="youtube" height={18} width={18} />
                    </div>
                </div>
            </div>
             <div className={styles.links}>
                <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
             </div>
        </div>
    )
}

export default Footer;  
