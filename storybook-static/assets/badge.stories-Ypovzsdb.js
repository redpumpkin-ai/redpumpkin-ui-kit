import{j as u,S as l,f as p,h as v}from"./iframe-B8NNBB4w.js";import"./preload-helper-PPVm8Dsz.js";const g=v("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function s({className:o,variant:n,asChild:i=!1,...d}){const c=i?l:"span";return u.jsx(c,{"data-slot":"badge",className:p(g({variant:n}),o),...d})}s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={title:"UI/Badge",component:s,tags:["autodocs"],args:{children:"Badge",variant:"default"},parameters:{controls:{exclude:["className","style","ref","asChild"]}},argTypes:{variant:{control:{type:"radio"},options:["default","secondary","destructive","outline"]}}},e={},r={args:{variant:"secondary"}},a={args:{variant:"destructive"}},t={args:{variant:"outline"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...t.parameters?.docs?.source}}};const y=["Default","Secondary","Destructive","Outline"];export{e as Default,a as Destructive,t as Outline,r as Secondary,y as __namedExportsOrder,b as default};
