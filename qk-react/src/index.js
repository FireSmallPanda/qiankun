import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
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
   render(props)
 }
 /**
  * 卸载时
  * @param {*} props 
  */
 export async function unmount(){
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
 }