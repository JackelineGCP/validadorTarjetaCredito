Readme Libreria
# Libreria para validación de tarjeta de crédito
* **Descripción**  
* **Instrucciones de instalación**  
* **Uso y documentación**  
*  **Plan de trabajo en quipo:**   _Proyecto colaborativo_

## Descripción
Esta librería valida el número de tarjeta de crédito (usando algoritmo de Luhn). Necesita los datos de la tarjeta como: fecha de vencimiento, codigo de verificación (cvv) y nombre completo que aparece en la tarjeta.

##  Instrucciones de instalación
1. Descargar el archivo `index.js` de la carpeta `lib`.
2. Agregar archivo en un documento `html` como un `script`
 
```js
 <script src="lib/index.js"></script>
 ```

3. Utilizar la función `validCard()` e incluir el número de la tarjeta como parámetro.
```js
let numberKey = document.getElementId('cn');
validCard(numberKey);
 ```
 
 ##### HTML
 
Debe recibir una referencia a un elemento del DOM que contenga
`<input>` con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

## Ejemplo

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
* Delegación de tareas usando ` issues`
  * Asignación de tareas
  * Estructura de carpetas y dependencias.
  * Pasos para instalar gulp-babel 

 _Autoras: Kamaly Zapana y Gessenia CP_
