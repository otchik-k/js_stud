
for (let i = 1; i < 101; i++){
  // если остаток от деления на 3 и на 5 равен 0, то пишется FizzBuzz
  if ( i % 3 === 0 && i % 5 === 0){
    console.log('FizzBizz');
  }
  else if ( i % 3 === 0){
    console.log('Fizz');
  }
  else if ( i % 5 === 0){
    console.log('Bizz');
  }
  else{
    console.log(i);
  }
}
