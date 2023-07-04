import Cookies from 'js-cookie'

export function getToken() {
  if (import.meta.env.VITE_TOKEN_MODE === 'cookie') {
    return Cookies.get(import.meta.env.VITE_TOKEN_KEY)
  } else if (import.meta.env.VITE_TOKEN_MODE === 'localStorage') {
    return localStorage.getItem(import.meta.env.VITE_TOKEN_KEY)
  } else if (import.meta.env.VITE_TOKEN_MODE === 'sessionStorage') {
    return sessionStorage.getItem(import.meta.env.VITE_TOKEN_KEY)
  }
}

export function setToken(token) {
  if (import.meta.env.VITE_TOKEN_MODE === 'cookie') {
    return Cookies.set(import.meta.env.VITE_TOKEN_KEY, token)
  } else if (import.meta.env.VITE_TOKEN_MODE === 'localStorage') {
    return localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, token)
  } else if (import.meta.env.VITE_TOKEN_MODE === 'sessionStorage') {
    return sessionStorage.setItem(import.meta.env.VITE_TOKEN_KEY, token)
  }
}

export function removeToken() {
  if (import.meta.env.VITE_TOKEN_MODE === 'cookie') {
    return Cookies.remove(import.meta.env.VITE_TOKEN_KEY)
  } else if (import.meta.env.VITE_TOKEN_MODE === 'localStorage') {
    return localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY)
  } else if (import.meta.env.VITE_TOKEN_MODE === 'sessionStorage') {
    return sessionStorage.removeItem(import.meta.env.VITE_TOKEN_KEY)
  }
}
