import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HomeBanner = ({ title1, title2, title3, description, btn1, btn2 }) => {
  const controls = useAnimation();

  // Define letter animation with underline effect
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 1, // Delay each letter for staggered animation
        duration: 0.5,
      },
    }),
  };

  // Function to restart the animation when it's complete
  const restartAnimation = async () => {
    await controls.start('visible');
    controls.set('hidden'); // Reset to hidden
    restartAnimation(); // Loop the animation
  };

  // Trigger the animation on mount
  useEffect(() => {
    restartAnimation();
  }, []);

  return (
    <div>
      <section
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center lg:-mb-10"
        style={{ backgroundImage: "url(src/assets/Images/1.jpg)" }}
      >
        <div className="text-center px-4 space-y-6 mt-20">
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-wide space-x-3">
            <span className="text-primary block">{title1}</span>
            <span className="text-primary ml-2">{title2}</span>
            <span className="text-secondary ml-4">
              {title3.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={controls} // Use animation controls
                  variants={letterAnimation}
                  className="inline-block border-b-2 border-secondary" // Underline effect on each letter
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="text-lg uppercase md:text-xl lg:text-4xl font-bold text-black py-8">
            {description}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#5BA5FF] text-white uppercase font-medium py-3 px-6 rounded hover:bg-blue-600">
              {btn1}
            </button>
            {btn2 && (
              <button className="bg-[#5BA5FF] uppercase text-white font-medium py-3 px-6 rounded hover:bg-blue-600">
                {btn2}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
