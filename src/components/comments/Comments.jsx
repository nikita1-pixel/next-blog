import Link from 'next/link';
import styles from './comments.module.css';

const Comments = () => {

    const status = "authenticated"; //dummy status
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> Comments</h1>

        {status === "authenticated" ? ( <div className={styles.write}>
            <textarea placeholder="write a comment..."
             className={styles.input}/>
             <button className={styles.button}>Send</button>
        </div>
        ) : (
        <Link href="/login">Login to write a comment </Link>)}
        <div className={styles.comments}> 
            <div className={styles.comment}>
                <div className={styles.user}>
                    <image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>USERNAME</span>
                        <span className={styles.date}>DATE</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate minus tenetur eveniet id aut laboriosam officiis temporibus. Maxime, tempora id. Adipisci assumenda sunt deleniti! Incidunt natus impedit inventore ratione?</p>
            </div>
        </div>
       </div>
  )
}

export default Comments;
