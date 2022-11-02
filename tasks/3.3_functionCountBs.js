const str = 'Bubaleh Boba';
const lett = 'l';

//функция принимает строку и считает количество символов равное В
function countBs (anyString) {
  let count = 0;
  for (let i = 0; i < anyString.length; i++){
    if (anyString[i] === "B"){
      count++;
    }
  }
  console.log("Букв В в данной строке = " + count);
}

/* функция принимает две строки и смотри сколько раз вторая строка
встречается внутри первой */ 
function countChar (anyString, letter) {
  let count = 0;
  for (let i = 0; i < anyString.length; i++){
    if (anyString[i] === letter){
      count++;
    }
  }
  console.log("Букв " + lett + " в данной строке = " + count);
}

countBs(str);
countChar(str, lett);
