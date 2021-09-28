setTimeout(function() {console.log('timer1')}, 0)

requestAnimationFrame(function(){
	console.log('requestAnimationFrame')
})

setTimeout(function() {console.log('timer2')}, 0)

new Promise(function executor(resolve) {
	console.log('promise 1')
	resolve()
	console.log('promise 2')
}).then(function() {
	console.log('promise then')
})

console.log('end')

/* promise 1
promise 2
end
promise then
requestAnimationFrame
timer1
timer2 */