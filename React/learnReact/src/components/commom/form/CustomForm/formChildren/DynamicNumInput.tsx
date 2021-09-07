import { Vue, Component, Prop,Emit, Watch } from "vue-property-decorator"
import s from './DynamicNumInput.m.sass'

/**
 * 可动态添加删除的数字输入表单组件
 */
@Component
export class DynamicNumInput extends Vue {
    $props: Pick<DynamicNumInput,
        | 'name'
        | 'label'
        | 'value'
        | 'onSubmit'
        >
    @Prop() name: string
    @Prop() label: string
    @Prop() value: number[]
    @Emit('submit') onSubmit(name:string, order: number[]) { }

    private localValue: number[] = null

    @Watch("value", { immediate: true })
    private _updateLocalValue() {
        this.localValue = this.value ? [...this.value] : []
    }

    private _onChangeValue(value: string, index: number): void {
        this.localValue[index] = parseInt(value)
        this.onSubmit(this.name, this.localValue)
    }

    private _addInput() {
        this.localValue.push(0)
        this.onSubmit(this.name ,this.localValue)
    }
    private _deleteInput(index: number) {
        this.localValue.splice(index, 1)
        this.onSubmit(this.name ,this.localValue)
    }

    render() {
        return (
            <div class={s.dynamicBox} >
                <div class={s.label}>
                    <span>{this.label} </span>
                </div>
                <div class = {s.formChecks}>
                    {this.localValue.map((item,index) => {
                        return (
                            <div class={s.dynInput} >
                                <el-input class={s.numinput}
                                    key={index}
                                    type="number"
                                    size="mini"
                                    value={item}
                                    onInput={(value: string) => { this._onChangeValue(value, index) }}
                                    // onChange={this._onChangeValue}
                                    // onBlur={this._onChangeValue}
                                    min={1}
                                    max={1000}
                                ></el-input>
                                <span
                                    onclick={(e: any) => this._deleteInput(index)}
                                > <i class="el-icon-delete"></i>
                                </span>
                            </div>
                        )
                    })}
                    <div onClick={this._addInput}
                        class={s.elButton}
                    > <i class="el-icon-plus">增加</i>
                    </div>

                </div>
                {/* <el-button
                    class={s.elButton}
                    onClick={this._addInput}
                >十 增加</el-button> */}
            </div>
        )
    }
}
