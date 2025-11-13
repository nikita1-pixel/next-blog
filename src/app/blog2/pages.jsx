import CardList from "@/components/cardList/CardList";
import styles from "./blog2Page.module.css";
import Menu from "@/components/Menu/Menu";

const Blog2Page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { catt } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{catt} Nature</h1>
      <div className={styles.content}>
        <CardList page={page} cat={catt}/>
        <Menu />
      </div>
    </div>
  );
};

export default Blog2Page;