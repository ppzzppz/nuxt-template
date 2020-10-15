import { Plugin } from "@nuxt/types";
import project from "@/project"

function getOrGenUUID():string{
  // TODO
  return "";
}

const plugin : Plugin = ({app},inject) => {
  if(process.client == false) return; // 中在client端上报数据
  console.log("start plugin ga");


  /*
  ** Include Google Analytics Script
  */
 /*
 let script = document.createElement("script");
 script.src= `https://www.googletagmanager.com/gtag/js?id=${project.googleGaId}`;
 script.async = true;
 document.head.appendChild(script);
 window.dataLayer = window.dataLayer || [];
 window.gta = function(){
  if(project.doga){
    window.dataLayer.push(arguments);
  }
 }
 gta("js",new Date());
 gta("config",project.googleGaId);
 */
}

export default plugin;
