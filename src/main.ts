export class Absolute {

    public getAbsolute(num: number): number {
        return Math.abs(num);
    }
}

export class Prime {

    public isPrime(num: number): boolean {

        let integer = new Absolute().getAbsolute(num);

        if(integer === 1) return true;

        let start: number = 2;
        
        while (start <= Math.sqrt(integer)) {
          if (integer % start++ < 1) return false;
        }
        return integer > 1;
      }
}

export class LCD {

    public calculateLCD(num1: number, num2: number): number {

        let integer1: number = new Absolute().getAbsolute(num1);
        let integer2: number = new Absolute().getAbsolute(num2);

        while (integer2 != 0) {
          let tmp: number = integer1 % integer2;
          integer1 = integer2;
          integer2 = tmp;
        }
          return integer1;
      }
}
  
export class SmallestCommons {

    public calculate(arr: number[]): number {

        let min: number             = Math.min(...arr);
        let max: number             = Math.max(...arr);
        let commonMultiple: number  = 1;
    
        for(let i: number = max; i >= min; i--) {
          
            let prime = new Prime();
            
            //specific case 1: if both a and b are primes => SCM(a,b) = a * b
            if(prime.isPrime(commonMultiple) && prime.isPrime(i)) {
                commonMultiple *= i;
      
            //specific case 2: if a % b === 0 => SCM(a,b) = a
            } else if(commonMultiple % i === 0) {
                continue;
    
            //common case: SCM(a,b) = a * b / LCD(a,b)
            } else {
                commonMultiple *= i / new LCD().calculateLCD(commonMultiple, i);
            }
        }
      
        return commonMultiple;
    }
}  

console.log(new SmallestCommons().calculate([23, 18]));