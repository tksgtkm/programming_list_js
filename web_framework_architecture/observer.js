class Subject {
  constructor() {
    this.observerList = [];
    this.newArticlePosted = false;
    this.articleName = null;
  }

  subscribe(observer) {
    this.observerList.push(observer);
  }

  unsubscribe(observer) {
    this.observerList = this.observerList.filter(obs => obs !== observer);
  }

  notify() {
    if (this.newArticlePosted) {
      this.observerList.forEach(subscribe => subscribe.update());
    } else {
      return;
    }
  }

  getUpdate() {
    return this.articleName;
  }

  postNewArticle(articleName) {
    // notifyを呼び出す前に矛盾がないように整合性を保つ
    // templateパターンを使う
    this.articleName = articleName;
    this.newArticlePosted = true;
    this.notify();
  }
}

class Observer {
  constructor() {
    this.subject = new Subject();
  }

  update() {
    if (subject.getUpdate() == null) {
      console.log("No new article");
    } else {
      console.log(`The new article ${subject.getUpdate()} is posted`);
    }
  }

  setSubject(subject) {
    // ここにオーバーヘッドのリスクがある
    this.subject = subject;
  }
}

let subject = new Subject();
let observer = new Observer();
observer.setSubject(subject);
subject.subscribe(observer);
observer.update();
subject.postNewArticle("Dark matter");
