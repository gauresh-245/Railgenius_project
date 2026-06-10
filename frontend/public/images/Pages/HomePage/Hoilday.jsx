import React from "react"
import "font-awesome/css/font-awesome.min.css";


import "./Holiday.css";
import Footer from "./Footer";

const Holiday = () => {

   
  return (
    <>
      <div className="popularContainerWrap">
        <div className="titleContainer">
          <h3 id="popular-train-routes">Popular Train Routes</h3>
        </div>
        <div className="routesGrid">
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Delhi</p>
            <p className="routeVia">
              <span>Via: </span>
              Lucknow, Patna, Kanpur, Prayagraj
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Mumbai</p>
            <p className="routeVia">
              <span>Via: </span>
              Ahmedabad, Surat, Delhi, Pune
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Chennai</p>
            <p className="routeVia">
              <span>Via: </span>
              Coimbatore, Madurai, Tiruchirappalli, Bangalore
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Kolkata</p>
            <p className="routeVia">
              <span>Via: </span>
              Delhi, Patna, Bangalore, Bhubaneshwar
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Bangalore</p>
            <p className="routeVia">
              <span>Via: </span>
              Chennai, Hubli, Delhi, Mumbai
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Hyderabad</p>
            <p className="routeVia">
              <span>Via: </span>
              Visakhapatnam, Mumbai, Delhi, Vijayawada
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Lucknow</p>
            <p className="routeVia">
              <span>Via: </span>
              Delhi, Mumbai, Varanasi, Gorakhpur
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Patna</p>
            <p className="routeVia">
              <span>Via: </span>
              Delhi, Kolkata, Mumbai, Saharsa
            </p>
          </div>
          <div className="routeItem">
            <img
              src="https://gos3.ibcdn.com/Trains-1668596973.svg"
              alt="train"
              className="routeIcon"
            />
            <p className="routeTitle">Trains to Ahmedabad</p>
            <p className="routeVia">
              <span>Via: </span>
              Mumbai, Delhi, Surat, Jaipur
            </p>
          </div>
        </div>
      </div>
      <div className="Main_Container23">
        <div className="header50">
          <h1 className="Header-Holiday">Holiday</h1>
        </div>

        <div className="main-slider">
          <div className="slider">
            <span style={{ "--i": 1 }}>
              <img src="/images/13.jpg" alt="Image 1" />
            </span>
            <span style={{ "--i": 2 }}>
              <img src="/images/31.jpg" alt="Image 2" />
            </span>
            <span style={{ "--i": 3 }}>
              <img src="/images/11.jpg" alt="Image 3" />
            </span>
            <span style={{ "--i": 4 }}>
              <img src="/images/16.jpg" alt="Image 4" />
            </span>
            <span style={{ "--i": 5 }}>
              <img src="/images/18.jpg" alt="Image 5" />
            </span>
            <span style={{ "--i": 6 }}>
              <img src="/images/21.jpg" alt="Image 6" />
            </span>
            <span style={{ "--i": 7 }}>
              <img src="/images/15.jpg" alt="Image 7" />
            </span>
            <span style={{ "--i": 8 }}>
              <img src="/images/14.jpg" alt="Image 8" />
            </span>
          </div>
        </div>
      </div>

      {/* About Us Section */}

      <div className="AboutUs-Section">
        <div className="AboutUs_container">
          <div className="content-section">
            <div className="AboutUs_title">
              <h1 className="AboutUs_H">About Us </h1>
            </div>

            <div className="AboutUs_content">
              <h3>
                RailGenius : An Advanced Railway Reservation System (Website)
              </h3>
              <p className="Holiday_para">
                The purpose of this project is to create a comprehensive Railway
                Reservation System that improves user satisfaction and
                operational efficiency. The scope includes functionalities for
                ticket booking, real-time availability checks, integration with
                travel services, and enhanced user features like 3D maps and
                voice assistance.
              </p>

              <div className="AboutUs_button">
                <a href="">Read More</a>
              </div>
            </div>

            <div className="AboutUs_social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="AboutUs-ImageSection">
            <img src="/images/SmallExpress.jpg" />
          </div>
        </div>
      </div>

      {/* Services Section */}

      <div className="Service_Container">
        <h1>Our Services</h1>

        <div className="row">
          <div className="service">
            <i class="fa-solid fa-ticket"></i>
            <h2>Book Tickets</h2>
            <p>
              Create a user-friendly interface for booking and managing railway
              tickets, including seat selection.
            </p>
          </div>

          <div className="service">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h2>Real Time Train Search</h2>
            <p>
              Implement a real-time train search feature that provides
              up-to-date information on train schedules.
            </p>
          </div>

          <div className="service">
            <i class="fa-solid fa-lock"></i>
            <h2>Security</h2>
            <p>
              Use modern technologies to secure transactions, protect user data,
              and optimize system performance.
            </p>
          </div>

          <div className="service">
            <i class="fa-solid fa-pen-to-square"></i>
            <h2>Customization </h2>
            <p>
              Customization options for travel environments refer to the ability
              to tailor aspects of a travel experience to meet the specific
              preferences, needs.
            </p>
          </div>

          <div className="service">
            <i class="fa-solid fa-utensils"></i>
            <h2>E-Catering</h2>
            <p>
              E-Catering services offer a variety of food options that may
              include local cuisines, regional specialties, fast food, or
              healthy choices.
            </p>
          </div>

          <div className="service">
            <i class="fa-solid fa-cloud"></i>
            <h2>. Weather Updates</h2>
            <p>
              Show current weather forecasts for the departure, arrival, and
              intermediate stations.
            </p>
          </div>
        </div>
      </div>

      <div className="Hotel_Container">
        <div className="TODO">
          <h2 className="head">Things To See & Do</h2>
          <center>
            <p className="head2">Most Loved Places</p>
          </center>

          <div className="Card1">
            <div className="card-container">
              <div className="card">
                <img src="/images/32.jpg"></img>
                <div className="card-content">
                  <div className="line">
                    <span class="badge">1</span>

                    <h1 className="Card_Header">Bangaram</h1>
                  </div>
                  <p>
                    A 20-minute speed boat ride from Agatti island, the
                    Banagaram atoll thread includes tiny islands of Thinnakara,
                    South Bangaram City, Pirili 1 and Pirili 2.
                  </p>

                  <hr className="bob" />

                  <div className="info">
                    <div className="info1">
                      <p className="para2">Suggested Time</p>
                      <h3 className="Days_Stay">1 to 2 days</h3>
                    </div>

                    <div className="info2">
                      <h1 className="Explore">Explore </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <img src="/images/33.jpg"></img>
                <div className="card-content">
                  <div className="line">
                    <span class="badge">2</span>

                    <h1 className="Card_Header">Kalpeni</h1>
                  </div>
                  <p>
                    Two small islets of Tilakkam and Pitti form a single atoll
                    with Kalpeni. The island is also known as Koefaini and is
                    popular for the enormous bay of coral debris believed.
                  </p>

                  <hr className="bob" />

                  <div className="info">
                    <div className="info1">
                      <p className="para2">Suggested Time</p>
                      <h3 className="Days_Stay">1 to 2 days</h3>
                    </div>

                    <div className="info2">
                      <h1 className="Explore">Explore </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <img src="/images/34.jpg"></img>
                <div className="card-content">
                  <div className="line">
                    <span class="badge">3</span>

                    <h1 className="Card_Header"> Lakshadweep Island</h1>
                  </div>
                  <p>
                    Bitra Island, the smallest island in Lakshadweep, is a
                    tranquil haven with a population of nearly 300. The island
                    is approximately 2 metres.
                  </p>

                  <hr className="bob" />

                  <div className="info">
                    <div className="info1">
                      <p className="para2">Suggested Time</p>
                      <h3 className="Days_Stay">1 to 2 days</h3>
                    </div>

                    <div className="info2">
                      <h1 className="Explore">Explore </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="head4">Resorts & Stays</p>

          <div className="Card1">
            <div className="card-container">
              <div className="card">
                <img src="/images/38.jpg" style={{ height: "300px" }}></img>
                <div className="card-content">
                  <div className="line">
                    <span class="badge">1</span>

                    <h1 className="Card_Header">Bangaram Beach Resort</h1>
                  </div>
                  <p>
                    Located in the centre of the small Bangaram island, the
                    beach resort offers AC and non-AC with surreal views of
                    sparkling coral reefs, shallow lagoons.
                  </p>
                </div>
              </div>

              <div className="card">
                <img src="/images/39.jpg" style={{ height: "280px" }}></img>
                <div className="card-content">
                  <div className="line">
                    <span class="badge">2</span>

                    <h1 className="Card_Header">Lakshadweep Samudram</h1>
                  </div>
                  <p>
                    Lakshadweep Samudram is a tourism package introduced by the
                    Society for Promotion of Nature Tourism and Sports. The
                    cruise begins from Kochi and covers the islands of
                    Kavaratti.
                  </p>
                </div>
              </div>

              <div className="card">
                <img src="/images/40.jpg" style={{ height: "300px" }}></img>
                <div className="card-content">
                  <div className="line">
                    <span class="badge">3</span>

                    <h1 className="Card_Header">
                      Kavaratti Island Beach Resort
                    </h1>
                  </div>
                  <p>
                    Located by the shimmering beaches of the north-west
                    Kavaratti, the beach resort is handled by the government
                    tourism board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday;
