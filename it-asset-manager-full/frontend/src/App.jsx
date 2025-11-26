import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Assets from './pages/Assets';
import AssetDetails from './pages/AssetDetails';
import Handovers from './pages/Handovers';
import HandoversNew from './pages/HandoversNew';
import Maintenance from './pages/Maintenance';
import Purchases from './pages/Purchases';
import Network from './pages/Network';
import NotFound from './pages/NotFound';

export default function App(){
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets/:id" element={<AssetDetails />} />
            <Route path="/handovers" element={<Handovers />} />
            <Route path="/handovers/new" element={<HandoversNew />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/network" element={<Network />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
