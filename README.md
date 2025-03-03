📌 Gestor de Hábitos
Este es un proyecto de aplicación web para ayudar a los usuarios a crear y mantener hábitos de manera efectiva. La aplicación permite registrar hábitos, hacer seguimiento diario y reiniciar el progreso si no se cumple con la rutina.

🚀 Tecnologías utilizadas
Backend: Express.js + Mongoose
Base de datos: MongoDB Atlas
Librerías principales:
express para gestionar el servidor web
mongoose para la conexión con MongoDB
dotenv para manejar variables de entorno
📂 Configuración inicial del proyecto
1️⃣ Clonar el repositorio
bash
Copiar
Editar
git clone https://github.com/Lesly24000803/Ejemplo-proyecto.git
cd Ejemplo-proyecto
git checkout semana1
2️⃣ Instalación de dependencias
Ejecuta el siguiente comando en la carpeta backend para instalar las dependencias necesarias:

bash
Copiar
Editar
cd backend
npm install
3️⃣ Configuración de MongoDB Atlas
Crea una cuenta en MongoDB Atlas.
Crea un clúster y una base de datos llamada habitosDB.
Obtén tu cadena de conexión y agrégala en el archivo .env del backend.
4️⃣ Configuración del entorno
Crea un archivo .env en la carpeta backend y agrega lo siguiente:

ini
Copiar
Editar
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/habitosDB
PORT=3001
▶️ Ejecución del proyecto
Iniciar el servidor backend
bash
Copiar
Editar
cd backend
npm run dev
El backend correrá en http://localhost:3001.

📌 Endpoints disponibles
Método	Ruta	Descripción
POST	/api/habits	Crear un nuevo hábito
GET	/api/habits	Obtener hábitos del usuario
PUT	/api/habits/:id	Actualizar un hábito
DELETE	/api/habits/:id	Eliminar un hábito
Ejemplo de petición POST para crear un hábito:

json
Copiar
Editar
{
  "nombre": "Leer 10 páginas al día",
  "descripcion": "Leer al menos 10 páginas de un libro cada día",
  "diasCompletados": 0
}
📂 Estructura del proyecto
bash
Copiar
Editar
/Ejemplo-proyecto
│── /backend
│   │── /models          # Modelos de MongoDB con Mongoose
│   │── /routes          # Rutas de la API
│   │── /controllers     # Controladores de la lógica de negocio
│   │── index.js         # Punto de entrada del servidor
│   │── .env             # Archivo de configuración de entorno
│── README.md
│── package.json
❓ Preguntas frecuentes
❔ ¿Cómo se conecta Express con MongoDB?
Se utiliza mongoose para conectar Express con MongoDB.
Código de ejemplo en index.js:

javascript
Copiar
Editar
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch(err => console.error("Error de conexión:", err));
❔ ¿Cómo ejecuto el backend en desarrollo?
Usa npm run dev en la carpeta backend para iniciar el servidor con nodemon, lo que recargará automáticamente los cambios.

