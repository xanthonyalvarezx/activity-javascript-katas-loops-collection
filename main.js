/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

  console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter = 1
  while(counter <= 20){
  console.log(counter)
  counter +=1
}
/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

  console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable


  /* Write your KATA 02 code in place of THIS comment. */
 counter2 = 2
while(counter2 <= 20){
console.log(counter2)
counter2 = counter2 + 2
}

/** KATA 03 ⮕2
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

  console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  counter3 = 1
  while(counter3 <= 20){
  console.log(counter3)
  counter3 = counter3 + 2
  }
  /* Write your KATA 03 code in place of THIS comment. */


/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

  console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  /* Write your KATA 04 code in place of THIS comment. */
  let counter4 = 0
  while (counter4 <= 100){
    console.log(counter4)
    counter4 +=5
  }
  

/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

  console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
  let counter5 = 1
  while (counter5 <= 100){
    const isSquare = Number.isInteger(Math.sqrt(counter5))
    if (isSquare){
    console.log(counter5)
    }
    counter5 += (1)
  }

  /* Write your KATA 05 code in place of THIS comment. */


/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

  console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter6 = 20
while (counter6 > 0 ){
console.log(counter6)
counter6 -= 1
}


  /* Write your KATA 06 code in place of THIS comment. */


/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

  console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter7 = 20
while (counter7 > 0){
console.log(counter7)
counter7 -= 2
}
  /* Write your KATA 07 code in place of THIS comment. */


/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

  console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

  let counter8 = 20
  while(counter8 > 19){
    counter8 -= 1
  }
  while (counter8 > 0 ){
  console.log(counter8)
  counter8 -= 2
  }
  /* Write your KATA 08 code in place of THIS comment. */


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

  console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter9 = 100
while (counter9 > 0){
  console.log(counter9)
  counter9 -=5
}


  /* Write your KATA 09 code in place of THIS comment. */


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

  console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


  /* Write your KATA 10 code in place of THIS comment. */
  let counter10 = 100
  while (counter10 >= 0){
    const isSquare = Number.isInteger(Math.sqrt(counter10))
    if (isSquare){
    console.log(counter10)
    }
    counter10 -= (1)
  }



