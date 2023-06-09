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
import {useMutation} from '@apollo/client'
import {UPDATE_GOAL} from '../utils/mutations.js'
import WeeklyGoal from '../components/WeeklyGoal.js';



const Profile = () => {
    const [weeklyGoalForm, setWeeklyGoalForm] = useState(false)
    const [weeklyGoal, setWeeklyGoal] = useState("My weekly goal is to finish this by Thursday")
    const { data, loading, refetch } = useQuery(QUERY_ME);

    
    // const [updateGoal, {error}] = useMutation(UPDATE_GOAL)
    // const [modalOpen, setModalOpen] = useState(false);
    
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
      console.log(userData)
    // const handleClick = () => {
    //     console.log('Impact Button Clicked')
    //     setModalOpen(true)
    // }

    const triggerGoalForm = async () => {
      if(weeklyGoalForm === false){
        setWeeklyGoalForm(true)
      }
      else{
        setWeeklyGoalForm(false)
        await refetch()
      }
    }
    console.log(userData.dailyImpact)
    if (loading) {
        return <div>
            <Lottie options = {loadingOptions} style = {style}/>
            </div>;
    }
    

    return (
        <div className="profile-body">
            <div className = "impactScoreDisplay">
                <h2>Your Total Carbon Impact</h2>
                <hr></hr>
                <h3>{userData.impactScore} Kg</h3>
                <p>Donate to one of our selected causes to offset your overall impact</p>
            </div>
        
            {!weeklyGoalForm && 
            <div className = "weeklyGoal">
            {userData.weeklyGoal.goalText}
            <Button content = {'Set New Goal'} onClick = {triggerGoalForm}/>
            </div> }

              {weeklyGoalForm && 
              <WeeklyGoal onClick = {triggerGoalForm}/>
              }

            {!userData.dailyImpact[0] && 
            <h2>Start logging your daily actions to see a detailed breakdown of your impact</h2>}

            {userData.dailyImpact[0] && 
            <MainChart data = {userData.dailyImpact}/>}
            
           
           
            {userData.dailyImpact[0] &&
            userData.dailyImpact.map(dailyImpact => (  <ChartDisplay date = {dailyImpact.date} travelContribution = {dailyImpact.travelContribution} energyContribution = {dailyImpact.energyContribution} foodContribution = {dailyImpact.foodContribution}  />))
            // <ChartDisplay date = {userData.dailyImpact[0].date} travelContribution = {userData.dailyImpact[0].travelContribution} energyContribution = {userData.dailyImpact[0].energyContribution} foodContribution = {userData.dailyImpact[0].foodContribution}  />
}
        </div>
    )
}

export default Profile