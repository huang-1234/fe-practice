function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

console.log(getExclamationMarks(3))