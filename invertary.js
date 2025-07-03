// 1. Declare empty inventory array
let inventory = [];

// 2. Function to find the index of a product (case-insensitive match)
function findProductIndex(productName) {
  return inventory.findIndex(
    item => item.name.toLowerCase() === productName.toLowerCase()
  );
}

// 3. Function to add a product to inventory
function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = product.quantity;
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity });
    console.log(`${name} added to inventory`);
  }
}

// 4. Function to remove a product from inventory
function removeProduct(productName, quantityToRemove) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  const product = inventory[index];

  if (quantityToRemove > product.quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
  } else if (quantityToRemove === product.quantity) {
    inventory.splice(index, 1);
    console.log(`${name} removed completely from inventory`);
  } else {
    product.quantity -= quantityToRemove;
    console.log(`Remaining ${name} pieces: ${product.quantity}`);
  }
}
console.log(findProductIndex("flour"));
console.log(addProduct({name: "FLOUR", quantity: 5}));
console.log(removeProduct("FLOUR", 10));