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

    navigationViewHtml = ` <div class="modal-content">
<span class="close" onclick="closeDrawer()">&times;</span>
<p>Aquí va el contenido del drawer...</p>
<a href="#" onclick="sobreMi()">Opción 1</a>
<a href="#" onclick="closeDrawer()">Opción 2</a>
<a href="#" onclick="closeDrawer()">Opción 3</a>
</div>`

  appBar() {
    return this.appBarHtml;
  }
  navigationView(){
    return this.navigationViewHtml;
  }
}
