/**
Create a function batches that returns the maximum number of whole batches that can be cooked from a recipe.

It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is number representing how many units there are.
*/
let batches = (recipe, available) => {
  const result = [];

  for (prodName in recipe) {
    if (available[prodName] === undefined) return 0;

    const canCooked = Math.floor(available[prodName] / recipe[prodName]);
    result.push(canCooked);
  }

  return Math.min(...result);
}

// 0 batches can be made
batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
)

batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
)

// 1 batch can be made
batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
)

// 2 batches can be made
batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
)
