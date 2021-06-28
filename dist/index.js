!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.InversifyReact=t(require("react")):e.InversifyReact=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return(()=>{"use strict";var t={131:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useAllInjections=t.useOptionalInjection=t.useInjection=t.useContainer=void 0;var n=r(888),o=r(838);function i(e){var t,r,i=n.useContext(o.InversifyReactContext);if(!i)throw new Error("Cannot find Inversify container on React Context. `Provider` component is missing in component tree.");return e?(t=function(){return e(i)},(r=n.useRef()).current||(r.current={v:t()}),r.current.v):i}t.useContainer=i,t.useInjection=function(e){return i((function(t){return t.get(e)}))},t.useOptionalInjection=function(e,t){return void 0===t&&(t=function(){}),i((function(r){return r.isBound(e)?r.get(e):t(r)}))},t.useAllInjections=function(e){return i((function(t){return t.getAll(e)}))}},838:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInstanceAdministration=t.getClassAdministration=t.createProperty=t.ensureAcceptContext=t.AdministrationKey=t.InversifyReactContext=void 0;var n=r(888).createContext(void 0);t.InversifyReactContext=n,n.displayName="InversifyReactContext";var o="~$inversify-react";function i(e){var t=e[o];return t||(t={accepts:!1},Object.defineProperty(e,o,{enumerable:!1,writable:!1,value:t})),t}function a(e){var t=e[o];if(!t){var r=e.context;if(!r)throw new Error("Cannot use resolve services without any providers in component tree.");t={container:r,properties:{}},Object.defineProperty(e,o,{enumerable:!1,writable:!1,value:t})}return t}t.AdministrationKey=o,t.getClassAdministration=i,t.getInstanceAdministration=a,t.ensureAcceptContext=function(e){var t=i(e);if(!t.accepts){var r=e.contextType,o=e.displayName||e.name;if(r)throw new Error("inversify-react cannot configure React context.\nComponent `"+o+"` already has `contextType: "+(r.displayName||"<anonymous context>")+"` defined.\n@see inversify-react/test/resolve.tsx#limitations for more info and workarounds\n");Object.defineProperty(e,"contextType",{enumerable:!0,get:function(){return n},set:function(e){if(e!==n)throw new Error("Cannot change `contextType` of `"+o+"` component.\nLooks like you are using inversify-react decorators, which have already patched this component and use own context to deliver IoC container.\n@see inversify-react/test/resolve.tsx#limitations for more info and workarounds\n")}}),t.accepts=!0}},t.createProperty=function(e,t,r,n){Object.defineProperty(e,t,{enumerable:!0,get:function(){var e=a(this),o=e.properties[t];if(!o){var i,s=e.container;i=n.isOptional?s.isBound(r)?s.get(r):n.defaultValue:s.get(r),o=e.properties[t]=function(){return i}}return o()}});var o=Object.getOwnPropertyDescriptor(e,t);if(!o)throw new Error("Failed to define property");return o}},713:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Provider=void 0;var n=r(888),o=r(888),i=r(838),a=function(e){var t=e.children,r=e.container,a=e.standalone,s=void 0!==a&&a,c=o.useState(r)[0];if("resolve"in r&&r!==c)throw new Error("Changing `container` prop (swapping container in runtime) is not supported.\nIf you're rendering Provider in some list, try adding `key={container.id}` to the Provider.\nMore info on React lists:\nhttps://reactjs.org/docs/lists-and-keys.html#keys\nhttps://reactjs.org/docs/reconciliation.html#recursing-on-children");var u=o.useState(s)[0];if(s!==u)throw new Error("Changing `standalone` prop is not supported.");var f=o.useContext(i.InversifyReactContext);return o.useState((function(){if(!u&&f){if(f===c)throw new Error("Provider has found a parent container (on surrounding React Context), yet somehow it's the same as container specified in props. It doesn't make sense.\nPerhaps you meant to configure Provider as `standalone={true}`?");if(c.parent)throw new Error("Ambiguous containers hierarchy.\nProvider has found a parent for specified `container`, but it already has a parent.\nLearn more at https://github.com/Kukkimonsuta/inversify-react/blob/v0.5.0/src/provider.tsx");c.parent=f}})),n.createElement(i.InversifyReactContext.Provider,{value:c},t)};t.Provider=a,t.default=a},905:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resolve=void 0;var n=r(838);function o(e,t,r,o){return n.ensureAcceptContext(e.constructor),n.createProperty(e,t,r,o)}function i(e,t){if(!t)throw new Error("Decorator `resolve` failed to resolve property name");if(!Reflect||!Reflect.getMetadata)throw new Error("Decorator `resolve` without specifying service identifier requires `reflect-metadata`");var r=Reflect.getMetadata("design:type",e,t);if(!r)throw new Error("Failed to discover property type, is `emitDecoratorMetadata` enabled?");return r}var a=function(e,t,r){if(void 0!==t)return o(e,t,i(e,t),{});var n=e;if(!n)throw new Error("Invalid property type.");return function(e,t,r){return o(e,t,n,{})}};t.resolve=a,a.optional=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if("string"==typeof e[1]&&3===e.length){var r=e[0],n=e[1],a=(e[2],i(r,n));return o(r,n,a,{isOptional:!0})}var s=e[0],c=e[1];return function(e,t,r){return o(e,t,s,{isOptional:!0,defaultValue:c})}},t.default=a},888:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.useOptionalInjection=e.useInjection=e.useContainer=e.useAllInjections=e.Provider=e.resolve=void 0;var t=n(905);Object.defineProperty(e,"resolve",{enumerable:!0,get:function(){return t.resolve}});var r=n(713);Object.defineProperty(e,"Provider",{enumerable:!0,get:function(){return r.Provider}});var i=n(131);Object.defineProperty(e,"useAllInjections",{enumerable:!0,get:function(){return i.useAllInjections}}),Object.defineProperty(e,"useContainer",{enumerable:!0,get:function(){return i.useContainer}}),Object.defineProperty(e,"useInjection",{enumerable:!0,get:function(){return i.useInjection}}),Object.defineProperty(e,"useOptionalInjection",{enumerable:!0,get:function(){return i.useOptionalInjection}})})(),o})()}));
//# sourceMappingURL=index.js.map