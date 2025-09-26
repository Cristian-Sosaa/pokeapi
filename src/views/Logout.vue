<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900">Cerrando sesión...</h2>
      <p class="mt-2 text-gray-600">Serás redirigido en unos segundos.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // ✅ Borrar datos de la sesión
  localStorage.removeItem('user')
  localStorage.removeItem('token')

  // Redirigir al login después de un pequeño delay
  setTimeout(() => {
    router.push('/login')
  }, 1500)
})
</script>
