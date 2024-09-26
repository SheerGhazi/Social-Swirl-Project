import React from 'react';

const HomeBanner = ({ title1, title2, title3, description, btn1, btn2 }) => {
  return (
    <div>
      <section
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center lg:-mb-10"
        style={{ backgroundImage: "url(src/assets/Images/1.jpg)" }}
      >
        <div className="text-center space-y-6 mt-20">
          <h1 className="text-5xl md:text-8xl  font-bold uppercase tracking-wide space-x-3">
            <span className="text-primary block ">{title1}</span>
            <span className="text-primary ml-2">{title2}</span>
            <span className="text-secondary ml-4">{title3}</span>
          </h1>
          <p className="text-lg uppercase md:text-xl lg:text-4xl font-bold text-black py-8">
            {description}
          </p>
          <div className="flex justify-center space-x-4 ">
            <button className="bg-[#5BA5FF] text-white uppercase font-medium py-3 px-6 rounded hover:bg-blue-600">
              {btn1}
            </button>
            {/* Conditionally render btn2 only if it's provided */}
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
