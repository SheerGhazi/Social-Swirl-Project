import React from 'react'
import cln_img from "../../assets/Images/Cln-img.png"

const Testimonial = () => {
  return (
    <div>
      <div className="bg-[#c5f5f7] min-h-screen flex items-center justify-center p-4 ">
        <div className="bg-white rounded-3xl shadow-lg max-w-4xl w-full overflow-hidden">
          <div className="p-8">
            <p className="text-gray-600 mb-2">
              we let our work speak for itself
            </p>
            <h2 className="text-3xl font-bold mb-6">
              We've helped our clients...
            </h2>

            <div className="flex flex-col gap-4 md:flex-row items-stretch">
              <div className="md:w-1/3 mb-4 md:mb-0 flex items-stretch">
                <img
                  src={cln_img}
                  alt="Client with certificate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black opacity-45 text-white p-2 flex flex-col justify-between  md:w-4/6 md:p-8 ">
                <div className="">
                  <h3 className="text-2xl font-semibold mb-4">
                    Rescue their projects
                  </h3>
                  <p className="mb-4 text-[#EDEDED99] opacity-85">
                    Lorem ipsum dolor sit amet consectetur. Massa eget urna sed
                    id commodo sed consequat rhoncus. Urna quis leo euismod
                    neque egestas pellentesque. Ac nunc mattis cursus gravida a
                    orci enim. Leo augue in duis mollis orci aliquam enim in.
                  </p>
                 
                </div>
                <div>
                    <p className="font-semibold">Danial khan</p>
                    <p className="text-sm tracking-wider text-[#EDEDED99] opacity-85">CEO of DK Recruitment</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
