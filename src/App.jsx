import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/mobile.css'
import './App.css'
import Header from './components/layouts/Header'
import HomePage from './pages/HomePage'
import StoreMapPage from './pages/StoreMapPage'

function App() {
  return (
    <Router>
      <div className="container">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store-map" element={<StoreMapPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
