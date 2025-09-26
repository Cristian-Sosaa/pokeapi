<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute w-16 h-16 bg-red-500 rounded-full top-10 left-10 opacity-20 animate-bounce"></div>
      <div class="absolute w-12 h-12 bg-blue-500 rounded-full top-32 right-20 opacity-20 animate-pulse"></div>
      <div class="absolute w-20 h-20 bg-yellow-400 rounded-full bottom-20 left-1/4 opacity-20 animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute bg-green-500 rounded-full top-1/2 right-10 w-14 h-14 opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <div class="container relative z-10 px-4 py-8 mx-auto space-y-8">
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 mb-6 bg-white border-4 border-red-500 rounded-full shadow-lg">
          <span class="text-3xl">📧</span>
        </div>
        <h1 class="mb-4 text-5xl font-black text-white drop-shadow-lg">
          ⚡ POKÉMAIL SENDER ⚡
        </h1>
        <p class="max-w-2xl mx-auto text-xl font-bold text-white/90 drop-shadow">
          🎯 Envía correos épicos a todos los entrenadores Pokémon. ¡Mantén a la comunidad conectada con las últimas aventuras! 🚀
        </p>
      </div>

      <div v-if="!authStore.isAuthenticated" class="max-w-md p-6 mx-auto border-4 border-white shadow-2xl bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl">
        <div class="flex items-center mb-4 space-x-3 text-white">
          <AlertCircle class="w-6 h-6" />
          <span class="font-bold">⚠️ ¡Acceso Restringido!</span>
        </div>
        <p class="mb-4 font-semibold text-white/90">Solo los entrenadores autenticados pueden enviar PokéMails.</p>
        <router-link to="/login" class="inline-flex items-center justify-center w-full px-6 py-3 font-black text-orange-600 transition-all duration-200 transform bg-white shadow-lg rounded-xl hover:bg-gray-100 hover:scale-105">
          🔑 Iniciar Sesión de Entrenador
        </router-link>
      </div>

      <template v-else>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div class="space-y-6 lg:col-span-2">
            <div class="p-8 bg-white border-4 border-red-500 shadow-2xl rounded-2xl">
              <div class="flex items-center mb-6 space-x-3">
                <div class="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                  <span class="font-bold text-white">✉️</span>
                </div>
                <h2 class="text-3xl font-black text-gray-800">Componer PokéMail</h2>
              </div>
              
              <form @submit.prevent="sendEmail" class="space-y-6">
                <div class="space-y-3">
  <div class="flex items-center space-x-3">
    <input
      id="all-users"
      v-model="emailForm.sendToAll"
      type="checkbox"
      class="w-5 h-5 text-blue-600 border-2 border-blue-500 rounded focus:ring-blue-500 focus:ring-2"
    />
    <label for="all-users" class="font-bold text-gray-700">
       Enviar emails a todos los entranadores
    </label>
  </div>
  
  <div v-if="!emailForm.sendToAll" class="ml-8">
    <label for="specific-emails" class="block mb-2 text-sm font-bold text-gray-700">
       Correos específicos (separados por comas)
    </label>
    <textarea
      id="specific-emails"
      v-model="emailForm.specificEmails"
      rows="3"
      class="w-full px-4 py-3 font-medium border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      placeholder="entrenador1@pokemon.com, entrenador2@pokemon.com, ..."
    ></textarea>
  </div>
