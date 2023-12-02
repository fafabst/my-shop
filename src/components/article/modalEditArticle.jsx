import Layout from "../layout/layout";
import { useContext } from "react";
import { AppContext } from '../context/contextProvider';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card, Space } from 'antd';

const EditArticle = (props) => {
    const params = useParams();
    const { articles } = useContext(AppContext);
    const article = articles.filter((a) => a.id == params.id)[0];

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>You Are Going To Edit Your Article</Modal.Title>
                </Modal.Header>

                <Modal.Body >

                    <Space direction="vertical" size="large" style={{ display: 'flex', margin: '20px' }}>

                        <Card title="title" size="small">
                            <p>{article.title}</p>
                        </Card>
                        <Card title="author" size="small">
                            <p>{article.author}</p>
                        </Card>
                        <Card title="content" size="small">
                            <p>{article.content}</p>
                        </Card>
                        <Card title="readingTime" size="small">
                            <p>{article.readingTime}</p>
                        </Card>
                        <Card title="imageUrl" size="small">
                            <p>{article.imageUrl}</p>
                        </Card>

                    </Space>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>Cancel</Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default EditArticle;