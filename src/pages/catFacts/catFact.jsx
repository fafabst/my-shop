import axios from "axios";
import { useState } from "react";
import Layout from "../../components/layout/layout";

const CatFact = () => {
    const [catFact, setCatFact] = useState('');
    const sayCatFact = () => {
        axios.get('https://catfact.ninja/fact').then((res) => {
            console.log(res.data.fact);
            setCatFact(res.data.fact)
        })
    }

    return (
        <Layout>
            <button onClick={sayCatFact}  >press me</button>
            <h3 >{catFact}</h3>
        </Layout>
    );
}

export default CatFact;