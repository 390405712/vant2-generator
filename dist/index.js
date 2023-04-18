(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Form as B, CellGroup as J, Button as K, Field as w, Uploader as T, Switch as W, Popup as m, DatetimePicker as Q, CheckboxGroup as X, Checkbox as Z, RadioGroup as V, Radio as i, Calendar as _, Cascader as f, Picker as o, Stepper as p } from "vant";
function P() {
  return P = Object.assign ? Object.assign.bind() : function(l) {
    for (var u, r = 1; r < arguments.length; r++)
      for (var s in u = arguments[r], u)
        Object.prototype.hasOwnProperty.call(u, s) && (l[s] = u[s]);
    return l;
  }, P.apply(this, arguments);
}
var O = ["attrs", "props", "domProps"], ee = ["class", "style", "directives"], te = ["on", "nativeOn"], se = function(l) {
  return l.reduce(function(u, r) {
    for (var s in r)
      if (!u[s])
        u[s] = r[s];
      else if (O.indexOf(s) !== -1)
        u[s] = P({}, u[s], r[s]);
      else if (ee.indexOf(s) !== -1) {
        var d = u[s] instanceof Array ? u[s] : [u[s]], e = r[s] instanceof Array ? r[s] : [r[s]];
        u[s] = [].concat(d, e);
      } else if (te.indexOf(s) !== -1)
        for (var t in r[s])
          if (u[s][t]) {
            var c = u[s][t] instanceof Array ? u[s][t] : [u[s][t]], v = r[s][t] instanceof Array ? r[s][t] : [r[s][t]];
            u[s][t] = [].concat(c, v);
          } else
            u[s][t] = r[s][t];
      else if (s === "hook")
        for (var A in r[s])
          u[s][A] = u[s][A] ? le(u[s][A], r[s][A]) : r[s][A];
      else
        u[s] = r[s];
    return u;
  }, {});
}, le = function(l, u) {
  return function() {
    l && l.apply(this, arguments), u && u.apply(this, arguments);
  };
}, h = se;
const ge = {
  name: "FormGenerator",
  methods: {
    getAttrAndEvent(l) {
      const u = {
        attrs: {},
        on: {}
      };
      for (const r in l)
        r.startsWith("on") && r.length > 2 ? u.on[r.substr(2).replace(/^\S/, (s) => s.toLowerCase())] = l[r] : u.attrs[r] = l[r];
      return u;
    }
  },
  render(l) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const u = (e) => {
      var t;
      return l(B, {
        class: "FormGenerator",
        attrs: {
          ...e
        },
        on: {
          ...this.$listeners
        },
        ref: "FormGenerator"
      }, [l(J, [e.formOption.map((c, v) => {
        if (!(c.hasOwnProperty("show") && c.show === !1))
          return d(c, e);
      })]), e.disabled === !0 || !this.$listeners.submit ? "" : (t = this.$scopedSlots) != null && t.default ? l("div", [this.$scopedSlots.default()[0]]) : l(K, {
        attrs: {
          type: "primary"
        },
        on: {
          click: this.submit
        }
      }, ["提交"])]);
    }, r = (e, t, c) => {
      var A;
      let v = c ? t.formItem.text : e.model[t.formItem.name];
      return l(w, h([{
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
          callback: (b) => {
            v = b;
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
      var c, v, A, b, F, M, G, j, D, C, z, N, Y, x, q, R, H;
      switch (e.type) {
        case "field":
          return l(w, h([{
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
          return l(w, h([{
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "right-icon"
          }, [l(p, h([{
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
          return l("div", [r(t, e, !0), l(m, h([{
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
          }]), [l(o, h([{
            ref: e.formItem.name,
            attrs: {
              "show-toolbar": !0
            },
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (a) => {
                var n, I, g, y;
                if (this.$set(e, "showPopup", !1), Array.isArray(a)) {
                  const k = a.reduce(($, S) => {
                    var E, L;
                    return $.push(typeof S == "object" ? S == null ? void 0 : S[((L = (E = e == null ? void 0 : e.control) == null ? void 0 : E.columnsFieldNames) == null ? void 0 : L.values) ?? "value"] : S), $;
                  }, []);
                  this.$set(t.model, e.formItem.name, k), e.formItem.text = a.map(($) => {
                    var S, E;
                    return typeof $ == "object" ? $ == null ? void 0 : $[((E = (S = e == null ? void 0 : e.control) == null ? void 0 : S.columnsFieldNames) == null ? void 0 : E.text) ?? "text"] : $;
                  }).join("/");
                } else
                  this.$set(t.model, e.formItem.name, a[((I = (n = e == null ? void 0 : e.control) == null ? void 0 : n.columnsFieldNames) == null ? void 0 : I.values) ?? "value"]), e.formItem.text = a[((y = (g = e == null ? void 0 : e.control) == null ? void 0 : g.columnsFieldNames) == null ? void 0 : y.text) ?? "text"];
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
          return l("div", [r(t, e, !0), l(m, h([{
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
              close: () => {
                this.$set(e, "showPopup", !1);
              },
              finish: (a) => {
                this.$set(e, "showPopup", !1), this.$set(t.model, e.formItem.name, a.value), e.formItem.text = a.selectedOptions.map((n) => {
                  var I, g;
                  return n[((g = (I = e == null ? void 0 : e.control) == null ? void 0 : I.fieldNames) == null ? void 0 : g.text) ?? "text"];
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
          return l("div", [r(t, e, ((b = e == null ? void 0 : e.control) == null ? void 0 : b.type) === "multiple"), l(_, h([{
            ref: e.formItem.name,
            attrs: {
              "show-confirm": ((F = e == null ? void 0 : e.control) == null ? void 0 : F.type) === "multiple"
            },
            on: {
              confirm: (a) => {
                var I;
                this.$set(e, "showPopup", !1);
                const n = (g) => {
                  var y, k, $;
                  return `${(y = g == null ? void 0 : g.getFullYear) == null ? void 0 : y.call(g)}-${((k = g == null ? void 0 : g.getMonth) == null ? void 0 : k.call(g)) + 1}-${($ = g == null ? void 0 : g.getDate) == null ? void 0 : $.call(g)}`;
                };
                switch ((I = e == null ? void 0 : e.control) == null ? void 0 : I.type) {
                  case "multiple":
                    const g = a.reduce((y, k) => (y.push(n(k)), y), []);
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
            scopedSlots: (M = e == null ? void 0 : e.control) == null ? void 0 : M.slots,
            model: {
              value: e.showPopup,
              callback: (a) => {
                this.$set(e, "showPopup", a);
              }
            }
          }]))]);
        case "radio":
          return l(w, h([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "input"
          }, [l(V, h([{
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
          }]), [e.control.radioGroup.map((a) => l(i, h([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "checkbox":
          return l(w, h([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "input"
          }, [l(X, h([{
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
          }]), [e.control.checkboxGroup.map((a) => l(Z, h([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "datetimePicker":
          return l("div", [r(t, e), l(m, h([{
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
          }]), [l(Q, h([{
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
            scopedSlots: (G = e == null ? void 0 : e.control) == null ? void 0 : G.slots
          }]))])]);
        case "switch":
          return l(w, h([{
            class: "field-switch",
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "right-icon"
          }, [l(W, h([{
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
          return l(w, h([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [l("template", {
            slot: "input"
          }, [l(T, h([{
            ref: e.formItem.name,
            attrs: {
              disabled: t.disabled
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (j = e == null ? void 0 : e.control) == null ? void 0 : j.slots,
            model: {
              value: t.model[e.formItem.name],
              callback: (a) => {
                this.$set(t.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "slot":
          return l(w, h([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, e.formItem]), [l("template", {
            slot: "label"
          }, [e.formItem.label ?? ""]), l("template", {
            slot: "input"
          }, [(C = (D = e == null ? void 0 : e.control) == null ? void 0 : D.slots) != null && C.input && typeof ((N = (z = e == null ? void 0 : e.control) == null ? void 0 : z.slots) == null ? void 0 : N.input) == "function" ? (q = (x = (Y = e == null ? void 0 : e.control) == null ? void 0 : Y.slots) == null ? void 0 : x.input) == null ? void 0 : q.call(x, {
            form: t.model,
            data: t.model[e.formItem.name]
          }) : this.$scopedSlots[e.formItem.name] ? (H = (R = this.$scopedSlots)[e.formItem.name]) == null ? void 0 : H.call(R, {
            form: t.model,
            data: t.model[e.formItem.name]
          }) : t.model[e.formItem.name]])]);
      }
    };
    return u(this.$attrs);
  }
}, ae = (l, u, r, s) => {
  if (!Array.isArray(l))
    return [];
  const d = [];
  let e = [];
  return s && (e = Object.keys(s)), l.forEach((t) => {
    let c = {
      label: typeof t == "string" ? t : t[u],
      value: typeof t == "string" ? t : t[r]
    };
    s && e.forEach((v) => {
      c[v] = t[v];
    }), d.push(c);
  }), d;
}, U = (l, u) => l.filter((r) => r.formItem.prop === u)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
}, re = (l, u, r) => {
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
  }, d = U(l.formOption, l.field);
  if (Array.isArray(u) && u.length === 0)
    return r(new Error(`请${s[d.type] || "完善"}${d.formItem.label}`));
  if (!u)
    return r(new Error(`请${s[d.type] || "完善"}${d.formItem.label}`));
  if (!((e = d == null ? void 0 : d.formItem) != null && e.rules))
    return r();
  if (typeof d.formItem.rules.validator == "function")
    d.formItem.rules.validator(l, u).then(() => r()).catch((t) => {
      var c;
      return r(new Error(t !== "err" ? t : ((c = d == null ? void 0 : d.formItem.rules) == null ? void 0 : c.message) || ""));
    });
  else
    return d.formItem.rules.validator.test(u) ? r() : r(new Error(d.formItem.rules.message || "格式有误"));
}, ue = (l, u = []) => {
  let r = {};
  return l.forEach((s) => {
    var e, t;
    const d = typeof s == "string" ? s : s.formItem.prop;
    u.includes(d) || (r[d] = [{ required: !0, validator: re, trigger: ((t = (e = s.formItem) == null ? void 0 : e.rules) == null ? void 0 : t.trigger) || "blur", formOption: l }]);
  }), r;
}, de = (l, u = []) => {
  const r = {
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
    const d = { required: !0, message: `请${r[s.type] || "完善"}${s.formItem.label || ""}`, trigger: "change" };
    if (!u.includes(s.formItem.prop)) {
      s.formItem.rules ? Array.isArray(s.formItem.rules) ? s.formItem.rules.unshift(d) : Array.isArray(s.formItem.rules) || (s.formItem.rules = [d, s.formItem.rules]) : s.formItem.rules = [d];
      for (let e = 0; e < s.formItem.rules.length; e++) {
        let t = s.formItem.rules[e];
        t.validator && typeof t.validator != "function" && (t.pattern = t.validator, t.message = t.message || "格式有误", delete t.validator);
      }
    }
  }), l;
}, he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getLabel: U,
  getOption: ae,
  getRules: ue,
  setRequired: de
}, Symbol.toStringTag, { value: "Module" }));
export {
  ge as FormGenerator,
  he as GeneratorUtils
};
//# sourceMappingURL=index.js.map
