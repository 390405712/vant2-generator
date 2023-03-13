const i = (s, n, o, e) => {
  if (!Array.isArray(s))
    return [];
  const r = [];
  let u = [];
  return e && (u = Object.keys(e)), s.forEach((t) => {
    let f = {
      label: typeof t == "string" ? t : t[n],
      value: typeof t == "string" ? t : t[o]
    };
    e && u.forEach((l) => {
      f[l] = t[l];
    }), r.push(f);
  }), r;
}, m = (s, n) => s.filter((o) => o.formItem.prop === n)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
}, a = (s, n, o) => {
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
  }, r = m(s.formOption, s.field);
  if (Array.isArray(n) && n.length === 0)
    return o(new Error(`请${e[r.type] || "完善"}${r.formItem.label}`));
  if (!n)
    return o(new Error(`请${e[r.type] || "完善"}${r.formItem.label}`));
  if (!((u = r == null ? void 0 : r.formItem) != null && u.rules))
    return o();
  if (typeof r.formItem.rules.validator == "function")
    r.formItem.rules.validator(s, n).then(() => o()).catch((t) => {
      var f;
      return o(new Error(t !== "err" ? t : ((f = r == null ? void 0 : r.formItem.rules) == null ? void 0 : f.message) || ""));
    });
  else
    return r.formItem.rules.validator.test(n) ? o() : o(new Error(r.formItem.rules.message || "格式有误"));
}, c = (s, n = []) => {
  let o = {};
  return s.forEach((e) => {
    var u, t;
    const r = typeof e == "string" ? e : e.formItem.prop;
    n.includes(r) || (o[r] = [{ required: !0, validator: a, trigger: ((t = (u = e.formItem) == null ? void 0 : u.rules) == null ? void 0 : t.trigger) || "blur", formOption: s }]);
  }), o;
}, d = (s, n = []) => {
  const o = {
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
  return s.forEach((e) => {
    const r = { required: !0, message: `请${o[e.type] || "完善"}${e.formItem.label || ""}`, trigger: "change" };
    if (!n.includes(e.formItem.prop)) {
      e.formItem.rules ? Array.isArray(e.formItem.rules) ? e.formItem.rules.unshift(r) : Array.isArray(e.formItem.rules) || (e.formItem.rules = [r, e.formItem.rules]) : e.formItem.rules = [r];
      for (let u = 0; u < e.formItem.rules.length; u++) {
        let t = e.formItem.rules[u];
        t.validator && typeof t.validator != "function" && (t.pattern = t.validator, t.message = t.message || "格式有误", delete t.validator);
      }
    }
  }), s;
}, g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getLabel: m,
  getOption: i,
  getRules: c,
  setRequired: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as a,
  c as b,
  i as g,
  d as s,
  g as u
};
//# sourceMappingURL=utils-e46d3a1e.js.map
