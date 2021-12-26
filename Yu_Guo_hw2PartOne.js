// Quenstion One
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 }
];

// Simple Method itemsObject[0].quantity *= 2;

itemsObject.map(({ quantity, price }) => {
  return {
    quantity: quantity * 2,
    price: price * 2
  };
});

const newItemObject0 = itemsObject.map(({ quantity, price }) => {
  return {
    quantity: quantity * 2,
    price: price * 2
  };
});
console.log(newItemObject0);

// For the question a
const newItemObject1 = itemsObject.map((item) => {
  return {
    quantity: item.quantity * 2,
    price: item.price * 2
  };
});
console.log(newItemObject1);

// For the question c
const newItemObject2 = itemsObject.map((that) => {
  return {
    quantity: that.quantity * 2,
    price: that.price * 2,
    total: that.quantity * that.price
  };
});
console.log(newItemObject2);

// For the question b
let filterMyItem = itemsObject.filter(function (filterThat) {
  return filterThat.quantity > 2 && filterThat.price > 300;
});
console.log(filterMyItem);
