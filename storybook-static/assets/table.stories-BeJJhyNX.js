import{j as e,f as r}from"./iframe-B8NNBB4w.js";import"./preload-helper-PPVm8Dsz.js";function d({className:a,...l}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:r("w-full caption-bottom text-sm",a),...l})})}function c({className:a,...l}){return e.jsx("thead",{"data-slot":"table-header",className:r("[&_tr]:border-b",a),...l})}function i({className:a,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:r("[&_tr:last-child]:border-0",a),...l})}function b({className:a,...l}){return e.jsx("tfoot",{"data-slot":"table-footer",className:r("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...l})}function s({className:a,...l}){return e.jsx("tr",{"data-slot":"table-row",className:r("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...l})}function n({className:a,...l}){return e.jsx("th",{"data-slot":"table-head",className:r("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function t({className:a,...l}){return e.jsx("td",{"data-slot":"table-cell",className:r("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function T({className:a,...l}){return e.jsx("caption",{"data-slot":"table-caption",className:r("text-muted-foreground mt-4 text-sm",a),...l})}d.__docgenInfo={description:"",methods:[],displayName:"Table"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};i.__docgenInfo={description:"",methods:[],displayName:"TableBody"};b.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};n.__docgenInfo={description:"",methods:[],displayName:"TableHead"};s.__docgenInfo={description:"",methods:[],displayName:"TableRow"};t.__docgenInfo={description:"",methods:[],displayName:"TableCell"};T.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const h={title:"UI/Table",component:d,subcomponents:{TableHeader:c,TableBody:i,TableFooter:b,TableHead:n,TableRow:s,TableCell:t,TableCaption:T},tags:["autodocs"],parameters:{controls:{exclude:["className","style","ref","asChild"]}}},o={render:()=>e.jsxs(d,{children:[e.jsx(T,{children:"A list of recent invoices."}),e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(n,{children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(t,{children:"INV001"}),e.jsx(t,{children:"Paid"}),e.jsx(t,{className:"text-right",children:"$250.00"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"INV002"}),e.jsx(t,{children:"Pending"}),e.jsx(t,{className:"text-right",children:"$500.00"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"INV003"}),e.jsx(t,{children:"Paid"}),e.jsx(t,{className:"text-right",children:"$300.00"})]})]}),e.jsx(b,{children:e.jsxs(s,{children:[e.jsx(t,{colSpan:2,children:"Total"}),e.jsx(t,{className:"text-right",children:"$1,050.00"})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableCaption>A list of recent invoices.</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>Invoice</TableHead>\r
          <TableHead>Status</TableHead>\r
          <TableHead className="text-right">Amount</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow>\r
          <TableCell>INV001</TableCell>\r
          <TableCell>Paid</TableCell>\r
          <TableCell className="text-right">$250.00</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>INV002</TableCell>\r
          <TableCell>Pending</TableCell>\r
          <TableCell className="text-right">$500.00</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>INV003</TableCell>\r
          <TableCell>Paid</TableCell>\r
          <TableCell className="text-right">$300.00</TableCell>\r
        </TableRow>\r
      </TableBody>\r
      <TableFooter>\r
        <TableRow>\r
          <TableCell colSpan={2}>Total</TableCell>\r
          <TableCell className="text-right">$1,050.00</TableCell>\r
        </TableRow>\r
      </TableFooter>\r
    </Table>
}`,...o.parameters?.docs?.source}}};const p=["Default"];export{o as Default,p as __namedExportsOrder,h as default};
