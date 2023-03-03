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
    import App from './App.vue'

    import ElementPlus from 'element-ui'
    import 'element-ui/dist/index.css'

    import { FormGenerator, TableGenerator } from 'element-ui-generator'

    const app = createApp(App)

    app.component('FormGenerator', FormGenerator);
    app.component('TableGenerator', TableGenerator);

    app.use(ElementPlus).mount('#app')
    ```
    按需引入
    ```vue
    <template>
      <FormGenerator :model="form" :formOption="formOption" />
      <TableGenerator :data="tableData":tableOption="tableOption" />
    </template>
    <script lang="tsx" setup>
    import { FormGenerator,TableGenerator } from 'element-ui-generator'
    // ...
    </script>
    ```