import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = addedIngredient =>
    setIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...addedIngredient }
    ]);

  const removeIngredientHandler = removedIngredient =>
    setIngredients(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.id !== removedIngredient)
    );

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
