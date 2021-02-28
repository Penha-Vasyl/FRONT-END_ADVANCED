let userNumberN = null;
let userNumberM = null;
let sumNumbers = 0;

do {
  userNumberN = + (prompt('Please write іnitial number'));
  userNumberM = + (prompt('Please write final number'));

  if (userNumberN > userNumberM) {
    alert('The initial number cannot be greater than the final number. Enter the number again.')
    continue;
  }
  if (isNaN(userNumberN) || isNaN(userNumberM)) {
    alert('Your numbers is not valid, try again')
  }
} while (isNaN(userNumberN) || isNaN(userNumberM))

const integerNumberN = parseInt(userNumberN);
const integerNumberM = parseInt(userNumberM);
const skipEvenNumbers = confirm('Whether to skip even numbers?');

for (let i = integerNumberN; i <= integerNumberM; i++) {
  if (skipEvenNumbers === false || (i % 2)) {
    sumNumbers += i;
  }
}

alert(sumNumbers);
