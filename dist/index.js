(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0;display:flex;flex-wrap:nowrap}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item .el-form-item__content{flex-grow:1}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item .el-form-item__label-wrap{margin:0!important;flex-shrink:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.searchItem{display:flex;justify-content:flex-end;flex-wrap:nowrap}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.searchItem .el-form-item__content{flex-grow:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content>div{display:flex;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .btnItem .el-form-item__content{height:100%}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .btnItem .el-form-item__content>div{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap;height:100%}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Loading as B, Table as C, Empty as L, TableColumn as w, Form as W, FormItem as o, Button as v, Upload as N, Switch as f, TimePicker as K, DatePicker as U, CheckboxGroup as P, CheckboxButton as z, Checkbox as J, RadioGroup as q, RadioButton as H, Radio as Q, Cascader as V, Select as X, Option as Y, InputNumber as Z, Input as p } from "element-ui";
const he = {
  name: "TableGenerator",
  data() {
    return {
      loadingInstance: null,
      el: new Date().getTime(),
      show: !1,
      width: 0
    };
  },
  watch: {
    "$attrs.loading": {
      handler: function(s) {
        var d;
        s ? this.loadingInstance = B.service({
          target: `.el-table-${this.el}`
        }) : (d = this.loadingInstance) == null || d.close();
      },
      immediate: !0
    },
    "$attrs.data": {
      handler: function(s) {
        var d;
        if (!((d = this.$scopedSlots) != null && d.operation) || s.length === 0)
          return this.show = !0;
        this.show = !1, this.$nextTick(() => {
          let u = 0;
          document.querySelectorAll(".content-wrapper-width").forEach((r) => {
            r.offsetWidth > u && (u = r.offsetWidth);
          }), this.width = u > 0 ? u + 32 : "auto", this.show = !0;
        });
      },
      immediate: !0
    }
  },
  render(s) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const d = (e) => e.map((t) => ["selection", "index", "expand"].includes(t.type) ? s(w, {
      attrs: {
        type: t.type,
        ...t
      }
    }, [Object.keys((t == null ? void 0 : t.slots) || []).map((a) => s("template", {
      slot: a
    }, [t == null ? void 0 : t.slots[a]()]))]) : s(w, {
      attrs: {
        "show-overflow-tooltip": !0,
        align: "left",
        ...t
      },
      scopedSlots: {
        default: (a) => {
          var h, y;
          return this.$scopedSlots[t.prop] ? (y = (h = this.$scopedSlots)[t.prop]) == null ? void 0 : y.call(h, {
            $index: a.$index,
            row: a.row
          }) : t.formatter ? t.formatter({
            $index: a.$index,
            row: a.row
          }) || "-" : a.row[t.prop] || "-";
        },
        ...t == null ? void 0 : t.slots
      }
    }, [t.children && Array.isArray(t.children) && t.children.length > 0 ? d(t.children) : ""])), u = () => {
      var e;
      return s(C, {
        attrs: {
          stripe: !0,
          ...this.$attrs
        },
        on: {
          ...this.$listeners
        },
        class: `TableGenerator el-table-${this.el}`
      }, [Object.keys(this.$slot || []).includes("empty") ? s("template", {
        slot: "default"
      }, [this.$slot.empty()]) : s(L, {
        attrs: {
          description: "暂无数据"
        }
      }), Object.keys(this.$slot || []).includes("append") ? s("template", {
        slot: "append"
      }, [this.$slot.append()]) : "", d(this.$attrs.tableOption), (e = this.$scopedSlots) != null && e.operation ? s(w, {
        attrs: {
          fixed: "right",
          label: "操作",
          width: this.width
        },
        scopedSlots: {
          default: (t) => {
            var a, h;
            return s("div", {
              class: "content-wrapper"
            }, [(h = (a = this.$scopedSlots).operation) == null ? void 0 : h.call(a, {
              $index: t.$index,
              row: t.row
            })]);
          }
        }
      }) : ""]);
    }, r = () => s(C, {
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners
      },
      class: `TableGenerator el-table-${this.el}`
    }, [s(w, {
      attrs: {
        fixed: "right",
        label: "操作",
        width: this.width
      },
      scopedSlots: {
        default: (e) => {
          var t, a;
          return s("div", {
            style: "display:inline-block;opacity:0",
            class: "content-wrapper content-wrapper-width"
          }, [(a = (t = this.$scopedSlots).operation) == null ? void 0 : a.call(t, {
            $index: e.$index,
            row: e.row
          })]);
        }
      }
    })]);
    return this.show ? u() : r();
  }
};
function b() {
  return b = Object.assign ? Object.assign.bind() : function(s) {
    for (var d, u = 1; u < arguments.length; u++)
      for (var r in d = arguments[u], d)
        Object.prototype.hasOwnProperty.call(d, r) && (s[r] = d[r]);
    return s;
  }, b.apply(this, arguments);
}
var _ = ["attrs", "props", "domProps"], O = ["class", "style", "directives"], ee = ["on", "nativeOn"], se = function(s) {
  return s.reduce(function(d, u) {
    for (var r in u)
      if (!d[r])
        d[r] = u[r];
      else if (_.indexOf(r) !== -1)
        d[r] = b({}, d[r], u[r]);
      else if (O.indexOf(r) !== -1) {
        var e = d[r] instanceof Array ? d[r] : [d[r]], t = u[r] instanceof Array ? u[r] : [u[r]];
        d[r] = [].concat(e, t);
      } else if (ee.indexOf(r) !== -1)
        for (var a in u[r])
          if (d[r][a]) {
            var h = d[r][a] instanceof Array ? d[r][a] : [d[r][a]], y = u[r][a] instanceof Array ? u[r][a] : [u[r][a]];
            d[r][a] = [].concat(h, y);
          } else
            d[r][a] = u[r][a];
      else if (r === "hook")
        for (var n in u[r])
          d[r][n] = d[r][n] ? le(d[r][n], u[r][n]) : u[r][n];
      else
        d[r] = u[r];
    return d;
  }, {});
}, le = function(s, d) {
  return function() {
    s && s.apply(this, arguments), d && d.apply(this, arguments);
  };
}, g = se;
const ye = {
  name: "FormGenerator",
  data() {
    return {
      more: !1,
      column: 0
    };
  },
  methods: {
    submit() {
      this.$refs.FormGenerator.validate((s) => {
        s && this.$emit("submit");
      });
    },
    reset() {
      this.$refs.FormGenerator.resetFields(), this.$emit("submit", "init");
    },
    getAttrAndEvent(s) {
      const d = {
        attrs: {},
        on: {}
      };
      for (const u in s)
        u.startsWith("on") && u.length > 2 ? d.on[u.substr(2).replace(/^\S/, (r) => r.toLowerCase())] = s[u] : d.attrs[u] = s[u];
      return d;
    },
    setShow(s) {
      this.more = s, this.$attrs.formOption.forEach((d, u) => {
        u > this.column - 2 && (d.show = s);
      });
    },
    validate: (...s) => globalThis.$refs.FormGenerator.validate(...s),
    validateField: (...s) => globalThis.$refs.FormGenerator.validateField(...s),
    resetFields: (...s) => globalThis.$refs.FormGenerator.resetFields(...s),
    clearValidate: (...s) => globalThis.$refs.FormGenerator.clearValidate(...s)
  },
  created() {
    var s;
    this.column = isNaN(this.$attrs.column) ? 4 : this.$attrs.column >= 4 ? this.$attrs.column : 4, this.$attrs.formOption.length >= this.column - 2 && ((s = this.$attrs) == null ? void 0 : s.type) === "search" && this.setShow(!1);
  },
  render(s) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const d = (e) => {
      var t;
      return e.formOption.forEach((a) => {
        var h, y, n;
        (h = a == null ? void 0 : a.formItem) != null && h.rules && !((n = (y = a == null ? void 0 : a.formItem) == null ? void 0 : y.rules) != null && n.hasOwnProperty("trigger")) && (a.formItem.rules.trigger = "blur");
      }), s(W, {
        class: `FormGenerator ${(e == null ? void 0 : e.type) === "search" ? "FormGeneratorSearch" : ""} ${(e == null ? void 0 : e.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
        attrs: {
          "validate-on-rule-change": !1,
          "label-width": e.labelWidth || "auto",
          inline: (e == null ? void 0 : e.type) === "search",
          ...e
        },
        on: {
          ...this.$listeners
        },
        ref: "FormGenerator"
      }, [e.formOption.map((a) => {
        if (!(a.hasOwnProperty("show") && a.show === !1))
          return s(o, {
            key: a.formItem.prop,
            attrs: {
              ...a.formItem
            }
          }, [u(a, e)]);
      }), e.disabled === !0 || e.noFooter || !this.$listeners.submit ? "" : s(o, {
        style: e.inline === !0 ? {
          width: `calc${100 / this.column}% - 8px`
        } : "",
        class: `btnItem ${this.more ? "searchItem" : ""}`
      }, [(t = this.$scopedSlots) != null && t.default ? s("div", [this.$scopedSlots.default()[0]]) : (e == null ? void 0 : e.type) === "search" ? r(e) : s("div", [(e == null ? void 0 : e.type) === "dialog" ? s(v, {
        on: {
          click: (a) => {
            var y, n;
            const h = ($) => $.parentElement.classList.value.split(" ").includes("el-dialog") ? h($.parentElement) : $.parentElement;
            (n = (y = h(a.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : y.click) == null || n.call(y);
          }
        }
      }, ["取消"]) : "", s(v, {
        attrs: {
          type: "primary"
        },
        on: {
          click: this.submit
        }
      }, ["确定"])]), s("template", {
        slot: "label"
      })])]);
    }, u = (e, t) => {
      var a, h, y, n, $, A, i, k, E, m, x, S, F, j, G, D, T, I;
      switch (e.type) {
        case "input":
          return s(p, g([{
            ref: e.formItem.prop,
            attrs: {
              clearable: !0,
              maxlength: 30
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((a = e == null ? void 0 : e.control) == null ? void 0 : a.slots) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slots[l]({
              form: t.model,
              data: t.model[e.formItem.prop]
            })]);
          })]);
        case "input-number":
          return s(Z, g([{
            ref: e.formItem.prop,
            attrs: {
              min: 0,
              max: 100
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]));
        case "select":
          return s(X, g([{
            ref: e.formItem.prop,
            props: {
              reserveKeyword: !1
            },
            attrs: {
              clearable: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [(h = e == null ? void 0 : e.control) == null ? void 0 : h.option.map((l) => s(Y, g([{}, this.getAttrAndEvent(l), {
            key: l.value
          }]), [Object.keys((l == null ? void 0 : l.slots) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slots[c]()]))]))]);
        case "cascader":
          return s(V, g([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (y = e == null ? void 0 : e.control) == null ? void 0 : y.slots,
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]));
        case "radio":
          return s(q, g([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [(n = e == null ? void 0 : e.control) == null ? void 0 : n.option.map((l) => s(Q, g([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slots) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slots[c]()])), l.label]))]);
        case "radio-button":
          return s(q, g([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [($ = e == null ? void 0 : e.control) == null ? void 0 : $.option.map((l) => s(H, g([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slots) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slots[c]()])), l.label]))]);
        case "checkbox":
          return s(P, g([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [(A = e == null ? void 0 : e.control) == null ? void 0 : A.option.map((l) => s(J, g([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slots) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slots[c]()])), l.label]))]);
        case "checkbox-button":
          return s(P, g([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [(i = e == null ? void 0 : e.control) == null ? void 0 : i.option.map((l) => s(z, g([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slots) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slots[c]()])), l.label]))]);
        case "date-picker":
        case "date-time-picker":
          const M = {
            datetimerange: "yyyy-MM-DD hh:mm:ss",
            daterange: "yyyy-MM-DD",
            datetime: "yyyy-MM-DD hh:mm:ss",
            date: "yyyy-MM-DD"
          }[((k = e == null ? void 0 : e.control) == null ? void 0 : k.type) || "date"];
          return s(U, g([{
            ref: e.formItem.prop,
            attrs: {
              clearable: !0,
              format: M,
              "value-format": M
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((E = e == null ? void 0 : e.control) == null ? void 0 : E.slots) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slots[l]()]);
          })]);
        case "time-picker":
          return s(K, g([{
            ref: e.formItem.prop,
            attrs: {
              clearable: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((m = e == null ? void 0 : e.control) == null ? void 0 : m.slots) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slots[l]()]);
          })]);
        case "switch":
          return s(f, g([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: t.model[e.formItem.prop],
              callback: (l) => {
                this.$set(t.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((x = e == null ? void 0 : e.control) == null ? void 0 : x.slots) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slots[l]()]);
          })]);
        case "upload":
          return s(N, g([{
            ref: e.formItem.prop,
            attrs: {
              action: ""
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            directives: [{
              name: "model",
              value: t.model[e.formItem.prop],
              arg: "file-list"
            }]
          }]), [Object.keys(((S = e == null ? void 0 : e.control) == null ? void 0 : S.slots) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slots[l]()]);
          }), Object.keys(((F = e == null ? void 0 : e.control) == null ? void 0 : F.slots) || []).includes("default") ? "" : s("template", {
            slot: "default"
          }, [s(v, {
            attrs: {
              type: "primary"
            }
          }, ["上传文件"])])]);
        case "slot":
          return this.$scopedSlots[e.formItem.prop] ? (G = (j = this.$scopedSlots)[e.formItem.prop]) == null ? void 0 : G.call(j, {
            form: t.model,
            data: t.model[e.formItem.prop]
          }) : (D = e == null ? void 0 : e.slots) != null && D.default ? (I = (T = e.slots).default) == null ? void 0 : I.call(T, {
            form: t.model,
            data: t.model[e.formItem.prop]
          }) : t.model[e.formItem.prop];
      }
    }, r = (e) => s("div", [s(v, {
      attrs: {
        type: "primary",
        icon: "el-icon-search"
      },
      on: {
        click: this.submit
      }
    }, ["搜索"]), s(v, {
      on: {
        click: this.reset
      },
      attrs: {
        icon: "el-icon-refresh"
      }
    }, ["重置"]), e.type === "search" && e.formOption.length > this.column - 1 ? s(v, {
      attrs: {
        type: "text",
        icon: this.more ? "el-icon-arrow-up" : "el-icon-arrow-down"
      },
      on: {
        click: () => {
          this.setShow(!this.more);
        }
      }
    }, [this.more ? "收起" : "展开"]) : ""]);
    return d(this.$attrs);
  }
}, te = (s, d, u, r) => {
  if (!Array.isArray(s))
    return [];
  const e = [];
  let t = [];
  return r && (t = Object.keys(r)), s.forEach((a) => {
    let h = {
      label: typeof a == "string" ? a : a[d],
      value: typeof a == "string" ? a : a[u]
    };
    r && t.forEach((y) => {
      h[y] = a[y];
    }), e.push(h);
  }), e;
}, R = (s, d) => s.filter((u) => u.formItem.prop === d)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
}, re = (s, d, u) => {
  var t;
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
  }, e = R(s.formOption, s.field);
  if (Array.isArray(d) && d.length === 0)
    return u(new Error(`请${r[e.type] || "完善"}${e.formItem.label}`));
  if (!d)
    return u(new Error(`请${r[e.type] || "完善"}${e.formItem.label}`));
  if (!((t = e == null ? void 0 : e.formItem) != null && t.rules))
    return u();
  if (typeof e.formItem.rules.validator == "function")
    e.formItem.rules.validator(s, d).then(() => u()).catch((a) => {
      var h;
      return u(new Error(a !== "err" ? a : ((h = e == null ? void 0 : e.formItem.rules) == null ? void 0 : h.message) || ""));
    });
  else
    return e.formItem.rules.validator.test(d) ? u() : u(new Error(e.formItem.rules.message || "格式有误"));
}, ae = (s, d = []) => {
  let u = {};
  return s.forEach((r) => {
    var t, a;
    const e = typeof r == "string" ? r : r.formItem.prop;
    d.includes(e) || (u[e] = [{ required: !0, validator: re, trigger: ((a = (t = r.formItem) == null ? void 0 : t.rules) == null ? void 0 : a.trigger) || "blur", formOption: s }]);
  }), u;
}, de = (s, d = []) => {
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
  return s.forEach((r) => {
    const e = { required: !0, message: `请${u[r.type] || "完善"}${r.formItem.label || ""}`, trigger: "change" };
    if (!d.includes(r.formItem.prop)) {
      r.formItem.rules ? Array.isArray(r.formItem.rules) ? r.formItem.rules.unshift(e) : Array.isArray(r.formItem.rules) || (r.formItem.rules = [e, r.formItem.rules]) : r.formItem.rules = [e];
      for (let t = 0; t < r.formItem.rules.length; t++) {
        let a = r.formItem.rules[t];
        a.validator && typeof a.validator != "function" && (a.pattern = a.validator, a.message = a.message || "格式有误", delete a.validator);
      }
    }
  }), s;
}, ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getLabel: R,
  getOption: te,
  getRules: ae,
  setRequired: de
}, Symbol.toStringTag, { value: "Module" }));
export {
  ye as FormGenerator,
  ge as GeneratorUtils,
  he as TableGenerator
};
//# sourceMappingURL=index.js.map
