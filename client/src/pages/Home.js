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

                </>
                ) : (
                 <div className = "credentials">
                    <Signup/>
                    <Login/>
                </div>
                ) }
            </div>
            <div className="lower-homepage">

            </div>
        </div>
    );
};

export default Home;