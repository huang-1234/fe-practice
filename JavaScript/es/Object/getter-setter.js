const obj1 = {
  _firstName: "huang",
  get getfirstName() {
    return this._firstName;
  },
  /**
   * @param {string} firstName
   */
  set setfirstName(firstName) {
    this._firstName = firstName;
  }
}

console.log(obj1.getfirstName);
console.log(obj1._firstName);