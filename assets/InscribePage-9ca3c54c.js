import{_ as X,u as z,s as C,E as M,v as B,x as b,a as k,y as _,F as E,z as q,r as d,o as m,d as I,j as r,w as c,e as h,i as u,t as w,f as p,l as y,p as R,q as D,A as P,g as j,m as H,n as Q}from"./index-d391c2de.js";import{b as W,F as V,C as N,m as G}from"./ContractHelper-526dc384.js";import{C as O}from"./ChainHelper-f4db8498.js";import{U as a}from"./utils-b205d640.js";window.Buffer=window.Buffer||W.Buffer;const J=H(),A=Q(),K={name:"InscribePage",components:{},data(){return{bSignedIn:z.isUserSignedIn(),kMaxBuffLen:1022976,tips:{kQueryFail:"Query fail, please retry later.",kTickAlreadyExists:"Tick already exists.",kTickNotExists:"Tick doesn't exists yet, need deploy first.",kReceiverIsSelf:"Receiver cann't be equal with current login address!",kTickInvalidAmt:"Invalid amt",kInscribeTransactionTip:"Inscribe transaction has been sent.",kTooMuchFeeTip:"Transaction fee maybe very high, need adjust it manually!"},activeTabName:"Text",burnConfig:{default:5e4,deploySTX10:15e6},stx10Info:{action:"mint",tick:"",max:"",lim:"",amt:"",receiver:""},imageInfo:{bLoadImageSucceed:!1,fileType:"",imageUrl:"",width:1,height:1},needBurnStx:5e4,textarea:"",fileName:""}},computed:{inscribeBtnValid(){if(this.activeTabName=="Text")return this.textarea.trim().length>0;if(this.activeTabName=="stx10"){if(this.stx10Info.action=="mint")return/^[a-z]{2,16}$/i.test(a.trimLower(this.stx10Info.tick))&&/^[0-9]{1,}$/.test(this.stx10Info.amt.trim())&&parseInt(this.stx10Info.amt.trim())>0;if(this.stx10Info.action=="transfer")return/^[a-z]{2,16}$/i.test(a.trimLower(this.stx10Info.tick))&&/^[0-9]{1,}$/.test(this.stx10Info.amt.trim())&&parseInt(this.stx10Info.amt.trim())>0&&a.parseAddress(this.stx10Info.receiver)!=null;if(this.stx10Info.action=="deploy")return/^[a-z]{2,16}$/i.test(a.trimLower(this.stx10Info.tick))&&/^[0-9]{1,17}$/.test(this.stx10Info.max.trim())&&parseInt(this.stx10Info.max.trim())>0&&/^[0-9]{1,13}$/.test(this.stx10Info.lim.trim())&&parseInt(this.stx10Info.lim.trim())>0}else if(this.activeTabName=="Image")return this.imageInfo.bLoadImageSucceed;return!1}},async mounted(){},methods:{updateBurnFee(){this.activeTabName!="stx10"?this.needBurnStx=this.burnConfig.default:this.stx10Info.action=="mint"?this.needBurnStx=this.burnConfig.default:this.stx10Info.action=="transfer"?this.needBurnStx=0:this.stx10Info.action=="deploy"&&(this.needBurnStx=this.burnConfig.deploySTX10)},readFile(){let t=this;const i=this.$refs.image.files[0];t.imageInfo.bLoadImageSucceed=!1,V.fromBlob(i).then(n=>{if(!n||!n.mime||!n.mime.startsWith("image/")){t.imageInfo.fileType="none";return}t.imageInfo.fileType=n.mime,t.imageInfo.imageUrl=window.URL.createObjectURL(i);var s=new Image;s.src=t.imageInfo.imageUrl,s.onload=function(){t.imageInfo.bLoadImageSucceed=!0;const e=200;t.imageInfo.width=Math.ceil(s.width*e/s.height),t.imageInfo.height=e}},n=>{a.alert("Error: fromBlob error")})},onClickInscribe(){if(!this.bSignedIn){C();return}const t=M.service({lock:!0,background:"rgba(0, 0, 0, 0.6)"});try{this.activeTabName=="Text"?this.inscribeText():this.activeTabName=="stx10"?this.inscribeSTX10():this.activeTabName=="Image"&&this.inscribeImage()}finally{t.close()}},inscribeText(){const t=this.textarea.trim();if(t.length<=0)return;if(t.length>this.kMaxBuffLen){a.alert(`Max ${this.kMaxBuffLen} bytes(${this.kMaxBuffLen/1024}k), current ${t.length} bytes(${Math.floor(t.length/1024)}k).`);return}let i=this;this.preCheckBalance(this.burnConfig.default,null,function(n){if(!n)return;var s=new TextEncoder().encode(t);const e=[B(s)];i.requestInscribe("inscribe_text",e)})},async inscribeSTX10(){const t=a.trimLower(this.stx10Info.tick);this.stx10Info.tick=t;const i=await N.resolveSTX10InfoByTick(t);if(!i){a.alert(this.tips.kQueryFail);return}if(this.stx10Info.action=="mint"){if(i.block==0){a.alert(this.tips.kTickNotExists);return}if(i.apply==i.max){a.alert("Tick has been minted out!");return}const n=BigInt(this.stx10Info.amt),s=i.max-i.supply,e=i.lim<s?i.lim:s;if(n<=0||n>e){e>1?a.alert(`Invalid amt, should from 1 to ${e}`):a.alert("Invalid amt, should be 1");return}let o=this;this.preCheckBalance(this.burnConfig.default,null,function(f){if(!f)return;const g=[b(`{"p":"stx10","op":"mint","tick":"${t}","amt":"${n}"}`),b(t),k(n)];o.requestInscribe("inscribe_mint_stx10",g)})}else if(this.stx10Info.action=="transfer"){if(this.stx10Info.receiver=this.stx10Info.receiver.trim(),i.block==0){a.alert(this.tips.kTickNotExists);return}const n=BigInt(this.stx10Info.amt);if(n<=0){a.alert(this.tips.kTickInvalidAmt);return}const s=await N.loadSTX10Balance(t,_());if(n>s){a.alert(`amt exceeds balance(${s})`);return}if(this.stx10Info.receiver.toLocaleLowerCase()==_().toLocaleLowerCase()){a.alert(this.tips.kReceiverIsSelf);return}const e=a.parseAddress(this.stx10Info.receiver);if(!e){a.alert("Invalid receiver");return}const o=[b(`{"p":"stx10","op":"transfer","tick":"${t}","amt":"${n}"}`),e,b(t),k(n)];this.requestInscribe("inscribe_transfer_stx10",o)}else if(this.stx10Info.action=="deploy"){if(i.block!=0){a.alert(this.tips.kTickAlreadyExists);return}const n=BigInt(this.stx10Info.max);if(n<=0||n>10000000000000000n){a.alert("max should between 1-10000000000000000");return}const s=BigInt(this.stx10Info.lim);if(s<=0){a.alert("Invalid lim");return}if(n/s<20000n){a.alert(`max/lim should >= 20000, currently max(${n})/lim(${s}) is ${n/s}.`);return}let e=this;this.preCheckBalance(this.burnConfig.deploySTX10,null,function(o){if(!o)return;const f=[b(`{"p":"stx10","op":"deploy","tick":"${t}","max":"${n}","lim":"${s}"}`),b(t),k(n),k(s)];e.requestInscribe("inscribe_deploy_stx10",f)})}},async inscribeImage(){const t=this.$refs.image.files[0];V.fromBlob(t).then(i=>{if(!i||!i.mime){alert("Invalid image");return}const n=new FileReader;let s=this;n.onload=async function(){var e=new Uint8Array(n.result);if(e.length>1022976){a.alert(`Max 1022976 bytes(999k), current image is ${e.length} bytes(${Math.floor(e.length/1024)}k).`);return}s.preCheckBalance(s.burnConfig.default,"image",function(o){if(!o)return;const f=[b(i.mime),B(e)];s.requestInscribe("inscribe_misc",f)})},n.readAsArrayBuffer(t)},i=>{alert("From fromBlob error")})},async preCheckBalance(t,i,n){const s=await O.getAccountBalance(_());if(s<t+5e3){a.alert(`Need burn ${t/1e6} STX, balance unenough!`),n(!1);return}let e=null;i=="image"?(e=`Need burn ${t/1e6} STX, balance is ${s/1e6} STX, make sure fee less than ${(s-t)/1e6} STX!`,s>=5e6&&(e=e+" Double check your fee!")):s<t+1e7&&(e=`Need burn ${t/1e6} STX, balance is ${s/1e6} STX, make sure fee less than ${(s-t)/1e6} STX!`),e?this.$confirm(e,"Attention",{confirmButtonText:"Got it",cancelButtonText:"Cancel",type:"warning"}).then(()=>{n(!0)}).catch(()=>{n(!1)}):n(!0)},async requestInscribe(t,i){let n=[];this.needBurnStx>0&&n.push(G(_(),E.LessEqual,this.needBurnStx));const s={contractAddress:A.defaultContractAddress,contractName:A.inscriptionsContract.name,functionName:t,functionArgs:i,network:J,appDetails:P(),postConditions:n,onFinish:e=>{a.alert(this.tips.kInscribeTransactionTip+` <a style="color:white" href="https://explorer.hiro.so/txid/${e.txId}?chain=${j()}" target="_blank">Visit transaction.</a>`)}};q(s)},onClickSignIn(){C()},onClickTest(){}}},v=t=>(R("data-v-b1958042"),t=t(),D(),t),Y={id:"main"},Z=v(()=>h("div",{id:"title"},"Inscribe",-1)),$={id:"chooseFile",class:"tabInner"},ee=["disabled"],te={key:0,id:"imagePreview"},ie=["src","width","height"],ne={id:"inscribeArea"},se={key:0},ae={key:0},re={key:1,id:"burnTip"},oe={key:2},le={key:3,id:"imageWarn"},ce=v(()=>h("legend",null,"Warning",-1)),fe=v(()=>h("div",null,"1. Image size limit is 999k, but Leather/Xverse wallet may not respond when size is bigger than 600k.",-1));function me(t,i,n,s,e,o){const f=d("el-input"),g=d("el-tab-pane"),T=d("el-radio"),L=d("el-radio-group"),x=d("el-form-item"),F=d("el-form"),U=d("el-tabs"),S=d("el-button");return m(),I("div",Y,[Z,r(U,{modelValue:e.activeTabName,"onUpdate:modelValue":i[8]||(i[8]=l=>e.activeTabName=l),size:"large",onTabChange:o.updateBurnFee},{default:c(()=>[r(g,{label:"Text",name:"Text"},{default:c(()=>[r(f,{class:"tabInner",disabled:!e.bSignedIn,modelValue:e.textarea,"onUpdate:modelValue":i[0]||(i[0]=l=>e.textarea=l),rows:10,type:"textarea",placeholder:"content"},null,8,["disabled","modelValue"])]),_:1}),r(g,{label:"Image",name:"Image"},{default:c(()=>[h("div",$,[h("input",{disabled:!e.bSignedIn,type:"file",ref:"image",onChange:i[1]||(i[1]=l=>o.readFile())},null,40,ee),e.imageInfo.bLoadImageSucceed?(m(),I("div",te,[h("img",{src:e.imageInfo.imageUrl,width:e.imageInfo.width,height:e.imageInfo.height,alt:""},null,8,ie)])):u("",!0)])]),_:1}),r(g,{label:"stx10",name:"stx10"},{default:c(()=>[r(L,{modelValue:e.stx10Info.action,"onUpdate:modelValue":i[2]||(i[2]=l=>e.stx10Info.action=l),class:"tabInner",disabled:!e.bSignedIn,onChange:o.updateBurnFee},{default:c(()=>[r(T,{label:"mint",size:"large"},{default:c(()=>[p("Mint")]),_:1}),r(T,{label:"transfer",size:"large"},{default:c(()=>[p("Transfer")]),_:1}),r(T,{label:"deploy",size:"large"},{default:c(()=>[p("Deploy")]),_:1})]),_:1},8,["modelValue","disabled","onChange"]),r(F,{model:e.stx10Info,"label-width":"120px",class:"tabInner",size:"large",disabled:!e.bSignedIn},{default:c(()=>[r(x,{label:"tick"},{default:c(()=>[r(f,{modelValue:e.stx10Info.tick,"onUpdate:modelValue":i[3]||(i[3]=l=>e.stx10Info.tick=l),placeholder:"a-z, length from 2 to 16",maxlength:"16"},null,8,["modelValue"])]),_:1}),e.stx10Info.action=="deploy"?(m(),y(x,{key:0,label:"max"},{default:c(()=>[r(f,{modelValue:e.stx10Info.max,"onUpdate:modelValue":i[4]||(i[4]=l=>e.stx10Info.max=l),placeholder:"",maxlength:"17"},null,8,["modelValue"])]),_:1})):u("",!0),e.stx10Info.action=="deploy"?(m(),y(x,{key:1,label:"lim"},{default:c(()=>[r(f,{modelValue:e.stx10Info.lim,"onUpdate:modelValue":i[5]||(i[5]=l=>e.stx10Info.lim=l),placeholder:"",maxlength:"13"},null,8,["modelValue"])]),_:1})):u("",!0),e.stx10Info.action!="deploy"?(m(),y(x,{key:2,label:"amt"},{default:c(()=>[r(f,{modelValue:e.stx10Info.amt,"onUpdate:modelValue":i[6]||(i[6]=l=>e.stx10Info.amt=l),placeholder:""},null,8,["modelValue"])]),_:1})):u("",!0),e.stx10Info.action=="transfer"?(m(),y(x,{key:3,label:"receiver"},{default:c(()=>[r(f,{modelValue:e.stx10Info.receiver,"onUpdate:modelValue":i[7]||(i[7]=l=>e.stx10Info.receiver=l),placeholder:""},null,8,["modelValue"])]),_:1})):u("",!0)]),_:1},8,["model","disabled"])]),_:1})]),_:1},8,["modelValue","onTabChange"]),h("div",ne,[e.bSignedIn?(m(),I("div",se,[r(S,{disabled:!o.inscribeBtnValid,type:"primary",size:"large",onClick:o.onClickInscribe},{default:c(()=>[p(" Inscribe "),e.needBurnStx>0?(m(),I("span",ae,"("+w(e.needBurnStx/1e6)+" STX)",1)):u("",!0)]),_:1},8,["disabled","onClick"])])):u("",!0),e.bSignedIn&&o.inscribeBtnValid&&e.needBurnStx>0?(m(),I("div",re,"(Inscribe fee is burned)")):u("",!0),e.bSignedIn?u("",!0):(m(),I("div",oe,[r(S,{type:"primary",size:"large",onClick:o.onClickSignIn},{default:c(()=>[p("Sign in to inscribe")]),_:1},8,["onClick"])])),e.activeTabName=="Image"&&o.inscribeBtnValid?(m(),I("fieldset",le,[ce,fe,h("div",null,"2. "+w(e.tips.kTooMuchFeeTip),1)])):u("",!0)])])}const Ie=X(K,[["render",me],["__scopeId","data-v-b1958042"]]);export{Ie as default};
