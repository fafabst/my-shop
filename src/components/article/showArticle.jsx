import Layout from "../layout/layout";
import { Button, Card, Space } from 'antd';
import { useContext } from "react";
import { AppContext } from '../context/contextProvider';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalEditArticle from './modalEditArticle'

const ShowArticle = () => {
    const params = useParams();
    const { articles } = useContext(AppContext);
    const article = articles.filter((a) => a.id == params.id)[0];

    const [showModal, SetShowModal] = useState(false);
    const openModal = () => {
        SetShowModal(true)
    }
    const closeModal = () => {
        SetShowModal(false)
    }

    // const [article, setArticle] = useState([])
    // useEffect(() => {

    //     axios.get(`http://localhost:8000/articles/${params.id}`).then((res) => {
    //         setArticle(res.data)
    //     })
    // }, []);

    return (
            <Layout>
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
                    <Button style={{ margin: '10px 20px' }} type="primary" danger>Delete Article</Button>
                </div>
            </Space>
        </Layout>
    );
}

export default ShowArticle;