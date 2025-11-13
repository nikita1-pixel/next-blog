import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";
import Link from "next/link";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Welcome!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/nature2.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>The Language of Trees — Listening to Nature’s Silent Conversations

.</h1>
          <p className={styles.postDesc}>
            Have you ever paused beneath a tree and simply listened? If you do, you’ll realize that trees have their own language — one that doesn’t rely on words, but on silence, patience, and time. Every branch that stretches toward the sky, every leaf that flutters in the breeze, tells a story of quiet strength and growth.
</p>
<p>
Trees are nature’s philosophers. They endure storms, droughts, and seasons of change, yet they continue to grow — slowly, gracefully, and without complaint. They remind us that progress doesn’t have to be loud to be meaningful. Just as trees shed their leaves to make space for new life, we too must learn to let go of what no longer serves us.
</p>
<p>

Forests, with their vast green canopies, are living communities. Beneath the soil, trees communicate through roots and fungi — sharing nutrients, sending signals of distress, and even nurturing younger saplings. It’s a hidden world of connection, empathy, and balance. What if humans learned from trees — to support one another quietly, without expecting anything in return? 
</p>
<p>
When you sit beneath a tree, time slows down. The world feels softer, kinder. You realize that life isn’t about constant movement; it’s about steady growth and deep grounding. Trees teach us mindfulness — to stay rooted while reaching high.
</p>
<p>
Next time you pass a tree, pause. Place your hand on its bark. Feel its life force. You might just hear what it’s been saying all along — grow slowly, stay grounded, and reach for the light.  
</p>
          <button className={styles.button}><Link href="/">Read More</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;