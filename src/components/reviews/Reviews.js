import {useState, useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react' 

// const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
const Reviews = () => {
    const [movies, setMovies] = useState();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
    const getMovies = async () =>{
    
        try
        {
    
          const response = await api.get("/locations");
    
          setMovies(response.data );
    
        } 
        catch(err)
        {
          console.log(err);
        }
      }
    
      const getMovieData = async (movieId) => {
         
        try 
        {
            // const response = await api.get(`/locations/${movieId}`);
    
            const response = await api.get(`/locations/${movieId}`);
            const singleMovie = response.data;

            console.log(JSON.stringify(response));

            console.log("==================");

            console.log(JSON.stringify(singleMovie));
    
            setMovie(singleMovie);
    
            setReviews(singleMovie.reviews);
            
    
        } 
        catch (error) 
        {
          console.error(error);
        }
    
      }

    const revText = useRef();
    let params = useParams();
    const locationId = params.locationId;

    // const locationId = "tt3915175"; 

    console.log("hi = " + locationId);
    useEffect(()=>{
        getMovieData(locationId);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;
       
        try
        {
            const response = await api.post("/reviews",{reviewBody:rev.value,locationId:locationId});

            const updatedReviews = [...reviews, {reviewBody:rev.value}];
    
            rev.value = "";
    
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
        



    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.displayPicture} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.reviewBody}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews
