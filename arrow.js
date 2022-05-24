//  1 function decliyar
function add(num1, num2) {
    return num1 + num2;

}
// 2 function exepression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
// 3 function expression(anynimus)
const add3 = function (num1, num2) {
    return num1 + num2;
}
// 4 arrow function
const add4 = (num1, num2) => num1 + num2;
const result1 = add(17, 18)
const result2 = add2(17, 18)
const result3 = add3(17, 18)
const result4 = add4(17, 18)
console.log(result1, result2, result3, result4);