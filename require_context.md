## require.context 管理依赖

### 管理全局组件
```
//globalComponent.js

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


// 2 - 将globalComponent.js引入main.js

import global from './components/globalComponent'

```

### 管理所有的路由
```
总路由管理文件 - index.js

分区路由
    - index.routes.js
    - login.routes.js

// 分区路由文件写法

export default {
    path:'/index',
    name:'Index',
    component: () => import('../views/Index.vue'),  // 懒加载式引入，当跳转到时才进行引入chunk
    children: [...]
}


// 总路由管理文件 index.js 写法
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerList = []  // 路由数组 - 存放所有路由
function importAll(routerArr){
    // 该函数用于将所有分区路由中的路由添加到路由数组
    routerArr.keys().forEach( key => {
        console.log(key)
        routerList.push(routerArr(key).default)
    })
}
importAll(require.context('.',true,/\.routes\.js/))

const routes = [
    ...routerList
]

const router = new VueRouter({
    routes
})

export default router

```