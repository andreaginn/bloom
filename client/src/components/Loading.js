import React from 'react';
import loadingAnimation from '../16519-jejakin-logo-animation-loader-and-email.json'
import Lottie from 'react-lottie';


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

const OpenaiLoading = () => {
  return <div>
       <Lottie options={loadingOptions} style={style} />
  </div>;
};

export default OpenaiLoading;