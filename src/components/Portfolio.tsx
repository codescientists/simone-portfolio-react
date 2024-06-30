import { useState } from "react";
import { Element } from "react-scroll"
import PortfolioCard from "./PortfolioCard";

const projects = [
  { 
    id: 1, 
    title: 'Project One', 
    description: 'Description for project one.', 
    category: 'Web', 
    image: 'https://utfs.io/f/e5e2be4a-eb25-4e43-be09-e0d615bc6a70-nj2o1a.png' 
  },
  { 
    id: 2, 
    title: 'Project Two', 
    description: 'Description for project two.', 
    category: 'Mobile', 
    image: 'https://utfs.io/f/e0041d39-8f1f-46ea-8952-5df637713646-9nykfs.png' 
  },
  { 
    id: 3, 
    title: 'Project Three', 
    description: 'Description for project three.', 
    category: 'Web', 
    image: 'https://utfs.io/f/69eceee4-158c-4a4a-a8e2-d1b33f322828-h2szou.png' 
  },
  { 
    id: 4, 
    title: 'Project One', 
    description: 'Description for project one.', 
    category: 'Web', 
    image: 'https://utfs.io/f/01ce160e-5bde-4e82-90f3-33e0a24cef5e-uzwn50.png' 
  },
  { 
    id: 5, 
    title: 'Project Two', 
    description: 'Description for project two.', 
    category: 'Mobile', 
    image: 'https://utfs.io/f/e5e2be4a-eb25-4e43-be09-e0d615bc6a70-nj2o1a.png' 
  },
  { 
    id: 6, 
    title: 'Project Three', 
    description: 'Description for project three.', 
    category: 'Web', 
    image: 'https://utfs.io/f/01ce160e-5bde-4e82-90f3-33e0a24cef5e-uzwn50.png' 
  },
];

const categories = ['All', 'Web', 'Mobile'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Element name="portfolio" className="pb-20 px-4 md:px-10 bg-gray-800">
      <h2 className="custom-heading">
        Portfolio
        <span>My Work</span>
      </h2>
      <div className="p-8">
      <div className="flex items-center justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-6">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    </Element>
  )
}

export default Portfolio