const booleanString = (b: boolean): string => {
    if (b) {
        return "true"
    } else {
        return "false"
    }
}

const bool1: boolean = true;

console.log(booleanString(bool1));

const bool2: boolean = false;

console.log(booleanString(bool2));