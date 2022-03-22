class EmployeeModel {
  constructor(name, designation, id) {
    this.name = name;
    this.designation = designation;
    this.id = id;
  }

  getDesignation() {
    return this.designation;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

class EmployeeView {
  constructor() {
    this.controller = null;
  }

  registerWith(controller) {
    this.controller = controller;
    this.controller.addView(this);
  }

  printEmployeeInfo(name, designation, id) {
    console.log(`Employee info:\nName is: ${name}\nID is: ${id}\nDesignation is: ${designation}`);
  }

  hire(name, designation) {
    this.controller.hire(name, designation);
  }

  editName(id, name) {
    this.controller.setEmployeeName(id, name);
  }
}

class EmployeeController {
  constructor() {
    this.model = null;
    this.view = null;
    this.empList = [];
  }

  addView(view) {
    this.view = view;
  }

  addModel(model) {
    this.model = model;
  }

  setEmployeeName(id, name) {
    if (this.empList[id]) {
      this.empList[id].name = name;
      this.updateView();
    } else {
      console.log("Incorrect id");
    }
  }

  updateView() {
    console.log("List of employees:");
    for (let i in this.empList) {
      this.view.printEmployeeInfo(this.empList[i].getName(), this.empList[i].getDesignation(), this.empList[i].getID())
    }
    console.log("\n");
  }

  hire(name, designation) {
    this.empList.push(new EmployeeModel(name, designation, this.empList.length));
    this.updateView();
  }
}

let view = new EmployeeView();
let controller = new EmployeeController();
view.registerWith(controller);
view.hire("john", "Team Red")
view.editName(0, "Takumi");
