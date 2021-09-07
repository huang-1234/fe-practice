import s from "./CommonCustomForm.m.sass"

import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator"
import { FormEleConfig, CustomFormConfig } from "./CommonCustomFormConfig"
import { FormElementTypes } from "./CommonCustomFormConfig"
import { FormValueTypes } from "./CommonCustomFormConfig"
import { TextInput } from "./formChildren/TextInput"
import { DynamicNumInput } from "./formChildren/DynamicNumInput"
import { Checker } from "./formChildren/Checker"
import { Radio} from './formChildren/Radio'
// import { ValidateInput } from "./formChildren/ValidateInput"
import { NumInput } from './formChildren/NumInput';
import { DropSelector } from './formChildren/DropSelector';

/**
 * 可配置化动态渲染表单组件
 */
@Component
export class CommonCustomForm extends Vue {
    $props: Pick<CommonCustomForm, "formConfig" | "value" | "onSubmit">
    @Prop() formConfig: CustomFormConfig
    @Prop() value: { [key: string]: unknown }
    @Emit("submit") onSubmit(formMsg: { [key: string]: unknown }) {}

    private formMsg = null

    @Watch("value", { immediate: true })
    @Watch("formConfig")
    private _updateFormMsg() {
        // 当value或formConfig修改时，同步修改this.formMsg
        this.formMsg = this._genarateFormMsgObj(this.formConfig.elements, this.value)
    }

    private _genarateFormMsgObj(elements: FormEleConfig[], value: { [key: string]: unknown }) {
        const formMsg: object = {}
        elements.forEach((item) => {
            if (value && (item.name in value)) {
                formMsg[item.name] = value[item.name]
            } else if ("default" in item) {
                formMsg[item.name] = item.default
            }
        })
        return formMsg
    }

    // 使用泛型对上面三个以及以上的函数进行抽象,后期想要增加表单子组件就不用再写函数了
    private _setFormMsgValue<T>(name: string, formSubValue: T) {
        this.onSubmit({
            ...this.formMsg,
            [name]: formSubValue,
        })
    }

    // private _validate<V>(eleNode: HTMLElement, value: V) {
    //     const ElementNode = eleNode
    //     const valueType = Object.prototype.toString.call(value).slice(8,-1)
    //     switch (valueType) {
    //         case FormValueTypes.String:
    //             if (value) {
    //                 ElementNode.style.border = '1px solid rgba(81, 203, 238, 1)'
    //             } else {
    //                 ElementNode.style.border = '1px solid red'
    //             }
    //     }
    // }

    // 有没有办法可以做一个泛型组件,HOC???
    private _renderFormSubComponentsBytype(elements: FormEleConfig[]) {
        return elements.map((item: FormEleConfig) => {
            const value = this.formMsg[item.name]
            switch (item.type) {
                case FormElementTypes.textInput:
                    return (
                        <TextInput class={s.formSubBox} // 该样式可以统一调整各个表单子组件的样式
                            key={item.name}
                            name={item.name}
                            label={item.label}
                            value={value}
                            placeholderText={item.placeholderText}
                            onSubmit={this._setFormMsgValue}
                        />
                    )

                case FormElementTypes.checker:
                    return (
                        <Checker class={s.formSubBox}
                            key={item.name}
                            name={item.name}
                            label={item.label}
                            onSubmit={this._setFormMsgValue}
                            value={value}
                        />
                    )

                case FormElementTypes.numbers:
                    return (
                        <DynamicNumInput class={s.formSubBox}
                            key={item.name}
                            name={item.name}
                            label={item.label}
                            onSubmit={this._setFormMsgValue}
                            value={value}
                        />
                    )

                case FormElementTypes.radio:
                    return (
                        <Radio class={s.formSubBox}
                            key={item.name}
                            name={item.name}
                            value={value}
                            label={item.label}
                            options={item.options}
                            onSubmit={this._setFormMsgValue}
                        />
                    )

                case FormElementTypes.numInput:
                    return (
                        <NumInput class={s.formSubBox}
                            key={item.name}
                            name={item.name}
                            value={value}
                            label={item.label}
                            onSubmit={this._setFormMsgValue}
                            // validate = {this._validate}
                        />
                    )
                case FormElementTypes.dropSelector:
                    return (
                        <DropSelector class={s.formSubBox}
                            key={item.name}
                            name={item.name}
                            value={value}
                            label={item.label}
                            otherSettings={item?.otherSettings}
                            options={item.options}
                            onSubmit={this._setFormMsgValue}
                        />
                    )
            }
        })
    }

    // private _submitFormMsg() {
    //     this.onSubmit(this.formMsg)
    // }

    render() {
        return (
            <div class={s.form}>
                {this.formConfig.title && (
                    <div class={s.formTitle}>
                        <span>{this.formConfig.title} </span>
                    </div>
                )}
                {this._renderFormSubComponentsBytype(this.formConfig.elements)}
                {/* <button
                    class={s.submitFormMsg}
                    type="submit"
                    onclick={this._submitFormMsg}
                >
                    提交
                </button> */}
            </div>
        )
    }
}
