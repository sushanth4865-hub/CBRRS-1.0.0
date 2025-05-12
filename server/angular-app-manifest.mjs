
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sushanth4865-hub.github.io/cbrrs-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cbrrs-frontend"
  },
  {
    "renderMode": 2,
    "route": "/cbrrs-frontend/home"
  },
  {
    "renderMode": 2,
    "route": "/cbrrs-frontend/academics"
  },
  {
    "renderMode": 2,
    "route": "/cbrrs-frontend/admissions"
  },
  {
    "renderMode": 2,
    "route": "/cbrrs-frontend/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3786, hash: 'e1b4d54cbee8dec2d2281cf652be089d6b35cd4c5a97b902232b41e182e04642', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4299, hash: '8ad9be64a5997e8de5c0771016141fc9e12c56cabc8b54689898130b67b1cc02', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23042, hash: '4aefbd318aea4363b18f275b5a0c6697a28323c2300c9abafaf092b813c83c04', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admissions/index.html': {size: 10407, hash: '2549602df5e95db2d0c215f905703c4bc95c8a79e92853c2a7de7660c9cdebb8', text: () => import('./assets-chunks/admissions_index_html.mjs').then(m => m.default)},
    'academics/index.html': {size: 21962, hash: '36b7847982b6cc881968d7653993f8ec6d80a6580977c4350e1ff63ef3e29ab1', text: () => import('./assets-chunks/academics_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23042, hash: '4aefbd318aea4363b18f275b5a0c6697a28323c2300c9abafaf092b813c83c04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10962, hash: 'f04bac5027fb7ccb07da04325a366b8393d66ae945e84f29364202a100b47834', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
