import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import Button from '../components/Button.js';
import ImpactModal from '../components/ImpactModal.js';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
    
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
    <div className="homepage">
    <div className="home-body">
   <Helmet>
                <script
                    type="text/javascript"
                    src="https://widget.iqair.com/script/widget_v3.0.js"
                ></script>
            </Helmet>
            <Navbar />
            <div id="airiq-widget"
                key="647958edf44db0493341d68b">
            </div>
            <div className="home-transition-btn">
            <FontAwesomeIcon id="chevron" icon={faChevronDown} beatFade style={{color: "#e1e2e4",}} />
            </div>
            <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}
            
    </div>
    <div className="lower-homepage">
        
    </div>
    </div>
)
}


export default Home