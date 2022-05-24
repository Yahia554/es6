const friend = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class"friend-name">friend - 4</h3>'
const old2 = '<h3 class"friend-name">friend -' + count + '</h3>'
const new1 = `<h3 class"friend-name">friend -${count}</h3>`;
const new2 = `<h3 class"friend-name">friend -${friend.length}</h3>`

const first = 'abul';
const last = 'kalam';
const fullold = first + ' ' + last;
const fullNew = `this name is: ${first} ${last} is muney ${friend.length * 600} live in dka`;
console.log(fullNew)

