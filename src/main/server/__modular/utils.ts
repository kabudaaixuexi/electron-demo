export function getTime() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth() + 1;
    var day = now.getDate();
    var week = now.getDay();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    // return year+"-"+todo(mon)+"-"+todo(day)+"-"+
    // toweek(week)+todo(hour)+":"+todo(min)+":"+todo(sec)
    return year + "-" + todo(mon) + "-" + todo(day)
}
function todo(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}
function toweek(num) {
    switch (num) {
        case 0:
            return '星期天';
            break;
        case 1:
            return '星期一';
            break;
        case 2:
            return '星期二';
            break;
        case 3:
            return '星期三';
            break;
        case 4:
            return '星期四';
            break;
        case 5:
            return '星期五';
            break;
        case 6:
            return '星期六';
            break;
    }
}