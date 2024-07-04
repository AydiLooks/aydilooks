import React from 'react';
import { DotLottiePlayer } from '@dotlottie/player-component';

const MyLottiePlayer = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <DotLottiePlayer
        src="https://lottie.host/55d1c9d9-3c36-4e4d-ae37-befea2efc8e9/BixTiI8jwF.json"
        background="transparent"
        speed={1}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default MyLottiePlayer;
