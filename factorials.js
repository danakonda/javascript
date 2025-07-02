const num=10;
let factorialCalculator=number=>{
  
  if (number < 0) return undefined; 
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}
const factorial=factorialCalculator(num);
const resultMsg=`Factorial of ${num} is ${factorial}`;
console.log(resultMsg);