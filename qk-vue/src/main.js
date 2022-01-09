
import Vue from 'vue'
import App from './App.vue'
import router from './router';

let instance = null;

function render(){
  instance = new Vue({
    router,
    // store // 也可以传递父应用的vuex
    render: h => h(App),
  }).$mount('#app') // 这里是挂载到自己的html中，.基座会拿到这个挂载后的html将其插入进去
}


// 使用 webpack 运行时 publicPath 配置
if(window.__POWERED_BY_QIANKUN__){ // 动态添加public_path
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) { // 默认独立运行
  render();
}

// 子组件协议
/**
 * 启动时
 *
 */
export async function bootstrap(){}
/**
 * 创建时
 * @param {*} props 
 */
export async function mount(props){
  
  if(props.userInfo){
    window.sessionStorage.setItem('userInfo',props.userInfo);
  }
  render(props)
}
/**
 * 卸载时
 * @param {*} props 
 */
export async function unmount(){
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
