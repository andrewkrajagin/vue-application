import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import store from './store/store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
