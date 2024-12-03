# Fatima Cake App 🍰
Fatima Cake App es una aplicación web diseñada para la gestión de productos de pastelería, proporcionando una interfaz moderna para que los usuarios puedan explorar y agendar sus cakes favoritos. Este proyecto utiliza tecnologías actuales tanto en el frontend como en el backend para ofrecer una experiencia fluida.

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/loginGif.gif" alt="Login" width="200">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/loginPcGif.gif" alt="LoginPc" width="600">
</div>

<div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/productGif.gif" alt="Products" width="300">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/sectionsGif.gif" alt="Sections" width="260">
</div>


# 🌟 Características principales
## Backend

- Framework: Express.js
- Base de datos: MongoDB
- Autenticación: Integración con Google OAuth y JWT.
- Gestión de archivos: Subida de imágenes con Cloudinary.
- API REST:
- Autenticación (/api/auth).
- Usuarios (/api/user).
- Categorías y productos (/api/categories, /api/products).
- Búsquedas globales (/api/search).
- Subida de archivos a Cloudinary (/api/uploads).
 
## Frontend

- Framework: React con Vite.
- Estado global: Redux Toolkit.
- Estilo: Bootstrap + CSS personalizado.
- Rutas dinámicas: React Router.
- Alertas: SweetAlert2.
- Conexión con backend: Axios para peticiones HTTP.

## Requisitos previos

- Node.js v16 o superior.
- MongoDB Atlas o local.
 
# Instalación

### Clona el repositorio:
  
  ```
  git clone https://github.com/edwinmoreno77/fatima-app-backend.git
  cd fatima-app-backend
  ```
### Renombrar variables de entorno
- backend y frontend
 
  ```
  cd frontend 
  yarn install
  cd ..
  npm install
  node index.js
  ```

## Desplegado en

```
https://fatima-app-backend.onrender.com
```
