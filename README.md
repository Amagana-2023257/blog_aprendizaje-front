# Blog de Aprendizaje

Este repositorio contiene el proyecto completo de un **blog de aprendizaje**, dividido en dos carpetas principales:

- **backend**: API RESTful con Node.js, Express y MongoDB
- **frontend**: SPA en React y Vite para consumir la API

---

## 📦 Tecnologías

- **Backend**:
  - Node.js
  - Express
  - MongoDB + Mongoose
  - argon2 (hash de contraseñas)
  - jsonwebtoken (JWT)
  - express-validator
  - multer
  - dotenv
  - Helmet, CORS, Morgan, express-rate-limit
  - swagger-jsdoc & swagger-ui-express

- **Frontend**:
  - React (v18+)
  - Vite
  - React Router
  - Axios
  - react-hot-toast
  - Bootstrap 5 (o Tailwind)
  - PropTypes

---

## 🔧 Requisitos previos

1. Node.js >= 14 y npm o yarn
2. MongoDB (local o en la nube)
3. Git

---

## 🚀 Instalación y puesta en marcha

```bash
# Clonar el repositorio
git clone https://github.com/tu_usuario/blog-de-aprendizaje.git
cd blog-de-aprendizaje

# Configurar variables de entorno (backend/.env)
# MONGO_URI, JWT_SECRET, PORT=3001

# Iniciar backend
git checkout main
cd backend
npm install
npm run dev

# Iniciar frontend
git checkout main
cd frontend
npm install
npm run dev
```

- El **backend** corre en `http://localhost:3001/blog/v1`
- El **frontend** en `http://localhost:3000`

---

## 🗂 Estructura del proyecto

```
blog-de-aprendizaje/
├─ backend/
│  ├─ src/
│  │  ├─ auth/           # register, login
│  │  ├─ post/           # modelos, controladores y rutas de posts
│  │  ├─ comment/        # modelos, controladores y rutas de comentarios
│  │  ├─ middlewares/    # validaciones, JWT, manejo de archivos
│  │  ├─ helpers/        # validadores de BD, generadores de JWT
│  │  └─ swagger.js      # configuración de Swagger
│  ├─ .env
│  ├─ package.json
│  └─ server.js
│
├─ frontend/
│  ├─ public/
│  │  └─ index.html
│  ├─ src/
│  │  ├─ assets/         # imágenes, logos
│  │  ├─ components/     # UI y componentes de página
│  │  ├─ shared/         # hooks, servicios, validadores
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ package.json
│  └─ vite.config.js
└─ README.md
```

---

## 🔗 Endpoints principales (backend)

### Auth

| Método | Ruta                 | Descripción                |
| ------ | -------------------- | -------------------------- |
| POST   | `/auth/register`     | Crear cuenta de usuario    |
| POST   | `/auth/login`        | Iniciar sesión (JWT)       |

### Posts

| Método | Ruta               | Descripción                                |
| ------ | ------------------ | ------------------------------------------ |
| GET    | `/posts`           | Listar todas las publicaciones             |
| GET    | `/posts/:id`       | Obtener detalle de una publicación         |
| POST   | `/posts`           | Crear nueva publicación                    |
| PUT    | `/posts/:id`       | Actualizar publicación                     |
| DELETE | `/posts/:id`       | Eliminar publicación                       |

### Comments

| Método | Ruta                                     | Descripción                       |
| ------ | ---------------------------------------- | --------------------------------- |
| GET    | `/posts/:postId/comments`                | Listar comentarios de un post     |
| POST   | `/posts/:postId/comments`                | Crear comentario en un post       |
| DELETE | `/comments/:id`                          | Eliminar comentario               |

---

## 🌐 Rutas (frontend)

- `/` — Lista de publicaciones
- `/posts/:id` — Detalle de post y comentarios
- `/posts/new` — Formulario para crear un post
- `/posts/edit/:id` — Formulario para editar un post

---

## 📚 Documentación de la API

Accede a Swagger UI una vez el servidor esté corriendo en:

```
http://localhost:3001/api-docs
```

---

## 🤝 Contribuir

1. Fork del repositorio
2. Crear rama `feature/mi-mejora`
3. Commit y push
4. Pull request

---

## 📄 Licencia

MIT
