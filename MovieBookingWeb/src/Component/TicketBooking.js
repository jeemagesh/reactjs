import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TicketBooking(props) {


    const [BookingDetails, setBookingDetails] = useState({
        bookingDate: '', movieName: '', numberOfSeats: '', showTime: ''
    });

    const set = name => {
        return ({ target: { value } }) => {
            setBookingDetails(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    return (

        <div class="container" style={{
            alignContent: "space-evenly",
            padding: "0 30%", overflow: "auto"
        }}>
            <br></br><br></br>
            <table class="table" >
                <tbody>
                    <tr><td colSpan="2">
                        <div class="alert alert-warning" id="mandatoryMissing" role="alert">
                            <span>
                                <p>Please provide date, time and seat!</p>
                            </span>
                        </div></td></tr>
                    <tr><td>Movie</td>
                        <td> {props.match.params.Movie}</td>
                    </tr>
                    {/* onChange={
                            event => setBookingDetails({
                            "bookingDate": event.target.value
                        })} */}
                    <tr><td>Show Date</td>
                        <td> <input id="showDate" type="Date" class="form-control datepicker"
                            value={BookingDetails.bookingDate}
                            onChange={set('bookingDate')}
                        ></input></td>
                        {/* onChange={(evt) => dateHandler(evt)} */}
                    </tr>
                    <tr>
                        <td>Show Time </td>

                        <td><input width="250px" type="choice" list="showTime" name="showTime"
                            value={BookingDetails.showTime}
                            onChange={set('showTime')}></input>
                            <datalist id="showTime" value="10:00 AM" >
                                <option value="10:00 AM" />
                                <option value="02:00 PM" />
                                <option value="05:00 PM" />
                                <option value="08:00 PM" />
                            </datalist>

                        </td>
                    </tr>
                    <tr><td>Seat #</td>
                        <td><input type="choice" name="Seats" list="seats"
                            value={BookingDetails.numberOfSeats}
                            onChange={set('numberOfSeats')} />
                            <datalist id="seats"  >
                                <option value="1" />
                                <option value="2" />
                                <option value="3" />
                                <option value="4" />
                                <option value="5" />
                                <option value="6" />
                            </datalist></td>
                    </tr>


                    <tr><td ></td><td><Link to={{
                        pathname: `/bookingConfirmation/${props.match.params.Movie}`,
                        BookingConfirmation: {
                            "bookingDate": BookingDetails.bookingDate,
                            "movieName": props.match.params.Movie,
                            "numberOfSeats": BookingDetails.numberOfSeats,
                            "showTime": BookingDetails.showTime

                        }

                    }}><button id="submit_button" class="btn btn-success btn-sm">Book Now</button></Link>

                    </td>
                    </tr>
                </tbody>

            </table>



        </div>
    )

}


export default TicketBooking