let sign = void 0 // 公共标注
const addScrollEvent = (node, eventFn) => {
    if (!eventFn) return
    node.addEventListener('mouseenter', e => sign = node.className) // 这里不同的节点用不同的 class 值
    let event = eventFn.bind(node)
    node.addEventListener('scroll', event)
}

addScrollEvent(dom1, function (e) {
    if(sign !== this.className) return // 如果滚动不是自己触发的，直接返回
    let top = this.scrollTop,
        left = this.scrollLeft;
    dom2.scrollTo(left, top)
})

addScrollEvent(dom2, function (e) {
    if(sign !== this.className) return
    let top = this.scrollTop,
        left = this.scrollLeft;
    dom1.scrollTo(left, top)
})
