import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="nav">
      <section className="nav-section">
        <span className="nav-logo">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" viewBox="0 0 125 60" fill="none">
              <rect y="7" width="41" height="46" rx="13" fill="#39DB4A" />
              <path
                d="M20.16 44.28C18.2933 44.28 16.6133 43.96 15.12 43.32C13.6267 42.6533 12.4533 41.72 11.6 40.52C10.7467 39.32 10.32 37.92 10.32 36.32H15.2C15.3067 37.52 15.7733 38.5067 16.6 39.28C17.4533 40.0533 18.64 40.44 20.16 40.44C21.7333 40.44 22.96 40.0667 23.84 39.32C24.72 38.5467 25.16 37.56 25.16 36.36C25.16 35.4267 24.88 34.6667 24.32 34.08C23.7867 33.4933 23.1067 33.04 22.28 32.72C21.48 32.4 20.36 32.0533 18.92 31.68C17.1067 31.2 15.6267 30.72 14.48 30.24C13.36 29.7333 12.4 28.96 11.6 27.92C10.8 26.88 10.4 25.4933 10.4 23.76C10.4 22.16 10.8 20.76 11.6 19.56C12.4 18.36 13.52 17.44 14.96 16.8C16.4 16.16 18.0667 15.84 19.96 15.84C22.6533 15.84 24.8533 16.52 26.56 17.88C28.2933 19.2133 29.2533 21.0533 29.44 23.4H24.4C24.32 22.3867 23.84 21.52 22.96 20.8C22.08 20.08 20.92 19.72 19.48 19.72C18.1733 19.72 17.1067 20.0533 16.28 20.72C15.4533 21.3867 15.04 22.3467 15.04 23.6C15.04 24.4533 15.2933 25.16 15.8 25.72C16.3333 26.2533 17 26.68 17.8 27C18.6 27.32 19.6933 27.6667 21.08 28.04C22.92 28.5467 24.4133 29.0533 25.56 29.56C26.7333 30.0667 27.72 30.8533 28.52 31.92C29.3467 32.96 29.76 34.36 29.76 36.12C29.76 37.5333 29.3733 38.8667 28.6 40.12C27.8533 41.3733 26.7467 42.3867 25.28 43.16C23.84 43.9067 22.1333 44.28 20.16 44.28Z"
                fill="white" />
              <path
                d="M63.96 21.96V44H59.4V41.4C58.68 42.3067 57.7333 43.0267 56.56 43.56C55.4133 44.0667 54.1867 44.32 52.88 44.32C51.1467 44.32 49.5867 43.96 48.2 43.24C46.84 42.52 45.76 41.4533 44.96 40.04C44.1867 38.6267 43.8 36.92 43.8 34.92V21.96H48.32V34.24C48.32 36.2133 48.8133 37.7333 49.8 38.8C50.7867 39.84 52.1333 40.36 53.84 40.36C55.5467 40.36 56.8933 39.84 57.88 38.8C58.8933 37.7333 59.4 36.2133 59.4 34.24V21.96H63.96ZM77.9766 44.36C76.2432 44.36 74.6832 44.0533 73.2966 43.44C71.9366 42.8 70.8566 41.9467 70.0566 40.88C69.2566 39.7867 68.8299 38.5733 68.7766 37.24H73.4966C73.5766 38.1733 74.0166 38.96 74.8166 39.6C75.6432 40.2133 76.6699 40.52 77.8966 40.52C79.1766 40.52 80.1632 40.28 80.8566 39.8C81.5766 39.2933 81.9366 38.6533 81.9366 37.88C81.9366 37.0533 81.5366 36.44 80.7366 36.04C79.9632 35.64 78.7232 35.2 77.0166 34.72C75.3632 34.2667 74.0166 33.8267 72.9766 33.4C71.9366 32.9733 71.0299 32.32 70.2566 31.44C69.5099 30.56 69.1366 29.4 69.1366 27.96C69.1366 26.7867 69.4832 25.72 70.1766 24.76C70.8699 23.7733 71.8566 23 73.1366 22.44C74.4432 21.88 75.9366 21.6 77.6166 21.6C80.1232 21.6 82.1366 22.24 83.6566 23.52C85.2032 24.7733 86.0299 26.4933 86.1366 28.68H81.5766C81.4966 27.6933 81.0966 26.9067 80.3766 26.32C79.6566 25.7333 78.6832 25.44 77.4566 25.44C76.2566 25.44 75.3366 25.6667 74.6966 26.12C74.0566 26.5733 73.7366 27.1733 73.7366 27.92C73.7366 28.5067 73.9499 29 74.3766 29.4C74.8032 29.8 75.3232 30.12 75.9366 30.36C76.5499 30.5733 77.4566 30.8533 78.6566 31.2C80.2566 31.6267 81.5632 32.0667 82.5766 32.52C83.6166 32.9467 84.5099 33.5867 85.2566 34.44C86.0032 35.2933 86.3899 36.4267 86.4166 37.84C86.4166 39.0933 86.0699 40.2133 85.3766 41.2C84.6832 42.1867 83.6966 42.96 82.4166 43.52C81.1632 44.08 79.6832 44.36 77.9766 44.36ZM102.744 21.6C104.424 21.6 105.917 21.96 107.224 22.68C108.557 23.4 109.597 24.4667 110.344 25.88C111.117 27.2933 111.504 29 111.504 31V44H106.984V31.68C106.984 29.7067 106.49 28.2 105.504 27.16C104.517 26.0933 103.17 25.56 101.464 25.56C99.7571 25.56 98.3971 26.0933 97.3838 27.16C96.3971 28.2 95.9038 29.7067 95.9038 31.68V44H91.3438V14.4H95.9038V24.52C96.6771 23.5867 97.6504 22.8667 98.8238 22.36C100.024 21.8533 101.33 21.6 102.744 21.6ZM119.64 19.04C118.814 19.04 118.12 18.76 117.56 18.2C117 17.64 116.72 16.9467 116.72 16.12C116.72 15.2933 117 14.6 117.56 14.04C118.12 13.48 118.814 13.2 119.64 13.2C120.44 13.2 121.12 13.48 121.68 14.04C122.24 14.6 122.52 15.2933 122.52 16.12C122.52 16.9467 122.24 17.64 121.68 18.2C121.12 18.76 120.44 19.04 119.64 19.04ZM121.88 21.96V44H117.32V21.96H121.88Z"
                fill="black" />
            </svg>
          </a>
        </span>
        <ul id="nav-list" className="nav-menu">
          <li className="navbar-item active"><a href="#">Home</a></li>
          <div className="dropdown-menu">
            <li className="navbar-item"><a href="#">Menu</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="menu-arrow" width="18" height="13" viewBox="0 0 18 13"
                fill="none">
                <line x1="1.5" y1="-1.5" x2="10.3242" y2="-1.5"
                  transform="matrix(0.772629 0.634857 -0.486209 0.873843 0.400879 4.59766)" stroke="#39DB4A"
                  stroke-width="3" stroke-linecap="round" />
                <line x1="1.5" y1="-1.5" x2="10.5963" y2="-1.5"
                  transform="matrix(-0.674688 0.738103 -0.591989 -0.805946 15.8478 0.875366)" stroke="#39DB4A"
                  stroke-width="3" stroke-linecap="round" />
              </svg>
            </li>
          </div>
          <li className="navbar-item"><a href="#">About Us</a></li>
          <div className="dropdown-menu">
            <li className="navbar-item"><a href="#">Services</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="menu-arrow" width="18" height="13" viewBox="0 0 18 13"
                fill="none">
                <line x1="1.5" y1="-1.5" x2="10.3242" y2="-1.5"
                  transform="matrix(0.772629 0.634857 -0.486209 0.873843 0.400879 4.59766)" stroke="#39DB4A"
                  stroke-width="3" stroke-linecap="round" />
                <line x1="1.5" y1="-1.5" x2="10.5963" y2="-1.5"
                  transform="matrix(-0.674688 0.738103 -0.591989 -0.805946 15.8478 0.875366)" stroke="#39DB4A"
                  stroke-width="3" stroke-linecap="round" />
              </svg>
            </li>
          </div>
          <li className="navbar-item"><a href="#">Offers</a></li>
        </ul>
        <div className="nav-btns"></div>
      </section>
    </header>
  );
};

export default Navbar;