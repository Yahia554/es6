function add(num1, num2 = 0) { //= 0 defult value

    /*  if (num2 == undefined) {
         num2 = 0;
     } */
    const total = num1 + num2;
    return total;
}
const result = add(15, 56);
console.log(result);