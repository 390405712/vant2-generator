const i = (n, o, s, e) => {
  if (!Array.isArray(n))
    return [];
  const r = [];
  let u = [];
  return e && (u = Object.keys(e)), n.forEach((t) => {
    let f = {
      label: typeof t == "string" ? t : t[o],
      value: typeof t == "string" ? t : t[s]
    };
    e && u.forEach((m) => {
      f[m] = t[m];
    }), r.push(f);
  }), r;
}, l = (n, o) => n.filter((s) => s.formItem.prop === o)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
}, a = (n, o, s) => {
  var u;
  const e = {
    input: "输入",
    "input-number": "输入",
    select: "选择",
    "tree-select": "选择",
    cascader: "选择",
    radio: "选择",
    "radio-button": "选择",
    checkbox: "选择",
    "checkbox-button": "选择",
    datetime: "选择",
    time: "选择",
    switch: "选择",
    upload: "上传"
  }, r = l(n.formOption, n.field);
  if (Array.isArray(o) && o.length === 0)
    return s(new Error(`请${e[r.type] || "完善"}${r.formItem.label}`));
  if (!o)
    return s(new Error(`请${e[r.type] || "完善"}${r.formItem.label}`));
  if (!((u = r == null ? void 0 : r.formItem) != null && u.rules))
    return s();
  if (typeof r.formItem.rules.validator == "function")
    r.formItem.rules.validator(n, o).then(() => s()).catch((t) => {
      var f;
      return s(new Error(t !== "err" ? t : ((f = r == null ? void 0 : r.formItem.rules) == null ? void 0 : f.message) || ""));
    });
  else
    return r.formItem.rules.validator.test(o) ? s() : s(new Error(r.formItem.rules.message || "格式有误"));
}, c = (n, o = []) => {
  let s = {};
  return n.forEach((e) => {
    var u, t;
    const r = typeof e == "string" ? e : e.formItem.prop;
    o.includes(r) || (s[r] = [{ required: !0, validator: a, trigger: ((t = (u = e.formItem) == null ? void 0 : u.rules) == null ? void 0 : t.trigger) || "blur", formOption: n }]);
  }), s;
}, d = (n, o = []) => {
  const s = {
    input: "输入",
    "input-number": "输入",
    select: "选择",
    "tree-select": "选择",
    cascader: "选择",
    radio: "选择",
    "radio-button": "选择",
    checkbox: "选择",
    "checkbox-button": "选择",
    datetime: "选择",
    time: "选择",
    switch: "选择",
    upload: "上传"
  };
  return n.forEach((e) => {
    const r = { required: !0, message: `请${s[e.type] || "完善"}${e.formItem.label || ""}`, trigger: "change" };
    if (!o.includes(e.formItem.prop)) {
      e.formItem.rules ? Array.isArray(e.formItem.rules) ? e.formItem.rules.unshift(r) : Array.isArray(e.formItem.rules) || (e.formItem.rules = [r, e.formItem.rules]) : e.formItem.rules = [r];
      for (let u = 0; u < e.formItem.rules.length; u++) {
        let t = e.formItem.rules[u];
        t.validator && typeof t.validator != "function" && (t.pattern = t.validator, t.message = t.message || "格式有误", delete t.validator);
      }
    }
  }), n;
}, p = {
  checkIphoneNum: (n, o) => o ? /(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(o) ? Promise.resolve() : Promise.reject("手机格式有误") : Promise.reject("请输入手机号")
}, g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonValidator: p,
  getLabel: l,
  getOption: i,
  getRules: c,
  setRequired: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  p as C,
  l as a,
  c as b,
  i as g,
  d as s,
  g as u
};
//# sourceMappingURL=utils-1877dfac.js.map
