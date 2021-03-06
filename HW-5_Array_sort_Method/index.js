// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
function getRandomArray(length, min, max) {
  const result = Array.from({ length });

  return result.map(() => Math.round(Math.random() * (max - min) + min));
}
  
console.log(getRandomArray(7, 1, 100));

// 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers) {
  const integerNumbers = numbers.filter(element => Number.isInteger(element));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = integerNumbers.reduce(reducer);

  return sum / integerNumbers.length;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getMedian(...numbers) {
  const integerNumbers = numbers.filter(element => Number.isInteger(element));
  const sortedNumbers = integerNumbers.sort((first, second) => {
    if (first > second) {
      return 1;
    }

    if (first < second) {
      return -1;
    }

    return 0;
  });

  if (sortedNumbers.length % 2 !== 0) {
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    return sortedNumbers[middleIndex];

  } else {
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    const evenMiddleIndex = middleIndex - 1;

    return (sortedNumbers[middleIndex] + sortedNumbers[evenMiddleIndex]) / 2;
  }  
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers) {

  return numbers.filter(element => element % 2 !== 0);
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
  const filtered = numbers.filter((element) => element > 0);

  return filtered.length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5 
function getDividedByFive(...numbers) {

  return numbers.filter(element => element % 5 === 0);
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти 
// .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
function replaceBadWords(string) {
  const badWords = ['shit', 'fuck'];
  const sentence = string.split (' ');

  const correctSentence = sentence.map(word => {
    let newWord = word;

    for (let i = 0; i < badWords.length; i++) {
      const badWord = badWords[i];
      const badWordLength = badWord.length;
      
      newWord = word.replaceAll(badWord, '*'.repeat(badWordLength));
    }

    return newWord;
  });

  return correctSentence.join(" ");
}

console.log(replaceBadWords("Are you fucking kidding?"));

// 9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. 
// Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
function divideByThree(word) {
  const letters = word.toLowerCase().replaceAll(' ', '').split('');

  return letters.reduce((accumulator, currentValue) => {
    if (accumulator.length === 0) {
      accumulator.push(currentValue)

      return accumulator;
    }
    
    const lastElement = accumulator[accumulator.length - 1];
    if (lastElement.length === 3) {
      accumulator.push(currentValue);

      return accumulator;
    }

    const newlastElement = lastElement + currentValue;
    accumulator.pop();
    accumulator.push(newlastElement);

    return accumulator;
  }, [])
}

console.log(divideByThree('Commander'));