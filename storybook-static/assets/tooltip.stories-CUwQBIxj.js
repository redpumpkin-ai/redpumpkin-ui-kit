import{a6 as r,a7 as n,a8 as e,j as t,B as i}from"./iframe-B8NNBB4w.js";import{u}from"./index-CJfF1QgA.js";import"./preload-helper-PPVm8Dsz.js";const j={title:"UI/Tooltip",component:e,subcomponents:{TooltipContent:n,TooltipTrigger:r},tags:["autodocs"],args:{open:!1},argTypes:{onOpenChange:{action:"onOpenChange"}},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},s={render:o=>t.jsxs(e,{...o,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Hover me"})}),t.jsx(n,{children:t.jsx("p",{children:"Add to library"})})]}),play:async({canvasElement:o})=>{const c=Array.from(o.querySelectorAll("button")).find(h=>/hover me/i.test(h.textContent||""));c&&await u.hover(c)}},l={args:{open:!0},render:o=>t.jsxs(e,{...o,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Anchor"})}),t.jsx(n,{children:t.jsx("p",{children:"This tooltip is controlled with the open prop set to true by default."})})]})},a={render:()=>t.jsxs("div",{className:"flex gap-4 flex-wrap",children:[t.jsxs(e,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Top"})}),t.jsx(n,{side:"top",children:t.jsx("p",{children:"Tooltip on top"})})]}),t.jsxs(e,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Right"})}),t.jsx(n,{side:"right",children:t.jsx("p",{children:"Tooltip on right"})})]}),t.jsxs(e,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Bottom"})}),t.jsx(n,{side:"bottom",children:t.jsx("p",{children:"Tooltip on bottom"})})]}),t.jsxs(e,{children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Left"})}),t.jsx(n,{side:"left",children:t.jsx("p",{children:"Tooltip on left"})})]})]})},p={render:o=>t.jsxs(e,{...o,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",size:"icon",children:t.jsx("span",{className:"text-lg",children:"⚡"})})}),t.jsx(n,{children:t.jsx("p",{children:"Lightning fast performance"})})]})},d={render:o=>t.jsxs(e,{...o,children:[t.jsx(r,{asChild:!0,children:t.jsx(i,{variant:"outline",children:"Long tooltip"})}),t.jsx(n,{className:"max-w-xs",children:t.jsx("p",{children:"This is a longer tooltip with more detailed information about the feature or functionality you're hovering over."})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Hover me</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        <p>Add to library</p>\r
      </TooltipContent>\r
    </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find(b => /hover me/i.test(b.textContent || ""));
    if (trigger) await userEvent.hover(trigger);
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <Tooltip {...args}>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Anchor</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        <p>This tooltip is controlled with the open prop set to true by default.</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline">Top</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="top">\r
          <p>Tooltip on top</p>\r
        </TooltipContent>\r
      </Tooltip>\r
      \r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline">Right</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="right">\r
          <p>Tooltip on right</p>\r
        </TooltipContent>\r
      </Tooltip>\r
      \r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline">Bottom</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="bottom">\r
          <p>Tooltip on bottom</p>\r
        </TooltipContent>\r
      </Tooltip>\r
      \r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline">Left</Button>\r
        </TooltipTrigger>\r
        <TooltipContent side="left">\r
          <p>Tooltip on left</p>\r
        </TooltipContent>\r
      </Tooltip>\r
    </div>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline" size="icon">\r
          <span className="text-lg">⚡</span>\r
        </Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        <p>Lightning fast performance</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Long tooltip</Button>\r
      </TooltipTrigger>\r
      <TooltipContent className="max-w-xs">\r
        <p>This is a longer tooltip with more detailed information about the feature or functionality you're hovering over.</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...d.parameters?.docs?.source}}};const C=["Default","Controlled","DifferentPositions","WithIcon","LongContent"];export{l as Controlled,s as Default,a as DifferentPositions,d as LongContent,p as WithIcon,C as __namedExportsOrder,j as default};
