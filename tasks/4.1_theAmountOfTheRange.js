/* Функция, которая принимает начальное и конечное значение и возвращает массив,
содержащий все числа между ними. */
function range (start, end, step = 1) {
  let numbers = [];
  let count = 0;
  // Проверка, являются ли значения числовыми?
    if (typeof start === 'number' && typeof end === 'number') {
    if (start < end){
      while (start <= end){
        numbers[count] = start;
        count++;
        start = start + step;
      }
      return numbers;
    }
      else {
        while (start >= end) {
          numbers[count] = start;
          count++;
          start = start - step;
        }
        return numbers;
      }
    }
  else {
    // Сообщение, если переменные не числовые.
    console.log ('Переданные знаяения не являются числами');
  }
}

// Функция выводит значения элементов массива.
function showArray (array) {
  for (let element of array) {
    console.log(element);
  }
}

// Функция возвращает сумму всех элементов массива.
// // The function returns the sum of all the elements of the array.
function sum (array) {
  let count = 0;
  let sumArray = 0;
  if (typeof array === 'object'){
    for (element of array){
      sumArray = sumArray + element;
    }
    return sumArray;
  }
  else {
    console.log('Переданное значение не является массивом')
  }
}

console.log(sum (range (1, 10)));
