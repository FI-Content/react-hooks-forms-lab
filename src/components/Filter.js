import React from "react";

function Filter({ onCategoryChange, onSearchChange, searchTerm}) {
  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search"
      placeholder="Search..." 
      value={searchTerm} 
      onChange={onSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
