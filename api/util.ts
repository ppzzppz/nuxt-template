
export type Time = Date | number;
/**
 *
 * @param date 日期对象或者时间戳
 * @param format y年M月d日 h时m分s秒
 */
export function formatDate(time:Time,format:string):string{
  let date;
  if(typeof time == "number"){
    date = new Date(time);
  }else{
    date = time;
  }
  return format
  .replace(/yyyy/g,date.getFullYear()+'')
  .replace(/yyy/g,date.getFullYear()+'')
  .replace(/yy/g,date.getFullYear()+'')
  .replace(/y/g,date.getFullYear()+'')
  .replace(/MM/g,(leastTwo(date.getMonth() + 1)))
  .replace(/M/g,(date.getMonth() + 1)+'')
  .replace(/dd/g,leastTwo(date.getDate()))
  .replace(/d/g,date.getDate()+'')
  .replace(/hh/g,leastTwo(date.getHours()))
  .replace(/h/g,date.getHours()+'')
  .replace(/mm/g,leastTwo(date.getMinutes()))
  .replace(/m/g,date.getMinutes()+'')
  .replace(/sss/g,date.getSeconds()+'')
  .replace(/ss/g,date.getSeconds()+'')
  .replace(/s/g,date.getSeconds()+'')
}

// 返回至少两位数
function leastTwo(n:number):string{
  if(n >=  10){
    return n + ""
  }else{
    return "0" + n;
  }
}

export function toNormal(time:Time):string{
  return formatDate(time,"y/MM/dd hh:mm");
}
