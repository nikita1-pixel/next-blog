import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return <div>No categories available.</div>;
  }

  return (
    <div className={styles.categoryList}>
      {categories.map(cat => (
        <a 
          key={cat.id}
          href={`/blog?cat=${cat.slug}`} 
          className={`${styles.categoryItem} ${styles[cat.slug]}`}
        >
          {cat.title}
        </a>
      ))}
    </div>
  );
};
export default MenuCategories;