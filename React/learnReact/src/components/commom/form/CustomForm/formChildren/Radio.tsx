import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'

import s from './Radio.m.sass'

/**
 * radio单选框
 */
@Component
export class Radio extends Vue {
    $props: Pick<
        Radio,
        | "name"
        | "value"
        | "label"
        | "options"
        | "onSubmit"
    >
    @Prop() name: string
    @Prop() value: string
    @Prop() label: string
    @Prop() options: { name: string, label: string }[]
    // @Prop() radio?: boolean
    @Emit('submit') onSubmit(name: string, val: string) { }

    private _onChange(v: string) {
        this.onSubmit(this.name, v)
    }
    render() {
        return (
            <div
                class={s.radioBox}
            // onClick={this._watchRadio}
            >
                <span
                    class={s.label}
                >{this.label}</span>
                <el-radio-group
                    value={this.value}
                    onInput={this._onChange}
                // v-model={this.value}
                // onChange={this._watchRadio}
                >
                    {this.options?.map((item) => {
                        return (
                            <el-radio
                                key={item.name}
                                // name={item.name}
                                label={item.name}
                            >{item.label}</el-radio>
                        )
                    })}
                </el-radio-group>
            </div>
        )
    }

}