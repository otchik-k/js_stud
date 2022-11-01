let size = 10; // размер поля
let str = '';

for ( let i = 0; i < size; i++){
  if ( i % 2 !== 0){
    for ( let x = 0; x < size/2; x++){
      str = str + '# ';
      //console.log(str);
    }
  }
  else{
    for ( let y = 0; y < size/2; y++){
      str = str + ' #';
      //console.log(str);
    }
  }
  str = str + '\n';
  //console.log(str);
}

console.log(str);
