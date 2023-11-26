import { useMemo, useState } from "react";
import Layout from "../components/layout";

const doubleIt = (n) => {
    for (let i = 0; i < 99999999; i++) { }
    return (n * 2)
};

const Exercises = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);
    //const showDouble = doubleIt(number);
    const showDouble = useMemo(() => doubleIt(number), [number])
    return (
        <Layout>
            <div style={{ backgroundColor: theme ? 'gray' : 'lightblue' }}>
                <h1>{showDouble}</h1>
                <input type="text" onChange={(e) => setNumber(e.target.value)} />
                <br></br>
                <button onClick={() => setTheme(!theme)}>change theme</button>
            </div>
        </Layout>
    );
}

export default Exercises;