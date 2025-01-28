import React from 'react'
import Header from '../Header/Header'
import MedLogo from '../../assets/img/homepgimg/hpmedtrixsmalllogo.svg'
import MedAbout from '../../assets/img/homepgimg/medtrixphoto.png'
import hpmedtrixsmalllogo from '../../assets/img/homepgimg/hpmedtrixsmalllogo.svg'
import whitebars from '../../assets/img/homepgimg/hp-whitebars.svg'
import hpellipse from '../../assets/img/homepgimg/hpellipse.svg'
import hplinkedIn from '../../assets/img/homepgimg/hplinkedIn.svg'
import hpkumar from '../../assets/img/homepgimg/hpkumar.png'
import hpvimal from '../../assets/img/homepgimg/hpvimal.png'
import SectionFive from '../SectionFive/SectionFive'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import hparrow from '../../assets/img/homepgimg/hparrow.svg';
import hpmainbg  from '../../assets/img/homepgimg/hpmainbg.svg'
import hpcontentteam from '../../assets/img/homepgimg/hpcontentteam.png';
import hpcreative from '../../assets/img/homepgimg/hpcreative.png';
import hptech from '../../assets/img/homepgimg/hptech.png';
import hpproject from '../../assets/img/homepgimg/hpproject.png';
import hpstrategy from '../../assets/img/homepgimg/hpstrategy.png';
import { useState } from 'react'

    const Home = () => {
        const [activeTeam, setActiveTeam] = useState('projectTeam'); // Default active team

  const handleTeamClick = (teamName) => {
    setActiveTeam(teamName); // Set the active team on click
  };
  return (
    <>
    
    <div className='homePageWrapper w-full'>
    <Header />
    {/* SECTION 1 Starts */}
    

    <div className='hp-main'>
  <section className="hp-sectionOne bg-black pt-12 pl-24 bg-[url('./assets/img/homepgimg/hpmainbg.svg')] bg-no-repeat bg-[top_right] bg-blend-hard-light max-md:bg-[length:50%] max-md:p-8 max-md:px-4">
    <div className="sectionOne-content w-full sm:w-[55%]  text-white">
      <h3 className="text-[29.925px] sm:text-[48.432px] max-md:text-[29.925px] font-normal">Experience the</h3>
      <p className="powerOfOne font-bold text-[40px] max-md:text-[40px]  sm:text-[90.894px]">Power of One</p>
      <p className="atMedtrix font-semibold text-[40px] max-md:text-[40px] sm:text-[90.894px] max-md:text-4xl">at MedTrix</p>
      <div className="hp-slider">
        <Slider />
      </div>
    </div>

    <div className="hp-productsSection mt-4 sm:mt-8 max-md:w-[90%] max-md:ml-auto max-md:overflow-x-auto max-md:scrollbar-hide max-md:mb-8">
      <div className="hp-products items-center grid grid-cols-2 sm:grid-cols-[1fr_1fr_auto_1fr_auto_1fr_auto] gap-2 w-full sm:w-[75%] mx-auto py-8 sm:py-16 max-md:w-[200%] max-md:ml-[2%] max-md:overflow-x-auto">
        <div className="hp-medlogo text-center sm:text-end">
          <img src={hpmedtrixsmalllogo} alt="MedTrix Healthcare Pvt Ltd" />
        </div>
        <div className="hp-horizontalLine h-[1px] bg-gray-500"></div>
        <div className="hp-productButton flex items-center justify-center h-[33px] rounded-full border-[0.5px] border-gray-500">
          <p className="text-white px-4 py-1">
            <a href="">Case Player</a>
          </p>
        </div>
        <div className="hp-horizontalLine h-[1px] bg-gray-500 "></div>
        <div className="hp-productButton flex items-center justify-center h-[33px] rounded-full border-[0.5px] border-gray-500">
          <p className="text-white px-4 py-1">
            <a href="">Immersive Solutions</a>
          </p>
        </div>
        <div className="hp-horizontalLine h-[1px] bg-gray-500"></div>
        <div className="hp-productButton flex items-center justify-center h-[33px] rounded-full border-[0.5px] border-gray-500">
          <p className="text-white px-4 py-1">
            <a href="">Digital Partnership</a>
          </p>
        </div>
      </div>
    </div>

    <div className="hp-lineBars text-right pr-[10%] pt-8 sm:pt-12 invisible">
      <img src="./img/homepgimg/hplinesbar.svg" alt="MedTrix Healthcare Pvt Ltd" />
    </div>
  </section>
</div>
 
       {/* SECTION 1 Ends */}
    
     {/* SECTION 2 Starts */}
     <section className="hp-sectionTwo flex flex-col md:flex-row">
    <div className="hp-medtrixphoto w-full md:w-1/2">
        <img className='w-full h-auto max-w-full' src={MedAbout} alt="MedTrix Healthcare Pvt Ltd" />
    </div>
    <div className="hp-aboutUsContent w-full md:w-1/2">
        <div className="hp-AUheading h-[35%] bg-black text-white flex items-end max-md: justify-center">
            <h1 className='pl-5 md:pl-20 text-[48px] md:text-[108.884px] font-normal max-md:pt-4 max-md:pr-0 max-md:pb-1 max-md:pl-8 max-md:text-[50.195px]'>ABOUT US</h1>
        </div>
        <div className="hp-AUContent h-max w-full md:w-4/5 leading-[24px] text-[14px] px-5 md:px-20 py-8">
            <p>MedTrix is a technology enabler that focuses on addressing the needs of Patients, Physicians,
                and Pharma. Our people, passion and processes empower us to find the right combination of
                advanced technologies, use of up to date medical science, and understanding of regulatory
                requirements to deliver innovation and cost efficiency in all our services. This resulted us
                in using AI to personalize HCP engagement and simplify repetitive workflows, develop
                immersive visual experiences, and launch interactive virtual patient support assistants.</p>

            <p className='mt-4'>We are a group that has a diverse set of skills and complex capabilities, but our approach to
                all we do is simple - to achieve our clients’ objectives. We think that this has helped us
                keep our clients happy and satisfied. Eight out of 10 clients decide to stay on with us and,
                rate their satisfaction 4.6 on a scale of 5, and report cost savings of about 47%.</p>

            <p className='mt-4'>We are partners to eight of the top 30 global pharmaceutical companies and deliver services
                for top brands of 3 of the top 10 pharmaceutical companies.</p>
        </div>
    </div>
</section>


             {/* SECTION 2 Ends */}

 {/* SECTION 3 Starts */}
 <section className="hp-sectionThree pb-8">
    <div className="hp-countSectionHeader py-16 w-1/2 max-md:w-1/2 grid grid-cols-[auto_1fr] ml-auto items-center max-md:py-8 gap-4">
        <div className="hp-medlogo">
            <img className='max-w-full h-auto' src={hpmedtrixsmalllogo} alt="MedTrix Healthcare Pvt Ltd" />
        </div>
        <div className="hp-horizontalLine h-px bg-[#7E7E7E]"></div>
        <span className="countSectionHeaderBars hidden max-md:block max-md:absolute max-md:left-[10%] ">
            <img className='w-full h-auto max-w-full' src={whitebars} alt="MedTrix Healthcare Pvt Ltd" />
        </span>
    </div>

    <div className="about-count p-8 md:p-16 w-full md:w-3/4 mx-auto max-md:text-center">
        <div className="about-list flex items-center justify-between pl-3 max-md:flex-col max-md:gap-[3rem]">
            <div className="list-item mr-3.5">
                <span className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal max-md:text-[52.364px]' id="value">1500</span>
                <span className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal'>+</span>
                <p className='font-semibold text-black text-[14px] md:text-[18.357px] max-md:text-[18.357px]'>Projects Completed</p>
            </div>
            <div className="list-item mr-3.5">
                <span className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal max-md:text-[52.364px]' id="value1">350</span>
                <span className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal'>+</span>
                <p className='font-semibold text-black text-[14px] md:text-[18.357px] max-md:text-[18.357px]'>Happy Clients</p>
            </div>
            <div className="list-item mr-3.5">
                <span id="value2" className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal max-md:text-[52.364px]'>70</span>
                <span className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal'>+</span>
                <p className='font-semibold text-black text-[14px] md:text-[18.357px] max-md:text-[18.357px]'>Countries Covered</p>
            </div>
            <div className="list-item mr-3.5">
                <span id="value3" className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal max-md:text-[52.364px]'>40</span>
                <span className='text-[#EC1C24] text-[36px] md:text-[52.364px] font-normal'>+</span>
                <p className='font-semibold text-black text-[14px] md:text-[18.357px] max-md:text-[18.357px]'>Awards</p>
            </div>
        </div>
    </div>

    <div className="hp-countSectionFooter relative h-[160px] grid grid-rows-[1fr_auto_1fr] gap-2.5 justify-center mt-16">
        <div className="hp-verticalLine w-px bg-[#717171] ml-3"></div>
        <div className="hp-medlogo">
            <img className='w-full h-auto max-w-full' src={hpmedtrixsmalllogo} alt="MedTrix Healthcare Pvt Ltd" />
        </div>
        <span className="whiteBars absolute left-[10%] top-[calc(50%-7px)]">
            <img className='max-w-full h-auto' src={whitebars} alt="MedTrix Healthcare Pvt Ltd" />
        </span>
        <div className="hp-verticalLine w-px bg-[#717171] ml-3"></div>
    </div>
</section>

             {/* SECTION 3 Ends */}



 {/* SECTION 4 Starts */}
 <section className="hp-sectionFour text-center relative" id="Our-Clients">
  <span className="sectionFourEllipse absolute right-[5%]">
    <img
      src={hpellipse}
      alt="MedTrix Healthcare Pvt Ltd"
      className="max-w-full h-auto"
    />
  </span>
  
  <h1 className="w-full text-[36px] md:text-[64px] font-normal bg-gradient-to-l from-[#B30505] to-[#F00] text-transparent bg-clip-text mb-8">
    OUR CLIENTS
  </h1>
  
  <div className="hp-clientsVideo w-full h-max">
    <video
      playsInline
      autoPlay
      loop
      muted
      className="w-full h-auto"
    >
      <source
        src="https://d218mh3sadleh5.cloudfront.net/Website/MedTrix/Assets/Videos/Our_Clients.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</section>

 {/* SECTION 4 Ends */}

<SectionFive/>

 {/* SECTION 6 Starts */}
<section className="hp-sectionSix pt-8">
  <div className="hp-ourTeamSection text-center py-8 pb-24">
    <h1 className="text-6xl font-semibold uppercase bg-gradient-to-l from-red-700 to-red-600 text-transparent bg-clip-text">Our Team</h1>
  </div>
  <div className="hp-teamsSection bg-black py-12 px-8">
    <div className="hp-teams w-11/12 mx-auto grid grid-cols-3 items-center">
      <div className="hp-teamsName grid grid-rows-5 gap-[3rem]">
        <div className="t-names flex items-center gap-2 cursor-pointer" onClick={() => handleTeamClick('contentTeam')}>
          <p className="text-gray-300 text-lg font-normal uppercase hover:font-bold hover:text-[2rem] hover:text-white" style={{  fontSize: activeTeam === 'contentTeam' ? '2rem' : '18px' , 
 fontWeight: activeTeam === 'contentTeam' ? 'bold' : 'normal',}}>Content hub</p>
          <img src={hparrow} alt="MedTrix Healthcare Pvt Ltd" className="opacity-0 transition-opacity duration-300" style={{ opacity: activeTeam === 'contentTeam' ? 1 : 0 }} />
        </div>
        <div className="t-names flex items-center gap-2 cursor-pointer" onClick={() => handleTeamClick('creativeTeam')}>
          <p className="text-gray-300 text-lg font-normal uppercase hover:font-bold hover:text-[2rem] hover:text-white" style={{  fontSize: activeTeam === 'creativeTeam' ? '2rem' : '18px' , 
 fontWeight: activeTeam === 'creativeTeam' ? 'bold' : 'normal',}}>Design Studio</p>
          <img src={hparrow} alt="MedTrix Healthcare Pvt Ltd" className="opacity-0 transition-opacity duration-300" style={{ opacity: activeTeam === 'creativeTeam' ? 1 : 0 }} />
        </div>
        <div className="t-names flex items-center gap-2 cursor-pointer" onClick={() => handleTeamClick('techTeam')}>
          <p className="text-gray-300 text-lg font-normal uppercase hover:font-bold hover:text-[2rem] hover:text-white" style={{  fontSize: activeTeam === 'techTeam' ? '2rem' : '18px' , 
 fontWeight: activeTeam === 'techTeam' ? 'bold' : 'normal',}}>TECH STATION</p>
          <img src={hparrow} alt="MedTrix Healthcare Pvt Ltd" className="opacity-0 transition-opacity duration-300" style={{ opacity: activeTeam === 'techTeam' ? 1 : 0 }} />
        </div>
        <div className="t-names flex items-center gap-2 cursor-pointer" onClick={() => handleTeamClick('projectTeam')}>
          <p className={`text-gray-300 text-lg font-normal uppercase hover:font-bold hover:text-[2rem] hover:text-white style={{  fontSize: activeTeam === 'projectTeam' ? '2rem' : '18px' , 
 fontWeight: activeTeam === 'projectTeam' ? 'bold' : 'normal',}} ${activeTeam === 'projectTeam' ? 'text-white text-2xl font-bold' : ''}`}>PROJECT CENTER</p>
          <img src={hparrow} alt="MedTrix Healthcare Pvt Ltd" className="opacity-0 transition-opacity duration-300" style={{ opacity: activeTeam === 'projectTeam' ? 1 : 0 }} />
        </div>
        <div className="t-names flex items-center gap-2 cursor-pointer" onClick={() => handleTeamClick('strategyTeam')}>
          <p className="text-gray-300 text-lg font-normal uppercase hover:font-bold hover:text-[2rem] hover:text-white" style={{  fontSize: activeTeam === 'strategyTeam' ? '2rem' : '18px' , 
 fontWeight: activeTeam === 'strategyTeam' ? 'bold' : 'normal',}}>STRATEGIC SUPPORT</p>
          <img src={hparrow} alt="MedTrix Healthcare Pvt Ltd" className="opacity-0 transition-opacity duration-300" style={{ opacity: activeTeam === 'strategyTeam' ? 1 : 0 }} />
        </div>
      </div>

      
      <div className="hp-teamImg">
        <img id="contentTeamImg" src={hpcontentteam} alt="Content Team" className={activeTeam === 'contentTeam' ? 'block' : 'hidden'} />
        <img id="creativeTeamImg" src={hpcreative} alt="Creative Team" className={activeTeam === 'creativeTeam' ? 'block' : 'hidden'} />
        <img id="techTeamImg" src={hptech} alt="Tech Team" className={activeTeam === 'techTeam' ? 'block' : 'hidden'} />
        <img id="projectTeamImg" src={hpproject} alt="Project Team" className={activeTeam === 'projectTeam' ? 'block' : 'hidden'} />
        <img id="strategyTeamImg" src={hpstrategy} alt="Strategy Team" className={activeTeam === 'strategyTeam' ? 'block' : 'hidden'} />
      </div>

      <div className="hp-teamdescription">
        <div className={`contentTeamdesc ${activeTeam === 'contentTeam' ? 'block' : 'hidden'}`}>
          <p className="ds-firstPara text-white text-2xl font-bold">“The heart of MedTrix”</p>
          <p className="ds-secondPara text-white text-sm font-normal leading-6">
            The MedTrix content team is at the core of all our projects. The team is proficient in developing content for communication, education, and training solutions — translating complex ideas into a brand or educational experiences. The team is composed of trained and qualified professionals who create HCP, patient, and internal team communication content for any delivery channel.
          </p>
          <p className="ds-thirdPara text-white text-sm font-light">WRITERS &amp; EDITORS</p>
        </div>

        <div className={`creativeTeamdesc ${activeTeam === 'creativeTeam' ? 'block' : 'hidden'}`}>
          <p className="ds-firstPara text-white text-2xl font-bold">“If content is the heart, then creative is the soul”</p>
          <p className="ds-secondPara text-white text-sm font-normal leading-6">
            The MedTrix Design Studio offers a complete spectrum of creative services from visualization to animations that cater to all demands. From print media to interface design and 3D graphics, this team can do it all!
          </p>
          <p className="ds-FourthPara text-white text-sm font-light">DESIGNERS, ILLUSTRATORS, 3D ARTIST &amp; ANIMATORS</p>
        </div>

        <div className={`techTeamdesc ${activeTeam === 'techTeam' ? 'block' : 'hidden'}`}>
          <p className="ds-firstPara text-white text-2xl font-bold">“Where Innovation meets transformation”</p>
          <p className="ds-secondPara text-white text-sm font-normal leading-6">
            Our technology team consists of creators who develop impactful solutions for clients and end-users, and solve challenges in digital transformation. Our tech station — with data scientists, software developers, and solution architects — is the hub of innovation that translates results into benefits for all stakeholders.
          </p>
          <p className="ds-FourthPara text-white text-sm font-light">SOFTWARE ENGINEERS, UNITY 3D DEVELOPERS &amp; DATA ANALYSTS</p>
        </div>

        <div className={`projectTeamdesc ${activeTeam === 'projectTeam' ? 'block' : 'hidden'}`}>
          <p className="ds-firstPara text-white text-2xl font-bold">“Bringing it all together and making it work”</p>
          <p className="ds-secondPara text-white text-sm font-normal leading-6">
            The core of our operations is managed by a well-trained and experienced team that follows processes which are designed and customized for individual clients. The team is adept at facilitating the creation and deployment of projects using their collective knowledge on domain, branding, and client business processes.
          </p>
          <p className="ds-FourthPara text-white text-sm font-light">PROJECT MANAGEMENT, CLIENT SERVICES MANAGEMENT &amp; ACCOUNT MANAGEMENT</p>
        </div>

        <div className={`strategyTeamdesc ${activeTeam === 'strategyTeam' ? 'block' : 'hidden'}`}>
          <p className="ds-firstPara text-white text-2xl font-bold">“Innovate and Inspire Growth”</p>
          <p className="ds-secondPara text-white text-sm font-normal leading-6">
            Our approach to strategy consists of listening to our client’s vision while utilizing critical thinking skills, scientific expertise, and market insight to deliver comprehensive solutions aligned to established business objectives.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* SECTION 6 Ends */}


{/* SECTION 7 Starts */}

 <section className="hp-sectionSeven" id="contactIndex">
  <div className="hp-contactUsHeader grid grid-rows-[1fr_auto] gap-2 justify-center mt-[-1rem] h-[180px]">
    <div className="hp-verticalLine w-[1px] bg-[#717171] ml-[12px]"></div>
    <div className="hp-medlogo">
      <img src={hpmedtrixsmalllogo} alt="MedTrix Healthcare Pvt Ltd" />
    </div>
  </div>
  
  <h3 className="text-[#7E7E7E] text-center text-[24px] font-light uppercase my-16">
    Contact us
  </h3>
  
  <div className="hp-locations grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <div className="hp-usa hp-country flex items-center justify-center">
        <div className="countrycode">
          <h1 className="text-[#e1e1e1] text-[128px] font-bold tracking-[0.68px] uppercase pr-6 leading-[92px]">
            USA
          </h1>
        </div>
        <div className="location">
          <p className="text-[#121212] text-[15px] font-normal pl-6">100 Somerset Corporate</p>
          <p className="text-[#121212] text-[15px] font-normal pl-6">Boulevard 2nd Floor, Suite</p>
          <p className="text-[#121212] text-[15px] font-normal pl-6">130, Bridgewater, NJ 08807</p>
        </div>
      </div>
    </div>
    
    <div>
      <div className="hp-ind hp-country flex items-center justify-center">
        <div className="countrycode">
          <h1 className="text-[#e1e1e1] text-[128px] font-bold tracking-[0.68px] uppercase pr-6 leading-[92px]">
            IND
          </h1>
        </div>
        <div className="location">
          <p className="text-[#121212] text-[15px] font-normal pl-6">1st Floor, 574/A, 1st Main,</p>
          <p className="text-[#121212] text-[15px] font-normal pl-6">Sector 6, HSR Layout,</p>
          <p className="text-[#121212] text-[15px] font-normal pl-6">Bangalore 560 102.</p>
        </div>
      </div>
    </div>
  </div>

  <div>
    <p className="contactPerson flex justify-center items-center my-16 text-[#000] text-[17px] font-normal">
    <span className="before:block before:w-[8px] before:h-[8px] before:rounded-full before:bg-red-500 before:mr-2"></span>
      <a href="mailto:info@medtrixhealthcare.com&amp;cc=rishaan.m@medtrixhealthcare.com;grace.t@medtrixhealthcare.com">
        info@medtrixhealthcare.com
      </a>
    </p>
  </div>
</section>
{/* SECTION 7 Ends */}

<Footer/>

                </div>
                      
  </>
  )
}

export default Home