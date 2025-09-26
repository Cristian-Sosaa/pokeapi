<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute flex items-center justify-center w-32 h-32 bg-white rounded-full top-10 left-10 opacity-10">
        <div class="w-16 h-16 bg-red-500 rounded-full"></div>
      </div>
      <div class="absolute flex items-center justify-center w-24 h-24 bg-white rounded-full top-40 right-20 opacity-10">
        <div class="w-12 h-12 bg-red-500 rounded-full"></div>
      </div>
      <div class="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full bottom-20 left-1/4 opacity-10">
        <div class="w-10 h-10 bg-red-500 rounded-full"></div>
      </div>
    </div>

    <div class="container relative z-10 px-4 py-12 mx-auto space-y-12">
  
      <div class="text-center">
        <div class="inline-block p-4 mb-6 bg-white border-4 border-yellow-400 rounded-full shadow-2xl">
          <div class="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600">
            <div class="w-8 h-8 bg-white border-2 border-gray-800 rounded-full"></div>
            <div class="absolute left-0 right-0 h-1 transform -translate-y-1/2 bg-gray-800 top-1/2"></div>
          </div>
        </div>
        <h1 class="mb-6 text-6xl font-black text-white drop-shadow-lg">
          ¡Contáctanos! 📞
        </h1>
        <p class="max-w-3xl mx-auto text-xl font-bold text-white drop-shadow-md">
          ¿Tienes preguntas sobre Pokémon? ¡Nos encantaría escucharte, entrenador! 
          Encuentra nuestra ubicación y ponte en contacto con nosotros.
        </p>
      </div>

     
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="p-8 text-center transition-all duration-300 transform border-4 border-yellow-300 shadow-2xl bg-gradient-to-br from-red-400 to-red-600 rounded-3xl hover:scale-105 hover:shadow-yellow-400/50">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white border-4 border-yellow-400 rounded-full shadow-xl">
            <MapPin class="w-10 h-10 text-red-600" />
          </div>
          <h3 class="mb-4 text-2xl font-black text-white">📍 Ubicación</h3>
          <p class="text-lg font-bold text-white">
            123 Pokémon Street<br />
            Ciudad Pokémon, CP 12345<br />
            Región Kanto 🏙️
          </p>
        </div>
        
        <div class="p-8 text-center transition-all duration-300 transform border-4 border-yellow-300 shadow-2xl bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl hover:scale-105 hover:shadow-yellow-400/50">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white border-4 border-yellow-400 rounded-full shadow-xl">
            <Phone class="w-10 h-10 text-blue-600" />
          </div>
          <h3 class="mb-4 text-2xl font-black text-white">📱 Teléfono</h3>
          <p class="text-lg font-bold text-white">
            +34 123 456 789<br />
            Lunes a Viernes<br />
            9:00 - 18:00 ⏰
          </p>
        </div>
        
        <div class="p-8 text-center transition-all duration-300 transform border-4 border-red-400 shadow-2xl bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl hover:scale-105 hover:shadow-red-400/50">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white border-4 border-red-400 rounded-full shadow-xl">
            <Mail class="w-10 h-10 text-orange-600" />
          </div>
          <h3 class="mb-4 text-2xl font-black text-white">✉️ Email</h3>
          <p class="text-lg font-bold text-white">
            info@pokeapp.com<br />
            soporte@pokeapp.com<br />
            Respuesta en 24h ⚡
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div class="overflow-hidden transition-all duration-300 transform bg-white border-4 border-blue-400 shadow-2xl rounded-3xl hover:scale-105">
          <div class="p-8 border-b-4 border-yellow-400 bg-gradient-to-r from-blue-500 to-blue-600">
            <h2 class="text-3xl font-black text-white">🗺️ Nuestra Ubicación</h2>
            <p class="mt-2 text-lg font-bold text-blue-100">¡Visítanos en nuestro Centro Pokémon!</p>
          </div>
          <div class="relative h-96">
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.709524573451!2d-89.1965569249111!3d13.675418686708525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63311954327075%3A0x28682274f5650dd1!2sUniversidad%20Luterana%20Salvadore%C3%B1a!5e0!3m2!1ses-419!2ssv!4v1758859552821!5m2!1ses-419!2ssv"
              width="100%"
              height="1000"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-b-3xl"
            ></iframe>
            <div class="absolute max-w-xs p-4 bg-white border-4 border-red-400 shadow-xl top-4 left-4 rounded-2xl">
              <div class="flex items-center space-x-3">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600">
                  <MapPin class="w-6 h-6 text-white" />
                </div>
                <div>
                  <p class="text-sm font-black text-gray-800">🏢 Centro Pokémon</p>
                  <p class="text-xs font-bold text-gray-600">Universidad Luterana Salvadoreña</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-8 bg-white border-4 border-red-400 shadow-2xl rounded-3xl">
          <div class="mb-8 text-center">
            <div class="inline-block p-3 mb-4 border-4 border-yellow-400 rounded-full shadow-xl bg-gradient-to-br from-red-500 to-red-600">
              <Send class="w-8 h-8 text-white" />
            </div>
            <h2 class="text-3xl font-black text-gray-800">💌 Envíanos un Mensaje</h2>
          </div>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label for="firstName" class="block mb-2 text-lg font-black text-gray-800">
                  👤 Nombre *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 text-lg font-bold transition-all duration-300 border-4 border-blue-300 rounded-2xl focus:border-yellow-400 focus:outline-none bg-blue-50"
                  placeholder="Tu nombre de entrenador"
                />
              </div>
              
              <div>
                <label for="lastName" class="block mb-2 text-lg font-black text-gray-800">
                  👥 Apellidos *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 text-lg font-bold transition-all duration-300 border-4 border-blue-300 rounded-2xl focus:border-yellow-400 focus:outline-none bg-blue-50"
                  placeholder="Tus apellidos"
                />
              </div>
            </div>
            
            <div>
              <label for="email" class="block mb-2 text-lg font-black text-gray-800">
                📧 Correo Electrónico *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 text-lg font-bold transition-all duration-300 border-4 border-blue-300 rounded-2xl focus:border-yellow-400 focus:outline-none bg-blue-50"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label for="phone" class="block mb-2 text-lg font-black text-gray-800">
                📞 Teléfono
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 text-lg font-bold transition-all duration-300 border-4 border-blue-300 resize-none rounded-2xl focus:border-yellow-400 focus:outline-none bg-blue-50"
                placeholder="+34 123 456 789"
              />
            </div>
            
            <div>
              <label for="subject" class="block mb-2 text-lg font-black text-gray-800">
                📋 Asunto *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 text-lg font-bold transition-all duration-300 border-4 border-blue-300 rounded-2xl focus:border-yellow-400 focus:outline-none bg-blue-50"
              >
                <option value="">Selecciona un asunto</option>
                <option value="general">🤔 Consulta General</option>
                <option value="support">🔧 Soporte Técnico</option>
                <option value="feature">⭐ Solicitud de Funcionalidad</option>
                <option value="bug">🐛 Reporte de Error</option>
                <option value="other">❓ Otro</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block mb-2 text-lg font-black text-gray-800">
                💬 Mensaje *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 text-lg font-bold transition-all duration-300 border-4 border-blue-300 resize-none rounded-2xl focus:border-yellow-400 focus:outline-none bg-blue-50"
                placeholder="Escribe tu mensaje aquí, entrenador..."
              ></textarea>
            </div>
            
            <div v-if="submitError" class="p-4 bg-red-100 border-4 border-red-400 rounded-2xl">
              <p class="text-lg font-bold text-red-700">❌ {{ submitError }}</p>
            </div>
            
            <div v-if="submitSuccess" class="p-4 bg-green-100 border-4 border-green-400 rounded-2xl">
              <p class="text-lg font-bold text-green-700">✅ {{ submitSuccess }}</p>
            </div>
            
            <button
              type="submit"
              :disabled="submitting"
              class="w-full px-8 py-4 text-xl font-black text-white transition-all duration-300 transform border-4 border-yellow-400 shadow-2xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-yellow-400/50"
            >
              <span v-if="submitting" class="flex items-center justify-center">
                <Loader2 class="w-6 h-6 mr-3 animate-spin" />
                🚀 Enviando...
              </span>
              <span v-else class="flex items-center justify-center">
                <Send class="w-6 h-6 mr-3" />
                📤 Enviar Mensaje
              </span>
            </button>
          </form>
        </div>
      </div>

       FAQ Section 
      <div class="p-8 bg-white border-4 border-purple-400 shadow-2xl rounded-3xl">
        <div class="mb-8 text-center">
          <div class="inline-block p-3 mb-4 border-4 border-yellow-400 rounded-full shadow-xl bg-gradient-to-br from-purple-500 to-purple-600">
            <ChevronDown class="w-8 h-8 text-white" />
          </div>
          <h2 class="text-3xl font-black text-gray-800">❓ Preguntas Frecuentes</h2>
        </div>
        
        <div class="space-y-4">
          <div class="overflow-hidden border-4 border-blue-300 shadow-lg rounded-2xl">
            <button
              @click="toggleFaq(0)"
              class="flex items-center justify-between w-full px-6 py-4 text-left transition-all duration-300 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300"
            >
              <span class="text-lg font-black text-gray-800">🔐 ¿Cómo puedo registrarme en PokéApp?</span>
              <ChevronDown :class="{ 'rotate-180': openFaq === 0 }" class="w-6 h-6 text-blue-600 transition-transform" />
            </button>
            <div v-if="openFaq === 0" class="px-6 py-4 text-lg font-bold text-gray-700 border-t-4 border-blue-300 bg-blue-50">
              Puedes registrarte haciendo clic en el botón "Registrarse" en la parte superior de la página y completando el formulario con tu información de entrenador. ¡Es súper fácil! 🎮
            </div>
          </div>
          
          <div class="overflow-hidden border-4 border-green-300 shadow-lg rounded-2xl">
            <button
              @click="toggleFaq(1)"
              class="flex items-center justify-between w-full px-6 py-4 text-left transition-all duration-300 bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300"
            >
              <span class="text-lg font-black text-gray-800">💰 ¿La aplicación es gratuita?</span>
              <ChevronDown :class="{ 'rotate-180': openFaq === 1 }" class="w-6 h-6 text-green-600 transition-transform" />
            </button>
            <div v-if="openFaq === 1" class="px-6 py-4 text-lg font-bold text-gray-700 border-t-4 border-green-300 bg-green-50">
              ¡Sí! PokéApp es completamente gratuita. Puedes acceder a todas las funcionalidades sin costo alguno. ¡Como un verdadero entrenador Pokémon! 🆓
            </div>
          </div>
          
          <div class="overflow-hidden border-4 border-yellow-300 shadow-lg rounded-2xl">
            <button
              @click="toggleFaq(2)"
              class="flex items-center justify-between w-full px-6 py-4 text-left transition-all duration-300 bg-gradient-to-r from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300"
            >
              <span class="text-lg font-black text-gray-800">📊 ¿De dónde provienen los datos de los Pokémon?</span>
              <ChevronDown :class="{ 'rotate-180': openFaq === 2 }" class="w-6 h-6 text-yellow-600 transition-transform" />
            </button>
            <div v-if="openFaq === 2" class="px-6 py-4 text-lg font-bold text-gray-700 border-t-4 border-yellow-300 bg-yellow-50">
              Todos los datos de los Pokémon provienen de PokeAPI, una API pública y gratuita que proporciona información actualizada sobre todos los Pokémon. ¡Datos oficiales y confiables! 📈
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPin, Phone, Mail, Send, Loader2, ChevronDown } from 'lucide-vue-next'

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
    
    submitSuccess.value = '¡Mensaje enviado correctamente, entrenador! Te responderemos pronto. 🎉'
    
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
    submitError.value = 'Error al enviar el mensaje. ¡Inténtalo de nuevo, entrenador!'
  } finally {
    submitting.value = false
  }
}

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>
