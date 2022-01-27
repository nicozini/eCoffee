//Declaramos la url que vamos a usar para el GET
const URLGET = "https://jsonplaceholder.typicode.com/posts";

//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');

//Escuchamos el evento click del botón agregado
$("#btn1").click(() => {
  $.get(URLGET, function (respuesta, estado) {

    if (estado === "success") {
      let misDatos = respuesta;

      for (const dato of misDatos) {
        $("body").prepend(`<div>
                           <h3>${dato.title}</h3>   
                           <p> ${dato.body}</p>
                           </div>`);
      }
    }

  });


});

// "font-size": "40px",
// "borderLeft": "5px solid #ccc" });
