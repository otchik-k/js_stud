let x = 1;

function isEven (a){
  console.log(a);
  if ( a == 0 ){
    //return true;
    console.log('Четное');
  }
  else if ( a == 1){
    //return false;
    console.log('Не четное');
  }
  else {
    isEven (a - 2);
  }
};

isEven (x);
