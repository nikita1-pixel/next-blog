import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

// MenuPosts.jsx (or similar file)

// Before: It probably fetched data here or relied on global state
// const MenuPosts = ({ withImage }) => { ... }

// After:
const MenuPosts = ({ withImage, posts }) => {
  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div className={styles.items}>
      {posts.map(post => (
        <div key={post.id} className={styles.item}>
          {/* Only render image if withImage is true and post.image exists */}
          {withImage && post.image && (
            <div className={styles.imageContainer}>
              {/* You'd typically use the Next.js <Image /> component here */}
              <img src={post.image} alt={post.title} className={styles.image} />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.category]}`}>
              {post.category}
            </span>
            <h3 className={styles.postTitle}>
              {post.title}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - {post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPosts;

