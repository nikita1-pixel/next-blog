
import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";


const SinglePage =  () => {

//http://localhost:3001/hello 
//localhost page name


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>USERNAME</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
       
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>

      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nemo labore, eos fugiat eveniet itaque! Tempore culpa ipsam, fugiat soluta, est recusandae nemo minus sapiente nulla accusamus officia velit. Laboriosam.</p>
          <h2> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nemo labore, eos fugiat eveniet itaque! Tempore culpa ipsam, fugiat soluta, est recusandae nemo minus sapiente nulla accusamus officia velit. Laboriosam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nemo labore, eos fugiat eveniet itaque! Tempore culpa ipsam, fugiat soluta, est recusandae nemo minus sapiente nulla accusamus officia velit. Laboriosam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nemo labore, eos fugiat eveniet itaque! Tempore culpa ipsam, fugiat soluta, est recusandae nemo minus sapiente nulla accusamus officia velit. Laboriosam.</p>
          </div>
          <div className={styles.comment}>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;