# PuppyStore

## Descripción

Este repositorio contiene el proyecto desarrollado durante el curso de `React JS` de `Coderhouse`.

La aplicación consiste en un ecommerce en el cual se puede filtrar los productos de acuerdo a categorías, y acceder a ver el detalle de cada producto. Los mismos pueden ser agregados al carrito para luego completar un formulario simulando un proceso de compra completo.

Tanto el listado de categorías, como los productos y las órdenes generadas se almacenan en `Firebase`.

## Tecnologías utilizadas

- [React JS](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Firebase](https://firebase.google.com/)
- [Vercel](https://vercel.com/) (para deploy)

## Proyecto deployado

https://puppy-store-lamas.vercel.app/

## Ejecutar el proyecto

Para ejecutar el proyecto, el mismo puede descargarse como .zip o clonarlo con:

```
git clone https://github.com/lautarolamas/puppy-store-Lamas.git
cd PUPPY-STORE
```

Instalar las dependencias:

```
npm install
```

Luego es necesario crear un proyecto en Firebase y crear dos colecciones en Firestore (una con el nombre `products` donde se ingresarán los productos, y otra con el nombre `categorias` para almacenar las categorías que corresponden a los productos creados y se mostrarán en la NavBar). Los items de ambas colecciones deben crearse manualmente desde Firebase.

##### Ejemplo de product:

```
product = {
  category: "comidas"
  descripcion: "descripción"
  picture: "url de la imagen"
  price: 450
  stock: 100
  title: "Nombre del producto"
}
```

##### Ejemplo de category:

```
product = {
  label: "Comidas"
  slug: "comidas"
}
```

La colección `orders` se creará automáticamente al generar la primer orden de compra.

Una vez disponible la aplicación en Firebase, habiendo cargado productos y categorías, renombrar el archivo `.env.example` ubicado en la raíz del proyecto a `.env` y completar las variables de configuración provistas por Firebase:

```
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

Luego iniciar el servidor con:

```
npm start
```

El proyecto estará corriendo en `http://localhost:3000`

## Consideraciones adicionales

### CHAKRA UI

Se escogió CHAKRA UI como librería de componentes para agilizar el proceso de desarrollo y estilado de la aplicación, aprovechando la posibilidad de extender los componentes mediante el uso de themes.

### Firebase

En Firebase se almacenaron, además del listado de productos y las órdenes generadas, las categorías correspondientes a los productos.

### LocalStorage

Se utilizó LocalStorage para persistir el carrito de los usuarios en sus dispositivos en el caso de que no finalicen el flujo de compra para mejorar la experiencia de uso.

### Control de Stock

Se implementó control de stock en el flujo de compra para evitar que un usuario pueda adquirir una cantidad mayor de un producto de la que se encuentre disponible:

- Al enviar la orden a Firebase, comparando la cantidad de items a adquirir con la disponible en la base de datos.

Luego de ingresar una order correctamente, el stock del producto se actualiza automáticamente en la base de datos.

### Dark/Light Modes

La aplicación se inicia por defecto en modo claro pero es posible alternar entre ambos modos desde el botón ubicado en el NavBar.

### Footer

Se agregron estos links ( SOBRE NOSOTROS/CONTACTO) en el footer los cuales a futuro, van a contener su propia sección.
