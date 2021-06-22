/* 
const buf = new ArrayBuffer(16); // 分配16个字节
console.log(buf);

for (let i = 0, arrLen = buf.byteLength;i<arrLen;i++){
  buf[i] = { num:i + i };
  console.log(buf[i])
}
 */

const f32a = new Float32Array(32);
const f64a = new Float64Array(64);

console.log(f32a,f64a)