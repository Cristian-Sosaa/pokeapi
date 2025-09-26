import axios from "axios"

const API_BASE = "https://pokeapi.co/api/v2"

const cache = new Map<string, any>()

export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
    back_default?: string
    front_shiny?: string
    back_shiny?: string
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  height: number
  weight: number
  stats: Array<{
    base_stat: number
    stat: {
      name: string
    }
  }>
}

export interface PokemonListItem {
  name: string
  url: string
}

export const pokemonService = {
  async getPokemonList(limit = 20, offset = 0) {
    const cacheKey = `list-${limit}-${offset}`

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    try {
      const response = await axios.get(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`)
      cache.set(cacheKey, response.data)
      return response.data
    } catch (error) {
      console.error("Error fetching Pokemon list:", error)
      throw new Error("Error al cargar la lista de Pokémon")
    }
  },

  async getPokemon(id: string | number): Promise<Pokemon> {
    const cacheKey = `pokemon-${id}`

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    try {
      const response = await axios.get(`${API_BASE}/pokemon/${id}`)
      cache.set(cacheKey, response.data)
      return response.data
    } catch (error) {
      console.error("Error fetching Pokemon:", error)
      throw new Error("Error al cargar el Pokémon")
    }
  },

  async searchPokemon(query: string): Promise<Pokemon> {
    try {
      const response = await axios.get(`${API_BASE}/pokemon/${query.toLowerCase()}`)
      return response.data
    } catch (error) {
      console.error("Error searching Pokemon:", error)
      throw new Error("Pokémon no encontrado")
    }
  },

  async getPokemonTypes() {
    const cacheKey = "pokemon-types"

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    try {
      const response = await axios.get(`${API_BASE}/type`)
      cache.set(cacheKey, response.data)
      return response.data
    } catch (error) {
      console.error("Error fetching Pokemon types:", error)
      throw new Error("Error al cargar los tipos de Pokémon")
    }
  },
}
