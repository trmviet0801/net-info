// Reexport the native module. On web, it will be resolved to NetInfoModule.web.ts
// and on native platforms to NetInfoModule.ts
export { default } from './NetInfoModule';
export { default as NetInfoView } from './NetInfoView';
export * from  './NetInfo.types';
