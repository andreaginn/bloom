import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../fjO3sek7ZT.json';
import Auth from '../utils/auth';
import Button from '../components/Button'
import ImpactModal from './ImpactModal';
import '../styles/Button.css'

const Navbar = ({openModal}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleClick = () => {
    console.log('Impact Button Clicked')
    setModalOpen(true)
}

  return (
    <div className="navbar">
      <Link className="logo" as={Link} to='/' >
        <h1 className="logo-text">B<span>
          <div className="animation-container">
            <Lottie options={defaultOptions} />
          </div>
        </span>oom</h1>
      </Link>
      <ul className="navbar-nav">
        {Auth.loggedIn() ? (
          <>
            <li><Link as={Link} to='/Profile'>Profile</Link></li>
            <li><Link as={Link} to='/Donate'>Donate</Link></li>
            <li><Link as={Link} to='/Learn'>Learn</Link></li>
            <Link onClick={Auth.logout}>Logout</Link>
            {/* <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />} */}
            <Button content = {"Log Your Impact" }onClick={openModal}/>
          </>
        ) : (
          <>
          </>
        )}
      </ul>
      
    </div>
  );
}

export default Navbar