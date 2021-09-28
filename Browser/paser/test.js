
var b = 'window';
function c() {
  console.log(b)
  console.log(this.b)
}
c()

var obj = {
    b: '1-1',
    c:function(){
      console.log(b)
      console.log(this.b)
      return {
        b: '1-2',
        c: function() {
          console.log(b)
          console.log(this.b)
        }
      }
    },
}
obj = obj.c()
obj.c = c
obj.c()