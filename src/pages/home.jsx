import React, { useContext } from "react";
import Layout from "../components/layout";
import { AppContext } from '../App'
const Home = () => {
    const { isLogin } = useContext(AppContext)
    return (<>

        <Layout>
            {isLogin ? <h2>you are loged in</h2> : <h2>please login first</h2>}

        </Layout>
    </>
    );
}

export default Home;