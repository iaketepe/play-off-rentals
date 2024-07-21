import React from 'react';
import logo from '../../logo.png';
import '../../App.css';
import './Inventory.css';
import './Contact.css';

export const Payment = () => {
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
                        <h1 class="press-start-2p-regular">Payment</h1>
                    </div>
                    <form action='/en/Thanks'>
                            <div class="mb-3">
                                <label for="firstName" class="form-label">First name</label>
                                <input type="text" class="form-control" id="firstName" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="lastName" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="emailAddress" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="emailAddress" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="ccn" class="form-label">Credit Card Number:</label>
                                <input type="tel" class="form-control" inputmode="numeric" pattern="[0-9\s]{13,19}" 
                                        id="ccn"
                                        maxlength="19" 
                                        placeholder="xxxx xxxx xxxx xxxx" required>
                                </input>
                            </div>
                            <div class="mb-3">
                            <button class="contact-button">Submit</button>
                            </div>
                        </form>
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