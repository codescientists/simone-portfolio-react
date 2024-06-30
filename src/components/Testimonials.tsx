import { Element } from "react-scroll"

const Testimonials = () => {
  return (
    <Element name="testimonials" className="min-h-screen px-4 md:px-10 bg-gray-900">
      <h2 className="custom-heading">
        Testimonial
        <span>Client Speak</span>
      </h2>

      <div className="grid grid-cols-8 gap-10 pb-20">
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="p-8 bg-gray-950 rounded-lg">
            <div className="flex items-start mb-4">
              <img src="https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-3.jpg" alt="" 
              className="h-14 w-14 rounded-full" />

                <div className="flex flex-col items-start ml-3">
                  <h5 className="text-xl font-medium mb-1">Denis Jack</h5>
                  <p className="text-gray-400">IT Company</p>
                </div>
            </div>
            
            <p className="text-gray-300 text-sm font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi saepe eos nihil debitis cupiditate beatae voluptatibus nam deserunt aperiam asperiores?
            </p>
          </div>
        </div> 
        <div className="col-span-8 md:col-span-4 flex flex-col space-y-5 items-center">
          <div className="p-8 bg-gray-950 rounded-lg">
            <div className="flex items-start mb-4">
              <img src="https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-3.jpg" alt="" 
              className="h-14 w-14 rounded-full" />

                <div className="flex flex-col items-start ml-3">
                  <h5 className="text-xl font-medium mb-1">Denis Jack</h5>
                  <p className="text-gray-400">IT Company</p>
                </div>
            </div>
            
            <p className="text-gray-300 text-sm font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi saepe eos nihil debitis cupiditate beatae voluptatibus nam deserunt aperiam asperiores?
            </p>
          </div>
        </div> 
      </div>
    </Element>
  )
}

export default Testimonials