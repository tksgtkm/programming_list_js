type Item = {
    name: string,
    price: number
};

const getTotal = (items: Item[]): number => {
    let total: number = 0;

    for (let item of items) {
        total += item.price;
    }

    return total;
}

let total: number = getTotal(
    [
        {name: 'Cherry gum', price: 0.10},
        {name: 'Mint gum', price: 0.10},
        {name: 'Strawberry gum', price: 0.10}
    ]
);

console.log(total)
console.log(total == 0.30)