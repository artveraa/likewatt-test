import { useState } from "react";
import {
  FaSolarPanel,
  FaHome,
  FaCog,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-30 bg-main text-white p-2 rounded-full shadow-md hover:bg-opacity-80 transition-all"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`bg-dark text-white h-screen w-80 fixed top-0 left-0 z-40 flex flex-col items-center p-5 shadow-md transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <button
          className="lg:hidden absolute top-4 right-4 text-white bg-gray-700 p-2 rounded-full hover:bg-opacity-80 transition-all"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-semibold text-center p-5 mb-5">
          Optiwize Pro
        </h2>

        <nav className="w-full">
          <ul className="flex flex-col items-center gap-4 w-full">
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-main transition-all cursor-pointer">
              <FaHome /> <span>Accueil</span>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-main transition-all cursor-pointer">
              <FaSolarPanel /> <span>Panneaux</span>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-main transition-all cursor-pointer">
              <FaCog /> <span>Paramètres</span>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-main transition-all cursor-pointer">
              <FaInfoCircle /> <span>À propos</span>
            </li>
          </ul>
        </nav>

        {/* ✅ Copyright */}
        <div className="mt-auto text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Likewatt</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
