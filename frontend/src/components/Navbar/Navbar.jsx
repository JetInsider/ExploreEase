import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './Navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })
    setIsDropdownOpen(false)
  }

  const handleAuth = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } })
    } else {
      loginWithRedirect()
    }
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
    closeNav()
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
    closeNav()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} data-header>
      <div className="container">
        <div className="nav-shell">
          <div className="nav-row">
            {/* Left: Logo and Mobile Toggle */}
            <div className="nav-left">
              <Link to="/" onClick={closeNav}>
                <h1 className="logo">ExploreEase</h1>
              </Link>

              <button
                className="nav-toggle-btn"
                data-nav-toggle-btn
                aria-label="Toggle Menu"
                onClick={toggleNav}
              >
                <ion-icon name="menu-outline" className="open"></ion-icon>
                <ion-icon name="close-outline" className="close"></ion-icon>
              </button>
            </div>

            {/* Center: Navigation Links */}
            <div className="nav-center">
              <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
                <ul className="navbar-list flex !gap-10">
                  <li>
                    <Link
                      to="/"
                      className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                      onClick={closeNav}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/flights"
                      className={`navbar-link ${isActive('/flights') ? 'active' : ''}`}
                      onClick={closeNav}
                    >
                      Flights
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels"
                      className={`navbar-link ${isActive('/hotels') ? 'active' : ''}`}
                      onClick={closeNav}
                    >
                      Hotels
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/itinerary-planner"
                      className={`navbar-link ${isActive('/itinerary-planner') ? 'active' : ''}`}
                      onClick={closeNav}
                    >
                      Itinerary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/attractions"
                      className={`navbar-link ${isActive('/attractions') ? 'active' : ''}`}
                      onClick={closeNav}
                    >
                      Attractions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="navbar-link"
                      onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right: Login/User Actions */}
            <div className="nav-right">
              <div className="nav-actions">
                {isAuthenticated ? (
                  <div className="user-profile">
                    <div className="user-info" onClick={handleLogout}>
                      <span className="user-name">Hi, {user?.name || user?.email || 'User'}</span>
                      <span className="hover-text">Logout</span>
                    </div>
                  </div>
                ) : (
                  <button onClick={handleAuth} className="btn btn-primary">
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
