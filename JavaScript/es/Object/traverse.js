
const barMsg = {
  type: "join",
  hasFilter: true,
  hasSort:true,
}

const barArr = Object.getOwnPropertyNames(barMsg).filter((key) => {
  return barMsg[key] === true;
})

console.log(barArr);