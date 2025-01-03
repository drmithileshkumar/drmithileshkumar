import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, i as each, v as validate_component, a as add_attribute, e as escape } from './ssr2-q3O0l93f.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-BJ7xikju.js';
import { c as currentPath } from './stores2-B6DyWuAW.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './index2-BZnI6xu7.js';

const css$1 = {
  code: ".invoice.svelte-hjwo8z{font-family:Arial, sans-serif;max-width:600px;margin:20px auto;padding:20px;border:1px solid #ccc}.header.svelte-hjwo8z{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.logo.svelte-hjwo8z{width:100px}.plan-info.svelte-hjwo8z,.customer-info.svelte-hjwo8z,.price-info.svelte-hjwo8z,.company-info.svelte-hjwo8z{margin-bottom:20px}dt.svelte-hjwo8z{font-weight:bold}dd.svelte-hjwo8z{margin-bottom:10px}",
  map: `{"version":3,"file":"Invoice.svelte","sources":["Invoice.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content } from '@smui/card';\\r\\n    export let invoice;\\r\\n    let gst = 0.18;\\r\\n    const totalPrice = (invoice.amount * (1 + gst)).toFixed(2);\\r\\n  <\/script>\\r\\n  \\r\\n  <style>\\r\\n    .invoice {\\r\\n      font-family: Arial, sans-serif;\\r\\n      max-width: 600px;\\r\\n      margin: 20px auto;\\r\\n      padding: 20px;\\r\\n      border: 1px solid #ccc;\\r\\n    }\\r\\n  \\r\\n    .header {\\r\\n      display: flex;\\r\\n      justify-content: space-between;\\r\\n      align-items: center;\\r\\n      margin-bottom: 20px;\\r\\n    }\\r\\n  \\r\\n    .logo {\\r\\n      width: 100px;\\r\\n    }\\r\\n  \\r\\n    .plan-info,\\r\\n    .customer-info,\\r\\n    .price-info,\\r\\n    .company-info {\\r\\n      margin-bottom: 20px;\\r\\n    }\\r\\n  \\r\\n    dt {\\r\\n      font-weight: bold;\\r\\n    }\\r\\n  \\r\\n    dd {\\r\\n      margin-bottom: 10px;\\r\\n    }\\r\\n  </style>\\r\\n  <section>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"invoice\\">\\r\\n                <div class=\\"header\\">\\r\\n                  <img class=\\"logo\\" src={'/favicon.png'} alt=\\"Mathril.com\\" />\\r\\n                  <h1 class='mdc-typography--headline5'>Invoice</h1>\\r\\n                </div>\\r\\n              \\r\\n                <dl class=\\"company-info\\">\\r\\n                  <dt>Company Name:</dt>\\r\\n                  <dd>Mathril</dd>\\r\\n                  <dt>Website:</dt>\\r\\n                  <dd>https://aiguru.dev</dd>\\r\\n                  <dt>GST Number:</dt>\\r\\n                  <dd>03EYJPK3861C1ZM (eSpace)</dd>\\r\\n                </dl>\\r\\n              \\r\\n                <dl class=\\"plan-info\\">\\r\\n                  <dt>Subscription:</dt>\\r\\n                  <dd>{invoice.type}</dd>\\r\\n                </dl>\\r\\n              \\r\\n                <dl class=\\"customer-info\\">\\r\\n                  <dt>Customer:</dt>\\r\\n                  <dd>{invoice.name} (ID: {invoice.publicID})</dd>\\r\\n                </dl>\\r\\n              \\r\\n                <dl class=\\"price-info\\">\\r\\n                  <dt>Price:</dt>\\r\\n                  <dd>Rs {invoice.amount}</dd>\\r\\n                  <dt>GST:</dt>\\r\\n                  <dd>{0.18 * 100}%</dd>\\r\\n                  <dt>Total Price:</dt>\\r\\n                  <dd>Rs {totalPrice}</dd>\\r\\n                </dl>\\r\\n              \\r\\n                <div>\\r\\n                  <strong>Invoice ID:</strong> {invoice.payment_id}<br />\\r\\n                  <strong>Date:</strong> {new Date(invoice.creationTimestamp).toLocaleDateString()}\\r\\n                </div>\\r\\n              </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n  </section>\\r\\n  \\r\\n  "],"names":[],"mappings":"AASI,sBAAS,CACP,WAAW,CAAE,KAAK,CAAC,CAAC,UAAU,CAC9B,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACpB,CAEA,qBAAQ,CACN,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,IACjB,CAEA,mBAAM,CACJ,KAAK,CAAE,KACT,CAEA,wBAAU,CACV,4BAAc,CACd,yBAAW,CACX,2BAAc,CACZ,aAAa,CAAE,IACjB,CAEA,gBAAG,CACD,WAAW,CAAE,IACf,CAEA,gBAAG,CACD,aAAa,CAAE,IACjB"}`
};
let gst = 0.18;
const Invoice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { invoice } = $$props;
  const totalPrice = (invoice.amount * (1 + gst)).toFixed(2);
  if ($$props.invoice === void 0 && $$bindings.invoice && invoice !== void 0) $$bindings.invoice(invoice);
  $$result.css.add(css$1);
  return `<section>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="invoice svelte-hjwo8z"><div class="header svelte-hjwo8z" data-svelte-h="svelte-cpg6c9"><img class="logo svelte-hjwo8z"${add_attribute("src", "/favicon.png", 0)} alt="Mathril.com"> <h1 class="mdc-typography--headline5">Invoice</h1></div> <dl class="company-info svelte-hjwo8z" data-svelte-h="svelte-orckhg"><dt class="svelte-hjwo8z">Company Name:</dt><dd class="svelte-hjwo8z">Mathril</dd><dt class="svelte-hjwo8z">Website:</dt><dd class="svelte-hjwo8z">https://aiguru.dev</dd><dt class="svelte-hjwo8z">GST Number:</dt><dd class="svelte-hjwo8z">03EYJPK3861C1ZM (eSpace)</dd></dl> <dl class="plan-info svelte-hjwo8z"><dt class="svelte-hjwo8z" data-svelte-h="svelte-1tb32u9">Subscription:</dt><dd class="svelte-hjwo8z">${escape(invoice.type)}</dd></dl> <dl class="customer-info svelte-hjwo8z"><dt class="svelte-hjwo8z" data-svelte-h="svelte-qa2bgc">Customer:</dt><dd class="svelte-hjwo8z">${escape(invoice.name)} (ID: ${escape(invoice.publicID)})</dd></dl> <dl class="price-info svelte-hjwo8z"><dt class="svelte-hjwo8z" data-svelte-h="svelte-70sy63">Price:</dt><dd class="svelte-hjwo8z">Rs ${escape(invoice.amount)}</dd><dt class="svelte-hjwo8z" data-svelte-h="svelte-n209v6">GST:</dt><dd class="svelte-hjwo8z">${escape(0.18 * 100)}%</dd><dt class="svelte-hjwo8z" data-svelte-h="svelte-bvdqah">Total Price:</dt><dd class="svelte-hjwo8z">Rs ${escape(totalPrice)}</dd></dl> <div><strong data-svelte-h="svelte-1d8102s">Invoice ID:</strong> ${escape(invoice.payment_id)}<br> <strong data-svelte-h="svelte-cxiy68">Date:</strong> ${escape(new Date(invoice.creationTimestamp).toLocaleDateString())}</div></div>`;
        }
      })}`;
    }
  })}</section>`;
});
const css = {
  code: ".invoices.svelte-1whxgm2{display:flex;flex-wrap:wrap;gap:0.5em;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Invoice from '$lib/vectorial/components/Invoice.svelte';\\r\\n    import { currentPath } from '$lib/vectorial/stores.js';\\r\\n    $currentPath = 'Invoices';\\r\\n    export let data;\\r\\n<\/script>\\r\\n<article>\\r\\n    <h1 class=\\"mdc-typography--headline4\\">Your invoices</h1>\\r\\n    <section class=\\"invoices\\">\\r\\n        {#if data.invoices}\\r\\n        {#each data.invoices as invoice}\\r\\n            <Invoice {invoice} />\\r\\n        {/each}\\r\\n    {/if}\\r\\n    </section>\\r\\n</article>\\r\\n<style>\\r\\n    .invoices {\\r\\n        display:flex;\\r\\n        flex-wrap: wrap;\\r\\n        gap: 0.5em;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAkBI,wBAAU,CACN,QAAQ,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Invoices", $currentPath);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article><h1 class="mdc-typography--headline4" data-svelte-h="svelte-14n74wg">Your invoices</h1> <section class="invoices svelte-1whxgm2">${data.invoices ? `${each(data.invoices, (invoice) => {
    return `${validate_component(Invoice, "Invoice").$$render($$result, { invoice }, {}, {})}`;
  })}` : ``}</section> </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bkn-aUpi.js.map
