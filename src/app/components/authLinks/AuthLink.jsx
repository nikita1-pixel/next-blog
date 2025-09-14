import styles from "./AuthLink.module.css";

const AuthLink = () => {
//temporary
    const status = "not-authenticated";
    return <>
    { status === "not-authenticated" ? (
            <a href="/Login">Login</a>
     ) :(
        //these are fragments<></>
        <>
        <a href="/write">Write</a>
        <span className="styles.link">Logout</span>
        </>
     )
    }
    </>;
    
}
export default AuthLink;
