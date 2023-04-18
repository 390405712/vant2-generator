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
            : <Button type="primary" onClick={this.submit}>提交</Button>
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
          return <div>
            {renderField(_attrs, formOption, true)}
            <Popup lazy-render={false} v-model={formOption.showPopup} round position="bottom" {...this.getAttrAndEvent(formOption?.popup)}>
              <Picker ref={formOption.formItem.name} show-toolbar v-model={_attrs.model[formOption.formItem.name]}
                onCancel={() => { this.$set(formOption, 'showPopup', false) }}
                onConfirm={(scope) => {
                  this.$set(formOption, 'showPopup', false)
                  if (Array.isArray(scope)) {
                    const val = scope.reduce((arr, item) => {
                      arr.push(typeof item === 'object' ? item?.[formOption?.control?.columnsFieldNames?.values ?? 'value'] : item)
                      return arr
                    }, []);
                    this.$set(_attrs.model, formOption.formItem.name, val)
                    formOption.formItem.text = scope.map((item) => typeof item === 'object' ? item?.[formOption?.control?.columnsFieldNames?.text ?? 'text'] : item).join('/');
                  } else {
                    this.$set(_attrs.model, formOption.formItem.name, scope[formOption?.control?.columnsFieldNames?.values ?? 'value'])
                    formOption.formItem.text = scope[formOption?.control?.columnsFieldNames?.text ?? 'text'];
                  }
                }}
                {...this.getAttrAndEvent(formOption?.control)}
                scopedSlots={formOption?.control?.slots}
              />
            </Popup>
          </div>
          break;
        case 'cascader':
          return <div>
            {renderField(_attrs, formOption, true)}
            <Popup v-model={formOption.showPopup} round position="bottom" {...this.getAttrAndEvent(formOption?.popup)}>
              <Cascader ref={formOption.formItem.name} v-model={_attrs.model[formOption.formItem.name]}
                onClose={() => { this.$set(formOption, 'showPopup', false) }}
                onFinish={(scope) => {
                  this.$set(formOption, 'showPopup', false)
                  this.$set(_attrs.model, formOption.formItem.name, scope.value)
                  formOption.formItem.text = scope.selectedOptions.map((item) => item[formOption?.control?.fieldNames?.text ?? 'text']).join('/');
                }}
                {...this.getAttrAndEvent(formOption?.control)}
                scopedSlots={formOption?.control?.slots}
              />
            </Popup>
          </div>
        case 'calendar':
          return <div>
            {renderField(_attrs, formOption, formOption?.control?.type === 'multiple')}
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
            <template slot='label'>{formOption.formItem.label ?? ''}</template>
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