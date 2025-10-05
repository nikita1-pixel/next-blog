import Image from "next/image";
import styles from "./card.module.css";
    
const Card = () => {
    return (
        <div className={styles.container}>
          <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>11.03.2023 - </span>
                        <span className={styles.category}>CULTURE</span>
                    </div>
                    <a href="/"><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h1></a>
                    <h1>TITLE</h1>
                    <p>DESCRIPTION OF THE POST</p>
                    <a href="/">Read More</a>
                </div>
        </div>
    )
}

export default Card;