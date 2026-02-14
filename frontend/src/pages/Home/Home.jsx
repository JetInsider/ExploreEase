import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <article>
          {/* HERO SECTION */}
          <section className="section hero"
            style={{ backgroundImage: "url('./assets/images/hero-bg-bottom.png') url('./assets/images/hero-bg-top.png')" }}>
            <div className="container">
              <img src="./assets/images/shape-1.png" width="61" height="61" alt="Vector Shape" className="shape shape-1" />
              <img src="./assets/images/shape-2.png" width="56" height="74" alt="Vector Shape" className="shape shape-2" />
              <img src="./assets/images/shape-3.png" width="57" height="72" alt="Vector Shape" className="shape shape-3" />

              <div className="hero-content">
                <p className="section-subtitle">Explore With Ease</p>
                <h2 className="hero-title">Your Trusted Travel Partner</h2>
                <p className="hero-text">
                  We turn travel dreams into reality — because every journey deserves to be extraordinary.
                </p>
                <div className="btn-group">
                  <Link to="/flights" className="btn btn-primary">Book Flights</Link>
                  <Link to="/hotels" className="btn btn-outline">Find Hotels</Link>
                </div>
              </div>

              <figure className="hero-banner">
                <img src="./assets/images/hero-banner.png" width="686" height="812" loading="lazy" alt="hero banner" className="w-100" />
              </figure>
            </div>
          </section>

          {/* FEATURES SECTION */}
          <section id="features" className="section features">
            <div className="container">
              <p className="section-subtitle">Our Features</p>
              <h2 className="h2 section-title">Why Choose ExploreEase</h2>

              <ul className="features-list">
                <li>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <ion-icon name="map-outline"></ion-icon>
                    </div>
                    <h3 className="h3 feature-title">Personalized Itinerary</h3>
                    <p className="feature-text">
                      Get tailored travel plans based on your preferences and interests.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <ion-icon name="time-outline"></ion-icon>
                    </div>
                    <h3 className="h3 feature-title">Real-Time Availability</h3>
                    <p className="feature-text">
                      Check real-time updates for flights, hotels, and attractions.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <h3 className="h3 feature-title">Local Experiences</h3>
                    <p className="feature-text">
                      Discover unique local tours and connect with local guides.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <ion-icon name="trending-up-outline"></ion-icon>
                    </div>
                    <h3 className="h3 feature-title">Price Comparison</h3>
                    <p className="feature-text">
                      Compare prices and find the best deals for your trip.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* DESTINATION SECTION */}
          <section className="section destination">
            <div className="container">
              <p className="section-subtitle">Destinations</p>
              <h2 className="h2 section-title">Choose Your Place</h2>

              <ul className="destination-list">
                <li className="w-50">
                  <Link to="/flights" className="destination-card">
                    <figure className="card-banner">
                      <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="1140" height="1100" loading="lazy" alt="Malé, Maldives" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Malé</p>
                      <h3 className="h3 card-title">Maldives</h3>
                    </div>
                  </Link>
                </li>

                <li className="w-50">
                  <Link to="/flights" className="destination-card">
                    <figure className="card-banner">
                      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="1140" height="1100" loading="lazy" alt="Bangkok, Thailand" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Bangkok</p>
                      <h3 className="h3 card-title">Thailand</h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/flights" className="destination-card">
                    <figure className="card-banner">
                      <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="1110" height="480" loading="lazy" alt="Kuala Lumpur, Malaysia" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Kuala Lumpur</p>
                      <h3 className="h3 card-title">Malaysia</h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/flights" className="destination-card">
                    <figure className="card-banner">
                      <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" width="1110" height="480" loading="lazy" alt="Kathmandu, Nepal" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Kathmandu</p>
                      <h3 className="h3 card-title">Nepal</h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/flights" className="destination-card">
                    <figure className="card-banner">
                      <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="1110" height="480" loading="lazy" alt="Jakarta, Indonesia" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Jakarta</p>
                      <h3 className="h3 card-title">Indonesia</h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* POPULAR TOURS SECTION */}
          <section className="section popular">
            <div className="container">
              <p className="section-subtitle">Featured Tours</p>
              <h2 className="h2 section-title">Most Popular Tours</h2>

              <ul className="popular-list">
                <li>
                  <div className="popular-card">
                    <figure className="card-banner">
                      <Link to="/itinerary-planner">
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="740" height="518" loading="lazy" alt="Kuala Lumpur, Malaysia" className="img-cover" />
                      </Link>
                      <span className="card-badge">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="P12D">12 Days</time>
                      </span>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-price">From $50.00</div>
                        <div className="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <data value="2">(2)</data>
                        </div>
                      </div>
                      <h3 className="card-title">
                        <Link to="/itinerary-planner">A good traveler has no fixed plans and is not intent on arriving.</Link>
                      </h3>
                      <address className="card-location">Kuala Lumpur, Malaysia</address>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-banner">
                      <Link to="/itinerary-planner">
                        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="740" height="518" loading="lazy" alt="Bangkok, Thailand" className="img-cover" />
                      </Link>
                      <span className="card-badge">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="P12D">12 Days</time>
                      </span>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-price">From $50.00</div>
                        <div className="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <data value="2">(2)</data>
                        </div>
                      </div>
                      <h3 className="card-title">
                        <Link to="/itinerary-planner">A good traveler has no fixed plans and is not intent on arriving.</Link>
                      </h3>
                      <address className="card-location">Bangkok, Thailand</address>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-banner">
                      <Link to="/itinerary-planner">
                        <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" width="740" height="518" loading="lazy" alt="Tokyo, Japan" className="img-cover" />
                      </Link>
                      <span className="card-badge">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="P12D">12 Days</time>
                      </span>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-price">From $50.00</div>
                        <div className="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <data value="2">(2)</data>
                        </div>
                      </div>
                      <h3 className="card-title">
                        <Link to="/itinerary-planner">A good traveler has no fixed plans and is not intent on arriving.</Link>
                      </h3>
                      <address className="card-location">Tokyo, Japan</address>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section id="about" className="section about">
            <div className="container">
              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">Explore all tour of the world with us.</h2>
                <p className="about-text">
                  We are your trusted travel partner, offering personalized experiences and expert guidance for your dream destinations.
                </p>
                <ul className="about-list">
                  <li className="about-item">
                    <div className="about-item-icon">
                      <ion-icon name="compass"></ion-icon>
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title">Tour guide</h3>
                      <p className="about-item-text">
                        Expert local guides to enhance your travel experience.
                      </p>
                    </div>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      <ion-icon name="briefcase"></ion-icon>
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title">Friendly price</h3>
                      <p className="about-item-text">
                        Competitive prices and exclusive deals for our customers.
                      </p>
                    </div>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      <ion-icon name="umbrella"></ion-icon>
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title">Reliable tour</h3>
                      <p className="about-item-text">
                        Carefully curated tours with attention to every detail.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link to="/flights" className="btn btn-primary">Book Now</Link>
              </div>
              <figure className="about-banner">
                <img src="./assets/images/about-banner.png" width="756" height="842" loading="lazy" alt="" className="w-100" />
              </figure>
            </div>
          </section>

          {/* BLOG SECTION */}
          <section className="section blog">
            <div className="container">
              <p className="section-subtitle">From The Blog Post</p>
              <h2 className="h2 section-title">Latest News & Articles</h2>
              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <Link to="/itinerary-planner">
                        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="740" height="518" loading="lazy" alt="Travel Tips" className="img-cover" />
                      </Link>
                      <span className="card-badge">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="12-04">04 Dec</time>
                      </span>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="author-wrapper">
                          <figure className="author-avatar">
                            <img src="./assets/images/author-avatar.png" width="30" height="30" alt="Travel Expert" />
                          </figure>
                          <div>
                            <Link to="/itinerary-planner" className="author-name">Travel Expert</Link>
                            <p className="author-title">Admin</p>
                          </div>
                        </div>
                        <time className="publish-time" datetime="10:30">10:30 AM</time>
                      </div>
                      <h3 className="card-title">
                        <Link to="/itinerary-planner">
                          A good traveler has no fixed plans and is not intent on arriving.
                        </Link>
                      </h3>
                      <Link to="/itinerary-planner" className="btn-link">
                        <span>Read More</span>
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="footer" style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}>
        <div className="container">
          <div className="footer-top">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Top destination</p>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Indonesia, Jakarta</Link>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Maldives, Malé</Link>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Australia, Canberra</Link>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Thailand, Bangkok</Link>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Morocco, Rabat</Link>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Categories</p>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Travel</Link>
              </li>
              <li>
                <Link to="/hotels" className="footer-link">Accommodation</Link>
              </li>
              <li>
                <Link to="/itinerary-planner" className="footer-link">Planning</Link>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Destinations</Link>
              </li>
              <li>
                <Link to="/hotels" className="footer-link">Experiences</Link>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Quick links</p>
              </li>
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/flights" className="footer-link">Flights</Link>
              </li>
              <li>
                <Link to="/hotels" className="footer-link">Hotels</Link>
              </li>
              <li>
                <Link to="/itinerary-planner" className="footer-link">Itinerary</Link>
              </li>
              <li>
                <Link to="/" className="footer-link">About</Link>
              </li>
            </ul>
            <div className="footer-list">
              <p className="footer-list-title">Get a newsletter</p>
              <p className="newsletter-text">
                For the latest deals and tips, travel no further than your inbox
              </p>
              <form className="newsletter-form">
                <input type="email" name="email" required placeholder="Email address" className="newsletter-input" />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <Link to="/" className="logo">ExploreEase</Link>
            <p className="copyright">
              &copy; 2024 <Link to="/" className="copyright-link">ExploreEase</Link>. All Rights Reserved
            </p>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-google"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* GO TO TOP */}
      <a href="#top" className="go-top" data-go-top aria-label="Go To Top">
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
    </>
  )
}

export default Home
