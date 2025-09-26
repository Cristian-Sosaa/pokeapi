<template>
  <div class="w-full h-full relative">
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div class="flex items-center space-x-2">
        <Loader2 class="animate-spin h-6 w-6 text-primary-600" />
        <span class="text-gray-600">Cargando mapa...</span>
      </div>
    </div>
    
    <div v-if="error" class="absolute inset-0 flex items-center justify-center bg-red-50">
      <div class="text-center">
        <AlertCircle class="h-8 w-8 text-red-500 mx-auto mb-2" />
        <p class="text-red-600">Error al cargar el mapa</p>
      </div>
    </div>
    
    <div ref="mapContainer" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Loader2, AlertCircle } from 'lucide-vue-next'

const mapContainer = ref<HTMLElement>()
const loading = ref(true)
const error = ref(false)
let map: any = null

onMounted(async () => {
  try {
    // Importar Leaflet dinámicamente
    const L = await import('leaflet')
    
    // Configurar iconos por defecto de Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    })
    
    if (mapContainer.value) {
      // Coordenadas de Madrid, España (ejemplo)
      const lat = 40.4168
      const lng = -3.7038
      
      // Crear el mapa
      map = L.map(mapContainer.value).setView([lat, lng], 13)
      
      // Añadir capa de tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)
      
      // Añadir marcador
      const marker = L.marker([lat, lng]).addTo(map)
      marker.bindPopup(`
        <div class="text-center">
          <h3 class="font-bold text-lg mb-2">PokéApp Oficinas</h3>
          <p class="text-gray-600">123 Pokémon Street<br>Ciudad Pokémon, CP 12345</p>
        </div>
      `).openPopup()
      
      loading.value = false
    }
  } catch (err) {
    console.error('Error loading map:', err)
    error.value = true
    loading.value = false
  }
})

onUnmounted(() => {
  if (map) {
    map.remove()
  }
})
</script>

<style>
/* Estilos específicos para Leaflet */
.leaflet-container {
  height: 100%;
  width: 100%;
}

.leaflet-popup-content {
  margin: 8px 12px;
}

.leaflet-popup-content h3 {
  margin: 0 0 8px 0;
}
</style>
