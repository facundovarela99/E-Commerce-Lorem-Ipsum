
# E-Commerce App - Matienzo

Aplicación web desarrollada en React utilizando Vite como bundler, orientada a la venta de productos relacionados al mate y accesorios. El proyecto implementa buenas prácticas de desarrollo, gestión de estado, estilos modernos y conexión con Firebase para persistencia de datos.

## Tecnologías y librerías principales

- **React 19**: Framework principal para la UI y lógica de componentes.
- **Vite**: Bundler y servidor de desarrollo rápido.
- **React Router DOM**: Navegación SPA entre rutas.
- **Firebase**: Backend para persistencia de productos y órdenes (Firestore).
- **TailwindCSS** y **DaisyUI**: Estilos utilitarios y componentes UI.
- **React Hot Toast**: Notificaciones interactivas.
- **ESLint**: Linter con reglas recomendadas y plugins para hooks y refresh.

## Estructura del proyecto

- `src/components/`: Componentes reutilizables (Navbar, Footer, Home, Products, ProductDetail, Cart, Checkout, etc.)
- `src/contexts/`: Contexto global para el carrito (CartContext, CartProvider, useCart).
- `src/firebase/`: Configuración y funciones para Firestore (config.js, db.js).
- `src/styles/`: Módulos CSS para estilos personalizados.
- `src/assets/`: Imágenes y recursos estáticos.

## Funcionalidades principales

- **Catálogo de productos**: Listado, filtrado por categorías, detalle individual.
- **Carrito de compras**: Añadir, quitar, modificar cantidad, persistencia en localStorage.
- **Checkout**: Formulario de compra, creación de orden en Firestore.
- **Navegación SPA**: Rutas para home, productos, categorías, carrito, checkout y página informativa.
- **Notificaciones**: Feedback visual para acciones del usuario.
- **Estilos modernos**: Uso de Tailwind y DaisyUI, módulos CSS para personalización.
- **Responsive**: Adaptación a distintos tamaños de pantalla.

## Prácticas y patrones utilizados

- **Gestión de estado global**: Context API para el carrito.
- **Persistencia local**: Carrito guardado en localStorage.
- **Hooks personalizados**: Ejemplo con useCart.
- **Separación de responsabilidades**: Componentes, contexto, lógica de Firebase y estilos.
- **Uso de async/await**: Para operaciones con Firestore.
- **Modularización**: CSS por componente.
- **Linter**: ESLint con reglas para evitar errores comunes y mantener calidad.

## Scripts disponibles

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.
- `preview`: Previsualiza el build.
- `lint`: Ejecuta ESLint.

## Configuración Firebase

La app utiliza Firestore para productos y órdenes. La configuración está en `src/firebase/config.js` y las funciones CRUD en `src/firebase/db.js`.

## Estilos

- TailwindCSS y DaisyUI para estilos base.
- Módulos CSS para personalización por componente.

## Contacto y redes

Incluye sección de contacto y enlaces a redes sociales en el Footer.

---

### Ejemplo de flujo de usuario

1. El usuario navega por el catálogo, filtra por categorías o busca productos destacados.
2. Agrega productos al carrito, ajusta cantidades o elimina.
3. Accede al checkout, completa el formulario y genera la orden (guardada en Firestore).
4. Recibe notificaciones visuales por cada acción.

---

### Estructura de carpetas

```
src/
	components/
	contexts/
	firebase/
	styles/
	assets/
```

---

### Autor

Facundo - Proyecto Matienzo
