import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import AuthLink from "../authLinks/AuthLink";
// import ThemeToggle from "../themeToggle/ThemeToggle";


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
               <img src="/facebook.png" alt="facebook"  width={24} height={24} />
               <img src="/instagram.png" alt="instagram"  width={24} height={24} />
               <img src="/tiktok.png" alt="tiktok"  width={24} height={24} />
               <img src="/youtube.png" alt="youtube"  width={24} height={24} />
            </div>
            <div className={styles.logo}>MINDSCAPES</div>
            <div className={styles.links}>
                {/* <ThemeToggle /> */}
                <a href="#home" className="styles.links" >Home</a>
                <a href="#posts" className="styles.links" >Posts</a>
                <a href="#stories" className="styles.links" >Stories</a>
                <a href="#contact" className="styles.links" >Contact</a>
                <a href="#about" className="styles.links" >About</a>
                <AuthLink />
            </div>
            
        </div>
    )
}

export default Navbar;  
