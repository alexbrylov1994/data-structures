const fib = (pos: number): number => {
    if (pos < 2) {
        return 1;
    }

    return fib(pos - 1) + fib(pos - 2);
}