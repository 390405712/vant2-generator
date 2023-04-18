# 基于vant2封装的表格、表单生成器

使用文档：[vant2-generator](https://qq390405712.gitee.io/vant2-generator-docs)

## 安装

- **步骤 1：** 安装依赖

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install vant@latest-v2 vant2-generator --save

# Yarn
$ yarn add vant@latest-v2 vant2-generator

# pnpm
$ pnpm install vant@latest-v2 vant2-generator
```

- **步骤 2：** 引入依赖

全局注册
```ts
import Vue from 'vue';
import App from './App.vue'

import 'vant/lib/index.css'

import { FormGenerator } from 'vant2-generator'

Vue.component('FormGenerator', FormGenerator);


new Vue({
  render: h => h(App)
}).$mount('#app')

```

按需引入
```vue
<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>
<script>

import { FormGenerator } from 'vant2-generator'

export default{
  components:{FormGenerator },
  // ...
}
</script>
```