const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// 1.Створіть функцію getSubjects(students[0]) --> ["Math", "Algorithms", "Data science"] - яка 
// повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно 
// повертати з великої літери, а _ – замінити на пробіл

function getSubjects(student) {
  const subjects = Object.keys(student?.subjects);
  
  return subjects.map(subject => {
    const correctSubject = subject.replaceAll('_', ' ');
   
    return correctSubject[0].toUpperCase() + correctSubject.slice(1).toLowerCase();
  });
}

console.log(`Список предметів для студента:`, getSubjects(students[0]));

// 2.Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім 
// предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна 
// використовувати функції, написані у попередніх домашніх завданнях :)
function getAvarage(numbers) {
  const sum = numbers.reduce((accumulator, item) => {
    return accumulator + item;
  });

  return sum / numbers.length;
}

function getAverageMark(student) {
  const marks = Object.values(student?.subjects);
  const numberMarks = marks.reduce((accumulator, item) => {
    return accumulator.concat(item);
  }, []);
  
  return + getAvarage(numberMarks).toFixed(2);  
}

console.log(`Cередня оцінка по усім предметам для переданого студента: ${getAverageMark(students[0])}`);

// 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає 
// інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). Повинна бути виведена 
// інформація: курс, ім'я, середня оцінка.
function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  };  
};

console.log(`Інформація загального виду по переданому студенту:`, getStudentInfo(students[0]));

// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
function getStudentsNames(students) {
  return students.map((student) => student.name).sort();
};

console.log(`Імена студентів у алфавітному порядку:`, getStudentsNames(students));

// 5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(students) {
  const studentsInfo = students.map(student => getStudentInfo(student));
  const sortedStudentsInfo = studentsInfo.sort((a, b) => b.averageMark - a.averageMark);

  return sortedStudentsInfo[0].name;
};

console.log(`Кращий студента зі списку по показнику середньої оцінки:`, getBestStudent(students));

// 6.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, 
// а значення – кількість їх повторень.
function calculateWordLetters(word) {
  const letters = word.toLowerCase().split('');
  
  return letters.reduce((accumulator, letter) => {
    accumulator[letter] = accumulator[letter] + 1 || 1;

    return accumulator;
  }, {})
}

console.log(`Букви у слові, та кількість їх повторень.`, calculateWordLetters("тест"));