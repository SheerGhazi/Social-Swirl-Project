import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
          {/* Column 1 - Logo */}
          <div className="flex items-start lg:-mt-10">
            <img
              src="src/assets/Images/logo.png"
              alt="Company Logo"
              className="h-40 w-auto"
            />
          </div>

          {/* Column 2 - Our Company */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">OUR COMPANY</h3>
            <p className="text-black text-sm">
              Dolor Ullamcorper Est, Eaqua Penatibus Inventore Eius Quod Exercitation Eiusmod
              Esse. Quos, Proident Varius, Dicta Quae Mauris, Impedit. Iste Ullamcorper Mollit.
            </p>
          </div>

          {/* Column 3 - Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">USEFUL LINKS</h3>
            
          </div>

          {/* Column 4 - Contact Detail */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">CONTACT DETAIL</h3>
            <p className="text-black text-xs font-semibold">
              FEEL FREE TO CONTACT & REACH US !
            </p>
            <p className="text-black text-sm my-10">
              ADDRESS: OFFICE# 16, P1 FLOOR,
              JEFF HEIGHT ROAD, LAHORE.
            </p>
            <p className="text-black text-xs mt-2 font-semibold">PHONE: + 92 306-4257447</p>
            <p className="text-black text-xs mt-2 font-semibold">PHONE: + 92 306-4257447</p>
            <p className="text-black text-xs mt-2 font-semibold">PHONE: + 92 306-4257447</p>
          </div>

          {/* Column 5 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">QUICK LINKS</h3>
           
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-black text-sm">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
