import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import HomeHero from './components/HomeHero'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import Testimonials from './components/Testimonials'
import WhatIDo from './components/WhatIDo'
import { RxCross1 } from 'react-icons/rx'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <section className="grid grid-cols-12 relative">
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
      data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="fixed top-4 left-4 flex items-center p-2 text-sm text-white rounded bg-gray-700">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" aria-label="Sidebar" className={`bg-gray-950 text-white fixed top-0 left-0 z-40 w-64 h-full pb-10 transition-transform -translate-x-full lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : ''}`}>
        <Sidebar />
        <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="block md:hidden absolute top-4 right-4">
          <RxCross1 />
        </button>
      </aside>

      <section className="hidden md:block col-span-3 xl:col-span-2"></section>
      <section onClick={() => isSidebarOpen ? setIsSidebarOpen(!isSidebarOpen) : ''} className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen w-full text-white">
        <HomeHero />
        <About />
        <WhatIDo />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </section>
    </section>
  )
}

export default App
