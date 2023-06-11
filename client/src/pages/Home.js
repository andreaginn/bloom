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
        <div className="homepage">

            <div className="home-body">
                {Auth.loggedIn() ? (
                <>
                <Helmet>
                    <script
                        type="text/javascript"
                        src="https://widget.iqair.com/script/widget_v3.0.js"
                    ></script>
                </Helmet>

                <div id="airiq-widget"
                    key="647958edf44db0493341d68b">
                </div>
                <Advice />

                <div className = "missionStatement">
                <h1>At Bloom our mission is to help you help the world.</h1>
                <p>The continued destabilization of the global climate has rapidly become the greatest  threat humanity currently faces.  As average temperatures continue to rise we are predicted to experience the hottest 5 year period in recorded history between 2023-2028.  This has caused devastating wildfires, threat of extinction for countless species, and the acidification of the oceans.  A majority of experts agree that we have 10 years to make a drastic change before this trend become irreversible, and while a majority of the impact comes down to political policy and corporate accountability we want to help you do your part.  Changing our culture from a consumption based model to one that acts sustainably is going to be an essential shift for pushing humanity in the right direction.  With bloom you can get daily tips on how you can live a more sustainable lifestyle and  can track your daily actions to see a detailed breakdown of your carbon impact each day.</p>
                </div>

                </>
                ) : (
                <div className = "credentials-homepage">
    
                 <div className = "credentials">
                    {!loginToggle && <>
                        <Signup/>
                        <p>Already have an account? <button onClick = {() =>setLoginToggle(true)}>Sign In</button></p>
                    </>}
                   {loginToggle && <>
                    <Login/>
                    <p>Need to create an account? <button onClick = {() =>setLoginToggle(false)}>Sign Up</button></p>
                   </>}
                    
                </div>
                <div className = "missionStatement">
                <h1>At Bloom our mission is to help you help the world.</h1>
                <p>The continued destabilization of the global climate has rapidly become the greatest  threat humanity currently faces.  As average temperatures continue to rise we are predicted to experience the hottest 5 year period in recorded history between 2023-2028.  This has caused devastating wildfires, threat of extinction for countless species, and the acidification of the oceans.  A majority of experts agree that we have 10 years to make a drastic change before this trend become irreversible, and while a majority of the impact comes down to political policy and corporate accountability we want to help you do your part.  Changing our culture from a consumption based model to one that acts sustainably is going to be an essential shift for pushing humanity in the right direction.  With bloom you can get daily tips on how you can live a more sustainable lifestyle and  can track your daily actions to see a detailed breakdown of your carbon impact each day.</p>
                </div>
                </div>
                ) }
            </div>
            <div className="lower-homepage">

            </div>
        </div>
    );
};

export default Home;