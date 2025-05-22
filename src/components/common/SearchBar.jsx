import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div className="location-selector">
       
      </div>
      <div className="search-bar">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Search whatever you need at walmart!"
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            background: 'transparent'
          }}
        />
      </div>
    </div>
  )
}

export default SearchBar