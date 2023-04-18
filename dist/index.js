(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Form as X, CellGroup as Z, Button as V, Field as b, Uploader as i, Switch as _, Popup as M, DatetimePicker as f, CheckboxGroup as o, Checkbox as p, RadioGroup as O, Radio as ee, Calendar as te, Cascader as se, Picker as le, Stepper as ae } from "vant";
function G() {
  return G = Object.assign ? Object.assign.bind() : function(l) {
    for (var r, u = 1; u < arguments.length; u++)
      for (var s in r = arguments[u], r)
        Object.prototype.hasOwnProperty.call(r, s) && (l[s] = r[s]);
    return l;
  }, G.apply(this, arguments);
}
var ue = ["attrs", "props", "domProps"], re = ["class", "style", "directives"], de = ["on", "nativeOn"], ce = function(l) {
  return l.reduce(function(r, u) {
    for (var s in u)
      if (!r[s])
        r[s] = u[s];
      else if (ue.indexOf(s) !== -1)
        r[s] = G({}, r[s], u[s]);
      else if (re.indexOf(s) !== -1) {
        var d = r[s] instanceof Array ? r[s] : [r[s]], e = u[s] instanceof Array ? u[s] : [u[s]];
        r[s] = [].concat(d, e);
      } else if (de.indexOf(s) !== -1)
        for (var t in u[s])
          if (r[s][t]) {
            var c = r[s][t] instanceof Array ? r[s][t] : [r[s][t]], v = u[s][t] instanceof Array ? u[s][t] : [u[s][t]];
            r[s][t] = [].concat(c, v);
          } else
            r[s][t] = u[s][t];
      else if (s === "hook")
        for (var A in u[s])
          r[s][A] = r[s][A] ? ge(r[s][A], u[s][A]) : u[s][A];
      else
        r[s] = u[s];
    return r;
  }, {});
}, ge = function(l, r) {
  return function() {
    l && l.apply(this, arguments), r && r.apply(this, arguments);
  };
}, h = ce;
const Ie = {
  name: "FormGenerator",
  methods: {
    getAttrAndEvent(l) {
      const r = {
        attrs: {},
        on: {}
      };
      for (const u in l)
        u.startsWith("on") && u.length > 2 ? r.on[u.substr(2).replace(/^\S/, (s) => s.toLowerCase())] = l[u] : r.attrs[u] = l[u];
      return r;
    }
  },
  render(l) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const r = (e) => {
      var t;
      return l(X, {
        class: "FormGenerator",
        attrs: {
          ...e
        },
        on: {
          ...this.$listeners
        },
        ref: "FormGenerator"
      }, [l(Z, [e.formOption.map((c, v) => {
        if (!(c.hasOwnProperty("show") && c.show === !1))
          return d(c, e);
      })]), e.disabled === !0 || !this.$listeners.submit ? "" : (t = this.$scopedSlots) != null && t.default ? l("div", [this.$scopedSlots.default()[0]]) : l(V, {
        attrs: {
          type: "primary"
        },
        on: {
          click: this.submit
        }
      }, ["提交"])]);
    }, u = (e, t, c) => {
      var A;
      let v = c ? t.formItem.text : e.model[t.formItem.name];
      return l(b, h([{
        attrs: {
          "is-link": !0,
          readonly: !0,
          inputAlign: "right"
        },
        on: {
          click: e.disabled ? () => "" : () => {
            this.$set(t, "showPopup", !0);
          }
        }
      }, this.getAttrAndEvent(t == null ? void 0 : t.formItem), {
        scopedSlots: (A = t == null ? void 0 : t.formItem) == null ? void 0 : A.slots,
        model: {
          value: v,
          callback: (F) => {
            v = F;
          }
        }
      }]));
    }, s = (e, t = "datetime") => {
      let c;
      switch (t) {
        case "date":
          c = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
          break;
        case "datehour":
          c = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}`;
          break;
        case "year-month":
          c = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
          break;
        case "month-day":
          c = `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
          break;
        case "time":
          c = e;
          break;
        case "datetime":
          c = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
          break;
      }
      return c;
    }, d = (e, t) => {
      var c, v, A, F, N, j, D, C, z, Y, q, R, H, m, L, U, B;
      switch (e.type) {
        case "field":
          return l(b, h([{
            ref: e.formItem.name,
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent({
            ...e.formItem,
            ...e.control
          }), {
            scopedSlots: (c = e == null ? void 0 : e.control) == null ? void 0 : c.slots,
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]));
        case "stepper":
          return l(b, h([{
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "right-icon"
          }, [l(ae, h([{
            ref: e.formItem.name,
            attrs: {
              disabled: t.disabled,
              "button-size": "21px"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "picker":
          return l("div", [u(t, e, !0), l(M, h([{
            attrs: {
              "lazy-render": !1,
              round: !0,
              position: "bottom"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.popup), {
            model: {
              value: e.showPopup,
              callback: (a) => {
                this.$set(e, "showPopup", a);
              }
            }
          }]), [l(le, h([{
            ref: e.formItem.name,
            attrs: {
              "show-toolbar": !0
            },
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (a) => {
                var n, y, g, $, I, k, J, K;
                if (this.$set(e, "showPopup", !1), Array.isArray(a)) {
                  const Q = a.reduce((S, w) => {
                    var x, E, P, T;
                    return S.push(typeof w == "object" ? w == null ? void 0 : w[(E = (x = e == null ? void 0 : e.control) == null ? void 0 : x.columnsFieldNames) != null && E.values ? (T = (P = e == null ? void 0 : e.control) == null ? void 0 : P.columnsFieldNames) == null ? void 0 : T.values : "value"] : w), S;
                  }, []);
                  this.$set(t.model, e.formItem.name, Q), e.formItem.text = a.map((S) => {
                    var w, x, E, P;
                    return typeof S == "object" ? S == null ? void 0 : S[(x = (w = e == null ? void 0 : e.control) == null ? void 0 : w.columnsFieldNames) != null && x.text ? (P = (E = e == null ? void 0 : e.control) == null ? void 0 : E.columnsFieldNames) == null ? void 0 : P.text : "text"] : S;
                  }).join("/");
                } else
                  this.$set(t.model, e.formItem.name, a[(y = (n = e == null ? void 0 : e.control) == null ? void 0 : n.columnsFieldNames) != null && y.values ? ($ = (g = e == null ? void 0 : e.control) == null ? void 0 : g.columnsFieldNames) == null ? void 0 : $.values : "value"]), e.formItem.text = a[(k = (I = e == null ? void 0 : e.control) == null ? void 0 : I.columnsFieldNames) != null && k.text ? (K = (J = e == null ? void 0 : e.control) == null ? void 0 : J.columnsFieldNames) == null ? void 0 : K.text : "text"];
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (v = e == null ? void 0 : e.control) == null ? void 0 : v.slots,
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "cascader":
          return l("div", [u(t, e, !0), l(M, h([{
            attrs: {
              round: !0,
              position: "bottom"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.popup), {
            model: {
              value: e.showPopup,
              callback: (a) => {
                this.$set(e, "showPopup", a);
              }
            }
          }]), [l(se, h([{
            ref: e.formItem.name,
            on: {
              close: () => {
                this.$set(e, "showPopup", !1);
              },
              finish: (a) => {
                this.$set(e, "showPopup", !1), this.$set(t.model, e.formItem.name, a.value), e.formItem.text = a.selectedOptions.map((n) => {
                  var y, g, $, I;
                  return n[(g = (y = e == null ? void 0 : e.control) == null ? void 0 : y.fieldNames) != null && g.text ? (I = ($ = e == null ? void 0 : e.control) == null ? void 0 : $.fieldNames) == null ? void 0 : I.text : "text"];
                }).join("/");
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (A = e == null ? void 0 : e.control) == null ? void 0 : A.slots,
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "calendar":
          return l("div", [u(t, e, ((F = e == null ? void 0 : e.control) == null ? void 0 : F.type) === "multiple"), l(te, h([{
            ref: e.formItem.name,
            attrs: {
              "show-confirm": ((N = e == null ? void 0 : e.control) == null ? void 0 : N.type) === "multiple"
            },
            on: {
              confirm: (a) => {
                var y;
                this.$set(e, "showPopup", !1);
                const n = (g) => {
                  var $, I, k;
                  return `${($ = g == null ? void 0 : g.getFullYear) == null ? void 0 : $.call(g)}-${((I = g == null ? void 0 : g.getMonth) == null ? void 0 : I.call(g)) + 1}-${(k = g == null ? void 0 : g.getDate) == null ? void 0 : k.call(g)}`;
                };
                switch ((y = e == null ? void 0 : e.control) == null ? void 0 : y.type) {
                  case "multiple":
                    const g = a.reduce(($, I) => ($.push(n(I)), $), []);
                    this.$set(t.model, e.formItem.name, g), e.formItem.text = `选择了 ${a.length} 个日期`;
                    break;
                  case "range":
                    this.$set(t.model, e.formItem.name, `${n(a[0])}~${n(a[1])}`);
                    break;
                  default:
                    this.$set(t.model, e.formItem.name, n(a));
                    break;
                }
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (j = e == null ? void 0 : e.control) == null ? void 0 : j.slots,
            model: {
              value: e.showPopup,
              callback: (a) => {
                this.$set(e, "showPopup", a);
              }
            }
          }]))]);
        case "radio":
          return l(b, h([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "input"
          }, [l(O, h([{
            ref: e.formItem.name,
            attrs: {
              disabled: t.disabled,
              direction: "horizontal"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]), [e.control.radioGroup.map((a) => l(ee, h([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "checkbox":
          return l(b, h([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "input"
          }, [l(o, h([{
            ref: e.formItem.name,
            attrs: {
              disabled: t.disabled,
              direction: "horizontal"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]), [e.control.checkboxGroup.map((a) => l(p, h([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "datetimePicker":
          return l("div", [u(t, e), l(M, h([{
            attrs: {
              round: !0,
              position: "bottom"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.popup), {
            model: {
              value: e.showPopup,
              callback: (a) => {
                this.$set(e, "showPopup", a);
              }
            }
          }]), [l(f, h([{
            ref: e.formItem.name,
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (a) => {
                var n;
                this.$set(e, "showPopup", !1), this.$set(t.model, e.formItem.name, s(a, (n = e == null ? void 0 : e.control) == null ? void 0 : n.type));
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (D = e == null ? void 0 : e.control) == null ? void 0 : D.slots
          }]))])]);
        case "switch":
          return l(b, h([{
            class: "field-switch",
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "right-icon"
          }, [l(_, h([{
            ref: e.formItem.name,
            attrs: {
              disabled: t.disabled,
              size: "24px"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "uploader":
          return l(b, h([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "input"
          }, [l(i, h([{
            ref: e.formItem.name,
            attrs: {
              disabled: t.disabled
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (C = e == null ? void 0 : e.control) == null ? void 0 : C.slots,
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "slot":
          return l(b, h([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, e.formItem]), [l("template", {
            slot: "label"
          }, [e.formItem.label ? e.formItem.label : ""]), l("template", {
            slot: "input"
          }, [(Y = (z = e == null ? void 0 : e.control) == null ? void 0 : z.slots) != null && Y.input && typeof ((R = (q = e == null ? void 0 : e.control) == null ? void 0 : q.slots) == null ? void 0 : R.input) == "function" ? (L = (m = (H = e == null ? void 0 : e.control) == null ? void 0 : H.slots) == null ? void 0 : m.input) == null ? void 0 : L.call(m, {
            form: t.model,
            data: t.model[e.formItem.name]
          }) : this.$scopedSlots[e.formItem.name] ? (B = (U = this.$scopedSlots)[e.formItem.name]) == null ? void 0 : B.call(U, {
            form: t.model,
            data: t.model[e.formItem.name]
          }) : t.model[e.formItem.name]])]);
      }
    };
    return r(this.$attrs);
  }
}, he = (l, r, u, s) => {
  if (!Array.isArray(l))
    return [];
  const d = [];
  let e = [];
  return s && (e = Object.keys(s)), l.forEach((t) => {
    let c = {
      label: typeof t == "string" ? t : t[r],
      value: typeof t == "string" ? t : t[u]
    };
    s && e.forEach((v) => {
      c[v] = t[v];
    }), d.push(c);
  }), d;
}, W = (l, r) => l.filter((u) => u.formItem.prop === r)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
}, ne = (l, r, u) => {
  var e;
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
  }, d = W(l.formOption, l.field);
  if (Array.isArray(r) && r.length === 0)
    return u(new Error(`请${s[d.type] || "完善"}${d.formItem.label}`));
  if (!r)
    return u(new Error(`请${s[d.type] || "完善"}${d.formItem.label}`));
  if (!((e = d == null ? void 0 : d.formItem) != null && e.rules))
    return u();
  if (typeof d.formItem.rules.validator == "function")
    d.formItem.rules.validator(l, r).then(() => u()).catch((t) => {
      var c;
      return u(new Error(t !== "err" ? t : ((c = d == null ? void 0 : d.formItem.rules) == null ? void 0 : c.message) || ""));
    });
  else
    return d.formItem.rules.validator.test(r) ? u() : u(new Error(d.formItem.rules.message || "格式有误"));
}, ve = (l, r = []) => {
  let u = {};
  return l.forEach((s) => {
    var e, t;
    const d = typeof s == "string" ? s : s.formItem.prop;
    r.includes(d) || (u[d] = [{ required: !0, validator: ne, trigger: ((t = (e = s.formItem) == null ? void 0 : e.rules) == null ? void 0 : t.trigger) || "blur", formOption: l }]);
  }), u;
}, Ae = (l, r = []) => {
  const u = {
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
  return l.forEach((s) => {
    const d = { required: !0, message: `请${u[s.type] || "完善"}${s.formItem.label || ""}`, trigger: "change" };
    if (!r.includes(s.formItem.prop)) {
      s.formItem.rules ? Array.isArray(s.formItem.rules) ? s.formItem.rules.unshift(d) : Array.isArray(s.formItem.rules) || (s.formItem.rules = [d, s.formItem.rules]) : s.formItem.rules = [d];
      for (let e = 0; e < s.formItem.rules.length; e++) {
        let t = s.formItem.rules[e];
        t.validator && typeof t.validator != "function" && (t.pattern = t.validator, t.message = t.message || "格式有误", delete t.validator);
      }
    }
  }), l;
}, ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getLabel: W,
  getOption: he,
  getRules: ve,
  setRequired: Ae
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ie as FormGenerator,
  ye as GeneratorUtils
};
//# sourceMappingURL=index.js.map
