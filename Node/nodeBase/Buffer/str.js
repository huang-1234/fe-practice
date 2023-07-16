// 创建一个大小为10的空buffer
// 这个buffer只能承载10个字节的内容
function out(t) {
  console.log('out', t)
}
const buf1 = Buffer.alloc(10);

// 根据内容直接创建buffer

const buf2 = Buffer.from("hello buffer");


// 检查下buffer的结构

out(buf1.toJSON())
// { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }
// 一个空的buffer

out(buf2.toJSON())
// { type: 'Buffer',data: [ 104, 101, 108, 108, 111, 32, 98, 117, 102, 102, 101, 114 ] }
// the toJSON() 方法可以将数据进行Unicode编码并展示

// 检查buffer的大小

out(buf1.length) // 10

out(buf2.length) //12 根据数据自动盛满并创建

//写入数据到buffer
buf1.write("Buffer really rocks!")


//解码buffer

out(buf1.toString()) // 'Buffer rea'

//哦豁，因为buf1只能承载10个字节的内容，所有多处的东西会被截断

//比较两个buffers
