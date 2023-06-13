import React, { useState, useEffect } from 'react';
import Button from '../components/Button.js';
import ImpactModal from '../components/ImpactModal.js';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Advice from '../components/AdviceDisplay';
import Auth from '../utils/auth.js'
import Login from '../components/Login.js';
import Signup from '../components/Signup.js';
import AirQuality from '../components/AirQuality.js';

const Home = () => {

    const [loginToggle, setLoginToggle] = useState(false)

    // const [modalOpen, setModalOpen] = useState(false)
    // const handleClick = () => {
    //     console.log('Impact Button Clicked')
    //     setModalOpen(true)
    // };

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://widget.iqair.com/script/widget_v3.0.js';
    //     script.async = true;
    //     script.setAttribute('data-cfasync', 'false');
    //     document.getElementById('airiq-widget').appendChild(script);


    //     return () => {
    //         document.getElementById('airiq-widget').removeChild(script);
    //     };

    // }, []);

    return (
        <div className="h-screen bg-cover bg-fixed bg-[url('./images/forest-background.jpg')]">

            <div>
                {Auth.loggedIn() ? (
                    <>

                        {/* <Button content={"Log Your Impact"} onClick={() => handleClick()} />
                {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />} */}
                    <div className="home-top">
                        <AirQuality />
                        <Advice />
                        </div>
                        <div className="missionStatement ">
                            <div className="text-4xl sm:text-7xl font-bold text-slate-700 m-3">At Bloom our mission is to help you help the world.</div>
                            <p className = "text-1xl text-slate-700 m-3">The continued destabilization of the global climate has rapidly become the greatest threat humanity currently faces. As average temperatures continue to rise we are predicted to experience the hottest 5 year period in recorded history between 2023-2028. This has caused devastating wildfires, threat of extinction for countless species, and the acidification of the oceans.</p>
        
                            <p className = "text-1xl text-slate-700 m-3">A majority of experts agree that we have 10 years to make a drastic change before this trend becomes irreversible. While a majority of the impact comes down to political policy and corporate accountability, we want to help you do your part. Changing our culture from a consumption based model to one that acts sustainably is going to be an essential shift for pushing humanity in the right direction.  With bloom you can get daily tips on how you can live a more sustainable lifestyle and  can track your daily actions to see a detailed breakdown of your carbon impact each day.</p>
                        </div>

                    </>
                ) : (
                    <div className="grid grid-cols-6 gap-4">
                        <div className="credentials mt-5 lg:col-start-1 lg:col-end-3 col-start-2 col-end-6">
                            {!loginToggle && <>
                                <Signup />
                                <div className="text-base text-slate-800 mt-4">Already have an account? <button onClick={() => setLoginToggle(true)}>Sign In</button></div>
                            </>}
                            {loginToggle && <>
                                <Login />
                                <div className="text-base text-slate-800 mt-4">Need to create an account? <button onClick={() => setLoginToggle(false)}>Sign Up</button></div>
                            </>}

                        </div>
                        <div className="missionStatement mt-5 lg:col-start-3 lg:col-end-7">
                            <div className="text-4xl sm:text-7xl font-bold text-slate-700 m-3">At Bloom our mission is to help you help the world.</div>
                            <div className="mt-5 mb-3 text-base sm:text-2xl text-slate-700">Bloom provides daily tips on how you can live a more sustainable lifestyle and lets you track daily actions for a detailed breakdown of your carbon emission impact.</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="lower-homepage">
            </div>
        </div>
    );
};

export default Home;