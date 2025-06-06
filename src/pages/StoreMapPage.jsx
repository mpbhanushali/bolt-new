import React from 'react';
import './storemappage.css'
const StoreMapPage = () => {
  return (
    <div className='map-page-container'>
      {/* Search Bar */}
      <div className="map-search-bar" style={{ padding: '10px', position: 'relative' }}>
        <input 
          type="search" 
          placeholder="Find an item"
          style={{
            width: '100%',
            padding: '8px 30px',
            borderRadius: '20px',
            border: '1px solid yellow',
            backgroundColor: 'black',
            caretColor: 'yellow'
          }}
          
        />
        {/* <span style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }}>🔍</span> */}
      </div>

      {/* Store Map Grid */}
      <div className="store-map-image" style={{ padding: '20px', height: '85%', borderRadius: '10px' }}>
        <img src='/images/walmart_stoer_map.jpeg' style={{width: '100%', height: '100%', borderRadius: '10px'}} />
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '10px',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid #eee'
      }}>
        <button style={buttonStyle}>Multiple Pickups</button>
        <button style={buttonStyle}>All Aisles</button>
        <button style={buttonStyle}>Favorites ❤️</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '8px 15px',
  borderRadius: '20px',
  border: '1px solid #ddd',
  backgroundColor: '#f5f5f5',
  cursor: 'pointer'
};

export default StoreMapPage;
