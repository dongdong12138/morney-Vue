import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);    // 全局使用 Nav 组件
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();
window.createTag = (name) => {
  const state = tagListModel.create(name);
  if (state === 'duplicate') window.alert('已存在该标签！');
  if (state === 'success') window.alert('创建成功');
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
