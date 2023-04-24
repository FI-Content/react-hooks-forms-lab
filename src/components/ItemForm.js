import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
const [formData, setFormData ]=useState({
  name: '',
  category: 'produce'
});
  
 function handleChange(event){

  const name = event.target.name;
  const value= event.target.value

  setFormData({...formData, [name]:value})
}

function handleSubmit(event){
  event.preventDefault();
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: formData.name,
    category: formData.category,
  };
  console.log('-?',newItem);
    props.handleAddNew(newItem);
    setFormData({name: '',category: 'produce'}
      
    )
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
