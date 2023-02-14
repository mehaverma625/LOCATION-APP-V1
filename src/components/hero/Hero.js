import { useState, useEffect } from "react";
import React from 'react';

import axios from 'axios';

const Hero = () => {
    const [data, setData] = React.useState('Loading...')

    useEffect(() => {
        // Update the document title using the browser API
        // setInterval(() => {
        //     setData(`You clicked...`);
        // }, 100000)
        
        axios.get("http://localhost:8080/home", {mode:'cors'})
          .then(function (response) {
            console.log(response);
            setData(JSON.stringify(response))
          })
      });

    return ( 
        <div className="home">
            <h1>Hi, Welcome!!</h1><br />
            <h1>{data}</h1>
        </div>
     );
}
 
export default Hero;

