import { createContext } from 'react';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { articleContext } from '../../pages/article/articles';
import styyles from './oneArticle.module.css'


const Article = () => {

    const { article } = useContext(articleContext);

    return (

        <Card style={{ width: '18rem' }} className={styyles.oneArticle}>
            <Card.Img className={styyles.cardImg} variant="top" src={article.imageUrl} />
                <ListGroup className="list-group-flush">
                <ListGroup.Item className={styyles.items}>Title : {article.title}</ListGroup.Item>
                <ListGroup.Item className={styyles.items}>Reading Time : {article.readingTime} minutes</ListGroup.Item>
                <ListGroup.Item className={styyles.items}>Author : {article.author}</ListGroup.Item>
                </ListGroup>
        </Card> 


    );
}

export default Article;