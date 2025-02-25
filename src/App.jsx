import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import GameHistory from './pages/GameHistory.jsx';
import GettingStarted from './pages/GettingStarted.jsx';
import Biomes from './pages/Biomes.jsx';
import Mobs from './pages/Mobs.jsx';
import ItemsAndCrafting from './pages/ItemsAndCrafting.jsx';
import Bosses from './pages/Bosses.jsx';
import Dimensions from './pages/Dimensions.jsx';
import GameModes from './pages/GameModes.jsx';
import Redstone from './pages/Redstone.jsx';
import Building from './pages/Building.jsx';
import Multiplayer from './pages/Multiplayer.jsx';
import Modding from './pages/Modding.jsx';
import Commands from './pages/Commands.jsx';
import Updates from './pages/Updates.jsx';
import Community from './pages/Community.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<GameHistory />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/biomes" element={<Biomes />} />
            <Route path="/mobs" element={<Mobs />} />
            <Route path="/items-and-crafting" element={<ItemsAndCrafting />} />
            <Route path="/bosses" element={<Bosses />} />
            <Route path="/dimensions" element={<Dimensions />} />
            <Route path="/game-modes" element={<GameModes />} />
            <Route path="/redstone" element={<Redstone />} />
            <Route path="/building" element={<Building />} />
            <Route path="/multiplayer" element={<Multiplayer />} />
            <Route path="/modding" element={<Modding />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;