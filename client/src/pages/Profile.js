import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar.js';
import ImpactModal from '../components/ImpactModal.js'
import Button from '../components/Button.js'
import Chart from 'chart.js/auto'
import {useQuery} from '@apollo/client'
import {QUERY_ME} from '../utils/queries.js'
import '../styles/Profile.css'


const Profile = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const handleClick = () => {
        console.log('Impact Button Clicked')
        setModalOpen(true)
    }
    
    const {loading, data} = useQuery(QUERY_ME)
    console.log(data)
    const userData = data?.me || {};

    if (loading) {
        return <h2>LOADING...</h2>;
      }
    return (
        <div className="home-body">
            <div className = "impactScoreDisplay">
                <h2>Your Total Impact:</h2>
                me.impactScore Here
                {userData.impactScore}
            </div>
             <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}
            <div className = "chartDisplay">
            Place Holder Chart Box
            </div>
            
        </div>
    )
}

export default Profile