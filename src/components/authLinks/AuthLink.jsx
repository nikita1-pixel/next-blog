"use client";
import Link from "next/link";
import styles from "./AuthLink.module.css";
import { useState } from "react";
// import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {

    const [open, setOpen] = useState(false);
//temporary
    const status = "authenticated";
    return <>
    { status === "notauthenticated" ? (
            <a href="/login" className="styles.link">Login</a>
     ) : (
        //these are fragments<></>
        <>
        <a href="/write" >Write</a>
        <span className="styles.link">Logout</span>
        </>
     )
    }
    <div className="styles.burger" onClick={() => setOpen(!open)}>
        <div className="styles.line"></div>
        <div className="styles.line"></div>
        <div className="styles.line"></div>
    </div>

    {open && (
        <div className="styles.responsiveMenu">
            <a href="#home" className="styles.links" >Home</a>
            <a href="#posts" className="styles.links" >Posts</a>
            <a href="#stories" className="styles.links" >Stories</a>
            { status === "not-authenticated" ? (
            <a href="/login">Login</a>
     ) : (
        //these are fragments<></>
        <>
        <a href="/write">Write</a>
        <span className="styles.link">Logout</span>
        </>
     )
    }
        </div>  
    )}
    </>;
    
}


export default AuthLink;