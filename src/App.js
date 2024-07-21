import logo from './logo.png';
import mArc from './Main-Arcade.jpg';
import './App.css';

export function App() {
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
        <body class="row bodylike">
          <div class="spacer-down">
            <h1 class="title press-start-2p-regular">Play Off Rentals</h1>
            <h6 class="title-cap press-start-2p-regular">"Your Way to the ARCADE"</h6>
          </div>
          <div class="row">
            <div class="col">
              <div class='spacer'></div>
              <img src={mArc} class="" alt="Homepage Arcade Img" />
            </div>
            <div class="col">
              <div>
                  <h1>About Us</h1>
                  
                  <p>Welcome to Play Off Rentals, your premier destination for rental arcade games! We specialize in providing a wide variety of classic and modern arcade games for all types of events and gatherings. Whether you're hosting a corporate event, birthday party, wedding, or any other special occasion, we have the perfect arcade games to bring fun and excitement to your guests.
                  <br /> <br /> At Play Off Rentals, we believe in creating memorable experiences through the joy of gaming. Our extensive selection includes everything from timeless classics like Pac-Man and Donkey Kong to the latest and greatest in arcade gaming. Each game is carefully maintained and regularly serviced to ensure the best possible experience for our clients.
                  <br /> <br /> Our team is dedicated to delivering exceptional customer service and ensuring that your event is a resounding success. We offer flexible rental packages tailored to meet your specific needs and budget. From delivery and setup to on-site support, we handle all the details so you can focus on enjoying the festivities.
                  <br /> <br /> Thank you for considering Play Off Rentals for your arcade game rental needs. We look forward to helping you create an unforgettable event!
                  </p>

              </div>
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

//export default App;
