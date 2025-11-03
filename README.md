🛒 E-Commerce de Café

Proyecto desarrollado con React + Vite + JavaScript + CSS

Este proyecto es un e-commerce simple totalmente funcional: incluye catálogo, carrito persistente, detalle de producto y un checkout simulado. Está diseñado para ser rápido, moderno y fácilmente escalable, usando buenas prácticas de UI/UX y un front limpio y modular.

Ideal como portfolio, base de proyecto o punto de partida para un e-commerce real.

🚀 Tecnologías utilizadas

Vite — Bundler ultra rápido

React + React Router — SPA moderna

JavaScript — Lógica de UI y estado

CSS modular (globals.css) — Diseño oscuro, cards alineadas, responsive

Zustand — Estado global sencillo para carrito (con persistencia)

localStorage — Guardado de carrito entre sesiones

✅ Funcionalidades principales
🛍️ Catálogo de productos

Listado dinámico desde /src/data/products.js

Imágenes personalizadas para cada producto

Cards uniformes, responsive y con estilos consistentes

🛒 Carrito de compras

Agregar / remover / actualizar cantidades

Carrito persistente en localStorage

Cálculo de totals y subtotals

Vista de carrito separada

🔎 Detalle de producto

URL dinámica /product/:id

Imagen grande + descripción + precio

✅ Checkout simulado

Form de comprador

Selección de provincia y método de pago

Estado “Procesando…”

Generación de número de orden

Vista de “Compra Exitosa”

🎨 Diseño limpio y responsive

Dark mode por defecto

Cards alineadas con flexbox

Imágenes con proporción uniforme (3:2)

Botones y tipografía consistentes

Footer simple y elegante

🛠️ Instalación y uso

Cloná el repositorio:

git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo


Instalá dependencias:

npm install


Modo desarrollo:

npm run dev


Build para producción:

npm run build


Previsualizar build:

npm run preview

📦 Datos de productos

Los productos se editan en:

src/data/products.js


Ejemplo:

{
  id: "cafe-1",
  title: "Café Blend 250g",
  price: 4200,
  image: "/img/blend-250.png",
  stock: 12,
  description: "Blend balanceado..."
}

🧪 Mejoras futuras (Roadmap)

✅ Filtros por categoría

✅ Búsqueda por texto

✅ Cupones de descuento

✅ Light/Dark mode con toggle

✅ Soporte para variaciones (grano/molido)

✅ Backend real (Express / Firebase)

✅ Autenticación (login + orders)

📄 Licencia

Este proyecto es de uso libre para portfolio y proyectos personales.

⭐ Si te gustó…

Dale una ⭐ en GitHub (¡ayuda muchísimo!)
