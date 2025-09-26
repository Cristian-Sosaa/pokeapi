<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Envío de Correos
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Envía correos electrónicos a usuarios registrados de PokéApp. Mantén a la comunidad informada sobre novedades y actualizaciones.
      </p>
    </div>

    <!-- Authentication Check -->
    <div v-if="!authStore.isAuthenticated" class="card bg-yellow-50 border-yellow-200">
      <div class="flex items-center space-x-2 text-yellow-700">
        <AlertCircle class="h-5 w-5" />
        <span>Debes iniciar sesión para acceder a esta funcionalidad.</span>
      </div>
      <div class="mt-4">
        <router-link to="/login" class="btn-primary">
          Iniciar Sesión
        </router-link>
      </div>
    </div>

    <template v-else>
      <!-- Email Composition Form -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Form -->
        <div class="lg:col-span-2 space-y-6">
          <div class="card">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Componer Correo</h2>
            
            <form @submit.prevent="sendEmail" class="space-y-4">
              <!-- Recipients Section -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Destinatarios
                </label>
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <input
                      id="all-users"
                      v-model="emailForm.sendToAll"
                      type="checkbox"
                      class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label for="all-users" class="text-sm text-gray-700">
                      Enviar a todos los usuarios registrados ({{ userCount }} usuarios)
                    </label>
                  </div>
                  
                  <div v-if="!emailForm.sendToAll">
                    <label for="specific-emails" class="block text-sm font-medium text-gray-700 mb-1">
                      Correos específicos (separados por comas)
                    </label>
                    <textarea
                      id="specific-emails"
                      v-model="emailForm.specificEmails"
                      rows="3"
                      class="input-field resize-none"
                      placeholder="usuario1@email.com, usuario2@email.com, ..."
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <input
                  id="subject"
                  v-model="emailForm.subject"
                  type="text"
                  required
                  class="input-field"
                  placeholder="Asunto del correo"
                />
              </div>
              
              <!-- Email Type -->
              <div>
                <label for="email-type" class="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Correo
                </label>
                <select
                  id="email-type"
                  v-model="emailForm.type"
                  class="input-field"
                >
                  <option value="newsletter">Newsletter</option>
                  <option value="announcement">Anuncio</option>
                  <option value="update">Actualización</option>
                  <option value="promotion">Promoción</option>
                  <option value="maintenance">Mantenimiento</option>
                </select>
              </div>
              
              <!-- Priority -->
              <div>
                <label for="priority" class="block text-sm font-medium text-gray-700 mb-1">
                  Prioridad
                </label>
                <select
                  id="priority"
                  v-model="emailForm.priority"
                  class="input-field"
                >
                  <option value="low">Baja</option>
                  <option value="normal">Normal</option>
                  <option value="high">Alta</option>
                  <option value="urgent">Urgente</option>
                </select>
              </div>
              
              <!-- Message Content -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <div class="border border-gray-300 rounded-lg">
                  <!-- Toolbar -->
                  <div class="border-b border-gray-200 p-2 flex space-x-2">
                    <button
                      type="button"
                      @click="formatText('bold')"
                      class="p-2 hover:bg-gray-100 rounded"
                      title="Negrita"
                    >
                      <Bold class="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      @click="formatText('italic')"
                      class="p-2 hover:bg-gray-100 rounded"
                      title="Cursiva"
                    >
                      <Italic class="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      @click="insertTemplate('greeting')"
                      class="p-2 hover:bg-gray-100 rounded text-xs"
                      title="Insertar saludo"
                    >
                      Saludo
                    </button>
                    <button
                      type="button"
                      @click="insertTemplate('signature')"
                      class="p-2 hover:bg-gray-100 rounded text-xs"
                      title="Insertar firma"
                    >
                      Firma
                    </button>
                  </div>
                  
                  <!-- Text Area -->
                  <textarea
                    ref="messageTextarea"
                    v-model="emailForm.message"
                    required
                    rows="10"
                    class="w-full p-3 border-0 focus:ring-0 focus:outline-none resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <p class="text-xs text-gray-500 mt-1">
                  Caracteres: {{ emailForm.message.length }}
                </p>
              </div>
              
              <!-- Schedule Options -->
              <div class="border border-gray-200 rounded-lg p-4">
                <h3 class="font-medium text-gray-900 mb-3">Opciones de Envío</h3>
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <input
                      id="send-now"
                      v-model="emailForm.scheduleType"
                      type="radio"
                      value="now"
                      class="text-primary-600 focus:ring-primary-500"
                    />
                    <label for="send-now" class="text-sm text-gray-700">
                      Enviar ahora
                    </label>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <input
                      id="schedule-later"
                      v-model="emailForm.scheduleType"
                      type="radio"
                      value="later"
                      class="text-primary-600 focus:ring-primary-500"
                    />
                    <label for="schedule-later" class="text-sm text-gray-700">
                      Programar envío
                    </label>
                  </div>
                  
                  <div v-if="emailForm.scheduleType === 'later'" class="ml-6 grid grid-cols-2 gap-4">
                    <div>
                      <label for="schedule-date" class="block text-xs text-gray-600 mb-1">
                        Fecha
                      </label>
                      <input
                        id="schedule-date"
                        v-model="emailForm.scheduleDate"
                        type="date"
                        class="input-field text-sm"
                        :min="today"
                      />
                    </div>
                    <div>
                      <label for="schedule-time" class="block text-xs text-gray-600 mb-1">
                        Hora
                      </label>
                      <input
                        id="schedule-time"
                        v-model="emailForm.scheduleTime"
                        type="time"
                        class="input-field text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Error/Success Messages -->
              <div v-if="sendError" class="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-sm text-red-600">{{ sendError }}</p>
              </div>
              
              <div v-if="sendSuccess" class="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p class="text-sm text-green-600">{{ sendSuccess }}</p>
              </div>
              
              <!-- Submit Buttons -->
              <div class="flex space-x-4">
                <button
                  type="submit"
                  :disabled="sending"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="sending" class="flex items-center">
                    <Loader2 class="animate-spin h-4 w-4 mr-2" />
                    {{ emailForm.scheduleType === 'now' ? 'Enviando...' : 'Programando...' }}
                  </span>
                  <span v-else class="flex items-center">
                    <Send class="h-4 w-4 mr-2" />
                    {{ emailForm.scheduleType === 'now' ? 'Enviar Correo' : 'Programar Envío' }}
                  </span>
                </button>
                
                <button
                  type="button"
                  @click="saveDraft"
                  :disabled="saving"
                  class="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="saving" class="flex items-center">
                    <Loader2 class="animate-spin h-4 w-4 mr-2" />
                    Guardando...
                  </span>
                  <span v-else class="flex items-center">
                    <Save class="h-4 w-4 mr-2" />
                    Guardar Borrador
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Preview -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Vista Previa</h3>
            <div class="border border-gray-200 rounded-lg p-4 bg-gray-50 text-sm">
              <div class="mb-2">
                <strong>Para:</strong> 
                {{ emailForm.sendToAll ? `Todos los usuarios (${userCount})` : 'Usuarios específicos' }}
              </div>
              <div class="mb-2">
                <strong>Asunto:</strong> {{ emailForm.subject || 'Sin asunto' }}
              </div>
              <div class="mb-2">
                <strong>Tipo:</strong> {{ getTypeLabel(emailForm.type) }}
              </div>
              <div class="mb-4">
                <strong>Prioridad:</strong> {{ getPriorityLabel(emailForm.priority) }}
              </div>
              <div class="border-t border-gray-300 pt-2">
                <div v-if="emailForm.message" class="whitespace-pre-wrap">{{ emailForm.message }}</div>
                <div v-else class="text-gray-400 italic">Sin mensaje</div>
              </div>
            </div>
          </div>
          
          <!-- Templates -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Plantillas Rápidas</h3>
            <div class="space-y-2">
              <button
                v-for="template in templates"
                :key="template.id"
                @click="loadTemplate(template)"
                class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div class="font-medium text-sm">{{ template.name }}</div>
                <div class="text-xs text-gray-500">{{ template.description }}</div>
              </button>
            </div>
          </div>
          
          <!-- Recent Emails -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Correos Recientes</h3>
            <div class="space-y-2">
              <div
                v-for="email in recentEmails"
                :key="email.id"
                class="p-3 border border-gray-200 rounded-lg"
              >
                <div class="font-medium text-sm">{{ email.subject }}</div>
                <div class="text-xs text-gray-500">{{ email.date }} • {{ email.recipients }} destinatarios</div>
                <div class="text-xs text-gray-400">{{ email.status }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { AlertCircle, Send, Save, Loader2, Bold, Italic } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth'

// Todos los refs deben declararse primero
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
    name: 'Bienvenida',
    description: 'Mensaje de bienvenida para nuevos usuarios',
    subject: '¡Bienvenido a PokéApp!',
    message: `¡Hola!\n\n¡Bienvenido a PokéApp! Estamos emocionados de tenerte en nuestra comunidad.\n\nCon PokéApp podrás:\n- Explorar información detallada de todos los Pokémon\n- Conectar con otros entrenadores\n- Mantenerte al día con las últimas novedades\n\n¡Comienza tu aventura ahora!\n\nSaludos,\nEl equipo de PokéApp`
  },
  {
    id: 2,
    name: 'Actualización',
    description: 'Notificación de nuevas funcionalidades',
    subject: 'Nuevas funcionalidades en PokéApp',
    message: `¡Hola!\n\nTenemos grandes noticias. Hemos añadido nuevas funcionalidades a PokéApp:\n\n- Búsqueda mejorada de Pokémon\n- Nuevos filtros de tipo\n- Interfaz más intuitiva\n\n¡Explora estas mejoras ahora!\n\nSaludos,\nEl equipo de PokéApp`
  }
])

