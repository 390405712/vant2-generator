import { Form, CellGroup, Button, Field, Calendar, Cascader, Popup, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Picker, DatetimePicker, Stepper, Uploader } from 'vant'

export default {
  name: 'FormGenerator',
  methods: {
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
    submit: (...args) => this.$refs.FormGenerator.submit(...args),
    validate: (...args) => this.$refs.FormGenerator.validate(...args),
    resetValidation: (...args) => this.$refs.FormGenerator.resetValidation(...args),
    scrollToField: (...args) => this.$refs.FormGenerator.scrollToField(...args),
  },
  render(h) {
    if (typeof window == "undefined") {
      global.h = this.$createElement
    } else {
      window.h = this.$createElement
    }
    const renderForm = (_attrs) => {
      return <Form class={`FormGenerator`} {...{ attrs: _attrs, on: this.$listeners }} ref="FormGenerator">
        <CellGroup>
          {_attrs.formOption.map((formOption, index) => {
            if (!(formOption.hasOwnProperty('show') && formOption.show === false)) return renderControl(formOption, _attrs)
          })}
        </CellGroup>
        {_attrs.disabled === true || !this.$listeners.submit
          ? ''
          : this.$scopedSlots?.default
            ? <div>{this.$scopedSlots.default()[0]}</div>
            : <Button type="info" loading={_attrs.loading} block onClick={this.submit}>提交</Button>
        }
      </Form>
    }
    const renderField = (_attrs, formOption, custom) => {
      let model = custom ? formOption.formItem.text : _attrs.model[formOption.formItem.name]
      return <Field is-link readonly onClick={_attrs.disabled ? () => '' : () => { this.$set(formOption, 'showPopup', true) }} inputAlign='right' v-model={model} {...this.getAttrAndEvent(formOption?.formItem)} scopedSlots={formOption?.formItem?.slots} />
    }
    const formatterDate = (scope, type = 'datetime') => {
      let val
      switch (type) {
        case 'date':
          val = `${scope.getFullYear()}-${String(scope.getMonth() + 1).padStart(2, '0')}-${String(scope.getDate()).padStart(2, '0')}`
          break;
        case 'datehour':
          val = `${scope.getFullYear()}-${String(scope.getMonth() + 1).padStart(2, '0')}-${String(scope.getDate()).padStart(2, '0')} ${String(scope.getHours()).padStart(2, '0')}`
          break;
        case 'year-month':
          val = `${scope.getFullYear()}-${String(scope.getMonth() + 1).padStart(2, '0')}`
          break;
        case 'month-day':
          val = `${String(scope.getMonth() + 1).padStart(2, '0')}-${String(scope.getDate()).padStart(2, '0')}`
          break;
        case 'time':
          val = scope
          break;
        case 'datetime':
          val = `${scope.getFullYear()}-${String(scope.getMonth() + 1).padStart(2, '0')}-${String(scope.getDate()).padStart(2, '0')} ${String(scope.getHours()).padStart(2, '0')}:${String(scope.getMinutes()).padStart(2, '0')}:${String(scope.getSeconds()).padStart(2, '0')}`
          break;
      }
      return val
    }
    const renderControl = (formOption, _attrs) => {
      function getText(arr, val, columnsFieldNames, splice = false) {
        if (!Array.isArray(arr)) return ''
        for (let index = 0; index < arr.length; index++) {
          const item = arr[index];
          if (typeof item === 'string') {
            if (item === val) return item[columnsFieldNames?.text ?? 'text'] || ''
          } else {
            if (item[columnsFieldNames?.values ?? columnsFieldNames?.value ?? 'value'] === val) return item[columnsFieldNames?.text ?? 'text'] || ''
          }
          if (item[columnsFieldNames?.children ?? 'children']?.length) {
            const text = getText(item[columnsFieldNames?.children ?? 'children'], val, columnsFieldNames,splice)
            if (text) {
              if (splice) return `${item[columnsFieldNames?.text ?? 'text']}/${text}`
              return text
            }
          }
        }
        return null;
      }
      switch (formOption.type) {
        case 'field':
          return <Field ref={formOption.formItem.name} inputAlign='right' {...this.getAttrAndEvent({ ...formOption.formItem, ...formOption.control })} v-model={_attrs.model[formOption.formItem.name]} scopedSlots={formOption?.control?.slots} />
        case 'stepper':
          return <Field readonly {...this.getAttrAndEvent(formOption?.formItem)}>
            <template slot='right-icon'>
              <Stepper ref={formOption.formItem.name} disabled={_attrs.disabled} button-size="21px" v-model={_attrs.model[formOption.formItem.name]} {...this.getAttrAndEvent(formOption?.control)} />
            </template>
          </Field>
        case 'picker':
          if (!formOption.formItem.hasOwnProperty('text') && _attrs.model[formOption.formItem.name] && formOption?.control?.columns) {
            if (Array.isArray(formOption?.control?.columns?.[0]?.values)) {
              formOption.formItem.text = formOption?.control?.columns.reduce((arr, item, index) => {
                if (typeof item?.values?.[0] === 'string') {
                  arr.push(item.values?.find(i => i === _attrs.model[formOption.formItem.name]?.[index]))
                } else {
                  arr.push(item.values?.find(i => i[formOption?.control?.columnsFieldNames?.values ?? 'value'] === _attrs.model[formOption.formItem.name]?.[index])?.[formOption?.control?.columnsFieldNames?.text ?? 'text'])
                }
                return arr
              }, []).join('/')
            } else if (Array.isArray(_attrs.model[formOption.formItem.name])) {
              formOption.formItem.text = _attrs.model[formOption.formItem.name].reduce((arr, item) => {
                arr.push(getText(formOption?.control?.columns, item, formOption?.control?.columnsFieldNames))
                return arr
              }, []).join('/')
            } else {
              formOption.formItem.text = getText(formOption?.control?.columns, _attrs.model[formOption.formItem.name], formOption?.control?.columnsFieldNames)
            }
          }
          return <div>
            {renderField(_attrs, formOption, true)}
            <div>
              <Popup lazy-render={false} v-model={formOption.showPopup} round position="bottom" {...this.getAttrAndEvent(formOption?.popup)}>
                <Picker ref={formOption.formItem.name} show-toolbar v-model={_attrs.model[formOption.formItem.name]}
                  onCancel={() => { this.$set(formOption, 'showPopup', false) }}
                  onConfirm={(scope) => {
                    this.$set(formOption, 'showPopup', false)
                    if (Array.isArray(scope)) {
                      const val = scope.reduce((arr, item) => {
                        arr.push(typeof item === 'object' ? item?.[formOption?.control?.columnsFieldNames?.values ? formOption?.control?.columnsFieldNames?.values : 'value'] : item)
                        return arr
                      }, []);
                      this.$set(_attrs.model, formOption.formItem.name, val)
                      formOption.formItem.text = scope.map((item) => typeof item === 'object' ? item?.[formOption?.control?.columnsFieldNames?.text ? formOption?.control?.columnsFieldNames?.text : 'text'] : item).join('/');
                    } else {
                      this.$set(_attrs.model, formOption.formItem.name, scope[formOption?.control?.columnsFieldNames?.values ? formOption?.control?.columnsFieldNames?.values : 'value'])
                      formOption.formItem.text = scope[formOption?.control?.columnsFieldNames?.text ? formOption?.control?.columnsFieldNames?.text : 'text'];
                    }
                  }}
                  {...this.getAttrAndEvent(formOption?.control)}
                  scopedSlots={formOption?.control?.slots}
                />
              </Popup>
            </div>
          </div>
          break;
        case 'cascader':
          if (_attrs.model[formOption.formItem.name]) {
            formOption.formItem.text = getText(formOption?.control?.options, _attrs.model[formOption.formItem.name], formOption?.control?.fieldNames, true)
          }
          return <div>
            {renderField(_attrs, formOption, true)}
            <div>
              <Popup v-model={formOption.showPopup} round position="bottom" {...this.getAttrAndEvent(formOption?.popup)}>
                <Cascader ref={formOption.formItem.name} v-model={_attrs.model[formOption.formItem.name]}
                  onClose={() => { this.$set(formOption, 'showPopup', false) }}
                  onFinish={(scope) => {
                    this.$set(formOption, 'showPopup', false)
                    this.$set(_attrs.model, formOption.formItem.name, scope.value)
                    formOption.formItem.text = scope.selectedOptions.map((item) => item[formOption?.control?.fieldNames?.text ? formOption?.control?.fieldNames?.text : 'text']).join('/');
                  }}
                  {...this.getAttrAndEvent(formOption?.control)}
                  scopedSlots={formOption?.control?.slots}
                />
              </Popup>
            </div>
          </div>
        case 'calendar':
          return <div>
            {renderField(_attrs, formOption, formOption?.control?.type === 'multiple')}
            <div>
              <Calendar ref={formOption.formItem.name} v-model={formOption.showPopup}
                show-confirm={formOption?.control?.type === 'multiple'}
                onConfirm={(value) => {
                  this.$set(formOption, 'showPopup', false)
                  const formatDate = (date) => `${date?.getFullYear?.()}-${date?.getMonth?.() + 1}-${date?.getDate?.()}`
                  switch (formOption?.control?.type) {
                    case 'multiple':
                      const val = value.reduce((arr, item) => {
                        arr.push(formatDate(item))
                        return arr
                      }, [])
                      this.$set(_attrs.model, formOption.formItem.name, val)
                      formOption.formItem.text = `选择了 ${value.length} 个日期`
                      break;
                    case 'range':
                      this.$set(_attrs.model, formOption.formItem.name, `${formatDate(value[0])}~${formatDate(value[1])}`)
                      break;
                    default:
                      this.$set(_attrs.model, formOption.formItem.name, formatDate(value))
                      break;
                  }
                }}
                {...this.getAttrAndEvent(formOption?.control)}
                scopedSlots={formOption?.control?.slots}
              >
              </Calendar>
            </div>
          </div>
          break;
        case 'radio':
          return <Field inputAlign='right' {...this.getAttrAndEvent(formOption?.formItem)}>
            <template slot='input'>
              <RadioGroup ref={formOption.formItem.name} disabled={_attrs.disabled} direction="horizontal" v-model={_attrs.model[formOption.formItem.name]} {...this.getAttrAndEvent(formOption?.control)}>
                {formOption.control.radioGroup.map((controlOptionItem) => (
                  <Radio name={controlOptionItem.value}  {...this.getAttrAndEvent(controlOptionItem)} scopedSlots={controlOptionItem?.slots}>
                    {controlOptionItem.label}
                  </Radio>
                ))}
              </RadioGroup>
            </template>
          </Field>
        case 'checkbox':
          return <Field inputAlign='right' {...this.getAttrAndEvent(formOption?.formItem)}>
            <template slot='input'>
              <CheckboxGroup ref={formOption.formItem.name} disabled={_attrs.disabled} direction="horizontal" v-model={_attrs.model[formOption.formItem.name]} {...this.getAttrAndEvent(formOption?.control)}>
                {formOption.control.checkboxGroup.map((controlOptionItem) => (
                  <Checkbox name={controlOptionItem.value}  {...this.getAttrAndEvent(controlOptionItem)} scopedSlots={controlOptionItem?.slots}>
                    {controlOptionItem.label}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </template>
          </Field>
        case 'datetimePicker':
          return <div>
            {renderField(_attrs, formOption)}
            <div>
              <Popup v-model={formOption.showPopup} round position="bottom"  {...this.getAttrAndEvent(formOption?.popup)}>
                <DatetimePicker ref={formOption.formItem.name}
                  onCancel={() => { this.$set(formOption, 'showPopup', false) }}
                  onConfirm={(scope) => {
                    this.$set(formOption, 'showPopup', false)
                    this.$set(_attrs.model, formOption.formItem.name, formatterDate(scope, formOption?.control?.type))
                  }}
                  {...this.getAttrAndEvent(formOption?.control)}
                  scopedSlots={formOption?.control?.slots}
                >
                </DatetimePicker>
              </Popup>
            </div>
          </div>
          break;
        case 'switch':
          return <Field class="field-switch" readonly {...this.getAttrAndEvent(formOption?.formItem)}>
            <template slot='right-icon'>
              <Switch ref={formOption.formItem.name} disabled={_attrs.disabled} size="24px" v-model={_attrs.model[formOption.formItem.name]} {...this.getAttrAndEvent(formOption?.control)} />
            </template>
          </Field>
        case 'uploader':
          return <Field readonly inputAlign='right' {...this.getAttrAndEvent(formOption?.formItem)}>
            <template slot='input'>
              <Uploader ref={formOption.formItem.name} disabled={_attrs.disabled} v-model={_attrs.model[formOption.formItem.name]} {...this.getAttrAndEvent(formOption?.control)} scopedSlots={formOption?.control?.slots} />
            </template>
          </Field>
        case 'slot':
          return <Field readonly inputAlign='right'
            {...formOption.formItem}>
            <template slot='label'>{formOption.formItem.label ? formOption.formItem.label : ''}</template>
            <template slot='input'>{
              formOption?.control?.slots?.input && typeof formOption?.control?.slots?.input === 'function'
                ? formOption?.control?.slots?.input?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.name] })
                : this.$scopedSlots[formOption.formItem.name]
                  ? this.$scopedSlots[formOption.formItem.name]?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.name] })
                  : _attrs.model[formOption.formItem.name]
            }
            </template>
          </Field>
      }
    }
    return (
      renderForm(this.$attrs)
    )
  }
}