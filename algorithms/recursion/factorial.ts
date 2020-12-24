const factoria = (num: number): number => {
    if (num === 1) return 1;
    return num * factoria(num - 1);
}
