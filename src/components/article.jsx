import { createContext } from 'react';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AppContext } from '../App';
import { articleContext } from '../pages/articles';
import styyles from './oneArticle.module.css'


const Article = () => {

    const { article } = useContext(articleContext);

    return (
        <div className={styyles.oneArticle} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={article.imageUrl} />
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className={styyles.items}>عنوان : {article.title}</ListGroup.Item>
                    <ListGroup.Item className={styyles.items}>مدت زمان خواندن : {article.readingTime} دقیقه</ListGroup.Item>
                    <ListGroup.Item className={styyles.items}>نویسنده : {article.author}</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>

    );
}

export default Article;