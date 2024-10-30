// import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, } from 'recharts';
import { ThreeCircles, CirclesWithBar } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    // const [loading, setLoaning] = useState(true)
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => setPhones(data.data))

        // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(data => setPhones(data.data.data))
    }, [])
    return (
        <div>

            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

            <h2 className="text-2xl">Phones: {phones.length}</h2>
            <BarChart width={1000} height={500} data={phones}>
                <Bar dataKey={"price"} fill="#8884d8"></Bar>
                <YAxis></YAxis>
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;