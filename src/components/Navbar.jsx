import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { FaBars } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Game History', href: '/history' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Biomes', href: '/biomes' },
  { name: 'Mobs', href: '/mobs' },
  { name: 'Items & Crafting', href: '/items-and-crafting' },
  { name: 'Bosses', href: '/bosses' },
  { name: 'Dimensions', href: '/dimensions' },
  { name: 'Game Modes', href: '/game-modes' },
  { name: 'Redstone', href: '/redstone' },
  { name: 'Building', href: '/building' },
  { name: 'Multiplayer', href: '/multiplayer' },
  { name: 'Modding', href: '/modding' },
  { name: 'Commands', href: '/commands' },
  { name: 'Updates', href: '/updates' },
  { name: 'Community', href: '/community' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-2xl">Minecraft Guide</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Menu as="div" className="relative">
              <Menu.Button className="hover:text-green-200">
                Sections
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 text-gray-800">
                {navigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        to={item.href}
                        className={`${
                          active ? 'bg-green-100' : ''
                        } block px-4 py-2 text-sm`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-200"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;