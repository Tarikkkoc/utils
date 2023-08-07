function flatten(array) {
  var newArr = [];
  if (Array.isArray(array)) {
    array.map((a) => {
      if (Array.isArray(a)) {
        a.forEach((b) => {
          newArr.push(b);
        });
      } else {
        newArr.push(a);
      }
    });
  } else {
    return newArr;
  }
  return newArr;
}
const numbers = [1, [2, [3, 4, [7]]], 5];
console.log(flatten(numbers));

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
}

const words = ["pen", "car", "furniture", "bed"];
console.log(shuffle(words));
