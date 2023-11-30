
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../../components/context/contextProvider';
import Article from "../../components/article/article";
import Layout from "../../components/layout/layout";
import styles from './articles.module.css';

export const articleContext = createContext();

const Articles = () => {

    const { articles, setArticles, isLoading, setIsLoading } = useContext(AppContext);

    return (

        <Layout>
            <div className={styles.articlesContainer}>

                {isLoading ? (
                    <p>Loading...</p>
                ) : articles.length === 0 ? (
                    <p>No articles available</p>
                ) : (
                    articles.map((article) => (
                        <articleContext.Provider key={article.id} value={{ article }}>
                            <Link to={`/article/${article.id}`} className={styles.linkStyle}>
                                <Article />
                            </Link>
                        </articleContext.Provider>
                    ))
                )}
            </div>
        </Layout>
    );
}

export default Articles;