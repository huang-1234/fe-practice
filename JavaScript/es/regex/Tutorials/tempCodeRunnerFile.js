  var regex = /a[123]b/g;
  var string = "a0b a1b a2b a3b a4b a12b";
  console.log( string.match(regex) );
  // => ["a1b", "a2b", "a3b"]