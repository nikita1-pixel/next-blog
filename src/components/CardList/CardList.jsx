import React from "react";
import styles from "./CardList.module.css";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const CardList = () => {
    return (
        <div className="styles.container">
           <h1 className="stles.title">Recent Posts</h1>
           <div className="styles.posts">
            <Card/>
            <Card/>
            <Card/>
           </div>
           <Pagination/>
        </div>
    );
};

export default CardList; 
