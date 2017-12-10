(function () {
  'use strict';

  // nombre del atributo. Debe cambiarse si se usó un nombre distinto
  const NOMBRE_ATRIBUTO = 'Envolver para regalo';

  // elemento que indica la existencia del atributo "Envolver para regalo"
  var marca = document.querySelector(`input[value="${NOMBRE_ATRIBUTO}"]`);

  // solo continuamos si existe el elemento
  if(marca) {
    // obtenemos el valor (debería ser "Yes" o "No")
    var valor = marca.parentNode.querySelector('textarea').value;

    // continuamos si el valor es "Yes" (nota: por si lo llegamos a traducir
    // a futuro, consideraremos también "Si")
    if(valor === 'Yes' || valor === 'Si') {
      // elemento delante del cual se insertará la alerta
      var antesDe = document.querySelector('#order-line-items')

      // elemento <div> que contendrá la alerta
      var alerta = document.createElement('div');

      // texto de la alerta
      var textoAlerta = document.createTextNode('Debe envolverse para Regalo')
      alerta.append(textoAlerta);

      // personalizamos el estilo de la alerta
      alerta.style.backgroundColor = 'crimson';
      alerta.style.color = 'white';
      alerta.style.padding = '10px'
      alerta.style.marginTop = '10px';

      // insertamos la alerta
      antesDe.before(alerta);
    }
  }
}());
