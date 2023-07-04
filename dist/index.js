(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}.FormGenerator .van-cell-group div .van-cell:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Form as le, CellGroup as te, Button as ae, Field as M, Uploader as se, Switch as de, Popup as Y, DatetimePicker as ue, CheckboxGroup as ce, Checkbox as he, RadioGroup as ge, Radio as re, Calendar as ve, Cascader as $e, Picker as Ae, Stepper as Ie } from "vant";
function R() {
  return R = Object.assign ? Object.assign.bind() : function(t) {
    for (var u, c = 1; c < arguments.length; c++)
      for (var s in u = arguments[c], u)
        Object.prototype.hasOwnProperty.call(u, s) && (t[s] = u[s]);
    return t;
  }, R.apply(this, arguments);
}
var ye = ["attrs", "props", "domProps"], xe = ["class", "style", "directives"], Se = ["on", "nativeOn"], ke = function(t) {
  return t.reduce(function(u, c) {
    for (var s in c)
      if (!u[s])
        u[s] = c[s];
      else if (ye.indexOf(s) !== -1)
        u[s] = R({}, u[s], c[s]);
      else if (xe.indexOf(s) !== -1) {
        var b = u[s] instanceof Array ? u[s] : [u[s]], e = c[s] instanceof Array ? c[s] : [c[s]];
        u[s] = [].concat(b, e);
      } else if (Se.indexOf(s) !== -1)
        for (var l in c[s])
          if (u[s][l]) {
            var r = u[s][l] instanceof Array ? u[s][l] : [u[s][l]], x = c[s][l] instanceof Array ? c[s][l] : [c[s][l]];
            u[s][l] = [].concat(r, x);
          } else
            u[s][l] = c[s][l];
      else if (s === "hook")
        for (var S in c[s])
          u[s][S] = u[s][S] ? we(u[s][S], c[s][S]) : c[s][S];
      else
        u[s] = c[s];
    return u;
  }, {});
}, we = function(t, u) {
  return function() {
    t && t.apply(this, arguments), u && u.apply(this, arguments);
  };
}, v = ke;
const Ge = {
  name: "FormGenerator",
  methods: {
    getAttrAndEvent(t) {
      const u = {
        attrs: {},
        on: {}
      };
      for (const c in t)
        c.startsWith("on") && c.length > 2 ? u.on[c.substr(2).replace(/^\S/, (s) => s.toLowerCase())] = t[c] : u.attrs[c] = t[c];
      return u;
    },
    submit: (...t) => globalThis.$refs.FormGenerator.submit(...t),
    validate: (...t) => globalThis.$refs.FormGenerator.validate(...t),
    resetValidation: (...t) => globalThis.$refs.FormGenerator.resetValidation(...t),
    scrollToField: (...t) => globalThis.$refs.FormGenerator.scrollToField(...t)
  },
  render(t) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const u = (e) => {
      var l;
      return t(le, {
        class: "FormGenerator",
        attrs: {
          ...e
        },
        on: {
          ...this.$listeners
        },
        ref: "FormGenerator"
      }, [t(te, [e.formOption.map((r, x) => {
        if (!(r.hasOwnProperty("show") && r.show === !1))
          return b(r, e);
      })]), e.disabled === !0 || !this.$listeners.submit ? "" : (l = this.$scopedSlots) != null && l.default ? t("div", [this.$scopedSlots.default()[0]]) : t(ae, {
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
      return t(M, v([{
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
    }, s = (e, l = "datetime") => {
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
    }, b = (e, l) => {
      var x, S, C, q, H, U, V, B, J, K, L, W, Q, X, Z, F, n, _, N, i, f, m, T, p, o, O;
      function r(a, g, d, h = !1) {
        var $;
        if (!Array.isArray(a))
          return "";
        for (let A = 0; A < a.length; A++) {
          const I = a[A];
          if (typeof I == "string") {
            if (I === g)
              return I[d != null && d.text ? d == null ? void 0 : d.text : "text"] || "";
          } else if (I[d != null && d.values ? d == null ? void 0 : d.values : d != null && d.value ? d == null ? void 0 : d.value : "value"] === g)
            return I[d != null && d.text ? d == null ? void 0 : d.text : "text"] || "";
          if (($ = I[d != null && d.children ? d == null ? void 0 : d.children : "children"]) != null && $.length) {
            const E = r(I[d != null && d.children ? d == null ? void 0 : d.children : "children"], g, d, h);
            if (E)
              return h ? `${I[d != null && d.text ? d == null ? void 0 : d.text : "text"]}/${E}` : E;
          }
        }
        return null;
      }
      switch (e.type) {
        case "field":
          return t(M, v([{
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
          return t(M, v([{
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [t("template", {
            slot: "right-icon"
          }, [t(Ie, v([{
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
          return !e.formItem.hasOwnProperty("text") && l.model[e.formItem.name] && ((S = e == null ? void 0 : e.control) != null && S.columns) && (Array.isArray((H = (q = (C = e == null ? void 0 : e.control) == null ? void 0 : C.columns) == null ? void 0 : q[0]) == null ? void 0 : H.values) ? e.formItem.text = (U = e == null ? void 0 : e.control) == null ? void 0 : U.columns.reduce((a, g, d) => {
            var h, $, A, I, E, j, z, k;
            return typeof ((h = g == null ? void 0 : g.values) == null ? void 0 : h[0]) == "string" ? a.push(($ = g.values) == null ? void 0 : $.find((y) => {
              var w;
              return y === ((w = l.model[e.formItem.name]) == null ? void 0 : w[d]);
            })) : a.push((k = (A = g.values) == null ? void 0 : A.find((y) => {
              var w, P, G, D, ee;
              return y[(P = (w = e == null ? void 0 : e.control) == null ? void 0 : w.columnsFieldNames) != null && P.values ? (D = (G = e == null ? void 0 : e.control) == null ? void 0 : G.columnsFieldNames) == null ? void 0 : D.values : "value"] === ((ee = l.model[e.formItem.name]) == null ? void 0 : ee[d]);
            })) == null ? void 0 : k[(E = (I = e == null ? void 0 : e.control) == null ? void 0 : I.columnsFieldNames) != null && E.text ? (z = (j = e == null ? void 0 : e.control) == null ? void 0 : j.columnsFieldNames) == null ? void 0 : z.text : "text"]), a;
          }, []).join("/") : Array.isArray(l.model[e.formItem.name]) ? e.formItem.text = l.model[e.formItem.name].reduce((a, g) => {
            var d, h;
            return a.push(r((d = e == null ? void 0 : e.control) == null ? void 0 : d.columns, g, (h = e == null ? void 0 : e.control) == null ? void 0 : h.columnsFieldNames)), a;
          }, []).join("/") : e.formItem.text = r((V = e == null ? void 0 : e.control) == null ? void 0 : V.columns, l.model[e.formItem.name], (B = e == null ? void 0 : e.control) == null ? void 0 : B.columnsFieldNames)), t("div", [c(l, e, !0), t("div", [t(Y, v([{
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
          }]), [t(Ae, v([{
            ref: e.formItem.name,
            attrs: {
              "show-toolbar": !0
            },
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (a) => {
                var g, d, h, $, A, I, E, j;
                if (this.$set(e, "showPopup", !1), Array.isArray(a)) {
                  const z = a.reduce((k, y) => {
                    var w, P, G, D;
                    return k.push(typeof y == "object" ? y == null ? void 0 : y[(P = (w = e == null ? void 0 : e.control) == null ? void 0 : w.columnsFieldNames) != null && P.values ? (D = (G = e == null ? void 0 : e.control) == null ? void 0 : G.columnsFieldNames) == null ? void 0 : D.values : "value"] : y), k;
                  }, []);
                  this.$set(l.model, e.formItem.name, z), e.formItem.text = a.map((k) => {
                    var y, w, P, G;
                    return typeof k == "object" ? k == null ? void 0 : k[(w = (y = e == null ? void 0 : e.control) == null ? void 0 : y.columnsFieldNames) != null && w.text ? (G = (P = e == null ? void 0 : e.control) == null ? void 0 : P.columnsFieldNames) == null ? void 0 : G.text : "text"] : k;
                  }).join("/");
                } else
                  this.$set(l.model, e.formItem.name, a[(d = (g = e == null ? void 0 : e.control) == null ? void 0 : g.columnsFieldNames) != null && d.values ? ($ = (h = e == null ? void 0 : e.control) == null ? void 0 : h.columnsFieldNames) == null ? void 0 : $.values : "value"]), e.formItem.text = a[(I = (A = e == null ? void 0 : e.control) == null ? void 0 : A.columnsFieldNames) != null && I.text ? (j = (E = e == null ? void 0 : e.control) == null ? void 0 : E.columnsFieldNames) == null ? void 0 : j.text : "text"];
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (J = e == null ? void 0 : e.control) == null ? void 0 : J.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]))])])]);
        case "cascader":
          return l.model[e.formItem.name] && (e.formItem.text = r((K = e == null ? void 0 : e.control) == null ? void 0 : K.options, l.model[e.formItem.name], (L = e == null ? void 0 : e.control) == null ? void 0 : L.fieldNames, !0)), t("div", [c(l, e, !0), t("div", [t(Y, v([{
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
          }]), [t($e, v([{
            ref: e.formItem.name,
            on: {
              close: () => {
                this.$set(e, "showPopup", !1);
              },
              finish: (a) => {
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, a.value), e.formItem.text = a.selectedOptions.map((g) => {
                  var d, h, $, A;
                  return g[(h = (d = e == null ? void 0 : e.control) == null ? void 0 : d.fieldNames) != null && h.text ? (A = ($ = e == null ? void 0 : e.control) == null ? void 0 : $.fieldNames) == null ? void 0 : A.text : "text"];
                }).join("/");
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (W = e == null ? void 0 : e.control) == null ? void 0 : W.slots,
            model: {
              value: l.model[e.formItem.name],
              callback: (a) => {
                this.$set(l.model, e.formItem.name, a);
              }
            }
          }]))])])]);
        case "calendar":
          return t("div", [c(l, e, ((Q = e == null ? void 0 : e.control) == null ? void 0 : Q.type) === "multiple"), t("div", [t(ve, v([{
            ref: e.formItem.name,
            attrs: {
              "show-confirm": ((X = e == null ? void 0 : e.control) == null ? void 0 : X.type) === "multiple"
            },
            on: {
              confirm: (a) => {
                var d;
                this.$set(e, "showPopup", !1);
                const g = (h) => {
                  var $, A, I;
                  return `${($ = h == null ? void 0 : h.getFullYear) == null ? void 0 : $.call(h)}-${((A = h == null ? void 0 : h.getMonth) == null ? void 0 : A.call(h)) + 1}-${(I = h == null ? void 0 : h.getDate) == null ? void 0 : I.call(h)}`;
                };
                switch ((d = e == null ? void 0 : e.control) == null ? void 0 : d.type) {
                  case "multiple":
                    const h = a.reduce(($, A) => ($.push(g(A)), $), []);
                    this.$set(l.model, e.formItem.name, h), e.formItem.text = `选择了 ${a.length} 个日期`;
                    break;
                  case "range":
                    this.$set(l.model, e.formItem.name, `${g(a[0])}~${g(a[1])}`);
                    break;
                  default:
                    this.$set(l.model, e.formItem.name, g(a));
                    break;
                }
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (Z = e == null ? void 0 : e.control) == null ? void 0 : Z.slots,
            model: {
              value: e.showPopup,
              callback: (a) => {
                this.$set(e, "showPopup", a);
              }
            }
          }]))])]);
        case "radio":
          return t(M, v([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [t("template", {
            slot: "input"
          }, [t(ge, v([{
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
          }]), [e.control.radioGroup.map((a) => t(re, v([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "checkbox":
          return t(M, v([{
            attrs: {
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [t("template", {
            slot: "input"
          }, [t(ce, v([{
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
          }]), [e.control.checkboxGroup.map((a) => t(he, v([{
            attrs: {
              name: a.value
            }
          }, this.getAttrAndEvent(a), {
            scopedSlots: a == null ? void 0 : a.slots
          }]), [a.label]))])])]);
        case "datetimePicker":
          return t("div", [c(l, e), t("div", [t(Y, v([{
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
          }]), [t(ue, v([{
            ref: e.formItem.name,
            on: {
              cancel: () => {
                this.$set(e, "showPopup", !1);
              },
              confirm: (a) => {
                var g;
                this.$set(e, "showPopup", !1), this.$set(l.model, e.formItem.name, s(a, (g = e == null ? void 0 : e.control) == null ? void 0 : g.type));
              }
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (F = e == null ? void 0 : e.control) == null ? void 0 : F.slots
          }]))])])]);
        case "switch":
          return t(M, v([{
            class: "field-switch",
            attrs: {
              readonly: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [t("template", {
            slot: "right-icon"
          }, [t(de, v([{
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
          return t(M, v([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.formItem)]), [t("template", {
            slot: "input"
          }, [t(se, v([{
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
          return t(M, v([{
            attrs: {
              readonly: !0,
              inputAlign: "right"
            }
          }, e.formItem]), [t("template", {
            slot: "label"
          }, [e.formItem.label ? e.formItem.label : ""]), t("template", {
            slot: "input"
          }, [(N = (_ = e == null ? void 0 : e.control) == null ? void 0 : _.slots) != null && N.input && typeof ((f = (i = e == null ? void 0 : e.control) == null ? void 0 : i.slots) == null ? void 0 : f.input) == "function" ? (p = (T = (m = e == null ? void 0 : e.control) == null ? void 0 : m.slots) == null ? void 0 : T.input) == null ? void 0 : p.call(T, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : this.$scopedSlots[e.formItem.name] ? (O = (o = this.$scopedSlots)[e.formItem.name]) == null ? void 0 : O.call(o, {
            form: l.model,
            data: l.model[e.formItem.name]
          }) : l.model[e.formItem.name]])]);
      }
    };
    return u(this.$attrs);
  }
}, be = (t, u, c, s) => {
  if (!Array.isArray(t))
    return [];
  const b = [];
  let e = [];
  return s && (e = Object.keys(s)), t.forEach((l) => {
    let r = {
      label: typeof l == "string" ? l : l[u],
      value: typeof l == "string" ? l : l[c]
    };
    s && e.forEach((x) => {
      r[x] = l[x];
    }), b.push(r);
  }), b;
}, Ee = (t, u = []) => {
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
  return t.forEach((s) => {
    const b = { required: !0, message: `请${c[s.type] || "完善"}${s.formItem.label || ""}`, trigger: "onChange" };
    if (!u.includes(s.formItem.name) && (s.formItem.required = !0, !["stepper", "switch"].includes(s.type))) {
      s.formItem.rules ? s.formItem.rules.unshift(b) : s.formItem.rules = [b];
      for (let e = 0; e < s.formItem.rules.length; e++) {
        let l = s.formItem.rules[e];
        l.message || (l.message = "格式有误");
      }
    }
  }), t;
}, Me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: be,
  setRequired: Ee
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ge as FormGenerator,
  Me as GeneratorUtils
};
//# sourceMappingURL=index.js.map
