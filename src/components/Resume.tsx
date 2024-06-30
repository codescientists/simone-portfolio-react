import { Element } from "react-scroll"

const Resume = () => {
  return (
    <Element name="resume" className="bg-gray-900 px-4 md:px-10 pb-20">
      <h2 className="custom-heading">
        Summary
        <span>Resume</span>
      </h2>
      <div className="grid grid-cols-8 gap-10">
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <h5 className="text-2xl self-start font-semibold">My Education</h5>
          <div className="p-5 bg-gray-950 rounded-lg">
            <span className="bg-green-500 rounded px-2 py-1 text-sm">2000 - 2004</span>
            <h5 className="text-xl font-medium mb-2 mt-4">Computer Science</h5>
            <p className="text-green-400 pb-4">International University</p>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
          <div className="p-5 bg-gray-950 rounded-lg">
            <span className="bg-green-500 rounded px-2 py-1 text-sm">2000 - 2004</span>
            <h5 className="text-xl font-medium mb-2 mt-4">Bachelor Degree</h5>
            <p className="text-green-400 pb-4">International University</p>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
          <div className="p-5 bg-gray-950 rounded-lg">
            <span className="bg-green-500 rounded px-2 py-1 text-sm">2000 - 2004</span>
            <h5 className="text-xl font-medium mb-2 mt-4">Master Degree</h5>
            <p className="text-green-400 pb-4">International University</p>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>        
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <h5 className="text-2xl self-start font-semibold">My Experience</h5>
          <div className="p-5 bg-gray-950 rounded-lg">
            <span className="bg-green-500 rounded px-2 py-1 text-sm">2000 - 2004</span>
            <h5 className="text-xl font-medium mb-2 mt-4">Jr. UI/UX Designer</h5>
            <p className="text-green-400 pb-4">International University</p>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
          <div className="p-5 bg-gray-950 rounded-lg">
            <span className="bg-green-500 rounded px-2 py-1 text-sm">2000 - 2004</span>
            <h5 className="text-xl font-medium mb-2 mt-4">Product Manager</h5>
            <p className="text-green-400 pb-4">International University</p>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
          <div className="p-5 bg-gray-950 rounded-lg">
            <span className="bg-green-500 rounded px-2 py-1 text-sm">2000 - 2004</span>
            <h5 className="text-xl font-medium mb-2 mt-4">React Developer</h5>
            <p className="text-green-400 pb-4">International University</p>
            <p className="text-gray-300 text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis unde ex nulla dolorem itaque nisi.</p>
          </div>
        </div>        
      </div>


      <h5 className="text-2xl font-semibold mt-14 mb-4">My Skills</h5>
      <div className="grid grid-cols-8 gap-4 gap-x-10">
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-medium">Web Design</h5>
              <p className="text-lg">45%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-gray-950">
              <div className="bg-green-600 h-1.5 dark:bg-green-500" style={{width: "45%"}}></div>
            </div>
          </div>
        </div>         
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-medium">JavaScript</h5>
              <p className="text-lg">85%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-gray-950">
              <div className="bg-green-600 h-1.5 dark:bg-green-500" style={{width: "85%"}}></div>
            </div>
          </div>
        </div>         
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-medium">ReactJS</h5>
              <p className="text-lg">75%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-gray-950">
              <div className="bg-green-600 h-1.5 dark:bg-green-500" style={{width: "75%"}}></div>
            </div>
          </div>
        </div>         
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-medium">Web Design</h5>
              <p className="text-lg">45%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-gray-950">
              <div className="bg-green-600 h-1.5 dark:bg-green-500" style={{width: "45%"}}></div>
            </div>
          </div>
        </div>         
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-medium">Web Design</h5>
              <p className="text-lg">45%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-gray-950">
              <div className="bg-green-600 h-1.5 dark:bg-green-500" style={{width: "45%"}}></div>
            </div>
          </div>
        </div>         
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg font-medium">Web Design</h5>
              <p className="text-lg">45%</p>
            </div>
            <div className="w-full bg-gray-200 h-1.5 mb-4 dark:bg-gray-950">
              <div className="bg-green-600 h-1.5 dark:bg-green-500" style={{width: "45%"}}></div>
            </div>
          </div>
        </div>         
      </div>
    </Element>
  )
}

export default Resume