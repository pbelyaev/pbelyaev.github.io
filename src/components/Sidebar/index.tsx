import { FunctionComponent } from 'react';

import { Profile } from '../Profile';

export const Sidebar: FunctionComponent = () => {
  return (
    <aside className="h-screen bg-white shadow-md center flex flex-col">
      <Profile />
      <nav className="w-full flex flex-col py-4">
        <a
          href="#"
          className="w-full p-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Home
        </a>
        <a
          href="#"
          className="w-full p-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          About
        </a>
        <a
          href="#"
          className="w-full p-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Portfolio
        </a>
      </nav>
      <footer className="p-4 mt-auto">
        <p className="text-gray-700">Made with &hearth; &copy; 2020</p>
      </footer>
    </aside>
  );
};
