import Vue from 'vue'

//处理首字母大写 abc => Abc
function changeStr(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

const requireComponent = require.context('./txt',false,/\.vue$/)
requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const config = requireComponent(fileName)
    const componentName = changeStr(
        fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')   // ./child1.vue => child1
    )
    Vue.component(componentName, config.default || config) // 动态注册该目录下的所有.vue文件
})
console.log("globalComponent.js")