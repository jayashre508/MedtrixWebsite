import React from 'react'
import HeaderLogo from '../../assets/img/homepgimg/medtrix_white_logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='bg-black h-[6rem] sticky z-10 top-0 m-0 p-4 flex justify-between items-center w-full'>
        <div className='w-1/5'>
                <a href=""><img className='w-3/5 max-md:w-[50vw]' src={HeaderLogo} alt="medtrix logo"></img></a>
            </div>
            
            <div className="text-white w-[57%] pl-[17%]">
                <ul className='flex justify-around'>
                <li className='inline-block'><Link to="/">OUR CAPABILITIES</Link></li>
                <li className='inline-block'><Link to="/ourwork">OUR WORK</Link></li>
                    <li className='inline-block'><Link to="/About">ABOUT US</Link></li>
                    <li className='inline-block'>NEWS AND UPDATES</li>
                
                    
                </ul>
            </div>
            <div className='pr-5'><button className='border border-[rgba(236,28,36,1)] px-5 py-[8px] bg-[rgba(236,28,36,1)] text-white font-bold rounded-md'>CONTACT US</button></div>
    </div>
    
    

    
    </>
  )
}

export default Header