# Movies Watchlist

Una aplicación personal desarrollada para practicar React, Tailwind CSS, manejo de estado, persistencia con localStorage y comunicación entre componentes mediante props.

---

## 🛠 Tecnologías utilizadas

- ⚛️ **React (Vite)** — Framework moderno para construir interfaces reactivas y rápidas.
- 💨 **Tailwind CSS** — Framework de utilidades para estilos CSS rápidos y responsivos.
- 🔄 **useState y useEffect** — Para manejo de estado local y efectos secundarios.
- 💾 **localStorage** — Para persistir la lista de películas favoritas entre recargas.
- 🧩 **Componentes reutilizables** — Organización modular y escalable del código.
- 🔗 **Comunicación entre componentes** — Pasar estados y funciones a través de props para interacción.

---

## 🌈 Funcionalidad principal

- Mostrar una lista de películas cargadas desde un JSON local.
- Permitir agregar o quitar películas de una watchlist (lista de seguimiento).
- Persistir la watchlist en el navegador usando localStorage.
- Modal para visualizar y administrar la watchlist.
- Botón toggle para agregar/quitar películas de la lista con iconos dinámicos.
- Comunicación clara entre componentes padres e hijos para manejar estado y acciones.

---

## 🧭 Estructura del proyecto

- **App.jsx**: Componente principal que maneja el estado global de la watchlist, persiste datos y gestiona la apertura del modal.
- **MovieList.jsx**: Componente que lista todas las películas disponibles, recibe props para manejar la watchlist.
- **MovieCard.jsx**: Tarjeta individual de cada película, con botón para agregar/quitar de la watchlist.
- **Modal.jsx**: Ventana emergente para mostrar la watchlist y permitir eliminar películas.
- **Navbar.jsx** y **Footer.jsx**: Componentes de navegación y pie de página para la interfaz.

---