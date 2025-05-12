
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CBRRS-1.0.0/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CBRRS-1.0.0"
  },
  {
    "renderMode": 2,
    "route": "/CBRRS-1.0.0/home"
  },
  {
    "renderMode": 2,
    "route": "/CBRRS-1.0.0/academics"
  },
  {
    "renderMode": 2,
    "route": "/CBRRS-1.0.0/admissions"
  },
  {
    "renderMode": 2,
    "route": "/CBRRS-1.0.0/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3749, hash: '81708a3ce9039e29fb0e00585afbc523aa208df12808886af4e36208ff96e4b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4262, hash: 'd53e47dcd7ebc982c567bfdecc0a04e2e50830b661640f3b09abae49ab6dd629', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22709, hash: 'dbdc683ad0f6e3f111699415b69c0e36509bcda9e86d8689b4076923b017f7a5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10629, hash: '83b9e1a0c69d065372959f6a1dd39955284c357ee0c9a93947b2411b1257817d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'academics/index.html': {size: 21629, hash: '04c935e3eef59fccdda419cff669623599e6f77e64902a07bc05ba58fef2286f', text: () => import('./assets-chunks/academics_index_html.mjs').then(m => m.default)},
    'admissions/index.html': {size: 10074, hash: 'cac9d61f2126ca442d1eb8ea6f19d97c8ea0fa39ebd40d42227588874a092484', text: () => import('./assets-chunks/admissions_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22709, hash: 'dbdc683ad0f6e3f111699415b69c0e36509bcda9e86d8689b4076923b017f7a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
