import{j as e,r as n,c as b,T as Y,a as U,D as J,u as T,W as K,b as Q,C as X,d as Z,e as E,R as ee,P as te,O as re,f as s,g as S,B as w}from"./iframe-B8NNBB4w.js";import{u as oe}from"./index-CJfF1QgA.js";import"./preload-helper-PPVm8Dsz.js";var ae=Symbol("radix.slottable");function le(t){const r=({children:o})=>e.jsx(e.Fragment,{children:o});return r.displayName=`${t}.Slottable`,r.__radixId=ae,r}var I="AlertDialog",[ne]=Q(I,[b]),i=b(),R=t=>{const{__scopeAlertDialog:r,...o}=t,a=i(r);return e.jsx(ee,{...a,...o,modal:!0})};R.displayName=I;var ie="AlertDialogTrigger",O=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(Y,{...l,...a,ref:r})});O.displayName=ie;var se="AlertDialogPortal",P=t=>{const{__scopeAlertDialog:r,...o}=t,a=i(r);return e.jsx(te,{...a,...o})};P.displayName=se;var ce="AlertDialogOverlay",$=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(re,{...l,...a,ref:r})});$.displayName=ce;var c="AlertDialogContent",[de,ge]=ne(c),ue=le("AlertDialogContent"),F=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,children:a,...l}=t,_=i(o),x=n.useRef(null),V=T(r,x),N=n.useRef(null);return e.jsx(K,{contentName:c,titleName:M,docsSlug:"alert-dialog",children:e.jsx(de,{scope:o,cancelRef:N,children:e.jsxs(X,{role:"alertdialog",..._,...l,ref:V,onOpenAutoFocus:Z(l.onOpenAutoFocus,d=>{d.preventDefault(),N.current?.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[e.jsx(ue,{children:a}),e.jsx(Ae,{contentRef:x})]})})})});F.displayName=c;var M="AlertDialogTitle",H=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(U,{...l,...a,ref:r})});H.displayName=M;var B="AlertDialogDescription",L=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(J,{...l,...a,ref:r})});L.displayName=B;var pe="AlertDialogAction",k=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(E,{...l,...a,ref:r})});k.displayName=pe;var z="AlertDialogCancel",q=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,{cancelRef:l}=ge(z,o),_=i(o),x=T(r,l);return e.jsx(E,{..._,...a,ref:x})});q.displayName=z;var Ae=({contentRef:t})=>{const r=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${B}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return n.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},De=R,me=O,fe=P,he=$,xe=F,ve=k,ye=q,Ce=H,je=L;function g({...t}){return e.jsx(De,{"data-slot":"alert-dialog",...t})}function j({...t}){return e.jsx(me,{"data-slot":"alert-dialog-trigger",...t})}function G({...t}){return e.jsx(fe,{"data-slot":"alert-dialog-portal",...t})}function W({className:t,...r}){return e.jsx(he,{"data-slot":"alert-dialog-overlay",className:s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",t),...r})}function u({className:t,...r}){return e.jsxs(G,{children:[e.jsx(W,{}),e.jsx(xe,{"data-slot":"alert-dialog-content",className:s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t),...r})]})}function p({className:t,...r}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:s("flex flex-col gap-2 text-center sm:text-left",t),...r})}function A({className:t,...r}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...r})}function D({className:t,...r}){return e.jsx(Ce,{"data-slot":"alert-dialog-title",className:s("text-lg font-semibold",t),...r})}function m({className:t,...r}){return e.jsx(je,{"data-slot":"alert-dialog-description",className:s("text-muted-foreground text-sm",t),...r})}function f({className:t,...r}){return e.jsx(ve,{className:s(S(),t),...r})}function h({className:t,...r}){return e.jsx(ye,{className:s(S({variant:"outline"}),t),...r})}g.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};G.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};W.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};j.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};p.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};A.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};D.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};m.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};f.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};h.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};const Te={title:"UI/AlertDialog",component:g,subcomponents:{AlertDialogAction:f,AlertDialogCancel:h,AlertDialogContent:u,AlertDialogDescription:m,AlertDialogFooter:A,AlertDialogHeader:p,AlertDialogTitle:D,AlertDialogTrigger:j},tags:["autodocs"],args:{open:!1},argTypes:{onOpenChange:{action:"onOpenChange"}},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},v={render:t=>e.jsxs(g,{...t,children:[e.jsx(j,{asChild:!0,children:e.jsx(w,{variant:"outline",children:"Show Alert Dialog"})}),e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx(D,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(A,{children:[e.jsx(h,{children:"Cancel"}),e.jsx(f,{children:"Continue"})]})]})]}),play:async({canvasElement:t})=>{const o=Array.from(t.querySelectorAll("button")).find(a=>/show alert dialog/i.test(a.textContent||""));o&&await oe.click(o)}},y={args:{open:!0},render:t=>e.jsx(g,{...t,children:e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx(D,{children:"Controlled Alert Dialog"}),e.jsx(m,{children:"This alert dialog is controlled with the open prop set to true by default."})]}),e.jsxs(A,{children:[e.jsx(h,{children:"Cancel"}),e.jsx(f,{children:"Continue"})]})]})})},C={render:t=>e.jsxs(g,{...t,children:[e.jsx(j,{asChild:!0,children:e.jsx(w,{variant:"destructive",children:"Delete Account"})}),e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx(D,{children:"Delete Account"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove all associated data."})]}),e.jsxs(A,{children:[e.jsx(h,{children:"Cancel"}),e.jsx(f,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete Account"})]})]})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <AlertDialog {...args}>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Show Alert Dialog</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            This action cannot be undone. This will permanently delete your\r
            account and remove your data from our servers.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction>Continue</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  play: async ({
    canvasElement
  }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find(b => /show alert dialog/i.test(b.textContent || ""));
    if (trigger) await userEvent.click(trigger);
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <AlertDialog {...args}>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Controlled Alert Dialog</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            This alert dialog is controlled with the open prop set to true by default.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction>Continue</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <AlertDialog {...args}>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="destructive">Delete Account</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Delete Account</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            This action cannot be undone. This will permanently delete your\r
            account and remove all associated data.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">\r
            Delete Account\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...C.parameters?.docs?.source}}};const Ee=["Default","Controlled","Destructive"];export{y as Controlled,v as Default,C as Destructive,Ee as __namedExportsOrder,Te as default};
