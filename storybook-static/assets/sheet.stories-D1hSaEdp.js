import{Z as d,_ as s,$ as n,a0 as o,a1 as a,a2 as h,a3 as i,a4 as l,j as e,B as r}from"./iframe-B8NNBB4w.js";import{u as C}from"./index-CJfF1QgA.js";import"./preload-helper-PPVm8Dsz.js";const B={title:"UI/Sheet",component:l,subcomponents:{SheetClose:i,SheetContent:h,SheetDescription:a,SheetFooter:o,SheetHeader:n,SheetTitle:s,SheetTrigger:d},tags:["autodocs"],args:{open:!1},argTypes:{onOpenChange:{action:"onOpenChange"}},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},c={render:t=>e.jsxs(l,{...t,children:[e.jsx(d,{asChild:!0,children:e.jsx(r,{children:"Open Sheet"})}),e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx(s,{children:"Edit profile"}),e.jsx(a,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",className:"text-right text-sm",children:"Name"}),e.jsx("input",{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3 border rounded px-3 py-2 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"username",className:"text-right text-sm",children:"Username"}),e.jsx("input",{id:"username",defaultValue:"@peduarte",className:"col-span-3 border rounded px-3 py-2 text-sm"})]})]}),e.jsx(o,{children:e.jsx(i,{asChild:!0,children:e.jsx(r,{type:"submit",children:"Save changes"})})})]})]}),play:async({canvasElement:t})=>{const x=Array.from(t.querySelectorAll("button")).find(g=>/open sheet/i.test(g.textContent||""));x&&await C.click(x)}},p={args:{open:!0},render:t=>e.jsx(l,{...t,children:e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx(s,{children:"Controlled Sheet"}),e.jsx(a,{children:"This sheet is controlled with the open prop set to true by default."})]}),e.jsx(o,{children:e.jsx(i,{asChild:!0,children:e.jsx(r,{children:"Close"})})})]})})},S={render:t=>e.jsxs(l,{...t,children:[e.jsx(d,{asChild:!0,children:e.jsx(r,{children:"Open Top Sheet"})}),e.jsxs(h,{side:"top",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Top Sheet"}),e.jsx(a,{children:"This sheet opens from the top of the screen."})]}),e.jsx(o,{children:e.jsx(i,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Close"})})})]})]})},u={render:t=>e.jsxs(l,{...t,children:[e.jsx(d,{asChild:!0,children:e.jsx(r,{children:"Open Left Sheet"})}),e.jsxs(h,{side:"left",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Left Sheet"}),e.jsx(a,{children:"This sheet opens from the left side of the screen."})]}),e.jsx(o,{children:e.jsx(i,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Close"})})})]})]})},m={render:t=>e.jsxs(l,{...t,children:[e.jsx(d,{asChild:!0,children:e.jsx(r,{children:"Open Bottom Sheet"})}),e.jsxs(h,{side:"bottom",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Bottom Sheet"}),e.jsx(a,{children:"This sheet opens from the bottom of the screen."})]}),e.jsx(o,{children:e.jsx(i,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Close"})})})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    </Sheet>,
  play: async ({
    canvasElement
  }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find(b => /open sheet/i.test(b.textContent || ""));
    if (trigger) await userEvent.click(trigger);
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const y=["Default","Controlled","Top","Left","Bottom"];export{m as Bottom,p as Controlled,c as Default,u as Left,S as Top,y as __namedExportsOrder,B as default};
