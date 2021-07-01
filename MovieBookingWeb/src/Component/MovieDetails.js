import { Link } from 'react-router-dom';
import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector, connect } from "react-redux";
import getMovieDetailsToBook from '../redux/action/movieDetailsToBook';
function MovieDetails(props) {


    //const dispatch = useDispatch();

    const movieDetailsToBook = useSelector(state => state.movieDetailsToBook);
    console.log("movieDetailsToBook in JS " ,movieDetailsToBook)
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const title = props.match.params.Movie;
    console.log ("title of movie detail " , title);

 /*    useEffect(() => {
        
        dispatch(getMovieDetailsToBook(title));

    }, []) */
  
    const [MovieDetail, setMovieDetail] = useState({});

    console.log(props.match.params.Movie);

    
    const detailURL = "http://www.omdbapi.com/?&apikey=2a1adccc&t=" + title;

    useEffect(() => {

        axios.get(detailURL)
            .then(res => {
                console.log(res.data);
                setMovieDetail(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    
    return (
        <>
            <div class="jumbotron"  style={{ padding: "0px 350px" ,backgroundColor:"seashell" }} >
                 <table class="table" style={{width:"600px"}}>
                    <tbody>
                        <tr>
                            <td rowSpan="4" >
                                <img key={MovieDetail.Title} class="img-thumbnail"
                                    style={{ height: "200px", width: "200px" }}
                                    alt="test"
                                    src={MovieDetail.Poster}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{MovieDetail.Title}</td>
                            <td> {MovieDetail.Released}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">{MovieDetail.Runtime}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">{MovieDetail.imdbRating}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">  <p class="lead">  <Link to={`/bookNow/${MovieDetail.Title}`}>
                                <button class="btn btn-success btn-sm">Book Now</button></Link></p></td>
                        </tr>
                    </tbody>
                </table> 
            </div>
            </>

    )

}

const mapStateToProps = (state) => {

    return {
        movieDetailsToBook: state.movieDetailsToBook
    }
}

const mapDispatchToProps = (dispatch,props) => {
    console.log ("title of movie detail " , props);
    return ({
        getMovieDetailsToBook: () => dispatch(getMovieDetailsToBook(props.match.params.Movie))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
