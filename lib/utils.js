
/**
 * @description: 生成表单控件使用的option
 * @param arr 原始list Record<string, string>[] | string[]
 * @param label 赋值label的key名 string
 * @param value 赋值value的key名 string
 * @param custom 自定义需要合并的对象 ?: {}
 * @return option[]
 */
export const getOption = (arr, label, value, custom) => {
  if (!Array.isArray(arr)) return []
  const options = []
  let customKeys = []
  if (custom) customKeys = Object.keys(custom)
  arr.forEach((item) => {
    let params = {
      label: typeof item === 'string' ? item : item[label],
      value: typeof item === 'string' ? item : item[value]
    }
    if (custom) {
      customKeys.forEach((key) => {
        params[key] = (item)[key]
      })
    }
    options.push(params)
  })
  return options
}

/**
 * @description: 生成校验配置
 * @param formOption 表单配置 FormOption[]
 * @param omit 不需要验证的key  string[]
 * @return formOption
 */
export const setRequired = (formOption, omit = []) => {
  const type = {
    'field': '输入',
    'stepper': '输入',
    'picker': '选择',
    'radio': '选择',
    'checkbox': '选择',
    'switch': '选择',
    'datetimePicker': '选择',
    'calendar': '选择',
    'cascader': '选择',
    'uploader': '上传',
    'slot': '',
  }
  formOption.forEach((i) => {
    const FieldRule = { required: true, message: `请${(type[i.type] || '完善')}${i.formItem.label || ''}`, trigger: 'onChange' }
    if (!omit.includes(i.formItem.name)) {
      i.formItem.required = true
      if (!['stepper', 'switch'].includes(i.type)) {
        if (!i.formItem.rules) {
          i.formItem.rules = [FieldRule]
        } else {
          i.formItem.rules.unshift(FieldRule)
        }
        for (let index = 0; index < i.formItem.rules.length; index++) {
          let item = i.formItem.rules[index]
          if (!item.message) item.message = '格式有误'
        }
      }
    }
  })
  return formOption
}