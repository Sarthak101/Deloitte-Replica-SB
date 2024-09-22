import React, { useState } from "react";
import "./App.css"; // Assuming the CSS file contains the styles

function App() {
  const [isDropdownOpen, setDropdownOpen] = useState({
    services: false,
    industries: false,
    careers: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="https://www2.deloitte.com/content/dam/assets/logos/deloitte.svg"
            alt="Deloitte Logo"
            style={{ width: '150px', height: 'auto' }} // Adjusted width
          />
        </div>
        <nav>
          <ul className="nav-list">
            <li
              className="dropdown"
              onMouseEnter={() => toggleDropdown("services")}
              onMouseLeave={() => toggleDropdown("services")}
            >
              <button>Services</button>
              {isDropdownOpen.services && (
                <ul className="dropdown-menu">
                  <li>Consulting</li>
                  <li>Advisory</li>
                  <li>Tax</li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => toggleDropdown("industries")}
              onMouseLeave={() => toggleDropdown("industries")}
            >
              <button>Industries</button>
              {isDropdownOpen.industries && (
                <ul className="dropdown-menu">
                  <li>Technology</li>
                  <li>Finance</li>
                  <li>Healthcare</li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => toggleDropdown("careers")}
              onMouseLeave={() => toggleDropdown("careers")}
            >
              <button>Careers</button>
              {isDropdownOpen.careers && (
                <ul className="dropdown-menu">
                  <li>Job Openings</li>
                  <li>Internships</li>
                  <li>Graduate Programs</li>
                </ul>
              )}
            </li>
            <li className="search-bar">
              <input type="text" placeholder="Search" />
            </li>
            <li>
              <select className="language-switch">
                <option>EN</option>
                <option>FR</option>
                <option>ES</option>
              </select>
            </li>
            <li>
            <button class="call-button">
  <i class="fas fa-phone-alt"></i> 
</button>
            </li>
            <li>
            <button class="login-button">
  <i class="fas fa-user"></i>
</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Showcase Section */}
      <div
        className="showcaseimage"
        style={{
          backgroundImage: "url('https://www2.deloitte.com/content/dam/Deloitte/in/Images/header_images/in-banner-govt-summit-2024-noexp.png/_jcr_content/renditions/cq5dam.web.1400.350.desktop.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          color: "#fff",
        }}
      >
        <div className="showcase-content-wrap">
          <div className="showcase-basic-content fade-load">
            <div className="content-wrap">
              <h1>Ārohaṇa | Growth with Impact</h1>
              <h2 className="showcase-content-height">Government Summit</h2>
              <div className="reverse-btn button">Click here to read more</div>
            </div>
          </div>
        </div>
      </div>

      
      <section className="featured-section">
  <div className="featured-cards">
    <div className="card">
      <div className="article-image">
        <img
          alt="Enterprise Growth Awards 2024"
          src="https://www2.deloitte.com/content/dam/Deloitte/in/Images/header_images/in-banner-ad-region-50-09.09-final-noexp.png/_jcr_content/renditions/cq5dam.web.1400.350.desktop.jpeg"
        />
      </div>
      <div className="article-text">
        <p className="promo-label">Article</p>
        <h2>Enterprise Growth Awards 2024</h2>
        <p className="description-short">
          The Enterprise Growth Awards recognise and celebrate the next generation of private companies across the four regions of India.
        </p>
        <p className="description">
          The Enterprise Growth Award initiative celebrates the top 200 private companies across four regions, with 50 winners each in North, South, and West, and 25 winners in the East. Recognising their leadership, innovation, growth, customer centricity, adaptability, and inclusion.
        </p>
      </div>
    </div>

    <div className="card">
      <div className="article-image">
        <img
          alt="SmartX"
          src="https://www2.deloitte.com/content/dam/Deloitte/in/Images/header_images/in-banner-technology-smartx-page-10.09-noexp.png/_jcr_content/renditions/cq5dam.web.1400.350.desktop.jpeg"
        />
      </div>
      <div className="article-text">
        <p className="promo-label">Perspectives</p>
        <h2>SmartX: Linking Devices and Data</h2>
        <h3>Empowering service providers to optimise operations, enhance customer experiences, and drive new revenue opportunities in the market.</h3>
      </div>
    </div>
  </div>
</section>




      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <span className="bx bxs-bulb icon"></span>
            <h3>Consulting</h3>
            <p>Expert advice to help you achieve business success.</p>
          </div>
          <div className="card">
            <span className="bx bx-code-alt icon"></span>
            <h3>Development</h3>
            <p>Comprehensive solutions for web and mobile applications.</p>
          </div>
          <div className="card">
            <span className="bx bxs-bar-chart-alt-2 icon"></span>
            <h3>Marketing</h3>
            <p>Strategies that drive results and ensure growth.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Deloitte. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
