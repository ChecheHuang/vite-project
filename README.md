1. 使用vit創建react
   1. npm init vite
2. 安裝redux
   1. npm i react-redux react-router-dom redux
3. 使用css初始化
   1. npm i reset-css
   2. 在 src/main.tsx 引入
   3. import 'reset-css'
4. 使用scss
   1. npm i --save-dev sass
   2. src 下新建 assets/styles/global.scss
   ```css
   $color: lightgray;
   body {
     user-select: none;
     background-color: $color;
   }
   img {
     -webkit-user-drag: none;
   }
   ```
5. scss模組化引入
   1. 更改scss檔名為module.scss並引入模組
   ```
   import styles from "./comp1.module.scss"
   ```
   2. className是styles下的屬性
   ```
   <div className={styles.box}>
      <div>Comp1</div>
   </div>
   ```
6. 路徑別名配置

   1. vite.config.ts 增加

   ```typescript
   import path from "path"
   export default defineConfig({
     plugins: [react()],
     resolve:{
        alias:{
            "@":path.resolve(__dirname,'./src')
        }
     }
   });
   ```
   2. npm i -D @types/node
   3. tsconfig.json下的compilerOptions 增加
   ```typescript
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
   ```
7. 使用Ant Design
   1. npm install antd --save
   2. npm install --save @ait-design/icons
   3. 配置按需加載
      1. ```
         npm install vite-plugin-style-import@1.4.1 -D
         ```
      2. vite.config.ts配置
      ```
      import styleImport, { AntdResolve } from "vite-plugin-style-import";
        plugins: [
            react(),
            styleImport({
               resolves: [AntdResolve()],
            }),
         ],
      ```
      3.安裝less
      ```
      npm i less@2.7.1 -D
      ```
8. router
   1. 傳統寫法
   參考router/index copy.tsx並直接在main.tsx引用
   2. 組件形寫法
   參考router/index.tsx並在main.tsx用BrowserRouter包起來，App使用useRoutes包起來放在組件內
   3. 路由懶加載與嵌套路由
   ```typescript = 
   //router/index.tsx
   import React, { lazy } from "react";
   import Home from "../views/Home";
   import { Navigate } from "react-router-dom";
   const Page1 = lazy(() => import("../views/Page1"));
   const Page2 = lazy(() => import("../views/Page2"));

   const withLoadingComponent = (comp: JSX.Element) => (
   <React.Suspense fallback={<div>Loading</div>}>{comp}</React.Suspense>
   );

   const routes = [
   { path: "/", element: <Navigate to="/page1" /> },
   {
      path: "/",
      element: <Home />,
      children: [
         {
         path: "/page1",
         element: withLoadingComponent(<Page1 />),
         },
         {
         path: "/page2",
         element: withLoadingComponent(<Page2 />),
         },
      ],
   },
   ];
   export default routes;

   ```
   ```typescript =
   //views/Home.tsx
   import {Outlet}from "react-router-dom"
   const { Header, Content, Footer, Sider } = Layout;
   const View: React.FC = () => {
   return (
      <Layout>
         <Sider/>
         <Header/>
         <Content>
            //router內的element會在Outlet內
            <Outlet/>
         </Content>
         <Footer/>
      </Layout>
   };
   export default View;
   ```



