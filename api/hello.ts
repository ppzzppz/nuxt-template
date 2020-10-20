import { axios, takeData, testurl } from "@/api/req";
import { API, APIConstraintException, Exception } from "@/api/types";

let api = {
  hello : (a:string,id:string) => testurl(`/a/b${a}/${id}`)
}

export type Hello = {
  id: string,
  name: string
}
export async function helloApi():Promise<Hello>{
  // throw new Exception("test exception")
  return axios.get<API<Hello>>(api.hello("aaa","id")).then(takeData)
}