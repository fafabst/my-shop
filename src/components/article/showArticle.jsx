import Layout from "../layout/layout";
import { Button, Card, Space } from 'antd';
import { useContext } from "react";
import { AppContext } from '../context/contextProvider';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalEditArticle from './modalEditArticle'
import axios from "axios";

const ShowArticle = () => {
    const params = useParams();
    const { articles, setArticles } = useContext(AppContext);
    const [deletedArticle, setDeletedArticle] = useState(false);

    const article = articles.filter((a) => a.id == params.id)[0];

    const [showModal, SetShowModal] = useState(false);
    const openModal = () => {
        SetShowModal(true)
    }
    const closeModal = () => {
        SetShowModal(false)
    }

    const deleteArticle = () => {
        axios.delete(`http://localhost:8000/articles/${article.id}`).then((res) => {
            const updatedArticles = articles.filter((a) => a.id !== article.id);
            setArticles(updatedArticles);
            setDeletedArticle(true);

        }).catch((error) => {
            console.error("error deleting article", error)
        });
    }


    return (
            <Layout>
            {deletedArticle && <p>article deleted</p>}
            {article ?
                <Space direction="vertical" size="middle" style={{ display: 'flex', margin: '20px' }}>
                <img src={article.imageUrl} />
                    <Card title="title" size="small">
                        <p>{article.title}</p>
                    </Card>
                    <Card title="author" size="small">
                        <p>{article.author}</p>
                    </Card>
                    <Card title="context" size="small">
                        <p>{article.content}</p>
                    </Card>
                <div>
                    <Button style={{ margin: '10px 20px' }} type="primary" onClick={openModal}>Edit Article</Button>
                    {showModal && <ModalEditArticle closeModal={closeModal} />}

                        <Button onClick={deleteArticle} style={{ margin: '10px 20px' }} type="primary" danger>Delete Article</Button>
                </div>
            </Space>
                :
                <h1>there is no article, you can see other articles on articles page</h1>}
        </Layout>
    );
}

export default ShowArticle;