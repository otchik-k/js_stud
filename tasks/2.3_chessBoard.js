let size = 10; // размер поля
let str = ''; // пустая строка

for ( let i = 0; i < size; i++){ //количество циклов равно значению переменной size
  /* определяем четную строку и присваиваем
  переменной str значение "# " size/2 раз */
  if ( i % 2 !== 0){
    for ( let x = 0; x < size/2; x++){
      str = str + '# ';
      //console.log(str);
    }
  }
  /* Если строка не четная, то переменной str присваеваем
  значение " #" size/2 раз */
  else{
    for ( let y = 0; y < size/2; y++){
      str = str + ' #';
      //console.log(str);
    }
  }
  // переход на новую строку внутри значения переменной srt
  str = str + '\n';
  //console.log(str);
}

console.log(str);
