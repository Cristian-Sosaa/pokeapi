<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Añadir indicador de carga global -->
    <div v-if="loading" class="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div class="flex items-center space-x-2">
        <Loader2 class="animate-spin h-8 w-8 text-primary-600" />
        <span class="text-lg text-gray-600">Cargando PokéApp...</span>
      </div>
    </div>
    
    <NavBar />
    <main class="container mx-auto px-4 py-8">
      <!-- Añadir transiciones entre rutas -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    
    <!-- Añadir botón de scroll to top -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
    >
      <ChevronUp class="h-6 w-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Loader2, ChevronUp } from 'lucide-vue-next'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { useAuthStore } from './stores/auth'

const loading = ref(true)
const showScrollTop = ref(false)

const authStore = useAuthStore()

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  authStore.initAuth()
  setTimeout(() => {
    loading.value = false
  }, 1000)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html {
  scroll-behavior: smooth;
}

.loading-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
