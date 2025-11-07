
import { createFetch } from '@vueuse/core'

const API = import.meta.env.VITE_BASE_URL

export const useMyFetch = createFetch({
  baseUrl: API,
  // baseUrl: 'http://localhost:3001/api',
  options: {
    async beforeFetch({ options }) {
      const token = localStorage.getItem('token') || ''
      if (token) options.headers.Authorization = `Bearer ${token}`
      return { options }
    },
    onFetchError(ctx) {
      console.log('onFetchError', ctx, ctx.data)
      ctx.error = {
        message: ctx.data ? ctx.data : 'Server error',
        status: ctx.response?.status
      }
      return ctx
    }
  },
  fetchOptions: {
    mode: 'cors'
  },
})

export const useRequest = async (url, options = { method: 'GET' }) => {
  const { method, body, formData } = options
  const { data, error } = await useMyFetch(url,
    {
      method,
      body: body ? JSON.stringify(body) : formData,
      headers: body ? {
        'Content-Type': 'application/json'
      } : {}
    }
  )
  if (error.value) {
    setError(error.value)
  } else {
    return JSON.parse(data.value)
  }
}

const setError = ({ message, status }) => {
  throw new Error(message)
}