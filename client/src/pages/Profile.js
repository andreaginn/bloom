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
import { useMutation } from '@apollo/client'
import { UPDATE_GOAL } from '../utils/mutations.js'
import WeeklyGoal from '../components/WeeklyGoal.js';
import orangeFlower from '../images/OrangeFlower.png'
import lavendarPhoto from '../images/Lavendar.png'
import { Link } from 'react-router-dom';
import ElectricityBill from '../components/ElectricityBill.js';


const Profile = (refresh) => {
  const [weeklyGoalForm, setWeeklyGoalForm] = useState(false)
  const [weeklyGoal, setWeeklyGoal] = useState("")
  const { data, loading, refetch } = useQuery(QUERY_ME);


  // const [updateGoal, {error}] = useMutation(UPDATE_GOAL)
  // const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (refresh) {
      refetch(); // Perform necessary actions to refresh profile data
    }
  }, [refresh, refetch]);

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

  useEffect(() => {
    if (userData && userData.weeklyGoal) {
      setWeeklyGoal(userData.weeklyGoal.goalText)
    }
  }, [loading]);



  const triggerGoalForm = async () => {
    if (weeklyGoalForm === false) {
      setWeeklyGoalForm(true)
    }
    else {
      setWeeklyGoalForm(false)
      // await refetch()
      // setWeeklyGoal(userData.weeklyGoal.goalText)
    }
  }
  const updateGoalValue = (goal) => {
    setWeeklyGoal(goal)
  }
  console.log(userData.dailyImpact)


  if (loading) {
    return <div>
      <Lottie options={loadingOptions} style={style} />
    </div>;
  }


  return (
    <div className="profile-body">
      {/* Top Row - Total Comp and Electricity Bill */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-5">
        <div className="mt-5">
          <h2 className="text-4xl font-bold text-slate-700 text-center">You have contributed</h2>
          <h3 className="text-5xl font-bold text-orange-400 pl-10 text-center">{userData.impactScore} Kg</h3>
          <h2 className="text-4xl font-bold text-slate-700 pl-52 pb-3 text-center"> of carbon.</h2>
          <Link as={Link} to='/Donate' className="text-slate-700 text-center">Donate to one of our selected causes to offset your overall impact</Link>
        </div>
        <div className="mt-5 electricityBill">
          <ElectricityBill cost = {userData.electricityBill}/>
          {/* <ElectricityInput/> */}
        </div>
      </div>

      {/* Second Row - Flower and weekly Goal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-5">
          <img src={orangeFlower} alt="Orange Flower" className="w-full"></img>
        </div>
        <div className="mt-5">
          {!weeklyGoalForm && (
            <div className="weeklyGoal">
              <h1 className="text-3xl font-bold text-slate-700">Your Weekly Goal</h1>

              <div className="text-1xl text-slate-700 mt-3">
                {weeklyGoal}
              </div>
              <Button content={'Set New Goal'} onClick={triggerGoalForm} />
            </div>
          )}

          {weeklyGoalForm && <WeeklyGoal onClick={triggerGoalForm} onUpdateGoal={updateGoalValue} />}
        </div>
      </div>

      {/* Row 3 - Daily Impact Graph and Lavendar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-5 md:col-start-0 md:col-end-2">
          {!userData.dailyImpact[0] && <h2>Start logging your daily actions to see a detailed breakdown of your impact</h2>}

          {userData.dailyImpact[0] && <MainChart data={userData.dailyImpact} />}
        </div>
        <div className="mt-5 md:col-end-3 ">
          <img src={lavendarPhoto} alt="Lavender Flower" className="object-cover" />
        </div>
      </div>

      <div className="bg-slate-700 w-100">
        {userData.dailyImpact[0] &&
          userData.dailyImpact.map((dailyImpact) => (
            <ChartDisplay
              date={dailyImpact.date}
              travelContribution={dailyImpact.travelContribution}
              energyContribution={dailyImpact.energyContribution}
              foodContribution={dailyImpact.foodContribution}
            />
          ))}
      </div>
    </div>
  );
}

export default Profile