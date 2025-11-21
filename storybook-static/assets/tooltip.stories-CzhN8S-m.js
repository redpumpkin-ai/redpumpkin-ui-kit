import{a1 as e,a2 as r,a3 as t,j as o,B as i}from"./iframe-D5WLnXsO.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"UI/Tooltip",component:t,subcomponents:{TooltipContent:r,TooltipTrigger:e},tags:["autodocs"],args:{open:!1},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},s={render:n=>o.jsxs(t,{...n,children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Hover me"})}),o.jsx(r,{children:o.jsx("p",{children:"Add to library"})})]})},l={args:{open:!0},render:n=>o.jsx(t,{...n,children:o.jsx(r,{children:o.jsx("p",{children:"This tooltip is controlled with the open prop set to true by default."})})})},a={render:()=>o.jsxs("div",{className:"flex gap-4 flex-wrap",children:[o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Top"})}),o.jsx(r,{side:"top",children:o.jsx("p",{children:"Tooltip on top"})})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Right"})}),o.jsx(r,{side:"right",children:o.jsx("p",{children:"Tooltip on right"})})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Bottom"})}),o.jsx(r,{side:"bottom",children:o.jsx("p",{children:"Tooltip on bottom"})})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Left"})}),o.jsx(r,{side:"left",children:o.jsx("p",{children:"Tooltip on left"})})]})]})},p={render:n=>o.jsxs(t,{...n,children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",size:"icon",children:o.jsx("span",{className:"text-lg",children:"⚡"})})}),o.jsx(r,{children:o.jsx("p",{children:"Lightning fast performance"})})]})},d={render:n=>o.jsxs(t,{...n,children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Long tooltip"})}),o.jsx(r,{className:"max-w-xs",children:o.jsx("p",{children:"This is a longer tooltip with more detailed information about the feature or functionality you're hovering over."})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline">Hover me</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        <p>Add to library</p>\r
      </TooltipContent>\r
    </Tooltip>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <Tooltip {...args}>\r
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
}`,...d.parameters?.docs?.source}}};const u=["Default","Controlled","DifferentPositions","WithIcon","LongContent"];export{l as Controlled,s as Default,a as DifferentPositions,d as LongContent,p as WithIcon,u as __namedExportsOrder,T as default};
