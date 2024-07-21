import React from 'react';
import logo from '../../logo.png';
import mArc from '../../Main-Arcade.jpg';
import '../../App.css';
import '../en/Inventory.css';
import '../en/Rent.css';

export const AppFr = () => {
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
                            <a class="nav-items" href="/fr/">Accueil</a>
                            <a class="nav-items" href="/en/Inventory">Inventaire</a>
                            <a class="nav-item-button" href="/en/Rent">Loyer</a>
                            <a class="nav-items" href="/">En</a>
                            <a class="nav-items button-contact" href="/en/Contact">Contactez-nous</a>
                        </div>
                        <img src={logo} class="logo" alt="Play Off Rentals Logo" />
                    </div>
          </nav>
        </header>
        <body class="row bodylike">
          <div class="spacer-down">
            <h1 class="title press-start-2p-regular">Play Off Rentals</h1>
            <h6 class="title-cap press-start-2p-regular">"Votre chemin vers l'ARCADE"</h6>
          </div>
          <div class="row">
            <div class="col">
              <div class='spacer'></div>
                <img src={mArc} class="" alt="Homepage Arcade Img" />
            </div>
            <div class="col">
              <div>
                  <h1>À propos de nous</h1>
                  <p>Bienvenue chez Play Off Rentals, votre destination principale pour la location de jeux d'arcade ! Nous nous spécialisons dans la fourniture d'une large gamme de jeux d'arcade classiques et modernes pour tous types d'événements et de rassemblements. Que vous organisiez un événement d'entreprise, une fête d'anniversaire, un mariage ou toute autre occasion spéciale, nous avons les jeux d'arcade parfaits pour apporter plaisir et excitation à vos invités.
                    <br /> <br /> Chez Play Off Rentals, nous croyons en la création d'expériences mémorables à travers la joie du jeu. Notre sélection étendue comprend tout, des classiques intemporels comme Pac-Man et Donkey Kong aux jeux d'arcade les plus récents et les plus populaires. Chaque jeu est soigneusement entretenu et régulièrement vérifié pour garantir la meilleure expérience possible à nos clients.
                    <br /> <br /> Notre équipe est dédiée à offrir un service client exceptionnel et à veiller au succès retentissant de votre événement. Nous proposons des forfaits de location flexibles adaptés à vos besoins et à votre budget. De la livraison et l'installation au support sur site, nous nous occupons de tous les détails pour que vous puissiez vous concentrer sur la fête.
                    <br /> <br /> Merci de considérer Play Off Rentals pour vos besoins en location de jeux d'arcade. Nous avons hâte de vous aider à créer un événement inoubliable !
                  </p>
              </div>
            </div>
          </div>
        </body>
        <footer class="spacer" id="ContactUs">
                    <div class="col">
                        <h2>Contactez-nous</h2>
                        <div class="row">
                            <div class="col">
                                <div>
                                    <h6>Lieu</h6>
                                    <p>456, avenue Elm, Ottawa, Ontario, Canada<br></br>PlayOffRentals@Ottawa.ca<br></br>XXX-XXX-XXXX</p>
                                </div>
                            </div>
                            <h6>Droits d'auteur @ Play Off Rentals 2024.</h6>
                        </div>
                    </div>
                    <div class="col">
                        <h2>Heures d'Ouverture</h2>
                        <div>
                            <div>
                                Lundi: 9 - 5
                            </div>
                            <div>
                                Mardi: 9 - 5
                            </div>
                            <div>
                                Mecredi: 9 - 5
                            </div>
                            <div>
                                Jeudi: 9 - 5
                            </div>
                            <div>
                                Vendredi: 9 - 5
                            </div>
                            <div>
                                Samedi: 9 - 5
                            </div>
                            <div>
                                Dimache: 9 - 5
                            </div>
                        </div>
                    </div>
        </footer>
      </div>
    </div>
  );
}

