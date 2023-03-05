
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
 * @description: 获取表单配置中指定的对象
 * @param formOption 表单配置 formOption[]
 * @param key 指定的key string
 * @return formOption

 */
export const getLabel = (formOption, key) => {
  return formOption.filter(i => (i.formItem.prop) === key)[0] || {
    type: 'input',
    formItem: {
      prop: '',
      label: '',
    }
  }
}

/**
 * @description: 校验
 * @param rule rule对象 rule
 * @param propVal 对应prop的值 string
 * @param callback Function
 */
const getValidator = (
  rule,
  propVal,
  callback
) => {
  const type = {
    'input': '输入',
    'input-number': '输入',
    'select': '选择',
    'tree-select': '选择',
    'cascader': '选择',
    'radio': '选择',
    'radio-button': '选择',
    'checkbox': '选择',
    'checkbox-button': '选择',
    'datetime': '选择',
    'time': '选择',
    'switch': '选择',
    'upload': '上传',
  }
  const params = getLabel(rule.formOption, rule.field)
  if (Array.isArray(propVal) && propVal.length === 0) return Promise.reject(`请${(type[params.type] || '完善')}${params.formItem.label}`)
  if (!propVal) return Promise.reject(`请${(type[params.type] || '完善')}${params.formItem.label}`)
  if (!params?.formItem?.rules) return Promise.resolve();
  if (typeof params.formItem.rules.validator === 'function') {
    params.formItem.rules.validator(rule, propVal).then(() => {
      return callback()
    }).catch((res) => {
      return callback(new Error(res !== 'err' ? res : (params?.formItem.rules?.message || '')))
    })
  } else {
    if (!(params.formItem.rules.validator).test(propVal)) return Promise.reject(params.formItem.rules.message)
    return Promise.resolve();
  }
}

/**
 * @description: 生成校验配置
 * @param formOption 表单配置 formOption[]
 * @param omit 不需要验证的key  string[]
 * @return FormRules
 */
export const getRules = (formOption, omit = []) => {
  let rules = {}
  formOption.forEach((i) => {
    const prop = (typeof i === 'string' ? i : (i.formItem.prop));
    if (!omit.includes(prop)) rules[prop] = [{ required: true, validator: getValidator, trigger: i.formItem?.rules?.trigger || 'blur', formOption }]
  })
  return rules
}

export const CommonValidator = {
  checkIphoneNum: (
    rule,
    value,
  ) => {
    if (!value) return Promise.reject('请输入手机号')
    if (!/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
      return Promise.reject('手机格式有误')
    }
    return Promise.resolve()
  }
}