import{H as i,D as l,I as o}from"./index-88f05315.js";const u={alert(t,r){r||(r={}),i.alert(t,r.title,{confirmButtonText:r.btnText?r.btnText:"Ok",dangerouslyUseHTMLString:!0})},buffer2Str(t){t.startsWith("0x")&&(t=t.substr(2));let r="";for(let e=0;e<t.length;e+=2){const n=t.substr(e,2),s=parseInt(n,16);r+=String.fromCharCode(s)}return r},trimLower(t){return t&&t.trim().toLowerCase()},parseAddress(t){if(!t||t.trim().length<=0)return null;try{const r=t.trim().split(".");return r.length==1?l(r[0]):o(r[0],r[1])}catch{return null}}};export{u as U};
