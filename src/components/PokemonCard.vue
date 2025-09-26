<template>
  <div class="card hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
    <div class="text-center">
      <!-- Pokemon Image -->
      <div class="relative mb-4">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default"
          :alt="pokemon.name"
          class="w-32 h-32 mx-auto object-contain"
          @error="handleImageError"
        />
        <div class="absolute top-2 right-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
          #{{ pokemon.id.toString().padStart(3, '0') }}
        </div>
      </div>
      
      <!-- Pokemon Name -->
      <h3 class="text-xl font-bold text-gray-900 mb-2 capitalize">
        {{ pokemon.name }}
      </h3>
      
      <!-- Pokemon Types -->
      <div class="flex justify-center space-x-2 mb-4">
        <span
          v-for="type in pokemon.types"
          :key="type.type.name"
          :class="getTypeColor(type.type.name)"
          class="px-3 py-1 rounded-full text-xs font-medium text-white"
        >
          {{ type.type.name }}
        </span>
      </div>
      
      <!-- Pokemon Stats Preview -->
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="text-center">
          <div class="text-gray-500">Altura</div>
          <div class="font-semibold">{{ (pokemon.height / 10).toFixed(1) }}m</div>
        </div>
        <div class="text-center">
          <div class="text-gray-500">Peso</div>
          <div class="font-semibold">{{ (pokemon.weight / 10).toFixed(1) }}kg</div>
        </div>
      </div>
      
      <!-- View Details Button -->
      <div class="mt-4">
        <button class="w-full btn-primary text-sm">
          Ver Detalles
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../services/pokemon'

defineProps<{
  pokemon: Pokemon
}>()

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

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/placeholder.svg?height=128&width=128'
}
</script>
