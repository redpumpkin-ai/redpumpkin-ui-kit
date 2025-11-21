import{j as e,r as n,c as T,T as q,a as U,D as J,u as b,W as K,b as Q,C as X,d as Z,e as S,R as ee,P as te,O as re,f as s,g as E,B as w}from"./iframe-D5WLnXsO.js";import"./preload-helper-PPVm8Dsz.js";var oe=Symbol("radix.slottable");function ae(t){const r=({children:o})=>e.jsx(e.Fragment,{children:o});return r.displayName=`${t}.Slottable`,r.__radixId=oe,r}var I="AlertDialog",[le]=Q(I,[T]),i=T(),R=t=>{const{__scopeAlertDialog:r,...o}=t,a=i(r);return e.jsx(ee,{...a,...o,modal:!0})};R.displayName=I;var ne="AlertDialogTrigger",P=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(q,{...l,...a,ref:r})});P.displayName=ne;var ie="AlertDialogPortal",O=t=>{const{__scopeAlertDialog:r,...o}=t,a=i(r);return e.jsx(te,{...a,...o})};O.displayName=ie;var se="AlertDialogOverlay",$=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(re,{...l,...a,ref:r})});$.displayName=se;var c="AlertDialogContent",[ce,de]=le(c),ge=ae("AlertDialogContent"),F=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,children:a,...l}=t,_=i(o),h=n.useRef(null),Y=b(r,h),N=n.useRef(null);return e.jsx(K,{contentName:c,titleName:M,docsSlug:"alert-dialog",children:e.jsx(ce,{scope:o,cancelRef:N,children:e.jsxs(X,{role:"alertdialog",..._,...l,ref:Y,onOpenAutoFocus:Z(l.onOpenAutoFocus,d=>{d.preventDefault(),N.current?.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[e.jsx(ge,{children:a}),e.jsx(pe,{contentRef:h})]})})})});F.displayName=c;var M="AlertDialogTitle",H=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(U,{...l,...a,ref:r})});H.displayName=M;var B="AlertDialogDescription",L=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(J,{...l,...a,ref:r})});L.displayName=B;var ue="AlertDialogAction",z=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,l=i(o);return e.jsx(S,{...l,...a,ref:r})});z.displayName=ue;var G="AlertDialogCancel",W=n.forwardRef((t,r)=>{const{__scopeAlertDialog:o,...a}=t,{cancelRef:l}=de(G,o),_=i(o),h=b(r,l);return e.jsx(S,{..._,...a,ref:h})});W.displayName=G;var pe=({contentRef:t})=>{const r=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${B}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return n.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},Ae=R,De=P,me=O,fe=$,xe=F,he=z,ve=W,ye=H,je=L;function g({...t}){return e.jsx(Ae,{"data-slot":"alert-dialog",...t})}function C({...t}){return e.jsx(De,{"data-slot":"alert-dialog-trigger",...t})}function k({...t}){return e.jsx(me,{"data-slot":"alert-dialog-portal",...t})}function V({className:t,...r}){return e.jsx(fe,{"data-slot":"alert-dialog-overlay",className:s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",t),...r})}function u({className:t,...r}){return e.jsxs(k,{children:[e.jsx(V,{}),e.jsx(xe,{"data-slot":"alert-dialog-content",className:s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t),...r})]})}function p({className:t,...r}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:s("flex flex-col gap-2 text-center sm:text-left",t),...r})}function A({className:t,...r}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...r})}function D({className:t,...r}){return e.jsx(ye,{"data-slot":"alert-dialog-title",className:s("text-lg font-semibold",t),...r})}function m({className:t,...r}){return e.jsx(je,{"data-slot":"alert-dialog-description",className:s("text-muted-foreground text-sm",t),...r})}function f({className:t,...r}){return e.jsx(he,{className:s(E(),t),...r})}function x({className:t,...r}){return e.jsx(ve,{className:s(E({variant:"outline"}),t),...r})}g.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};k.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};V.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};C.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};p.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};A.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};D.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};m.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};f.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};const Ne={title:"UI/AlertDialog",component:g,subcomponents:{AlertDialogAction:f,AlertDialogCancel:x,AlertDialogContent:u,AlertDialogDescription:m,AlertDialogFooter:A,AlertDialogHeader:p,AlertDialogTitle:D,AlertDialogTrigger:C},tags:["autodocs"],args:{open:!1},parameters:{controls:{exclude:["className","style","ref","asChild"]}}},v={render:t=>e.jsxs(g,{...t,children:[e.jsx(C,{asChild:!0,children:e.jsx(w,{variant:"outline",children:"Show Alert Dialog"})}),e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx(D,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(A,{children:[e.jsx(x,{children:"Cancel"}),e.jsx(f,{children:"Continue"})]})]})]})},y={args:{open:!0},render:t=>e.jsx(g,{...t,children:e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx(D,{children:"Controlled Alert Dialog"}),e.jsx(m,{children:"This alert dialog is controlled with the open prop set to true by default."})]}),e.jsxs(A,{children:[e.jsx(x,{children:"Cancel"}),e.jsx(f,{children:"Continue"})]})]})})},j={render:t=>e.jsxs(g,{...t,children:[e.jsx(C,{asChild:!0,children:e.jsx(w,{variant:"destructive",children:"Delete Account"})}),e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx(D,{children:"Delete Account"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove all associated data."})]}),e.jsxs(A,{children:[e.jsx(x,{children:"Cancel"}),e.jsx(f,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete Account"})]})]})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    </AlertDialog>
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
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const Te=["Default","Controlled","Destructive"];export{y as Controlled,v as Default,j as Destructive,Te as __namedExportsOrder,Ne as default};
