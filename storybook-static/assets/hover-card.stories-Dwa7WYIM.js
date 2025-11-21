import{r as o,b as G,p as B,j as e,A as J,l as K,d as l,k as I,q as Q,m as X,s as Y,u as Z,t as ee,v as re,w as te,f as ne,B as p}from"./iframe-CQhSUPJI.js";import{u as ae}from"./index-c24u8hu6.js";import{A as O,b as D,a as k}from"./avatar-Wvt6mVYb.js";import"./preload-helper-PPVm8Dsz.js";var _,S="HoverCard",[M]=G(S,[B]),E=B(),[se,R]=M(S),L=r=>{const{__scopeHoverCard:a,children:n,open:s,defaultOpen:c,onOpenChange:i,openDelay:v=700,closeDelay:h=300}=r,d=E(a),C=o.useRef(0),u=o.useRef(0),j=o.useRef(!1),m=o.useRef(!1),[N,t]=X({prop:s,defaultProp:c??!1,onChange:i,caller:S}),b=o.useCallback(()=>{clearTimeout(u.current),C.current=window.setTimeout(()=>t(!0),v)},[v,t]),$=o.useCallback(()=>{clearTimeout(C.current),!j.current&&!m.current&&(u.current=window.setTimeout(()=>t(!1),h))},[h,t]),W=o.useCallback(()=>t(!1),[t]);return o.useEffect(()=>()=>{clearTimeout(C.current),clearTimeout(u.current)},[]),e.jsx(se,{scope:a,open:N,onOpenChange:t,onOpen:b,onClose:$,onDismiss:W,hasSelectionRef:j,isPointerDownOnContentRef:m,children:e.jsx(Y,{...d,children:n})})};L.displayName=S;var z="HoverCardTrigger",U=o.forwardRef((r,a)=>{const{__scopeHoverCard:n,...s}=r,c=R(z,n),i=E(n);return e.jsx(J,{asChild:!0,...i,children:e.jsx(K.a,{"data-state":c.open?"open":"closed",...s,ref:a,onPointerEnter:l(r.onPointerEnter,T(c.onOpen)),onPointerLeave:l(r.onPointerLeave,T(c.onClose)),onFocus:l(r.onFocus,c.onOpen),onBlur:l(r.onBlur,c.onClose),onTouchStart:l(r.onTouchStart,v=>v.preventDefault())})})});U.displayName=z;var F="HoverCardPortal",[oe,ce]=M(F,{forceMount:void 0}),q=r=>{const{__scopeHoverCard:a,forceMount:n,children:s,container:c}=r,i=R(F,a);return e.jsx(oe,{scope:a,forceMount:n,children:e.jsx(I,{present:n||i.open,children:e.jsx(Q,{asChild:!0,container:c,children:s})})})};q.displayName=F;var A="HoverCardContent",V=o.forwardRef((r,a)=>{const n=ce(A,r.__scopeHoverCard),{forceMount:s=n.forceMount,...c}=r,i=R(A,r.__scopeHoverCard);return e.jsx(I,{present:s||i.open,children:e.jsx(ie,{"data-state":i.open?"open":"closed",...c,onPointerEnter:l(r.onPointerEnter,T(i.onOpen)),onPointerLeave:l(r.onPointerLeave,T(i.onClose)),ref:a})})});V.displayName=A;var ie=o.forwardRef((r,a)=>{const{__scopeHoverCard:n,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:i,onInteractOutside:v,...h}=r,d=R(A,n),C=E(n),u=o.useRef(null),j=Z(a,u),[m,N]=o.useState(!1);return o.useEffect(()=>{if(m){const t=document.body;return _=t.style.userSelect||t.style.webkitUserSelect,t.style.userSelect="none",t.style.webkitUserSelect="none",()=>{t.style.userSelect=_,t.style.webkitUserSelect=_}}},[m]),o.useEffect(()=>{if(u.current){const t=()=>{N(!1),d.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==""&&(d.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",t),()=>{document.removeEventListener("pointerup",t),d.hasSelectionRef.current=!1,d.isPointerDownOnContentRef.current=!1}}},[d.isPointerDownOnContentRef,d.hasSelectionRef]),o.useEffect(()=>{u.current&&ue(u.current).forEach(b=>b.setAttribute("tabindex","-1"))}),e.jsx(ee,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:v,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l(i,t=>{t.preventDefault()}),onDismiss:d.onDismiss,children:e.jsx(re,{...C,...h,onPointerDown:l(h.onPointerDown,t=>{t.currentTarget.contains(t.target)&&N(!0),d.hasSelectionRef.current=!1,d.isPointerDownOnContentRef.current=!0}),ref:j,style:{...h.style,userSelect:m?"text":void 0,WebkitUserSelect:m?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),de="HoverCardArrow",le=o.forwardRef((r,a)=>{const{__scopeHoverCard:n,...s}=r,c=E(n);return e.jsx(te,{...c,...s,ref:a})});le.displayName=de;function T(r){return a=>a.pointerType==="touch"?void 0:r()}function ue(r){const a=[],n=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)a.push(n.currentNode);return a}var me=L,pe=U,ve=q,he=V;function f({...r}){return e.jsx(me,{"data-slot":"hover-card",...r})}function x({...r}){return e.jsx(pe,{"data-slot":"hover-card-trigger",...r})}function g({className:r,align:a="center",sideOffset:n=4,...s}){return e.jsx(ve,{"data-slot":"hover-card-portal",children:e.jsx(he,{"data-slot":"hover-card-content",align:a,sideOffset:n,className:ne("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",r),...s})})}f.__docgenInfo={description:"",methods:[],displayName:"HoverCard"};x.__docgenInfo={description:"",methods:[],displayName:"HoverCardTrigger"};g.__docgenInfo={description:"",methods:[],displayName:"HoverCardContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const je={title:"UI/HoverCard",component:f,subcomponents:{HoverCardContent:g,HoverCardTrigger:x},tags:["autodocs"],args:{open:!1},argTypes:{onOpenChange:{action:"onOpenChange"}},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},w={render:r=>e.jsxs(f,{...r,children:[e.jsx(x,{asChild:!0,children:e.jsx(p,{variant:"link",children:"@nextjs"})}),e.jsx(g,{className:"w-80",children:e.jsxs("div",{className:"flex justify-between space-x-4",children:[e.jsxs(O,{children:[e.jsx(D,{src:"https://github.com/vercel.png"}),e.jsx(k,{children:"VC"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@nextjs"}),e.jsx("p",{className:"text-sm",children:"The React Framework for the Web"}),e.jsx("div",{className:"flex items-center pt-2",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"Joined December 2021"})})]})]})})]}),play:async({canvasElement:r})=>{const n=Array.from(r.querySelectorAll("button")).find(s=>/@nextjs/i.test(s.textContent||""));n&&await ae.hover(n)}},H={args:{open:!0},render:r=>e.jsxs(f,{...r,children:[e.jsx(x,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"Anchor"})}),e.jsx(g,{children:e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"This hover card is controlled with the open prop set to true by default."})})})]})},y={render:r=>e.jsxs(f,{...r,children:[e.jsx(x,{asChild:!0,children:e.jsx(p,{variant:"ghost",className:"p-0 h-auto",children:e.jsxs(O,{children:[e.jsx(D,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(k,{children:"CN"})]})})}),e.jsx(g,{className:"w-80",children:e.jsxs("div",{className:"flex justify-between space-x-4",children:[e.jsxs(O,{children:[e.jsx(D,{src:"https://github.com/shadcn.png"}),e.jsx(k,{children:"CN"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"shadcn"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Software Engineer"}),e.jsx("div",{className:"flex items-center pt-2",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"1.2k followers • 42 following"})}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsx(p,{size:"sm",className:"h-7",children:"Follow"}),e.jsx(p,{size:"sm",variant:"outline",className:"h-7",children:"Message"})]})]})]})})]})},P={render:r=>e.jsxs(f,{...r,children:[e.jsx(x,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"View Product Details"})}),e.jsx(g,{className:"w-80",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"aspect-video bg-muted rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground text-sm",children:"Product Image"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Premium Headphones"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"High-quality wireless headphones with noise cancellation"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-lg font-bold",children:"$299"}),e.jsx(p,{size:"sm",children:"Add to Cart"})]})]})})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard {...args}>\r
      <HoverCardTrigger asChild>\r
        <Button variant="link">@nextjs</Button>\r
      </HoverCardTrigger>\r
      <HoverCardContent className="w-80">\r
        <div className="flex justify-between space-x-4">\r
          <Avatar>\r
            <AvatarImage src="https://github.com/vercel.png" />\r
            <AvatarFallback>VC</AvatarFallback>\r
          </Avatar>\r
          <div className="space-y-1">\r
            <h4 className="text-sm font-semibold">@nextjs</h4>\r
            <p className="text-sm">The React Framework for the Web</p>\r
            <div className="flex items-center pt-2">\r
              <span className="text-xs text-muted-foreground">\r
                Joined December 2021\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </HoverCardContent>\r
    </HoverCard>,
  play: async ({
    canvasElement
  }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find(b => /@nextjs/i.test(b.textContent || ""));
    if (trigger) await userEvent.hover(trigger);
  }
}`,...w.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <HoverCard {...args}>\r
      <HoverCardTrigger asChild>\r
        <Button variant="outline">Anchor</Button>\r
      </HoverCardTrigger>\r
      <HoverCardContent>\r
        <div className="p-4">\r
          <p>\r
            This hover card is controlled with the open prop set to true by\r
            default.\r
          </p>\r
        </div>\r
      </HoverCardContent>\r
    </HoverCard>
}`,...H.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard {...args}>\r
      <HoverCardTrigger asChild>\r
        <Button variant="ghost" className="p-0 h-auto">\r
          <Avatar>\r
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\r
            <AvatarFallback>CN</AvatarFallback>\r
          </Avatar>\r
        </Button>\r
      </HoverCardTrigger>\r
      <HoverCardContent className="w-80">\r
        <div className="flex justify-between space-x-4">\r
          <Avatar>\r
            <AvatarImage src="https://github.com/shadcn.png" />\r
            <AvatarFallback>CN</AvatarFallback>\r
          </Avatar>\r
          <div className="space-y-1">\r
            <h4 className="text-sm font-semibold">shadcn</h4>\r
            <p className="text-sm text-muted-foreground">Software Engineer</p>\r
            <div className="flex items-center pt-2">\r
              <span className="text-xs text-muted-foreground">\r
                1.2k followers • 42 following\r
              </span>\r
            </div>\r
            <div className="flex gap-2 pt-2">\r
              <Button size="sm" className="h-7">\r
                Follow\r
              </Button>\r
              <Button size="sm" variant="outline" className="h-7">\r
                Message\r
              </Button>\r
            </div>\r
          </div>\r
        </div>\r
      </HoverCardContent>\r
    </HoverCard>
}`,...y.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard {...args}>\r
      <HoverCardTrigger asChild>\r
        <Button variant="outline">View Product Details</Button>\r
      </HoverCardTrigger>\r
      <HoverCardContent className="w-80">\r
        <div className="space-y-3">\r
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">\r
            <span className="text-muted-foreground text-sm">Product Image</span>\r
          </div>\r
          <div>\r
            <h4 className="text-sm font-semibold">Premium Headphones</h4>\r
            <p className="text-sm text-muted-foreground">\r
              High-quality wireless headphones with noise cancellation\r
            </p>\r
          </div>\r
          <div className="flex items-center justify-between">\r
            <span className="text-lg font-bold">$299</span>\r
            <Button size="sm">Add to Cart</Button>\r
          </div>\r
        </div>\r
      </HoverCardContent>\r
    </HoverCard>
}`,...P.parameters?.docs?.source}}};const Ne=["Default","Controlled","UserProfile","ProductCard"];export{H as Controlled,w as Default,P as ProductCard,y as UserProfile,Ne as __namedExportsOrder,je as default};
