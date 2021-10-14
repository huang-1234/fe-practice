/// <reference path="Validation.ts" />
console.log(`1==================================`);
var Validation;
console.log(`2==================================`);
(function (Validation) {
  console.log(`3==================================`);
  var lettersRegexp = /^[A-Za-z]+$/;
  var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
      return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
  }());
  Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
console.log(`4==================================`);
var Validation;
console.log(`5==================================`);
(function (Validation) {
  console.log(`6==================================`);
  var numberRegexp = /^[0-9]+$/;
  var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
      return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
  }());
  Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
console.log(`7==================================`)
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings;_i < strings_1.length;_i++) {
  var s = strings_1[_i];
  for (var name_1 in validators) {
    console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
  }
}


// 编译带namespace 的 ts 代码
// tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts

console.log(Validation)