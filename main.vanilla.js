let getAbsolute = (num) => {
  return Math.abs(num);
}

let isPrime = (num) => {

  let integer = getAbsolute(num);

  if(integer === 1) return true;

  let start = 2;

  while (start <= Math.sqrt(integer)) {
    if (integer % start++ < 1) return false;
  }
  return integer > 1;
}

let getLCD = (num1, num2) => {
  while (num2 !=0) {
    let tmp = num1 % num2;
    num1 = num2;
    num2 = tmp;
  }
    return num1;
}

let smallestCommons = (arr) => {
  
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let commonMultiple = 1;

    for(let i = max; i >= min; i--){
      
      //specific case 1: if both a and b are primes => SCM(a,b) = a * b
      if(isPrime(commonMultiple) && isPrime(i)) {
        commonMultiple *= i;
  
      //specific case 2: if a % b === 0 => SCM(a,b) = a
      } else if(commonMultiple % i === 0) {
        continue;

      //common case: SCM(a,b) = a * b / LCD(a,b)
      } else {
        commonMultiple *= i / getLCD(commonMultiple, i);
      }
    }
  
    return commonMultiple;
  }
    
  console.log(smallestCommons([23, 18]));

  exports.main = {
    smallestCommons: smallestCommons
  };