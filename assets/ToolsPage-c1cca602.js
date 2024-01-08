import{a as U,U as d,B as P,H as w,j as W,u as T,k as B,E as z,i as L,M as E,L as M,N as Q,J as j,b as p,o as h,c as D,f as n,w as o,s as v,g as _,v as O,x as J,m as q,d as b,t as N,q as K,p as G,h as X,K as Y}from"./index-582676ea.js";import{c as F,C as Z,d as $}from"./ContractHelper-1314e63e.js";import{C as V}from"./ChainHelper-7da84120.js";const R=O(),y=J(),ee={name:"ToolsPage",components:{},data(){return{u:d,bSignedIn:P.isUserSignedIn(),kFixImageHeight:128,defaultReadonlyAddress:y.defaultContractAddress,activeTabName:"query-holdings",queryHoldingData:{address:"",resolvedAddress:"",nftName:"inscription",state:0,pageLimit:25,total:0,curPage:1,resultCache:{},tableData:[],bInRequestEncounterFail:!1,startLoadAllFlag:0,curInRequestCount:0,kMaxInRequestCount:10,bClickQueryHoldingsFlag:!1},tranInsData:{tokenId:"",address:""}}},computed:{queryHoldingsBtnValid(){return this.queryHoldingData.address.trim().length>0},transferInsBtnValid(){return this.bSignedIn&&/^[0-9]{1,16}$/.test(this.tranInsData.tokenId.trim())&&this.tranInsData.address.trim().length>0}},async mounted(){},methods:{onClickFillAddress(){this.queryHoldingData.address=w()},async onClickQueryHoldings(){this.queryHoldingData.bClickQueryHoldingsFlag=!0,this.queryHoldingData.state=1;const a=await V.resolveAddress(this.queryHoldingData.address.trim());if(a.ret!=0){this.queryHoldingData.state=0,d.alert(a.errMsg);return}if(!d.parseAddress(a.value)){this.queryHoldingData.state=0,d.alertInvalidAddress();return}this.queryHoldingData.resolvedAddress=a.value,this.queryHoldingPage(1,!0)},async queryHoldingPage(a,i){this.queryHoldingData.state=1;const l=(a-1)*this.queryHoldingData.pageLimit,m=await V.getNFTHoldings(y.defaultContractAddress,y.inscriptionsContract.name,this.queryHoldingData.nftName,this.queryHoldingData.resolvedAddress,this.queryHoldingData.pageLimit,l);this.queryHoldingData.total=m.total,this.queryHoldingData.offset=m.offset,this.queryHoldingData.state=2,this.queryHoldingData.tableData.splice(0,this.queryHoldingData.tableData.length);let e=!1;for(const s of m.results){const r=s.value.repr.substring(1),c=this.queryHoldingData.resultCache[r];c?this.queryHoldingData.tableData.push(c):(e=!0,this.queryHoldingData.tableData.push({id:r,loadingState:0,block:0,dataType:"",dataLength:"",optInfo:{imageUrl:"",imageWidth:"",originImageWidth:0,originImageHeight:0,text:""}}))}(i||e&&this.queryHoldingData.total<=this.queryHoldingData.pageLimit)&&this.loadAllContent()},onClickChangePage(){this.queryHoldingPage(this.queryHoldingData.curPage)},async loadAllContent(){try{await this.realLoadAllContent()}finally{}},async realLoadAllContent(){this.bInRequestEncounterFail=!1,this.queryHoldingData.startLoadAllFlag++,this.queryHoldingData.curInRequestCount=0;let a=0;for(;!this.bInRequestEncounterFail&&a<this.queryHoldingData.tableData.length;)this.queryHoldingData.curInRequestCount<this.queryHoldingData.kMaxInRequestCount?(this.queryHoldingData.curInRequestCount++,this.loadInscription(this.queryHoldingData.startLoadAllFlag,a,this.queryHoldingData.tableData[a].id),++a):await new Promise(i=>setTimeout(i,1e3))},async loadInscription(a,i,l){const m=W(T(l));let e=this.queryHoldingData.tableData[i];try{e.loadingState=1;const r=await fetch(`${R.coreApiUrl}/v2/map_entry/${y.defaultContractAddress}/${y.inscriptionsContract.name}/map_inscriptions`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},proof:0,body:JSON.stringify(m)});if(a!=this.queryHoldingData.startLoadAllFlag)return;if(r.status==200){const c=await r.json(),u=B(c.data).value.data,x=Number(F(u.block)),f=F(u.type),H=u.payload.buffer,A=H.length;let g={imageUrl:null,text:null},C=!1;if(f.startsWith("image/")){g.imageUrl=window.URL.createObjectURL(new Blob([H],{type:f})),C=!0;var s=new Image;s.src=g.imageUrl;let k=this;s.onload=function(){a==k.queryHoldingData.startLoadAllFlag&&(e.loadingState=2,e.optInfo.originImageWidth=s.width,e.optInfo.originImageHeight=s.height,e.optInfo.imageWidth=Math.ceil(s.width*k.kFixImageHeight/s.height))}}else(f=="text"||f=="deploy-stx10")&&(g.text=new TextDecoder().decode(u.payload.buffer));C||(e.loadingState=2),e.id=l,e.block=x,e.dataType=f,e.dataLength=A,e.owner="",e.optInfo.imageUrl=g.imageUrl,e.optInfo.imageWidth=g.imageWidth,e.optInfo.originImageWidth=g.originImageWidth,e.optInfo.originImageHeight=g.originImageHeight,e.optInfo.text=g.text,this.queryHoldingData.resultCache[l]=e,this.queryHoldingData.curInRequestCount=Math.max(this.queryHoldingData.curInRequestCount-1,0)}else this.bInRequestEncounterFail=!0,d.alert(`Request server fail, tokenId=${l}, code=${r.status}, please try again 1 minute later.`)}catch(r){console.err(`loadInscription fail:${a},tableIndex:${i},id:${l},err:${r}`),this.bInRequestEncounterFail=!0,d.alert(`Request server fail, tokenId=${l}, please try again 1 minute later.`)}finally{e.loadingState=2}},async onClickTransferInscription(){const a=z.service({lock:!0,background:"rgba(0, 0, 0, 0.6)"});try{await this.readyTransferInscription()}finally{a.close()}},async readyTransferInscription(){const a=this.tranInsData.tokenId.trim(),i=await V.resolveAddress(this.tranInsData.address.trim());if(i.ret!=0){d.alert(i.errMsg);return}if(!d.parseAddress(i.value)){d.alertInvalidAddress();return}const l=await Z.queryNFTOwner(a);if(!l){d.alert(`Inscription #${a} not exist!`);return}if(l.toLowerCase()!=w().toLowerCase()){d.alert(`No permission! Owner of Inscription #${a} is <a style="color:white" href="https://explorer.hiro.so/address/${l}?chain=${L()}" target="_blank">${l}</a>`);return}if(l.toLowerCase()==i.value.toLowerCase()){d.alert("Receiver cann't be equal with current login address!");return}const m=[T(a),E(w()),d.parseAddress(i.value)],e="inscription",s=T(a),r=M(y.defaultContractAddress,y.inscriptionsContract.name,e),c=$(w(),Q.Sends,r,s),I={contractAddress:y.defaultContractAddress,contractName:y.inscriptionsContract.name,functionName:"transfer",functionArgs:m,network:R,appDetails:Y(),postConditions:[c],onFinish:u=>{d.alert(`Transfer transaction has been sent. <a style="color:white" href="https://explorer.hiro.so/txid/${u.txId}?chain=${L()}" target="_blank">Visit transaction.</a>`)}};j(I)}}},te=a=>(G("data-v-a8d28342"),a=a(),X(),a),ae={id:"main"},ne=te(()=>b("div",{id:"title"},"Tools",-1)),oe={id:"tip"},ie={key:0,style:{margin:"50px auto",width:"800px"}},se={class:"queryResultTxt"},le={key:0},re={key:1},de={key:2},ue=["src","width","height"],ge={key:3},ce={class:"queryResultTxt"};function pe(a,i,l,m,e,s){const r=p("el-input"),c=p("el-col"),I=p("el-button"),u=p("el-form-item"),x=p("router-link"),f=p("el-form"),H=p("el-tab-pane"),A=p("el-tabs"),g=p("el-table-column"),C=p("el-table"),k=p("el-pagination");return h(),D("div",ae,[ne,n(A,{modelValue:e.activeTabName,"onUpdate:modelValue":i[3]||(i[3]=t=>e.activeTabName=t),size:"large"},{default:o(()=>[n(H,{label:"Query holdings",name:"query-holdings"},{default:o(()=>[n(f,{model:e.queryHoldingData,"label-width":"100px",class:"tabInner",size:"large"},{default:o(()=>[n(u,{label:"address"},{default:o(()=>[n(c,{span:14},{default:o(()=>[n(r,{modelValue:e.queryHoldingData.address,"onUpdate:modelValue":i[0]||(i[0]=t=>e.queryHoldingData.address=t),placeholder:"Address or BNS name"},null,8,["modelValue"])]),_:1}),e.bSignedIn?(h(),v(c,{key:0,span:4},{default:o(()=>[n(I,{style:{"margin-left":"4px"},type:"primary",plain:"",onClick:s.onClickFillAddress},{default:o(()=>[q("Fill current account")]),_:1},8,["onClick"])]),_:1})):_("",!0)]),_:1}),n(u,null,{default:o(()=>[n(I,{type:"primary",onClick:s.onClickQueryHoldings,loading:e.queryHoldingData.state==1,disabled:!s.queryHoldingsBtnValid},{default:o(()=>[q("Query")]),_:1},8,["onClick","loading","disabled"])]),_:1}),e.queryHoldingData.bClickQueryHoldingsFlag?_("",!0):(h(),v(u,{key:0},{default:o(()=>[b("div",oe,[q("Tips: can query stx10 balance in "),n(x,{id:"tipLink",to:{path:"/stx10",query:{tab:"query-balance"}},replace:""},{default:o(()=>[q("stx10")]),_:1}),q(" menu.")])]),_:1}))]),_:1},8,["model"])]),_:1}),n(H,{label:"Transfer inscription",name:"transfer-inscription"},{default:o(()=>[n(f,{model:e.tranInsData,"label-width":"100px",class:"tabInner",size:"large"},{default:o(()=>[n(u,{label:"inscription id"},{default:o(()=>[n(c,{span:14},{default:o(()=>[n(r,{modelValue:e.tranInsData.tokenId,"onUpdate:modelValue":i[1]||(i[1]=t=>e.tranInsData.tokenId=t),placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),n(u,{label:"address"},{default:o(()=>[n(c,{span:14},{default:o(()=>[n(r,{modelValue:e.tranInsData.address,"onUpdate:modelValue":i[2]||(i[2]=t=>e.tranInsData.address=t),placeholder:"Address or BNS name"},null,8,["modelValue"])]),_:1})]),_:1}),n(u,null,{default:o(()=>[n(I,{type:"primary",onClick:s.onClickTransferInscription,disabled:!s.transferInsBtnValid},{default:o(()=>[q(N(e.bSignedIn?"Transfer":"Sign in to transfer"),1)]),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"]),e.activeTabName=="query-holdings"&&e.queryHoldingData.state==2?(h(),D("div",ie,[e.queryHoldingData.total>e.queryHoldingData.pageLimit?(h(),v(I,{key:0,type:"primary",size:"large",onClick:s.loadAllContent},{default:o(()=>[q("Load content")]),_:1},8,["onClick"])):_("",!0),n(C,{size:"small",data:e.queryHoldingData.tableData,"empty-text":"No inscriptions"},{default:o(()=>[n(g,{label:"Inscription #",width:"110"},{default:o(t=>[b("div",se,N(t.row.id),1)]),_:1}),n(g,{label:"Content"},{default:o(t=>[b("div",null,[t.row.loadingState==1?(h(),D("div",le,"loading..")):_("",!0),t.row.loadingState==2&&(t.row.dataType=="text"||t.row.dataType=="deploy-stx10")?(h(),D("div",re,[n(r,{modelValue:t.row.optInfo.text,"onUpdate:modelValue":S=>t.row.optInfo.text=S,readonly:"",type:"textarea",autosize:{minRows:1,maxRows:3},resize:"none"},null,8,["modelValue","onUpdate:modelValue"])])):t.row.loadingState==2&&t.row.dataType.startsWith("image/")?(h(),D("div",de,[b("img",{src:t.row.optInfo.imageUrl,width:t.row.optInfo.imageWidth,height:e.kFixImageHeight,class:K({nn:t.row.optInfo.originImageWidth<=64&&t.row.optInfo.originImageHeight<=64&&t.row.optInfo.originImageWidth>0&&t.row.optInfo.originImageHeight>0}),alt:""},null,10,ue)])):t.row.loadingState==2?(h(),D("div",ge," Not support preview yet. ")):_("",!0)])]),_:1}),n(g,{label:"Content type",width:"150"},{default:o(t=>[b("div",ce,N(t.row.dataType),1)]),_:1})]),_:1},8,["data"]),e.queryHoldingData.state==2&&e.queryHoldingData.total>e.queryHoldingData.pageLimit?(h(),v(k,{key:1,style:{"margin-top":"16px"},layout:"total, prev, pager, next","default-page-size":e.queryHoldingData.pageLimit,"current-page":e.queryHoldingData.curPage,"onUpdate:currentPage":i[4]||(i[4]=t=>e.queryHoldingData.curPage=t),total:e.queryHoldingData.total,onCurrentChange:s.onClickChangePage},null,8,["default-page-size","current-page","total","onCurrentChange"])):_("",!0)])):_("",!0)])}const fe=U(ee,[["render",pe],["__scopeId","data-v-a8d28342"]]);export{fe as default};
