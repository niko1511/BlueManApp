export class BaseIndex {
  constructor(
    head = "Default Head",
    body = "Default Body",
    footer = "Default Footer"
  ) {
    this.head = head;
    this.body = body;
    this.footer = footer;
  }
  getHead() {
    return this.head;
  }
  setTitleHead(name) {
    this.head = name;
  }
  getTitleHead() {
    return this.head;
  }
  getBody() {
    return this.body;
  }
  getFooter() {
    return this.footer;
  }
}
