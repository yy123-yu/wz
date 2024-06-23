import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import Nav from "@/components/Nav.vue"
import Footer from "@/components/Footer.vue"
import 'element-ui/lib/theme-chalk/index.css'
import wow from "wowjs"
import 'animate.css'
import animated from 'animate.css'
import hevueImgPreview from 'hevue-img-preview'
import 'wowjs/css/libs/animate.css'
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
import router from './router'


Vue.component('Nav',Nav);
Vue.component('Footer',Footer);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(animated)
Vue.use(hevueImgPreview);
Vue.use(VueFullPage);
Vue.prototype.$wow = wow
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