const recentEmails = ref([
  {
    id: 1,
    subject: 'Newsletter Semanal',
    date: '2024-01-15',
    recipients: 45,
    status: 'Enviado'
  },
  {
    id: 2,
    subject: 'Actualización v2.1',
    date: '2024-01-10',
    recipients: 47,
    status: 'Enviado'
  }
])

// Store después de todos los refs
const authStore = useAuthStore()

// Computed properties después del store
const today = computed(() => {
  return new Date().toISOString().split('T')[0]
})

// Funciones regulares después de computed
const sendEmail = async () => {
  sending.value = true
  sendError.value = ''
  sendSuccess.value = ''
  
  try {
    // Validaciones
    if (!emailForm.value.sendToAll && !emailForm.value.specificEmails.trim()) {
      throw new Error('Debes especificar destinatarios')
    }
    
    if (emailForm.value.scheduleType === 'later' && (!emailForm.value.scheduleDate || !emailForm.value.scheduleTime)) {
      throw new Error('Debes especificar fecha y hora para el envío programado')
    }
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const action = emailForm.value.scheduleType === 'now' ? 'enviado' : 'programado'
    const recipients = emailForm.value.sendToAll ? userCount.value : emailForm.value.specificEmails.split(',').length
    
    sendSuccess.value = `Correo ${action} correctamente a ${recipients} destinatarios.`
    
    // Limpiar formulario
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
    
  } catch (error) {
    sendError.value = error instanceof Error ? error.message : 'Error al enviar el correo'
  } finally {
    sending.value = false
  }
}

const saveDraft = async () => {
  saving.value = true
  
  try {
    // Simulación de guardado
    await new Promise(resolve => setTimeout(resolve, 1000))
    sendSuccess.value = 'Borrador guardado correctamente.'
  } catch (error) {
    sendError.value = 'Error al guardar el borrador'
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
      template = '¡Hola!\n\n'
      break
    case 'signature':
      template = '\n\nSaludos,\nEl equipo de PokéApp'
      break
  }
  
  emailForm.value.message += template
}

const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    newsletter: 'Newsletter',
    announcement: 'Anuncio',
    update: 'Actualización',
    promotion: 'Promoción',
    maintenance: 'Mantenimiento'
  }
  return labels[type] || type
}

const getPriorityLabel = (priority: string): string => {
  const labels: Record<string, string> = {
    low: 'Baja',
    normal: 'Normal',
    high: 'Alta',
    urgent: 'Urgente'
  }
  return labels[priority] || priority
}

// Lifecycle hooks al final
onMounted(() => {
  // Inicializar fecha y hora actuales para programación
  const now = new Date()
  emailForm.value.scheduleDate = now.toISOString().split('T')[0]
  emailForm.value.scheduleTime = now.toTimeString().slice(0, 5)
})
</script>
