import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const mockPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    category: "technology",
    slug: "ai-web-dev",
    image: "/p1.jpeg", // Add an image path for Editors Pick
    date: "10.03.2025",
  },
  {
    id: 2,
    title: "A Deep Dive into CSS Grid Layouts",
    category: "coding",
    slug: "css-grid-deep-dive",
    image: null,
    date: "05.02.2025",
  },
  {
    id: 3,
    title: "10 Must-Try Recipes for Fall Season",
    category: "food",
    slug: "fall-recipes",
    image: "/p2.jpeg", 
    date: "15.01.2025",
  },
];

const mockCategories = [
  { id: 1, title: "Style", slug: "style", image: "/style.png" },
  { id: 2, title: "Fashion", slug: "fashion", image: "/fashion.png" },
  { id: 3, title: "Coding", slug: "coding", image: "/coding.png" },
  { id: 4, title: "Travel", slug: "travel", image: "/travel.png" },
  { id: 5, title: "Food", slug: "food", image: "/food.png" },
  { id: 6, title: "Culture", slug: "culture", image: "/culture.png" },
];

const Menu = () => {
  return (
   <div className={styles.container}>
      {/* 1. Most Popular (No Image) */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      {/* Passing the first two posts to simulate "Most Popular" */}
      <MenuPosts 
        posts={mockPosts.slice(0, 2)} 
        withImage={false} 
      />
      
      {/* 2. Categories */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      {/* Passing the entire categories array */}
      <MenuCategories categories={mockCategories} />
      
      {/* 3. Editors Pick (With Image) */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      {/* Passing the third post for "Editors Pick" */}
      <MenuPosts 
        posts={mockPosts.slice(2, 3)} 
        withImage={true} 
      />
    </div>
  );
};

export default Menu;