/**
 * 通用表单子组件类型
 */
export enum FormElementTypes {
    textInput = "textInput",
    checker = "checker",
    numbers = "numbers",
    radio = "radio",
    numInput = "numInput",
    dropSelector = "dropSelector",
}
export enum FormValueTypes {
    String = "String",
    Number = "Number",
    Array = "Array",

}

export interface TextInputConfig{
    name: string
    label: string
    type: FormElementTypes.textInput
    placeholderText?: string
    default?: string
}

export interface CheckerConfig{
    name: string
    label: string
    type: FormElementTypes.checker
    placeholderText?: string
    default?: boolean
}

export interface NumbersInputConfig{
    name: string
    label: string
    type: FormElementTypes.numbers
    default?: number[]
}
export interface RadioConfig {
    name: string
    label: string
    type: FormElementTypes.radio
    options?: { name:string, label: string}[]
}
export interface NumInput {
    name: string
    label: string
    type: FormElementTypes.numInput
    default?: number
}
export interface DropSelectorConfig {
    name: string
    label: string
    type: FormElementTypes.dropSelector
    otherSettings?:{isMultiple?:boolean}
    options?: { name:string, label: string}[]
}
/**
 * 规定范围内的任意表单子元素中的一种
 */
export type FormEleConfig = TextInputConfig | CheckerConfig | NumbersInputConfig
    | RadioConfig
    | NumInput
    | DropSelectorConfig
export interface CustomFormConfig{
    title?: string
    elements: FormEleConfig[]
}
