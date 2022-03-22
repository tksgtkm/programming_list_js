class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourOnCup();
    this.addCondiments();
  }

  boilWater() {
    console.log("Put water on fire until the water starts boiling!");
  }

  pourOnCup() {
    console.log("Put beverage on Cup!");
  }

  brew() {
    throw new Error("This method must be overwritten!");
  }

  addCondiments() {
    throw new Error("This method must be overwritten!");
  }
}

class Coffee extends CaffeineBeverage {
  brew() {
    console.log("Dripping Coffee through filter");
  }

  addCondimments() {
    console.log("Add Sugar and Milk");
  }
}

class Tea extends CaffeineBeverage {
  brew() {
    console.log("Steeping the tea!");
  }

  addCondiments() {
    console.log("Adding lemon!");
  }
}

let oCoffee = new Coffee();
oCoffee.prepareRecipe();
console.log("*********************************************************");
let oTea = new Tea();
oTea.prepareRecipe();
