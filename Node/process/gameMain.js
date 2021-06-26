const game = require('./rock-scissor-paper');
const action = require('./contant')
const playerAction = process.argv[process.argv.length - 1];


process.stdin.on('data', (e) => {
  const playerAction = e.toString().trim();
  let step = 0; console.log(`第${++step}步:`);

  if (action.ROCK !== playerAction || action.SCISSOR !== playerAction || action.PAPER !== playerAction) {
    console.log('请重新输入:');
  } else {
    const result = game(playerAction)
  }
})