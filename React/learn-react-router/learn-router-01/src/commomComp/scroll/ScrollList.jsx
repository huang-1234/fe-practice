import React, { PureComponent } from 'react'
import { throttle } from '../../utils/index'

// 应该接收的props: renderItem: Function, height:string; estimateHeight:Number
export class ScrollList extends PureComponent {
  constructor(props) {
    super(props)
    this.renderItem = props.renderItem
    this.getData = props.getData
    // 预估高度 做屏幕适配
    this.estimateHeight = document.documentElement.clientWidth * (props.estimateHeight / 320)
    // 每一页展示的数据
    //一页10条数据，进行一页数据的预估
    // 每一页的总体高度
    this.pageHeight = []
    this.state = {
      List: []
    }
    this.scrollWrapper = React.createRef()
    this.handleScroll = throttle(this.onScroll, 300)
    this.hasDidMounted = false
  }

  async componentDidMount() {
    console.log('----- sroll list mount')
    this.init()
    this.hasDidMounted = true
  }

  init = async (isEimtByParant = false) => {
    const { offset, events } = await this.props.getData()
    this.initOptions({ offset, events, isEimtByParant })
  }
  // resource
  // static getDerivedStateFromProps ({ resource, pageSize }) {
  //   if (resource.length && resource.length <= pageSize) {
  //     self.initOptions({ offset: 0, events: resource })
  //     console.log(resource, pageSize)
  //   }
  //   return null
  // }

  initOptions = ({ offset = 0, events = [], isEimtByParant }) => {
    const page = Math.floor(offset / this.props.pageSize)
    let pageList = [...this.state.List]

    if (!offset) {
      pageList = []
    }
    // 列表数据
    if (!pageList.length) {
      pageList[0] = {
        data: events,
        visible: true
      }
    } else {
      pageList[page] = {
        data: events,
        visible: false
      }
    }
    if (isEimtByParant) {
      this.pageHeight = []
    }
    // debugger
    // 然后对pageHeight根据预估高度进行预估初始化，后续重新进行计算,每个列表的预估位置高度
    if (this.pageHeight.length) {
      this.pageHeight[page] = {
        top: this.pageHeight[page - 1].height + this.pageHeight[page - 1].top,
        height: this.estimateHeight * events.length,
        isComputed: false
      }
    } else {
      this.pageHeight.push({
        top: 0,
        height: this.estimateHeight * events.length,
        isComputed: false
      })
    }
    console.log('inint options ', this.pageHeight)
    this.setState({
      List: pageList
    })
  }

  initHeight = (offsetHeight, scrollTop) => {
    requestAnimationFrame(() => {
      // 判断一下需要展示的列表，其他的列表都给隐藏了
      const listShow = [...this.state.List]
      //  console.log(listShow)
      listShow.forEach((item, index) => {
        if (this.pageHeight[index]) {
          const bottom = this.pageHeight[index].top + this.pageHeight[index].height
          //  console.log('------', bottom, scrollTop, this.pageHeight[index].top > scrollTop + offsetHeight + 5)
          if ((bottom < scrollTop - 10) || (this.pageHeight[index].top > scrollTop + offsetHeight + 10)) {
            listShow[index].visible = false
          } else {
            // 根据预估高度算出来它在视野内的时候，先给它变成visible，让他出现，才能拿到元素高度
            this.setState(prevState => {
              const List = [...prevState.List]
              List[index].visible = true
              return {
                List
              }
            })
            //  console.log(1111111, this.state.List)
            // 出现以后，然后计算高度，替换掉之前用预估高度设置的height
            const target = this[`page${index}`].current
            let top = 0
            if (index > 0) {
              top = this.pageHeight[index - 1].top + this.pageHeight[index - 1].height
            }
            if (target && target.offsetHeight && !listShow[index].isComputed) {
              this.pageHeight[index] = { top, height: target.offsetHeight }
              //  console.log(target.offsetHeight)
              listShow[index].visible = true
              listShow[index].isComputed = true
              // 计算好了以后，还要再setState一下，调整列表高度
              this.setState({
                List: listShow
              })
            }
          }
        } else {
          this.pageHeight[index] = { top, height: this.estimateHeight * this.props.pageSize }
        }
      })
    })
  }

  onScroll = async () => {
    const { offsetHeight, scrollHeight, scrollTop } = this.scrollWrapper.current
    this.initHeight(offsetHeight, scrollTop)
    // console.log(offsetHeight, scrollHeight)
    if (offsetHeight + scrollTop + 10 > scrollHeight && this.props.hasMore) {
      const { events, offset } = await this.props.getData(1)
      this.initOptions({ offset, events })
      this.initHeight(offsetHeight, scrollTop)
    }
  }

  render() {
    const { List } = this.state
    // console.log('list', List)
    let headerHeight = 0
    let bottomHeight = 0
    let i = 0
    for (;i < List.length;i++) {
      if (!List[i].visible) {
        headerHeight += this.pageHeight[i].height
      } else {
        break
      }
    }
    for (;i < List.length;i++) {
      if (!List[i].visible) {
        bottomHeight += this.pageHeight[i].height || 0
      }
    }
    const renderList = List.map((item, index) => {
      this[`page${index}`] = React.createRef()
      if (item.visible) {
        return <div ref={this[`page${index}`]} key={`${item.id}_page${index}`}>
          {item.data.map((value, log) => {
            return (
              this.renderItem(value, `${index}-${log}`)
            )
          })}
        </div>
      }
    })
    return (<div
      ref={this.scrollWrapper}
      onScroll={this.handleScroll}
      style={{ height: '100%', overflow: 'scroll' }}
    >
      <div style={{ height: headerHeight }} />
      {renderList}
      <div style={{ height: bottomHeight }} />
      {/* {this.state.loading && (
        <div>加载中</div>
      )}
      {this.state.showMsg && (
        <div>暂无更多内容</div>
      )} */}
    </div>)
  }
}

export default ScrollList