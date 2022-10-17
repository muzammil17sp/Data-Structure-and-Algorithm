const array = [10, 20, 30, 40, 50, 60, 60, 40];
const search = 40;
const indexes = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] === search) {
    indexes.push(i);
  }
}

// function 

const index = array.indexOf(search)
console.log(index)