import { Table as ElTable, TableColumn as ElTableColumn, Empty as ElEmpty, Loading as ElLoading } from 'element-ui'
export default {
  name: 'TableGenerator',
  data() {
    return {
      loading: null,
      el: new Date().getTime(),
      show: false,
      width: 0
    }
  },
  watch: {
    loading: {
      handler: function (val) {
        if (val) {
          this.loading = ElLoading.service({
            target: `.el-table-${this.el}`
          })
        } else {
          this.loading?.close()
        }
      },
      immediate: true
    },
    'this.$attrs.data': {
      handler: function (val) {
        if (!this.$slots?.operation || val.length === 0) return this.show = true
        this.show = false
        setTimeout(() => {
          let w = 0
          document.querySelectorAll < HTMLDivElement > ('.content-wrapper-width').forEach((i) => {
            if (i.offsetWidth > w) w = i.offsetWidth
          })
          this.width = w > 0 ? w + 32 : 'auto'
          this.show = true
        })
      },
      immediate: true
    },
  },
  render(h) {
    const renderColumn = (tableOption) => {
      return tableOption.map((item) => {
        if (['selection', 'index', 'expand'].includes(item.type)) {
          return <ElTableColumn type={item.type} {...{ attrs: item }}>
            {Object.keys(item?.slot || []).map(i => <template slot={i}>{item?.slot[i]()}</template>)}
          </ElTableColumn>
        }
        return <ElTableColumn
          show-overflow-tooltip={true}
          align="left"
          {...{ attrs: item }}
          scopedSlots={{
            default: (scope) => this.$scopedSlots[item.prop]
              ? this.$scopedSlots[item.prop]?.({ $index: scope.$index, row: scope.row })
              : item.formatter
                ? item.formatter({ $index: scope.$index, row: scope.row }) ?? '-'
                : scope.row[item.prop] ?? '-',
            ...item?.slot
          }}>
          {item.children && Array.isArray(item.children) && item.children.length > 0 ? renderColumn(item.children) : ''}
        </ElTableColumn>
      })
    }
    const renderTable = () => {
      console.log(this);
      return (
        <ElTable
          stripe={true}
          {...{ attrs: this.$attrs, on: this.$listeners }}
          class={`TableGenerator el-table-${this.el}`}
        >
          {Object.keys(this.$slot || []).includes('empty') ? <template slot="default">{this.$slot.empty()}</template> : <ElEmpty description="暂无数据" />}
          {Object.keys(this.$slot || []).includes('append') ? <template slot="append">{this.$slot.append()}</template> : ''}
          {renderColumn(this.$attrs.tableOption)}
          {this.$scopedSlots?.operation
            ? <ElTableColumn fixed="right" label="操作" width={this.width}
              scopedSlots={{ default: (scope) => <div class='content-wrapper'>{this.$scopedSlots.operation?.({ $index: scope.$index, row: scope.row })}</div> }}>
            </ElTableColumn>
            : ''
          }
        </ElTable>
      )
    }
    const renderOriginTable = () => {
      return (
        <ElTable
          {...{ attrs: this.$attrs, on: this.$listeners }}
          class={`TableGenerator el-table-${this.el}`}
        >
          <ElTableColumn fixed="right" label="操作" width={this.width}
            scopedSlots={{ default: (scope) => <div style="display:inline-block;opacity:0" class='content-wrapper content-wrapper-width'>{this.$scopedSlots.operation?.({ $index: scope.$index, row: scope.row })}</div> }}>
          </ElTableColumn>
        </ElTable>
      )
    }
    return (
      this.show ? renderTable() : renderOriginTable()
    )
  }
}