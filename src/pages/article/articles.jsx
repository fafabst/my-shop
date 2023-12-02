
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../../components/context/contextProvider';
import Article from "../../components/article/article";
import Layout from "../../components/layout/layout";
import styles from './articles.module.css';

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
                        <Link to={`/article/${article.id}`} className={styles.linkStyle}>
                            <Article article={article} />
                        </Link>
                    ))
                )}
            </div>
        </Layout>
    );
}

export default Articles;