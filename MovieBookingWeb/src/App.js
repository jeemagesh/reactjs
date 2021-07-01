
import './App.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Header from './Component/Header.js'

import MovieLatest from './Component/MovieLatest';
import Events from './Component/Events'
import MoviesUpcoming from './Component/MoviesUpcoming.js'
import MovieDetails from './Component/MovieDetails';
import TicketBooking from './Component/TicketBooking';
import BookingConfirmation from './Component/BookingConfirmation';
import MovieScrollerCarousel from './Component/MovieScrollerCarousel';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <br></br><br></br><br></br>
        <Switch>
          <Route path="/" exact component={MovieScrollerCarousel} />
          <Route path="/latestMovies" component={MovieLatest} />
          <Route path="/upcomingMovies" component={MoviesUpcoming} />
          <Route path="/nearbyEvents" component={Events} />
          <Route path="/movieDetails/:Movie" component={MovieDetails} />
          <Route path="/bookNow/:Movie" component={TicketBooking} />
          <Route path="/bookingConfirmation/:Movie" component={BookingConfirmation} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;
