import {  Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () =>{
    setClicked(true)
  }
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm  sm:text-xl  text-gray-800  font-bold"
      >
        <span className="px-3 py-1 bg-cyan-500 rounded-lg text-white">
          Pravin's
        </span>
        Work
      </Link>
     
      <Navbar.Toggle aria-controls="navbar-nav" className="ml-auto" />

      <Navbar.Collapse className="gap-8 md:ml-28">
        <Navbar.Link active={path === "/"}>
          <Link to={"/"} className="relative inline-block">
            <span className="hover:border-b-2 hover:border-teal-500 hover:pb-2">
              Home
            </span>
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
          <Link to={"/about"} className="relative inline-block">
            <span className="hover:border-b-2 hover:border-teal-500 hover:pb-2">
              About
            </span>
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/services"}>
          <Link to={"/services"} className="relative inline-block">
            <span className="hover:border-b-2 hover:border-teal-500 hover:pb-2">
              Services
            </span>
          </Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
     <Link to={'/dashboard'}>
      <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white hover:bg-green-400" onClick={handleClick}> {clicked ? 'Dashboard' : 'Login'}</button>
     </Link>
    </Navbar>
  );
}
