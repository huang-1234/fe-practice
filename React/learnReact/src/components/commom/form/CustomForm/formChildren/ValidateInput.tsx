import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator"

import s from "./ValidateInput.m.sass"

@Component
export class ValidateInput extends Vue {
    $props: Pick<
        ValidateInput,
        "name" | "label" | "value" | "placeholderText" | "onSubmit"
    >
    @Prop() name: string
    @Prop() label: string
    @Prop() value: string
    @Prop() placeholderText: string
    @Emit("submit") onSubmit(name: string, text: string) {}

    private textInput: string = ""

    @Watch("value", { immediate: true })
    private _syncText() {
        this.textInput = this.value
    }

    render() {
        return (
            <div className={s.validateInputBox}>
                <el-form-item
                    label={this.label}
                    prop={this.textInput}
                    // rules={[ // rules不要和年龄这种业务绑定
                    //     { required: true, message: "年龄不能为空" },
                    //     { type: "number", message: "年龄必须为数字值" },
                    // ]}
                >
                    <el-input
                        type={this.textInput}
                        class={[s.elInput]}
                        placeholder={this.placeholderText}
                        vModel={this.textInput}
                        onBlur={(e) => this.onSubmit(this.name, this.textInput)}
                        clearable
                        show-password={false} // 是否渲染成密码输入框的形式
                        debounce={1000} // 获取输入建议的去抖延时 默认300ms
                        minlength={2}
                        maxlength={10}
                        // validate-event={true}
                    ></el-input>
                </el-form-item>
            </div>
        )
    }
}
