import axios1 ,{AxiosResponse} from "axios";
import {API,APIConstraintException} from "@/api/types"

export const axios = axios1
// 超时时间设置 
axios.defaults.timeout = seconds(30);

// 为每个请求增加唯一ID参数 已知副作用:对config有修改
// 一来可以去除某些浏览器上对Get请求对缓存
// 二来可以追踪接口请求链路(如需要)
axios.interceptors.request.use(config=>{
  config.params = config.params || {};
  config.params.__trace = uuidGen();
  return config;
})

// 简单唯一ID生成
export function uuidGen():string{
  // 选取URL支持的字符
  let table = [
    "1","2","3","4","5","6","7","8","9","0",
    "a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z",
    "-"
  ];
  let r = ["FED"];
  for(let i=0;i<11;i++){
    r.push(table[Math.trunc(Math.random()*table.length)]);
  }
  return r.join("");
}

// 秒转为毫秒
function seconds(n:number):number{
  return n * 1000
}

export function testurl(path:string):string{
  return ('/api/ramadan/' + path).split("//").join("/");
}

export function transAPIData<T>(apiData:API<T>):API<T>{
  if(apiData.responseHeader.status == 200){
    apiData.success = true;
  }else{
    apiData.success = false;
  }
  return apiData;
}

// 如接口成功返回则返接口数据，否则抛出异常
export function takeData<T>(resp:AxiosResponse<API<T>>):T{
  let apiData = resp.data
  transAPIData(apiData);
  if(apiData.success){
    return apiData.response;
  }else{
    throw new APIConstraintException(apiData.responseHeader)
  }
}
