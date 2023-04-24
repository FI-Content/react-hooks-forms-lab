import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm ] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event){
    setSearchTerm(event.target.value)
  }
  const itemsToDisplay = items.filter((item) => {
    // console.log('serc', searchTerm);
    if(searchTerm) {console.log('serc', searchTerm); return item.name.toLowerCase().includes(searchTerm)}
    else if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // console.log(itemsToDisplay);
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} searchTerm={searchTerm}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
