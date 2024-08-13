import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.scss"

const HomePage = () => {
    // const [data, setData] = useState(null);
  
    // useEffect(() => {
    //     axios.get('http://localhost:8999/api/v1/test')
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);
    return (
        <div className="home">
            Home Page :)
        </div>
    )
}
export default HomePage