
type NodeEnv = "development" | "test" | "production";


let base =  {
}
export default {
  "development":{ 
    ...base,
  },
  "test":{
    ...base
  },
  "production":{
    ...base
  }
}[process.env.NODE_ENV as NodeEnv || "production"]