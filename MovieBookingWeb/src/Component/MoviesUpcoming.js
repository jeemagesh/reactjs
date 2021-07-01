import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from "react-redux";
import getUpcomingMovies from '../redux/action/upcomingMovies';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from 'react-router-dom';
import '../css/Movie.css';

function MoviesUpcoming() {

    const dispatch = useDispatch();

    const upcomingMovies = useSelector(state => state.upcomingMovies.upcomingMovies);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);


    useEffect(() => {
        dispatch(getUpcomingMovies());

    }, [])


    return (<>
        <div class="container">
            <div class="row">
                {upcomingMovies?.length === 0 && !loading && <p>No upcoming available!</p>}

                {error && !loading && <p>{error}</p>}

                {upcomingMovies?.length > 0 && upcomingMovies.map((Movie) => (
                    <>
               {/*          <div class="row">
                            <div class="col-md-4">
                                <div class="thumbnail">

                                    <img src={Movie.Poster} alt="Lights" style={{width:150}}></img>
                                    <div class="caption">
                                        <p>{Movie.Title}</p>
                                    </div>

                                </div>
                            </div>
                        </div> */}
                         <div class="col" key={Movie.key}>
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
        </div>





    </>);
}

const mapStateToProps = (state) => {

    return {
        upcomingMovies: state.upcomingMovies
    }
}

const mapDispatchToProps = (dispatch) => {

    return ({
        getUpcomingMovies: () => dispatch(getUpcomingMovies())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesUpcoming);