const regThousands = /(\d)(?=(?:\d{3})+$)/g;
const regThousandsV2 = /(?!^)(?=(\d{3})+$)/g;
const k = 0;
((k) => {
  switch (k) {
    case 0:
      var string1 = "1234567890",
      string2 = "1234567890032";
      reg = regThousandsV2

      var result = string1.replace(reg, ',')
      console.log(result);
      // => "12,345,678"

      result = string2.replace(regThousands, '$1,');
      console.log(result);
      console.log(string2.match(regThousands))
      // => "123,456,789"
      break;

    default:
      break;
  }
})(k)