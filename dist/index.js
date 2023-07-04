(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}.FormGenerator .van-cell-group div .van-cell:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Form as ee, CellGroup as le, Button as se, Field as P, Uploader as ae, Switch as te, Popup as z, DatetimePicker as de, CheckboxGroup as ue, Checkbox as ce, RadioGroup as ge, Radio as he, Calendar as re, Cascader as ve, Picker as $e, Stepper as Ae } from "vant";
function Y() {
  return Y = Object.assign ? Object.assign.bind() : function(s) {
    for (var d, c = 1; c < arguments.length; c++)
      for (var t in d = arguments[c], d)
        Object.prototype.hasOwnProperty.call(d, t) && (s[t] = d[t]);
    return s;
  }, Y.apply(this, arguments);
}
var Ie = ["attrs", "props", "domProps"], ye = ["class", "style", "directives"], xe = ["on", "nativeOn"], Se = function(s) {
  return s.reduce(function(d, c) {
    for (var t in c)
      if (!d[t])
        d[t] = c[t];
      else if (Ie.indexOf(t) !== -1)
        d[t] = Y({}, d[t], c[t]);
      else if (ye.indexOf(t) !== -1) {
        var w = d[t] instanceof Array ? d[t] : [d[t]], e = c[t] instanceof Array ? c[t] : [c[t]];
        d[t] = [].concat(w, e);
      } else if (xe.indexOf(t) !== -1)
        for (var l in c[t])
          if (d[t][l]) {
            var r = d[t][l] instanceof Array ? d[t][l] : [d[t][l]], x = c[t][l] instanceof Array ? c[t][l] : [c[t][l]];
            d[t][l] = [].concat(r, x);
          } else
            d[t][l] = c[t][l];
      else if (t === "hook")
        for (var S in c[t])
          d[t][S] = d[t][S] ? ke(d[t][S], c[t][S]) : c[t][S];
      else
        d[t] = c[t];
    return d;
  }, {});
}, ke = function(s, d) {
  return function() {
    s && s.apply(this, arguments), d && d.apply(this, arguments);
  };
}, v = Se;
const Pe = {
  name: "FormGenerator",
  methods: {
    getAttrAndEvent(s) {
      const d = {
        attrs: {},
        on: {}
      };
      for (const c in s)
        c.startsWith("on") && c.length > 2 ? d.on[c.substr(2).replace(/^\S/, (t) => t.toLowerCase())] = s[c] : d.attrs[c] = s[c];
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
      return s(ee, {
        class: "FormGenerator",
        attrs: {
          ...e
        },
        on: {
          ...this.$listeners
        },
        ref: "FormGenerator"
      }, [s(le, [e.formOption.map((r, x) => {
        if (!(r.hasOwnProperty("show") && r.show === !1))
          return w(r, e);
      })]), e.disabled === !0 || !this.$listeners.submit ? "" : (l = this.$scopedSlots) != null && l.default ? s("div", [this.$scopedSlots.default()[0]]) : s(se, {
        attrs: {
          type: "info",
          loading: e.loading,
          block: !0
        },
        on: {
          click: this.submit
        }
      }, ["提交"])]);
    }, c = (e, l, r) => {
      var S;
      let x = r ? l.formItem.text : e.model[l.formItem.name];
      return s(P, v([{
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
        scopedSlots: (S = l == null ? void 0 : l.formItem) == null ? void 0 : S.slots,
        model: {
          value: x,
          callback: (C) => {
            x = C;
          }
        }
      }]));
    }, t = (e, l = "datetime") => {
      let r;
      switch (l) {
        case "date":
          r = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
          break;
        case "datehour":
          r = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}`;
          break;
        case "year-month":
          r = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
          break;
        case "month-day":
          r = `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
          break;
        case "time":
          r = e;
          break;
        case "datetime":
          r = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
          break;
      }
      return r;
    }, w = (e, l) => {
      var x, S, C, R, q, H, U, V, B, J, K, L, W, Q, X, Z, n, F, N, _, m, i, T, f, p, o;
      function r(a, h, u, g = !1) {
        var $;
        if (!Array.isArray(a))
          return "";
        for (let A = 0; A < a.length; A++) {
          const I = a[A];
          if (typeof I == "string") {
            if (I === h)
              return I[(u == null ? void 0 : u.text) ?? "text"] || "";
          } else if (I[(u == null ? void 0 : u.values) ?? (u == null ? void 0 : u.value) ?? "value"] === h)
            return I[(u == null ? void 0 : u.text) ?? "text"] || "";
          if (($ = I[(u == null ? void 0 : u.children) ?? "children"]) != null && $.length) {
            const b = r(I[(u == null ? void 0 : u.children) ?? "children"], h, u, g);
            if (b)
              return g ? `${I[(u == null ? void 0 : u.text) ?? "text"]}/${b}` : b;
          }
        }
        return null;
      }
      switch (e.type) {
        case "field":
          return s(P, v([{
            ref: e.formItem.name,
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent({
            ...e.formItem,
            ...e.control
          }), {
            scopedSlots: (x = e == null ? void 0 : e.control) == null ? void 0 : x.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]));
        case "stepper":
          return s(P, v([{
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "right-icon"
          }, [s(Ae, v([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              "button-size": "21px"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "picker":
          return !e.formItem.hasOwnProperty("text") && l.model[e.formItem.name] && ((S = e == null ? void 0 : e.control) != null && S.columns) && (Array.isArray((q = (R = (C = e == null ? void 0 : e.control) == null ? void 0 : C.columns) == null ? void 0 : R[0]) == null ? void 0 : q.values) ? e.formItem.text = (H = e == null ? void 0 : e.control) == null ? void 0 : H.columns.reduce((a, h, u) => {
            var g, $, A, I, b, G;
            return typeof ((g = h == null ? void 0 : h.values) == null ? void 0 : g[0]) == "string" ? a.push(($ = h.values) == null ? void 0 : $.find((M) => {
              var y;
              return M === ((y = l.model[e.formItem.name]) == null ? void 0 : y[u]);
            })) : a.push((G = (A = h.values) == null ? void 0 : A.find((M) => {
              var y, k, E;
              return M[((k = (y = e == null ? void 0 : e.control) == null ? void 0 : y.columnsFieldNames) == null ? void 0 : k.values) ?? "value"] === ((E = l.model[e.formItem.name]) == null ? void 0 : E[u]);
            })) == null ? void 0 : G[((b = (I = e == null ? void 0 : e.control) == null ? void 0 : I.columnsFieldNames) == null ? void 0 : b.text) ?? "text"]), a;
          }, []).join("/") : Array.isArray(l.model[e.formItem.name]) ? e.formItem.text = l.model[e.formItem.name].reduce((a, h) => {
            var u, g;
            return a.push(r((u = e == null ? void 0 : e.control) == null ? void 0 : u.columns, h, (g = e == null ? void 0 : e.control) == null ? void 0 : g.columnsFieldNames)), a;
          }, []).join("/") : e.formItem.text = r((U = e == null ? void 0 : e.control) == null ? void 0 : U.columns, l.model[e.formItem.name], (V = e == null ? void 0 : e.control) == null ? void 0 : V.columnsFieldNames)), s("div", [c(l, e, !0), s("div", [s(z, v([{
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
          }]), [s($e, v([{
            ref: e.formItem.name,
            attrs: {
              "show-toolbar": !0
            },
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (a) => {
                var h, u, g, $, A, I, b, G;
                if (this.$set(e, "showPopup", !1), Array.isArray(a)) {
                  const M = a.reduce((y, k) => {
                    var E, j, D, O;
                    return y.push(typeof k == "object" ? k == null ? void 0 : k[(j = (E = e == null ? void 0 : e.control) == null ? void 0 : E.columnsFieldNames) != null && j.values ? (O = (D = e == null ? void 0 : e.control) == null ? void 0 : D.columnsFieldNames) == null ? void 0 : O.values : "value"] : k), y;
                  }, []);
                  this.$set(l.model, e.formItem.name, M), e.formItem.text = a.map((y) => {
                    var k, E, j, D;
                    return typeof y == "object" ? y == null ? void 0 : y[(E = (k = e == null ? void 0 : e.control) == null ? void 0 : k.columnsFieldNames) != null && E.text ? (D = (j = e == null ? void 0 : e.control) == null ? void 0 : j.columnsFieldNames) == null ? void 0 : D.text : "text"] : y;
                  }).join("/");
                } else
                  this.$set(l.model, e.formItem.name, a[(u = (h = e == null ? void 0 : e.control) == null ? void 0 : h.columnsFieldNames) != null && u.values ? ($ = (g = e == null ? void 0 : e.control) == null ? void 0 : g.columnsFieldNames) == null ? void 0 : $.values : "value"]), e.formItem.text = a[(I = (A = e == null ? void 0 : e.control) == null ? void 0 : A.columnsFieldNames) != null && I.text ? (G = (b = e == null ? void 0 : e.control) == null ? void 0 : b.columnsFieldNames) == null ? void 0 : G.text : "text"];
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (B = e == null ? void 0 : e.control) == null ? void 0 : B.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]))])])]);
        case "cascader":
          return l.model[e.formItem.name] && (e.formItem.text = r((J = e == null ? void 0 : e.control) == null ? void 0 : J.options, l.model[e.formItem.name], (K = e == null ? void 0 : e.control) == null ? void 0 : K.fieldNames, !0)), s("div", [c(l, e, !0), s("div", [s(z, v([{
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
          }]), [s(ve, v([{
            ref: e.formItem.name,
            on: {
              close: () => {
                this.$set(e, "showPopup", !1);
              },
              finish: (a) => {
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, a.value), e.formItem.text = a.selectedOptions.map((h) => {
                  var u, g, $, A;
                  return h[(g = (u = e == null ? void 0 : e.control) == null ? void 0 : u.fieldNames) != null && g.text ? (A = ($ = e == null ? void 0 : e.control) == null ? void 0 : $.fieldNames) == null ? void 0 : A.text : "text"];
                }).join("/");
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (L = e == null ? void 0 : e.control) == null ? void 0 : L.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]))])])]);
        case "calendar":
          return s("div", [c(l, e, ((W = e == null ? void 0 : e.control) == null ? void 0 : W.type) === "multiple"), s("div", [s(re, v([{
            ref: e.formItem.name,
            attrs: {
              "show-confirm": ((Q = e == null ? void 0 : e.control) == null ? void 0 : Q.type) === "multiple"
            },
            on: {
              confirm: (a) => {
                var u;
                this.$set(e, "showPopup", !1);
                const h = (g) => {
                  var $, A, I;
                  return `${($ = g == null ? void 0 : g.getFullYear) == null ? void 0 : $.call(g)}-${((A = g == null ? void 0 : g.getMonth) == null ? void 0 : A.call(g)) + 1}-${(I = g == null ? void 0 : g.getDate) == null ? void 0 : I.call(g)}`;
                };
                switch ((u = e == null ? void 0 : e.control) == null ? void 0 : u.type) {
                  case "multiple":
                    const g = a.reduce(($, A) => ($.push(h(A)), $), []);
                    this.$set(l.model, e.formItem.name, g), e.formItem.text = `选择了 ${a.length} 个日期`;
                    break;
                  case "range":
                    this.$set(l.model, e.formItem.name, `${h(a[0])}~${h(a[1])}`);
                    break;
                  default:
                    this.$set(l.model, e.formItem.name, h(a));
                    break;
                }
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (X = e == null ? void 0 : e.control) == null ? void 0 : X.slots,
            model: {
              value: e.showPopup,
              callback: (a) => {
                this.$set(e, "showPopup", a);
              }
            }
          }]))])]);
        case "radio":
          return s(P, v([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "input"
          }, [s(ge, v([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              direction: "horizontal"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]), [e.control.radioGroup.map((a) => s(he, v([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "checkbox":
          return s(P, v([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "input"
          }, [s(ue, v([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              direction: "horizontal"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]), [e.control.checkboxGroup.map((a) => s(ce, v([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "datetimePicker":
          return s("div", [c(l, e), s("div", [s(z, v([{
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
          }]), [s(de, v([{
            ref: e.formItem.name,
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (a) => {
                var h;
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, t(a, (h = e == null ? void 0 : e.control) == null ? void 0 : h.type));
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (Z = e == null ? void 0 : e.control) == null ? void 0 : Z.slots
          }]))])])]);
        case "switch":
          return s(P, v([{
            class: "field-switch",
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "right-icon"
          }, [s(te, v([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled,
              size: "24px"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "uploader":
          return s(P, v([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [s("template", {
            slot: "input"
          }, [s(ae, v([{
            ref: e.formItem.name,
            attrs: {
              disabled: l.disabled
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (n = e == null ? void 0 : e.control) == null ? void 0 : n.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]))])]);
        case "slot":
          return s(P, v([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, e.formItem]), [s("template", {
            slot: "label"
          }, [e.formItem.label ? e.formItem.label : ""]), s("template", {
            slot: "input"
          }, [(N = (F = e == null ? void 0 : e.control) == null ? void 0 : F.slots) != null && N.input && typeof ((m = (_ = e == null ? void 0 : e.control) == null ? void 0 : _.slots) == null ? void 0 : m.input) == "function" ? (f = (T = (i = e == null ? void 0 : e.control) == null ? void 0 : i.slots) == null ? void 0 : T.input) == null ? void 0 : f.call(T, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : this.$scopedSlots[e.formItem.name] ? (o = (p = this.$scopedSlots)[e.formItem.name]) == null ? void 0 : o.call(p, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : l.model[e.formItem.name]])]);
      }
    };
    return d(this.$attrs);
  }
}, we = (s, d, c, t) => {
  if (!Array.isArray(s))
    return [];
  const w = [];
  let e = [];
  return t && (e = Object.keys(t)), s.forEach((l) => {
    let r = {
      label: typeof l == "string" ? l : l[d],
      value: typeof l == "string" ? l : l[c]
    };
    t && e.forEach((x) => {
      r[x] = l[x];
    }), w.push(r);
  }), w;
}, be = (s, d = []) => {
  const c = {
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
  return s.forEach((t) => {
    const w = { required: !0, message: `请${c[t.type] || "完善"}${t.formItem.label || ""}`, trigger: "onChange" };
    if (!d.includes(t.formItem.name) && (t.formItem.required = !0, !["stepper", "switch"].includes(t.type))) {
      t.formItem.rules ? t.formItem.rules.unshift(w) : t.formItem.rules = [w];
      for (let e = 0; e < t.formItem.rules.length; e++) {
        let l = t.formItem.rules[e];
        l.message || (l.message = "格式有误");
      }
    }
  }), s;
}, Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: we,
  setRequired: be
}, Symbol.toStringTag, { value: "Module" }));
export {
  Pe as FormGenerator,
  Ge as GeneratorUtils
};
//# sourceMappingURL=index.js.map
