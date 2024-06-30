import { Element } from "react-scroll"
import { TypeAnimation } from "react-type-animation"


const HomeHero = () => {
  return (
    <Element name="home" className="min-h-screen px-4 md:px-20 flex items-center justify-center flex-col" 
    style={{ background: "rgba(3, 7, 18, 0.7)" }}>
      <h5 className="text-3xl">Welcome</h5>
      
      <TypeAnimation
        sequence={[
          'I am Simone Olivia',
          1000,
          'I am Web Developer',
          1000,
          'I am Software Developer',
          1000,
          'I am React Developer',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', fontWeight: 'bold', display: 'inline-block', margin: '14px 0' }}
        repeat={Infinity}
      />

      <p className="text-xl">based in Los Angeles, California.</p>
      <a href="#" className="mt-10 px-10 py-3 font-medium border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition rounded-full">Hire Me</a>
    </Element>
  )
}

export default HomeHero