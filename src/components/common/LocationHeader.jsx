import React from 'react'
import { FaMapMarkerAlt, FaStore } from 'react-icons/fa'
import './LocationHeader.css'

const LocationHeader = () => {
  return (
    <div className="location-header">
      <div className="location-info">
        <FaMapMarkerAlt className="location-icon" />
        <div className="location-text">
          <span>You're Located at</span>
          <strong>Sacramento Supercenter</strong>
        </div>
      </div>
      <button className="detect-store-btn">
        <FaStore className="store-icon" />
        Detect Store
      </button>
    </div>
  )
}

export default LocationHeader