import axios from "axios";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import slyles from './makeExcuses.module.css';

const MakeExcuses = () => {
    const [excuse, setExcuse] = useState('');
    const suggestExcuse = (ex) => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}`).then((res) => {
            setExcuse(res.data[0].excuse)
        })
    }
    return (
        <Layout >
            <h1>suggesting excuses: </h1>
            <div className={slyles.excuseMaker}>
                <button onClick={() => suggestExcuse('party')}>suggest an excuse for party</button>
                <button onClick={() => suggestExcuse('family')}>suggest an excuse for family</button>
                <button onClick={() => suggestExcuse('office')}>suggest an excuse for office</button>
                <br></br>
            </div>
            <span>{excuse}</span>

        </Layout>);
}

export default MakeExcuses;