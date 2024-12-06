"use strict";
(() => {
var exports = {};
exports.id = 990;
exports.ids = [990];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/posts/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(2413);
// EXTERNAL MODULE: ./lib/posts.ts
var posts = __webpack_require__(1364);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./app/api/posts/route.ts




async function POST(request) {
    try {
        const formData = await request.formData();
        const title = formData.get("title");
        const content = formData.get("content");
        const image = formData.get("image");
        let imageUrl = "";
        if (image) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const uploadDir = external_path_default().join(process.cwd(), "public", "uploads");
            await (0,promises_namespaceObject.writeFile)(external_path_default().join(uploadDir, image.name), buffer);
            imageUrl = `/uploads/${image.name}`;
        }
        const newPost = await (0,posts/* createPost */.qb)({
            title,
            content,
            imageUrl
        });
        return next_response/* default.json */.Z.json(newPost, {
            status: 201
        });
    } catch (error) {
        console.error("Error creating post:", error);
        return next_response/* default.json */.Z.json({
            error: "Failed to create post"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2Froute&name=app%2Fapi%2Fposts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=%2Fworkspaces%2Fpureproblog%2Fapp&appPaths=%2Fapi%2Fposts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=%2Fpurepro4561-blog&assetPrefix=%2Fpurepro4561-blog%2F&nextConfigOutput=export&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/posts",
    resolvedPagePath: "/workspaces/pureproblog/app/api/posts/route.ts",
    nextConfigOutput: "export",
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/posts/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [683,188,95,364], () => (__webpack_exec__(2987)));
module.exports = __webpack_exports__;

})();