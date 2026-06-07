import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [searchType, setSearchType] = useState('Talent');
  
  // Track open state per individual menu key
  const [activeMenu, setActiveMenu] = useState(null); 
  const navbarRef = useRef(null);

  // Toggle or force close via automated hooks
  const handleMenuClick = (menuName, e) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  // Close menus automatically if a user clicks completely outside of the component area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Data Array: Hire Talent 
  const developmentSkills = [
    { title: "Full-Stack Developers", desc: "Front and back end development" },
    { title: "WordPress Developers", desc: "Build and maintain WordPress sites" },
    { title: "Web Developers", desc: "Build and maintain websites/apps" },
    { title: "Shopify Developers", desc: "Launch and customize Shopify stores" },
    { title: "Mobile App Developers", desc: "Native and cross-platform apps" },
    { title: "Webflow Developers", desc: "Build in Webflow, no code" },
    { title: "Front-End Developers", desc: "Pixel-perfect interfaces and UX" },
    { title: "Ecommerce Website Developers", desc: "Build stores that convert and scale" },
    { title: "React JS Developers", desc: "Fast, dynamic front ends with React" },
    { title: "Bubble.io Developers", desc: "No-code apps built on Bubble" }
  ];

  // Data Array: Why Upwork 
  const whyUpworkResources = [
    { title: "Success stories", desc: "Discover how teams work strategically to grow", category: "RESOURCES" },
    { title: "Reviews", desc: "See what it's like to collaborate on Upwork", category: "RESOURCES" },
    { title: "How to hire", desc: "Learn the different ways you can get work done", category: "RESOURCES" },
    { title: "How to find work", desc: "Learn about how to grow on your terms", category: "RESOURCES" },
    { title: "Upwork Updates", desc: "Our latest products, features, and partners", category: "WHAT'S NEW" },
    { title: "Research Institute", desc: "Insights and tools for business leaders", category: "WHAT'S NEW" },
    { title: "Blog", desc: "News and stories from the world's work marketplace", category: "WHAT'S NEW" },
    { title: "Release notes", desc: "Our latest product news and improvements", category: "WHAT'S NEW" }
  ];

  return (
    <nav className="custom-navbar" ref={navbarRef}>
      {/* Left Section: Logo & Navigation Links */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <ul className="navbar-links">
          {/* MENU 1: HIRE TALENT */}
          <li 
            className={`dropdown ${activeMenu === 'hire-talent' ? 'active' : ''}`}
            onClick={(e) => handleMenuClick('hire-talent', e)}
            onMouseEnter={() => handleMouseEnter('hire-talent')}
            onMouseLeave={handleMouseLeave}
          >
            Hire talent <span className="arrow">{activeMenu === 'hire-talent' ? '▲' : '▼'}</span>
            
            {activeMenu === 'hire-talent' && (
              <div className="mega-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                <div className="dropdown-category-title">DEVELOPMENT & IT</div>
                <div className="dropdown-grid">
                  {developmentSkills.map((item, idx) => (
                    <div key={idx} className="dropdown-grid-item">
                      <div className="item-title">{item.title}</div>
                      <div className="item-desc">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li className="dropdown">
            Get outcomes <span className="arrow">▼</span>
          </li>
          <li className="dropdown">
            Find work <span className="arrow">▼</span>
          </li>

          {/* MENU 2: WHY UPWORK */}
          <li 
            className={`dropdown ${activeMenu === 'why-upwork' ? 'active' : ''}`}
            onClick={(e) => handleMenuClick('why-upwork', e)}
            onMouseEnter={() => handleMouseEnter('why-upwork')}
            onMouseLeave={handleMouseLeave}
          >
            Why Upwork <span className="arrow">{activeMenu === 'why-upwork' ? '▲' : '▼'}</span>
            
            {activeMenu === 'why-upwork' && (
              <div className="mega-dropdown-menu double-panel" onClick={(e) => e.stopPropagation()}>
                {/* Left Side Static Branding Column */}
                <div className="dropdown-branding-panel">
                  <h3>Learn about Upwork</h3>
                  <p>Get to know the platform built for the future of work.</p>
                </div>

                {/* Right Side Content Management Grid Column */}
                <div className="dropdown-content-panel">
                  <div className="dropdown-category-title">RESOURCES</div>
                  <div className="dropdown-grid">
                    {whyUpworkResources.filter(r => r.category === "RESOURCES").map((item, idx) => (
                      <div key={idx} className="dropdown-grid-item">
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="dropdown-category-title" style={{ marginTop: '24px' }}>WHAT'S NEW</div>
                  <div className="dropdown-grid">
                    {whyUpworkResources.filter(r => r.category === "WHAT'S NEW").map((item, idx) => (
                      <div key={idx} className="dropdown-grid-item">
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>Pricing</li>
          <li>Enterprise</li>
        </ul>
      </div>

      {/* Right Section: Search & Auth Buttons */}
      <div className="navbar-right">
        <div className="search-container">
          <div className="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input type="text" placeholder="Search" className="search-input" />
          <div className="search-divider"></div>
          <div className="search-dropdown" onClick={() => setSearchType(searchType === 'Talent' ? 'Projects' : 'Talent')}>
            {searchType} <span className="arrow">▼</span>
          </div>
        </div>

        <div className="navbar-auth">
          <a href="#login" className="btn-login">Log in</a>
          <a href="#signup" className="btn-signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;