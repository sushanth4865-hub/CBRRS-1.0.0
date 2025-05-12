
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/sushanth4865-hub/CBRRS-1.0.0/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sushanth4865-hub/CBRRS-1.0.0"
  },
  {
    "renderMode": 2,
    "route": "/sushanth4865-hub/CBRRS-1.0.0/home"
  },
  {
    "renderMode": 2,
    "route": "/sushanth4865-hub/CBRRS-1.0.0/academics"
  },
  {
    "renderMode": 2,
    "route": "/sushanth4865-hub/CBRRS-1.0.0/admissions"
  },
  {
    "renderMode": 2,
    "route": "/sushanth4865-hub/CBRRS-1.0.0/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3784, hash: '1d2c294b5629c390963e6a14b6706212dcd2991e9caa3472042bda41a84e7a5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4297, hash: '8422e6c928b3a1b6699ab15b438c40f075156d22eebe580564868cceba26fdca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23024, hash: 'bdfa84f8d7541a50cb6cdafc23c0df3c3fef2ff97bb44f4cf5894b876ec82769', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10944, hash: 'bc730a0b08319de9243f43f5d88b2d004adb75c306b98842f5b549c7eb15fe87', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23024, hash: 'bdfa84f8d7541a50cb6cdafc23c0df3c3fef2ff97bb44f4cf5894b876ec82769', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'academics/index.html': {size: 21944, hash: '18e499718df7831191e213da859e4c01f8ede958e8db5f578ca853ae234366f7', text: () => import('./assets-chunks/academics_index_html.mjs').then(m => m.default)},
    'admissions/index.html': {size: 10389, hash: '0b366a8957de54a730de8fd81ec15051cf9582c0275469c1b3270b69242c37bb', text: () => import('./assets-chunks/admissions_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
