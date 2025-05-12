
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/academics"
  },
  {
    "renderMode": 2,
    "route": "/admissions"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3737, hash: '88126ace59c00e93cddc0be2973dbbc04cf6349d2cf8b23a04dbac857b6016b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4250, hash: '127f408d1e8e2eeb52841ee1018417a3f0598e693d3c7e29a6965e3e6140c21c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22601, hash: '3c60f7125fad0eeea230105ef2894279551b1a37f078f50bb41f0d2563f4d80c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10521, hash: '5a3bf0d3a3c87690b968adcc79f3d79290775f4c26d0a90426a1c19f71600ade', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'admissions/index.html': {size: 9966, hash: '66e93b0191d57f712e4220ee0a54590ad94926679dbd26ba17346c00289e1446', text: () => import('./assets-chunks/admissions_index_html.mjs').then(m => m.default)},
    'academics/index.html': {size: 21521, hash: '41d72dc9d495026d3ca4d09bce6efa81bba00b17f1357f8f6895e8026820c0de', text: () => import('./assets-chunks/academics_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22601, hash: '3c60f7125fad0eeea230105ef2894279551b1a37f078f50bb41f0d2563f4d80c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
