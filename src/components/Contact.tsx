import { FaEnvelope, FaLocationArrow } from "react-icons/fa"
import { Element } from "react-scroll"


const Contact = () => {
  return (
  <Element name="contact" className="min-h-screen px-4 md:px-10 bg-gray-800">
    <h2 className="custom-heading">
        Contact
        <span>Get in Touch</span>
      </h2>

    <div className="flex flex-col lg:flex-row mb-20">
        <div className="w-full lg:w-1/3 flex flex-col items-start ">
          <h2 className="text-3xl font-semibold">What’s your story? Get in touch</h2>
          <p className="my-2 text-slate-900 dark:text-slate-300">Always available for freelancing if the right project comes along, Feel free to contact me.</p>
          
          <div className='my-4 flex flex-col space-y-4'>
            <div className="flex font-semibold items-center">
              <FaLocationArrow className="text-green-500 mr-2" />
              <p>Mumbai, Maharashtra.</p>
            </div>
            <div className="flex font-semibold items-center">
              <FaEnvelope className="text-green-500 mr-2" />
              <p>me@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
        <form className="max-w-lg mx-auto">
          <div className="flex w-full justify-between">
            <div className="mb-4 mr-2">
              <input
                type="text"
                id="name"
                placeholder='Name*'
                className="w-full border bg-transparent py-2 px-3 mt-1 border-slate-500 outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder='Email*'
                className="w-full border bg-transparent py-2 px-3 mt-1 border-slate-500 outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="subject"
              placeholder='Subject*'
              className="w-full border bg-transparent py-2 px-3 mt-1 border-slate-500 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              rows={4}
              placeholder='Message*'
              className="w-full border bg-transparent py-2 px-3 mt-1 border-slate-500 outline-none"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-10 py-3 font-medium border-2 border-green-500 bg-green-500 text-white transition rounded-full"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
      </div>
  </Element>
  )
}

export default Contact