<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Contáctanos
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        ¿Tienes preguntas o sugerencias? Nos encantaría escucharte. Encuentra nuestra ubicación y ponte en contacto con nosotros.
      </p>
    </div>

    <!-- Contact Info Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card text-center hover:shadow-lg transition-shadow">
        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin class="h-8 w-8 text-primary-600" />
        </div>
        <h3 class="text-xl font-semibold mb-2">Ubicación</h3>
        <p class="text-gray-600">
          123 Pokémon Street<br>
          Ciudad Pokémon, CP 12345<br>
          España
        </p>
      </div>
      
      <div class="card text-center hover:shadow-lg transition-shadow">
        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone class="h-8 w-8 text-primary-600" />
        </div>
        <h3 class="text-xl font-semibold mb-2">Teléfono</h3>
        <p class="text-gray-600">
          +34 123 456 789<br>
          Lunes a Viernes<br>
          9:00 - 18:00
        </p>
      </div>
      
      <div class="card text-center hover:shadow-lg transition-shadow">
        <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail class="h-8 w-8 text-primary-600" />
        </div>
        <h3 class="text-xl font-semibold mb-2">Email</h3>
        <p class="text-gray-600">
          info@pokeapp.com<br>
          soporte@pokeapp.com<br>
          Respuesta en 24h
        </p>
      </div>
    </div>

    <!-- Map and Contact Form -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Interactive Map -->
      <div class="card p-0 overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-bold text-gray-900">Nuestra Ubicación</h2>
          <p class="text-gray-600 mt-2">Visítanos en nuestras oficinas</p>
        </div>
        <div class="h-96">
          <MapComponent />
        </div>
      </div>

      <!-- Contact Form -->
      <div class="card">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
        
        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
                Nombre *
              </label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="input-field"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
                Apellidos *
              </label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="input-field"
                placeholder="Tus apellidos"
              />
            </div>
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="input-field"
              placeholder="tu@email.com"
            />
          </div>
          
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              class="input-field"
              placeholder="+34 123 456 789"
            />
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
              Asunto *
            </label>
            <select
              id="subject"
              v-model="form.subject"
              required
              class="input-field"
            >
              <option value="">Selecciona un asunto</option>
              <option value="general">Consulta General</option>
              <option value="support">Soporte Técnico</option>
              <option value="feature">Solicitud de Funcionalidad</option>
              <option value="bug">Reporte de Error</option>
              <option value="other">Otro</option>
            </select>
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="input-field resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          
          <div v-if="submitError" class="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-600">{{ submitError }}</p>
          </div>
          
          <div v-if="submitSuccess" class="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-sm text-green-600">{{ submitSuccess }}</p>
          </div>
          
          <button
            type="submit"
            :disabled="submitting"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="submitting" class="flex items-center justify-center">
              <Loader2 class="animate-spin h-4 w-4 mr-2" />
              Enviando...
            </span>
            <span v-else class="flex items-center justify-center">
              <Send class="h-4 w-4 mr-2" />
              Enviar Mensaje
            </span>
          </button>
        </form>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="card">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
      
      <div class="space-y-4">
        <div class="border border-gray-200 rounded-lg">
          <button
            @click="toggleFaq(0)"
            class="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
          >
            <span class="font-medium">¿Cómo puedo registrarme en PokéApp?</span>
            <ChevronDown :class="{ 'rotate-180': openFaq === 0 }" class="h-5 w-5 transition-transform" />
          </button>
          <div v-if="openFaq === 0" class="px-4 pb-3 text-gray-600">
            Puedes registrarte haciendo clic en el botón "Registrarse" en la parte superior de la página y completando el formulario con tu información.
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <button
            @click="toggleFaq(1)"
            class="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
          >
            <span class="font-medium">¿La aplicación es gratuita?</span>
            <ChevronDown :class="{ 'rotate-180': openFaq === 1 }" class="h-5 w-5 transition-transform" />
          </button>
          <div v-if="openFaq === 1" class="px-4 pb-3 text-gray-600">
            Sí, PokéApp es completamente gratuita. Puedes acceder a todas las funcionalidades sin costo alguno.
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <button
            @click="toggleFaq(2)"
            class="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
          >
            <span class="font-medium">¿De dónde provienen los datos de los Pokémon?</span>
            <ChevronDown :class="{ 'rotate-180': openFaq === 2 }" class="h-5 w-5 transition-transform" />
          </button>
          <div v-if="openFaq === 2" class="px-4 pb-3 text-gray-600">
            Todos los datos de los Pokémon provienen de PokeAPI, una API pública y gratuita que proporciona información actualizada sobre todos los Pokémon.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPin, Phone, Mail, Send, Loader2, ChevronDown } from 'lucide-vue-next'
import MapComponent from '../components/MapComponent.vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const submitError = ref('')
const submitSuccess = ref('')
const openFaq = ref<number | null>(null)

const submitForm = async () => {
  submitting.value = true
  submitError.value = ''
  submitSuccess.value = ''
  
  try {
    // Simulación de envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    submitSuccess.value = 'Mensaje enviado correctamente. Te responderemos pronto.'
    
    // Limpiar formulario
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitError.value = 'Error al enviar el mensaje. Inténtalo de nuevo.'
  } finally {
    submitting.value = false
  }
}

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>
