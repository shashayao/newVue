import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations.types'
//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
    state: {
        counter: 10,
        student: [{ name: 'yss', age: 27 }, { name: 'he', age: 25 }, { name: 'hqc', age: 2 }],
        info:{
            name:'cobe',
            age:30
        }
    },
    //方法
    mutations: {
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        addstudent(state,payload){
            // state.student.push(stu)
            
            state.student.push(payload.stu)
        },
        updateyss(state){
            //此写法不是响应式，不会改变页面的值
            // state.info.name = 'update';
            // Vue.set(state.info,'address','洛杉矶')
            Vue.delete(state.info,'age')
            
        }
    },
    actions: {
        
    },
    getters: {
        //筛选数组
        more20(state) {
            return state.student.filter(s => s.age > 20)
        },
        //获取指定的元素
        getyss(state) {
            return state.student.filter(s => s.name == 'yss')
        },
        //获取长度（直接使用getters中的属性）
        more20Length(state, getters) {
            return getters.more20.length
        },
        //获取大于传过来变量的元素
        moreage(state) {
            return age => state.student.filter(s => s.age > age)
        }
    },
    modules: {

    } 
})
//导出store独享
export default store