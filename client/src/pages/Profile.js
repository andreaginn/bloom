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
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget.iqair.com/script/widget_v3.0.js';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        document.getElementById('airiq-widget').appendChild(script);
        

        return () => {
            document.getElementById('airiq-widget').removeChild(script);
        };

    }, []);

    return (
        <div className="home-body">
        </div>
    )
}

export default Profile