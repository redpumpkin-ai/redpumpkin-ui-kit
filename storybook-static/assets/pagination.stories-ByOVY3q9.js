import{F as m,j as n,f as o,g as u}from"./iframe-D5WLnXsO.js";import{C as x}from"./chevron-right-Clyit-rs.js";import"./preload-helper-PPVm8Dsz.js";const h=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],P=m("chevron-left",h);const j=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],N=m("ellipsis",j);function r({className:i,...a}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",i),...a})}function c({className:i,...a}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",i),...a})}function e({...i}){return n.jsx("li",{"data-slot":"pagination-item",...i})}function t({className:i,isActive:a,size:p="icon",...f}){return n.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,className:o(u({variant:a?"outline":"ghost",size:p}),i),...f})}function l({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5",i),...a,children:[n.jsx(P,{}),n.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function d({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5",i),...a,children:[n.jsx("span",{className:"hidden sm:block",children:"Next"}),n.jsx(x,{})]})}function g({className:i,...a}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",i),...a,children:[n.jsx(N,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Pagination"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const k={title:"UI/Pagination",component:r,subcomponents:{PaginationContent:c,PaginationItem:e,PaginationLink:t,PaginationPrevious:l,PaginationNext:d,PaginationEllipsis:g},tags:["autodocs"],parameters:{controls:{exclude:["className","style","ref","asChild"]}}},s={render:()=>n.jsx(r,{children:n.jsxs(c,{children:[n.jsx(e,{children:n.jsx(l,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:n.jsx(g,{})}),n.jsx(e,{children:n.jsx(d,{href:"#"})})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            2\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...s.parameters?.docs?.source}}};const v=["Default"];export{s as Default,v as __namedExportsOrder,k as default};
