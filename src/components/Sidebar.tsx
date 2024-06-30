import { useState } from 'react';
import ProfileImage from '../../public/profile.jpg'
import { Link } from 'react-scroll'
import { FaDribbble, FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home')

  const handleSetActive = (to:string) => {
    setActiveLink(to)
  };

  return (
    <>
      <div className="py-10 flex flex-col justify-between h-full items-center">
        <div>
          <img src={ProfileImage} alt="Profile" className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-gray-700" />
          <h2 className="text-center text-xl font-bold mb-6">Simone Olivia</h2>
        </div>
        <ul className="flex flex-col items-center space-y-4 text-gray-100">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
              className={`font-medium cursor-pointer hover:text-gray-400 ${activeLink == 'home' && 'text-green-400'}`}
              >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
              className={`font-medium cursor-pointer hover:text-gray-400 ${activeLink == 'about' && 'text-green-400'}`}
              >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="whatIDo"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
              className={`font-medium cursor-pointer hover:text-gray-400 ${activeLink == 'whatIDo' && 'text-green-400'}`}
              >
              What I Do
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
              className={`font-medium cursor-pointer hover:text-gray-400 ${activeLink == 'resume' && 'text-green-400'}`}
              >
              Resume
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
              className={`font-medium cursor-pointer hover:text-gray-400 ${activeLink == 'portfolio' && 'text-green-400'}`}
              >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
              className={`font-medium cursor-pointer hover:text-gray-400 ${activeLink == 'testimonials' && 'text-green-400'}`}
              >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
              className={`font-medium cursor-pointer hover:text-gray-400 ${activeLink == 'contact' && 'text-green-400'}`}
              >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-4">
          <li>
            <a href="#"><FaFacebook/></a>
          </li>
          <li>
            <a href="#"><FaSquareXTwitter/></a>
          </li>
          <li>
            <a href="#"><FaDribbble/></a>
          </li>
          <li>
            <a href="#"><FaGithub/></a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
