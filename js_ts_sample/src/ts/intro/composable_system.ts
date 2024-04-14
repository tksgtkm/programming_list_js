const first = <T>(range: T[], p: (elem: T) => boolean): T | undefined => {
    for (let elem of range) {
        if (p (elem)) return elem;
    }
}

const findFirstNegativeNumber = (numbers: number[]): number | undefined => {
    return first(numbers, n => n < 0);
}

const findFirstOneCharacterString = (strings: string[]): string | undefined => {
    return first(strings, str => str.length == 1);
}

const numbers = [1, 2, 3, -6, 4, -12, 9];
console.log(findFirstNegativeNumber(numbers));

const strings = ["aaa", "g", "bb", "d"]
console.log(findFirstOneCharacterString(strings))