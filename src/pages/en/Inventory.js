import logo from '../../logo.png';
import '../../App.css';

export const Inventory = () => {
    return (
        <div className="App">
        <div class="formlike">
          <header>
            <nav class="new-nav navbar navbar-expand-lg navbar-light">
                      <div class="container-fluid">
                          <img src={logo} class="logo" alt="Play Off Rentals Logo" />
                          <div>
                              <a class="nav-items" href="/">Home</a>
                              <a class="nav-items" href="/en/Inventory">Inventory</a>
                              <a class="nav-item-button" href="/en/Rent">Rent</a>
                              <a class="nav-items" href="resume.html">Fr</a>
                              <a class="nav-items button-contact" href="/en/Contact">Contact Us</a>
                          </div>
                          <img src={logo} class="logo" alt="Play Off Rentals Logo" />
                      </div>
            </nav>
          </header>
          <body class="row bodylike">
            <div class="">
              <h1>Search Inventory</h1>
            </div>
            <div class="col">
                <div class='box-pl'></div>
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