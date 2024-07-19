import React from 'react';
import logo from '../../logo.png';
import '../../App.css';
import './Inventory.css';

export const Thanks = () => {
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
                            <div>
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
                <body>
                    <div class="row bodylike">
                        <div class="spacer-down">
                            <h1 class="press-start-2p-regular">Confirmation Email # 2342349r02</h1>
                        </div>
                        <h2>
                            Dear Customer,
                            <br></br> <br></br>
                            Thank you for getting in touch with us. Your reference number is below:
                            <br></br> <br></br>
                            Reference Number: 2342349r02
                            <br></br> <br></br>
                            We appreciate your interest and the time needed to interact with our services. We aim to respond to all inquiries promptly, so if your request is urgent, please consider reaching out to our customer service hotline for immediate assistance.
                            <br></br> <br></br>
                            Thank you for choosing our service. We look forward to assisting you and addressing your needs.
                            <br></br> <br></br>
                            Best regards, <br></br>  <br></br>
                            [Play Off Rentals]
                        </h2>
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