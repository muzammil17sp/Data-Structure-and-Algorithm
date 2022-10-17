const array = [10, 20, 30, 40, 50, 60];
const position = 2;

for (i = position; i < array.length; i++) {
  array[i] = array[i + 1];
}
array.length = array.length -1

// built in function

array.splice(position, 1);
console.log(array);
