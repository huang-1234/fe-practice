module.exports = {
  handlefsError(fsAction) {
    return (error) => {
      if (error) {
        console.log(`there is ${error} cause ${fsAction.type} faild`)
        return false
      }
      console.log(`${fsAction.type} is succeed`)
    }
  }

}