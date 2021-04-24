// console logs 1 to n, multiples of three print fizz
// multiples for 5 print buzz
// multiples of 3 and 5 fizzbuzz
const fizzbuzz = (times: number): void => {
    for (let i = 1; i <= times; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(5);