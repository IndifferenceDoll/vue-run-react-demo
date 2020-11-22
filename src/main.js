import Vue from 'vue';
import { VuePlugin } from 'vuera'
import vueComp from './vueComp/index.vue'


Vue.use(VuePlugin)

new Vue({
  el: '#app',
  render: h => h(vueComp),
});