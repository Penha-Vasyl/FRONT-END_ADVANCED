// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number) {
  const stringNumber = String(number);
  const charArray = stringNumber.split('');
  const maxNumber = Math.max(...charArray);

  return maxNumber;
}
console.log(getMaxDigit(451569));

// 2. Створити фpункцію, яка визначає ступінь числа.
function raiseToPower(number, power) {
  let result = 1; 

  for (let i = 0; i < power; i++) {
    result *= number;
  }

  return result;
}
console.log(raiseToPower(2, 5));


// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function formatName(name) {
  const smallLetters = name.toLowerCase();
  const firstLetter = name[0];

  return firstLetter.toUpperCase() + smallLetters.slice(1);
}

console.log(formatName('boBI'));

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function getNetSalary(salary) {
  const taxes = 0.195;

  return salary - (salary * taxes);
}
console.log(getNetSalary(1000));

// 5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
const getRandomNumber = (min, max) => (Math.round(Math.random() * (max - min) + min));

console.log(getRandomNumber(5, 10));

// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
function countLetters(word, letter) {
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
      counter++;
    }
  }

  return counter;
}
console.log(countLetters('дихлордифенілтрихлорметилметан', 'е'));

// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
function convertСurrency(sum, rate = 28) {
  if (sum.includes('$')) {
    return (parseFloat(sum) * rate).toFixed(2) + ' uah';
  }
  if (sum.toLowerCase().includes('uah')) {
    return (parseFloat(sum) / rate).toFixed(2) + ' $';
  }
  console.error('Invalid currency');
}
console.log(convertСurrency('100$'));
console.log(convertСurrency('100 UAH'));
console.log(convertСurrency('100 uah'));
console.log(convertСurrency('100 SD'));

// 8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function generateRandomPassword(lengthPassword = 8) {
  let password = ''; 

  for (let i = 0; i < lengthPassword; i++) {
    password += getRandomNumber(0, 9);
  }

  return password;
}
console.log(generateRandomPassword(4));

// 9.Створіть функцію, яка видаляє всі букви з речення.
const deleteLetters = (sentence, letter) => (sentence.replaceAll(letter, ''));

console.log(deleteLetters('blablabla', 'a'));

// 10.Створіть функцію, яка перевіряє, чи є слово паліндромом.
function isPalindrome(sentence) {
  const normalizedSentence = sentence.replaceAll(' ', '').toLowerCase();
  const reversedSentence = normalizedSentence.split('').reverse().join('');

  return normalizedSentence === reversedSentence;
}
console.log(isPalindrome('Я несу гусеня'));

// 11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
function deleteDuplicateLetter(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    const currentLetter = sentence[i];
    if (sentence.indexOf(currentLetter) !== sentence.lastIndexOf(currentLetter)) {
      sentence = sentence.replaceAll(currentLetter, '');
    }
  }
  
  return sentence;
}

console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'))
