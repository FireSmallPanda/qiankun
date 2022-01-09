import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun';
Vue.use(ElementUI);

Vue.config.productionTip = false

let apps = [
  {
    name: 'vue faxian', // 子应用名称
    entry: '//localhost:10000', // 默认会加载这个html解析里面的js动态的执行，因为请求了资源子应用需要支持跨域
    container: '#vue', // 挂在到那个节点上
    activeRule: '/vue', // 访问某个URL的时候将这个端口号挂在到这个上去
    props:{userInfo:sessionStorage.getItem('userInfo')}  // 获取主应用的用户信息
  },
  {
    name: 'react exam', 
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
  },
 
];
registerMicroApps(apps); // 注册应用
start({
  prefetch: false // 取消预加载 
}); // 开启




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
