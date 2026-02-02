//cau1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

//cau2
const products = [
  new Product(1, "Phone", 500, 10, "Electronics", true),
  new Product(2, "Laptop", 1200, 0, "Electronics", true),
  new Product(3, "Headphones", 25, 15, "Accessories", true),
  new Product(4, "Mouse", 20, 8, "Accessories", false),
  new Product(5, "Keyboard", 35, 5, "Accessories", true),
];

//cau3
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));

console.log(nameAndPrice);

//cau4
const inStockProducts = products.filter(p => p.quantity > 0);
console.log(inStockProducts);

//cau5
const hasPriceAbove30 = products.some(p => p.price > 30);
console.log(hasPriceAbove30);

//cau6
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log(allAccessoriesAvailable);

//cau7
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);

console.log(totalInventoryValue);

//cau8
for (const p of products) {
  console.log(`Tên: ${p.name} - Danh mục: ${p.category} - Trạng thái: ${p.isAvailable}`);
}

//cau9
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

//cau10
const availableAndInStockNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log(availableAndInStockNames);