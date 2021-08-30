
module.exports =  function playerGame(playerAction) {

  let randomValue = Math.random() * 3;
  let computerAction;
  if (randomValue < 1) {
    computerAction = 'rock'
  } else if (1 <= randomValue && randomValue <= 2) {
    computerAction = 'scissor';
  } else {
    computerAction = 'paper'
  }

  console.log('你出了', playerAction)

  if (playerAction === computerAction) {
    console.log('我出的:',computerAction)
    console.log('平局');
    return computerAction
  } else if (
    'rock' === playerAction && 'scissor' === computerAction ||
    'scissor' === playerAction && 'paper' === computerAction ||
    'paper' === playerAction && 'rock' === computerAction
  ) {
    console.log('我出的:',computerAction)
    console.log('算你狠')
  } else {
    console.log('我出的:',computerAction)
    console.log('太菜了你')
  }
}
