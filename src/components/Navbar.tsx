// src/components/Navbar.jsx

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-secondary text-2xl font-bold">Andrés Piñeiro</a>
        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#cv" className="text-gray-300 hover:text-white">CV</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;