# Assessment: JavaScript Katas 1 #

### Overview ###

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops, conditionals, and expressions through a series of katas.

To start, go [here](https://gitlab.com/kenzie-academy/se/fe/getting-started-with-javascript/s_js-katas-1/blob/master/katas1.js) and download the katas1.js file. 
Fill in the missing code in each function, using a `for` or `while` loop.  Use numbers.push() in your loop to add each 
number to the empty 'numbers' array, which will be returned in the last line of the function.  Each correctly completed kata is worth 1 point.

### Example ###

```
function oneThroughFive() {
    const numbers = [];

    // Your code goes below

    return numbers;
}
```

Code added below the commented out line:

`for(let counter = 1; counter <= 5; counter++) {
    numbers.push(counter)
}`

### Katas

1.  Return the numbers from 1 to 20. (1, 2, 3,..., 19, 20)

2.  Return the even numbers from 1 to 20. (2, 4, 6,...18,20)
3.  Return the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
4.  Return the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
5.  Return the square numbers up to 100. (1, 4, 9, ..., 81, 100)
6.  Return the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
7.  Return the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
8.  Return the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
9.  Return the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
10.  Return the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)

Push your code into your GitLab repository and use the GitLab Pages feature to allow your site to be viewed directly. In Canvas, please submit your Project ID number, located directly under your project name (see below)
![](project_id.png)