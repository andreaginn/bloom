import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import ImpactModal from '../components/ImpactModal';
import Advice from '../components/AdviceDisplay';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    console.log('Impact Button Clicked');
    setModalOpen(true);
  };

  return (
    <div className="homepage">
      <Helmet>
        <script
          type="text/javascript"
          src="https://widget.iqair.com/script/widget_v3.0.js"
        ></script>
      </Helmet>

      <div className="home-body">
        <div
          id="airiq-widget"
          name="airvisual_widget"
          key="647958edf44db0493341d68b"
        ></div>
        <Advice />
        <Button content="Log Your Impact" onClick={() => handleClick()} />
        {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}
      </div>

      <div className="lower-homepage"></div>
    </div>
  );
};

export default Home;
