<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-green-300">
     
    <section class="relative py-20 overflow-hidden">
     
      <div class="absolute w-64 h-64 top-10 right-10 opacity-20">
        <div class="relative w-full h-full rounded-full bg-gradient-to-b from-red-500 to-red-600">
          <div class="absolute bottom-0 w-full rounded-b-full h-1/2 bg-gradient-to-b from-gray-100 to-white"></div>
          <div class="absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 border-4 border-gray-300 rounded-full top-1/2 left-1/2">
            <div class="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2"></div>
          </div>
          <div class="absolute left-0 right-0 h-2 bg-gray-800 top-1/2"></div>
        </div>
      </div>
      
      <div class="relative z-10 max-w-6xl px-4 mx-auto text-center">
        <div class="inline-block mb-6">
          <h1 class="mb-2 text-6xl font-black text-yellow-400 stroke-text" style="text-shadow: 3px 3px 0px #1e40af, -1px -1px 0px #1e40af, 1px -1px 0px #1e40af, -1px 1px 0px #1e40af;">
            PokéApp
          </h1>
          <div class="text-2xl font-bold text-blue-800">¡Atrapa la diversión!</div>
        </div>
        
        <p class="max-w-2xl mx-auto mb-8 text-xl font-semibold text-blue-900">
          🌟 Explora el fascinante mundo Pokémon con la aplicación más completa 🌟
        </p>
        
        <div class="flex flex-col justify-center gap-6 sm:flex-row">
          <router-link to="/pokemon" class="text-white transition-all duration-200 transform bg-red-500 shadow-lg pokemon-button hover:bg-red-600 hover:scale-105">
            <span class="text-xl">⚡ Explorar Pokémon</span>
          </router-link>
          <router-link to="/register" class="text-blue-900 transition-all duration-200 transform bg-yellow-400 shadow-lg pokemon-button hover:bg-yellow-500 hover:scale-105">
            <span class="text-xl">🎯 Únete Ahora</span>
          </router-link>
        </div>
      </div>
    </section>

     
    <section class="relative py-16 bg-white">
       
      <div class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-300 to-white"></div>
      
      <div class="max-w-6xl px-4 mx-auto">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-black text-blue-800">
            🎮 Características Principales
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-700">
            Descubre todas las aventuras que te esperan en PokéApp
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           
          <div class="text-white pokemon-card bg-gradient-to-br from-red-400 to-red-600">
            <div class="pokemon-card-header">
              <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg">
                <Search class="w-10 h-10 text-red-600" />
              </div>
              <h3 class="mb-2 text-2xl font-bold">🔍 Explorar Pokémon</h3>
            </div>
            <p class="text-red-100">
              Busca y descubre información detallada sobre todos los Pokémon del mundo
            </p>
            <div class="pokemon-card-footer">
              <div class="flex justify-center mt-4 space-x-2">
                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div class="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div class="w-3 h-3 bg-green-300 rounded-full"></div>
              </div>
            </div>
          </div>
          
         
          <div class="text-white pokemon-card bg-gradient-to-br from-blue-400 to-blue-600">
            <div class="pokemon-card-header">
              <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg">
                <Users class="w-10 h-10 text-blue-600" />
              </div>
              <h3 class="mb-2 text-2xl font-bold">👥 Entrenadores</h3>
            </div>
            <p class="text-blue-100">
              Únete a la comunidad de entrenadores y gestiona tu perfil
            </p>
            <div class="pokemon-card-footer">
              <div class="flex justify-center mt-4 space-x-2">
                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div class="w-3 h-3 bg-red-300 rounded-full"></div>
                <div class="w-3 h-3 bg-green-300 rounded-full"></div>
              </div>
            </div>
          </div>
      
          <div class="text-white pokemon-card bg-gradient-to-br from-green-400 to-green-600">
            <div class="pokemon-card-header">
              <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg">
                <Mail class="w-10 h-10 text-green-600" />
              </div>
              <h3 class="mb-2 text-2xl font-bold">📧 Mensajería</h3>
            </div>
            <p class="text-green-100">
              Comunícate con otros entrenadores en tu aventura
            </p>
            <div class="pokemon-card-footer">
              <div class="flex justify-center mt-4 space-x-2">
                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div class="w-3 h-3 bg-red-300 rounded-full"></div>
                <div class="w-3 h-3 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <div class="text-white pokemon-card bg-gradient-to-br from-yellow-400 to-orange-500">
            <div class="pokemon-card-header">
              <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg">
                <MapPin class="w-10 h-10 text-orange-600" />
              </div>
              <h3 class="mb-2 text-2xl font-bold">🗺️ Ubicación</h3>
            </div>
            <p class="text-orange-100">
              Encuentra centros Pokémon y ubicaciones especiales
            </p>
            <div class="pokemon-card-footer">
              <div class="flex justify-center mt-4 space-x-2">
                <div class="w-3 h-3 bg-red-300 rounded-full"></div>
                <div class="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div class="w-3 h-3 bg-green-300 rounded-full"></div>
              </div>
            </div>
          </div>
    
          <div class="text-white pokemon-card bg-gradient-to-br from-purple-400 to-purple-600">
            <div class="pokemon-card-header">
              <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg">
                <Database class="w-10 h-10 text-purple-600" />
              </div>
              <h3 class="mb-2 text-2xl font-bold">⚡ PokéAPI</h3>
            </div>
            <p class="text-purple-100">
              Datos actualizados de todos los Pokémon y regiones
            </p>
            <div class="pokemon-card-footer">
              <div class="flex justify-center mt-4 space-x-2">
                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div class="w-3 h-3 bg-red-300 rounded-full"></div>
                <div class="w-3 h-3 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
         
          <div class="text-white pokemon-card bg-gradient-to-br from-pink-400 to-pink-600">
            <div class="pokemon-card-header">
              <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg">
                <Smartphone class="w-10 h-10 text-pink-600" />
              </div>
              <h3 class="mb-2 text-2xl font-bold">📱 Multi-dispositivo</h3>
            </div>
            <p class="text-pink-100">
              Lleva tu aventura Pokémon a cualquier dispositivo
            </p>
            <div class="pokemon-card-footer">
              <div class="flex justify-center mt-4 space-x-2">
                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div class="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div class="w-3 h-3 bg-green-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section class="relative py-16 overflow-hidden text-white bg-gradient-to-r from-red-500 to-red-600">
       
      <div class="absolute -top-20 -right-20 w-80 h-80 opacity-10">
        <div class="w-full h-full bg-white rounded-full"></div>
      </div>
      
      <div class="relative z-10 max-w-6xl px-4 mx-auto text-center">
        <h2 class="mb-12 text-4xl font-black">
          📊 PokéApp en Números
        </h2>
        
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="pokedex-stat">
            <div class="mb-2 text-6xl font-black text-yellow-300">1000+</div>
            <div class="text-xl font-bold">🎯 Pokémon Disponibles</div>
          </div>
          
          <div class="pokedex-stat">
            <div class="mb-2 text-6xl font-black text-yellow-300">50+</div>
            <div class="text-xl font-bold">👨‍🎓 Entrenadores Activos</div>
          </div>
          
          <div class="pokedex-stat">
            <div class="mb-2 text-6xl font-black text-yellow-300">24/7</div>
            <div class="text-xl font-bold">⏰ Aventura Continua</div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative py-20 text-center bg-gradient-to-b from-blue-400 to-blue-500">
      <div class="max-w-4xl px-4 mx-auto">
        <div class="relative p-12 bg-white border-8 border-red-500 shadow-2xl rounded-3xl">
          <div class="absolute w-12 h-12 bg-red-500 border-4 border-white rounded-full -top-6 -right-6">
            <div class="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2"></div>
          </div>
          
          <h2 class="mb-4 text-4xl font-black text-blue-800">
            🚀 ¿Listo para la aventura?
          </h2>
          <p class="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
            Únete a PokéApp hoy y comienza tu viaje para convertirte en el mejor entrenador Pokémon
          </p>
          <router-link to="/register" class="text-blue-900 transition-all duration-200 transform shadow-xl pokemon-button-large bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 hover:scale-105">
            <span class="text-2xl font-bold">🎮 ¡Comenzar Aventura!</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Search, Users, Mail, MapPin, Database, Smartphone } from 'lucide-vue-next'
</script>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 2px #1e40af;
}

.pokemon-button {
  @apply px-8 py-4 rounded-full font-bold text-lg border-4 border-white;
}

.pokemon-button-large {
  @apply px-12 py-6 rounded-full font-bold text-xl border-4 border-blue-800;
}

.pokemon-card {
  @apply p-8 rounded-3xl shadow-xl border-4 border-white transform hover:scale-105 transition-all duration-300;
}

.pokemon-card-header {
  @apply text-center;
}

.pokemon-card-footer {
  @apply mt-6;
}

.pokedex-stat {
  @apply bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm border-2 border-white border-opacity-30;
}

/* Animación sutil para las Pokéballs */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.pokemon-card:hover {
  animation: float 2s ease-in-out infinite;
}
</style>