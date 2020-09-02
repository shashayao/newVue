import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


/*request({
  url:'home/multidata'
}).then(res => {
  // console.log(res);
})
// promise(异步处理方法)
 new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('aaa')
  }, 1000);
}).then(res=>{
  console.log('第一层方法处理完毕');
  
  return new Promise(resolve=>{
    resolve(res+'111')
  })
}).then(res=>{
  console.log('第二层方法处理完毕');
  
  return new Promise(resolve=>{
    resolve(res+'222')
  })
}).then(res=>{
  console.log('第三层方法处理完毕');
  console.log(res);
})
 */
/* new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('aaa')
  }, 1000);
}).then(res=>{
  console.log('第一层方法处理完毕');
  
  return res+'111'
}).then(res=>{
  console.log('第二层方法处理完毕');
  
  return res+'222'
}).then(res=>{
  console.log('第三层方法处理完毕');
  console.log(res);
})  */


