import { APIConstraintException, Exception, IgnoreException, SomeException } from "@/api/types";

type SupportError = Error | SomeException


export function showAnError(error:Error|SomeException):any{
  // 这里做一个示例
  if(error instanceof APIConstraintException){
    alert(error.exception.msg)
  }else if(error instanceof Exception){
    alert(error.message)
  }else if( error instanceof IgnoreException) {
    // 遇到此错误不做任何事情
  }else{
    // 不认识的错误
    console.log(error)
  }
}

type PromiseFunc = (...args:any)=>Promise<any>
export async function catchAndShowAnError(block:Function,errorHandle=showAnError){
  if(process.client == false){
    //错误处理只真对client端
  }else{
    // 这里可能要显示loadin
    try{
      return await block()
    }catch(e){
      errorHandle(e)
    }finally{
      // 这里处理关闭loading之类的事情
    }
  }
}
export function AutoCatchAndShowAnError(errorHandle=showAnError){
  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<PromiseFunc>)=>{
    if(process.client == false){
      //错误处理只真对client端
      return descriptor
    }
    let originMethod = descriptor.value
    descriptor.value = async function(...args:any){
      // 这里可能要显示loading
      try{
        if(originMethod){
          return await originMethod.apply(this,args)
        }
      }catch(e){
        errorHandle(e)
      }finally{
        // 这里处理关闭loading之类的事情
      }
    }
    return descriptor
  }
}