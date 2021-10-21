// import React, {Component} from "react"

// export const connect = (mapStateToProps: (arg0: any, arg1: Readonly<{}> & Readonly<{ children?: React.ReactNode }>) => any, mapDispatchToProps: (arg0: any, arg1: Readonly<{}> & Readonly<{ children?: React.ReactNode }>) => any) => (WrappedComponent: any) => {
//   class Connect extends Component {
//     static contextTypes = {
//       store: PropTypes.object
//     }

//     constructor () {
//       super()
//       this.state = {
//         allProps: {}
//       }
//     }

//     componentWillMount () {
//       const { store } = this.context
//       this._updateProps()
//       store.subscribe(() => this._updateProps())
//     }

//     _updateProps () {
//       const { store } = this.context
//       let stateProps = mapStateToProps
//         ? mapStateToProps(store.getState(), this.props)
//         : {} // 防止 mapStateToProps 没有传入
//       let dispatchProps = mapDispatchToProps
//         ? mapDispatchToProps(store.dispatch, this.props)
//         : {} // 防止 mapDispatchToProps 没有传入
//       this.setState({
//         allProps: {
//           ...stateProps,
//           ...dispatchProps,
//           ...this.props
//         }
//       })
//     }

//     render () {
//       return <WrappedComponent {...this.state.allProps} />
//     }
//   }
//   return Connect
// }