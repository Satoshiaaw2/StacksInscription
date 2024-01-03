import{I as C,J as k}from"./index-85c226a4.js";var _={exports:{}};(function(D,c){var B=typeof self<"u"?self:k,b=function(){function a(){this.fetch=!1,this.DOMException=B.DOMException}return a.prototype=B,new a}();(function(a){(function(f){var u={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function x(e){return e&&DataView.prototype.isPrototypeOf(e)}if(u.arrayBuffer)var R=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],U=ArrayBuffer.isView||function(e){return e&&R.indexOf(Object.prototype.toString.call(e))>-1};function y(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function g(e){return typeof e!="string"&&(e=String(e)),e}function w(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return u.iterable&&(t[Symbol.iterator]=function(){return t}),t}function i(e){this.map={},e instanceof i?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}i.prototype.append=function(e,t){e=y(e),t=g(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},i.prototype.delete=function(e){delete this.map[y(e)]},i.prototype.get=function(e){return e=y(e),this.has(e)?this.map[e]:null},i.prototype.has=function(e){return this.map.hasOwnProperty(y(e))},i.prototype.set=function(e,t){this.map[y(e)]=g(t)},i.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},i.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),w(e)},i.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),w(e)},i.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),w(e)},u.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);function v(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function T(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function S(e){var t=new FileReader,r=T(t);return t.readAsArrayBuffer(e),r}function j(e){var t=new FileReader,r=T(t);return t.readAsText(e),r}function F(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}function O(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function P(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:u.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:u.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u.arrayBuffer&&u.blob&&x(e)?(this._bodyArrayBuffer=O(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||U(e))?this._bodyArrayBuffer=O(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(S)}),this.text=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return j(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(F(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(H)}),this.json=function(){return this.text().then(JSON.parse)},this}var I=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function M(e){var t=e.toUpperCase();return I.indexOf(t)>-1?t:e}function l(e,t){t=t||{};var r=t.body;if(e instanceof l){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new i(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new i(t.headers)),this.method=M(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}l.prototype.clone=function(){return new l(this,{body:this._bodyInit})};function H(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var s=r.split("="),n=s.shift().replace(/\+/g," "),o=s.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function q(e){var t=new i,r=e.replace(/\r?\n[\t ]+/g," ");return r.split(/\r?\n/).forEach(function(s){var n=s.split(":"),o=n.shift().trim();if(o){var m=n.join(":").trim();t.append(o,m)}}),t}P.call(l.prototype);function h(e,t){t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new i(t.headers),this.url=t.url||"",this._initBody(e)}P.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var L=[301,302,303,307,308];h.redirect=function(e,t){if(L.indexOf(t)===-1)throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},f.DOMException=a.DOMException;try{new f.DOMException}catch{f.DOMException=function(t,r){this.message=t,this.name=r;var s=Error(t);this.stack=s.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function E(e,t){return new Promise(function(r,s){var n=new l(e,t);if(n.signal&&n.signal.aborted)return s(new f.DOMException("Aborted","AbortError"));var o=new XMLHttpRequest;function m(){o.abort()}o.onload=function(){var p={status:o.status,statusText:o.statusText,headers:q(o.getAllResponseHeaders()||"")};p.url="responseURL"in o?o.responseURL:p.headers.get("X-Request-URL");var A="response"in o?o.response:o.responseText;r(new h(A,p))},o.onerror=function(){s(new TypeError("Network request failed"))},o.ontimeout=function(){s(new TypeError("Network request failed"))},o.onabort=function(){s(new f.DOMException("Aborted","AbortError"))},o.open(n.method,n.url,!0),n.credentials==="include"?o.withCredentials=!0:n.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&u.blob&&(o.responseType="blob"),n.headers.forEach(function(p,A){o.setRequestHeader(A,p)}),n.signal&&(n.signal.addEventListener("abort",m),o.onreadystatechange=function(){o.readyState===4&&n.signal.removeEventListener("abort",m)}),o.send(typeof n._bodyInit>"u"?null:n._bodyInit)})}return E.polyfill=!0,a.fetch||(a.fetch=E,a.Headers=i,a.Request=l,a.Response=h),f.Headers=i,f.Request=l,f.Response=h,f.fetch=E,Object.defineProperty(f,"__esModule",{value:!0}),f})({})})(b),b.fetch.ponyfill=!0,delete b.fetch.polyfill;var d=b;c=d.fetch,c.default=d.fetch,c.fetch=d.fetch,c.Headers=d.Headers,c.Request=d.Request,c.Response=d.Response,D.exports=c})(_,_.exports);var N=_.exports;const V=C(N);export{V as f};
