import{j as e,T as v,a as b,f as r,D as N,C as T,e as C,X as B,R as _,P as w,O as k,B as a}from"./iframe-CQhSUPJI.js";import{u as F}from"./index-c24u8hu6.js";import"./preload-helper-PPVm8Dsz.js";function n({...o}){return e.jsx(_,{"data-slot":"dialog",...o})}function g({...o}){return e.jsx(v,{"data-slot":"dialog-trigger",...o})}function j({...o}){return e.jsx(w,{"data-slot":"dialog-portal",...o})}function u({...o}){return e.jsx(C,{"data-slot":"dialog-close",...o})}function y({className:o,...t}){return e.jsx(k,{"data-slot":"dialog-overlay",className:r("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",o),...t})}function s({className:o,children:t,showCloseButton:p=!0,...f}){return e.jsxs(j,{"data-slot":"dialog-portal",children:[e.jsx(y,{}),e.jsxs(T,{"data-slot":"dialog-content",className:r("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",o),...f,children:[t,p&&e.jsxs(C,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[e.jsx(B,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function i({className:o,...t}){return e.jsx("div",{"data-slot":"dialog-header",className:r("flex flex-col gap-2 text-center sm:text-left",o),...t})}function l({className:o,...t}){return e.jsx("div",{"data-slot":"dialog-footer",className:r("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",o),...t})}function d({className:o,...t}){return e.jsx(b,{"data-slot":"dialog-title",className:r("text-lg leading-none font-semibold",o),...t})}function c({className:o,...t}){return e.jsx(N,{"data-slot":"dialog-description",className:r("text-muted-foreground text-sm",o),...t})}n.__docgenInfo={description:"",methods:[],displayName:"Dialog"};u.__docgenInfo={description:"",methods:[],displayName:"DialogClose"};s.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};l.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};i.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};y.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};j.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};d.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};g.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};const H={title:"UI/Dialog",component:n,subcomponents:{DialogClose:u,DialogContent:s,DialogDescription:c,DialogFooter:l,DialogHeader:i,DialogTitle:d,DialogTrigger:g},tags:["autodocs"],args:{open:!1},argTypes:{onOpenChange:{action:"onOpenChange"}},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},m={render:o=>e.jsxs(n,{...o,children:[e.jsx(g,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(i,{children:[e.jsx(d,{children:"Are you absolutely sure?"}),e.jsx(c,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(l,{children:[e.jsx(u,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Cancel"})}),e.jsx(a,{variant:"destructive",children:"Delete Account"})]})]})]}),play:async({canvasElement:o})=>{const p=Array.from(o.querySelectorAll("button")).find(f=>/open dialog/i.test(f.textContent||""));p&&await F.click(p)}},h={args:{open:!0},render:o=>e.jsx(n,{...o,children:e.jsxs(s,{children:[e.jsxs(i,{children:[e.jsx(d,{children:"Controlled Dialog"}),e.jsx(c,{children:"This dialog is controlled with the open prop set to true by default."})]}),e.jsx(l,{children:e.jsx(u,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Close"})})})]})})},D={render:o=>e.jsxs(n,{...o,children:[e.jsx(g,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Custom Dialog"})}),e.jsxs(s,{className:"sm:max-w-[425px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Edit profile"}),e.jsx(c,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",className:"text-right text-sm",children:"Name"}),e.jsx("input",{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3 border rounded px-3 py-2 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"username",className:"text-right text-sm",children:"Username"}),e.jsx("input",{id:"username",defaultValue:"@peduarte",className:"col-span-3 border rounded px-3 py-2 text-sm"})]})]}),e.jsx(l,{children:e.jsx(a,{type:"submit",children:"Save changes"})})]})]})},x={render:o=>e.jsxs(n,{...o,children:[e.jsx(g,{asChild:!0,children:e.jsx(a,{children:"Open Dialog Without Close Button"})}),e.jsxs(s,{showCloseButton:!1,children:[e.jsxs(i,{children:[e.jsx(d,{children:"Dialog without close button"}),e.jsx(c,{children:"This dialog doesn't have a close button. You can close it by clicking outside or pressing the Escape key."})]}),e.jsx(l,{children:e.jsx(u,{asChild:!0,children:e.jsx(a,{children:"Close"})})})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>\r
      <DialogTrigger asChild>\r
        <Button>Open Dialog</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Are you absolutely sure?</DialogTitle>\r
          <DialogDescription>\r
            This action cannot be undone. This will permanently delete your\r
            account and remove your data from our servers.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button variant="outline">Cancel</Button>\r
          </DialogClose>\r
          <Button variant="destructive">Delete Account</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>,
  play: async ({
    canvasElement
  }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find(b => /open dialog/i.test(b.textContent || ""));
    if (trigger) await userEvent.click(trigger);
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <Dialog {...args}>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Controlled Dialog</DialogTitle>\r
          <DialogDescription>\r
            This dialog is controlled with the open prop set to true by default.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button variant="outline">Close</Button>\r
          </DialogClose>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>\r
      <DialogTrigger asChild>\r
        <Button variant="outline">Open Custom Dialog</Button>\r
      </DialogTrigger>\r
      <DialogContent className="sm:max-w-[425px]">\r
        <DialogHeader>\r
          <DialogTitle>Edit profile</DialogTitle>\r
          <DialogDescription>\r
            Make changes to your profile here. Click save when you're done.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <div className="grid gap-4 py-4">\r
          <div className="grid grid-cols-4 items-center gap-4">\r
            <label htmlFor="name" className="text-right text-sm">\r
              Name\r
            </label>\r
            <input id="name" defaultValue="Pedro Duarte" className="col-span-3 border rounded px-3 py-2 text-sm" />\r
          </div>\r
          <div className="grid grid-cols-4 items-center gap-4">\r
            <label htmlFor="username" className="text-right text-sm">\r
              Username\r
            </label>\r
            <input id="username" defaultValue="@peduarte" className="col-span-3 border rounded px-3 py-2 text-sm" />\r
          </div>\r
        </div>\r
        <DialogFooter>\r
          <Button type="submit">Save changes</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>\r
      <DialogTrigger asChild>\r
        <Button>Open Dialog Without Close Button</Button>\r
      </DialogTrigger>\r
      <DialogContent showCloseButton={false}>\r
        <DialogHeader>\r
          <DialogTitle>Dialog without close button</DialogTitle>\r
          <DialogDescription>\r
            This dialog doesn't have a close button. You can close it by clicking\r
            outside or pressing the Escape key.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button>Close</Button>\r
          </DialogClose>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...x.parameters?.docs?.source}}};const A=["Default","Controlled","WithCustomContent","WithoutCloseButton"];export{h as Controlled,m as Default,D as WithCustomContent,x as WithoutCloseButton,A as __namedExportsOrder,H as default};
