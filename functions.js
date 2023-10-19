// Function Definition
function cutFruitPieces(fruit) {
  return fruit * 4;
}

// Call Function
cutFruitPieces(3);

// Function Expression
const processFruit = function (fruit) {
  let pieces = cutFruitPieces(fruit);
  console.log(pieces);
};

// Call Function
processFruit(5);
