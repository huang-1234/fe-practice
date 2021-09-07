import { Vue, Component, Prop,Emit, Watch } from 'vue-property-decorator'

import s from './TextInput.m.sass'

/**
 * 文本输入框
 */
@Component
export class TextInput extends Vue{
    $props: Pick<
        TextInput,
        | "name"
        | "label"
        | "value"
        | "placeholderText"
        | "onSubmit"
        >
    @Prop() name: string
    @Prop() label: string
    @Prop() value: string
    @Prop() placeholderText: string

    @Emit('submit') onSubmit(name:string , text: string) { }

    private textInput: string = ''

    @Watch("value", { immediate: true })
    private _syncText() {
        this.textInput = this.value
    }

    // private _handleChange(value: string) {
    //     const Element = this.$refs.textIn as HTMLElement
    //     this.validate(Element, value)
    //     this.onSubmit(this.name, value)
    // }

    render() {
        return (
            <div class={s.inputBox} >
                <span class={s.label} >{this.label} </span>
                <div  class={[s.elInput]}>
                    <el-input
                        ref="textIn"
                        size="mini"
                        class={[s.elInput]}
                        placeholder={this.placeholderText}
                        vModel={this.textInput}
                        onBlur={() => this.onSubmit(this.name, this.textInput)}
                        // onBlur={(event) => this._handleChange(event.target.value)}
                        clearable
                        onClear={() => this.onSubmit(this.name, this.textInput)}
                        show-password={false} // 是否渲染成密码输入框的形式
                        debounce={1000}        // 获取输入建议的去抖延时 默认300ms
                        // minlength={0}
                        // maxlength={20}
                        validate-event={true}
                    >
                    </el-input>
                </div>
            </div>
        )
    }
}