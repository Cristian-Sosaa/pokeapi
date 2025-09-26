<template>
  <footer class="py-8 mt-16 text-white bg-gray-800">
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <div class="flex items-center mb-4 space-x-2">
            
            <h3 class="text-xl font-bold">PokéApp</h3>
          </div>
          <p class="text-gray-300">
            Tu aplicación completa para explorar el mundo Pokémon con funcionalidades avanzadas.
          </p>
          <!-- Añadir redes sociales -->
          <div class="flex mt-4 space-x-4">
            <a href="#" class="text-gray-300 transition-colors hover:text-white">
              <Github class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-300 transition-colors hover:text-white">
              <Twitter class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-300 transition-colors hover:text-white">
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="mb-4 text-lg font-semibold">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 transition-colors hover:text-white">Inicio</router-link></li>
            <li><router-link to="/pokemon" class="text-gray-300 transition-colors hover:text-white">Pokémon</router-link></li>
            <li><router-link to="/contact" class="text-gray-300 transition-colors hover:text-white">Contacto</router-link></li>
            <li><router-link to="/register" class="text-gray-300 transition-colors hover:text-white">Registrarse</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="mb-4 text-lg font-semibold">Recursos</h4>
          <ul class="space-y-2">
            <li><a href="https://pokeapi.co/" target="_blank" class="text-gray-300 transition-colors hover:text-white">PokeAPI</a></li>
            <li><a href="#" class="text-gray-300 transition-colors hover:text-white">Documentación</a></li>
            <li><a href="#" class="text-gray-300 transition-colors hover:text-white">API</a></li>
            <li><a href="#" class="text-gray-300 transition-colors hover:text-white">Términos de Uso</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="mb-4 text-lg font-semibold">Contacto</h4>
          <div class="space-y-2 text-gray-300">
            <div class="flex items-center space-x-2">
              <MapPin class="w-4 h-4" />
              <span>123 Pokémon Street</span>
            </div>
            <div class="flex items-center space-x-2">
              <Phone class="w-4 h-4" />
              <span>+34 123 456 789</span>
            </div>
            <div class="flex items-center space-x-2">
              <Mail class="w-4 h-4" />
              <span>info@pokeapp.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="pt-8 mt-8 text-center border-t border-gray-700">
        <p class="text-gray-300">
          © 2024 PokéApp. Todos los derechos reservados. Datos proporcionados por <a href="https://pokeapi.co/" target="_blank" class="text-primary-400 hover:text-primary-300">PokeAPI</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail, Github, Twitter } from 'lucide-vue-next'
</script>
