import './assets/main.css'
import './assets/main.css' // ESmodule 

import { createApp } from 'vue'
import { createPinia } from 'pinia'
@@ -8,7 +8,7 @@ import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(createPinia()) // for state management 
app.use(router)

app.mount('#app')