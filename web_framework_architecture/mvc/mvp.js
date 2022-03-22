class Model {
  constructor(text) {
    this.text = text;
  }

  setText(text) {
    this.text = text;
  }

  gettext() {
    return this.text;
  }
}

class View {
  constructor(presenter) {
    this.presenter = presenter;
  }

  registerWith(presenter) {
    this.presenter = presenter;
  }

  displayError() {
    console.log("Text is not in upper case");
  }

  displayMessage(text) {
    console.log("The text is: " + text);
  }

  changeText(text) {
    this.presenter.changeText(text);
  }
}

class Presenter {
  constructor(view) {
    this.view = view;
    this.model = model;
  }

  setModel(model) {
    this.model = model;
  }

  getView() {
    return this.view;
  }

  changeText(text) {
    if (text !== text.toUpperCase()) {
      this.view.displayError();
    } else {
      this.model.setText(text);
      this.view.displayMessage(this.model.gettext());
    }
  }
}

let model = new Model("Hello World");
let view = new View();
let presenter = new Presenter(view);
presenter.setModel(model);
view.registerWith(presenter);
presenter.getView().changeText("unagi");
presenter.getView().changeText("UNAGI");
