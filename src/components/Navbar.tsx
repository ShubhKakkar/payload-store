"use client";
import React, { useState } from 'react';
import { navItems } from '@/lib/constants';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';
import Image from 'next/image';
import Cart from './Cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky h-16 z-50 top-0 inset-x-0 border-b bg-shiny text-white">
      <header className="h-full flex items-center justify-between px-4 gap-24">
        <div>
          <h2 className="text-xl font-semibold">
            <Image src="/main-logo.jpg" alt="logo" height={60} width={60} objectFit="contain" className="object-contain" />
          </h2>
        </div>
        <div className="flex items-center space-x-2 flex-1 w-full">
          <div className="hidden md:block relative w-full">
            <Input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-md text-black bg-white w-full border-none outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex space-x-8">
            {navItems.map(({ id, label, href, icon: Icon }) => (
              <li key={id}>
                <Link href={href} className="flex items-center space-x-2">
                  <Icon className="text-sm" />
                  <span className="text-base">{label}</span>
                </Link>
              </li>
            ))}
            <Cart />
            <ThemeToggler />
          </ul>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden bg-shiny text-white w-full px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map(({ id, label, href, icon: Icon }) => (
              <li key={id}>
                <Link href={href} className="flex items-center space-x-2">
                  <Icon className="text-sm" />
                  <span className="text-base">{label}</span>
                </Link>
              </li>
            ))}
            <Cart />
            <ThemeToggler />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;