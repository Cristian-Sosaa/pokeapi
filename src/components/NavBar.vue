<template>
  <nav class="bg-white border-b border-gray-200 shadow-lg">
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center space-x-2">
          <router-link to="/" class="text-2xl font-bold text-primary-600">
            PokéApp
          </router-link>
        </div>
        
        <div class="items-center hidden space-x-6 md:flex">
          <router-link 
            to="/" 
            class="nav-link"
            :class="{ 'text-primary-600 font-medium': $route.name === 'Home' }"
          >
            Inicio
          </router-link>
          <router-link 
            to="/pokemon" 
            class="nav-link"
            :class="{ 'text-primary-600 font-medium': $route.name === 'Pokemon' || $route.name === 'PokemonDetail' }"
          >
            Pokémon
          </router-link>
          <router-link 
            to="/contact" 
            class="nav-link"
            :class="{ 'text-primary-600 font-medium': $route.name === 'Contact' }"
          >
            Contacto
          </router-link>
          <!-- Solo mostrar enlace de email si está autenticado -->
          <router-link 
            v-if="isLoggedIn"
            to="/email" 
            class="nav-link"
            :class="{ 'text-primary-600 font-medium': $route.name === 'EmailSender' }"
          >
            Enviar Email
          </router-link>
        </div>

        <div class="flex items-center space-x-4">
          <!-- Añadir opciones de autenticación en menú móvil -->
          <template v-if="!isLoggedIn">
            <router-link to="/login" class="text-gray-600 transition-colors hover:text-primary-600">
              Iniciar Sesión
            </router-link>
            <router-link to="/register" class="btn-primary">
              Registrarse
            </router-link>
          </template>
          <template v-else>
            <div class="flex items-center space-x-2">
              <User class="w-4 h-4 text-gray-500" />
              <span class="text-gray-600">{{ username }}</span>
            </div>
            <button @click="logout" class="flex items-center space-x-1 text-gray-600 transition-colors hover:text-red-600">
              <LogOut class="w-4 h-4" />
              <span>Cerrar Sesión</span>
            </button>
          </template>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-2 rounded-lg md:hidden hover:bg-gray-100"
        >
          <Menu class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="py-4 border-t border-gray-200 md:hidden">
        <div class="flex flex-col space-y-2">
          <router-link to="/" class="nav-link-mobile" @click="mobileMenuOpen = false">Inicio</router-link>
          <router-link to="/pokemon" class="nav-link-mobile" @click="mobileMenuOpen = false">Pokémon</router-link>
          <router-link to="/contact" class="nav-link-mobile" @click="mobileMenuOpen = false">Contacto</router-link>
          <router-link v-if="isLoggedIn" to="/email" class="nav-link-mobile" @click="mobileMenuOpen = false">Enviar Email</router-link>
          <template v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link-mobile" @click="mobileMenuOpen = false">Iniciar Sesión</router-link>
            <router-link to="/register" class="nav-link-mobile" @click="mobileMenuOpen = false">Registrarse</router-link>
          </template>
          <template v-else>
            <button @click="logout" class="text-left nav-link-mobile">Cerrar Sesión</button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Menu, User, LogOut } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth'

// Todos los refs primero
const mobileMenuOpen = ref(false)

// Store después de refs
const authStore = useAuthStore()

// Computed properties después del store
const isLoggedIn = computed(() => authStore.isAuthenticated)
const username = computed(() => authStore.user?.username)

// Funciones regulares al final
const logout = () => {
  authStore.logout()
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-primary-600 transition-colors font-medium;
}

.nav-link-mobile {
  @apply block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors;
}
</style>
