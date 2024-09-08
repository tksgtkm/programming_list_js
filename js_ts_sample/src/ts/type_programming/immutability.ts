const safeDivide = (): number => {
    const x: number = 42;

    if (x == 0) {
        throw Error("x should not be 0");
    }

    return 42 / x;
}

console.log(safeDivide())