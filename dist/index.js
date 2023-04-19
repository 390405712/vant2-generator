(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}.FormGenerator .van-cell-group div .van-cell:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Form as Q, CellGroup as X, Button as Z, Field as w, Uploader as m, Switch as _, Popup as M, DatetimePicker as i, CheckboxGroup as f, Checkbox as p, RadioGroup as o, Radio as O, Calendar as ee, Cascader as le, Picker as se, Stepper as ae } from "vant";
function N() {
  return N = Object.assign ? Object.assign.bind() : function(s) {
    for (var d, u = 1; u < arguments.length; u++)
      for (var a in d = arguments[u], d)
        Object.prototype.hasOwnProperty.call(d, a) && (s[a] = d[a]);
    return s;
  }, N.apply(this, arguments);
}
var te = ["attrs", "props", "domProps"], de = ["class", "style", "directives"], ue = ["on", "nativeOn"], ce = function(s) {
  return s.reduce(function(d, u) {
    for (var a in u)
      if (!d[a])
        d[a] = u[a];
      else if (te.indexOf(a) !== -1)
        d[a] = N({}, d[a], u[a]);
      else if (de.indexOf(a) !== -1) {
        var n = d[a] instanceof Array ? d[a] : [d[a]], e = u[a] instanceof Array ? u[a] : [u[a]];
        d[a] = [].concat(n, e);
      } else if (ue.indexOf(a) !== -1)
        for (var l in u[a])
          if (d[a][l]) {
            var g = d[a][l] instanceof Array ? d[a][l] : [d[a][l]], v = u[a][l] instanceof Array ? u[a][l] : [u[a][l]];
            d[a][l] = [].concat(g, v);
          } else
            d[a][l] = u[a][l];
      else if (a === "hook")
        for (var $ in u[a])
          d[a][$] = d[a][$] ? re(d[a][$], u[a][$]) : u[a][$];
      else
        d[a] = u[a];
    return d;
  }, {});
}, re = function(s, d) {
  return function() {
    s && s.apply(this, arguments), d && d.apply(this, arguments);
  };
}, r = ce;
const $e = {
  name: "FormGenerator",
  methods: {
    getAttrAndEvent(s) {
      const d = {
        attrs: {},
        on: {}
      };
      for (const u in s)
        u.startsWith("on") && u.length > 2 ? d.on[u.substr(2).replace(/^\S/, (a) => a.toLowerCase())] = s[u] : d.attrs[u] = s[u];
      return d;
    },
    submit: (...s) => globalThis.$refs.FormGenerator.submit(...s),
    validate: (...s) => globalThis.$refs.FormGenerator.validate(...s),
    resetValidation: (...s) => globalThis.$refs.FormGenerator.resetValidation(...s),
    scrollToField: (...s) => globalThis.$refs.FormGenerator.scrollToField(...s)
  },
  render(s) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const d = (e) => {
      var l;
      return s(Q, {
        class: "FormGenerator",
        attrs: {
          ...e
        },
        on: {
          ...this.$listeners
        },
        ref: "FormGenerator"
      }, [s(X, [e.formOption.map((g, v) => {
        if (!(g.hasOwnProperty("show") && g.show === !1))
          return n(g, e);
      })]), e.disabled === !0 || !this.$listeners.submit ? "" : (l = this.$scopedSlots) != null && l.default ? s("div", [this.$scopedSlots.default()[0]]) : s(Z, {
        attrs: {
          type: "info",
          block: !0
        },
        on: {
          click: this.submit
        }
      }, ["提交"])]);
    }, u = (e, l, g) => {
      var $;
      let v = g ? l.formItem.text : e.model[l.formItem.name];
      return s(w, r([{
        attrs: {
          "is-link": !0,
          readonly: !0,
          inputAlign: "right"
        },
        on: {
          click: e.disabled ? () => "" : () => {
            this.$set(l, "showPopup", !0);
          }
        }
      }, this.getAttrAndEvent(l == null ? void 0 : l.formItem), {
        scopedSlots: ($ = l == null ? void 0 : l.formItem) == null ? void 0 : $.slots,
        model: {
          value: v,
          callback: (P) => {
            v = P;
          }
        }
      }]));
    }, a = (e, l = "datetime") => {
      let g;
      switch (l) {
        case "date":
          g = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
          break;
        case "datehour":
          g = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}`;
          break;
        case "year-month":
          g = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
          break;
        case "month-day":
          g = `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
          break;
        case "time":
          g = e;
          break;
        case "datetime":
          g = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
          break;
      }
      return g;
    }, n = (e, l) => {
      var g, v, $, P, D, j, C, T, z, Y, R, q, H, G, U, V, B;
      switch (e.type) {
        case "field":
          return s(w, r([{
            ref: e.formItem.name,
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent({
            ...e.formItem,
            ...e.control
          }), {
            scopedSlots: (g = e == null ? void 0 : e.control) == null ? void 0 : g.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]));
        case "stepper":
          return s(w, r([{
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "right-icon"
          }, [s(ae, r([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              "button-size": "21px"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]))])]);
        case "picker":
          return s("div", [u(l, e, !0), s("div", [s(M, r([{
            attrs: {
              "lazy-render": !1,
              round: !0,
              position: "bottom"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.popup), {
            model: {
              value: e.showPopup,
              callback: (t) => {
                this.$set(e, "showPopup", t);
              }
            }
          }]), [s(se, r([{
            ref: e.formItem.name,
            attrs: {
              "show-toolbar": !0
            },
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (t) => {
                var h, S, c, A, I, b, J, K;
                if (this.$set(e, "showPopup", !1), Array.isArray(t)) {
                  const W = t.reduce((y, k) => {
                    var x, F, E, L;
                    return y.push(typeof k == "object" ? k == null ? void 0 : k[(F = (x = e == null ? void 0 : e.control) == null ? void 0 : x.columnsFieldNames) != null && F.values ? (L = (E = e == null ? void 0 : e.control) == null ? void 0 : E.columnsFieldNames) == null ? void 0 : L.values : "value"] : k), y;
                  }, []);
                  this.$set(l.model, e.formItem.name, W), e.formItem.text = t.map((y) => {
                    var k, x, F, E;
                    return typeof y == "object" ? y == null ? void 0 : y[(x = (k = e == null ? void 0 : e.control) == null ? void 0 : k.columnsFieldNames) != null && x.text ? (E = (F = e == null ? void 0 : e.control) == null ? void 0 : F.columnsFieldNames) == null ? void 0 : E.text : "text"] : y;
                  }).join("/");
                } else
                  this.$set(l.model, e.formItem.name, t[(S = (h = e == null ? void 0 : e.control) == null ? void 0 : h.columnsFieldNames) != null && S.values ? (A = (c = e == null ? void 0 : e.control) == null ? void 0 : c.columnsFieldNames) == null ? void 0 : A.values : "value"]), e.formItem.text = t[(b = (I = e == null ? void 0 : e.control) == null ? void 0 : I.columnsFieldNames) != null && b.text ? (K = (J = e == null ? void 0 : e.control) == null ? void 0 : J.columnsFieldNames) == null ? void 0 : K.text : "text"];
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (v = e == null ? void 0 : e.control) == null ? void 0 : v.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]))])])]);
        case "cascader":
          return s("div", [u(l, e, !0), s("div", [s(M, r([{
            attrs: {
              round: !0,
              position: "bottom"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.popup), {
            model: {
              value: e.showPopup,
              callback: (t) => {
                this.$set(e, "showPopup", t);
              }
            }
          }]), [s(le, r([{
            ref: e.formItem.name,
            on: {
              close: () => {
                this.$set(e, "showPopup", !1);
              },
              finish: (t) => {
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, t.value), e.formItem.text = t.selectedOptions.map((h) => {
                  var S, c, A, I;
                  return h[(c = (S = e == null ? void 0 : e.control) == null ? void 0 : S.fieldNames) != null && c.text ? (I = (A = e == null ? void 0 : e.control) == null ? void 0 : A.fieldNames) == null ? void 0 : I.text : "text"];
                }).join("/");
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: ($ = e == null ? void 0 : e.control) == null ? void 0 : $.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]))])])]);
        case "calendar":
          return s("div", [u(l, e, ((P = e == null ? void 0 : e.control) == null ? void 0 : P.type) === "multiple"), s("div", [s(ee, r([{
            ref: e.formItem.name,
            attrs: {
              "show-confirm": ((D = e == null ? void 0 : e.control) == null ? void 0 : D.type) === "multiple"
            },
            on: {
              confirm: (t) => {
                var S;
                this.$set(e, "showPopup", !1);
                const h = (c) => {
                  var A, I, b;
                  return `${(A = c == null ? void 0 : c.getFullYear) == null ? void 0 : A.call(c)}-${((I = c == null ? void 0 : c.getMonth) == null ? void 0 : I.call(c)) + 1}-${(b = c == null ? void 0 : c.getDate) == null ? void 0 : b.call(c)}`;
                };
                switch ((S = e == null ? void 0 : e.control) == null ? void 0 : S.type) {
                  case "multiple":
                    const c = t.reduce((A, I) => (A.push(h(I)), A), []);
                    this.$set(l.model, e.formItem.name, c), e.formItem.text = `选择了 ${t.length} 个日期`;
                    break;
                  case "range":
                    this.$set(l.model, e.formItem.name, `${h(t[0])}~${h(t[1])}`);
                    break;
                  default:
                    this.$set(l.model, e.formItem.name, h(t));
                    break;
                }
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (j = e == null ? void 0 : e.control) == null ? void 0 : j.slots,
            model: {
              value: e.showPopup,
              callback: (t) => {
                this.$set(e, "showPopup", t);
              }
            }
          }]))])]);
        case "radio":
          return s(w, r([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "input"
          }, [s(o, r([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              direction: "horizontal"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]), [e.control.radioGroup.map((t) => s(O, r([{
            attrs: {
              name: t.value
            }
          }, this.getAttrAndEvent(t), {
            scopedSlots: t == null ? void 0 : t.slots
          }]), [t.label]))])])]);
        case "checkbox":
          return s(w, r([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "input"
          }, [s(f, r([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              direction: "horizontal"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]), [e.control.checkboxGroup.map((t) => s(p, r([{
            attrs: {
              name: t.value
            }
          }, this.getAttrAndEvent(t), {
            scopedSlots: t == null ? void 0 : t.slots
          }]), [t.label]))])])]);
        case "datetimePicker":
          return s("div", [u(l, e), s("div", [s(M, r([{
            attrs: {
              round: !0,
              position: "bottom"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.popup), {
            model: {
              value: e.showPopup,
              callback: (t) => {
                this.$set(e, "showPopup", t);
              }
            }
          }]), [s(i, r([{
            ref: e.formItem.name,
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (t) => {
                var h;
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, a(t, (h = e == null ? void 0 : e.control) == null ? void 0 : h.type));
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (C = e == null ? void 0 : e.control) == null ? void 0 : C.slots
          }]))])])]);
        case "switch":
          return s(w, r([{
            class: "field-switch",
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "right-icon"
          }, [s(_, r([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              size: "24px"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]))])]);
        case "uploader":
          return s(w, r([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "input"
          }, [s(m, r([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (T = e == null ? void 0 : e.control) == null ? void 0 : T.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]))])]);
        case "slot":
          return s(w, r([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, e.formItem]), [s("template", {
            slot: "label"
          }, [e.formItem.label ? e.formItem.label : ""]), s("template", {
            slot: "input"
          }, [(Y = (z = e == null ? void 0 : e.control) == null ? void 0 : z.slots) != null && Y.input && typeof ((q = (R = e == null ? void 0 : e.control) == null ? void 0 : R.slots) == null ? void 0 : q.input) == "function" ? (U = (G = (H = e == null ? void 0 : e.control) == null ? void 0 : H.slots) == null ? void 0 : G.input) == null ? void 0 : U.call(G, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : this.$scopedSlots[e.formItem.name] ? (B = (V = this.$scopedSlots)[e.formItem.name]) == null ? void 0 : B.call(V, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : l.model[e.formItem.name]])]);
      }
    };
    return d(this.$attrs);
  }
}, ge = (s, d, u, a) => {
  if (!Array.isArray(s))
    return [];
  const n = [];
  let e = [];
  return a && (e = Object.keys(a)), s.forEach((l) => {
    let g = {
      label: typeof l == "string" ? l : l[d],
      value: typeof l == "string" ? l : l[u]
    };
    a && e.forEach((v) => {
      g[v] = l[v];
    }), n.push(g);
  }), n;
}, he = (s, d = []) => {
  const u = {
    field: "输入",
    stepper: "输入",
    picker: "选择",
    radio: "选择",
    checkbox: "选择",
    switch: "选择",
    datetimePicker: "选择",
    calendar: "选择",
    cascader: "选择",
    uploader: "上传",
    slot: ""
  };
  return s.forEach((a) => {
    const n = { required: !0, message: `请${u[a.type] || "完善"}${a.formItem.label || ""}`, trigger: "onChange" };
    if (!d.includes(a.formItem.name) && (a.formItem.required = !0, !["stepper", "switch"].includes(a.type))) {
      a.formItem.rules ? a.formItem.rules.unshift(n) : a.formItem.rules = [n];
      for (let e = 0; e < a.formItem.rules.length; e++) {
        let l = a.formItem.rules[e];
        l.message || (l.message = "格式有误");
      }
    }
  }), s;
}, Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: ge,
  setRequired: he
}, Symbol.toStringTag, { value: "Module" }));
export {
  $e as FormGenerator,
  Ae as GeneratorUtils
};
//# sourceMappingURL=index.js.map
