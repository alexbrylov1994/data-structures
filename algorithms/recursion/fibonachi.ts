const fib = (pos: number): number => {
    if (pos <= 0) {
        return 0;
    }
    if (pos === 1) {
        return 1;
    }

    return fib(pos - 1) + fib(pos - 2);
}

console.log(fib(3));