</div>
                
                <div>
                  <label for="subject" class="block mb-2 text-lg font-black text-gray-800">
                    Asunto *
                  </label>
                  <input
                    id="subject"
                    v-model="emailForm.subject"
                    type="text"
                    required
                    class="w-full px-4 py-3 text-lg font-bold border-4 border-yellow-400 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                    placeholder=" Asunto épico del PokéMail"
                  />
                </div>
                
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>

                  </div>
                  
    
                </div>
                
                <div>
                  <label for="message" class="block mb-2 text-lg font-black text-gray-800">
                    Mensaje *
                  </label>
                  <div class="overflow-hidden bg-white border-4 border-red-400 rounded-xl">
                    <div class="flex p-3 space-x-2 bg-gradient-to-r from-red-500 to-pink-500">
                      <button
                        type="button"
                        @click="formatText('bold')"
                        class="px-3 py-2 font-bold text-white transition-all duration-200 rounded-lg bg-white/20 hover:bg-white/30"
                        title="Negrita"
                      >
                        <Bold class="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        @click="formatText('italic')"
                        class="px-3 py-2 font-bold text-white transition-all duration-200 rounded-lg bg-white/20 hover:bg-white/30"
                        title="Cursiva"
                      >
                        <Italic class="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        @click="insertTemplate('greeting')"
                        class="px-3 py-2 text-xs font-bold text-white transition-all duration-200 rounded-lg bg-white/20 hover:bg-white/30"
                        title="Insertar saludo"
                      >
                        Saludo
                      </button>
                      <button
                        type="button"
                        @click="insertTemplate('signature')"
                        class="px-3 py-2 text-xs font-bold text-white transition-all duration-200 rounded-lg bg-white/20 hover:bg-white/30"
                        title="Insertar firma"
                      >
                         Firma
                      </button>
                    </div>
                    
                    <textarea
                      ref="messageTextarea"
                      v-model="emailForm.message"
                      required
                      rows="10"
                      class="w-full p-4 font-medium text-gray-700 border-0 resize-none focus:ring-0 focus:outline-none"
                      placeholder=" Escribe tu mensaje épico aquí... ¡Haz que cada palabra cuente como un ataque crítico!"
                    ></textarea>
                  </div>
                  <p class="mt-2 text-sm font-semibold text-gray-600">
                    Caracteres: {{ emailForm.message.length }}
                  </p>
                </div>
                
                <div class="p-6 border-4 border-orange-400 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <h3 class="mb-4 text-xl font-black text-gray-800"> Opciones de Envío</h3>
                  <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                      <input
                        id="send-now"
                        v-model="emailForm.scheduleType"
                        type="radio"
                        value="now"
                        class="w-5 h-5 text-orange-600 focus:ring-orange-500 focus:ring-2"
                      />
                      <label for="send-now" class="font-bold text-gray-700">
                         Enviar ahora (¡Ataque inmediato!)
                      </label>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                      <input
                        id="schedule-later"
                        v-model="emailForm.scheduleType"
                        type="radio"
                        value="later"
                        class="w-5 h-5 text-orange-600 focus:ring-orange-500 focus:ring-2"
                      />
                      <label for="schedule-later" class="font-bold text-gray-700">
                        Programar envío (Ataque estratégico)
                      </label>
                    </div>
                    
                    <div v-if="emailForm.scheduleType === 'later'" class="grid grid-cols-2 gap-4 ml-8">
                      <div>
                        <label for="schedule-date" class="block mb-1 text-sm font-bold text-gray-700">
                          Fecha
                        </label>
                        <input
                          id="schedule-date"
                          v-model="emailForm.scheduleDate"
                          type="date"
                          class="w-full px-3 py-2 font-medium border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                          :min="today"
                        />
                      </div>
                      <div>
                        <label for="schedule-time" class="block mb-1 text-sm font-bold text-gray-700">
                          Hora
                        </label>
                        <input
                          id="schedule-time"
                          v-model="emailForm.scheduleTime"
                          type="time"
                          class="w-full px-3 py-2 font-medium border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-if="sendError" class="p-4 border-4 border-red-600 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
                  <p class="font-bold text-white">❌ {{ sendError }}</p>
                </div>
                
                <div v-if="sendSuccess" class="p-4 border-4 border-green-600 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <p class="font-bold text-white">✅ {{ sendSuccess }}</p>
                </div>
                
                <div class="flex space-x-4">
                  <button
                    type="submit"
                    :disabled="sending"
                    class="flex-1 px-6 py-4 font-black text-white transition-all duration-200 transform border-2 border-red-600 shadow-lg bg-gradient-to-r from-red-500 to-pink-500 rounded-xl hover:from-red-600 hover:to-pink-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span v-if="sending" class="flex items-center justify-center">
                      <Loader2 class="w-5 h-5 mr-2 animate-spin" />
                      {{ emailForm.scheduleType === 'now' ? ' Enviando...' : ' Programando...' }}
                    </span>
                    <span v-else class="flex items-center justify-center">
                      <Send class="w-5 h-5 mr-2" />
                      {{ emailForm.scheduleType === 'now' ? ' Enviar PokéMail' : ' Programar Envío' }}
                    </span>
                  </button>
                  
                  <button
                    type="button"
                    @click="saveDraft"
                    :disabled="saving"
                    class="px-6 py-4 font-black text-white transition-all duration-200 transform border-2 border-blue-600 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-blue-600 hover:to-purple-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span v-if="saving" class="flex items-center">
                      <Loader2 class="w-5 h-5 mr-2 animate-spin" />
                       Guardando...
                    </span>
                    <span v-else class="flex items-center">
                      <Save class="w-5 h-5 mr-2" />
                       Guardar Borrador
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="p-6 bg-white border-4 border-yellow-400 shadow-2xl rounded-2xl">
              <div class="flex items-center mb-4 space-x-2">
                <span class="text-2xl"></span>
                <h3 class="text-xl font-black text-gray-800">Vista Previa</h3>
              </div>
              <div class="p-4 text-sm border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div class="mb-2">
                  <strong class="text-blue-600"> Para:</strong> 
                  {{ emailForm.sendToAll ? ` Todos los entrenadores (${userCount})` : ' Entrenadores específicos' }}
                </div>
                <div class="mb-2">
                  <strong class="text-green-600"> Asunto:</strong> {{ emailForm.subject || ' Sin asunto' }}
                </div>
                <div class="mb-2">
                  <strong class="text-purple-600"> Tipo:</strong> {{ getTypeLabel(emailForm.type) }}
                </div>
                <div class="mb-4">
                  <strong class="text-red-600">  Prioridad:</strong> {{ getPriorityLabel(emailForm.priority) }}
                </div>
                <div class="pt-3 border-t-2 border-gray-300">
                  <div v-if="emailForm.message" class="font-medium whitespace-pre-wrap">{{ emailForm.message }}</div>
                  <div v-else class="italic text-gray-400"> Sin mensaje</div>
                </div>
              </div>
            </div>
            
            <div class="p-6 bg-white border-4 border-green-400 shadow-2xl rounded-2xl">
              <div class="flex items-center mb-4 space-x-2">
                <span class="text-2xl"></span>
                <h3 class="text-xl font-black text-gray-800">Plantillas Rápidas</h3>
              </div>
              <div class="space-y-3">
                <button
                  v-for="template in templates"
                  :key="template.id"
                  @click="loadTemplate(template)"
                  class="w-full p-4 text-left transition-all duration-200 transform border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:from-green-100 hover:to-blue-100 hover:scale-105"
                >
                  <div class="text-sm font-black text-gray-800">{{ template.name }}</div>
                  <div class="text-xs font-semibold text-gray-600">{{ template.description }}</div>
                </button>
              </div>
            </div>
            

           
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { AlertCircle, Send, Save, Loader2, Bold, Italic } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'
import emailjs from 'emailjs-com'

