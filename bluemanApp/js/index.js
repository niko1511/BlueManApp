import { MainIndex } from "../app/main/MainIndex.js";
import { DataJson } from "../app/repository/DataJson.js";
import { Form } from "../app/main/Form.js";

// Inicializar las clases
const index = new MainIndex();
const form = new Form();
const data = new DataJson();
index.setTitleHead(data.title());

// Compilar la plantilla
var source = document.getElementById("template").innerHTML;
var template = Handlebars.compile(source);

// configuración de la plantilla
var titleH1 = "<h1>" + index.getTitleHead() + "</h1>";
var routeHrefCss = "./bluemanApp/css/style.css";

// Renderizar la plantilla con los datos
var html = template(data.json());
var linkElement = document.querySelector("link");
linkElement.href = routeHrefCss;
linkElement.type = "text/css";
document.getElementById("title").innerHTML = index.getTitleHead();
document.getElementById("appBar").innerHTML = index.appBar();
document.getElementById("header").innerHTML = titleH1;
document.getElementById("container").innerHTML = html;

// Pestaña lateral deslizable 
document.getElementById("drawer").innerHTML = index.navigationView();



// Creamos el formulario de contacto
// document.getElementById("form").innerHTML =form.myAccount() + form.createNewAccount();

  // Creamos el formulario de contacto
  // document.getElementById("form-contact").innerHTML =form.createNewFormContact();
  // document.getElementById("test").innerHTML =form.createNewFormContact();
 document.querySelector("footer").innerHTML =`  <p>&copy; 2023 Blueman</p>
  <p>Contacto: info@bluemanapp.com</p>
  <p><a href="https://niko1511.github.io/html/politica_de_privacidad.html">Política de Privacidad</a> | <a
          href="https://niko1511.github.io/html/politica_de_privacidad_eliminacion_de_cuenta.html">Eliminación de
          cuenta</a>| <a href="https://niko1511.github.io/html/termino_de_uso.html">Términos de Uso</a></p>`



          // Obtener el botón
var scrollBtn = document.getElementById("scrollBtn");

// Cuando el usuario hace scroll, mostrar o ocultar el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        scrollBtn.style.opacity = "1";
    } else {
        // scrollBtn.style.display = "none";
        scrollBtn.style.opacity = "0";
    }
}

// Cuando el usuario hace clic en el botón, desplazar suavemente hasta la parte superior de la página
scrollBtn.addEventListener("click", function() {
    scrollToTop(500); // Tiempo en milisegundos para la animación
});

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}

