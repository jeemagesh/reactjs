import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from "react-redux";
import getEvents from '../redux/action/events';
import 'bootstrap/dist/css/bootstrap.min.css';



function Events() {

    const dispatch = useDispatch();

    const events = useSelector(state => state.events.events);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    console.log("EVENTS ", events)

    useEffect(() => {
        dispatch(getEvents());

    }, [])


    return (<>
        <div class="container">
            <div class="row ">
                {events?.length === 0 && !loading && <p>No Movies available!</p>}

                {error && !loading && <p>{error}</p>}

                {events?.length > 0 && events.map((Event) => (
                    <>
                        <div class="col" key={Event.key}>
                            <div class="col-md-4" style={{width:"100%"}}>
                                <div class="panel panel-default" style={{width:"100%"}}>
                                    <img src={Event.place.img} alt="Lights"  class="rounded"
                                    style={{ height: "100px", width: "100px" }}></img>
                                        <div class="panel-body" style={{width:"100px"}}>
                                            <p style={{fontSize:"10px"}}>{Event.place.name}</p>
                                            <p style={{fontSize:"15px"}}> <h6>Location</h6></p>
                                            <p style={{fontSize:"10px"}}>{Event.place.location.street}</p>
                                            <p style={{fontSize:"10px"}}>{Event.place.location.city}</p>
                                            <p style={{fontSize:"10px"}}>{Event.place.location.state}</p>
                                            <p style={{fontSize:"10px"}}>{Event.place.location.zip}</p>

                                        </div>
     
                                 </div>
                            </div>
                        </div>
                    </>

                ))}</div>
        </div>





    </>);
}

const mapStateToProps = (state) => {
 
    return {
            events: state.events
    }
}

const mapDispatchToProps = (dispatch) => {
 
    return ({
            getEvents: () => dispatch(getEvents())
    })
}

        export default connect(mapStateToProps, mapDispatchToProps)(Events);