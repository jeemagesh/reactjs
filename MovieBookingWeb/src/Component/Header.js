import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

    return (
        <div>
            <>

                <ul class="nav nav-pills nav-fill nav-justified">
                    {/* <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link" href="/latestMovies">Latest Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/upcomingMovies">Upcoming Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/nearbyEvents">Near By Events</a>
                    </li>
                    <li class="nav-item">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </li>
                </ul>

            </>

            {/* <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/latestMovies">Latest Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/upcomingMovies">Upcoming Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/nearbyEvents">Near By Events</a>
                </li>

            </ul> */}
        </div>
    )

}

export default Header;