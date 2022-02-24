function reverseArray (array) {
  const newArray = array.reverse();
  return newArray;
}

function reverseArrayInPlace (array) {
  let count = array.length - 1;
  let newArray = [];
  let i = 0;
  while(count >= 0) {
    newArray[i] = array[count];
    count--;
    i++;
  }
  return newArray;
}
