exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 447:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 7707:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3765))

/***/ }),

/***/ 5203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(9298);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-toast/dist/index.mjs
var dist = __webpack_require__(901);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(7151);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(6852);
;// CONCATENATED MODULE: ./components/ui/toast.tsx
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/lib/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const ToastProvider = dist/* Provider */.zt;
const ToastViewport = /*#__PURE__*/ react_shared_subset.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Viewport */.l_, {
        ref: ref,
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/lib/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = dist/* Viewport.displayName */.l_.displayName;
const toastVariants = (0,class_variance_authority_dist/* cva */.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gray-800 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-black text-white",
            destructive: "destructive group border-red-500 bg-red-600 text-white"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react_shared_subset.forwardRef(({ className , variant , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Root */.fC, {
        ref: ref,
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/lib/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = dist/* Root.displayName */.fC.displayName;
const ToastAction = /*#__PURE__*/ react_shared_subset.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Action */.aU, {
        ref: ref,
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/lib/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-gray-800 bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-gray-800/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-white group-[.destructive]:focus:ring-red-500", className),
        ...props
    }));
ToastAction.displayName = dist/* Action.displayName */.aU.displayName;
const ToastClose = /*#__PURE__*/ react_shared_subset.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Close */.x8, {
        ref: ref,
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/lib/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("absolute right-2 top-2 rounded-md p-1 text-white/50 opacity-0 transition-opacity hover:text-white focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = dist/* Close.displayName */.x8.displayName;
const ToastTitle = /*#__PURE__*/ react_shared_subset.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/lib/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("text-sm font-semibold", className),
        ...props
    }));
ToastTitle.displayName = dist/* Title.displayName */.Dx.displayName;
const ToastDescription = /*#__PURE__*/ react_shared_subset.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/lib/utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = dist/* Description.displayName */.dk.displayName;


;// CONCATENATED MODULE: ./hooks/use-toast.ts

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId  } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react_shared_subset.useState(memoryState);
    react_shared_subset.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}


;// CONCATENATED MODULE: ./components/ui/toaster.tsx



function Toaster() {
    const { toasts  } = useToast();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToastProvider, {
        children: [
            toasts.map(function({ id , title , description , action , ...props }) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ jsx_runtime_.jsx(ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ jsx_runtime_.jsx(ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ jsx_runtime_.jsx(ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ToastViewport, {})
        ]
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "purepro4561 Gaming Updates",
    description: "Latest updates from the purepro4561 gaming website"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} bg-black text-gray-100 min-h-screen flex flex-col`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    className: "border-b border-gray-800",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container mx-auto px-4 py-6 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl font-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "hover:opacity-80 transition-opacity",
                                    children: "purepro4561"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "flex space-x-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "text-sm hover:opacity-80 transition-opacity",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/admin",
                                                className: "text-sm hover:opacity-80 transition-opacity",
                                                children: "Admin"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "container mx-auto px-4 py-8 flex-grow flex items-center justify-center",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                    className: "border-t border-gray-800",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container mx-auto px-4 py-6 text-center text-sm text-gray-500",
                        children: "\xa9 2023 purepro4561. All rights reserved."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Toaster, {})
            ]
        })
    });
}


/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;