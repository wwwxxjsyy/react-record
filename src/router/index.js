/**
 * 根据数组生成路由数组，主要是根据routeArys中组件的路径动态的导入组件
 * @param {后端返回的路由数组} routeArys
 */
 import { LoadableUtils } from "../utils/LoadableUtils";

 const createRoutesByRequire = (routeArys) => {
   return routeArys.map((routeObj) => {
     if (routeObj.children) {
       return {
         ...routeObj,
         component: LoadableUtils(() =>
           import(`../pages/${routeObj.component}`)
         ),
         children: createRoutesByRequire(routeObj.children),
       };
     } else {
       return {
         ...routeObj,
         component: LoadableUtils(() =>
           import(`../pages/${routeObj.component}`)
         ),
       };
     }
   });
 };
 
 /**
  * 导出路由数组
  */
 export const mainRoutes = createRoutesByRequire([
   {
     path: "/",
     component: "AntdDemo",
   },
   {
     path: "*",
     component: "404",
   },
 ]);