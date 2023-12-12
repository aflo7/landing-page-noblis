// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { CiMenuBurger, CiSearch } from 'react-icons/ci';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="nav-wrapper">
        <nav className="top-nav">
          <div className="left-nav-buttons">
            <div>Contact</div>
            <div>Locations</div>
          </div>
          <div className="icon-wrapper">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <TfiYoutube />
          </div>
        </nav>
      </div>
      <div className="bottom-nav-wrapper">
        <nav className="bottom-nav">
          <img
            src="https://noblis.org/wp-content/uploads/2022/01/noblis_blue-retina.png"
            alt="noblis"
            height="50px"
          />
          <div className="right-icons">
            <div>Javascript</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Made By</div>

            <div>Andres</div>
          </div>
          <div className="ci-wrapper">
            <div className="ci-menu-burger">
              <CiMenuBurger
                style={{ fontSize: '1.4rem', color: 'lightgray' }}
              />
            </div>

            <div className="ci-menu-burger">
              <CiSearch style={{ fontSize: '1.4rem', color: 'lightgray' }} />
            </div>
          </div>
        </nav>
      </div>
      <div id="earthBackground">
        <div
          style={{
            maxWidth: '800px',
            fontSize: '2.4rem',
            alignItems: 'center',
            display: 'flex',
            padding: '10px'
          }}
        >
          <p>Made to show off my frontend skills. A mock noblis website</p>
        </div>
      </div>
      <div className="missions-we-serve">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <h2>Missions We Serve</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>
            Noblis is an independent, nonprofit organization with a proud
            tradition of serving federal clients objectively and with the
            highest caliber of scientific and technical excellence. Our work
            makes an impact on the civil, defense, homeland security and
            intelligence & law enforcement missions that ensure our nation's
            vitality and security.
          </p>
        </div>
        <div className="civil-icon-wrapper">
          <div>
            <div>
              <img src="https://noblis.org/wp-content/uploads/2023/11/Civil.png" />
              <div>Civil</div>
            </div>
            <div>
              <img src="https://noblis.org/wp-content/uploads/2023/11/Civil.png" />
              <div>Defense</div>
            </div>

            <div>
              <img src="https://noblis.org/wp-content/uploads/2023/11/Civil.png" />
              <div>Health</div>
            </div>
            <div>
              <img src="https://noblis.org/wp-content/uploads/2023/11/Civil.png" />
              <div>Civil</div>
            </div>
            <div>
              <img src="https://noblis.org/wp-content/uploads/2023/11/Civil.png" />
              <div>Defense</div>
            </div>

            <div>
              <img src="https://noblis.org/wp-content/uploads/2023/11/Civil.png" />
              <div>Health</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
