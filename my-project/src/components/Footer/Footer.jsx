import React from 'react';

// Import assets
import hplinkedInwhite from '../../assets/img/homepgimg/hplinkedInwhite.svg';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="hp-footerTop px-24 py-12 flex justify-between">
        <div className="hp-footerCategories">
          <p className="mb-4 fcHeading text-[#E7E7E7] font-bold">Our Capabilities</p>
          <p className='mb-4 '><a href="immersive_technology.html" className=" text-[#E7E7E7]">Immersive Tech</a></p>
          <p className='mb-4 '><a href="digital_products.html" className="text-[#E7E7E7]">Digital production hub</a></p>
          <p className='mb-4 '><a href="medtrixMedcom.html" className=" text-[#E7E7E7]">Medical communication</a></p>
          <p className='mb-4 '><a href="case-player.html" className=" text-[#E7E7E7]">Case Player</a></p>
        </div>

        <div className="hp-footerCategories">
          <p className="mb-4 fcHeading text-[#E7E7E7] font-bold">About Us</p>
          <p className='mb-4 '><a href="index.html#Our-Clients" className="mb-4 highlightRed text-[#E7E7E7] text-[rgb(243,74,80)] !important font-bold">Clients</a></p>
          <p className='mb-4 '><a href="index.html#hp-sectionFive" className="mb-4 highlightRed text-[#E7E7E7]  text-[rgb(243,74,80)] !important font-bold">Our Team</a></p>
        </div>

        <div className="hp-footerCategories">
          <p className="mb-4 fcHeading text-[#E7E7E7] font-bold"><a href="ourWork.html" className="text-[#E7E7E7]">Our Work</a></p>
        </div>

        <div className="hp-footerCategories">
          <p className="mb-4 fcHeading text-[#E7E7E7] font-bold"><a href="news_and_updates.html" className="text-[#E7E7E7]">News and Updates</a></p>
        </div>

        <div className="hp-footerCategories">
          <p className="mb-4 fcHeading text-[#E7E7E7] font-bold">
            <a href="#contactIndex" className="highlightRed text-[#E7E7E7]  text-[rgb(243,74,80)] !important font-bold">Contact Us</a>
          </p>
          <p className="mb-4 text-[#E7E7E7]">USA</p>
          <p className="mb-4 text-[#E7E7E7]">India</p>
        </div>
      </div>

      <div className="hp-footerBottom px-24 py-6 flex justify-between text-white text-sm font-medium">
        <div className="hp-leftContainer flex space-x-4">
          <div><a href="./privacy-policy.html" className="text-white">Privacy Policy</a></div>
          <div className="border-l border-white"></div>
          <div><a href="./terms-conditions.html" className="text-white">Terms and Conditions</a></div>
        </div>
        
        <div className="hp-rightContainer flex items-center space-x-4">
          <div className="footerLinkedIn">
            <a href="https://www.linkedin.com/company/medtrix-healthcare" target="_blank" rel="noopener noreferrer">
              <img src={hplinkedInwhite} alt="LinkedIn" className="w-6 h-6"/>
            </a>
          </div>
          <div>© 2024. All rights reserved</div>
          <div className="border-l border-white"></div>
          <div>Medtrix Healthcare</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
