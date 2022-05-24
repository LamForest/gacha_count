import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.css'
// import 'element-plus/theme-chalk/index.css'
// eslint-disable-next-line 
import {VueLogger, vlOptions} from './utils/logger'
import { store, key } from './store/store'
const app = createApp(App)
app.use(VueLogger, vlOptions)
app.use(store, key)
// app.use(naive)
app.use(ElementPlus)
app.mount("#app");
