import { Vue, Component,Prop, Emit } from "vue-property-decorator"

import s from "./NumInput.m.sass"

/**
 * 数字输入框
 */
@Component
export class NumInput extends Vue{
    $props: Pick<NumInput, | "name" | "label" | "value" | "onSubmit">

    @Prop() name: string
    @Prop() label: string
    @Prop() value: number

    @Emit("submit") onSubmit(name: string, val: number) { }

    private localNum: number
    created() {
        this.localNum = this.value
    }
    private _handleChange(value: number) {
        let v: number = value
        this.localNum = v
        this.onSubmit(this.name, v)
    }

    render() {
        return (
            <div class={s.numInputBox}>
                <span class={s.label} >
                    {this.name}:
                </span>
                <input
                    // class={["el-input__inner"]}
                    ref="numInput"
                    type='number'
                    vModel={this.localNum}
                    // value={this.localNum}
                    // onBlur={(event)=>this._handleChange(event.target.value)}
                    onBlur={()=>this._handleChange(this.localNum)}
                    size={"mini"}
                ></input>
            </div>
        )
    }
}