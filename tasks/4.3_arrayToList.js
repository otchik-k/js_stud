function arrayToList (array) {
  let i = array.length - 1;

  let list = {
    value: array[0],
    rest: null
  };

  for(x = 1; x<i; x++) {
    list.rest = {value: array[x], rest: null};
  }
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

let array = [1, 2, 3];
console.log(array.length);
