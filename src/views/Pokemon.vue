<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Explorador Pokémon
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Descubre información detallada sobre todos los Pokémon disponibles
      </p>
    </div>

    <!-- Search and Filters -->
    <div class="card">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              v-model="searchQuery"
              @keyup.enter="searchPokemon"
              type="text"
              placeholder="Buscar Pokémon por nombre o ID..."
              class="input-field pl-10"
            />
          </div>
        </div>
        <button
          @click="searchPokemon"
          :disabled="loading"
          class="btn-primary whitespace-nowrap"
        >
          <Search class="h-4 w-4 mr-2" />
          Buscar
        </button>
        <button
          @click="resetSearch"
          class="btn-secondary whitespace-nowrap"
        >
          <RotateCcw class="h-4 w-4 mr-2" />
          Limpiar
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="flex items-center space-x-2">
        <Loader2 class="animate-spin h-6 w-6 text-primary-600" />
        <span class="text-gray-600">Cargando Pokémon...</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-if="error" class="card bg-red-50 border-red-200">
      <div class="flex items-center space-x-2 text-red-600">
        <AlertCircle class="h-5 w-5" />
        <span>{{ error }}</span>
      </div>
    </div>

    <!-- Pokemon Grid -->
    <div v-if="!loading && pokemonList.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <PokemonCard
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        :pokemon="pokemon"
        @click="goToPokemonDetail(pokemon.id)"
      />
    </div>

    <!-- Empty State -->
    <div v-if="!loading && pokemonList.length === 0 && !error" class="text-center py-12">
      <div class="text-gray-400 mb-4">
        <Search class="h-16 w-16 mx-auto" />
      </div>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">No se encontraron Pokémon</h3>
      <p class="text-gray-500">Intenta con otro término de búsqueda</p>
    </div>

    <!-- Pagination -->
    <div v-if="!searchMode && !loading" class="flex justify-center space-x-4">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
        class="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft class="h-4 w-4 mr-2" />
        Anterior
      </button>
      
      <span class="flex items-center px-4 py-2 text-gray-600">
        Página {{ currentPage }}
      </span>
      
      <button
        @click="nextPage"
        :disabled="pokemonList.length < pageSize"
        class="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Siguiente
        <ChevronRight class="h-4 w-4 ml-2" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Loader2, AlertCircle, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { pokemonService, type Pokemon } from '../services/pokemon'
import PokemonCard from '../components/PokemonCard.vue'

const router = useRouter()

const pokemonList = ref<Pokemon[]>([])
const loading = ref(false)
const error = ref('')
const searchQuery = ref('')
const searchMode = ref(false)
const currentPage = ref(1)
const pageSize = 20

const loadPokemonList = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const offset = (currentPage.value - 1) * pageSize
    const response = await pokemonService.getPokemonList(pageSize, offset)
    
    // Cargar detalles de cada Pokémon
    const pokemonDetails = await Promise.all(
      response.results.map(async (pokemon: any) => {
        const id = pokemon.url.split('/').filter(Boolean).pop()
        return await pokemonService.getPokemon(id)
      })
    )
    
    pokemonList.value = pokemonDetails
  } catch (err) {
    error.value = 'Error al cargar la lista de Pokémon'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const searchPokemon = async () => {
  if (!searchQuery.value.trim()) {
    resetSearch()
    return
  }
  
  loading.value = true
  error.value = ''
  searchMode.value = true
  
  try {
    const pokemon = await pokemonService.searchPokemon(searchQuery.value.trim())
    pokemonList.value = [pokemon]
  } catch (err) {
    error.value = 'Pokémon no encontrado'
    pokemonList.value = []
  } finally {
    loading.value = false
  }
}

const resetSearch = () => {
  searchQuery.value = ''
  searchMode.value = false
  currentPage.value = 1
  loadPokemonList()
}

const goToPokemonDetail = (id: number) => {
  router.push(`/pokemon/${id}`)
}

const nextPage = () => {
  currentPage.value++
  loadPokemonList()
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    loadPokemonList()
  }
}

onMounted(() => {
  loadPokemonList()
})
</script>
