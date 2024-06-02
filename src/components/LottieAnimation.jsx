import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

const MyLottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const fetchAnimationData = async () => {
            try {
                const response = await fetch('https://lottie.host/8e25bd95-690e-4df3-abe5-9faee32d2e5d/09rAhxjxQ5.json');
                const animationData = await response.json();
                setAnimationData(animationData);
            } catch (error) {
                console.error('Error fetching animation data:', error);
            }
        };

        fetchAnimationData();
    }, []);

    if (!animationData) {
        return <div>Loading animation...</div>;
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
};

export default MyLottieAnimation;
