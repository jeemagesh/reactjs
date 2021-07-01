import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from "react-redux";
import getMovieDetails from '../redux/action/movies';


import { Link } from 'react-router-dom';
import '../css/Movie.css';

function MovieLatest() {
 
    const dispatch = useDispatch();

    const movies = useSelector(state => state.movies.movies);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
 

    useEffect(() => {
        dispatch(getMovieDetails());

    }, [])


    return (<>
        <div class="container">
            <div class="row ">
                {movies?.length === 0 && !loading && <p>No Movies available!</p>}

                {error && !loading && <p>{error}</p>}

                {movies?.length > 0 && movies.map((Movie) => (
                    <>
                        <div class="col" key={Movie.key}>
                            <Link  to={{
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
        </div>





    </>);
}

const mapStateToProps = (state) => {
 
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
 
    return ({
        getMovieDetails: () => dispatch(getMovieDetails())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieLatest);