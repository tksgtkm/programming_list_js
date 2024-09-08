const fs = require("fs");


const raise = (message: string): never => {
    console.log(`Error "${message}" raised at ${new Date()}`);
    throw new Error(message);
}

const readCOnfig = (configFile: string): string => {
    if (!fs.existsSync(configFile))
        raise(`Configration file ${configFile} missing`);

    return fs.readFileSync(configFile, "utf-8");
}

console.log(readCOnfig('test.ini'))