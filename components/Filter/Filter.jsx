// Filter.js
import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import Style from "./Filter.module.css";

const Filter = ({ categories, onFilterSelect }) => {
  const [filter, setFilter] = useState(true);

  //FUNCTION SECTION
  const openFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className={Style.filter}>
      <div className={Style.filter_box}>
        <div className={Style.filter_box_left}>
          {categories.map((category, index) => (
            <button key={index} onClick={() => onFilterSelect(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className={Style.filter_box_right}>
          <div
            className={Style.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Lọc</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
