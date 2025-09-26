<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="text-center py-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-5xl font-bold mb-6">
          Bienvenido a PokéApp
        </h1>
        <p class="text-xl mb-8 opacity-90">
          Explora el fascinante mundo Pokémon con nuestra aplicación completa
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/pokemon" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explorar Pokémon
          </router-link>
          <router-link to="/register" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
            Únete Ahora
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Características Principales
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre todas las funcionalidades que PokéApp tiene para ofrecerte
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card text-center hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search class="h-8 w-8 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Explorar Pokémon</h3>
          <p class="text-gray-600">
            Busca y descubre información detallada sobre todos los Pokémon
          </p>
        </div>
        
        <div class="card text-center hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users class="h-8 w-8 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Gestión de Usuarios</h3>
          <p class="text-gray-600">
            Sistema completo de registro y autenticación de usuarios
          </p>
        </div>
        
        <div class="card text-center hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail class="h-8 w-8 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Envío de Correos</h3>
          <p class="text-gray-600">
            Comunícate con otros usuarios a través del sistema de mensajería
          </p>
        </div>
        
        <div class="card text-center hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin class="h-8 w-8 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Ubicación</h3>
          <p class="text-gray-600">
            Encuentra nuestra ubicación y ponte en contacto con nosotros
          </p>
        </div>
        
        <div class="card text-center hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Database class="h-8 w-8 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold mb-2">API Completa</h3>
          <p class="text-gray-600">
            Integración completa con PokeAPI para datos actualizados
          </p>
        </div>
        
        <div class="card text-center hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Smartphone class="h-8 w-8 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Responsive</h3>
          <p class="text-gray-600">
            Diseño adaptable para todos los dispositivos y pantallas
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-100 rounded-2xl">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">
          PokéApp en Números
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div class="text-gray-600">Pokémon Disponibles</div>
          </div>
          
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div class="text-gray-600">Usuarios Registrados</div>
          </div>
          
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div class="text-gray-600">Disponibilidad</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="text-center py-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">
        ¿Listo para comenzar?
      </h2>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Únete a PokéApp hoy y comienza a explorar el increíble mundo Pokémon
      </p>
      <router-link to="/register" class="btn-primary text-lg px-8 py-4">
        Crear Cuenta Gratis
      </router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Search, Users, Mail, MapPin, Database, Smartphone } from 'lucide-vue-next'
</script>
