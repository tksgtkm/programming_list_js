class SafeDivisor {

    private divisor: number = 1;

    setDivisor(value: number) {
        if (value == 0) throw new Error("Value should not be 0");

        this.divisor = value;
    }

    divide(x: number): number {
        return x / this.divisor
    }
}

const exploit = (): number => {
    let sd = new SafeDivisor();

    return sd.divide(42);
}

console.log(exploit())