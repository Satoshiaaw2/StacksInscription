import{_ as U,u as P,y as q,E as A,c as B,a as v,h as E,g as V,D as N,G as z,N as W,z as j,r as c,o as p,d as I,j as n,w as s,l as T,i as b,m as M,n as O,f as x,e as C,t as L,p as Q,q as G,A as J}from"./index-88f05315.js";import{c as F,C as K,a as X}from"./ContractHelper-06a52c12.js";import{C as Y}from"./ChainHelper-4787de2a.js";import{U as y}from"./utils-bf7ba3cc.js";const R=M(),h=O(),Z={name:"ToolsPage",components:{},data(){return{u:y,bSignedIn:P.isUserSignedIn(),kFixImageHeight:128,defaultReadonlyAddress:h.defaultContractAddress,activeTabName:"query-holdings",queryHoldingData:{address:"",nftName:"StacksInscription",state:0,pageLimit:25,total:0,curPage:1,resultCache:{},tableData:[],bInRequestEncounterFail:!1,startLoadAllFlag:0,curInRequestCount:0,kMaxInRequestCount:10},tranInsData:{tokenId:"",address:""}}},computed:{queryHoldingsBtnValid(){return y.parseAddress(this.queryHoldingData.address)!=null},transferInsBtnValid(){return/^[0-9]{1,16}$/.test(this.tranInsData.tokenId.trim())&&y.parseAddress(this.tranInsData.address)!=null}},async mounted(){},methods:{onClickFillAddress(){this.queryHoldingData.address=q()},async onClickQueryHoldings(){this.queryHoldingPage(1,!0)},async queryHoldingPage(a,o){const r=(a-1)*this.queryHoldingData.pageLimit,m=await Y.getNFTHoldings(h.defaultContractAddress,h.inscriptionsContract.name,this.queryHoldingData.nftName,q(),this.queryHoldingData.pageLimit,r);this.queryHoldingData.total=m.total,this.queryHoldingData.offset=m.offset,this.queryHoldingData.state=2,this.queryHoldingData.tableData.splice(0,this.queryHoldingData.tableData.length);let t=!1;for(const l of m.results){const i=l.value.repr.substring(1),d=this.queryHoldingData.resultCache[i];d?this.queryHoldingData.tableData.push(d):(t=!0,this.queryHoldingData.tableData.push({id:i,loadingState:0,block:0,dataType:"",dataLength:"",optInfo:{imageUrl:"",imageWidth:"",text:""}}))}(o||t&&this.queryHoldingData.total<=this.queryHoldingData.pageLimit)&&this.loadAllContent()},onClickChangePage(){this.queryHoldingPage(this.queryHoldingData.curPage)},loadAllContent(){const a=A.service({lock:!0,background:"rgba(0, 0, 0, 0.6)"});try{this.realLoadAllContent()}finally{a.close()}},async realLoadAllContent(){this.bInRequestEncounterFail=!1,this.queryHoldingData.startLoadAllFlag++,this.queryHoldingData.curInRequestCount=0;let a=0;for(;!this.bInRequestEncounterFail&&a<this.queryHoldingData.tableData.length;)++this.queryHoldingData.curInRequestCount<=this.queryHoldingData.kMaxInRequestCount?(this.loadInscription(this.queryHoldingData.startLoadAllFlag,a,this.queryHoldingData.tableData[a].id),++a):await new Promise(o=>setTimeout(o,1e3))},async loadInscription(a,o,r){const m=B(v(r));let t=this.queryHoldingData.tableData[o];try{t.loadingState=1;const i=await fetch(`${R.coreApiUrl}/v2/map_entry/${h.defaultContractAddress}/${h.inscriptionsContract.name}/map_inscriptions`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},proof:0,body:JSON.stringify(m)});if(a!=this.queryHoldingData.startLoadAllFlag)return;if(i.status==200){const d=await i.json(),u=E(d.data).value.data,k=Number(F(u.block)),g=F(u.type),H=u.payload.buffer,D=H.length;let f={imageUrl:null,text:null},w=!1;if(g.startsWith("image/")){f.imageUrl=window.URL.createObjectURL(new Blob([H],{type:g})),w=!0;var l=new Image;l.src=f.imageUrl;let e=this;l.onload=function(){a==e.queryHoldingData.startLoadAllFlag&&(t.loadingState=2,t.optInfo.imageWidth=Math.ceil(l.width*e.kFixImageHeight/l.height))}}else(g=="text"||g=="deploy-src-20"||g=="sins")&&(f.text=new TextDecoder().decode(u.payload.buffer));w||(t.loadingState=2),t.id=r,t.block=k,t.dataType=g,t.dataLength=D,t.owner="",t.optInfo.imageUrl=f.imageUrl,t.optInfo.imageWidth=f.imageWidth,t.optInfo.text=f.text,this.queryHoldingData.resultCache[r]=t,this.queryHoldingData.curInRequestCount=Math.max(this.queryHoldingData.curInRequestCount-1,0)}else this.bInRequestEncounterFail=!0,y.alert(`Request server fail, tokenId=${r}, code=${i.status}, please try again 1 minute later.`)}catch(i){console.err(`loadInscription fail:${a},tableIndex:${o},id:${r},err:${i}`),this.bInRequestEncounterFail=!0,y.alert(`Request server fail, tokenId=${r}, please try again 1 minute later.`)}finally{t.loadingState=2}},async onClickTransferInscription(){const a=A.service({lock:!0,background:"rgba(0, 0, 0, 0.6)"});try{this.readyTransferInscription()}finally{a.close()}},async readyTransferInscription(){const a=this.tranInsData.tokenId.trim();this.tranInsData.address=this.tranInsData.address.trim();const o=await K.queryNFTOwner(a);if(!o){y.alert("Inscription #{tokenId} not exist!");return}if(o.toLowerCase()!=q().toLowerCase()){y.alert(`No permission! Owner of Inscription #${a} is <a style="color:white" href="https://explorer.hiro.so/address/${o}?chain=${V()}" target="_blank">${o}</a>`);return}if(o.toLowerCase()==this.tranInsData.address.toLowerCase()){y.alert("Receiver cann't be equal with current login address!");return}const r=[v(a),N(q()),N(this.tranInsData.address)],m="StacksInscription",t=v(a),l=z(h.defaultContractAddress,h.inscriptionsContract.name,m),i=X(q(),W.Sends,l,t),d={contractAddress:h.defaultContractAddress,contractName:h.inscriptionsContract.name,functionName:"transfer",functionArgs:r,network:R,appDetails:J(),postConditions:[i],onFinish:_=>{y.alert(`Transfer transaction has been sent. <a style="color:white" href="https://explorer.hiro.so/txid/${_.txId}?chain=${V()}" target="_blank">Visit transaction.</a>`)}};j(d)}}},$=a=>(Q("data-v-f7a9b237"),a=a(),G(),a),tt={id:"main"},et=$(()=>C("div",{id:"title"},"Tools",-1)),at={key:0,style:{margin:"50px auto",width:"800px"}},nt={class:"queryResultTxt"},ot={key:0},st={key:1},lt={key:2},it=["src","width","height"],rt={key:3},dt={class:"queryResultTxt"};function ut(a,o,r,m,t,l){const i=c("el-input"),d=c("el-col"),_=c("el-button"),u=c("el-form-item"),k=c("el-form"),g=c("el-tab-pane"),H=c("el-tabs"),D=c("el-table-column"),f=c("el-table"),w=c("el-pagination");return p(),I("div",tt,[et,n(H,{modelValue:t.activeTabName,"onUpdate:modelValue":o[3]||(o[3]=e=>t.activeTabName=e),size:"large"},{default:s(()=>[n(g,{label:"Query holdings",name:"query-holdings"},{default:s(()=>[n(k,{model:t.queryHoldingData,"label-width":"100px",class:"tabInner",size:"large"},{default:s(()=>[n(u,{label:"address"},{default:s(()=>[n(d,{span:14},{default:s(()=>[n(i,{modelValue:t.queryHoldingData.address,"onUpdate:modelValue":o[0]||(o[0]=e=>t.queryHoldingData.address=e),placeholder:""},null,8,["modelValue"])]),_:1}),t.bSignedIn?(p(),T(d,{key:0,span:4},{default:s(()=>[n(_,{style:{"margin-left":"4px"},type:"primary",plain:"",onClick:l.onClickFillAddress},{default:s(()=>[x("Fill current account")]),_:1},8,["onClick"])]),_:1})):b("",!0)]),_:1}),n(u,null,{default:s(()=>[n(_,{type:"primary",onClick:l.onClickQueryHoldings,disabled:!l.queryHoldingsBtnValid},{default:s(()=>[x("Query")]),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["model"])]),_:1}),n(g,{label:"Transfer inscription",name:"transfer-inscription"},{default:s(()=>[n(k,{model:t.tranInsData,"label-width":"100px",class:"tabInner",size:"large"},{default:s(()=>[n(u,{label:"inscription id"},{default:s(()=>[n(d,{span:14},{default:s(()=>[n(i,{modelValue:t.tranInsData.tokenId,"onUpdate:modelValue":o[1]||(o[1]=e=>t.tranInsData.tokenId=e),placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),n(u,{label:"address"},{default:s(()=>[n(d,{span:14},{default:s(()=>[n(i,{modelValue:t.tranInsData.address,"onUpdate:modelValue":o[2]||(o[2]=e=>t.tranInsData.address=e),placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),n(u,null,{default:s(()=>[n(_,{type:"primary",onClick:l.onClickTransferInscription,disabled:!l.transferInsBtnValid},{default:s(()=>[x("Transfer")]),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"]),t.activeTabName=="query-holdings"&&t.queryHoldingData.state==2?(p(),I("div",at,[t.queryHoldingData.total>t.queryHoldingData.pageLimit?(p(),T(_,{key:0,type:"primary",plain:"",onClick:l.loadAllContent},{default:s(()=>[x("Load content")]),_:1},8,["onClick"])):b("",!0),n(f,{size:"small",data:t.queryHoldingData.tableData,"empty-text":"No inscriptions"},{default:s(()=>[n(D,{label:"Inscription #",width:"180"},{default:s(e=>[C("div",nt,L(e.row.id),1)]),_:1}),n(D,{label:"Content"},{default:s(e=>[C("div",null,[e.row.loadingState==1?(p(),I("div",ot,"loading..")):b("",!0),e.row.loadingState==2&&(e.row.dataType=="text"||e.row.dataType=="deploy-src-20"||e.row.dataType=="sins")?(p(),I("div",st,[n(i,{modelValue:e.row.optInfo.text,"onUpdate:modelValue":S=>e.row.optInfo.text=S,readonly:"",type:"textarea",autosize:{minRows:1,maxRows:3}},null,8,["modelValue","onUpdate:modelValue"])])):e.row.loadingState==2&&e.row.dataType.startsWith("image/")?(p(),I("div",lt,[C("img",{src:e.row.optInfo.imageUrl,width:e.row.optInfo.imageWidth,height:t.kFixImageHeight,alt:""},null,8,it)])):e.row.loadingState==2?(p(),I("div",rt," Not support preview yet. ")):b("",!0)])]),_:1}),n(D,{label:"Content type",width:"150"},{default:s(e=>[C("div",dt,L(e.row.dataType),1)]),_:1})]),_:1},8,["data"]),t.queryHoldingData.state==2&&t.queryHoldingData.total>t.queryHoldingData.pageLimit?(p(),T(w,{key:1,style:{"margin-top":"16px"},background:"",layout:"total, prev, pager, next","default-page-size":t.queryHoldingData.pageLimit,"current-page":t.queryHoldingData.curPage,"onUpdate:currentPage":o[4]||(o[4]=e=>t.queryHoldingData.curPage=e),total:t.queryHoldingData.total,onCurrentChange:l.onClickChangePage},null,8,["default-page-size","current-page","total","onCurrentChange"])):b("",!0)])):b("",!0)])}const ht=U(Z,[["render",ut],["__scopeId","data-v-f7a9b237"]]);export{ht as default};
