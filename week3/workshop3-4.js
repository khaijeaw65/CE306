const products = [
  {
    price: 1000,
    discountPercent: 10,
  },
  {
    price: 500,
    discountPercent: 0,
  },
  {
    price: 20,
    discountPercent: 50,
  }
];

const calculateTotal = () => {
  let total = 0;

  products.forEach((product) => {
    const discount = (product.price * product.discountPercent) / 100;
    const finalPrice = product.price - discount;
    total += finalPrice;
  })

  console.log(`Total price after discount: $${total}`);
}

calculateTotal();