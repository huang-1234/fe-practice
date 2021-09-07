import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'

import s from './DropSelector.m.sass'

/**
 * 可单选可多选的下拉框：控制参数 (isMultiple:false)
 */
@Component
export class DropSelector extends Vue {
    $props: Pick<
        DropSelector,
        | "name"
        | "value"
        | "label"
        | "otherSettings"
        | "options"
        | "onSubmit"
    >
    @Prop() name: string
    @Prop() value: string
    @Prop() label: string
    /* 控制下拉框是否可以多选 */
    @Prop({default: false}) otherSettings?: { isMultiple?: boolean }
    @Prop() options: { name: string, label: string }[]
    @Emit('submit') onSubmit(name: string, val: string) { }


    private _onChange(v: string) {
        this.onSubmit(this.name, v)
    }
    render() {
        return (
            <div
                class={s.dropSelectorBox}
            >
                <span
                    class={s.label}
                >{this.label}</span>
                <el-select class={s.elSelect}
                    value={this.value}
                    onChange={this._onChange}
                    filterable={true}
                    size={"mini"}
                    multiple={this?.otherSettings?.isMultiple}
                    placeholder="请选择">
                    {this.options?.map((item) => {
                        return (
                            <el-option
                                key={item.name}
                                label={item.label}
                                value={item.name}
                            >{item.label}</el-option>
                        )
                    })}
                </el-select>
            </div>
        )
    }

}