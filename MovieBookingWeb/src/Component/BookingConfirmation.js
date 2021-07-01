
import React, { useState, useEffect } from 'react';

import '../css/Movie.css';
import { useQRCode } from 'react-qrcodes';


function TicketBooking(props) {


    const [BookingConfirmation, setBookingConfirmation] = useState({


    });

 
    useEffect(() => {
        setBookingConfirmation(props.location.BookingConfirmation);
    }, [])

    console.log("BookingConfirmation ",BookingConfirmation);


    const [inputRef] = useQRCode({
        text: JSON.stringify(BookingConfirmation),
        options: {
          level: 'M',
          margin: 7,
          scale: 1,
          width: 200,
          color: {
            dark: '#010599FF',
            light: '#FFBF60FF',
          },
        },
      });

    return (
        <>
            <div class="alert alert-success" role="alert">
                Your ticket has been confirmed !! Please show the QR code at the counter . Enjoy your movie !!
            </div>
            <div style={{
                alignContent: "space-evenly", 
                padding: "0 300px", overflow: "auto"
            }}>
                <br></br><br></br>
                <table className="table" style={{width:"600px"}}>
                    <tbody>
                        <tr>
                            <td rowSpan="4"> <canvas ref={inputRef}/></td>
                            <td> Movie: {BookingConfirmation.movieName} </td>
                        </tr>
                        <tr>
                            <td> Booking Date: {BookingConfirmation.bookingDate} </td>
                        </tr>
                        <tr>
                            <td> Show Time: {BookingConfirmation.showTime}</td>
                        </tr>
                        <tr>
                            <td> Seat #s: {BookingConfirmation.numberOfSeats}</td>
                        </tr>


                        <tr><td ></td><td>
                        </td>
                        </tr>
                    </tbody>

                </table>


               
            </div></>
    )

}


export default TicketBooking