import { useState } from "react";
import React, { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AppContext = React.createContext(null);

const ContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const article = {
        id: '',
        imageUrl: '',
        title: '',
        readingTime: '',
        author: '',
        content: ''
    };
    const [articles, setArticles] = useState([article]);

    useEffect(() => {
        axios.get('http://localhost:8000/articles').then((res) => {
            setArticles(res.data);
            console.log(articles);
            setIsLoading(false);
        })
            .catch((error) => {
                console.error("Error fetching articles:", error);
                setIsLoading(false);
            });
    }, []);

    const [isLogin, setIsLogin] = useState(false);

    return (
        <AppContext.Provider value={{ articles, setArticles, isLoading, setIsLoading, isLogin, setIsLogin }}>
            {children}
        </AppContext.Provider>
    );
}

export default ContextProvider;