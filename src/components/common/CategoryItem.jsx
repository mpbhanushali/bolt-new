import React from 'react'

const CategoryItem = ({ icon, label }) => {
  return (
    <div className="category-item">
      <div className="category-icon">{icon}</div>
      <span className="category-label">{label}</span>
    </div>
  )
}

export default CategoryItem