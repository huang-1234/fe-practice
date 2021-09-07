import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator"

import s from "./Checker.m.sass"

/**
 * 布尔型单选框
 */
@Component
export class Checker extends Vue {
    $props: Pick<Checker, "name" | "label" | "onSubmit" | "value">
    @Prop() name: string
    @Prop() label: string
    @Prop() value: boolean
    @Emit("submit") onSubmit(name: string, isChecked: boolean) {}

    private _submitIsChecked(isChecked: boolean) {
        this.onSubmit(this.name, isChecked)
    }

    render() {
        return (
            <div
                class={s.checkerBox}
            >
                <span>{this.label}</span>
                <el-checkbox
                    // label={this.label}
                    name="type"
                    value={this.value}
                    onChange={this._submitIsChecked}
                ></el-checkbox>
            </div>
        )
    }
}
