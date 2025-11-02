import React from 'react'
import logo from '../assets/hero-img/logo.png'
export default function Nav() {
  return (
    <header className=" w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
         <img src={logo} alt="Mendleson Logo"  />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-800 z-30">
          <a className="cursor-pointer hover:text-black transition">About Us</a>
          <a className="cursor-pointer hover:text-black transition">Services</a>
          <a className="cursor-pointer hover:text-black transition">Team</a>
          <a className="cursor-pointer hover:text-black transition">Clients</a>
          <a className="cursor-pointer hover:text-black transition">Contact Us</a>
          
        </nav>
        <button className="md:hidden px-3 py-2">☰</button>
      </div>
    </header>
  )
}