export function scrollToY(rightELe, toY, step = 10) {
  let diff = rightELe.scrollTop - toY
  let realStep = diff > 0 ? -step : step
  if (Math.abs(diff) > step) {
    rightELe.scrollTop = rightELe.scrollTop + realStep
    requestAnimationFrame(() => {
      scrollToY(rightELe, toY, step)
    })
  } else {
    rightELe.scrollTop = toY
  }
}
