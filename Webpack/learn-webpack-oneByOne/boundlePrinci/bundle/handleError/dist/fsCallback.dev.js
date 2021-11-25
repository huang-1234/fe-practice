"use strict";

module.exports = {
  handlefsError: function handlefsError(fsAction) {
    return function (error) {
      if (error) {
        console.log("there is ".concat(error, " cause ").concat(fsAction.type, " faild"));
        return false;
      }

      console.log("".concat(fsAction.type, " is succeed"));
    };
  }
};