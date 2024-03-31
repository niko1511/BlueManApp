import { BaseIndex } from "../base/BaseIndex.js";

export class MainIndex extends BaseIndex {
  constructor(head, body, footer) {
    super(head, body, footer);
  }

  init() {
    const titulo = document.querySelector("h1");
    titulo.textContent = this.getHead();
  }
}
