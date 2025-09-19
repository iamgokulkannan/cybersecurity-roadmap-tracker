// components/MobileNav.js
import React, { useState } from 'react';

const MobileNav = ({ user, userData, selectedRegion, onRegionChange, onLogout, isLoggingOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionChange = (region) => {
    onRegionChange(region);
    setIsOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <div className="mobile-nav">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-header-content">
          <h1 className="mobile-title">Cybersecurity Roadmap</h1>
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <p className="mobile-welcome">Welcome back, {userData?.username || user.displayName}! 🚀</p>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button 
                className="mobile-menu-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
            <div className="mobile-menu-content">
              <div className="mobile-menu-section">
                <h4>🌍 Resources for:</h4>
                <div className="mobile-region-buttons">
                  <button 
                    className={`mobile-region-btn ${selectedRegion === 'india' ? 'active' : ''}`}
                    onClick={() => handleRegionChange('india')}
                  >
                    🇮🇳 India
                  </button>
                  <button 
                    className={`mobile-region-btn ${selectedRegion === 'global' ? 'active' : ''}`}
                    onClick={() => handleRegionChange('global')}
                  >
                    🌍 Global
                  </button>
                </div>
              </div>
              
              <div className="mobile-menu-section">
                <button 
                  className="mobile-logout-btn"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? '⏳ Logging out...' : 'Logout'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
