import{_ as X,z,U as s,A as V,E as M,B as N,C as k,u as v,D as A,G as q,H as R,a as b,o as u,c as p,e as a,w as l,b as f,f as m,t as D,m as h,q as H,s as S,p as W,g as O,I as P,i as j,v as Q,x as G}from"./index-a98134a3.js";import{b as J,F as w,C as U,m as K}from"./ContractHelper-80585d04.js";import{C as Y}from"./ChainHelper-05eb04db.js";window.Buffer=window.Buffer||J.Buffer;const Z=Q(),F=G(),$={name:"InscribePage",components:{},data(){return{bSignedIn:z.isUserSignedIn(),kMaxBuffLen:1022976,kAudioNameLen:64,kAudioDescLen:64,tips:{kQueryFail:"Query fail, please retry later.",kTickAlreadyExists:"Tick already exists.",kTickNotExists:"Tick doesn't exists yet, need deploy first.",kReceiverIsSelf:"Receiver cann't be equal with current login address!",kTickInvalidAmt:"Invalid amt",kInscribeTransactionTip:"Inscribe transaction has been sent.",kTooMuchFeeTip:"Transaction fee maybe very high, need adjust it manually!"},activeTabName:"Text",burnConfig:{default:5e4,deploySTX10:15e6},stx10Info:{action:"mint",tick:"",max:"",lim:"",amt:"",receiver:""},imageInfo:{bLoadImageSucceed:!1,fileType:"",imageUrl:"",width:1,height:1,originWidth:0,originHeight:0},audioInfo:{bLoadSucceed:!1,fileType:"",audioUrl:"",audioName:"",audioDesc:""},needBurnStx:5e4,textarea:"",fileName:""}},computed:{inscribeBtnValid(){if(this.activeTabName=="Text")return this.textarea.trim().length>0;if(this.activeTabName=="stx10"){if(this.stx10Info.action=="mint")return/^[a-z]{2,16}$/i.test(s.trimLower(this.stx10Info.tick))&&/^[0-9]{1,}$/.test(this.stx10Info.amt.trim())&&parseInt(this.stx10Info.amt.trim())>0;if(this.stx10Info.action=="transfer")return/^[a-z]{2,16}$/i.test(s.trimLower(this.stx10Info.tick))&&/^[0-9]{1,}$/.test(this.stx10Info.amt.trim())&&parseInt(this.stx10Info.amt.trim())>0&&s.parseAddress(this.stx10Info.receiver)!=null;if(this.stx10Info.action=="deploy")return/^[a-z]{2,16}$/i.test(s.trimLower(this.stx10Info.tick))&&/^[0-9]{1,17}$/.test(this.stx10Info.max.trim())&&parseInt(this.stx10Info.max.trim())>0&&/^[0-9]{1,13}$/.test(this.stx10Info.lim.trim())&&parseInt(this.stx10Info.lim.trim())>0}else{if(this.activeTabName=="Image")return this.imageInfo.bLoadImageSucceed;if(this.activeTabName=="Audio")return this.audioInfo.bLoadSucceed&&this.audioInfo.audioName.trim().length>0}return!1}},async mounted(){},methods:{updateBurnFee(){this.activeTabName!="stx10"?this.needBurnStx=this.burnConfig.default:this.stx10Info.action=="mint"?this.needBurnStx=this.burnConfig.default:this.stx10Info.action=="transfer"?this.needBurnStx=0:this.stx10Info.action=="deploy"&&(this.needBurnStx=this.burnConfig.deploySTX10)},readImageFile(){let i=this;const n=this.$refs.image.files[0];i.imageInfo.bLoadImageSucceed=!1,w.fromBlob(n).then(o=>{if(!o||!o.mime||!o.mime.startsWith("image/")){i.imageInfo.fileType="none";return}i.imageInfo.fileType=o.mime,i.imageInfo.imageUrl=window.URL.createObjectURL(n);var t=new Image;t.src=i.imageInfo.imageUrl,t.onload=function(){i.imageInfo.bLoadImageSucceed=!0;const e=200;i.imageInfo.originWidth=t.width,i.imageInfo.originHeight=t.height,i.imageInfo.width=Math.ceil(t.width*e/t.height),i.imageInfo.height=e}},o=>{s.alert("Error: fromBlob error")})},readAudioFile(){let i=this;const n=this.$refs.audio.files[0];i.audioInfo.bLoadSucceed=!1,w.fromBlob(n).then(o=>{if(!o||!o.mime||!o.mime.startsWith("audio/")){i.audioInfo.fileType="none";return}i.audioInfo.fileType=o.mime,i.audioInfo.audioUrl=window.URL.createObjectURL(n),i.audioInfo.bLoadSucceed=!0},o=>{s.alert("Error: fromBlob error")})},onClickInscribe(){if(!this.bSignedIn){V();return}const i=M.service({lock:!0,background:"rgba(0, 0, 0, 0.6)"});try{this.activeTabName=="Text"?this.inscribeText():this.activeTabName=="stx10"?this.inscribeSTX10():this.activeTabName=="Image"?this.inscribeImage():this.activeTabName=="Audio"&&this.inscribeAudio()}finally{i.close()}},inscribeText(){const i=this.textarea.trim();if(i.length<=0)return;if(i.indexOf('"op":"mint"')!=-1||i.indexOf('"op":"deploy"')!=-1||i.indexOf('"op":"transfer"')!=-1){s.alert("For token operations, please goto the stx10 tab.");return}if(i.length>this.kMaxBuffLen){s.alert(`Max ${this.kMaxBuffLen} bytes(${this.kMaxBuffLen/1024}k), current ${i.length} bytes(${Math.floor(i.length/1024)}k).`);return}let n=this;this.preCheckBalance(this.burnConfig.default,null,function(o){if(!o)return;var t=new TextEncoder().encode(i);const e=[N(t)];n.requestInscribe("inscribe_text",e)})},async inscribeSTX10(){const i=s.trimLower(this.stx10Info.tick);this.stx10Info.tick=i;const n=await U.resolveSTX10InfoByTick(i);if(!n){s.alert(this.tips.kQueryFail);return}if(this.stx10Info.action=="mint"){if(this.stx10Info.tick=="bns"){s.alert("Sorry, bns doesn't support mint due to historic reason.");return}if(n.block==0){s.alert(this.tips.kTickNotExists);return}if(n.supply==n.max){s.alert("Tick has been minted out!");return}const o=BigInt(this.stx10Info.amt),t=n.max-n.supply,e=n.lim<t?n.lim:t;if(o<=0||o>e){e>1?s.alert(`Invalid amt, should from 1 to ${e}`):s.alert("Invalid amt, should be 1");return}let c=this;this.preCheckBalance(this.burnConfig.default,null,function(r){if(!r)return;const g=[k(`{"p":"stx10","op":"mint","tick":"${i}","amt":"${o}"}`),k(i),v(o)];c.requestInscribe("inscribe_mint_stx10",g)})}else if(this.stx10Info.action=="transfer"){if(this.stx10Info.receiver=this.stx10Info.receiver.trim(),n.block==0){s.alert(this.tips.kTickNotExists);return}const o=BigInt(this.stx10Info.amt);if(o<=0){s.alert(this.tips.kTickInvalidAmt);return}const t=await U.loadSTX10Balance(i,A());if(o>t){s.alert(`amt exceeds balance(${t})`);return}if(this.stx10Info.receiver.toLocaleLowerCase()==A().toLocaleLowerCase()){s.alert(this.tips.kReceiverIsSelf);return}const e=s.parseAddress(this.stx10Info.receiver);if(!e){s.alert("Invalid receiver");return}const c=[k(`{"p":"stx10","op":"transfer","tick":"${i}","amt":"${o}"}`),e,k(i),v(o)];this.requestInscribe("inscribe_transfer_stx10",c)}else if(this.stx10Info.action=="deploy"){if(n.block!=0){s.alert(this.tips.kTickAlreadyExists);return}const o=BigInt(this.stx10Info.max);if(o<=0||o>10000000000000000n){s.alert("max should between 1-10000000000000000");return}const t=BigInt(this.stx10Info.lim);if(t<=0){s.alert("Invalid lim");return}if(o/t<20000n){s.alert(`max/lim should >= 20000, currently max(${o})/lim(${t}) is ${o/t}.`);return}let e=this;this.preCheckBalance(this.burnConfig.deploySTX10,null,function(c){if(!c)return;const r=[k(`{"p":"stx10","op":"deploy","tick":"${i}","max":"${o}","lim":"${t}"}`),k(i),v(o),v(t)];e.requestInscribe("inscribe_deploy_stx10",r)})}},async inscribeImage(){const i=this.$refs.image.files[0];w.fromBlob(i).then(n=>{if(!n||!n.mime){alert("Invalid image");return}const o=new FileReader;let t=this;o.onload=async function(){var e=new Uint8Array(o.result);if(e.length>1022976){s.alert(`Max 1022976 bytes(999k), current image is ${e.length} bytes(${Math.floor(e.length/1024)}k).`);return}t.preCheckBalance(t.burnConfig.default,"image",function(c){if(!c)return;const r=[k(n.mime),N(e)];t.requestInscribe("inscribe_misc",r)})},o.readAsArrayBuffer(i)},n=>{alert("From fromBlob error")})},async inscribeAudio(){const i=this.$refs.audio.files[0];w.fromBlob(i).then(n=>{if(!n||!n.mime){alert("Invalid audio");return}const o=new FileReader;let t=this;o.onload=async function(){var e=new Uint8Array(o.result);if(e.length>1022976-t.kAudioNameLen-t.kAudioDescLen){s.alert(`Max ${1022976-t.kAudioNameLen-t.kAudioDescLen} bytes, current audio is ${e.length} bytes.`);return}t.audioInfo.audioName=t.audioInfo.audioName.trim();let c=t.audioInfo.audioName;{var r=new TextEncoder().encode(c);if(r.length>t.kAudioNameLen){s.alert(`Name too long, shall less thant ${t.kAudioNameLen} bytes, currently ${r.length} bytes.`);return}r.length<t.kAudioNameLen&&(c+=" ".repeat(t.kAudioNameLen-r.length))}t.audioInfo.audioDesc=t.audioInfo.audioDesc.trim();let g=t.audioInfo.audioDesc;{var r=new TextEncoder().encode(g);if(r.length>t.kAudioDescLen){s.alert(`Description too long, shall less thant ${t.kAudioDescLen} bytes, currently ${r.length} bytes.`);return}r.length<t.kAudioDescLen&&(g+=" ".repeat(t.kAudioDescLen-r.length))}t.preCheckBalance(t.burnConfig.default,"audio",function(C){if(!C)return;var x=new Uint8Array(e.length+t.kAudioNameLen+t.kAudioDescLen);x.set(e,0);const _=new TextEncoder().encode(c);if(_.length!=t.kAudioNameLen){s.alert("Error: 1001");return}x.set(_,e.length);const T=new TextEncoder().encode(g);if(T.length!=t.kAudioDescLen){s.alert("Error: 1002");return}x.set(T,e.length+t.kAudioNameLen);const I=[k(n.mime),N(x)];t.requestInscribe("inscribe_misc",I)})},o.readAsArrayBuffer(i)},n=>{alert("From fromBlob error")})},async preCheckBalance(i,n,o){const t=await Y.getAccountBalance(A());if(t<i+5e3){s.alert(`Need burn ${i/1e6} STX, balance unenough!`),o(!1);return}let e=null;n=="image"||n=="audio"?(e=`Need burn ${i/1e6} STX, balance is ${t/1e6} STX, make sure fee less than ${(t-i)/1e6} STX!`,t>=5e6&&(e=e+" Double check your fee!")):t<i+1e7&&(e=`Need burn ${i/1e6} STX, balance is ${t/1e6} STX, make sure fee less than ${(t-i)/1e6} STX!`),e?this.$confirm(e,"Attention",{confirmButtonText:"Got it",cancelButtonText:"Cancel",type:"warning"}).then(()=>{o(!0)}).catch(()=>{o(!1)}):o(!0)},async requestInscribe(i,n){let o=[];this.needBurnStx>0&&o.push(K(A(),q.LessEqual,this.needBurnStx));const t={contractAddress:F.defaultContractAddress,contractName:F.inscriptionsContract.name,functionName:i,functionArgs:n,network:Z,appDetails:P(),postConditions:o,onFinish:e=>{s.alert(this.tips.kInscribeTransactionTip+` <a style="color:white" href="https://explorer.hiro.so/txid/${e.txId}?chain=${j()}" target="_blank">Visit transaction.</a>`)}};R(t)},onClickSignIn(){V()},onClickTest(){}}},y=i=>(W("data-v-905c5608"),i=i(),O(),i),ee={id:"main"},te=y(()=>f("div",{id:"title"},"Inscribe",-1)),ie={id:"chooseFile",class:"tabInner"},ne=["disabled"],oe={key:0,id:"tip"},se=y(()=>f("a",{href:"https://tinypng.com",target:"_blank"},"tinypng",-1)),ae={key:0,class:"fileArea"},re=["src","width","height"],le={id:"chooseFile",class:"tabInner"},ce=["disabled"],de={key:0,id:"tip"},ue=y(()=>f("a",{href:"https://www.freeconvert.com/mp3-compressor",target:"_blank"},"FreeConvert",-1)),fe=y(()=>f("a",{href:"https://www.xconvert.com/compress-mp3",target:"_blank"},"XConvert",-1)),me={key:0,class:"fileArea"},he=["src"],ge={id:"inscribeArea"},be={key:0},pe={key:0},Ie={key:1,id:"burnTip"},xe={key:2},ke={key:3,id:"imageWarn"},_e=y(()=>f("legend",null,"Warning",-1)),ye=y(()=>f("div",null,"1. File size limit is 999k, but Leather/Xverse wallet may not respond when size is bigger than 600k.",-1));function Te(i,n,o,t,e,c){const r=b("el-input"),g=b("el-tab-pane"),C=b("router-link"),x=b("el-space"),_=b("el-radio"),T=b("el-radio-group"),I=b("el-form-item"),L=b("el-form"),E=b("el-tabs"),B=b("el-button");return u(),p("div",ee,[te,a(E,{modelValue:e.activeTabName,"onUpdate:modelValue":n[11]||(n[11]=d=>e.activeTabName=d),size:"large",onTabChange:c.updateBurnFee},{default:l(()=>[a(g,{label:"Text",name:"Text"},{default:l(()=>[a(r,{class:"tabInner",disabled:!e.bSignedIn,modelValue:e.textarea,"onUpdate:modelValue":n[0]||(n[0]=d=>e.textarea=d),rows:10,type:"textarea",placeholder:"content"},null,8,["disabled","modelValue"])]),_:1}),a(g,{label:"Image",name:"Image"},{default:l(()=>[f("div",ie,[a(x,{direction:"vertical",alignment:"start"},{default:l(()=>[f("input",{disabled:!e.bSignedIn,type:"file",ref:"image",onChange:n[1]||(n[1]=d=>c.readImageFile())},null,40,ne),e.imageInfo.fileType==""?(u(),p("div",oe,[h(" Tips: can compress image at "),se,h(", can bulk inscribe "),a(C,{to:"/bulk-inscribe",target:"_blank"},{default:l(()=>[h("here.")]),_:1})])):m("",!0)]),_:1}),e.imageInfo.bLoadImageSucceed?(u(),p("div",ae,[f("img",{src:e.imageInfo.imageUrl,width:e.imageInfo.width,height:e.imageInfo.height,class:H({nn:e.imageInfo.originWidth<=64&&e.imageInfo.originHeight<=64&&e.imageInfo.originWidth>0&&e.imageInfo.originHeight>0}),alt:""},null,10,re)])):m("",!0)])]),_:1}),a(g,{label:"stx10",name:"stx10"},{default:l(()=>[a(T,{modelValue:e.stx10Info.action,"onUpdate:modelValue":n[2]||(n[2]=d=>e.stx10Info.action=d),class:"tabInner",disabled:!e.bSignedIn,onChange:c.updateBurnFee},{default:l(()=>[a(_,{label:"mint",size:"large"},{default:l(()=>[h("Mint")]),_:1}),a(_,{label:"transfer",size:"large"},{default:l(()=>[h("Transfer")]),_:1}),a(_,{label:"deploy",size:"large"},{default:l(()=>[h("Deploy")]),_:1})]),_:1},8,["modelValue","disabled","onChange"]),a(L,{model:e.stx10Info,"label-width":"120px",class:"tabInner",size:"large",disabled:!e.bSignedIn},{default:l(()=>[a(I,{label:"tick"},{default:l(()=>[a(r,{modelValue:e.stx10Info.tick,"onUpdate:modelValue":n[3]||(n[3]=d=>e.stx10Info.tick=d),placeholder:"a-z, length from 2 to 16",maxlength:"16"},null,8,["modelValue"])]),_:1}),e.stx10Info.action=="deploy"?(u(),S(I,{key:0,label:"max"},{default:l(()=>[a(r,{modelValue:e.stx10Info.max,"onUpdate:modelValue":n[4]||(n[4]=d=>e.stx10Info.max=d),placeholder:"",maxlength:"17"},null,8,["modelValue"])]),_:1})):m("",!0),e.stx10Info.action=="deploy"?(u(),S(I,{key:1,label:"lim"},{default:l(()=>[a(r,{modelValue:e.stx10Info.lim,"onUpdate:modelValue":n[5]||(n[5]=d=>e.stx10Info.lim=d),placeholder:"",maxlength:"13"},null,8,["modelValue"])]),_:1})):m("",!0),e.stx10Info.action!="deploy"?(u(),S(I,{key:2,label:"amt"},{default:l(()=>[a(r,{modelValue:e.stx10Info.amt,"onUpdate:modelValue":n[6]||(n[6]=d=>e.stx10Info.amt=d),placeholder:""},null,8,["modelValue"])]),_:1})):m("",!0),e.stx10Info.action=="transfer"?(u(),S(I,{key:3,label:"receiver"},{default:l(()=>[a(r,{modelValue:e.stx10Info.receiver,"onUpdate:modelValue":n[7]||(n[7]=d=>e.stx10Info.receiver=d),placeholder:""},null,8,["modelValue"])]),_:1})):m("",!0)]),_:1},8,["model","disabled"])]),_:1}),a(g,{label:"Audio",name:"Audio"},{default:l(()=>[f("div",le,[a(x,{direction:"vertical",alignment:"start"},{default:l(()=>[f("input",{disabled:!e.bSignedIn,type:"file",ref:"audio",onChange:n[8]||(n[8]=d=>c.readAudioFile())},null,40,ce),e.audioInfo.fileType==""?(u(),p("div",de,[h(" Tips: can compress audio at "),ue,h(" or "),fe,h(". ")])):m("",!0)]),_:1}),e.audioInfo.bLoadSucceed?(u(),p("div",me,[a(x,{direction:"vertical",alignment:"center"},{default:l(()=>[f("audio",{controls:"",src:e.audioInfo.audioUrl},null,8,he),a(L,{"label-width":"200px",style:{"margin-top":"8px"}},{default:l(()=>[a(I,{label:"Name"},{default:l(()=>[a(r,{modelValue:e.audioInfo.audioName,"onUpdate:modelValue":n[9]||(n[9]=d=>e.audioInfo.audioName=d),type:"textarea",rows:2,style:{width:"500px"},maxlength:e.kAudioNameLen,placeholder:"Max "+e.kAudioNameLen+" characters"},null,8,["modelValue","maxlength","placeholder"])]),_:1}),a(I,{label:"Description"},{default:l(()=>[a(r,{modelValue:e.audioInfo.audioDesc,"onUpdate:modelValue":n[10]||(n[10]=d=>e.audioInfo.audioDesc=d),type:"textarea",rows:2,style:{width:"500px"},maxlength:e.kAudioDescLen,placeholder:"Optional, max "+e.kAudioDescLen+" characters"},null,8,["modelValue","maxlength","placeholder"])]),_:1})]),_:1})]),_:1})])):m("",!0)])]),_:1})]),_:1},8,["modelValue","onTabChange"]),f("div",ge,[e.bSignedIn?(u(),p("div",be,[a(B,{disabled:!c.inscribeBtnValid,type:"primary",size:"large",onClick:c.onClickInscribe},{default:l(()=>[h(" Inscribe "),e.needBurnStx>0?(u(),p("span",pe,"("+D(e.needBurnStx/1e6)+" STX)",1)):m("",!0)]),_:1},8,["disabled","onClick"])])):m("",!0),e.bSignedIn&&c.inscribeBtnValid&&e.needBurnStx>0?(u(),p("div",Ie,"(Inscribe fee is burned)")):m("",!0),e.bSignedIn?m("",!0):(u(),p("div",xe,[a(B,{type:"primary",size:"large",onClick:c.onClickSignIn},{default:l(()=>[h("Sign in to inscribe")]),_:1},8,["onClick"])])),e.activeTabName=="Image"&&c.inscribeBtnValid||e.activeTabName=="Audio"&&e.audioInfo.bLoadSucceed?(u(),p("fieldset",ke,[_e,ye,f("div",null,"2. "+D(e.tips.kTooMuchFeeTip),1)])):m("",!0)])])}const we=X($,[["render",Te],["__scopeId","data-v-905c5608"]]);export{we as default};
