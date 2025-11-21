import{r as l,j as e,G as z,b as G,p as A,u as E,l as F,d as v,A as S,k as D,q,m as J,s as K,H as U,J as Z,K as Q,L as X,M as Y,t as ee,v as re,w as oe,f as te,B as O}from"./iframe-D5WLnXsO.js";import"./preload-helper-PPVm8Dsz.js";function ne(r){const t=se(r),n=l.forwardRef((s,o)=>{const{children:a,...i}=s,d=l.Children.toArray(a),c=d.find(le);if(c){const p=c.props.children,f=d.map(m=>m===c?l.Children.count(p)>1?l.Children.only(null):l.isValidElement(p)?p.props.children:null:m);return e.jsx(t,{...i,ref:o,children:l.isValidElement(p)?l.cloneElement(p,void 0,f):null})}return e.jsx(t,{...i,ref:o,children:a})});return n.displayName=`${r}.Slot`,n}function se(r){const t=l.forwardRef((n,s)=>{const{children:o,...a}=n;if(l.isValidElement(o)){const i=de(o),d=ie(a,o.props);return o.type!==l.Fragment&&(d.ref=s?z(s,i):i),l.cloneElement(o,d)}return l.Children.count(o)>1?l.Children.only(null):null});return t.displayName=`${r}.SlotClone`,t}var ae=Symbol("radix.slottable");function le(r){return l.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===ae}function ie(r,t){const n={...t};for(const s in t){const o=r[s],a=t[s];/^on[A-Z]/.test(s)?o&&a?n[s]=(...d)=>{const c=a(...d);return o(...d),c}:o&&(n[s]=o):s==="style"?n[s]={...o,...a}:s==="className"&&(n[s]=[o,a].filter(Boolean).join(" "))}return{...r,...n}}function de(r){let t=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?r.ref:(t=Object.getOwnPropertyDescriptor(r,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?r.props.ref:r.props.ref||r.ref)}var w="Popover",[I]=G(w,[A]),x=A(),[ce,u]=I(w),T=r=>{const{__scopePopover:t,children:n,open:s,defaultOpen:o,onOpenChange:a,modal:i=!1}=r,d=x(t),c=l.useRef(null),[p,f]=l.useState(!1),[m,h]=J({prop:s,defaultProp:o??!1,onChange:a,caller:w});return e.jsx(K,{...d,children:e.jsx(ce,{scope:t,contentId:U(),triggerRef:c,open:m,onOpenChange:h,onOpenToggle:l.useCallback(()=>h(R=>!R),[h]),hasCustomAnchor:p,onCustomAnchorAdd:l.useCallback(()=>f(!0),[]),onCustomAnchorRemove:l.useCallback(()=>f(!1),[]),modal:i,children:n})})};T.displayName=w;var M="PopoverAnchor",pe=l.forwardRef((r,t)=>{const{__scopePopover:n,...s}=r,o=u(M,n),a=x(n),{onCustomAnchorAdd:i,onCustomAnchorRemove:d}=o;return l.useEffect(()=>(i(),()=>d()),[i,d]),e.jsx(S,{...a,...s,ref:t})});pe.displayName=M;var V="PopoverTrigger",W=l.forwardRef((r,t)=>{const{__scopePopover:n,...s}=r,o=u(V,n),a=x(n),i=E(t,o.triggerRef),d=e.jsx(F.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":$(o.open),...s,ref:i,onClick:v(r.onClick,o.onOpenToggle)});return o.hasCustomAnchor?d:e.jsx(S,{asChild:!0,...a,children:d})});W.displayName=V;var _="PopoverPortal",[ue,me]=I(_,{forceMount:void 0}),k=r=>{const{__scopePopover:t,forceMount:n,children:s,container:o}=r,a=u(_,t);return e.jsx(ue,{scope:t,forceMount:n,children:e.jsx(D,{present:n||a.open,children:e.jsx(q,{asChild:!0,container:o,children:s})})})};k.displayName=_;var g="PopoverContent",H=l.forwardRef((r,t)=>{const n=me(g,r.__scopePopover),{forceMount:s=n.forceMount,...o}=r,a=u(g,r.__scopePopover);return e.jsx(D,{present:s||a.open,children:a.modal?e.jsx(fe,{...o,ref:t}):e.jsx(ge,{...o,ref:t})})});H.displayName=g;var he=ne("PopoverContent.RemoveScroll"),fe=l.forwardRef((r,t)=>{const n=u(g,r.__scopePopover),s=l.useRef(null),o=E(t,s),a=l.useRef(!1);return l.useEffect(()=>{const i=s.current;if(i)return Z(i)},[]),e.jsx(Q,{as:he,allowPinchZoom:!0,children:e.jsx(B,{...r,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(r.onCloseAutoFocus,i=>{i.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:v(r.onPointerDownOutside,i=>{const d=i.detail.originalEvent,c=d.button===0&&d.ctrlKey===!0,p=d.button===2||c;a.current=p},{checkForDefaultPrevented:!1}),onFocusOutside:v(r.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1})})})}),ge=l.forwardRef((r,t)=>{const n=u(g,r.__scopePopover),s=l.useRef(!1),o=l.useRef(!1);return e.jsx(B,{...r,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{r.onCloseAutoFocus?.(a),a.defaultPrevented||(s.current||n.triggerRef.current?.focus(),a.preventDefault()),s.current=!1,o.current=!1},onInteractOutside:a=>{r.onInteractOutside?.(a),a.defaultPrevented||(s.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=a.target;n.triggerRef.current?.contains(i)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),B=l.forwardRef((r,t)=>{const{__scopePopover:n,trapFocus:s,onOpenAutoFocus:o,onCloseAutoFocus:a,disableOutsidePointerEvents:i,onEscapeKeyDown:d,onPointerDownOutside:c,onFocusOutside:p,onInteractOutside:f,...m}=r,h=u(g,n),R=x(n);return X(),e.jsx(Y,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:o,onUnmountAutoFocus:a,children:e.jsx(ee,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:f,onEscapeKeyDown:d,onPointerDownOutside:c,onFocusOutside:p,onDismiss:()=>h.onOpenChange(!1),children:e.jsx(re,{"data-state":$(h.open),role:"dialog",id:h.contentId,...R,...m,ref:t,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),L="PopoverClose",ve=l.forwardRef((r,t)=>{const{__scopePopover:n,...s}=r,o=u(L,n);return e.jsx(F.button,{type:"button",...s,ref:t,onClick:v(r.onClick,()=>o.onOpenChange(!1))})});ve.displayName=L;var xe="PopoverArrow",Pe=l.forwardRef((r,t)=>{const{__scopePopover:n,...s}=r,o=x(n);return e.jsx(oe,{...o,...s,ref:t})});Pe.displayName=xe;function $(r){return r?"open":"closed"}var Ne=T,je=W,Ce=k,be=H;function P({...r}){return e.jsx(Ne,{"data-slot":"popover",...r})}function y({...r}){return e.jsx(je,{"data-slot":"popover-trigger",...r})}function N({className:r,align:t="center",sideOffset:n=4,...s}){return e.jsx(Ce,{children:e.jsx(be,{"data-slot":"popover-content",align:t,sideOffset:n,className:te("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",r),...s})})}P.__docgenInfo={description:"",methods:[],displayName:"Popover"};y.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};N.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Re={title:"UI/Popover",component:P,subcomponents:{PopoverContent:N,PopoverTrigger:y},tags:["autodocs"],args:{open:!1},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},j={render:r=>e.jsxs(P,{...r,children:[e.jsx(y,{asChild:!0,children:e.jsx(O,{variant:"outline",children:"Open popover"})}),e.jsx(N,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"width",children:"Width"}),e.jsx("input",{id:"width",defaultValue:"100%",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"maxWidth",children:"Max. width"}),e.jsx("input",{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx("input",{id:"height",defaultValue:"25px",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"maxHeight",children:"Max. height"}),e.jsx("input",{id:"maxHeight",defaultValue:"none",className:"col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"})]})]})]})})]})},C={args:{open:!0},render:r=>e.jsx(P,{...r,children:e.jsx(N,{children:e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"This popover is controlled with the open prop set to true by default."})})})})},b={render:r=>e.jsxs(P,{...r,children:[e.jsx(y,{asChild:!0,children:e.jsx(O,{variant:"outline",children:"Open form popover"})}),e.jsx(N,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"New team member"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Invite a new member to your team."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",placeholder:"John Doe",className:"col-span-3 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",placeholder:"john@example.com",className:"col-span-3 h-8 w-full border rounded px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"role",children:"Role"}),e.jsxs("select",{className:"col-span-3 h-8 w-full border rounded px-3 py-1 text-sm",children:[e.jsx("option",{children:"Member"}),e.jsx("option",{children:"Admin"}),e.jsx("option",{children:"Owner"})]})]})]}),e.jsx(O,{size:"sm",children:"Send invitation"})]})})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    </Popover>
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Oe=["Default","Controlled","WithForm"];export{C as Controlled,j as Default,b as WithForm,Oe as __namedExportsOrder,Re as default};
