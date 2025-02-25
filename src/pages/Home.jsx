import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const featuredSections = [
    {
      title: 'Getting Started',
      description: 'New to Minecraft? Learn the basics and start your adventure.',
      link: '/getting-started',
      image: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg',
    },
    {
      title: 'Latest Updates',
      description: 'Stay informed about the newest features and changes.',
      link: '/updates',
      image: 'https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MinecraftBedrock-Screenshots-01.jpg',
    },
    {
      title: 'Crafting Guide',
      description: 'Learn how to craft everything in the game.',
      link: '/items-and-crafting',
      image: 'https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MinecraftBedrock-Screenshots-02.jpg',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-16 rounded-lg overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to the Complete Minecraft Guide
          </h1>
          <p className="text-xl mb-8">
            Your comprehensive resource for everything Minecraft
          </p>
          <Link
            to="/getting-started"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredSections.map((section) => (
          <Link
            key={section.title}
            to={section.link}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickLink title="Biomes" link="/biomes" />
          <QuickLink title="Mobs" link="/mobs" />
          <QuickLink title="Dimensions" link="/dimensions" />
          <QuickLink title="Redstone" link="/redstone" />
          <QuickLink title="Building" link="/building" />
          <QuickLink title="Multiplayer" link="/multiplayer" />
          <QuickLink title="Commands" link="/commands" />
          <QuickLink title="Modding" link="/modding" />
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="space-y-4">
          <NewsItem
            title="Minecraft 1.20 Update Released"
            date="2023"
            description="Explore new features including archaeology, cherry blossoms, and more!"
          />
          <NewsItem
            title="New Minecraft Dungeons DLC"
            date="2023"
            description="Discover new challenges and rewards in the latest DLC pack."
          />
          <NewsItem
            title="Minecraft Live Event Announced"
            date="2023"
            description="Mark your calendars for the biggest Minecraft event of the year."
          />
        </div>
      </div>
    </div>
  );
}

function QuickLink({ title, link }) {
  return (
    <Link
      to={link}
      className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors"
    >
      <span className="font-medium">{title}</span>
    </Link>
  );
}

function NewsItem({ title, date, description }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;