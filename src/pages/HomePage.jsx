import React from 'react'
import SearchBar from '../components/common/SearchBar'
import StoreMap from '../components/common/StoreMap'
import CategoryGrid from '../components/common/CategoryGrid'
import LocationHeader from '../components/common/LocationHeader'
import FilterSection from '../components/common/FilterSection'

const HomePage = () => {
  return (
    <div className="container" style={{ background: 'linear-gradient(to bottom, #0071dc, white)' }}>
      <SearchBar />
      <LocationHeader />
      <FilterSection />
      <StoreMap />
      <CategoryGrid />
    </div>
  )
}

export default HomePage