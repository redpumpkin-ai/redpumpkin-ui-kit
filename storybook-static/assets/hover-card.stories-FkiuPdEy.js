import{r as s,b as G,p as B,j as e,A as J,l as K,d as l,k as I,q as Q,m as X,s as Y,u as Z,t as ee,v as re,w as te,f as ne,B as h}from"./iframe-D5WLnXsO.js";import{A as O,b as D,a as k}from"./avatar-Sqdr2V-5.js";import"./preload-helper-PPVm8Dsz.js";var _,R="HoverCard",[M]=G(R,[B]),A=B(),[ae,E]=M(R),L=r=>{const{__scopeHoverCard:n,children:a,open:o,defaultOpen:c,onOpenChange:d,openDelay:p=700,closeDelay:v=300}=r,i=A(n),g=s.useRef(0),u=s.useRef(0),N=s.useRef(!1),m=s.useRef(!1),[j,t]=X({prop:o,defaultProp:c??!1,onChange:d,caller:R}),b=s.useCallback(()=>{clearTimeout(u.current),g.current=window.setTimeout(()=>t(!0),p)},[p,t]),W=s.useCallback(()=>{clearTimeout(g.current),!N.current&&!m.current&&(u.current=window.setTimeout(()=>t(!1),v))},[v,t]),q=s.useCallback(()=>t(!1),[t]);return s.useEffect(()=>()=>{clearTimeout(g.current),clearTimeout(u.current)},[]),e.jsx(ae,{scope:n,open:j,onOpenChange:t,onOpen:b,onClose:W,onDismiss:q,hasSelectionRef:N,isPointerDownOnContentRef:m,children:e.jsx(Y,{...i,children:a})})};L.displayName=R;var z="HoverCardTrigger",U=s.forwardRef((r,n)=>{const{__scopeHoverCard:a,...o}=r,c=E(z,a),d=A(a);return e.jsx(J,{asChild:!0,...d,children:e.jsx(K.a,{"data-state":c.open?"open":"closed",...o,ref:n,onPointerEnter:l(r.onPointerEnter,T(c.onOpen)),onPointerLeave:l(r.onPointerLeave,T(c.onClose)),onFocus:l(r.onFocus,c.onOpen),onBlur:l(r.onBlur,c.onClose),onTouchStart:l(r.onTouchStart,p=>p.preventDefault())})})});U.displayName=z;var F="HoverCardPortal",[se,oe]=M(F,{forceMount:void 0}),V=r=>{const{__scopeHoverCard:n,forceMount:a,children:o,container:c}=r,d=E(F,n);return e.jsx(se,{scope:n,forceMount:a,children:e.jsx(I,{present:a||d.open,children:e.jsx(Q,{asChild:!0,container:c,children:o})})})};V.displayName=F;var S="HoverCardContent",$=s.forwardRef((r,n)=>{const a=oe(S,r.__scopeHoverCard),{forceMount:o=a.forceMount,...c}=r,d=E(S,r.__scopeHoverCard);return e.jsx(I,{present:o||d.open,children:e.jsx(ce,{"data-state":d.open?"open":"closed",...c,onPointerEnter:l(r.onPointerEnter,T(d.onOpen)),onPointerLeave:l(r.onPointerLeave,T(d.onClose)),ref:n})})});$.displayName=S;var ce=s.forwardRef((r,n)=>{const{__scopeHoverCard:a,onEscapeKeyDown:o,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,...v}=r,i=E(S,a),g=A(a),u=s.useRef(null),N=Z(n,u),[m,j]=s.useState(!1);return s.useEffect(()=>{if(m){const t=document.body;return _=t.style.userSelect||t.style.webkitUserSelect,t.style.userSelect="none",t.style.webkitUserSelect="none",()=>{t.style.userSelect=_,t.style.webkitUserSelect=_}}},[m]),s.useEffect(()=>{if(u.current){const t=()=>{j(!1),i.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==""&&(i.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",t),()=>{document.removeEventListener("pointerup",t),i.hasSelectionRef.current=!1,i.isPointerDownOnContentRef.current=!1}}},[i.isPointerDownOnContentRef,i.hasSelectionRef]),s.useEffect(()=>{u.current&&le(u.current).forEach(b=>b.setAttribute("tabindex","-1"))}),e.jsx(ee,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:p,onEscapeKeyDown:o,onPointerDownOutside:c,onFocusOutside:l(d,t=>{t.preventDefault()}),onDismiss:i.onDismiss,children:e.jsx(re,{...g,...v,onPointerDown:l(v.onPointerDown,t=>{t.currentTarget.contains(t.target)&&j(!0),i.hasSelectionRef.current=!1,i.isPointerDownOnContentRef.current=!0}),ref:N,style:{...v.style,userSelect:m?"text":void 0,WebkitUserSelect:m?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),de="HoverCardArrow",ie=s.forwardRef((r,n)=>{const{__scopeHoverCard:a,...o}=r,c=A(a);return e.jsx(te,{...c,...o,ref:n})});ie.displayName=de;function T(r){return n=>n.pointerType==="touch"?void 0:r()}function le(r){const n=[],a=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;a.nextNode();)n.push(a.currentNode);return n}var ue=L,me=U,pe=V,ve=$;function f({...r}){return e.jsx(ue,{"data-slot":"hover-card",...r})}function C({...r}){return e.jsx(me,{"data-slot":"hover-card-trigger",...r})}function x({className:r,align:n="center",sideOffset:a=4,...o}){return e.jsx(pe,{"data-slot":"hover-card-portal",children:e.jsx(ve,{"data-slot":"hover-card-content",align:n,sideOffset:a,className:ne("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",r),...o})})}f.__docgenInfo={description:"",methods:[],displayName:"HoverCard"};C.__docgenInfo={description:"",methods:[],displayName:"HoverCardTrigger"};x.__docgenInfo={description:"",methods:[],displayName:"HoverCardContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const ge={title:"UI/HoverCard",component:f,subcomponents:{HoverCardContent:x,HoverCardTrigger:C},tags:["autodocs"],args:{open:!1},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},w={render:r=>e.jsxs(f,{...r,children:[e.jsx(C,{asChild:!0,children:e.jsx(h,{variant:"link",children:"@nextjs"})}),e.jsx(x,{className:"w-80",children:e.jsxs("div",{className:"flex justify-between space-x-4",children:[e.jsxs(O,{children:[e.jsx(D,{src:"https://github.com/vercel.png"}),e.jsx(k,{children:"VC"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@nextjs"}),e.jsx("p",{className:"text-sm",children:"The React Framework for the Web"}),e.jsx("div",{className:"flex items-center pt-2",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"Joined December 2021"})})]})]})})]})},H={args:{open:!0},render:r=>e.jsx(f,{...r,children:e.jsx(x,{children:e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"This hover card is controlled with the open prop set to true by default."})})})})},P={render:r=>e.jsxs(f,{...r,children:[e.jsx(C,{asChild:!0,children:e.jsx(h,{variant:"ghost",className:"p-0 h-auto",children:e.jsxs(O,{children:[e.jsx(D,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),e.jsx(k,{children:"CN"})]})})}),e.jsx(x,{className:"w-80",children:e.jsxs("div",{className:"flex justify-between space-x-4",children:[e.jsxs(O,{children:[e.jsx(D,{src:"https://github.com/shadcn.png"}),e.jsx(k,{children:"CN"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"shadcn"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Software Engineer"}),e.jsx("div",{className:"flex items-center pt-2",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"1.2k followers • 42 following"})}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsx(h,{size:"sm",className:"h-7",children:"Follow"}),e.jsx(h,{size:"sm",variant:"outline",className:"h-7",children:"Message"})]})]})]})})]})},y={render:r=>e.jsxs(f,{...r,children:[e.jsx(C,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"View Product Details"})}),e.jsx(x,{className:"w-80",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"aspect-video bg-muted rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground text-sm",children:"Product Image"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Premium Headphones"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"High-quality wireless headphones with noise cancellation"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-lg font-bold",children:"$299"}),e.jsx(h,{size:"sm",children:"Add to Cart"})]})]})})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    </HoverCard>
}`,...w.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <HoverCard {...args}>\r
      <HoverCardContent>\r
        <div className="p-4">\r
          <p>\r
            This hover card is controlled with the open prop set to true by\r
            default.\r
          </p>\r
        </div>\r
      </HoverCardContent>\r
    </HoverCard>
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Ce=["Default","Controlled","UserProfile","ProductCard"];export{H as Controlled,w as Default,y as ProductCard,P as UserProfile,Ce as __namedExportsOrder,ge as default};
