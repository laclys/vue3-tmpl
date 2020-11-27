import { createApp } from 'vue'
import { Button, message } from 'ant-design-vue'
import App from '@/App.vue'
import router from '@/router'
import 'normalize.css'

const app = createApp(App)

app.use(router)
app.use(Button)
app.config.globalProperties.$message = message

app.mount('#app')
