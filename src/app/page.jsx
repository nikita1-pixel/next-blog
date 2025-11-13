import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default async function Home({ searchParams }) { // MUST be async
    
    // 1. Await searchParams to resolve the promise (safe even if it's not a promise)
    const params = await searchParams;
    
    // 2. Define the 'page' variable using the resolved params
    const page = parseInt(params?.page) || 1; 

    // ... rest of your component code ...

    return (
        <div className={styles.container}>
            <Featured />
            <CategoryList />
            <div className={styles.content}>
                <CardList page={page}/> 
                <Menu />
            </div>
        </div>
    );
}
