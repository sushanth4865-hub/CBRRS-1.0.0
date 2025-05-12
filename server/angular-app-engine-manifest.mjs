
export default {
  basePath: '/CBRRS-1.0.0',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
