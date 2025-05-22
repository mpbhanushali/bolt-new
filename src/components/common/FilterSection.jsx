import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import PopupModal from "./PopupModal";
import "./FilterSection.css";
import CustomSlider from "../ui/CustomSlider";

const FilterOption = ({ label, options, isOpen, onToggle }) => {
  return (
    <div className="filter-option">
      <button className="filter-button" onClick={onToggle}>
        {label}
        <FaChevronDown className={`chevron ${isOpen ? "open" : ""}`} />
      </button>
      <PopupModal isOpen={isOpen} onClose={onToggle}>
        <div className="filter-popup">
          <h3>{label}</h3>
          <div className="filter-options-list">
            {options.map((option, index) => (
              <label key={index} className="filter-checkbox">
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </PopupModal>
    </div>
  );
};

const filters = {
  departments: [
    "Grocery",
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Toys",
    "Sports",
    "Auto",
    "Health & Beauty",
  ],
  services: [
    "Pharmacy",
    "Vision Center",
    "Auto Care",
    "Photo Center",
    "Financial Services",
    "Mobile Services",
  ],
};

const otherFilters = ["Deals", "Saved"];

const FilterSection = () => {
  const [openFilter, setOpenFilter] = useState(null);

  const handleToggle = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  return (
    <div  className="filter-section">
    {/* <CustomSlider> */}
      <FilterOption
        label="Departments"
        options={filters.departments}
        isOpen={openFilter === "departments"}
        onToggle={() => handleToggle("departments")}
      />
      <FilterOption
        label="Services"
        options={filters.services}
        isOpen={openFilter === "services"}
        onToggle={() => handleToggle("services")}
      />
      {otherFilters.map((filter) => {
        return (
          <div className="filter-option">
            <button
              className="filter-button"
              onClick={() => handleToggle(filter)}
            >
              {filter}
            </button>
          </div>
        );
      })}
    {/* </CustomSlider> */}
    </div>
  );
};

export default FilterSection;
