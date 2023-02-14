import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({movies: locations}) => {

  console.log("Hiii" + JSON.stringify(locations));

    const navigate = useNavigate();

function reviews(locationId)
    {
        navigate(`/Reviews/${locationId}`);
    }

  return (
    <div className ='movie-carousel-container'>
      <Carousel>
        {
            locations?.map((location) =>{
                return(
                    <Paper key={location.locationId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${location.pictures[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={location.displayPicture} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{location.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${location.trailerLink.substring(location.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(location.locationId)} >Reviews do mujhe</Button>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
// import { useState, useEffect } from "react";
// import React from 'react';

// import axios from 'axios';

// const Hero = () => {
//     const [data, setData] = React.useState('Loading...')

//     useEffect(() => {
//         // Update the document title using the browser API
//         // setInterval(() => {
//         //     setData(`You clicked...`);
//         // }, 100000)
        
//         axios.get("http://localhost:8080/api/v1/locations1", {mode:'cors'})
//           .then(function (response) {
//             console.log(response);
//             setData(JSON.stringify(response))
//           })
//       });

//     return ( 
//         <div className="home">
//             <h1>Hi, Welcome!!</h1><br />
//             <h1>{data}</h1>
//         </div>
//      );
// }
 
// export default Hero;

