import{j as r,f as s,S as b}from"./iframe-CQhSUPJI.js";import{C as p}from"./chevron-right-DKI75KHD.js";import"./preload-helper-PPVm8Dsz.js";function m({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function i({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:s("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...a})}function t({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:s("inline-flex items-center gap-1.5",e),...a})}function d({asChild:e,className:a,...c}){const l=e?b:"a";return r.jsx(l,{"data-slot":"breadcrumb-link",className:s("hover:text-foreground transition-colors",a),...c})}function u({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:s("text-foreground font-normal",e),...a})}function o({children:e,className:a,...c}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:s("[&>svg]:size-3.5",a),...c,children:e??r.jsx(p,{})})}m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const h={title:"UI/Breadcrumb",component:m,subcomponents:{BreadcrumbList:i,BreadcrumbItem:t,BreadcrumbLink:d,BreadcrumbSeparator:o,BreadcrumbPage:u},tags:["autodocs"],parameters:{controls:{exclude:["className","style","ref","asChild"]}}},n={render:()=>r.jsx(m,{children:r.jsxs(i,{children:[r.jsx(t,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(o,{}),r.jsx(t,{children:r.jsx(d,{href:"#",children:"Library"})}),r.jsx(o,{}),r.jsx(t,{children:r.jsx(u,{children:"Data"})})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Library</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Data</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>\r
    </Breadcrumb>
}`,...n.parameters?.docs?.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,h as default};
