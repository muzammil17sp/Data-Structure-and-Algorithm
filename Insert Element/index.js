const array = [10, 20, 30, 40, 50, 60];
const position = 2;
const newElement = 24;

// using custom logic

for (let i = array.length - 1; i > 0; i--) {
  if (i >= position) {
    array[i + 1] = array[i];
    if (i === position) {
      array[i] = newElement;
    }
  }
}

// build in  functions

array.splice(3, 0, 200);
console.log(array);
