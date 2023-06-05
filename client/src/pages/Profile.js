import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar.js';
import ImpactModal from '../components/ImpactModal.js'
import Button from '../components/Button.js'



const Profile = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const handleClick = () => {
        console.log('Impact Button Clicked')
        setModalOpen(true)
    }

    return (
        <div className="home-body">
             <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}
        </div>
    )
}

export default Profile