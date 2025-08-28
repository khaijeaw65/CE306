/**
 * 
 * @param { number } price 
 * @param { number } discountPercent 
 */
const productPriceCalculator = (price, discountPercent) => {
  const discount = (price * discountPercent) / 100;
  const finalPrice = price - discount;

  // case 1: finalPrice < 0
  if (finalPrice < 0) {
    return 0;
  }

  // case 2: finalPrice <= 500
  if (finalPrice <= 500) {
    return finalPrice + 50;
  }

  // case 3: finalPrice > 500
  // return finalPrice - 10% of finalPrice
  return finalPrice - ((finalPrice * 10) / 100);
}

console.log('case 1: product price: ', productPriceCalculator(-1, 0));
console.log('case 2: product price: ', productPriceCalculator(500, 0));
console.log('case 3: product price: ', productPriceCalculator(1000, 10));
