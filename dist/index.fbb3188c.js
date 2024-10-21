// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kzbYw":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bDbGG":[function(require,module,exports) {
var _productsJs = require("./products.js"); // Importing the products from the external file
const productGrid = document.getElementById("product-grid");
const categoryFilter = document.getElementById("category");
const availabilityFilter = document.getElementById("availability");
const cartItems = document.querySelector(".cart-items");
// Function to generate product cards with Bootstrap carousel
function displayProducts(filteredProducts) {
    productGrid.innerHTML = ""; // Clear previous products
    filteredProducts.forEach((product)=>{
        // Create the carousel items based on the product's images
        const carouselItems = product.images.map((image, index)=>`
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${image}" class="d-block w-100" alt="${product.name}">
            </div>
        `).join(""); // Join the array of carousel items into a single string
        const carouselControls = product.images.length > 1 ? `
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselProduct${product.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselProduct${product.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    ` : ""; // If only one image, no controls
        const productCard = `
    <div class="col-md-6 col-lg-4 mb-4 ">
        <div class="card h-100 w-100 d-flex flex-column" >
            
            <div id="carouselProduct${product.id}" class="carousel slide" data-ride="false" data-interval="false">
                <div class="carousel-inner">
                    ${carouselItems}
                </div>
                ${carouselControls} <!-- Insert controls only if there is more than 1 image -->
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: ${product.price}</p>
                    <p class="card-text">Available: ${product.available}</p>
                    <p class="card-text">Notes: ${product.notes}</p>
                </div>
                <div class="mt-2">
                  <button class="btn btn-primary d-block mx-auto add-to-cart" data-product-id="${product.id}">Add Request</button>
                </div>
            </div>
        </div>
    </div>`;
        productGrid.innerHTML += productCard;
    });
    setupAddToCartListeners(); // Setup listener for add to cart button
}
// Filtering logic (same as before)
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedAvailability = availabilityFilter.value;
    const filteredProducts = (0, _productsJs.products).filter((product)=>{
        const matchesCategory = selectedCategory === "all" || product.type === selectedCategory;
        const matchesAvailability = selectedAvailability === "all" || product.available === selectedAvailability;
        return matchesCategory && matchesAvailability;
    });
    displayProducts(filteredProducts);
}
// Event listeners for filters (same as before)
categoryFilter.addEventListener("change", filterProducts);
availabilityFilter.addEventListener("change", filterProducts);
function emptyCartListener() {
    let cartItems = document.querySelectorAll(".cart-items");
    if (cartItems.length === 0) {
        alert("Please add items to the cart before submitting your request.");
        parent.parent.classList.add("hidden");
    }
}
function setupAddToCartListeners() {
    document.querySelectorAll(".add-to-cart").forEach((button)=>{
        button.addEventListener("click", function() {
            const productId = this.getAttribute("data-product-id");
            addItemToCart(productId);
        });
    });
}
// Function to add item to cart
function addItemToCart(productId) {
    const product = (0, _productsJs.products).find((p)=>p.id == productId); // Find the product by ID
    if (product) {
        // Create cart item HTML using product details
        const cartItemHTML = `
        <div class="card rounded-3 mb-4 cart-item"> 
              <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src="${product.images[0]}" 
                      class="img-fluid rounded-3" alt="${product.name}">
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">${product.name}</p>
                    <p><span class="text-muted">Price: </span>${product.price}</p>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <p><span class="text-muted">Availability: </span>${product.available}</p>
                  </div>
                  
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger remove-from-cart"><i class="fas fa-trash fa-lg"></i></a>
                  </div>

                </div>
                <div class="row mt-3">
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <label for="details-${product.id}">Details / Comments:</label>
                        <textarea id="details-${product.id}" class="form-control details-input" rows="2" placeholder="Please enter details such as size, colours, materials and any questions you may have."></textarea>
                    </div>
                </div>
              </div>
            </div>`;
        // Append the new cart item to the cart
        cartItems.innerHTML += cartItemHTML;
        // Add remove functionality
        setupRemoveFromCartListeners(); // Setup listener for remove button
    }
}
// Function to handle removing an item from the cart
function setupRemoveFromCartListeners() {
    document.querySelectorAll(".remove-from-cart").forEach((button)=>{
        button.addEventListener("click", function() {
            this.closest(".cart-item").remove();
        });
    });
}
// Initial load
window.onload = ()=>{
    displayProducts((0, _productsJs.products)); // Display all products on load
    emptyCartListener();
};

},{"./products.js":"fhZ1z"}],"fhZ1z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "products", ()=>products);
const products = [
    {
        id: 1,
        name: "Black Geometric Cardigan",
        images: [
            "../img/BlackCardiganFront.jpg",
            "../img/BlackCardiganBack.jpg"
        ],
        notes: "",
        available: "Custom Order Only",
        type: "Clothes",
        price: "Priced on Order"
    },
    {
        id: 2,
        name: "Blue Flower Cardigan",
        images: [
            "../img/BlueCardiganFront.jpg",
            "../img/BlueCardiganBack.jpg"
        ],
        notes: "",
        available: "Custom Order Only",
        type: "Clothes",
        price: "Priced on Order"
    },
    {
        id: 3,
        name: "Purple Cardigan",
        images: [
            "../img/PurpleCardiganFront.jpg",
            "../img/PurpleCardiganBack.jpg"
        ],
        notes: "",
        available: "Custom Order Only",
        type: "Clothes",
        price: "Priced on Order"
    },
    {
        id: 4,
        name: "Coloured Geometric Cardigan",
        images: [
            "../img/ColouredCardiganFront.jpg",
            "../img/ColouredCardiganBack.jpg"
        ],
        notes: "",
        available: "Custom Order Only",
        type: "Clothes",
        price: "Priced on Order"
    },
    {
        id: 5,
        name: "Dragon Scale Dice Bag",
        images: [
            "../img/RainbowDragonScaleDiceBagSide.jpg",
            "../img/RainbowDragonScaleDiceBagBottom.jpg"
        ],
        notes: " ~ 8cm x 9cm ,  Upcycled Leather Base",
        available: "Yes!",
        type: "Bags",
        price: "$25"
    },
    {
        id: 6,
        name: "Large Dragon Scale Dice Bag",
        images: [
            "../img/PurpleBluePinkDragonScaleDiceBagSide.jpg"
        ],
        notes: " ~ 8cm x 9cm ,  Upcycled Leather Base",
        available: "Yes!",
        type: "Bags",
        price: "$25"
    },
    {
        id: 7,
        name: "Forget Me Not Earrings",
        images: [
            "../img/AmazonPhotos/ForgetMeNotEarrings.jpg"
        ],
        notes: " Lobster Not Included",
        available: "Yes!",
        type: "Earrings",
        price: "$25"
    },
    {
        id: 8,
        name: "Boo-tiful Earrings",
        images: [
            "../img/AmazonPhotos/Boo-tifulEarrings.jpg"
        ],
        notes: "Glow in the dark Ghost earrings",
        available: "Yes!",
        type: "Earrings",
        price: "$35"
    },
    {
        id: 9,
        name: "Rain Brings Rainbows Earrings",
        images: [
            "../img/AmazonPhotos/RainBringsRainbowsEarrings.jpg"
        ],
        notes: "",
        available: "Yes!",
        type: "Earrings",
        price: "$25"
    },
    {
        id: 10,
        name: "Granny Too Hip to Be Square",
        images: [
            "../img/AmazonPhotos/GrannyTooHipEarrings.jpg"
        ],
        notes: "",
        available: "Yes!",
        type: "Earrings",
        price: "$25"
    },
    {
        id: 11,
        name: "WitchHat",
        images: [
            "../img/AmazonPhotos/WitchHat.jpg",
            "../img/AmazonPhotos/WitchHat1.jpg"
        ],
        notes: "",
        available: "Custom Order Only",
        type: "Clothes",
        price: "Priced on Order"
    },
    {
        id: 12,
        name: "Sun And Moon Earrings",
        images: [
            "../img/AmazonPhotos/SunAndMoonEarrings.jpg",
            "../img/AmazonPhotos/SunAndMoonEarrings1.jpg",
            "../img/AmazonPhotos/SunAndMoonEarrings2.jpg"
        ],
        notes: "",
        available: "Custom Order Only",
        type: "Earrings",
        price: "Priced on Order"
    },
    {
        id: 13,
        name: "Cherry Earrings",
        images: [
            "../img/AmazonPhotos/SingleCherryEarrings.jpg"
        ],
        notes: "",
        available: "Custom Order Only",
        type: "Earrings",
        price: "Priced on Order"
    },
    {
        id: 14,
        name: "Bookmarks",
        images: [
            "../img/AmazonPhotos/RocketBookmark.jpg",
            "../img/AmazonPhotos/RocketBookmark1.jpg",
            "../img/AmazonPhotos/ShipBookmark.jpg",
            "../img/AmazonPhotos/ShipBookmark2.jpg",
            "../img/AmazonPhotos/ShipBookmark3.jpg",
            "../img/AmazonPhotos/JellyBookmark2.jpg",
            "../img/AmazonPhotos/JellyBookmark3.jpg",
            "../img/AmazonPhotos/KittyBookmark.jpg",
            "../img/AmazonPhotos/KittyBookmark2.jpg"
        ],
        notes: "Available as Rocket, Boat, Jellyfish, or Kitty",
        available: "Custom Order Only",
        type: "Decor",
        price: "Priced on Order"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["kzbYw","bDbGG"], "bDbGG", "parcelRequire6d0f")

//# sourceMappingURL=index.fbb3188c.js.map
