import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../INOCddSheA.json';
import Auth from '../utils/auth';
import Button from '../components/Button'
import {Menu, MenuItem, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Button.css'


const Navbar = ({ openModal }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleClick = () => {
    console.log('Impact Button Clicked')
    setModalOpen(true)
  }

const isMobile = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed

  return (
    <div className="navbar">
      <Link className="logo" as={Link} to='/' >
        
          <div className="animation-container pl-8">
            <Lottie options={defaultOptions} />
            {/* <p className = "-mt-14 logoText">Bloom</p> */}
          </div>
      
      </Link>
      {isMobile ? (
        <>
      
          <MenuIcon  sx = {{fontSize: 50}} className = "menu-icon" onClick={toggleMenu} />
          <Menu
            anchorEl={document.querySelector('.menu-icon')}
            open={menuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {Auth.loggedIn() ? (
              <>
                <MenuItem onClick={handleMenuClose}>
                  <Link as={Link} to="/Profile" id="nav-font">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link as={Link} to="/Donate" id="nav-font">
                    Donate
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link as={Link} to="/Learn" id="nav-font">
                    Learn
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => { Auth.logout(); handleMenuClose(); }}>
                  Logout
                </MenuItem>
                <MenuItem className = "modalMenuItem" onClick={() => { openModal(); handleMenuClose(); }}>
                  <p className = "modalMenuItem">Log Your Impact</p>
                </MenuItem>
                
              </>
            ) : (
              <>
              </>
            )}
          </Menu>
        </>
      ) : (
      <ul className="nav-1">
        {Auth.loggedIn() ? (
          <>
            <li><Link as={Link} to='/Profile' id="nav-font">Profile</Link></li>
            <li><Link as={Link} to='/Donate' id="nav-font">Donate</Link></li>
            <li><Link as={Link} to='/Learn' id="nav-font">Learn</Link></li>
            <Link id="nav-font" onClick={Auth.logout}>Logout</Link>
            <Button content = {"Log Your Impact" } onClick={openModal}/>
          </>
        ): (
          <>
            {/* <button className='hamburger'>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
            </button> */}
          </>
        )}
      </ul>
      )}
    </div>
  );
}

export default Navbar

