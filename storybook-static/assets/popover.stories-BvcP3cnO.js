import{r as i,j as e,K as z,b as q,t as E,u as _,p as F,d as v,A as S,o as T,v as G,q as K,w as U,L as J,M as Z,N as Q,Q as X,U as Y,x as ee,y as re,z as oe,f as te,B as O}from"./iframe-9hV8x0ha.js";import{u as ne}from"./index-Cqwl1OyJ.js";import"./preload-helper-PPVm8Dsz.js";function se(r){const n=ae(r),o=i.forwardRef((s,t)=>{const{children:a,...l}=s,c=i.Children.toArray(a),d=c.find(le);if(d){const p=d.props.children,f=c.map(m=>m===d?i.Children.count(p)>1?i.Children.only(null):i.isValidElement(p)?p.props.children:null:m);return e.jsx(n,{...l,ref:t,children:i.isValidElement(p)?i.cloneElement(p,void 0,f):null})}return e.jsx(n,{...l,ref:t,children:a})});return o.displayName=`${r}.Slot`,o}function ae(r){const n=i.forwardRef((o,s)=>{const{children:t,...a}=o;if(i.isValidElement(t)){const l=de(t),c=ce(a,t.props);return t.type!==i.Fragment&&(c.ref=s?z(s,l):l),i.cloneElement(t,c)}return i.Children.count(t)>1?i.Children.only(null):null});return n.displayName=`${r}.SlotClone`,n}var ie=Symbol("radix.slottable");function le(r){return i.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===ie}function ce(r,n){const o={...n};for(const s in n){const t=r[s],a=n[s];/^on[A-Z]/.test(s)?t&&a?o[s]=(...c)=>{const d=a(...c);return t(...c),d}:t&&(o[s]=t):s==="style"?o[s]={...t,...a}:s==="className"&&(o[s]=[t,a].filter(Boolean).join(" "))}return{...r,...o}}function de(r){let n=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?r.ref:(n=Object.getOwnPropertyDescriptor(r,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?r.props.ref:r.props.ref||r.ref)}var y="Popover",[D]=q(y,[E]),x=E(),[pe,u]=D(y),I=r=>{const{__scopePopover:n,children:o,open:s,defaultOpen:t,onOpenChange:a,modal:l=!1}=r,c=x(n),d=i.useRef(null),[p,f]=i.useState(!1),[m,h]=K({prop:s,defaultProp:t??!1,onChange:a,caller:y});return e.jsx(U,{...c,children:e.jsx(pe,{scope:n,contentId:J(),triggerRef:d,open:m,onOpenChange:h,onOpenToggle:i.useCallback(()=>h(R=>!R),[h]),hasCustomAnchor:p,onCustomAnchorAdd:i.useCallback(()=>f(!0),[]),onCustomAnchorRemove:i.useCallback(()=>f(!1),[]),modal:l,children:o})})};I.displayName=y;var M="PopoverAnchor",ue=i.forwardRef((r,n)=>{const{__scopePopover:o,...s}=r,t=u(M,o),a=x(o),{onCustomAnchorAdd:l,onCustomAnchorRemove:c}=t;return i.useEffect(()=>(l(),()=>c()),[l,c]),e.jsx(S,{...a,...s,ref:n})});ue.displayName=M;var V="PopoverTrigger",k=i.forwardRef((r,n)=>{const{__scopePopover:o,...s}=r,t=u(V,o),a=x(o),l=_(n,t.triggerRef),c=e.jsx(F.button,{type:"button","aria-haspopup":"dialog","aria-expanded":t.open,"aria-controls":t.contentId,"data-state":$(t.open),...s,ref:l,onClick:v(r.onClick,t.onOpenToggle)});return t.hasCustomAnchor?c:e.jsx(S,{asChild:!0,...a,children:c})});k.displayName=V;var A="PopoverPortal",[me,he]=D(A,{forceMount:void 0}),W=r=>{const{__scopePopover:n,forceMount:o,children:s,container:t}=r,a=u(A,n);return e.jsx(me,{scope:n,forceMount:o,children:e.jsx(T,{present:o||a.open,children:e.jsx(G,{asChild:!0,container:t,children:s})})})};W.displayName=A;var g="PopoverContent",H=i.forwardRef((r,n)=>{const o=he(g,r.__scopePopover),{forceMount:s=o.forceMount,...t}=r,a=u(g,r.__scopePopover);return e.jsx(T,{present:s||a.open,children:a.modal?e.jsx(ge,{...t,ref:n}):e.jsx(ve,{...t,ref:n})})});H.displayName=g;var fe=se("PopoverContent.RemoveScroll"),ge=i.forwardRef((r,n)=>{const o=u(g,r.__scopePopover),s=i.useRef(null),t=_(n,s),a=i.useRef(!1);return i.useEffect(()=>{const l=s.current;if(l)return Z(l)},[]),e.jsx(Q,{as:fe,allowPinchZoom:!0,children:e.jsx(B,{...r,ref:t,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(r.onCloseAutoFocus,l=>{l.preventDefault(),a.current||o.triggerRef.current?.focus()}),onPointerDownOutside:v(r.onPointerDownOutside,l=>{const c=l.detail.originalEvent,d=c.button===0&&c.ctrlKey===!0,p=c.button===2||d;a.current=p},{checkForDefaultPrevented:!1}),onFocusOutside:v(r.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1})})})}),ve=i.forwardRef((r,n)=>{const o=u(g,r.__scopePopover),s=i.useRef(!1),t=i.useRef(!1);return e.jsx(B,{...r,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{r.onCloseAutoFocus?.(a),a.defaultPrevented||(s.current||o.triggerRef.current?.focus(),a.preventDefault()),s.current=!1,t.current=!1},onInteractOutside:a=>{r.onInteractOutside?.(a),a.defaultPrevented||(s.current=!0,a.detail.originalEvent.type==="pointerdown"&&(t.current=!0));const l=a.target;o.triggerRef.current?.contains(l)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&t.current&&a.preventDefault()}})}),B=i.forwardRef((r,n)=>{const{__scopePopover:o,trapFocus:s,onOpenAutoFocus:t,onCloseAutoFocus:a,disableOutsidePointerEvents:l,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:p,onInteractOutside:f,...m}=r,h=u(g,o),R=x(o);return X(),e.jsx(Y,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:t,onUnmountAutoFocus:a,children:e.jsx(ee,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:f,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:p,onDismiss:()=>h.onOpenChange(!1),children:e.jsx(re,{"data-state":$(h.open),role:"dialog",id:h.contentId,...R,...m,ref:n,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),L="PopoverClose",xe=i.forwardRef((r,n)=>{const{__scopePopover:o,...s}=r,t=u(L,o);return e.jsx(F.button,{type:"button",...s,ref:n,onClick:v(r.onClick,()=>t.onOpenChange(!1))})});xe.displayName=L;var Pe="PopoverArrow",Ne=i.forwardRef((r,n)=>{const{__scopePopover:o,...s}=r,t=x(o);return e.jsx(oe,{...t,...s,ref:n})});Ne.displayName=Pe;function $(r){return r?"open":"closed"}var be=I,Ce=k,je=W,ye=H;function P({...r}){return e.jsx(be,{"data-slot":"popover",...r})}function w({...r}){return e.jsx(Ce,{"data-slot":"popover-trigger",...r})}function N({className:r,align:n="center",sideOffset:o=4,...s}){return e.jsx(je,{children:e.jsx(ye,{"data-slot":"popover-content",align:n,sideOffset:o,className:te("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",r),...s})})}P.__docgenInfo={description:"",methods:[],displayName:"Popover"};w.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};N.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Ae={title:"UI/Popover",component:P,subcomponents:{PopoverContent:N,PopoverTrigger:w},tags:["autodocs"],args:{open:!1},argTypes:{onOpenChange:{action:"onOpenChange"}},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},b={render:r=>e.jsxs(P,{...r,children:[e.jsx(w,{asChild:!0,children:e.jsx(O,{variant:"outline",children:"Open popover"})}),e.jsx(N,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"width",children:"Width"}),e.jsx("input",{id:"width",defaultValue:"100%",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"maxWidth",children:"Max. width"}),e.jsx("input",{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx("input",{id:"height",defaultValue:"25px",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"maxHeight",children:"Max. height"}),e.jsx("input",{id:"maxHeight",defaultValue:"none",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]})]})]})})]}),play:async({canvasElement:r})=>{const o=Array.from(r.querySelectorAll("button")).find(s=>/open popover/i.test(s.textContent||""));o&&await ne.click(o)}},C={args:{open:!0},render:r=>e.jsx(P,{...r,children:e.jsx(N,{children:e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"This popover is controlled with the open prop set to true by default."})})})})},j={render:r=>e.jsxs(P,{...r,children:[e.jsx(w,{asChild:!0,children:e.jsx(O,{variant:"outline",children:"Open form popover"})}),e.jsx(N,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"New team member"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Invite a new member to your team."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",placeholder:"John Doe",className:"col-span-3 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",placeholder:"john@example.com",className:"col-span-3 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"role",children:"Role"}),e.jsxs("select",{className:"col-span-3 h-8 w-full border rounded px-3 py-1 text-sm",children:[e.jsx("option",{children:"Member"}),e.jsx("option",{children:"Admin"}),e.jsx("option",{children:"Owner"})]})]})]}),e.jsx(O,{size:"sm",children:"Send invitation"})]})})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Popover {...args}>\r
      <PopoverTrigger asChild>\r
        <Button variant="outline">Open popover</Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-80">\r
        <div className="grid gap-4">\r
          <div className="space-y-2">\r
            <h4 className="font-medium leading-none">Dimensions</h4>\r
            <p className="text-sm text-muted-foreground">\r
              Set the dimensions for the layer.\r
            </p>\r
          </div>\r
          <div className="grid gap-2">\r
            <div className="grid grid-cols-3 items-center gap-4">\r
              <label htmlFor="width">Width</label>\r
              <input id="width" defaultValue="100%" className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm" />\r
            </div>\r
            <div className="grid grid-cols-3 items-center gap-4">\r
              <label htmlFor="maxWidth">Max. width</label>\r
              <input id="maxWidth" defaultValue="300px" className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm" />\r
            </div>\r
            <div className="grid grid-cols-3 items-center gap-4">\r
              <label htmlFor="height">Height</label>\r
              <input id="height" defaultValue="25px" className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm" />\r
            </div>\r
            <div className="grid grid-cols-3 items-center gap-4">\r
              <label htmlFor="maxHeight">Max. height</label>\r
              <input id="maxHeight" defaultValue="none" className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm" />\r
            </div>\r
          </div>\r
        </div>\r
      </PopoverContent>\r
    </Popover>,
  play: async ({
    canvasElement
  }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find(b => /open popover/i.test(b.textContent || ""));
    if (trigger) await userEvent.click(trigger);
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <Popover {...args}>\r
      <PopoverContent>\r
        <div className="p-4">\r
          <p>This popover is controlled with the open prop set to true by default.</p>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Popover {...args}>\r
      <PopoverTrigger asChild>\r
        <Button variant="outline">Open form popover</Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-80">\r
        <div className="grid gap-4">\r
          <div className="space-y-2">\r
            <h4 className="font-medium leading-none">New team member</h4>\r
            <p className="text-sm text-muted-foreground">\r
              Invite a new member to your team.\r
            </p>\r
          </div>\r
          <div className="grid gap-2">\r
            <div className="grid grid-cols-4 items-center gap-4">\r
              <label htmlFor="name">Name</label>\r
              <input id="name" placeholder="John Doe" className="col-span-3 h-8 w-full border rounded px-3 py-1 text-sm" />\r
            </div>\r
            <div className="grid grid-cols-4 items-center gap-4">\r
              <label htmlFor="email">Email</label>\r
              <input id="email" placeholder="john@example.com" className="col-span-3 h-8 w-full border rounded px-3 py-1 text-sm" />\r
            </div>\r
            <div className="grid grid-cols-4 items-center gap-4">\r
              <label htmlFor="role">Role</label>\r
              <select className="col-span-3 h-8 w-full border rounded px-3 py-1 text-sm">\r
                <option>Member</option>\r
                <option>Admin</option>\r
                <option>Owner</option>\r
              </select>\r
            </div>\r
          </div>\r
          <Button size="sm">Send invitation</Button>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...j.parameters?.docs?.source}}};const Ee=["Default","Controlled","WithForm"];export{C as Controlled,b as Default,j as WithForm,Ee as __namedExportsOrder,Ae as default};
