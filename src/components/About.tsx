import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about" className="bg-gray-900 px-4 md:px-10 min-h-screen">
      <h2 className="custom-heading">
        About me
        <span>Know Me More</span>
      </h2>

      <section className="grid grid-cols-12 md:gap-10 pb-20">
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <h5 className="text-lg lg:text-2xl font-semibold mb-4">I'm <span className="text-green-400">Simone Olivia</span>, a Web Developer</h5>
          <p className="text-gray-400 font-medium">
          I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <br /><br />
          Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>        
        <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col items-start">
          <p><b>Name: </b> Simone Olivia</p>
          <hr className="border-1 w-full border-gray-600 my-2"/>
          <p><b>Email: </b> chat@olivia.com</p>
          <hr className="border-1 w-full border-gray-600 my-2"/>
          <p><b>Age: </b> 20</p>
          <hr className="border-1 w-full border-gray-600 my-2"/>
          <p><b>From: </b> Los Angeles, California</p>
          <a href="#" className="mt-10 px-10 py-3 lg:px-5 lg:py-2 text-md font-medium border-2 border-green-500 bg-green-500 text-white transition rounded-full">Download CV</a>
        </div>        
      </section>
    </Element>
  )
}

export default About