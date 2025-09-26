import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import "./style.css"

// Importar componentes de páginas
import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Pokemon from "./views/Pokemon.vue"
import PokemonDetail from "./views/PokemonDetail.vue"
import Contact from "./views/Contact.vue"
import EmailSender from "./views/EmailSender.vue"

// Configurar rutas
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/pokemon", name: "Pokemon", component: Pokemon },
  { path: "/pokemon/:id", name: "PokemonDetail", component: PokemonDetail, props: true },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/email", name: "EmailSender", component: EmailSender },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Crear y montar la aplicación
const app = createApp(App)
app.use(router)

// La inicialización de auth se manejará en App.vue
app.mount("#app")
