import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar.js';
import ImpactModal from '../components/ImpactModal.js'
import Button from '../components/Button.js'
import Chart from 'chart.js/auto'
import {useQuery} from '@apollo/client'
import {QUERY_ME} from '../utils/queries.js'
import '../styles/Profile.css'
import ChartDisplay from '../components/ChartDisplay.js';


const Profile = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const handleClick = () => {
        console.log('Impact Button Clicked')
        setModalOpen(true)
    }
    
    const {loading, data} = useQuery(QUERY_ME)
    
    const userData = data?.me || {};
    console.log(userData)

    if (loading) {
        return <h2>LOADING...</h2>;
      }
    return (
        <div className="home-body">
            <div className = "impactScoreDisplay">
                <h2>Your Total Impact:</h2>
                {userData.impactScore} Kg
            </div>
             <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}

            <ChartDisplay date = {userData.dailyImpact[0].date} travelContribution = {userData.dailyImpact[0].travelContribution} energyContribution = {userData.dailyImpact[0].energyContribution} foodContribution = {userData.dailyImpact[0].foodContribution}  />
            
        </div>
    )
}

export default Profile