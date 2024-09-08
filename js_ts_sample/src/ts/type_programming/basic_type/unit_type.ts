
declare const UnitType: unique symbol;

class Unit {
    [UnitType]: void | undefined;
    static readonly value: Unit = new Unit();
    private constructor() {};
}

const greet = (): Unit => {
    console.log('Hello');
    return Unit.value;
}

console.log(greet());