// Simulación del servicio de envío de correos, integrado en este mismo archivo
const sendEmailService = async (emailData) => {
  try {
    const userID = 'B5N0EyjFl_hu9A1j6'
    const serviceID = 'service_16h2w8l'
    const templateID = 'template_guw8jr5'

    // Determinar los destinatarios
    const recipients = emailData.sendToAll
      ? ['todos@pokemon.com'] // Simulación de envío a todos
      : emailData.specificEmails.split(',').map(email => email.trim()) // Correos específicos

    // Enviar correos a cada destinatario
    for (const recipient of recipients) {
      const templateParams = {
        to_name: 'Entrenador Pokémon',
        from_name: 'PokéApp Team',
        from_email: 'crissosa6969@gmail.com',
        subject: emailData.subject,
        message: emailData.message,
        recipient_email: recipient,
      }

      await emailjs.send(serviceID, templateID, templateParams, userID)
    }

    return { success: true }
  } catch (error) {
    console.error('Error al enviar correos:', error)
    return { success: false, error }
  }
}

const authStore = useAuthStore()
const emailForm = ref({
  sendToAll: true,
  specificEmails: '',
  subject: '',
  message: '',
  type: 'newsletter',
  priority: 'normal',
  scheduleType: 'now',
  scheduleDate: '',
  scheduleTime: ''
})

const messageTextarea = ref<HTMLTextAreaElement>()
const sending = ref(false)
const saving = ref(false)
const sendError = ref('')
const sendSuccess = ref('')
const userCount = ref(47) // Simulado

const templates = ref([
  {
    id: 1,
    name: '🎉 Bienvenida Épica',
    description: 'Mensaje de bienvenida para nuevos entrenadores',
    subject: '🎊 ¡Bienvenido a PokéApp, Entrenador!',
    message: `¡Hola, futuro Maestro Pokémon! 🌟\n\n¡Bienvenido a PokéApp! Estamos súper emocionados de tenerte en nuestra increíble comunidad de entrenadores.\n\nCon PokéApp podrás:\n🔍 Explorar información detallada de todos los Pokémon\n👥 Conectar con otros entrenadores épicos\n📰 Mantenerte al día with las últimas aventuras\n🎯 ¡Y mucho más!\n\n¡Comienza tu aventura legendaria ahora! 🚀\n\nSaludos épicos,\n⚡ El equipo de PokéApp ⚡`
  },
  {
    id: 2,
    name: '🔥 Actualización Legendaria',
    description: 'Notificación de nuevas funcionalidades épicas',
    subject: '🚀 ¡Nuevas funcionalidades legendarias en PokéApp!',
    message: `¡Hola, Entrenador! 🌟\n\n¡Tenemos noticias ÉPICAS! Hemos añadido funcionalidades legendarias a PokéApp:\n\n🔍 Búsqueda mejorada de Pokémon (¡Más rápida que Pikachu!)\n🏷️ Nuevos filtros de tipo súper efectivos\n✨ Interfaz más intuitiva y colorida\n🎯 Sistema de favoritos mejorado\n\n¡Explora estas mejoras legendarias ahora! 🚀\n\nSaludos épicos,\n⚡ El equipo de PokéApp ⚡`
  }
])

