<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-primary-50 to-primary-100 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold text-gray-900">
          Iniciar Sesión
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Accede a tu cuenta de PokéApp
        </p>
      </div>
      
      <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <div class="card">
          <div class="space-y-4">
            <div>
              <label for="email" class="block mb-1 text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="input-field"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label for="password" class="block mb-1 text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                required
                class="input-field"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div v-if="error" class="p-3 mt-4 border border-red-200 rounded-lg bg-red-50">
            <p class="text-sm text-red-600">{{ error }}</p>
          </div>
          
          <div class="mt-6">
            <button
              type="submit"
              :disabled="loading"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                Iniciando sesión...
              </span>
              <span v-else>Iniciar Sesión</span>
            </button>
          </div>
          
          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              ¿No tienes cuenta?
              <router-link to="/register" class="font-medium text-primary-600 hover:text-primary-500">
                Regístrate aquí
              </router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Loader2 } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const result = await authStore.login(form.value.email, form.value.password)
    
    if (result.success) {
      router.push('/')
    } else {
      error.value = result.error || 'Error al iniciar sesión'
    }
  } catch (err) {
    error.value = 'Error de conexión'
  } finally {
    loading.value = false
  }
}
</script>
