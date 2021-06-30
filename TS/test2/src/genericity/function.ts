function add1(num1: number, num2: number):number {
  return num1 + num2
}


function add<T>(x: T, y: T) {
  if ('number' === x) {
    
  }
  return  x + y;
}

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"


let a = 3224;