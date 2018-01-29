Readme Libreria


# Libreria ValidCard

 * **Descripción**  
* **Instrucciones de instalación**  
* **Uso y documentación**  
 


ValidCard  es un libreria basada en el algoritmo de  [Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), te ayudará a saber si una tarjeta de crédito es válida o invalida. Puedes usar datos como: Fecha de vencimiento, codigo de verificación (cvv) y nombre completo que aparece en la tarjeta.

Documentación oficial: http://escuela.digital/edgrid

Colaboradores:

* **Kamaly Zapana Lorenzo** https://github.com/kamalyzl
* **Gessenia CP** https://github.com/JackelineGCP
##  Contenido
Este repositorio incluye los siguientes archivos:

* **public/js/index.js** - contiene la libreria en su versión ES5.
* **src/index.js** - contiene la libreria en su versión ES6.

##  Instrucciones de instalación
1. Descargar el archivo `index.js`.
2. Agregar archivo en un documento `html` como un `script`
 
```js
 <script src="lib/index.js"></script>
 ```

3. Utilizar la función `validCard()` e incluir el número de la tarjeta como parámetro, esta acción te devolverá un valor booleano.
```js
 validCard('4578565808288696');
 ```

### Descargar el proyecto
https://www.4shared.com/document/YBM4SFsmca/index.html

Luego debes copiar el archivo index.js a tu carpeta donde tienes los archivos js

 
 
 


## Ejemplo
 ##### HTML
 
Debe recibir una referencia a un elemento del DOM que contenga
`<input>` con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```
## Uso y documentación

##  Plan de trabajo en quipo
* Delegación de tareas, lo encontrarás en ` issues`
 

 
