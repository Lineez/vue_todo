import { createApp } from 'vue'
import App from '@/App'
import components from '@/components/ui'
import directives from '@/directives/index'
import router from '@/router/index'
import store from '@/store'

const app = createApp(App)

// register global ui component
components.forEach((component) => {
    app.component(component.name, component)
})
// register global directives
directives.forEach((directive) => {
    app.directive(directive.name, directive)
})

app.use(router).use(store).mount('#app')
