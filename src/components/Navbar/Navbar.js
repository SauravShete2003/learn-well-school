import React, { useState } from "react";
import { MenuIcon, XIcon} from '@heroicons/react/outline'
import badgeLogo from "./Badge Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-sky-300 p-4 font-semibold m-0">
      <div className="flex justify-between items-center">
        <img className="h-20 rounded-full" src={badgeLogo} alt="heading-img" />
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <XIcon className="h-8 w-8 text-gray-700" /> : <MenuIcon className="h-8 w-8 text-gray-700" />}
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/academics">Academics</a>
          <a href="/admission">Admissions</a>
          <a href="/faculty">Faculty</a>
          <a href="/students">Students</a>
          <a href="/gallery">Gallery</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="/" className="block py-2">Home</a>
          <a href="/about" className="block py-2">About Us</a>
          <a href="/academics" className="block py-2">Academics</a>
          <a href="/admission" className="block py-2">Admissions</a>
          <a href="/faculty" className="block py-2">Faculty</a>
          <a href="/students" className="block py-2">Students</a>
          <a href="/gallery" className="block py-2">Gallery</a>
          <a href="/events" className="block py-2">Events</a>
          <a href="/contact" className="block py-2">Contact Us</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
