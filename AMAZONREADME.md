## Overview

A [kata](<https://en.wikipedia.org/wiki/Kata_(programming)>) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops, conditionals, and expressions through a series of katas.

To start, go [here](https://gitlab.com/kenzie-academy/se/fe/getting-started-with-javascript/s_js-katas-1) then fork and clone the repo.
Fill in the missing code inside the katas1.js file for each function. Use a `for` or `while` loop inside each function. Use console.log() to display your result in the console. Each correctly completed kata is worth 1 point.

### Example

```js
function oneThroughFive() {
  // Your code goes below
}
```

To test your functions, you will need to call them. Following the above example,
we would write `oneThroughFive()` to call the function oneThroughFive.
So for the example above, the final function and subsequent function call would look
like this:

```js
function oneThroughFive() {
  for (let counter = 1; counter <= 5; counter++) {
    console.log(counter);
  }
}

oneThroughFive();
```

## Katas

Write functions that output the following:
1. the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
2. the even numbers from 1 to 20. (2, 4, 6,...18,20)
3. the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
4. the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
5. all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
6. the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
7. the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
8. the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
9. the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
10.the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
