import React from "react";
import VideoBG from "../components/VideoBG";
import BounceCards from "../components/BounceCards";
import SplitText from "../components/SplitText";

const Hero = () => {
    const images = [
        "https://picsum.photos/400/400?grayscale",
        "https://picsum.photos/500/500?grayscale",
        "https://picsum.photos/600/600?grayscale",
        "https://picsum.photos/700/700?grayscale",
        "https://picsum.photos/300/300?grayscale",
    ];

    const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)",
    ];
    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center text-center">
            {/* Background */}
            <VideoBG />
            <div className="col text-white">
                <SplitText
                    text="Hello, you!"
                    className="text-2xl font-semibold text-center"
                    delay={50}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    showCallback
                />

                {/* Foreground content */}
                <div className="relative z-10 flex items-center justify-center mt-30">
                    <BounceCards
                    className="custom-bounceCards"
                    images={images}
                    containerWidth={500}
                    containerHeight={250}
                    animationDelay={1}
                    animationStagger={0.08}
                    easeType="elastic.out(1, 0.5)"
                    transformStyles={transformStyles}
                    enableHover={true}
                    />
                </div>
            </div>

        </div>
    );
};

export default Hero;
