import React, { useState } from "react";

// Import images
import hpvimal from "../../assets/img/homepgimg/hpvimal.png";
import hpkumar from "../../assets/img/homepgimg/hpkumar.png";
import hphari from "../../assets/img/homepgimg/hphari.png";
import hpshijin from "../../assets/img/homepgimg/hpshijin.png";
import hpvincent from "../../assets/img/homepgimg/hpvincent.png";
import hplinkedIn from "../../assets/img/homepgimg/hplinkedIn.svg";
import hpmedtrixsmalllogo from "../../assets/img/homepgimg/hpmedtrixsmalllogo.svg";

const SectionFive = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const handleMouseOver = (id) => {
    setVisibleDetails(id);
  };

  const handleMouseOut = () => {
    setVisibleDetails(null);
  };

  const leaders = [
    {
      id: "vimalDetails",
      image: hpvimal,
      name: "VIMAL NARAYANAN",
      title: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/vimal-narayanan-01a40b6/",
    },
    {
      id: "kumarDetails",
      image: hpkumar,
      name: "KUMAR BADAMPUDI",
      title: "VP - Medical Affairs & Strategy",
      linkedin: "https://www.linkedin.com/in/kumar-badampudi-71812826/",
    },
    {
      id: "hariDetails",
      image: hphari,
      name: "HARI PRABHAKARAN",
      title: "VP – Business Development and Client Engagement",
      linkedin: "https://www.linkedin.com/in/hari-prabhakaran-90724a2/",
    },
    {
      id: "shijinDetails",
      image: hpshijin,
      name: "SHIJIN PULIKKOTIL",
      title: "VP - Head of Operations",
      linkedin: "https://www.linkedin.com/in/shijin-pulikkotil-85139332/",
    },
    {
      id: "vincentDetails",
      image: hpvincent,
      name: "VINCENT MORELLA",
      title: "US Operations Administrator",
      linkedin: "https://www.linkedin.com/in/vincent-morella-389b714/",
    },
  ];

  return (
    <section className="relative pt-8 hp-sectionFive" id="hp-sectionFive">
  {/* Heading Section */}
  <div className="absolute top-24 left-[10vw] max-md:top-[3rem] max-md:left-[1rem] hp-molHeading">
    <h2 className="text-[80.062px] font-semi-bold uppercase bg-gradient-to-l from-[#B30505] to-[#F00] text-transparent bg-clip-text leading-[75px] max-md:text-[40.772px] max-md:leading-[45px]">
      Meet
    </h2>
    <h2 className="text-[80.062px] font-semi-bold uppercase bg-gradient-to-l from-[#B30505] to-[#F00] text-transparent bg-clip-text leading-[75px] max-md:text-[40.772px] max-md:leading-[45px]">
      our
    </h2>
    <h2 className="text-[80.062px] font-semi-bold uppercase bg-gradient-to-l from-[#B30505] to-[#F00] text-transparent bg-clip-text leading-[75px] max-md:text-[40.772px] max-md:leading-[45px]">
      Leaders
    </h2>
  </div>

  {/* Leaders Section */}
  <div className="flex justify-center w-full hp-molSections">
    <div className="grid grid-cols-4 grid-rows-3 p-12 pb-24 ml-[6rem] mr-[6rem] max-md:grid max-md:grid-cols-[repeat(2,minmax(auto,50%))] max-md:grid-rows-[repeat(3,1fr)] max-md:px-4 max-md:pb-12 meetOurLeaders">
      <div className="hp-emptyContainer hp-emptyContainer1"></div>
      <div className="hp-emptyContainer hp-emptyContainer2"></div>

      {/* Leader Cards */}
      {leaders.map((leader, index) => (
        <React.Fragment key={leader.id}>
          {index === 1 || index === 2 ? (
            <>
              <div className="flex items-center px-4 hp-leaderBox">
                <div
                  className={`${
                    visibleDetails === leader.id ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-linear hp-personDetailsContainer`}
                >
                  <p className="text-[#EC1C24] text-[15.965px] font-semibold mb-2">
                    {leader.title}
                  </p>
                  <p className="text-black text-[23.668px] font-semibold uppercase">
                    {leader.name}
                  </p>
                </div>
              </div>
              <div
                className={`${
                  visibleDetails === leader.id ? "grayscale-0" : "grayscale"
                } relative cursor-pointer hp-personDetails`}
                onMouseOver={() => handleMouseOver(leader.id)}
                onMouseOut={handleMouseOut}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full"
                />
                <span className="absolute top-1 right-1">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={hplinkedIn}
                      alt="LinkedIn Profile"
                      className="w-6 h-6"
                    />
                  </a>
                </span>
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  visibleDetails === leader.id ? "grayscale-0" : "grayscale"
                } relative cursor-pointer hp-leaderBox`}
                onMouseOver={() => handleMouseOver(leader.id)}
                onMouseOut={handleMouseOut}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full"
                />
                <span className="absolute top-1 right-1">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={hplinkedIn}
                      alt="LinkedIn Profile"
                      className="w-6 h-6"
                    />
                  </a>
                </span>
              </div>
              <div className="flex items-center px-4">
                <div
                  className={`${
                    visibleDetails === leader.id ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-linear`}
                >
                  <p className="text-[#EC1C24] text-[15.965px] font-semibold mb-2">
                    {leader.title}
                  </p>
                  <p className="text-black text-[23.668px] font-semibold uppercase">
                      {leader.name}
                    </p>
                </div>
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>

  {/* Footer Section */}
  <div className="hp-molFooter w-1/2 grid grid-cols-[auto_1fr] ml-auto items-center p-8 gap-4">
    <div className="hp-medlogo">
      <img className="max-w-full h-auto" src={hpmedtrixsmalllogo} alt="MedTrix Healthcare Pvt Ltd"></img>
    </div>
    <div className="hp-horizontalLine h-px bg-[#7E7E7E]"></div>
  </div>
</section>

  );
};

export default SectionFive;
