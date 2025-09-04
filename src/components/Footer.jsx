// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>Conectemos en:</p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Reemplaza '#' con los enlaces a tus perfiles */}
          <a href="#" className="hover:text-teal-400">GitHub</a>
          <a href="#" className="hover:text-teal-400">LinkedIn</a>
          <a href="#" className="hover:text-teal-400">Twitter</a>
        </div>
        <p className="mt-4 text-sm text-gray-500">&copy; 2025 [Tu Nombre]. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;