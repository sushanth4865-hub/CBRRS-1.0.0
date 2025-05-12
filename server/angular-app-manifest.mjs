
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cbrrs-frontend',
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
    'index.csr.html': {size: 3751, hash: '0cbfbe6001b2adc84bad4426bb2962eb275895af32e5160b3c7158480811d29b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4264, hash: '8c0b85c1b8cd42f5fe587de2f55b5810391d81f08969e951cc4d8ea817f2c7e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22735, hash: '35a377969545765ecfc08fc85811b48ebba86ffa6d078ecb063cbc5d8936855e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22735, hash: '35a377969545765ecfc08fc85811b48ebba86ffa6d078ecb063cbc5d8936855e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'academics/index.html': {size: 21655, hash: '20e0b7122db59ca42d8708d6b3ef6a22f0f93f0eb23278f60c05dc5bc15fd10e', text: () => import('./assets-chunks/academics_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10655, hash: '308c42a83320fea3500f917010499aa386f30529c8165f06fbc2fb64824b01ff', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'admissions/index.html': {size: 10100, hash: '1e5d0ce1aa0dc753a621f75a52e92cb312ebe3dae31f9d17359d569cca080d4f', text: () => import('./assets-chunks/admissions_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
