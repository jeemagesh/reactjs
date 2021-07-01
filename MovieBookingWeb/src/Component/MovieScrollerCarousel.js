import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import { useDispatch, useSelector } from "react-redux";
import getMovieDetails from '../redux/action/movies';
import '../css/Movie.css';

function MovieScrollerCarousel() {

    const dispatch = useDispatch();

    const Movies = useSelector(state => state.movies.movies);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);


    useEffect(() => {
        dispatch(getMovieDetails());

    }, [])



    return (
        <> <div style={{ padding: "0px 500px" }}>
            <div style={{ width: "250px" }}>
                <Carousel>
                    {Movies?.length === 0 && !loading && <p>No upcoming available!</p>}

                    {error && !loading && <p>{error}</p>}

                    {Movies?.length > 0 && Movies.map((Movie) => (


                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100  rounded"
                                src={Movie.Poster}
                                alt="First slide"
                                style={{ height: "250px", width: "25px" }}
                            />

                        </Carousel.Item>

                    ))
                    } </Carousel>
            </div>

        </div>

            <hr style={{ height: "2px", borderWidth: "0", color: "gray", backgroundColor: "gray" }}></hr>
            <h4 style={{ fontFamily: "Garamond " }}>Recommended Movies</h4>
            <div class="container">
                <div class="row">
                    {Movies.map((Movie) => (
                        <>
                            <div class="col">
                                <Link to={{
                                    pathname: `/movieDetails/${Movie.Title}`,
                                    Movie: {
                                        Title: Movie.Title
                                    }
                                }} > <img key={Movie.name} class="rounded"
                                    style={{ height: "120px" }}
                                    alt="test"
                                    src={Movie.Poster}

                                    /></Link>
                                <Link to={{
                                    pathname: `/movieDetails/${Movie.Title}`,
                                    Movie: {
                                        Title: Movie.Title
                                    }
                                }}><button className="btn btn-success btn-lg">Book</button></Link>
                            </div>
                        </>

                    ))}</div>
            </div></>
    );
}

export default MovieScrollerCarousel;