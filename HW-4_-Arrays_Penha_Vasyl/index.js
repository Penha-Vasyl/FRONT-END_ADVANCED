const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференціальні рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const MAX_MARK = 5;
const MIN_MARK = 1;

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів
function getPairs(students) {
  const firstPair = [students[0], students[2]];
  const secondPair = [students[1], students[3]];
  const thirdPair = [students[4], students[5]];

  return [firstPair, secondPair, thirdPair];
}

// 2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
function getPairsWithThemes(pairs, themes) {
  const studentsPairs = [];

  for (let i = 0; i < pairs.length; i++) {
    const currentPair = pairs[i];
    const currentTheme = themes[i];
    const currentPairsWithThemes = [currentPair.join(' i '), currentTheme];
    
    studentsPairs.push(currentPairsWithThemes);
  }

  return studentsPairs;
}

// 3.Зіставте оцінки(marks) зі студентом(students):
function getStudentsWithMarks(students, marks) {
  const studentsWithMarks = [];

  for (let i = 0; i < students.length; i++) {
    const studentWithMark = [students[i], marks[i]];

    studentsWithMarks.push(studentWithMark);
  }

  return studentsWithMarks;
}

// 4.Поставте кожній парі випадкову оцінку(від 1 до 5).
function getPairsWithRandomMarks(pairsWithThemes) {
  const result = [];
  
  for (let i = 0; i < pairsWithThemes.length; i++) {
    const randomMark = Math.round(Math.random() * (MAX_MARK - MIN_MARK) + MIN_MARK);
    const pairsWithMark = [...pairsWithThemes[i], randomMark];

    result.push(pairsWithMark);
  }

  return result;
}

const pairs = getPairs(students);
const pairsWithThemes = getPairsWithThemes(pairs, themes);
const studentsWithMarks = getStudentsWithMarks(students, marks);
const pairsWithRandomMarks = getPairsWithRandomMarks(pairsWithThemes);

console.log('pairs', pairs);
console.log('pairsWithThemes', pairsWithThemes);
console.log('studentsWithMarks', studentsWithMarks);
console.log('pairsWithRandomMarks', pairsWithRandomMarks);
