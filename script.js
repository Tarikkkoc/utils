function flatten(array) {
  var newArr = [];
  if (Array.isArray(array)) {
    array.map((a) => {
      if (Array.isArray(a)) {
        newArr = newArr.concat(flatten(a));
        // const values = a.values();
        // // console.log(values.next().value);
        // newArr.push(values.next().value);
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
