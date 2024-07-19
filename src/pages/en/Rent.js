import React from 'react';
import logo from '../../logo.png';
import pacimg from '../pacimg.jpg';
import rrimg from '../rrimgv2.jpg';
import sfimg from '../sfimg.png';
import siimg from '../siimg.webp';
import '../../App.css';
import './Inventory.css';
import './Rent.css';

export const Rent = () => {
    return (
        <div className="App">
        <div class="formlike">
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
            <header>
                <nav class="new-nav navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <img src={logo} class="logo" alt="Play Off Rentals Logo" />
                            <div >
                                <a class="nav-items" href="/">Home</a>
                                <a class="nav-items" href="/en/Inventory">Inventory</a>
                                <a class="nav-item-button" href="/en/Rent">Rent</a>
                                <a class="nav-items" href="/fr/">Fr</a>
                                <a class="nav-items button-contact" href="/en/Contact">Contact Us</a>
                            </div>
                            <img src={logo} class="logo" alt="Play Off Rentals Logo" />
                        </div>
                </nav>
            </header>
            <body class="row bodylike">
                <div class="spacer-down">
                    <h1 class="press-start-2p-regular">Search Inventory</h1>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card-deck row">
                                <div class="card" style={{width: '18rem'}}>
                                    <img src={pacimg} class="card-img-top" alt="Pacman Arcade"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Pac-Man (1980)</h5>
                                        <p class="card-text">Navigate the maze, munch on dots, and outsmart the ghosts in this timeless arcade classic by Namco!</p>
                                        <h6 class="card-title">Renting Price: 50$ / Day</h6>
                                        <button class="inventory-button">Rent</button>
                                    </div>
                                </div>

                                <div class="card" style={{width: '18rem'}}>
                                    <img src={siimg} class="card-img-top" alt="Space Invaders Arcade"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Space Invaders (1978)</h5>
                                        <p class="card-text">Defend the Earth from waves of alien invaders in this groundbreaking shooter by Taito!</p>
                                        <h6 class="card-title">Renting Price: 50$ / Day</h6>
                                        <button class="inventory-button">Rent</button>
                                    </div>
                                </div>

                                <div class="card" style={{width: '18rem'}}>
                                    <img src={rrimg} class="card-img-top img-resize" alt="Ridge Racer Arcade"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Ridge Racer (1993)</h5>
                                        <p class="card-text">Experience high-speed thrills and master the art of drifting in Namco's exhilarating racing game!</p>
                                        <h6 class="card-title">Renting Price: 100$ / Day</h6>
                                        <h6 class="card-title">DECOMISSIONED</h6>
                                    </div>
                                </div>

                                <div class="card" style={{width: '18rem'}}>
                                    <img src={sfimg} class="card-img-top" alt="Street Fighter II Arcade"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Street Fighter II (1991)</h5>
                                        <p class="card-text">Step into the ring and challenge iconic fighters like Ryu and M. Bison in this legendary fighting game by Capcom!</p>
                                        <h6 class="card-title">Renting Price: 50$ / Day</h6>
                                        <button class="inventory-button">Rent</button>
                                    </div>
                                </div>

                        </div>
                    </div>

                <div class="col">
                        <h2>Checkout</h2>
                        <div class="card checkout-box">
                            <div class="row">
                                <div class="col">
                                    <h4>Start Date: </h4>
                                    <input type="datetime-local"/>
                                </div>
                                <div class="col">
                                    <h4>End Date: </h4>
                                    <input type="datetime-local"/>
                                </div>
                            </div>
                            <br></br>
                            <div>
                                <h4>Base Cost: XXX</h4>
                                <h4>Tax (HST) 13%: XXX</h4>
                                <h4>Total Cost: XXXX</h4>
                            </div>
                        </div>
                        <br></br>
                        <a href="/en/Thanks"><button class="submit-button">Submit</button></a>
                    </div>
                </div>

            </body>
            <footer class="spacer" id="ContactUs">
                        <div class="col">
                            <h2>Contact Us</h2>
                            <div class="row">
                                <div class="col">
                                    <div>
                                        <h6>Location</h6>
                                        <p>456 Elm Avenue, Ottawa, Ontario, Canada<br></br>PlayOffRentals@Ottawa.ca<br></br>XXX-XXX-XXXX</p>
                                    </div>
                                </div>
                                <h6>Copyright @ Play Off Rentals 2024.</h6>
                            </div>
                        </div>
                        <div class="col">
                            <h2>Hours Of Operation</h2>
                            <div>
                                <div>
                                    Monday: 9 - 5
                                </div>
                                <div>
                                    Tuesday: 9 - 5
                                </div>
                                <div>
                                    Wednesday: 9 - 5
                                </div>
                                <div>
                                    Thursday: 9 - 5
                                </div>
                                <div>
                                    Friday: 9 - 5
                                </div>
                                <div>
                                    Saturday: 9 - 5
                                </div>
                                <div>
                                    Sunday: 9 - 5
                                </div>
                            </div>
                        </div>
            </footer>
        </div>
  </div>
    );
}