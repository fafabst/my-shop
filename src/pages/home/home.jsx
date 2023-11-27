import React, { useContext } from "react";
import Layout from "../../components/layout/layout";
import { AppContext } from '../../App'
import { Card } from 'antd';
import styles from "./home.module.css";
import { auto } from "@popperjs/core";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Home = () => {
    const { isLogin } = useContext(AppContext)
    return (

        <Layout>
            <div className={styles.homeWrapped}>
                {isLogin ?
                    <>
                        <Link to='./articles' className={styles.linkStyle}  >
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSt9FMAjTCO7kKAisuTI4hCIDIjJbpA4ENBznnZ7KCRCd4nVgoAHRJppJMn3yMaTqo7B4&usqp=CAU" style={{ width: '100%', height: '300px' }} />}
                            >
                                <Meta title="Articles" description="www.instagram.com" />
                            </Card>
                        </Link>

                        <Link to='./createArticle' className={styles.linkStyle} >
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://isijournal.net/storage/old/photos/2018/01/07/590.jpg" style={{ width: '100%', height: '300px' }} />}
                            >
                                <Meta title="MAke New Article" description="www.instagram.com" />
                            </Card>
                        </Link>
                        <Link to='./catfact' className={styles.linkStyle} >
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img1.taw-bio.ir/2023/115315/thumbs/180x1686442177.jpeg" style={{ width: '100%', height: '300px' }} />}
                            >
                                <Meta title="Facts About Cats" description="www.instagram.com" />
                            </Card>
                        </Link>
                        <Link to='./makeExcuses' className={styles.linkStyle} >
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YGO-8MAhnBNw9nAvGAU9MOxhdqlYh_wf-A&usqp=CAU" style={{ width: '100%', height: '300px' }} />}
                            >
                                <Meta title="MAking Excuses" description="www.instagram.com" />
                            </Card>
                        </Link>
                    </>
                    : <h2>please login first</h2>}
            </div>
        </Layout>

    );
}

export default Home;