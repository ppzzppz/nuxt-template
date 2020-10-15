import axios,{AxiosResponse} from "axios";


// 超时时间设置 15s
axios.defaults.timeout = seconds(15);

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
export function seconds(n:number):number{
  return n * 1000
}

export function url(path:string):string{
  return ('/api/management/' + path).split("//").join("/");
}
export function ramadan(path:string):string{
  return ('/api/ramadan/' + path).split("//").join("/");
}
export function apijson(path:string):string{
  return ('/' + path).split("//").join("/");
}

export type API<T> = {
  success: true,
  responseHeader:{
    status: number,
    version: string
  },
  response: T
} | {
  success: false,
  responseHeader:{
    status: number
    msg: string | null,
    version: string
  }
}



// 强转类型
export function transAPIData<T>(apiData:API<T>):API<T>{
  if(apiData.responseHeader.status == 200){
    apiData.success = true;
  }else{
    apiData.success = false;
  }
  return apiData;
}

export function takeData<T>(resp:AxiosResponse<API<T>>):T{
  let apiData = resp.data
  transAPIData(apiData);
  if(apiData.success){
    return apiData.response;
  }else{
    throw {
      type: "takeData",
      code: apiData.responseHeader.status,
      message: apiData.responseHeader.msg,
      config:resp.config,
      target: apiData
    }
  }
}
