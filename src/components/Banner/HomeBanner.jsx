import React from 'react'

const HomeBanner = () => {
  return (
    <div>
      <section
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center lg:-mb-10"
        style={{ backgroundImage: "url(src/assets/Images/1.jpg)" }}
      >
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-8xl  font-bold tracking-wide">
            <span className="text-[#1774E4] block">YOUR</span>
            <span className="text-[#1774E4] ml-2">SEARCH ENDS</span>
            <span className="text-[#FEC842] ml-2">HERE</span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-black py-8">
            Web development with Social Swirl.
          </p>
          <div className="flex justify-center space-x-4 ">
            <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded hover:bg-blue-600">
              HIRE US NOW
            </button>
            <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded hover:bg-blue-600">
              JOIN US NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBanner
