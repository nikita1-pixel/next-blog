import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className={styles.container}>
           <h1 className={styles.title}>Popular Categories</h1>
           <div className={styles.categories}> 
                <a href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <img src="/style.png" alt="" width={32} height={32} className={styles.image} />
                    style
                </a>
                <a href="/blog" className={`${styles.category} ${styles.fashion}`}>
                    <img src="/fashion.png" alt="" width={32} height={32} className={styles.image} />
                    Fashion
                </a>
                <a href="/blog" className={`${styles.category} ${styles.food}`}>
                    <img src="/food.png" alt="" width={32} height={32} className={styles.image} />
                    Food
                </a>
                <a href="/blog" className={`${styles.category} ${styles.travel}`}>
                    <img src="/travel.png" alt="" width={32} height={32} className={styles.image} />
                    Travel
                </a>
                <a href="/blog" className={`${styles.category} ${styles.culture}`}>
                    <img src="/culture.png" alt="" width={32} height={32} className={styles.image} />
                    Culture
                </a>
                 <a href="/blog" className={`${styles.category} ${styles.coding}`}>
                    <img src="/coding.png" alt="" width={32} height={32} className={styles.image} />
                    Coding
                </a>
           </div>
        </div>
    )
}

export default CategoryList ;  
