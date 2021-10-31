// ajax 请求。。。。

function loadAll(response) {
  //将10万条数据分组， 每组500条，一共200组
  var groups = group(response);
  for (var i = 0;i < groups.length;i++) {
    //闭包， 保持i值的正确性
    window.setTimeout(function () {
      var group = groups[i];
      var index = i + 1;
      return function () {
        //分批渲染
        loadPart(group, index);
      }
    }(), 1);
  }
}

//数据分组函数（每组500条）
function group(data) {
  var result = [];
  var groupItem;
  for (var i = 0;i < data.length;i++) {
    if (i % 500 == 0) {
      groupItem != null && result.push(groupItem);
      groupItem = [];
    }
    groupItem.push(data[i]);
  }
  result.push(groupItem);
  return result;
}
var currIndex = 0;
//加载某一批数据的函数
function loadPart(group, index) {
  var html = "";
  for (var i = 0;i < group.length;i++) {
    var item = group[i];
    html += "<li>title:" + item.title + index + " content:" + item.content + index + "</li>";
  }
  //保证顺序不错乱
  while (index - currIndex == 1) {
    $("#content").append(html);
    currIndex = index;
  }
}