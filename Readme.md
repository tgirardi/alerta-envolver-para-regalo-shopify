# Destacar -Envolver para Regalo- Shopify Admin

Esta es una extensión para el navegador **Chrome**

(no sirve para Firefox, IE, Safari, Edge, etc.)

## Introducción

En el video "Shopify Campo Envolver para Regalo" (https://www.youtube.com/watch?v=bfQ51SSSxMM) mostré como crear un campo para que el cliente pueda indicar si quiere que su orden se envualva para regalo o no.

En ese mismo video mostré que existe el riego de que los administradores de la tienda no noten que se ha solicitado esa opción, ya que es difícil de ver, por encontrarse muy abajo y muy a la derecha.

Entonces, prometí que crearía una extensión de Chrome que haga más visible la opción.

## Para que sirve:

Muestra una alerta en rojo, claramente visible, que ayuda al administrador a darse cuenta que el cliente indicó que quiere que su orden se envuelva para regalo.

(Lógicamente no se muestra la alerta si el cliente no solicitó esa opción)

Así se ve:

![Ejemplo](https://i.imgur.com/jwKAT9w.jpg)

## Como instalar:

1. Una vez que hayas descargado esta extensión, asegúrate de guardar su carpeta en una ubicación donde no vayas a borrarla (al borrarla dejará de funcionar)
2. Visita chrome://extensions
3. Activa el "modo de programador" (development mode)
4. Aprieta el botón "Cargar extensión sin empaquetar..." (Load unpacked extension...)
5. Selecciona la carpeta de esta extensión

**Para probar**: navega hacia tu administrador de Shopify y revisa un par de órdenes para ver si funciona bien. Debes abrir alguna orden para la cual se haya marcado la opción de "Envolver para regalo", de forma de ver la alerta visible.

Puede tomar un par de segundos para que la alerta aparezca después de que se ha terminado de cargar el detalle de la orden.

## IMPORTANTE:

* Esta extensión asume que el nombre del atributo / campo que estás usando es exactamente "Envolver para regalo". Si usaste un nombre distinto, tendrás que modificar la constante `NOMBRE_ATRIBUTO` que está al principio del archivo `envolver-para-regalo.js` que es parte de esta extensión.
* Lógicamente es útil sólo para quienes crearon el atributo "Envolver para regalo" en su Shopify
* Sólo funciona en Shopify
* Se activa dentro de la URL [Nombre de Tienda].myshopify.com/admin/orders/[ID Orden]. Si por alguna razón tu tienda usa una URL distinta, no funcionará
