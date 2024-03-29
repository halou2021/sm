var tlist = {
  1: ["元旦", "2023-01-01", "  休➌天"],
  2: ["春节", "2023-01-22", "  休➐天"],
  3: ["清明节", "2023-04-05", "  休➊天"],
  4: ["劳动节", "2023-05-01", "  休➎天"],
  5: ["端午节", "2023-06-22", "  休➌天"],
  6: ["七夕", "2023-08-22", "  ✘"],
  7: ["中秋节、国庆节", "2023-09-29", "  休➑天"],
  8: ["元旦", "2024-01-01", "  休➊天"],
  9: ["春节", "2024-02-10", "  休➐天"]
};
let tnow = new Date();
let tnowf =
  tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate();

/* 计算2个日期相差的天数, 不包含今天, 如: 2016-12-13到2016-12-15, 相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */
function dateDiff(startDateString, endDateString) {
  var separator = "-"; //日期分隔符
  var startDates = startDateString.split(separator);
  var endDates = endDateString.split(separator);
  var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
  var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
  return parseInt(
    (endDate - startDate) / 1000 / 60 / 60 / 24
  ).toString();
}

//计算输入序号对应的时间与现在的天数间隔
function tnumcount(num) {
  let dnum = num;
  return dateDiff(tnowf, tlist[dnum][1]);
}

//获取最接近的日期
function now() {
  for (var i = 1; i <= Object.getOwnPropertyNames(tlist).length; i++) {
    if (Number(dateDiff(tnowf, tlist[i.toString()][1])) >= 0) {
      return i;
    }
  }
}

//如果是0天, 发送emoji;
let nowlist = now();
function today(day) {
  let daythis = day;
  if (daythis == "0") {
    return "🎉";
  } else {
    return daythis;
  }
}

$done({
title:"节假日倒计时",
icon:"hourglass",
'icon-color':"#1E88FB",
content:
tlist[nowlist][0]+":  "+(today(tnumcount(nowlist))+"天").replace("🎉天", "🎉")+tlist[nowlist][2]+"\n"+tlist[Number(nowlist) + Number(1)][0] +":  "+ tnumcount(Number(nowlist) + Number  (1))+ "天"+tlist[Number(nowlist) + Number(1)][2]
})
