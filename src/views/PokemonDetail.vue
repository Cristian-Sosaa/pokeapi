<template>
  <div v-if="loading" class="flex justify-center py-12">
    <div class="flex items-center space-x-2">
      <Loader2 class="animate-spin h-6 w-6 text-primary-600" />
      <span class="text-gray-600">Cargando detalles del Pokémon...</span>
    </div>
  </div>

  <div v-else-if="error" class="card bg-red-50 border-red-200">
    <div class="flex items-center space-x-2 text-red-600">
      <AlertCircle class="h-5 w-5" />
      <span>{{ error }}</span>
    </div>
    <div class="mt-4">
      <router-link to="/pokemon" class="btn-primary">
        Volver a la lista
      </router-link>
    </div>
  </div>

  <div v-else-if="pokemon" class="space-y-8">
    <!-- Back Button -->
    <div>
      <router-link to="/pokemon" class="inline-flex items-center text-primary-600 hover:text-primary-700">
        <ArrowLeft class="h-4 w-4 mr-2" />
        Volver a la lista
      </router-link>
    </div>

    <!-- Pokemon Header -->
    <div class="card">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="text-center">
          <img
            :src="pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default"
            :alt="pokemon.name"
            class="w-64 h-64 mx-auto object-contain mb-4"
            @error="handleImageError"
          />
          <div class="text-gray-500 text-sm">
            #{{ pokemon.id.toString().padStart(3, '0') }}
          </div>
        </div>
        
        <div class="space-y-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 capitalize mb-2">
              {{ pokemon.name }}
            </h1>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="type in pokemon.types"
                :key="type.type.name"
                :class="getTypeColor(type.type.name)"
                class="px-4 py-2 rounded-full text-sm font-medium text-white"
              >
                {{ type.type.name }}
              </span>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Información Básica</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Altura:</span>
                  <span class="font-medium">{{ (pokemon.height / 10).toFixed(1) }}m</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Peso:</span>
                  <span class="font-medium">{{ (pokemon.weight / 10).toFixed(1) }}kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pokemon Stats -->
    <div class="card">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Estadísticas Base</h2>
      <div class="space-y-4">
        <div
          v-for="stat in pokemon.stats"
          :key="stat.stat.name"
          class="flex items-center space-x-4"
        >
          <div class="w-32 text-sm font-medium text-gray-700 capitalize">
            {{ formatStatName(stat.stat.name) }}
          </div>
          <div class="flex-1">
            <div class="flex items-center space-x-2">
              <div class="flex-1 bg-gray-200 rounded-full h-3">
                <div
                  :class="getStatColor(stat.base_stat)"
                  class="h-3 rounded-full transition-all duration-500"
                  :style="{ width: `${Math.min((stat.base_stat / 255) * 100, 100)}%` }"
                ></div>
              </div>
              <div class="w-12 text-sm font-semibold text-gray-900">
                {{ stat.base_stat }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pokemon Sprites -->
    <div class="card">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Sprites</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-if="pokemon.sprites.front_default" class="text-center">
          <img
            :src="pokemon.sprites.front_default"
            alt="Frente"
            class="w-24 h-24 mx-auto object-contain mb-2"
          />
          <p class="text-sm text-gray-600">Frente</p>
        </div>
        <div v-if="pokemon.sprites.back_default" class="text-center">
          <img
            :src="pokemon.sprites.back_default"
            alt="Espalda"
            class="w-24 h-24 mx-auto object-contain mb-2"
          />
          <p class="text-sm text-gray-600">Espalda</p>
        </div>
        <div v-if="pokemon.sprites.front_shiny" class="text-center">
          <img
            :src="pokemon.sprites.front_shiny"
            alt="Frente Shiny"
            class="w-24 h-24 mx-auto object-contain mb-2"
          />
          <p class="text-sm text-gray-600">Frente Shiny</p>
        </div>
        <div v-if="pokemon.sprites.back_shiny" class="text-center">
          <img
            :src="pokemon.sprites.back_shiny"
            alt="Espalda Shiny"
            class="w-24 h-24 mx-auto object-contain mb-2"
          />
          <p class="text-sm text-gray-600">Espalda Shiny</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Loader2, AlertCircle, ArrowLeft } from 'lucide-vue-next'
import { pokemonService, type Pokemon } from '../services/pokemon'

const route = useRoute()
const pokemon = ref<Pokemon | null>(null)
const loading = ref(false)
const error = ref('')

const loadPokemon = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const id = route.params.id as string
    pokemon.value = await pokemonService.getPokemon(id)
  } catch (err) {
    error.value = 'Error al cargar los detalles del Pokémon'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-300',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-green-400',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300'
  }
  
  return colors[type] || 'bg-gray-400'
}

const getStatColor = (value: number): string => {
  if (value >= 120) return 'bg-green-500'
  if (value >= 90) return 'bg-yellow-500'
  if (value >= 60) return 'bg-orange-500'
  return 'bg-red-500'
}

const formatStatName = (name: string): string => {
  const names: Record<string, string> = {
    'hp': 'HP',
    'attack': 'Ataque',
    'defense': 'Defensa',
    'special-attack': 'At. Especial',
    'special-defense': 'Def. Especial',
    'speed': 'Velocidad'
  }
  
  return names[name] || name
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/placeholder.svg?height=256&width=256'
}

onMounted(() => {
  loadPokemon()
})
</script>
