var name = "windowsName";

var a = {
  name: "Cherry",

  func1: function () {
    console.log(this.name)
  },

  func2: function () {
    setTimeout(() => {
      this.func1()
    }, 100);
  }

};

a.func2()     // Cherry复制代码