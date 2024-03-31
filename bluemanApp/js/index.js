import { MainIndex } from "../app/main/MainIndex.js";
import { DataJson } from "../app/repository/DataJson.js";

// Inicializar las clases
const index = new MainIndex();
const data = new DataJson();
index.setTitleHead(data.title());
index.init();


// Compilar la plantilla
var source = document.getElementById("template").innerHTML;
var template = Handlebars.compile(source);

// Renderizar la plantilla con los datos

var html = template(data.json());
document.getElementById("container").innerHTML = html;
