import { useState } from 'react';
import Teste from "../pages/formadesao";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header>
      <div className="flex flex-col px-4 pt-4 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between p-4">
        <img
              className="h-20 md:h-20"
              src="images/novalogocartao2.png"
              alt=""
            />
          <button
            className="px-3 py-1 bg-white rounded-full cursor-pointer bg-opacity-30 focus:outline-none md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'mt-3 flex-grow items-start md:flex lg:mt-0' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="flex-col pl-4 text-xl md:flex-grow md:pl-0">
            <ul className="flex flex-wrap items-center justify-end flex-grow gap-2 pr-4 space-x-2 md:gap-6 md:space-x-6">
              <li>
                <a
                  href="#features"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Proposta
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Apoio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Valores
                </a>
              </li>
              <li>
                <a
                  href="#desconto"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Desconto
                </a>
              </li>
              <li>
                <a
                  href="#redesul"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Rede
                </a>
              </li>
              <li>
                <a
                  href="formadesao"
                  className="text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700"
                >
                  Contratar
                </a>
              </li>
              <li className="bg-white rounded-full bg-opacity-40 px-4 text-lg text-white md:text-black shadow-sm group gap-[0.25em] inline-flex items-center py-1.5">
              0800 700 1001
                 
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
