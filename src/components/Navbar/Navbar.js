import React from "react";
import badgeLogo from "./Badge Logo.png";
function Navbar() {
  return (
    <div className="flex lg:flex justify-evenly items-center bg-sky-300 p-4 cursor-pointer font-semibold ">
        <img className="h-20 w-auto rounded-full me-10" src={badgeLogo} alt="heading-img" />
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
  );
}

export default Navbar;
