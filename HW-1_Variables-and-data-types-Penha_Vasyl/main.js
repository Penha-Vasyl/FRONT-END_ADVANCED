const headphoneSven = 15.678;
const headphoneKoss = 123.965;
const headphoneSennheiser = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxHeadphonesPrice = Math.max(headphoneSven, headphoneKoss, headphoneSennheiser);
console.log(maxHeadphonesPrice);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minHeadphonesPrice = Math.min(headphoneSven, headphoneKoss, headphoneSennheiser);
console.log(minHeadphonesPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const costOfAllGoods = headphoneSven + headphoneKoss + headphoneSennheiser;
console.log(costOfAllGoods);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. 
// Округлення використовувати в МЕНЬШУ сторону.
const roundedCostOfAllGoods = Math.floor(headphoneSven) + Math.floor(headphoneKoss) + Math.floor(headphoneSennheiser);
console.log(roundedCostOfAllGoods);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
function roundToMultiple(num, multiple) {
  return Math.round(num / multiple) * multiple;
}
const priceRoundedToHundred = (roundToMultiple(costOfAllGoods, 100));
console.log(priceRoundedToHundred);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const evenOrOddNumber = roundedCostOfAllGoods % 2 === 0;
console.log(evenOrOddNumber);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const payment = 500;
const restOfMoney = + ((payment - costOfAllGoods).toFixed(2));
console.log(restOfMoney);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePrice = + (((headphoneSven + headphoneKoss + headphoneSennheiser)/3).toFixed(2));
console.log(averagePrice);

// (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

const discount = Math.round(Math.random() * 100);
console.log('Знижка =', discount);
const amountForPayment = + ((costOfAllGoods - (costOfAllGoods * (discount / 100))).toFixed(2));
console.log('Сума до оплати = ',amountForPayment);
const profit = + ((amountForPayment - costOfAllGoods / 2).toFixed(2));
console.log('Чистий прибуток = ', profit);

// Advanced
const answers = `\n 
  Mаксимальне число = ${maxHeadphonesPrice}
  Mінімальне число = ${minHeadphonesPrice}
  Вартість всіх товарів = ${costOfAllGoods}
  Округлена вартість товарів = ${roundedCostOfAllGoods}
  Округлена вартість товарів до сотень = ${priceRoundedToHundred}
  Чи парне число = ${evenOrOddNumber}
  Cуму решти = ${restOfMoney}
  Cереднє значення цін, округлене до другого знаку після коми = ${averagePrice}
  Знижка = ${discount}
  Сума до оплати = ${amountForPayment}
  Чистий прибуток = ${profit}`
;

console.log(answers);
