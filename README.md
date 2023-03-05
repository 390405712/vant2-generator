# 基于element-ui封装的表格、表单生成器

使用文档：[element-ui-generator](https://qq390405712.gitee.io/element-ui-generator-docs)

## 安装

- **步骤 1：** 安装依赖

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-ui element-ui-generator --save

# Yarn
$ yarn add element-ui element-ui-generator

# pnpm
$ pnpm install element-ui element-ui-generator
```

- **步骤 2：** 引入依赖

全局注册
```ts
import Vue from 'vue';
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { FormGenerator, TableGenerator } from 'element-ui-generator'


Vue.component('FormGenerator', FormGenerator);
Vue.component('TableGenerator', TableGenerator);

Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')

```

按需引入
```vue
<template>
  <FormGenerator :model="form" :formOption="formOption" />
  <TableGenerator :data="tableData":tableOption="tableOption" />
</template>
<script>

import { FormGenerator,TableGenerator } from 'element-ui-generator'

export default{
  components:{FormGenerator,TableGenerator },
  // ...
}
</script>
```