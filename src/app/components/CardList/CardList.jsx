import React from "react";
import styles from "./CardList.module.css";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";

const CardList = () => {
    return (
        <div className={styles.container}>
           Cardlist
           <Pagination/>
        </div>
    )
}

export default CardList; 
