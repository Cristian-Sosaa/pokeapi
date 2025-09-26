import { ref, computed } from "vue"
import type { User } from "../types"

// Store simple para autenticación (simulado)
const user = ref<User | null>(null)
const isAuthenticated = computed(() => user.value !== null)

export const useAuthStore = () => {
  const login = async (email: string, password: string) => {
    // Simulación de login - en producción conectar con API real
    if (email && password) {
      user.value = {
        id: 1,
        username: email.split("@")[0],
        email: email,
      }
      localStorage.setItem("user", JSON.stringify(user.value))
      return { success: true }
    }
    return { success: false, error: "Credenciales inválidas" }
  }

  const register = async (username: string, email: string, password: string) => {
    // Simulación de registro - en producción conectar con API real
    if (username && email && password) {
      user.value = {
        id: Date.now(),
        username: username,
        email: email,
      }
      localStorage.setItem("user", JSON.stringify(user.value))
      return { success: true }
    }
    return { success: false, error: "Datos inválidos" }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem("user")
  }

  const initAuth = () => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser)
      } catch (error) {
        console.error("Error parsing saved user:", error)
        localStorage.removeItem("user")
      }
    }
  }

  return {
    user: computed(() => user.value),
    isAuthenticated,
    login,
    register,
    logout,
    initAuth,
  }
}
