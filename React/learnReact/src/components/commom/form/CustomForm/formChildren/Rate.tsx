// import { Vue, Component, Prop,Emit, Watch } from 'vue-property-decorator'

// import s from './Rate.m.sass'

// @Component
// export class Rate extends Vue{
//     $props: Pick<
//     Rate,
//     | "name"
//     | "label"
//     | "value"
//     | "placeholderText"
//     | "onSubmit"
//     >
//     @Prop() name: string
//     @Prop() label: string
//     @Prop() value: string
//     @Prop() placeholderText: string
//     @Emit('submit') onSubmit(name:string , text: string) { }

//     private Rate: number = 0

//     @Watch("value", { immediate: true })
//     private _watchRate() {

//     }

//     render() {
//         return (
//             <div className={s.rateBox}></div>
//         )
//     }

// }