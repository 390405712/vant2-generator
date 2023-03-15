(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0;display:flex;flex-wrap:nowrap}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item .el-form-item__content{flex-grow:1}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item .el-form-item__label-wrap{margin:0!important;flex-shrink:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.searchItem{display:flex;justify-content:flex-end;flex-wrap:nowrap}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.searchItem .el-form-item__content{flex-grow:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content>div{display:flex;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .btnItem .el-form-item__content{height:100%}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .btnItem .el-form-item__content>div{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap;height:100%}.FormGenerator.FormGeneratorDialog.el-form:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { Loading as W, Table as C, Empty as L, TableColumn as k, Form as N, FormItem as i, Button as w, Upload as R, Switch as V, TimePicker as q, DatePicker as U, CheckboxGroup as P, CheckboxButton as J, Checkbox as K, RadioGroup as B, RadioButton as z, Radio as H, Cascader as Q, Select as X, Option as Y, InputNumber as Z, Input as I } from "element-ui";
import { u as re } from "./utils-e46d3a1e.js";
const le = {
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
        var r;
        s ? this.loadingInstance = W.service({
          target: `.el-table-${this.el}`
        }) : (r = this.loadingInstance) == null || r.close();
      },
      immediate: !0
    },
    "$attrs.data": {
      handler: function(s) {
        var r;
        if (!((r = this.$scopedSlots) != null && r.operation) || s.length === 0)
          return this.show = !0;
        this.show = !1, this.$nextTick(() => {
          let u = 0;
          document.querySelectorAll(".content-wrapper-width").forEach((t) => {
            t.offsetWidth > u && (u = t.offsetWidth);
          }), this.width = u > 0 ? u + 32 : "auto", this.show = !0;
        });
      },
      immediate: !0
    }
  },
  render(s) {
    typeof window > "u" ? global.h = this.$createElement : window.h = this.$createElement;
    const r = (e) => e.map((a) => ["selection", "index", "expand"].includes(a.type) ? s(k, {
      attrs: {
        type: a.type,
        ...a
      }
    }, [Object.keys((a == null ? void 0 : a.slot) || []).map((d) => s("template", {
      slot: d
    }, [a == null ? void 0 : a.slot[d]()]))]) : s(k, {
      attrs: {
        "show-overflow-tooltip": !0,
        align: "left",
        ...a
      },
      scopedSlots: {
        default: (d) => {
          var y, g;
          return this.$scopedSlots[a.prop] ? (g = (y = this.$scopedSlots)[a.prop]) == null ? void 0 : g.call(y, {
            $index: d.$index,
            row: d.row
          }) : a.formatter ? a.formatter({
            $index: d.$index,
            row: d.row
          }) || "-" : d.row[a.prop] || "-";
        },
        ...a == null ? void 0 : a.slot
      }
    }, [a.children && Array.isArray(a.children) && a.children.length > 0 ? r(a.children) : ""])), u = () => {
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
      }, [this.$slot.append()]) : "", r(this.$attrs.tableOption), (e = this.$scopedSlots) != null && e.operation ? s(k, {
        attrs: {
          fixed: "right",
          label: "操作",
          width: this.width
        },
        scopedSlots: {
          default: (a) => {
            var d, y;
            return s("div", {
              class: "content-wrapper"
            }, [(y = (d = this.$scopedSlots).operation) == null ? void 0 : y.call(d, {
              $index: a.$index,
              row: a.row
            })]);
          }
        }
      }) : ""]);
    }, t = () => s(C, {
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners
      },
      class: `TableGenerator el-table-${this.el}`
    }, [s(k, {
      attrs: {
        fixed: "right",
        label: "操作",
        width: this.width
      },
      scopedSlots: {
        default: (e) => {
          var a, d;
          return s("div", {
            style: "display:inline-block;opacity:0",
            class: "content-wrapper content-wrapper-width"
          }, [(d = (a = this.$scopedSlots).operation) == null ? void 0 : d.call(a, {
            $index: e.$index,
            row: e.row
          })]);
        }
      }
    })]);
    return this.show ? u() : t();
  }
};
function b() {
  return b = Object.assign ? Object.assign.bind() : function(s) {
    for (var r, u = 1; u < arguments.length; u++)
      for (var t in r = arguments[u], r)
        Object.prototype.hasOwnProperty.call(r, t) && (s[t] = r[t]);
    return s;
  }, b.apply(this, arguments);
}
var m = ["attrs", "props", "domProps"], p = ["class", "style", "directives"], f = ["on", "nativeOn"], _ = function(s) {
  return s.reduce(function(r, u) {
    for (var t in u)
      if (!r[t])
        r[t] = u[t];
      else if (m.indexOf(t) !== -1)
        r[t] = b({}, r[t], u[t]);
      else if (p.indexOf(t) !== -1) {
        var e = r[t] instanceof Array ? r[t] : [r[t]], a = u[t] instanceof Array ? u[t] : [u[t]];
        r[t] = [].concat(e, a);
      } else if (f.indexOf(t) !== -1)
        for (var d in u[t])
          if (r[t][d]) {
            var y = r[t][d] instanceof Array ? r[t][d] : [r[t][d]], g = u[t][d] instanceof Array ? u[t][d] : [u[t][d]];
            r[t][d] = [].concat(y, g);
          } else
            r[t][d] = u[t][d];
      else if (t === "hook")
        for (var $ in u[t])
          r[t][$] = r[t][$] ? o(r[t][$], u[t][$]) : u[t][$];
      else
        r[t] = u[t];
    return r;
  }, {});
}, o = function(s, r) {
  return function() {
    s && s.apply(this, arguments), r && r.apply(this, arguments);
  };
}, h = _;
const se = {
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
      const r = {
        attrs: {},
        on: {}
      };
      for (const u in s)
        u.startsWith("on") && u.length > 2 ? r.on[u.substr(2).replace(/^\S/, (t) => t.toLowerCase())] = s[u] : r.attrs[u] = s[u];
      return r;
    },
    setShow(s) {
      this.more = s, this.$attrs.formOption.forEach((r, u) => {
        u > this.column - 2 && (r.show = s);
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
    const r = (e) => {
      var a;
      return e.formOption.forEach((d) => {
        var y, g, $;
        (y = d == null ? void 0 : d.formItem) != null && y.rules && !(($ = (g = d == null ? void 0 : d.formItem) == null ? void 0 : g.rules) != null && $.hasOwnProperty("trigger")) && (d.formItem.rules.trigger = "blur");
      }), s(N, {
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
      }, [e.formOption.map((d) => {
        if (!(d.hasOwnProperty("show") && d.show === !1))
          return s(i, {
            key: d.formItem.prop,
            attrs: {
              ...d.formItem
            }
          }, [u(d, e)]);
      }), e.disabled === !0 || e.noFooter || !this.$listeners.submit ? "" : s(i, {
        style: e.inline === !0 ? {
          width: `calc${100 / this.column}% - 8px`
        } : "",
        class: `btnItem ${this.more ? "searchItem" : ""}`
      }, [(a = this.$scopedSlots) != null && a.default ? s("div", [this.$scopedSlots.default()[0]]) : (e == null ? void 0 : e.type) === "search" ? t(e) : s("div", [(e == null ? void 0 : e.type) === "dialog" ? s(w, {
        on: {
          click: (d) => {
            var g, $;
            const y = (v) => v.parentElement.classList.value.split(" ").includes("el-dialog") ? y(v.parentElement) : v.parentElement;
            ($ = (g = y(d.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : g.click) == null || $.call(g);
          }
        }
      }, ["取消"]) : "", s(w, {
        attrs: {
          type: "primary"
        },
        on: {
          click: this.submit
        }
      }, ["确定"])]), s("template", {
        slot: "label"
      })])]);
    }, u = (e, a) => {
      var d, y, g, $, v, A, E, n, x, F, S, G, D, j, T;
      switch (e.type) {
        case "input":
          return s(I, h([{
            ref: e.formItem.prop,
            attrs: {
              clearable: !0,
              maxlength: 30
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((d = e == null ? void 0 : e.control) == null ? void 0 : d.slot) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot[l]({
              form: a.model,
              data: a.model[e.formItem.prop]
            })]);
          })]);
        case "input-number":
          return s(Z, h([{
            ref: e.formItem.prop,
            attrs: {
              min: 0,
              max: 100
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]));
        case "select":
          return s(X, h([{
            ref: e.formItem.prop,
            props: {
              reserveKeyword: !1
            },
            attrs: {
              clearable: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [(y = e == null ? void 0 : e.control) == null ? void 0 : y.option.map((l) => s(Y, h([{}, this.getAttrAndEvent(l), {
            key: l.value
          }]), [Object.keys((l == null ? void 0 : l.slot) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slot[c]()]))]))]);
        case "cascader":
          return s(Q, h([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            scopedSlots: (g = e == null ? void 0 : e.control) == null ? void 0 : g.slot,
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]));
        case "radio":
          return s(B, h([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [($ = e == null ? void 0 : e.control) == null ? void 0 : $.option.map((l) => s(H, h([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slot) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slot[c]()])), l.label]))]);
        case "radio-button":
          return s(B, h([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [(v = e == null ? void 0 : e.control) == null ? void 0 : v.option.map((l) => s(z, h([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slot) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slot[c]()])), l.label]))]);
        case "checkbox":
          return s(P, h([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [(A = e == null ? void 0 : e.control) == null ? void 0 : A.option.map((l) => s(K, h([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slot) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slot[c]()])), l.label]))]);
        case "checkbox-button":
          return s(P, h([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [(E = e == null ? void 0 : e.control) == null ? void 0 : E.option.map((l) => s(J, h([{}, this.getAttrAndEvent(l), {
            attrs: {
              label: l.value
            },
            key: l.label
          }]), [Object.keys((l == null ? void 0 : l.slot) || []).map((c) => s("template", {
            slot: c
          }, [l == null ? void 0 : l.slot[c]()])), l.label]))]);
        case "datetime":
          const M = {
            datetimerange: "yyyy-MM-DD hh:mm:ss",
            daterange: "yyyy-MM-DD",
            datetime: "yyyy-MM-DD hh:mm:ss",
            date: "yyyy-MM-DD"
          }[((n = e == null ? void 0 : e.control) == null ? void 0 : n.type) || "date"];
          return s(U, h([{
            ref: e.formItem.prop,
            attrs: {
              clearable: !0,
              format: M,
              "value-format": M
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((x = e == null ? void 0 : e.control) == null ? void 0 : x.slot) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot[l]()]);
          })]);
        case "time":
          return s(q, h([{
            ref: e.formItem.prop,
            attrs: {
              clearable: !0
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((F = e == null ? void 0 : e.control) == null ? void 0 : F.slot) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot[l]()]);
          })]);
        case "switch":
          return s(V, h([{
            ref: e.formItem.prop
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            model: {
              value: a.model[e.formItem.prop],
              callback: (l) => {
                this.$set(a.model, e.formItem.prop, l);
              }
            }
          }]), [Object.keys(((S = e == null ? void 0 : e.control) == null ? void 0 : S.slot) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot[l]()]);
          })]);
        case "upload":
          return s(R, h([{
            ref: e.formItem.prop,
            attrs: {
              action: ""
            }
          }, this.getAttrAndEvent(e == null ? void 0 : e.control), {
            directives: [{
              name: "model",
              value: a.model[e.formItem.prop],
              arg: "file-list"
            }]
          }]), [Object.keys(((G = e == null ? void 0 : e.control) == null ? void 0 : G.slot) || []).map((l) => {
            var c;
            return s("template", {
              slot: l
            }, [(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot[l]()]);
          }), Object.keys(((D = e == null ? void 0 : e.control) == null ? void 0 : D.slot) || []).includes("default") ? "" : s("template", {
            slot: "default"
          }, [s(w, {
            attrs: {
              type: "primary"
            }
          }, ["上传文件"])])]);
        case "txt":
          return a.model[e.formItem.prop];
        case "slot":
          return (T = (j = this.$scopedSlots)[e.formItem.prop]) == null ? void 0 : T.call(j, {
            form: a.model,
            data: a.model[e.formItem.prop]
          });
      }
    }, t = (e) => s("div", [s(w, {
      attrs: {
        type: "primary",
        icon: "el-icon-search"
      },
      on: {
        click: this.submit
      }
    }, ["搜索"]), s(w, {
      on: {
        click: this.reset
      },
      attrs: {
        icon: "el-icon-refresh"
      }
    }, ["重置"]), e.type === "search" && e.formOption.length > this.column - 1 ? s(w, {
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
    return r(this.$attrs);
  }
};
export {
  se as FormGenerator,
  re as GeneratorUtils,
  le as TableGenerator
};
//# sourceMappingURL=index.js.map
