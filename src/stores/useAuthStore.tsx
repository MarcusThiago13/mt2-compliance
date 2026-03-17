import React, { createContext, useContext, useState } from 'react'

export type Role = 'SUPER_ADMIN' | 'EDITOR' | 'VIEWER'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  tenantId?: string
}

interface AuthState {
  user: User | null
  currentTenantId: string | null
  login: (u: User) => void
  logout: () => void
  setTenant: (id: string | null) => void
}

const AuthContext = createContext<AuthState | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [currentTenantId, setCurrentTenantId] = useState<string | null>(null)

  const login = (u: User) => {
    setUser(u)
    if (u.tenantId) setCurrentTenantId(u.tenantId)
  }

  const logout = () => {
    setUser(null)
    setCurrentTenantId(null)
  }

  const setTenant = (id: string | null) => setCurrentTenantId(id)

  return (
    <AuthContext.Provider value={{ user, currentTenantId, login, logout, setTenant }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuthStore() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthStore must be used within AuthProvider')
  return ctx
}
