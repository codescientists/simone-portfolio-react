
const PortfolioCard = ({ project }: any) => (
    <div className="col-span-6 md:col-span-3 xl:col-span-2 bg-gray-950 p-4 rounded-lg">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-4">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
    </div>
  );
  
  export default PortfolioCard;
  