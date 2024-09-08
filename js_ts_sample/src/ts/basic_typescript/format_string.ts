const printName = (firstName: string, formatter: (name: string) => string): string => {
    return formatter(firstName);
}

const formatName = (name:string): string => {
    return `${name} san`
}

console.log(printName('Takumi', formatName))