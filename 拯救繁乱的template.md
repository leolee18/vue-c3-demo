## 拯救繁乱的template

### 旧代码
```
//实战 - 处理多个button

<template>
  <div>
    <h1>I am Home</h1>
    <!-- 假设按钮有多种类型,通过value来显示不同类型 -->
    <div v-if='value === 1'>
      <button>button1</button>
    </div>
    <div v-else-if='value === 2'>
      <button>button2</button>
    </div>
    <div v-else>
      <button>button3</button>
    </div>
  </div>
</template>

.....


```

### 新代码
```
// 创建一个button.vue文件 写法如下

<script>
export default {
    props:{
        type:{
            type:String,
            default:'normal'
        },
        text:{
            type:String,
            default:'button'
        }
    },
    render(h){
        /*
            h 类似于 createElement， 接受2个参数
            1 - 元素
            2 - 选项
         */
        return h('button',{
            // 相当于 v-bind:class
            class:{
                btn:true,
                'btn-success':this.type === 'success',
                'btn-danger':this.type === 'danger',
                'btn-warning':this.type === 'warning',
                'btn-normal':this.type === 'normal',
            },
            domProps:{
                innerText: this.text || '默认'
            },
            on:{
                click:this.handleClick
            }
        })
    },
    methods:{
        handleClick(){
            this.$emit('myClick')
        }
    }
}
</script>

<style scoped>
.btn{
    width: 100px;
    height:40px;
    line-height:40px;
    border:0px;
    border-radius:5px;
    color:#ffff;
}
.btn-success{
    background:#2ecc71;
}
.btn-danger{
    background:#e74c3c;
}
.btn-warning{
    background:#f39c12;
}
.btn-normal{
    background:#bdc3c7;
}
</style>


```

```
//  引入

<template>
  <div>
    <h1>I am Home</h1>
    <!-- 按钮根据value显示不同类型的button -->
    <Button type='success' text='button1' @myClick='...'></Button>
  </div>
</template>

<script>
import Button from './button.vue'
export default {
  name: 'Home',
  data(){
    return{
        value:1
    }
  },
  components:{
      Button
  },
  methods:{
  }
}
</script>

<style scoped lang="less">
</style>

```