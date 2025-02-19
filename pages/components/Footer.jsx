
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Pierrick Butin</h3>
            <p className="text-gray-400 mt-1">Responsable informatique et développeur Web & Mobile</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Pierrick Butin. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;