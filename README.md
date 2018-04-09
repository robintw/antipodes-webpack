This repo demonstrates the problem I'm having with webpack. My aim is to use the module turf (http://turfjs.org/) to do some geographic analysis in the browser.

I started by following the webpack Getting Started guide (https://webpack.js.org/guides/getting-started/) and creating `src/index.js` and `dist/index.html`. I import `_` from `lodash` and use it to do a simple string join. This all works.

I then try and extend this to do a simple demonstration using turf. In the turf getting started guide (http://turfjs.org/getting-started) it says that you can include individual turf modules in a webpack-based project. So, I installed `@turf/distance` and `@turf/helpers` and added some code using them to `index.js`. The relevant docs are at http://turfjs.org/docs#distance and http://turfjs.org/docs#point.

When running `npx webpack` I get the following errors:

```
ERROR in ./node_modules/@turf/invariant/index.mjs
59:34-42 Can't import the named export 'isNumber' from non EcmaScript module (only default export is available)
 @ ./node_modules/@turf/invariant/index.mjs
 @ ./node_modules/@turf/distance/index.js
 @ ./src/index.js

ERROR in ./node_modules/@turf/invariant/index.mjs
59:62-70 Can't import the named export 'isNumber' from non EcmaScript module (only default export is available)
 @ ./node_modules/@turf/invariant/index.mjs
 @ ./node_modules/@turf/distance/index.js
 @ ./src/index.js
 ```