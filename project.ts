
type NodeEnv = "development" | "test" | "production";


let base =  {
  name: "home"
  //  config in all environment
}

type OPtionConfig = Partial<typeof base>
function mergeConfigWithBase(config: OPtionConfig): typeof base {
  return {...base,...config}
}
export default {
  "development":mergeConfigWithBase({
    //  config in development environment
    name: "home from development"
  }),
  "test":mergeConfigWithBase({
    // config in test environment
  }),
  "production":mergeConfigWithBase({
    // config in production enviroment
  })
}[process.env.NODE_ENV as NodeEnv || "production"]