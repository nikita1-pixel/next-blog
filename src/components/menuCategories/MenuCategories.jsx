
import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
   <div className={styles.categoryList}>
                <a href="/blog?cat" className={`${styles.categoryItem} ${styles.style}`}>Style</a>
                <a href="/blog?cat" className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</a>
                <a href="/blog?cat" className={`${styles.categoryItem} ${styles.food}`}>Food</a>
                <a href="/blog?cat" className={`${styles.categoryItem} ${styles.travel}`}>Travel</a>
                <a href="/blog?cat" className={`${styles.categoryItem} ${styles.culture}`}>Culture</a>
                <a href="/blog?cat=style" className={`${styles.categoryItem} ${styles.coding}`}>Coding</a>
            </div>
  );
};

export default MenuCategories;