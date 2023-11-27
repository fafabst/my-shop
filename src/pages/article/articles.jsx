
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import Article from "../../components/article/article";
import Layout from "../../components/layout/layout";
import styles from './articles.module.css'
export const articleContext = createContext();

const Articles = () => {

    const { articles } = useContext(AppContext);
    return (

        <Layout>
            <div className={styles.articlesContainer}>

                {articles.map((article) => (
                    <articleContext.Provider value={{ article }}>
                        <Link to={`/article/${article.id}`}>
                            <Article key={article.id} />
                        </Link>
                    </articleContext.Provider>
                ))}
            </div>
        </Layout>
    );
}

export default Articles;