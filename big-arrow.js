const add = (num1, num2) => num1 + num2;
const sum = add(12, 17);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(12, 4, 3);

const tinTimes = (num) => num * 10;
const output = tinTimes(17);

const fiveTimes = num => num * 5;
const value = fiveTimes(17);

const getName = () => 'sami ahmed';
const name = getName();

const doMath = (x, y) => {
    const sum = x + y;
    const dif = x - y;
    const result = sum * dif;
    const output = result * 5;
    return output;
}
const total = doMath(12, 5);
console.log(total);