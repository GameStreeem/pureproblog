"use strict";
exports.id = 364;
exports.ids = [364];
exports.modules = {

/***/ 1364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "qb": () => (/* binding */ createPost),
/* harmony export */   "u_": () => (/* binding */ getPostById)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const dataDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data");
const postsFile = path__WEBPACK_IMPORTED_MODULE_1___default().join(dataDirectory, "posts.json");
async function ensureDataFileExists() {
    try {
        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.access(dataDirectory);
    } catch  {
        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.mkdir(dataDirectory, {
            recursive: true
        });
    }
    try {
        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.access(postsFile);
    } catch  {
        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(postsFile, "[]", "utf8");
    }
}
async function getPosts() {
    await ensureDataFileExists();
    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(postsFile, "utf8");
    const posts = JSON.parse(fileContents);
    return posts.sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
}
async function getPostById(id) {
    const posts = await getPosts();
    return posts.find((post)=>post.id === id);
}
async function createPost(post) {
    const posts = await getPosts();
    const newPost = {
        ...post,
        id: Date.now().toString(),
        date: new Date().toISOString(),
        excerpt: post.content.slice(0, 100) + "..."
    };
    posts.push(newPost);
    await fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(postsFile, JSON.stringify(posts, null, 2), "utf8");
    return newPost;
}


/***/ })

};
;