import { GrAnnounce } from "react-icons/gr";
import { Element } from "react-scroll"
import { IoIosColorPalette } from "react-icons/io";
import { BiBrush, BiChart, BiLaptop, BiPencil } from "react-icons/bi";


const WhatIDo = () => {
  return (
    <Element name="whatIDo" className="bg-gray-800 px-4 md:px-10 min-h-screen">
      <h2 className="custom-heading">
        Services
        <span>What I Do?</span>
      </h2> 

      <div className="grid grid-cols-8 gap-10 pb-10">
        <div className="col-span-8 md:col-span-4 flex items-center">
          <div className="bg-gray-900 p-4 rounded-lg">
            <IoIosColorPalette className="h-10 w-10 text-green-400"/>
          </div>
          <div className="px-4">
            <h5 className="text-xl font-medium mb-2">Graphic Design</h5>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>
        <div className="col-span-8 md:col-span-4 flex items-center">
          <div className="bg-gray-900 p-4 rounded-lg">
            <BiLaptop className="h-10 w-10 text-green-400"/>
          </div>
          <div className="px-4">
            <h5 className="text-xl font-medium mb-2">Web Design</h5>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>
        <div className="col-span-8 md:col-span-4 flex items-center">
          <div className="bg-gray-900 p-4 rounded-lg">
            <BiPencil className="h-10 w-10 text-green-400"/>
          </div>
          <div className="px-4">
            <h5 className="text-xl font-medium mb-2">UI/UX Design</h5>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>
        <div className="col-span-8 md:col-span-4 flex items-center">
          <div className="bg-gray-900 p-4 rounded-lg">
            <BiBrush className="h-10 w-10 text-green-400"/>
          </div>
          <div className="px-4">
            <h5 className="text-xl font-medium mb-2">App Design</h5>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>
        <div className="col-span-8 md:col-span-4 flex items-center">
          <div className="bg-gray-900 p-4 rounded-lg">
            <BiChart className="h-10 w-10 text-green-400"/>
          </div>
          <div className="px-4">
            <h5 className="text-xl font-medium mb-2">App Development</h5>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>
        <div className="col-span-8 md:col-span-4 flex items-center">
          <div className="bg-gray-900 p-4 rounded-lg">
            <GrAnnounce className="h-10 w-10 text-green-400"/>
          </div>
          <div className="px-4">
            <h5 className="text-xl font-medium mb-2">SEO Marketing</h5>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default WhatIDo