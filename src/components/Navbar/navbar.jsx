import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLink";
// import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {
    return (

        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
                <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            </div>
            <div className={styles.logo}>Mindscapes</div>
            <div className={styles.links}>
                {/* <ThemeToggle /> */}
                <a href="/" className={styles.link}>Homepage</a>
                {/* <Link href="/">Write</Link>  */}
                <a href="/" className={styles.link}>Contact</a>
                <a href="/" className={styles.link}>About</a>
                <AuthLinks />
            </div>
        </div>
    );
}

export default Navbar;