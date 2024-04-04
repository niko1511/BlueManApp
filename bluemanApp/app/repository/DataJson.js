export class DataJson {
  constructor() {}
  title() {
    return "Blueman: Tu Puerta al Asombro Tecnológico";
  }

  json() {
    return {
      container: {
        heading: "Explora el Mundo de Blueman",
        description:
          "¡Bienvenido a Blueman, la aplicación que te llevará a un viaje tecnológico fascinante! Diseñada con pasión y codificada en Kotlin, Blueman es el escaparate de innovación y seguridad.",
        permisos: [
          {
            name: "INTERNET",
            icon: "🌐",
            description:
              "Este permiso permite a la aplicación acceder a Internet. Se necesita para que la aplicación pueda conectarse a Internet y enviar/recibir datos. Tu información personal no se comparte a través de esta conexión a menos que la aplicación te la solicite explícitamente y le des tu consentimiento.",
          },
          {
            name: "ACCESS_NETWORK_STATE",
            icon: "🌐",
            description:
              "Este permiso permite a la aplicación acceder a la información sobre las conexiones de red. Esto significa que la aplicación puede ver si estás conectado a una red (ya sea Wi-Fi o datos móviles) y si hay conexión a Internet. Esto se utiliza frecuentemente para verificar si la aplicación puede conectarse a Internet y si puede sincronizarse con los servidores. No se utiliza para acceder a tus datos personales o privados.",
          },
          {
            name: "VIBRATE",
            icon: "⚡",
            description:
              "Este permiso permite a la aplicación controlar la vibración del dispositivo. Se utiliza para hacer que tu dispositivo vibre cuando recibes notificaciones o durante ciertos eventos dentro de la aplicación. No se utiliza para acceder a tus datos personales o privados.",
          },
        ],
        features: [
          {
            icon: "icono_habilidades.png",
            title: "Descubre Habilidades Únicas",
            description:
              "Blueman es un reflejo de las destrezas del desarrollador. Desde la interfaz pulida hasta la programación elegante, ¡cada detalle te sorprenderá!",
          },
          {
            icon: "icono_juego.png",
            title: "Juego de la Vida",
            description:
              'Sumérgete en el fascinante "Juego de la Vida". Explora la complejidad emergente mientras disfrutas de un entretenimiento único.',
          },
          {
            icon: "icono_seguridad.png",
            title: "Seguridad Destacada",
            description:
              "Blueman se enorgullece de su seguridad. Tu privacidad es primordial, y por eso nos esforzamos por garantizar la protección de tus datos.",
          },
        ],
        footer: {
          heading: "Descarga Blueman y Comienza el Asombro",
          description:
            "Descarga Blueman hoy mismo y sumérgete en un mundo de innovación, seguridad y entretenimiento cautivador. ¡Tu viaje al asombro tecnológico está a solo un clic de distancia!",
          link: {
            url: "https://play.google.com/store/apps/details?id=com.nikosoft.nksf.blueman",
            text: "Descargar Ahora",
          },
        },
      },
    };
  }
}
