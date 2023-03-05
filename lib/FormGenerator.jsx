import { Input as ElInput, InputNumber as ElInputNumber, Radio as ElRadio, RadioGroup as ElRadioGroup, RadioButton as ElRadioButton, Checkbox as ElCheckbox, CheckboxButton as ElCheckboxButton, CheckboxGroup as ElCheckboxGroup, Switch as ElSwitch, Select as ElSelect, Option as ElOption, Button as ElButton, DatePicker as ElDatePicker, TimePicker as ElTimePicker, Form as ElForm, FormItem as ElFormItem, Tree as ElTree, Upload as ElUpload, Cascader as ElCascader, } from 'element-ui';

export default {
  name: 'FormGenerator',
  data() {
    return {
      form: {},
      more: false,
      column: 0
    }
  },
  methods: {
    submit() {
      this.$refs.FormGenerator.validate((valid) => {
        if (valid) this.$emit('submit')
      })
    },
    reset() {
      this.$refs.FormGenerator.resetFields()
      this.$emit('submit', 'init')
    },
    getAttrAndEvent(obj) {
      const res = {
        attrs: {},
        on: {}
      }
      for (const key in obj) {
        if (key.startsWith("on") && key.length > 2) {
          res.on[key.substr(2).replace(/^\S/, s => s['toLowerCase']())] = obj[key]
        } else {
          res.attrs[key] = obj[key]
        }
      }
      return res
    },
    setShow(bool) {
      this.more = bool
      this.$attrs.formOption.forEach((i, index) => {
        if (index > this.column - 2) i.show = bool
      })
    },
    validate: (...args) => this.$refs.FormGenerator.validate(...args),
    validateField: (...args) => this.$refs.FormGenerator.validateField(...args),
    resetFields: (...args) => this.$refs.FormGenerator.resetFields(...args),
    clearValidate: (...args) => this.$refs.FormGenerator.clearValidate(...args)
  },
  created() {
    this.column = (!isNaN(this.$attrs.column) ? (this.$attrs.column >= 4 ? this.$attrs.column : 4) : 4)
    if (this.$attrs.formOption.length >= (this.column - 2) && this.$attrs?.type === 'search') this.setShow(false)
  },
  render(h) {
    if (typeof window == "undefined") {
      global.h = this.$createElement
    } else {
      window.h = this.$createElement
    }
    const renderForm = (_attrs) => {
      _attrs.formOption.forEach((i) => {
        if (i?.formItem?.rules && !i?.formItem?.rules?.hasOwnProperty('trigger')) i.formItem.rules.trigger = 'blur'
      })
      return (
        <ElForm class={`FormGenerator ${_attrs?.type === 'search' ? 'FormGeneratorSearch' : ''} ${_attrs?.type === 'dialog' ? 'FormGeneratorDialog' : ''}`} validate-on-rule-change={false} label-width={_attrs.labelWidth || 'auto'} inline={_attrs?.type === 'search' ? true : false}
          {...{ attrs: _attrs, on: this.$listeners }} ref="FormGenerator" >
          {_attrs.formOption.map((formOption) => {
            if (!(formOption.hasOwnProperty('show') && formOption.show === false)) return <ElFormItem key={formOption.formItem.prop} {...{ attrs: formOption.formItem }} >{renderControl(formOption, _attrs)}</ElFormItem>
          })}
          {_attrs.disabled === true || _attrs.noFooter || !this.$listeners.submit
            ? ''
            : <ElFormItem
              style={_attrs.inline === true ? { width: `calc${100 / this.column}% - 8px` } : ''}
              class={`btnItem ${this.more ? "searchItem" : ""}`}
            >
              {this.$scopedSlots?.default
                ? <div>{this.$scopedSlots.default()[0]}</div>
                : _attrs?.type === 'search'
                  ? renderSearchItem(_attrs)
                  : <div>
                    {
                      _attrs?.type === 'dialog'
                        ? <ElButton onClick={(e) => {
                          const getDialogEl = (el) => {
                            if (el.parentElement.className !== 'el-dialog') return getDialogEl(el.parentElement)
                            return el.parentElement
                          }
                          getDialogEl(e.target).querySelector('.el-dialog__headerbtn')?.click?.()
                        }}>取消</ElButton>
                        : ''
                    }
                    <ElButton type="primary" onClick={this.submit}>确定</ElButton>
                  </div>
              }
              <template slot="label"></template>
            </ElFormItem>
          }
        </ElForm >
      )
    }
    const renderControl = (formOption, _attrs) => {
      switch (formOption.type) {
        case 'input':
          return <ElInput clearable={true} maxlength={30} {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]}
          // {...{
          //   scopedSlots: {
          //     prepend: () => (<i class="el-input__icon el-icon-date"></i>),
          //     append: () => (<i class="el-input__icon el-icon-search"></i>),
          //   }
          // }}
          // v-slot={{
          //   prepend: () => (<i class="el-input__icon el-icon-date"></i>),
          //   append: () => (<i class="el-input__icon el-icon-search"></i>),
          // }}
          >
            {Object.keys(formOption?.control?.slot || []).map(i => <template slot={i}>{formOption?.control?.slot[i]({ form: _attrs.model, data: _attrs.model[formOption.formItem.prop] })}</template>)}
          </ElInput>
          break;
        case 'input-number':
          return <ElInputNumber min={0} max={100} {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]} />
          break;
        case 'select':
          return <ElSelect {...{ props: { reserveKeyword: false } }} clearable={true} {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]} >
            {formOption?.control?.option.map((controlOptionItem) => (
              <ElOption {...this.getAttrAndEvent(controlOptionItem)} key={controlOptionItem.value}>
                {Object.keys(controlOptionItem?.slot || []).map(i => <template slot={i}>{controlOptionItem?.slot[i]()}</template>)}
              </ElOption>
            ))}
          </ElSelect>
          break;
        // case 'tree-select':
        //   return <ElTreeSelect clearable={true} {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]} >
        //     {Object.keys(formOption?.control?.slot || []).map(i => <template slot={i}>{formOption?.control?.slot[i]()}</template>)}
        //   </ElTreeSelect>
        //   break;
        case 'cascader':
          return <ElCascader {...this.getAttrAndEvent(formOption?.control)} scopedSlots={formOption?.control?.slot} v-model={_attrs.model[formOption.formItem.prop]} >
            {/* {Object.keys(formOption?.control?.slot || []).map(i => <template slot={i}>{formOption?.control?.slot[i]()}</template>)} */}
          </ElCascader>
          break;
        case 'radio':
          return (
            <ElRadioGroup {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]}>
              {formOption?.control?.option.map((controlOptionItem) => (
                <ElRadio {...this.getAttrAndEvent(controlOptionItem)} label={controlOptionItem.value} key={controlOptionItem.label} >
                  {Object.keys(controlOptionItem?.slot || []).map(i => <template slot={i}>{controlOptionItem?.slot[i]()}</template>)}
                  {controlOptionItem.label}
                </ElRadio>
              ))}
            </ElRadioGroup>
          )
          break;
        case 'radio-button':
          return (
            <ElRadioGroup {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]}>
              {formOption?.control?.option.map((controlOptionItem) => (
                <ElRadioButton {...this.getAttrAndEvent(controlOptionItem)} label={controlOptionItem.value} key={controlOptionItem.label} >
                  {Object.keys(controlOptionItem?.slot || []).map(i => <template slot={i}>{controlOptionItem?.slot[i]()}</template>)}
                  {controlOptionItem.label}
                </ElRadioButton>
              ))}
            </ElRadioGroup>
          )
          break;
        case 'checkbox':
          return (
            <ElCheckboxGroup {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]}>
              {formOption?.control?.option.map((controlOptionItem) => (
                <ElCheckbox  {...this.getAttrAndEvent(controlOptionItem)} label={controlOptionItem.value} key={controlOptionItem.label} >
                  {Object.keys(controlOptionItem?.slot || []).map(i => <template slot={i}>{controlOptionItem?.slot[i]()}</template>)}
                  {controlOptionItem.label}
                </ElCheckbox>
              ))}
            </ElCheckboxGroup>
          )
          break;
        case 'checkbox-button':
          return (
            <ElCheckboxGroup {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]}>
              {formOption?.control?.option.map((controlOptionItem) => (
                <ElCheckboxButton  {...this.getAttrAndEvent(controlOptionItem)} label={controlOptionItem.value} key={controlOptionItem.label} >
                  {Object.keys(controlOptionItem?.slot || []).map(i => <template slot={i}>{controlOptionItem?.slot[i]()}</template>)}
                  {controlOptionItem.label}
                </ElCheckboxButton>
              ))}
            </ElCheckboxGroup>
          )
          break;
        case 'datetime':
          const formatEnum = {
            'datetimerange': 'yyyy-MM-DD hh:mm:ss',
            'daterange': 'yyyy-MM-DD',
            'datetime': 'yyyy-MM-DD hh:mm:ss',
            'date': 'yyyy-MM-DD',
          }
          const formatEnumVal = formatEnum[formOption?.control?.type || 'date']
          return <ElDatePicker clearable={true} format={formatEnumVal} value-format={formatEnumVal} {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]} >
            {Object.keys(formOption?.control?.slot || []).map(i => <template slot={i}>{formOption?.control?.slot[i]()}</template>)}
          </ElDatePicker>
          break;
        case 'time':
          return <ElTimePicker clearable={true} {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]}  >
            {Object.keys(formOption?.control?.slot || []).map(i => <template slot={i}>{formOption?.control?.slot[i]()}</template>)}
          </ElTimePicker>
          break;
        case 'switch':
          return <ElSwitch {...this.getAttrAndEvent(formOption?.control)} v-model={_attrs.model[formOption.formItem.prop]} >
            {Object.keys(formOption?.control?.slot || []).map(i => <template slot={i}>{formOption?.control?.slot[i]()}</template>)}
          </ElSwitch>
          break;
        case 'upload':
          return (
            <ElUpload action='' {...this.getAttrAndEvent(formOption?.control)} v-model:file-list={_attrs.model[formOption.formItem.prop]}>
              {Object.keys(formOption?.control?.slot || []).map(i => {
                return <template slot={i}>{formOption?.control?.slot[i]()}</template>
              })}
              {Object.keys(formOption?.control?.slot || []).includes('default') ? '' : <template slot="default"><ElButton type="primary">上传文件</ElButton></template>}
            </ElUpload>
          )
          break;
        case 'txt':
          return _attrs.model[formOption.formItem.prop]
          break;
        case 'slot':
          return this.$scopedSlots[formOption.formItem.prop]?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.prop] })
          break;
      }
    }
    const renderSearchItem = (_attrs) => {
      return (
        <div>
          <ElButton type="primary" onClick={this.submit} icon="el-icon-search">搜索</ElButton>
          <ElButton onClick={this.reset} icon="el-icon-refresh">重置</ElButton>
          {_attrs.type === 'search' && _attrs.formOption.length > (this.column - 1)
            ? <ElButton type="text" onClick={() => { this.setShow(!this.more) }} icon={this.more ? "el-icon-arrow-up" : "el-icon-arrow-down"}>{this.more ? '收起' : '展开'}</ElButton>
            : ''
          }
        </div>
      )
    }
    return (
      renderForm(this.$attrs)
    )
  }
}