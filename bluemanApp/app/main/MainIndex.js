import { BaseIndex } from "../base/BaseIndex.js";

export class MainIndex extends BaseIndex {
  constructor(head, body, footer) {
    super(head, body, footer);
  }

 
  appBarHtml =
    "<div class='toolbar'>" +
    "<button class='open-drawer' onclick='openDrawer()'>☰</button>" +
    "<span>Blueman</span>" +
    "<p class='menuOption' onclick='openDrawer()'>&vellip;</p>" +
    "</div>";

  appBar() {
    return this.appBarHtml;
  }
}
