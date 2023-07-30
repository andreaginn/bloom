import React, { useState, useEffect } from 'react';
import Button from '../components/Button.js'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries.js'
import '../styles/Profile.css'
import ChartDisplay from '../components/ChartDisplay.js';
import MainChart from '../components/MainChart.js';
import loadingAnimation from '../16519-jejakin-logo-animation-loader-and-email.json'
import Lottie from 'react-lottie';
import WeeklyGoal from '../components/WeeklyGoal.js';
import orangeFlower from '../images/OrangeFlower.png'
import lavendarPhoto from '../images/Lavendar2.png'
import { Link, Navigate} from 'react-router-dom';
import ElectricityBill from '../components/ElectricityBill.js';
import Aos from "aos";
import "aos/dist/aos.css";
import Auth from '../utils/auth.js'


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

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

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


  useEffect(() => {
   
    Aos.init({ duration: 2500});
}, []);


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


  if(!Auth.loggedIn()){
    return < Navigate to="/" />
  }

  if (loading) {
    return <div>
      <Lottie options={loadingOptions} style={style} />
    </div>;
  }


  return (
    <>
      {/* Top Row - Total Comp and Electricity Bill */}
      <div className="grid grid-cols-6 gap-4 mt-5 text-center">
        <div data-aos="fade-up" className="col-start-1 col-end-7 place-self-center lg:col-start-1 lg:col-end-4 m-5">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-700 text-center">You have contributed</h2>
          <h3 className="text-3xl md:text-6xl font-bold text-orange-400 pl-10 text-center">{userData.impactScore} Kg</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-700 pl-40 md:pl-52 pb-3 text-center"> of carbon.</h2>
          <Link as={Link} to='/Donate' className="text-slate-700 text-center">Donate to one of our selected causes to offset your overall impact</Link>
        </div>
        <div data-aos="fade-up" className="col-start-1 col-end-7 lg:col-start-4 lg:col-end-7 m-5 text-center">
          <ElectricityBill cost={userData.electricityBill} />
          {/* <ElectricityInput/> */}
        </div>
      </div>

      {/* Second Row - Flower and weekly Goal */}
      <div className="grid grid-cols-6 gap-4 items-center ml-5 mr-5">
        <div className="col-start-1 col-end-7 lg:col-start-1 lg:col-end-4">
          <img src={orangeFlower} alt="Orange Flower" className="w-full"></img>
        </div>
        <div data-aos="fade-up" className="col-start-1 col-end-7 lg:col-start-4 lg:col-end-7 text-center -mt-5">
          <hr className="mb-3"></hr>
          {!weeklyGoalForm && (
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-700">Your Weekly Goal</h1>

              <div className="text-1xl md:text-2xl text-slate-700 mt-3">
                {weeklyGoal}
              </div>
              <Button content={'Set New Goal'} onClick={triggerGoalForm} />
            </div>
          )}

          {weeklyGoalForm && <WeeklyGoal onClick={triggerGoalForm} onUpdateGoal={updateGoalValue} />}
        </div>
      </div>

      {/* Row 3 - Daily Impact Graph and Lavendar */}
      <div className="grid grid-cols-8 gap-4 text-center">
        <div data-aos="fade-up" className="pb-5 col-start-1 col-end-9 md:col-start-1 md:col-end-6 items-top m-5">
          {!userData.dailyImpact[0] && <h2>Start logging your daily actions to see a detailed breakdown of your impact</h2>}

          {userData.dailyImpact[0] && <MainChart data={userData.dailyImpact} />}
          <p className="text-slate-700 font-bold text-center pt-3">In an average U.S. household, eliminating the transport of food for one year could save the GHG equivalent of driving 1,000 miles, while shifting to a vegetarian meal one day a week could save the equivalent of driving 1,160 miles</p>
        </div>
        <div className=" col-start-1 col-end-9 md:col-start-6 md:col-end-9 w-full items-bottom">
          <img src={lavendarPhoto} alt="Lavender Flower" className="object-cover h-full" />
        </div>
      </div>

      <div className="bg-slate-700 w-100 p-3 pt-3">
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
    </>
  );
}

export default Profile