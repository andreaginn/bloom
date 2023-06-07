import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ImpactModal from '../components/ImpactModal.js'
import Button from '../components/Button.js'
import Chart from 'chart.js/auto'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries.js'
import '../styles/Profile.css'
import ChartDisplay from '../components/ChartDisplay.js';
import MainChart from '../components/MainChart.js';
import loadingAnimation from '../16519-jejakin-logo-animation-loader-and-email.json'
import Lottie from 'react-lottie';


const Profile = () => {
    const { data, loading } = useQuery(QUERY_ME);
    const [modalOpen, setModalOpen] = useState(false);
    
    const loadingOptions = {
        loop: false,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const style = {
        height: 110,
        width: 110,
      }

    var userData = data?.me || {};
    console.log(`User Data ${userData}`)

    const handleClick = () => {
        console.log('Impact Button Clicked')
        setModalOpen(true)
    }
    console.log(userData.dailyImpact)
    // const reversedDailyImpact = [...userData.dailyImpact].reverse();
    if (loading) {
        return <div>
            <Lottie options = {loadingOptions} style = {style}/>
            </div>;
    }

    return (
        <div className="profile-body">
            <div className = "impactScoreDisplay">
                <h2>Your Total Impact:</h2>
                {userData.impactScore} Kg
            </div>
            {/* <div>
                <DonateForm />
            </div> */}
             <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}

            <MainChart data = {userData.dailyImpact}/>
            {userData.dailyImpact[0] &&
            userData.dailyImpact.map(dailyImpact => (  <ChartDisplay date = {dailyImpact.date} travelContribution = {dailyImpact.travelContribution} energyContribution = {dailyImpact.energyContribution} foodContribution = {dailyImpact.foodContribution}  />))
            // <ChartDisplay date = {userData.dailyImpact[0].date} travelContribution = {userData.dailyImpact[0].travelContribution} energyContribution = {userData.dailyImpact[0].energyContribution} foodContribution = {userData.dailyImpact[0].foodContribution}  />
}
        </div>
    )
}

export default Profile