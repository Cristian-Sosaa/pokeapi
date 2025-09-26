export interface User {
  id: number
  username: string
  email: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

export interface EmailTemplate {
  id: number
  name: string
  description: string
  subject: string
  message: string
}

export interface RecentEmail {
  id: number
  subject: string
  date: string
  recipients: number
  status: string
}

export interface EmailForm {
  sendToAll: boolean
  specificEmails: string
  subject: string
  message: string
  type: string
  priority: string
  scheduleType: string
  scheduleDate: string
  scheduleTime: string
}
