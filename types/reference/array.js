let foods = ["apple", "banana"];
console.log(foods);

// add new data
foods.push("cherry");
console.log(foods);

// add multiple data at one
foods.push("carrot", "cabbage");
console.log(foods);

// pop || remove that last item
foods.pop()
console.log(foods);

let numberOfFoods = foods.length;
console.log("Number of food: " + numberOfFoods);

// accessing the array data with index
console.log("First food: " + foods[0]);