const recentEmails = ref([
  {
    id: 1,
    subject: '📰 Newsletter Semanal Épica',
    date: '2024-01-15',
    recipients: 45,
    status: 'Enviado'
  },
  {
    id: 2,
    subject: '🔄 Actualización v2.1 Legendaria',
    date: '2024-01-10',
    recipients: 47,
    status: 'Enviado'
  }
])

const today = computed(() => {
  return new Date().toISOString().split('T')[0]
})

const sendEmail = async () => {
  sending.value = true
  sendError.value = ''
  sendSuccess.value = ''
  
  try {
    console.log('[v0] Iniciando envío de email...')
    
    if (!emailForm.value.sendToAll && !emailForm.value.specificEmails.trim()) {
      throw new Error('🎯 Debes especificar destinatarios para tu PokéMail')
    }
    
    if (emailForm.value.scheduleType === 'later' && (!emailForm.value.scheduleDate || !emailForm.value.scheduleTime)) {
      throw new Error('⏰ Debes especificar fecha y hora para el envío programado')
    }

    console.log('[v0] Validaciones pasadas, enviando con EmailJS...')
    
    const result = await sendEmailService(emailForm.value)
    
    if (result.success) {
      const action = emailForm.value.scheduleType === 'now' ? 'enviado' : 'programado'
      const recipients = emailForm.value.sendToAll ? userCount.value : emailForm.value.specificEmails.split(',').length
      
      sendSuccess.value = `🎉 ¡PokéMail ${action} correctamente a ${recipients} entrenadores usando EmailJS! ¡Misión completada!`
      
      console.log('[v0] Email enviado exitosamente:', result)
      
      emailForm.value = {
        sendToAll: true,
        specificEmails: '',
        subject: '',
        message: '',
        type: 'newsletter',
        priority: 'normal',
        scheduleType: 'now',
        scheduleDate: '',
        scheduleTime: ''
      }
    } else {
      throw new Error(result.message)
    }
    
  } catch (error) {
    console.error('[v0] Error en sendEmail:', error)
    sendError.value = error instanceof Error ? error.message : '💥 Error al enviar el PokéMail'
  } finally {
    sending.value = false
  }
}

const saveDraft = async () => {
  saving.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    sendSuccess.value = '💾 ¡Borrador guardado correctamente! ¡Listo para enviar cuando quieras!'
  } catch (error) {
    sendError.value = '💥 Error al guardar el borrador'
  } finally {
    saving.value = false
  }
}

const loadTemplate = (template: any) => {
  emailForm.value.subject = template.subject
  emailForm.value.message = template.message
}

const formatText = (format: string) => {
  if (!messageTextarea.value) return
  
  const textarea = messageTextarea.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = textarea.value.substring(start, end)
  
  if (selectedText) {
    let formattedText = ''
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`
        break
      case 'italic':
        formattedText = `*${selectedText}*`
        break
    }
    
    const newValue = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end)
    emailForm.value.message = newValue
  }
}

const insertTemplate = (type: string) => {
  let template = ''
  switch (type) {
    case 'greeting':
      template = '¡Hola, Entrenador Pokémon! 🌟\n\n'
      break
    case 'signature':
      template = '\n\nSaludos épicos,\n⚡ El equipo de PokéApp ⚡'
      break
  }
  
  emailForm.value.message += template
}

const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    newsletter: '📰 Newsletter',
    announcement: '📢 Anuncio',
    update: '🔄 Actualización',
    promotion: '🎁 Promoción',
    maintenance: '🔧 Mantenimiento'
  }
  return labels[type] || type
}

const getPriorityLabel = (priority: string): string => {
  const labels: Record<string, string> = {
    low: '🟢 Baja',
    normal: '🟡 Normal',
    high: '🟠 Alta',
    urgent: '🔴 Urgente'
  }
  return labels[priority] || priority
}

onMounted(() => {
  const now = new Date()
  emailForm.value.scheduleDate = now.toISOString().split('T')[0]
  emailForm.value.scheduleTime = now.toTimeString().slice(0, 5)
})
</script>