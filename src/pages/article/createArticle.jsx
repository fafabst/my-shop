import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from "./createArticle.module.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Layout from '../../components/layout/layout';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useContext } from 'react';
import { AppContext } from '../../App';


const CreateArticle = () => {
    const { isLogin } = useContext(AppContext)

    const [creArticle, setCreArticle] = useState([
        {
            id: '',
            imageUrl: '',
            title: '',
            readingTime: '',
            author: '',
            content: ''
        }
    ]);

    const handleChange = (e) => {
        setCreArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    }

    const handleCreateArticle = () => {
        axios.post("http://localhost:8000/articles", {
            id: 5,
            imageUrl: creArticle.imageUrl,
            title: creArticle.title,
            readingTime: creArticle.readingTime,
            author: creArticle.author,
            content: creArticle.content
        }).catch(function (error) {
            console.log(error.toJSON());
        });
    }

    return (
        <Layout>
            {isLogin ?
                <div className={styles.createArticleWrapped}>

                    <h3>Make New Article:</h3>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Title
                        </InputGroup.Text>
                        <Form.Control onChange={handleChange} name="title"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Author
                        </InputGroup.Text>
                        <Form.Control onChange={handleChange} name="author"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Image URL
                        </InputGroup.Text>
                        <Form.Control onChange={handleChange} name="imageUrl"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Reading Time
                        </InputGroup.Text>
                        <Form.Control onChange={handleChange} name="readingTime"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <h6>Context:</h6>
                    <FloatingLabel
                        controlId="floatingTextarea2" label="...">
                        <Form.Control onChange={handleChange} name="content"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Button onClick={handleCreateArticle} variant="secondary" size="lg" active>
                        Make Article
                    </Button>
                </div>
                : <h2>login first</h2>}

        </Layout>
    );
}

export default CreateArticle;