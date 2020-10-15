declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

declare module "vue-loading"{
  var a : any;
  export default a
}

declare module "*.png" {
  var a : string;
  export default a
}

declare module "clipboard" {
  var Clipboard : any
  export default Clipboard
}

declare module "ali-oss" {
  var oss : any
  export default oss
}

interface Navigator {
  share : UndefinedOr<(a:{url:string,text:string,title:string}) => Promise<void>>;
}

type UndefinedOr<T> = undefined | T
type PartialUndefined<T> = {
  [P in keyof T]: T[P] | undefined
}
type Basictype = string | number | boolean 



function gta(e:"event",key:string,jsObj:any):void;
function gta(a:"js",b:any):void;
function gta(a:"config",b:any,obj:any):void;
function gta(a:"config",b:any):void;
interface Window {
  TTK? : {
    command?(ok:Function,canel:Function,action:string,args:Basictype[])
  },
  dataLayer: any [],
  plupload:any
}
