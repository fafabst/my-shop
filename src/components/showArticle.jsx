import Layout from "./layout";
import { Card, Space } from 'antd';
import { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const ShowArticle = () => {
    const params = useParams();
    const { articles } = useContext(AppContext);
    const article = articles.filter((a) => a.id == params.id)[0];

    // const [article, setArticle] = useState([])
    // useEffect(() => {

    //     axios.get(`http://localhost:8000/articles/${params.id}`).then((res) => {
    //         setArticle(res.data)
    //     })
    // }, []);

    return (
        <div>
            <Layout>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Card title="عنوان" size="small">
                        <p>{article.title}</p>
                    </Card>
                    <Card title="نویسنده" size="small">
                        <p>{article.author}</p>
                    </Card>
                    <Card title="متن مقاله" size="small">
                        <p>{article.content}</p>
                    </Card>
                </Space>
                <img src="" alt="" />
            </Layout>
        </div>
    );
}

export default ShowArticle;