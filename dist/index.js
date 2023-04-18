(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Form as V, CellGroup as X, Button as Z, Field as w, Uploader as m, Switch as _, Popup as G, DatetimePicker as i, CheckboxGroup as f, Checkbox as p, RadioGroup as o, Radio as O, Calendar as ee, Cascader as le, Picker as se, Stepper as ae } from "vant";
function N() {
  return N = Object.assign ? Object.assign.bind() : function(a) {
    for (var d, u = 1; u < arguments.length; u++)
      for (var s in d = arguments[u], d)
        Object.prototype.hasOwnProperty.call(d, s) && (a[s] = d[s]);
    return a;
  }, N.apply(this, arguments);
}
var te = ["attrs", "props", "domProps"], de = ["class", "style", "directives"], ue = ["on", "nativeOn"], ce = function(a) {
  return a.reduce(function(d, u) {
    for (var s in u)
      if (!d[s])
        d[s] = u[s];
      else if (te.indexOf(s) !== -1)
        d[s] = N({}, d[s], u[s]);
      else if (de.indexOf(s) !== -1) {
        var S = d[s] instanceof Array ? d[s] : [d[s]], e = u[s] instanceof Array ? u[s] : [u[s]];
        d[s] = [].concat(S, e);
      } else if (ue.indexOf(s) !== -1)
        for (var l in u[s])
          if (d[s][l]) {
            var g = d[s][l] instanceof Array ? d[s][l] : [d[s][l]], v = u[s][l] instanceof Array ? u[s][l] : [u[s][l]];
            d[s][l] = [].concat(g, v);
          } else
            d[s][l] = u[s][l];
      else if (s === "hook")
        for (var $ in u[s])
          d[s][$] = d[s][$] ? re(d[s][$], u[s][$]) : u[s][$];
      else
        d[s] = u[s];
    return d;
  }, {});
}, re = function(a, d) {
  return function() {
    a && a.apply(this, arguments), d && d.apply(this, arguments);
  };
}, r = ce;
const $e = {
  name: "FormGenerator",
  methods: {
    getAttrAndEvent(a) {
      const d = {
        attrs: {},
        on: {}
      };
      for (const u in a)
        u.startsWith("on") && u.length > 2 ? d.on[u.substr(2).replace(/^\S/, (s) => s.toLowerCase())] = a[u] : d.attrs[u] = a[u];
      return d;
    }
  },
  render(a) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const d = (e) => {
      var l;
      return a(V, {
        class: "FormGenerator",
        attrs: {
          ...e
        },
        on: {
          ...this.$listeners
        },
        ref: "FormGenerator"
      }, [a(X, [e.formOption.map((g, v) => {
        if (!(g.hasOwnProperty("show") && g.show === !1))
          return S(g, e);
      })]), e.disabled === !0 || !this.$listeners.submit ? "" : (l = this.$scopedSlots) != null && l.default ? a("div", [this.$scopedSlots.default()[0]]) : a(Z, {
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
      return a(w, r([{
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
          callback: (F) => {
            v = F;
          }
        }
      }]));
    }, s = (e, l = "datetime") => {
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
    }, S = (e, l) => {
      var g, v, $, F, D, j, C, z, Y, R, q, H, U, M, B, J, K;
      switch (e.type) {
        case "field":
          return a(w, r([{
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
          return a(w, r([{
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [a("template", {
            slot: "right-icon"
          }, [a(ae, r([{
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
          return a("div", [u(l, e, !0), a(G, r([{
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
          }]), [a(se, r([{
            ref: e.formItem.name,
            attrs: {
              "show-toolbar": !0
            },
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (t) => {
                var h, y, c, A, I, x, L, T;
                if (this.$set(e, "showPopup", !1), Array.isArray(t)) {
                  const Q = t.reduce((k, n) => {
                    var E, P, b, W;
                    return k.push(typeof n == "object" ? n == null ? void 0 : n[(P = (E = e == null ? void 0 : e.control) == null ? void 0 : E.columnsFieldNames) != null && P.values ? (W = (b = e == null ? void 0 : e.control) == null ? void 0 : b.columnsFieldNames) == null ? void 0 : W.values : "value"] : n), k;
                  }, []);
                  this.$set(l.model, e.formItem.name, Q), e.formItem.text = t.map((k) => {
                    var n, E, P, b;
                    return typeof k == "object" ? k == null ? void 0 : k[(E = (n = e == null ? void 0 : e.control) == null ? void 0 : n.columnsFieldNames) != null && E.text ? (b = (P = e == null ? void 0 : e.control) == null ? void 0 : P.columnsFieldNames) == null ? void 0 : b.text : "text"] : k;
                  }).join("/");
                } else
                  this.$set(l.model, e.formItem.name, t[(y = (h = e == null ? void 0 : e.control) == null ? void 0 : h.columnsFieldNames) != null && y.values ? (A = (c = e == null ? void 0 : e.control) == null ? void 0 : c.columnsFieldNames) == null ? void 0 : A.values : "value"]), e.formItem.text = t[(x = (I = e == null ? void 0 : e.control) == null ? void 0 : I.columnsFieldNames) != null && x.text ? (T = (L = e == null ? void 0 : e.control) == null ? void 0 : L.columnsFieldNames) == null ? void 0 : T.text : "text"];
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
          }]))])]);
        case "cascader":
          return a("div", [u(l, e, !0), a(G, r([{
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
          }]), [a(le, r([{
            ref: e.formItem.name,
            on: {
              close: () => {
                this.$set(e, "showPopup", !1);
              },
              finish: (t) => {
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, t.value), e.formItem.text = t.selectedOptions.map((h) => {
                  var y, c, A, I;
                  return h[(c = (y = e == null ? void 0 : e.control) == null ? void 0 : y.fieldNames) != null && c.text ? (I = (A = e == null ? void 0 : e.control) == null ? void 0 : A.fieldNames) == null ? void 0 : I.text : "text"];
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
          }]))])]);
        case "calendar":
          return a("div", [u(l, e, ((F = e == null ? void 0 : e.control) == null ? void 0 : F.type) === "multiple"), a(ee, r([{
            ref: e.formItem.name,
            attrs: {
              "show-confirm": ((D = e == null ? void 0 : e.control) == null ? void 0 : D.type) === "multiple"
            },
            on: {
              confirm: (t) => {
                var y;
                this.$set(e, "showPopup", !1);
                const h = (c) => {
                  var A, I, x;
                  return `${(A = c == null ? void 0 : c.getFullYear) == null ? void 0 : A.call(c)}-${((I = c == null ? void 0 : c.getMonth) == null ? void 0 : I.call(c)) + 1}-${(x = c == null ? void 0 : c.getDate) == null ? void 0 : x.call(c)}`;
                };
                switch ((y = e == null ? void 0 : e.control) == null ? void 0 : y.type) {
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
          }]))]);
        case "radio":
          return a(w, r([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [a("template", {
            slot: "input"
          }, [a(o, r([{
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
          }]), [e.control.radioGroup.map((t) => a(O, r([{
            attrs: {
              name: t.value
            }
          }, this.getAttrAndEvent(t), {
            scopedSlots: t == null ? void 0 : t.slots
          }]), [t.label]))])])]);
        case "checkbox":
          return a(w, r([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [a("template", {
            slot: "input"
          }, [a(f, r([{
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
          }]), [e.control.checkboxGroup.map((t) => a(p, r([{
            attrs: {
              name: t.value
            }
          }, this.getAttrAndEvent(t), {
            scopedSlots: t == null ? void 0 : t.slots
          }]), [t.label]))])])]);
        case "datetimePicker":
          return a("div", [u(l, e), a(G, r([{
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
          }]), [a(i, r([{
            ref: e.formItem.name,
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (t) => {
                var h;
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, s(t, (h = e == null ? void 0 : e.control) == null ? void 0 : h.type));
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (C = e == null ? void 0 : e.control) == null ? void 0 : C.slots
          }]))])]);
        case "switch":
          return a(w, r([{
            class: "field-switch",
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [a("template", {
            slot: "right-icon"
          }, [a(_, r([{
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
          return a(w, r([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [a("template", {
            slot: "input"
          }, [a(m, r([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (z = e == null ? void 0 : e.control) == null ? void 0 : z.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (t) => {
                this.$set(l.model, e.formItem.name, t);
              }
            }
          }]))])]);
        case "slot":
          return a(w, r([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, e.formItem]), [a("template", {
            slot: "label"
          }, [e.formItem.label ? e.formItem.label : ""]), a("template", {
            slot: "input"
          }, [(R = (Y = e == null ? void 0 : e.control) == null ? void 0 : Y.slots) != null && R.input && typeof ((H = (q = e == null ? void 0 : e.control) == null ? void 0 : q.slots) == null ? void 0 : H.input) == "function" ? (B = (M = (U = e == null ? void 0 : e.control) == null ? void 0 : U.slots) == null ? void 0 : M.input) == null ? void 0 : B.call(M, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : this.$scopedSlots[e.formItem.name] ? (K = (J = this.$scopedSlots)[e.formItem.name]) == null ? void 0 : K.call(J, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : l.model[e.formItem.name]])]);
      }
    };
    return d(this.$attrs);
  }
}, ge = (a, d, u, s) => {
  if (!Array.isArray(a))
    return [];
  const S = [];
  let e = [];
  return s && (e = Object.keys(s)), a.forEach((l) => {
    let g = {
      label: typeof l == "string" ? l : l[d],
      value: typeof l == "string" ? l : l[u]
    };
    s && e.forEach((v) => {
      g[v] = l[v];
    }), S.push(g);
  }), S;
}, he = (a, d = []) => {
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
  return a.forEach((s) => {
    const S = { required: !0, message: `请${u[s.type] || "完善"}${s.formItem.label || ""}`, trigger: "onChange" };
    if (!d.includes(s.formItem.name) && (s.formItem.required = !0, !["stepper", "switch"].includes(s.type))) {
      s.formItem.rules ? s.formItem.rules.unshift(S) : s.formItem.rules = [S];
      for (let e = 0; e < s.formItem.rules.length; e++) {
        let l = s.formItem.rules[e];
        l.message || (l.message = "格式有误");
      }
    }
  }), a;
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
