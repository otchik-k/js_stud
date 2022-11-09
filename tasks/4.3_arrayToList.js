
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    // присвоение значений в list происходит с конца
    list = {value: array[i], rest: list}; /* здесь на первом шаге к rest
      присваивается начальное значение list=null */
  }
  return list;
  console.log(list);
};

let newArray = [1, 2, 3];

arrayToList(newArray);

let list2 = {
  value: 1, rest: {value: 2, rest: {value: 3, rest: null}}
};

function listToArray (list) {
  let array1 = [];
  let i = 0;
  let flag = 0;
  while (rest != null){
    array[i] = list.value;
    flag = list.rest;

  }
};

flag = list.rest;
list.value
list.rest.value
list.rest.rest.value
list.rest
list.rest.rest
list.rest.rest.rest
