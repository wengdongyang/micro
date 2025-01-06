import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const dataListener = (data) => {
  try {
    console.error('dataListener', data)
    if (data.token) {
      sessionStorage.setItem(TOKEN, data.token)
      store.commit('SET_TOKEN', data.token)
    }
    if (data.baseURL) {
      store.commit('SET_SYSTEM_BASE_URL', data.baseURL)
      sessionStorage.setItem(BASE_REQUEST_URL, data.baseURL)
    }
    if (data.microAppId) {
      store.commit('SET_SYSTEM_MICRO_APP_ID', data.microAppId)
    }

    // SET_SYSTEM_MICRO_APP_ID
    // 设置宽度
    store.commit('SET_SYSTEM_COLLAPSED', Boolean(data.collapsed))
  } catch (error) {
    console.warn(error)
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
