// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import 'common/stylus/index.styl';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
Vue.config.productionTip = false;

/* eslint-disable no-new */
fastclick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
