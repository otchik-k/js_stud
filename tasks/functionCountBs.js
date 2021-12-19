const str = 'Bubaleh Boba';
const lett = 'l';

function countBs (anyString, letter) {
  let count = 0;
  for (let i = 0; i < anyString.length; i++){
    if (anyString[i] === letter){
      count++;
    }
  }
  console.log(count);
}

countBs(str, lett);
