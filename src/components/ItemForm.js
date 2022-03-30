import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
// import ShoppingList from "./ShoppingList";
// import Item from "./Item";


function ItemForm({onItemFormSubmit}) {
  const [item, setItem] = useState({category: '', name: ''});

  function submitForm(event){
    event.preventDefault();
    const product = {
      category: item.category,
      name: item.name,
      id: uuid()
    }
    onItemFormSubmit(product);
  }

  function inputChange(event){
    const inputValue = event.target.value;
    setItem({...item, [event.target.name]: inputValue})
  }

  return (
    <form className="NewItem" onSubmit={submitForm}>
      <label>
        Name:
        <input type="text" name="name" onChange={inputChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={inputChange}>
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
