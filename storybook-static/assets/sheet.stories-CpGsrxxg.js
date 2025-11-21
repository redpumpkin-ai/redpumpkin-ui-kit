import{Q as a,U as s,Y as n,Z as o,_ as h,$ as i,j as e,B as r}from"./iframe-D5WLnXsO.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"UI/Sheet",component:i,subcomponents:{SheetClose,SheetContent:h,SheetDescription:o,SheetFooter,SheetHeader:n,SheetTitle:s,SheetTrigger:a},tags:["autodocs"],args:{open:!1},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},l={render:t=>e.jsxs(i,{...t,children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Sheet"})}),e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx(s,{children:"Edit profile"}),e.jsx(o,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",className:"text-right text-sm",children:"Name"}),e.jsx("input",{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3 border rounded px-3 py-2 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"username",className:"text-right text-sm",children:"Username"}),e.jsx("input",{id:"username",defaultValue:"@peduarte",className:"col-span-3 border rounded px-3 py-2 text-sm"})]})]}),e.jsx(SheetFooter,{children:e.jsx(SheetClose,{asChild:!0,children:e.jsx(r,{type:"submit",children:"Save changes"})})})]})]})},d={args:{open:!0},render:t=>e.jsx(i,{...t,children:e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx(s,{children:"Controlled Sheet"}),e.jsx(o,{children:"This sheet is controlled with the open prop set to true by default."})]}),e.jsx(SheetFooter,{children:e.jsx(SheetClose,{asChild:!0,children:e.jsx(r,{children:"Close"})})})]})})},c={render:t=>e.jsxs(i,{...t,children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Top Sheet"})}),e.jsxs(h,{side:"top",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Top Sheet"}),e.jsx(o,{children:"This sheet opens from the top of the screen."})]}),e.jsx(SheetFooter,{children:e.jsx(SheetClose,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Close"})})})]})]})},S={render:t=>e.jsxs(i,{...t,children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Left Sheet"})}),e.jsxs(h,{side:"left",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Left Sheet"}),e.jsx(o,{children:"This sheet opens from the left side of the screen."})]}),e.jsx(SheetFooter,{children:e.jsx(SheetClose,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Close"})})})]})]})},p={render:t=>e.jsxs(i,{...t,children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Bottom Sheet"})}),e.jsxs(h,{side:"bottom",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Bottom Sheet"}),e.jsx(o,{children:"This sheet opens from the bottom of the screen."})]}),e.jsx(SheetFooter,{children:e.jsx(SheetClose,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Close"})})})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Sheet {...args}>\r
      <SheetTrigger asChild>\r
        <Button>Open Sheet</Button>\r
      </SheetTrigger>\r
      <SheetContent>\r
        <SheetHeader>\r
          <SheetTitle>Edit profile</SheetTitle>\r
          <SheetDescription>\r
            Make changes to your profile here. Click save when you're done.\r
          </SheetDescription>\r
        </SheetHeader>\r
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
        <SheetFooter>\r
          <SheetClose asChild>\r
            <Button type="submit">Save changes</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <Sheet {...args}>\r
      <SheetContent>\r
        <SheetHeader>\r
          <SheetTitle>Controlled Sheet</SheetTitle>\r
          <SheetDescription>\r
            This sheet is controlled with the open prop set to true by default.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <SheetFooter>\r
          <SheetClose asChild>\r
            <Button>Close</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Sheet {...args}>\r
      <SheetTrigger asChild>\r
        <Button>Open Top Sheet</Button>\r
      </SheetTrigger>\r
      <SheetContent side="top">\r
        <SheetHeader>\r
          <SheetTitle>Top Sheet</SheetTitle>\r
          <SheetDescription>\r
            This sheet opens from the top of the screen.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <SheetFooter>\r
          <SheetClose asChild>\r
            <Button variant="outline">Close</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...c.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Sheet {...args}>\r
      <SheetTrigger asChild>\r
        <Button>Open Left Sheet</Button>\r
      </SheetTrigger>\r
      <SheetContent side="left">\r
        <SheetHeader>\r
          <SheetTitle>Left Sheet</SheetTitle>\r
          <SheetDescription>\r
            This sheet opens from the left side of the screen.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <SheetFooter>\r
          <SheetClose asChild>\r
            <Button variant="outline">Close</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...S.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Sheet {...args}>\r
      <SheetTrigger asChild>\r
        <Button>Open Bottom Sheet</Button>\r
      </SheetTrigger>\r
      <SheetContent side="bottom">\r
        <SheetHeader>\r
          <SheetTitle>Bottom Sheet</SheetTitle>\r
          <SheetDescription>\r
            This sheet opens from the bottom of the screen.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <SheetFooter>\r
          <SheetClose asChild>\r
            <Button variant="outline">Close</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...p.parameters?.docs?.source}}};const g=["Default","Controlled","Top","Left","Bottom"];export{p as Bottom,d as Controlled,l as Default,S as Left,c as Top,g as __namedExportsOrder,x as default};
