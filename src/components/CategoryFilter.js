import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryFilter }) {
  const [selected, setSelected] = useState(0);

  const categoryBtn = categories.map((category, index) =>
    <button key={category} className={selected === index ? "selected" : ""} onClick={() => {onCategoryFilter(category) 
      setSelected(index)}}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;

