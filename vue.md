## Object.freeze()
```
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```

##  v-once 指令
```
<span v-once>这个将不会改变: {{ msg }}</span>
```

##  v-if 与 v-for 不推荐同时使用
```
当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级
```

##  v-for 时提供 key
```
建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
```

##  表单输入绑定(修饰符)
```
.lazy
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >

.number
这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串，可以给 v-model 添加 number 修饰符：
<input v-model.number="age" type="number">

.trim
如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
<input v-model.trim="msg">
```

##  选择框
```
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
如果 v-model 表达式的初始值未能匹配任何选项，<select> 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。
```

##  动态组件
```
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component v-bind:is="currentTabComponent"></component>

在动态组件上使用 keep-alive
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

##  传入一个对象的所有属性
```
<blog-post v-bind="post"></blog-post>
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```

##  Prop 验证
```
props: {
    propA: {
      type: String,//类型
      required: true, //必填的
	  default: 100 //默认值
    },
	propB: {
	  validator: function (value) {// 自定义验证函数
		return ['success', 'warning', 'danger'].indexOf(value) !== -1
	  }
	}
}
type
String Number Boolean Array Object Date Function Symbol
```

##  非 Prop 的特性
```
<bootstrap-date-input data-date-picker="activated"></bootstrap-date-input>
组件可以接受任意的特性，而这些特性会被添加到这个组件的根元素上。

<bootstrap-date-input
  data-date-picker="activated"
  class="date-picker-theme-dark"
></bootstrap-date-input>
<input type="date" class="form-control">
class 和 style 特性会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：form-control date-picker-theme-dark。

禁用特性继承
inheritAttrs: false,
inheritAttrs: false 选项不会影响 style 和 class 的绑定。
```

##  vue使用tweenjs  状态过渡
```
npm install --save @tweenjs/tween.js

创建tween.js放入plugins目录中
import TWEEN from '@tweenjs/tween.js'

export default{
  install:function(Vue){
    Vue.prototype.$tween = this;
    Vue.prototype.$tweener = TWEEN;
  },
  pause:function(tw){
    tw.pause();
  },
  fade:function(target,to,during,delay,easing,onUpdate,onComplete){
    if(!target || !to){
      return;
    }
    if(during==null){
      during = 260;
    }
    let tw = new TWEEN.Tween(target).to(to,during);
    if(delay) tw.delay(delay);
    tw.easing(easing || TWEEN.Easing.Linear.None)
    if(onUpdate) tw.onUpdate(onUpdate);
    if(onComplete) tw.onComplete(onComplete);
    tw.start();
    return tw;
  },
}


调用
/**缓动 */
import tween from "./plugins/tween";
Vue.use(tween);

//new Vue中需要添加动画刷新：
mounted(){
    this.tweenUpdate();
  },
methods:{
    tweenUpdate(){
      requestAnimationFrame(this.tweenUpdate);
      this.$tweener.update();
    },
},


使用
onTestClick() {
      this.$tween.fade(this,{testValue:10000},60000);
},
```

##  滑动页面卡顿(iphone)
```
.content{
	-webkit-overflow-scrolling: touch;
}
```

##  点击事件响应缓慢
```
安装fastclick (npm install fastclick -S)

在main.js中设置方法
import FastClick from 'fastclick'
FastClick.attach(document.body);
```

##  函数化组件functional
```
这意味它是无状态（没有 data），无实例（没有 this 上下文）
<template functional>
  …………
</template>
```


##  优化
```
一、代码包优化
对路由组件进行懒加载

二、源码优化
v-if 和 v-show选择调用
为item设置唯一key值
细分vuejs组件
减少watch的数据
内容类系统的图片资源按需加载
SSR(服务端渲染)
使用单文件组件预编译模板
提取组件的 CSS 到单独到文件
利用Object.freeze()提升性能
扁平化 Store 数据结构

三、用户体验优化
better-click防止iphone点击延迟
菊花loading
骨架屏加载

```