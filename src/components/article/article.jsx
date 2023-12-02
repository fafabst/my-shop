import { createContext } from 'react';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AppContext } from '../context/contextProvider';
import styyles from './oneArticle.module.css'

const Article = (props) => {

    return (

        <Card style={{ width: '18rem' }} className={styyles.oneArticle}>
            <Card.Img className={styyles.cardImg} variant="top" src={props.article.imageUrl} />
                <ListGroup className="list-group-flush">
                <ListGroup.Item className={styyles.items}>Title : {props.article.title}</ListGroup.Item>
                <ListGroup.Item className={styyles.items}>Reading Time : {props.article.readingTime} minutes</ListGroup.Item>
                <ListGroup.Item className={styyles.items}>Author : {props.article.author}</ListGroup.Item>
                </ListGroup>
        </Card> 

    );
}

export default Article;