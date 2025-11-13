import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className={styles.container}>
           <h1 className={styles.title}>Popular Categories</h1>
           <div className={styles.categories}> 
               
                <Link href="/blog?catt=fashion" className={`${styles.category} ${styles.fashion}`}>
                    <img src="/fashion.png" alt="" width={32} height={32} className={styles.image} />
                    Fashion
                </Link>
                <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
                  <img src="/travel.png" alt="" width={32} height={32} className={styles.image} />
                    Travel
                </Link>
                <Link href="/nature" className={`${styles.category} ${styles.nat}`}>
                    <img src="/culture.png" alt="" width={32} height={32} className={styles.image} />
                    Nature
                </Link>
                 <Link href="/technology" className={`${styles.category} ${styles.technology}`}>
                    <img src="/coding.png" alt="" width={32} height={32} className={styles.image} />
                    Technology
                </Link>
           </div>
        </div>
    )
}

export default CategoryList ;  
