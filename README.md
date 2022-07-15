
# El Mate ![Logo](https://firebasestorage.googleapis.com/v0/b/elmate31865.appspot.com/o/images%2Fmate.png?alt=media&token=6ca77a91-9a07-49fe-b466-8ae74ce27af4)


El Mate es una SPA (single page application) creada para la venta de productos relacionados a la cultura del mate.


## Demo

![Desktop](https://user-images.githubusercontent.com/30700979/179298161-ff9bb942-b9d0-4cb4-8efc-5221f68b318c.gif)

## Author

- [@moneyripper](https://github.com/moneyripper)


## Navegación

Estructura y navegación del proyecto.

- **Sección Catalogo de Productos**
  - **Ruta**: "/"
  - **Componente**: ItemListContainer
    - **Componentes**: ItemList
      - **Componentes**: Item

- **Sección Categoría Producto**
  - **Ruta**: "/category/:categoryId"
  - **Componente Contenedor**: ItemListContainer
    - **Componentes**: ItemList
      - **Componentes**: Item

- **Sección Detalle de Producto**
  - **Ruta**: "/detail/:productId"
  - **Componente Contenedor**: ItemDetailContainer
    - **Componentes**: ItemDetail
      - **Componentes**: ItemCount

- **Sección Carrito**
  - **Ruta**: "/cart/"
  - **Componente**: CartView
    - **Componentes**: CartItem

- **Sección Checkout**
  - **Ruta**: "/checkout/"
  - **Componente**: Checkout
    
## Dependencias utilizadas

- [Create-React-App](https://create-react-app.dev)
- [react-router-dom@6](https://reactrouter.com/docs/en/v6/getting-started/installation)
- [Firebase](https://firebase.com)
- [SweetAlert2](https://sweetalert2.github.io)

## Instalación

#### Clonar proyecto

Posicionate en la carpeta donde desees clonar el repositorio. 
Abre la terminal en la carpeta. 
Escribe git clone, y luego pega la URL.

```bash
  $ git clone https://github.com/moneyripper/El-Mate-Reactjs-Michael-Wilburn.git

```
Presiona Enter para crear tu clon local.

#### Instalar dependencias
Luego necesitaras instalar las dependecias para que el proyecto funcione.
Tipea en la terminal.

```bash
  $ npm install
```
#### Ejectuar el proyecto
Una vez termianda la instalación.
Tipear el comando:

```bash
  $ npm start
```
    
En esta instancia el proyecto debería esta corriedno en tu navegador local.











