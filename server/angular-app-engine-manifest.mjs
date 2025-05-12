
export default {
  basePath: 'https://github.com/sushanth4865-hub/CBRRS-1.0.0',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
