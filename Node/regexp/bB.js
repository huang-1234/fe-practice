{

  const wordBound = new RegExp(/\b/g);
  const nonWordBound = new RegExp(/\B/g);

  const testStr = "[JS] Lesson_01.mp4";

  const wBoundStrExp = "[|JS|] |Lesson_01|.|mp4|";
  const nwBoundStrExp = "|[J|S]| L|e|s|s|o|n|_|0|1.m|p|4"; // 单词边界的剩余 token 边界

  const res1 = testStr.replace(nonWordBound, '#');

  const res2 = testStr.replace(wordBound, '#')
  console.log(res1);
  console.log(res2);
  // => "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4"
}
