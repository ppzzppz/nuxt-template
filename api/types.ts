// 此处放公共的类型

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

export class SomeException{}
//标记错误，此类错误用于不想往下执行了但又不想被处理
export class IgnoreException extends SomeException {
}
export class Exception extends SomeException{
  message : string
  constructor(message:string){
    super()
    this.message = message
  }
}
export class APIConstraintException extends Exception {
  exception: APIException
  constructor(exception:APIException){
    super(exception.msg || "")
    this.exception = exception
  }
}

export type APIPartFromEnum<A=API<{}>> = A extends {success:false,responseHeader: infer R} ? R : never

// responseHeader
export type APIException = APIPartFromEnum