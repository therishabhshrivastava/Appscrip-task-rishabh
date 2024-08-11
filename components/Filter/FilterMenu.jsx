"use client";
import ArrowIcon from "../../public/icons/left-arrow-logo.svg";
import Image from "next/image";
import { useState } from "react";
import "./FilterMenu.css";

const FilterMenu = ({ title }) => {
  const filterOptions = ["Men", "Women", "Kids"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterToggle = (filter) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(filter)
        ? prevFilters.filter(item => item !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <>
      <div className="filter-container">
        <div className="header" onClick={() => setIsDropdownOpen(prev => !prev)}>
          <p>{title}</p>
          <Image
            style={{
              rotate: `${isDropdownOpen ? "180deg" : "0deg"}`,
              transition: "rotate 0.15s ease-in-out",
            }}
            src={ArrowIcon}
            alt="Arrow Icon"
            height={16}
            width={16}
          />
          <p>All</p>
        </div>
        {isDropdownOpen && (
          <ul className="filter-list">
            {filterOptions.map((option, index) => (
              <li key={index}>
                <div className="filter-checkbox">
                  <input
                    id={option}
                    type="checkbox"
                    checked={selectedFilters.includes(option)}
                    onChange={() => handleFilterToggle(option)}
                    value={option}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <hr />
    </>
  );
};

export default FilterMenu;
