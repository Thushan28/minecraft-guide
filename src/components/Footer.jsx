import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gray-300">
              Comprehensive guide for all things Minecraft. From beginners to advanced players,
              find everything you need to know about the game.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/getting-started" className="text-gray-300 hover:text-white">Getting Started</Link></li>
              <li><Link to="/biomes" className="text-gray-300 hover:text-white">Biomes</Link></li>
              <li><Link to="/mobs" className="text-gray-300 hover:text-white">Mobs</Link></li>
              <li><Link to="/crafting" className="text-gray-300 hover:text-white">Crafting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://www.minecraft.net" className="text-gray-300 hover:text-white">Official Minecraft</a></li>
              <li><a href="https://minecraft.fandom.com" className="text-gray-300 hover:text-white">Minecraft Wiki</a></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white">Community Hub</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <p className="text-gray-300 text-sm">
              Minecraft is a registered trademark of Mojang Studios. This site is not affiliated
              with Mojang Studios or Microsoft.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Minecraft Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;