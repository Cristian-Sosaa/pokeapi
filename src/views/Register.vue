<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-primary-50 to-primary-100 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold text-gray-900">
          Crear Cuenta
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Únete a la comunidad PokéApp
        </p>
      </div>
      
      <form @submit.prevent="handleRegister" class="mt-8 space-y-6">
        <div class="card">
          <div class="space-y-4">
            <div>
              <label for="username" class="block mb-1 text-sm font-medium text-gray-700">
                Nombre de Usuario
              </label>
              <input
                id="username"
                v-model="form.username"
                type="text"
                required
                class="input-field"
                placeholder="Tu nombre de usuario"
              />
            </div>
            
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
                minlength="6"
                class="input-field"
                placeholder="••••••••"
              />
              <p class="mt-1 text-xs text-gray-500">Mínimo 6 caracteres</p>
            </div>
            
            <div>
              <label for="confirmPassword" class="block mb-1 text-sm font-medium text-gray-700">
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
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
          
          <div v-if="success" class="p-3 mt-4 border border-green-200 rounded-lg bg-green-50">
            <p class="text-sm text-green-600">{{ success }}</p>
          </div>
          
          <div class="mt-6">
            <button
              type="submit"
              :disabled="loading"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                Creando cuenta...
              </span>
              <span v-else>Crear Cuenta</span>
            </button>
          </div>
          
          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              ¿Ya tienes cuenta?
              <router-link to="/login" class="font-medium text-primary-600 hover:text-primary-500">
                Inicia sesión aquí
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
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')

const handleRegister = async () => {
  loading.value = true
  error.value = ''
  success.value = ''
  
  // Validaciones
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Las contraseñas no coinciden'
    loading.value = false
    return
  }
  
  if (form.value.password.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres'
    loading.value = false
    return
  }
  
  try {
    const result = await authStore.register(
      form.value.username,
      form.value.email,
      form.value.password
    )
    
    if (result.success) {
      success.value = 'Cuenta creada exitosamente. Redirigiendo...'
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } else {
      error.value = result.error || 'Error al crear la cuenta'
    }
  } catch (err) {
    error.value = 'Error de conexión'
  } finally {
    loading.value = false
  }
}
</script>
