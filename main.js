import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'http://127.0.0.1:5000/api/v1/store';
Vue.prototype.$TOKEN_NAME = 'Authorization';
Vue.prototype.$UNION_ISD = 'union_id';`
Vue.prototype.$STORE_ID = 'STORE_ID';`

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
