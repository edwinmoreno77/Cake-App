# Fatima Cake App 🍰
Fatima Cake App is a web application designed for managing bakery products, offering a modern interface for users to explore and schedule their favorite cakes.


<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/loginGif.gif" alt="Login" width="200">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/loginPcGif.gif" alt="LoginPc" width="600">
</div>

<div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/productGif.gif" alt="Products" width="300">
  <img src="https://github.com/edwinmoreno77/fatima-app-backend/blob/main/frontend/assets/sectionsGif.gif" alt="Sections" width="260">
</div>


# 🌟 Main features
## Backend

- Framework: Express.js
- Database: MongoDB
- Authentication: Integration with Google OAuth and JWT.
- File management: Image upload with Cloudinary.
- REST API:
- Authentication (/api/auth).
- Users (/api/user).
- Categories and products (/api/categories, /api/products).
- Global searches (/api/search).
- File upload to Cloudinary (/api/uploads).
 
## Frontend

- Framework: React with Vite.
- Global state: Redux Toolkit.
- Style: Bootstrap + custom CSS.
- Dynamic routes: React Router.
- Alerts: SweetAlert2.
- Connection with backend: Axios for HTTP requests.

## Prerequisites

- Node.js v16 or higher.
- MongoDB Atlas or local.
 
# Installation

### Clone the repository:
  
  ```
  git clone https://github.com/edwinmoreno77/fatima-app-backend.git
  cd fatima-app-backend
  ```
Rename environment variables
- backend y frontend
 
  ```
  cd frontend 
  yarn install
  cd ..
  npm install
  node index.js
  ```

## Deployed in

```
https://fatima-app-backend.onrender.com
```

```
Directory structure:
└── edwinmoreno77-Cake-App/
    ├── README.md
    ├── index.js
    ├── package.json
    ├── .env.example
    ├── assets/
    ├── controllers/
    │   ├── auth.js
    │   ├── categories.js
    │   ├── products.js
    │   ├── search.js
    │   ├── uploads.js
    │   └── user.js
    ├── database/
    │   └── config.db.js
    ├── frontend/
    │   ├── README.md
    │   ├── index.html
    │   ├── package.json
    │   ├── vite.config.js
    │   ├── yarn.lock
    │   ├── .env.template
    │   ├── .gitignore
    │   ├── assets/
    │   ├── build/
    │   │   ├── index.html
    │   │   └── assets/
    │   │       ├── index.3875f84f.css
    │   │       └── index.d021667e.js
    │   └── src/
    │       ├── CakeApp.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── api/
    │       │   ├── fatimaServerApi.js
    │       │   └── index.js
    │       ├── auth/
    │       │   ├── index.js
    │       │   └── pages/
    │       │       ├── LoginPage.css
    │       │       └── LoginPage.jsx
    │       ├── cakes/
    │       │   ├── index.js
    │       │   ├── components/
    │       │   │   ├── AddCakes.jsx
    │       │   │   ├── CakeCard.jsx
    │       │   │   ├── CakeList.jsx
    │       │   │   ├── CakeListByCategory.jsx
    │       │   │   ├── CakePageForm.jsx
    │       │   │   └── ResourceManager.jsx
    │       │   ├── helpers/
    │       │   │   ├── getCakeByCategory.js
    │       │   │   ├── getCakeById.js
    │       │   │   ├── getCakeByName.js
    │       │   │   └── getProductState.js
    │       │   ├── pages/
    │       │   │   ├── AllCakesPages.jsx
    │       │   │   ├── ButterCreamPage.jsx
    │       │   │   ├── CakePage.jsx
    │       │   │   ├── GanachePage.jsx
    │       │   │   ├── HomePage.jsx
    │       │   │   ├── NosotrosPage.jsx
    │       │   │   ├── SearchPage.jsx
    │       │   │   └── index.js
    │       │   └── routes/
    │       │       └── CakesRoutes.jsx
    │       ├── helpers/
    │       │   └── getEnvVariables.js
    │       ├── hooks/
    │       │   ├── index.js
    │       │   ├── useAuthStore.js
    │       │   ├── useCake.js
    │       │   ├── useForm.js
    │       │   └── useFormSearch.js
    │       ├── router/
    │       │   ├── AppRouter.jsx
    │       │   ├── PrivateRoute.jsx
    │       │   └── PublicRoute.jsx
    │       ├── store/
    │       │   ├── index.js
    │       │   ├── store.js
    │       │   ├── auth/
    │       │   │   └── authSlice.js
    │       │   └── cakes/
    │       │       ├── cakeSlice.js
    │       │       └── thunks.js
    │       └── ui/
    │           ├── index.js
    │           └── components/
    │               ├── Footer.jsx
    │               ├── Navbar.jsx
    │               ├── Slider.jsx
    │               ├── Spinner.jsx
    │               ├── SubNavBar.css
    │               ├── SubNavBar.jsx
    │               ├── index.js
    │               └── spinner.css
    ├── helpers/
    │   ├── db-validators.js
    │   ├── generate-jwt.js
    │   ├── google-verify.js
    │   ├── index.js
    │   └── upload-file.js
    ├── middlewares/
    │   ├── file-validator.js
    │   ├── index.js
    │   ├── validate-fields.js
    │   ├── validate-jwt.js
    │   └── validate-roles.js
    ├── models/
    │   ├── category.js
    │   ├── index.js
    │   ├── product.js
    │   ├── role.js
    │   ├── server.js
    │   └── user.js
    ├── routes/
    │   ├── auth.js
    │   ├── categories.js
    │   ├── products.js
    │   ├── search.js
    │   ├── uploads.js
    │   └── user.js
    └── uploads/
        ├── readme.md
        ├── products/
        │   └── readme.md
        └── users/
            └── readme.md
```

