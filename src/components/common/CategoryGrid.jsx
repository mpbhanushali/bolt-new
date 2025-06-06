import React from 'react'
import CategoryItem from './CategoryItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CategoryGrid.css'

const categories = [
    { icon: '🛒', label: 'Grocery' },
    { icon: '💊', label: 'Health' },
    { icon: '👶', label: 'Baby' },
    { icon: '👕', label: 'Fashion' },
    { icon: '🏠', label: 'Home' },
  ]

  const utilityItems = [
    { icon: '📱', label: 'Scan & Go' },
    { icon: '🔍', label: 'Check price' },
    { icon: '🎯', label: 'Walmart Pay' },
  ]

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      }
    ],
    prevArrow: false
  }

const CategoryGrid = () => {
 

  return (
    <div>
      <Slider {...sliderSettings} className="category-slider">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            icon={category.icon}
            label={category.label}
          />
        ))}
      </Slider>
      <div className="utility-grid">
        {utilityItems.map((item, index) => (
          <div key={index} className="utility-item">
            <div className="utility-icon">{item.icon}</div>
            <span className="utility-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryGrid