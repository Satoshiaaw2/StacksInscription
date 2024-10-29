import{_ as J,U as o,z as N,D as A,L as z,G as P,u as S,H as x,A as K,C as F,a as D,l as O,o as m,c as B,e as s,w as r,n as $,s as g,f as y,x as tt,m as h,b as n,t as u,p as at,g as et,I as v,i as V,v as rt}from"./index-14c4192d.js";import{C as j,a as E}from"./ContractHelper-a0bc08e4.js";import{C as U}from"./ChainHelper-b9679b43.js";const R="data:image/png;base64,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";const W=rt(),_=tt(),st={name:"STX10Page",components:{},data(){return{Utils:o,bSignedIn:N.isUserSignedIn(),curAddress:N.isUserSignedIn()?A():"",defaultReadonlyAddress:_.defaultContractAddress,progressColors:[{color:"#5cb87a",percentage:33},{color:"#e6a23c",percentage:66},{color:"#f56c6c",percentage:100}],activeTabName:"tick-list",tickListDatas:{queryTick:"",queryState:0,state:0,queryHiroPageLimit:9,pageLimit:18,total:0,curPage:1,cacheTableData:[],tableData:[]},queryBalanceDatas:{tick:"",address:"",loadState:0,resultAddress:"",resolveAddress:"",balance:0,block:0,tokenId:0,max:0,lim:0,supply:0,progress:0},transferData:{bDialogVisible:!1,tick:"",amount:"",maxAmount:0,receiver:"",loadState:0},wrapperData:{title:"Wrap",labelWidth:"180px",queryTick:"",tick:"",queryState:0,bWrap:!0,bTickValid:!1,stx10Balance:0n,sip10Balance:0n,sip10BalanceStr:"",wrapAmountStr:"0",resultAmount:"0",bQueryFinishFlag:!1,wsbtcCount:0}}},computed:{queryTickBtnValid(){return/^[a-z]{2,16}$/i.test(o.trimLower(this.tickListDatas.queryTick))},queryBalanceBtnValid(){return/^[a-z]{2,16}$/i.test(o.trimLower(this.queryBalanceDatas.tick))&&this.queryBalanceDatas.address.trim().length>0},wrapperTickBtnValid(){return/^[a-z]{2,16}$/i.test(o.trimLower(this.wrapperData.queryTick))},wrapperActBtnValid(){if(!this.wrapperData.bTickValid||!/^[0-9]{1,17}$/i.test(o.trimLower(this.wrapperData.wrapAmountStr)))return!1;const e=BigInt(o.trimLower(this.wrapperData.wrapAmountStr));if(e<=0n)return!1;if(this.wrapperData.bWrap){if(e>this.wrapperData.stx10Balance)return!1}else if(e*1000000n>this.wrapperData.sip10Balance)return!1;return!0},transferBtnEnabled(){const e=this.transferData.amount.toString().trim();return/^[0-9]{1,16}$/i.test(e)&&BigInt(e)>0&&BigInt(e)<=this.transferData.maxAmount&&this.transferData.receiver.trim().length>0}},async mounted(){this.$route.query.tab&&(this.activeTabName=this.$route.query.tab),this.queryTickList(1);const e=await j.loadSummary();this.tickListDatas.total=parseInt(e.last_stx10_tick_index)},methods:{async queryTickList(e){this.tickListDatas.state=1;const a=(e-1)*this.tickListDatas.pageLimit;let p=a+1,c=this,t=0,i=function(d,k){d!=p&&d!=p+c.tickListDatas.queryHiroPageLimit||(++t==1?(c.tickListDatas.state=2,c.tickListDatas.tableData.splice(0,c.tickListDatas.tableData.length),c.tickListDatas.cacheTableData=null,c.tickListDatas.tableData.push(...k)):d==p?c.tickListDatas.tableData.unshift(...k):c.tickListDatas.tableData.push(...k))};this.queryPartTickList(a+1,i),setTimeout(()=>{c.queryPartTickList(a+1+this.tickListDatas.queryHiroPageLimit,i)},300)},async queryPartTickList(e,a){let p=[];for(let t=0;t<this.tickListDatas.queryHiroPageLimit;t++)p.push(e+t);const c=await j.queryTickList(p);for(let t of c)t.supply>=t.max?t.progress=100:t.progress=Number(t.supply*1000n/t.max)/10;a(e,c)},onClickChangePage(){this.queryTickList(this.tickListDatas.curPage)},async onClickQueryTick(){const e=o.trimLower(this.tickListDatas.queryTick);if(e.length==0){this.tickListDatas.cacheTableData&&(this.tickListDatas.tableData.splice(0,this.tickListDatas.tableData.length),this.tickListDatas.tableData.push(...this.tickListDatas.cacheTableData),this.tickListDatas.cacheTableData=null);return}if(!this.queryTickBtnValid)return;this.tickListDatas.queryState=1;const a=await j.resolveSTX10InfoByTick(e);if(this.tickListDatas.queryState=2,this.tickListDatas.cacheTableData||(this.tickListDatas.cacheTableData=[],this.tickListDatas.cacheTableData.push(...this.tickListDatas.tableData)),this.tickListDatas.tableData.splice(0,this.tickListDatas.tableData.length),a.block>0){let p=0;a.supply>=a.max?p=100:p=Number(a.supply*1000n/a.max)/10,this.tickListDatas.tableData.push({tick:e,block:a.block,max:a.max,lim:a.lim,supply:a.supply,progress:p})}},async onClickQueryBalance(){this.queryBalanceDatas.loadState=1,this.queryBalanceDatas.resultAddress="",this.queryBalanceDatas.resolveAddress="",this.queryBalanceDatas.tick=o.trimLower(this.queryBalanceDatas.tick);const e=await j.resolveSTX10InfoByTick(this.queryBalanceDatas.tick);this.queryBalanceDatas.block=e.block,this.queryBalanceDatas.max=e.max,this.queryBalanceDatas.lim=e.lim,this.queryBalanceDatas.supply=e.supply,this.queryBalanceDatas.progress=e.max>0?Number(e.supply*1000n/e.max)/10:0;const a=await U.resolveAddress(this.queryBalanceDatas.address.trim());if(a.ret!=0){this.queryBalanceDatas.loadState=0,o.alert(a.errMsg);return}if(!o.parseAddress(a.value)){this.queryBalanceDatas.loadState=0,o.alertInvalidAddress();return}this.queryBalanceDatas.balance=await j.loadSTX10Balance(this.queryBalanceDatas.tick,a.value),this.queryBalanceDatas.resultAddress=this.queryBalanceDatas.address,this.queryBalanceDatas.resolveAddress=a.value,this.queryBalanceDatas.loadState=2},onClickFillAddress(){this.queryBalanceDatas.address=A()},getWrapName(e){return e.toLowerCase()},async onClickQueryWrapperTick(){this.wrapperData.tick=this.wrapperData.queryTick=o.trimLower(this.wrapperData.queryTick),this.wrapperData.loadState=1;const e=this.bSignedIn?A():_.defaultContractAddress,a=await j.queryWrapSummary(this.wrapperData.tick,e);this.wrapperData.bTickValid=a.tickInfo!=null,this.bSignedIn&&a.tickInfo?(this.wrapperData.stx10Balance=a.stx10Balance,this.wrapperData.sip10Balance=a.sip10Balance,this.wrapperData.sip10BalanceStr=o.sip10BalanceToStr(a.sip10Balance.toString())):(this.wrapperData.stx10Balance=0n,this.wrapperData.sip10Balance=0n,this.wrapperData.sip10BalanceStr=""),this.wrapperData.wrapAmountStr="",this.wrapperData.resultAmount="-",this.wrapperData.loadState=2,this.wrapperData.bQueryFinishFlag=!0,this.bSignedIn&&this.wrapperData.tick=="sbtc"&&this.queryWsbtcCount()},async queryWsbtcCount(){this.wrapperData.wsbtcCount=0;const e=await j.queryWrapSummary("Wsbtc",A());this.wrapperData.wsbtcCount=e.sip10Balance/1000000n},async onClickWrapperMax(){this.wrapperData.bWrap?this.wrapperData.wrapAmountStr=this.wrapperData.stx10Balance.toString():this.wrapperData.wrapAmountStr=(this.wrapperData.sip10Balance/1000000n).toString(),this.onChangeWrapAmount()},async onClickChangeWrapMode(){this.wrapperData.bWrap=!this.wrapperData.bWrap},onChangeWrapAmount(){const e=o.trimLower(this.wrapperData.wrapAmountStr);/^[0-9]{1,17}$/i.test(e)?this.wrapperData.resultAmount=e:this.wrapperData.resultAmount="-"},async onClickWrapperAction(){const e=this.getWrapName(o.trimLower(this.wrapperData.tick)),a=BigInt(o.trimLower(this.wrapperData.wrapAmountStr));let p=null,c=null;if(this.wrapperData.bWrap)p="wrap";else{p="unwrap";const d=z(_.getWrapperContractAddress(e),e,e);c=[],c.push(E(A(),P.Equal,BigInt(a*1000000n),d))}const t=[S(a)],i={contractAddress:_.getWrapperContractAddress(e),contractName:e,functionName:p,functionArgs:t,network:W,appDetails:v(),postConditions:c,onFinish:d=>{const k=this.wrapperData.bWrap?"Wrap transaction has been sent":"Unwrap transaction has been sent.";o.alert(k+` <a style="color:white" href="https://explorer.hiro.so/txid/${d.txId}?chain=${V()}" target="_blank">Visit transaction.</a>`)}};x(i)},onClickUnwrapWsbtc(){const e="Wsbtc",a=this.wrapperData.wsbtcCount,p=z(_.getWrapperContractAddress(e),e,e);let c=[];c.push(E(A(),P.Equal,BigInt(a*1000000n),p));const t=[S(a)],i={contractAddress:_.getWrapperContractAddress(e),contractName:e,functionName:"unwrap",functionArgs:t,network:W,appDetails:v(),postConditions:c,onFinish:d=>{const k="Unwrap transaction has been sent.";o.alert(k+` <a style="color:white" href="https://explorer.hiro.so/txid/${d.txId}?chain=${V()}" target="_blank">Visit transaction.</a>`)}};x(i)},onClickLoginIn(){K()},onClickTransfer(){this.transferData.tick=this.queryBalanceDatas.tick,this.transferData.maxAmount=this.queryBalanceDatas.balance,this.transferData.amount=this.transferData.maxAmount.toString(),this.transferData.receiver="",this.transferData.loadState=0,this.transferData.bDialogVisible=!0},async onClickSureTransfer(){this.transferData.loadState=1;const e=await U.resolveAddress(this.transferData.receiver.trim());if(this.transferData.loadState=0,e.ret!=0){o.alert(e.errMsg);return}const a=o.parseAddress(e.value);if(!a){o.alertInvalidAddress();return}if(e.value.toLowerCase()==A().toLowerCase()){this.transferData.loadState=0,o.alert("Receiver can't be yourself!");return}const p=[F(`{"p":"stx10","op":"transfer","tick":"${this.transferData.tick}","amt":"${this.transferData.amount}"}`),a,F(this.transferData.tick),S(this.transferData.amount)];let c=[];const t={contractAddress:_.defaultContractAddress,contractName:_.inscriptionsContract.name,functionName:"inscribe_transfer_stx10",functionArgs:p,network:W,appDetails:v(),postConditions:c,onFinish:i=>{o.alert(`Transfer transaction has been sent. <a style="color:white" href="https://explorer.hiro.so/txid/${i.txId}?chain=${V()}" target="_blank">Visit transaction.</a>`)}};x(t)}}},b=e=>(at("data-v-bd6049fb"),e=e(),et(),e),it={id:"main"},lt=b(()=>n("div",{id:"title"}," stx10 ",-1)),nt={key:0},ot={key:1,class:"queryResult"},ct={class:"resultDiv"},pt=b(()=>n("span",null,"balance:",-1)),ut=b(()=>n("div",{style:{"border-bottom":"1px solid #666",height:"16px"}}," ",-1)),dt={class:"resultDiv"},Dt=b(()=>n("span",null,"max:",-1)),mt={class:"resultDiv"},ht=b(()=>n("span",null,"supply:",-1)),kt=b(()=>n("span",null,"minted:",-1)),yt={class:"resultDiv"},ft=b(()=>n("span",null,"lim:",-1)),wt={id:"wrapTitle"},bt={key:0,src:R,width:"32",height:"32"},gt={class:"wrapperCoinName"},_t={class:"wrapperTip"},At={class:"wrapperTip"},Bt=b(()=>n("span",{style:{"font-weight":"bold","font-size":"20px"}},"↓",-1)),jt={key:0,src:R,width:"32",height:"32"},Ct={class:"wrapperCoinName"},qt={class:"wrapperTip"},Tt={style:{"text-align":"right",color:"#888"}},Lt={key:1,style:{"text-align":"left",color:"#ccc"}},St={key:0},xt={class:"tickName"},vt={class:"queryResultTxt"},Vt=b(()=>n("span",null,"minted:",-1)),Wt={class:"queryResultTxt"},It={class:"queryResultTxt"};function Yt(e,a,p,c,t,i){const d=D("el-input"),k=D("el-col"),f=D("el-button"),I=D("el-row"),L=D("el-tab-pane"),w=D("el-form-item"),Y=D("el-progress"),C=D("el-space"),q=D("el-form"),Q=D("el-card"),X=D("el-tabs"),T=D("el-table-column"),G=D("el-table"),H=D("el-pagination"),M=D("el-dialog"),Z=O("loading");return m(),B("div",it,[lt,s(X,{modelValue:t.activeTabName,"onUpdate:modelValue":a[5]||(a[5]=l=>t.activeTabName=l),size:"large"},{default:r(()=>[s(L,{label:"Tick list",name:"tick-list"},{default:r(()=>[s(I,{style:{margin:"16px auto"}},{default:r(()=>[s(k,{span:6},{default:r(()=>[s(d,{size:"large",modelValue:t.tickListDatas.queryTick,"onUpdate:modelValue":a[0]||(a[0]=l=>t.tickListDatas.queryTick=l),placeholder:"tick",onChange:i.onClickQueryTick,clearable:""},null,8,["modelValue","onChange"])]),_:1}),s(f,{size:"large",type:"primary",disabled:!i.queryTickBtnValid,loading:t.tickListDatas.queryState==1},{default:r(()=>[h("Query")]),_:1},8,["disabled","loading"])]),_:1})]),_:1}),s(L,{label:"Query balance",name:"query-balance"},{default:r(()=>[s(q,{model:t.queryBalanceDatas,"label-width":"80px",class:"tabInner",size:"large"},{default:r(()=>[s(w,{label:"tick"},{default:r(()=>[s(k,{span:14},{default:r(()=>[s(d,{modelValue:t.queryBalanceDatas.tick,"onUpdate:modelValue":a[1]||(a[1]=l=>t.queryBalanceDatas.tick=l),placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),s(w,{label:"address"},{default:r(()=>[s(k,{span:14},{default:r(()=>[s(d,{modelValue:t.queryBalanceDatas.address,"onUpdate:modelValue":a[2]||(a[2]=l=>t.queryBalanceDatas.address=l),placeholder:"Address or BNS name"},null,8,["modelValue"])]),_:1}),t.bSignedIn?(m(),g(k,{key:0,span:4},{default:r(()=>[s(f,{style:{"margin-left":"4px"},type:"primary",plain:"",onClick:i.onClickFillAddress},{default:r(()=>[h("Fill current account")]),_:1},8,["onClick"])]),_:1})):y("",!0)]),_:1}),s(w,null,{default:r(()=>[s(C,{direction:"vertical",alignment:"start"},{default:r(()=>[s(f,{type:"primary",onClick:i.onClickQueryBalance,disabled:!i.queryBalanceBtnValid,loading:t.queryBalanceDatas.loadState==1},{default:r(()=>[h("Query")]),_:1},8,["onClick","disabled","loading"]),t.queryBalanceDatas.loadState==2&&t.queryBalanceDatas.block==0?(m(),B("div",nt,"Tick not exists.")):y("",!0),t.queryBalanceDatas.loadState==2&&t.queryBalanceDatas.block>0?(m(),B("div",ot,[n("div",ct,[pt,h(" "+u(t.queryBalanceDatas.balance)+" ",1),t.curAddress.toLowerCase()==t.queryBalanceDatas.resolveAddress.toLowerCase()&&t.queryBalanceDatas.balance>0&&t.queryBalanceDatas.address==t.queryBalanceDatas.resultAddress?(m(),g(f,{key:0,style:{"margin-left":"8px"},plain:"",size:"small",type:"primary",onClick:i.onClickTransfer},{default:r(()=>[h("Transfer")]),_:1},8,["onClick"])):y("",!0)]),ut,n("div",dt,[Dt,h(" "+u(t.queryBalanceDatas.max),1)]),n("div",mt,[ht,h(" "+u(t.queryBalanceDatas.supply),1)]),s(C,{alignment:"center",class:"resultDiv"},{default:r(()=>[kt,s(Y,{style:{width:"300px"},percentage:t.queryBalanceDatas.progress,color:t.progressColors,"stroke-width":8},null,8,["percentage","color"])]),_:1}),n("div",yt,[ft,h(" "+u(t.queryBalanceDatas.lim),1)])])):y("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s(L,{label:"Wrapper",name:"wrapper"},{default:r(()=>[s(I,{style:{margin:"16px auto"}},{default:r(()=>[s(k,{span:6},{default:r(()=>[s(d,{modelValue:t.wrapperData.queryTick,"onUpdate:modelValue":a[3]||(a[3]=l=>t.wrapperData.queryTick=l),placeholder:"tick",size:"large",clearable:""},null,8,["modelValue"])]),_:1}),s(f,{type:"primary",disabled:!i.wrapperTickBtnValid,size:"large",loading:t.wrapperData.loadState==1,onClick:i.onClickQueryWrapperTick},{default:r(()=>[h("Query")]),_:1},8,["disabled","loading","onClick"])]),_:1}),t.wrapperData.bQueryFinishFlag&&t.wrapperData.bTickValid?(m(),g(Q,{key:0,style:{"margin-top":"32px",width:"520px"}},{default:r(()=>[n("div",wt,u(t.wrapperData.bWrap?"Wrap":"Unwrap"),1),s(q,{model:t.wrapperData,"label-width":t.wrapperData.labelWidth,size:"default","label-position":"left",class:"wrapperCoinSide"},{default:r(()=>[s(w,null,{label:r(()=>[s(C,{alignment:"center"},{default:r(()=>[t.wrapperData.bWrap?y("",!0):(m(),B("img",bt)),n("span",gt,u(t.wrapperData.bWrap?t.wrapperData.tick:i.getWrapName(t.wrapperData.tick)),1)]),_:1})]),default:r(()=>[s(d,{disabled:!t.bSignedIn,modelValue:t.wrapperData.wrapAmountStr,"onUpdate:modelValue":a[4]||(a[4]=l=>t.wrapperData.wrapAmountStr=l),onInput:i.onChangeWrapAmount,clearable:"",size:"large",placeholder:"Integer count"},{append:r(()=>[s(f,{type:"primary",onClick:i.onClickWrapperMax},{default:r(()=>[h("Max")]),_:1},8,["onClick"])]),_:1},8,["disabled","modelValue","onInput"])]),_:1}),s(w,null,{label:r(()=>[n("span",_t,u(t.wrapperData.bWrap?"stx10":"sip10"),1)]),default:r(()=>[n("div",At," Balance: "+u(t.bSignedIn?t.wrapperData.bWrap?t.wrapperData.stx10Balance:t.wrapperData.sip10BalanceStr:"-"),1)]),_:1})]),_:1},8,["model","label-width"]),s(f,{type:"primary",plain:"",circle:"",onClick:i.onClickChangeWrapMode,style:{margin:"8px auto"}},{default:r(()=>[Bt]),_:1},8,["onClick"]),s(q,{model:t.wrapperData,"label-width":t.wrapperData.labelWidth,size:"default","label-position":"left",class:"wrapperCoinSide"},{default:r(()=>[s(w,null,{label:r(()=>[s(C,{alignment:"center"},{default:r(()=>[t.wrapperData.bWrap?(m(),B("img",jt)):y("",!0),n("span",Ct,u(t.wrapperData.bWrap?i.getWrapName(t.wrapperData.tick):t.wrapperData.tick),1)]),_:1})]),default:r(()=>[n("span",null,u(t.bSignedIn?t.wrapperData.resultAmount:"-"),1)]),_:1}),s(w,null,{label:r(()=>[n("span",qt,u(t.wrapperData.bWrap?"sip10":"stx10"),1)]),default:r(()=>[n("div",Tt," Balance: "+u(t.bSignedIn?t.wrapperData.bWrap?t.wrapperData.sip10BalanceStr:t.wrapperData.stx10Balance:"-"),1)]),_:1})]),_:1},8,["model","label-width"]),t.bSignedIn?(m(),g(f,{key:0,disabled:!i.wrapperActBtnValid,style:{"margin-top":"16px"},type:"primary",round:"",size:"large",onClick:i.onClickWrapperAction},{default:r(()=>[h("     "+u(t.wrapperData.bWrap?"Wrap":"Unwrap")+"     ",1)]),_:1},8,["disabled","onClick"])):y("",!0),t.bSignedIn?y("",!0):(m(),g(f,{key:1,style:{"margin-top":"16px"},type:"primary",round:"",size:"large",onClick:i.onClickLoginIn},{default:r(()=>[h("     Sign in to "+u(t.wrapperData.bWrap?"wrap":"unwrap")+"     ",1)]),_:1},8,["onClick"])),t.bSignedIn&&t.wrapperData.wsbtcCount>0?(m(),g(f,{key:2,style:{"margin-top":"16px"},type:"primary",round:"",size:"large",onClick:i.onClickUnwrapWsbtc},{default:r(()=>[h("     Unwrap all Wsbtc     ")]),_:1},8,["onClick"])):y("",!0)]),_:1})):y("",!0),t.wrapperData.loadState==2&&!t.wrapperData.bTickValid?(m(),B("div",Lt," Wrapper contract doesn't exist yet. ")):y("",!0)]),_:1})]),_:1},8,["modelValue"]),t.activeTabName=="tick-list"?(m(),B("div",St,[$((m(),g(G,{size:"large",data:t.tickListDatas.tableData,"element-loading-background":"rgba(0, 0, 0, 0)",style:{"min-height":"155px"},"empty-text":t.tickListDatas.state==2?"No ticks":" "},{default:r(()=>[s(T,{label:"tick",width:"180"},{default:r(l=>[n("div",xt,u(l.row.tick),1)]),_:1}),s(T,{label:"state"},{default:r(l=>[n("div",vt,[n("div",null,"max: "+u(t.Utils.thousandNumStr(l.row.max)),1),s(C,{alignment:"center"},{default:r(()=>[Vt,s(Y,{style:{"min-width":"250px"},percentage:l.row.progress,color:t.progressColors,"stroke-width":8},null,8,["percentage","color"])]),_:2},1024)])]),_:1}),s(T,{label:"supply",width:"200"},{default:r(l=>[n("div",Wt,u(t.Utils.thousandNumStr(l.row.supply)),1)]),_:1}),s(T,{label:"lim",width:"150"},{default:r(l=>[n("div",It,u(t.Utils.thousandNumStr(l.row.lim)),1)]),_:1})]),_:1},8,["data","empty-text"])),[[Z,t.tickListDatas.state==1]]),t.tickListDatas.state==2&&t.tickListDatas.total>t.tickListDatas.pageLimit?(m(),g(H,{key:0,style:{"margin-top":"16px"},background:"",layout:"total, prev, pager, next","default-page-size":t.tickListDatas.pageLimit,"current-page":t.tickListDatas.curPage,"onUpdate:currentPage":a[6]||(a[6]=l=>t.tickListDatas.curPage=l),total:t.tickListDatas.total,onCurrentChange:i.onClickChangePage},null,8,["default-page-size","current-page","total","onCurrentChange"])):y("",!0)])):y("",!0),s(M,{center:!0,title:"Transfer $"+t.transferData.tick,modelValue:t.transferData.bDialogVisible,"onUpdate:modelValue":a[10]||(a[10]=l=>t.transferData.bDialogVisible=l),width:"600px"},{default:r(()=>[s(q,{ref:"form",model:t.transferData,"label-width":"80px"},{default:r(()=>[s(w,{label:"Amount"},{default:r(()=>[s(d,{modelValue:t.transferData.amount,"onUpdate:modelValue":a[7]||(a[7]=l=>t.transferData.amount=l),placeholder:"Integer"},null,8,["modelValue"])]),_:1}),s(w,{label:"Receiver"},{default:r(()=>[s(d,{modelValue:t.transferData.receiver,"onUpdate:modelValue":a[8]||(a[8]=l=>t.transferData.receiver=l),placeholder:"Address or BNS name"},null,8,["modelValue"])]),_:1}),s(w,null,{default:r(()=>[s(f,{type:"primary",disabled:!i.transferBtnEnabled,loading:t.transferData.loadState==1,onClick:i.onClickSureTransfer},{default:r(()=>[h("Transfer")]),_:1},8,["disabled","loading","onClick"]),s(f,{onClick:a[9]||(a[9]=l=>t.transferData.bDialogVisible=!1)},{default:r(()=>[h("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}const Ft=J(st,[["render",Yt],["__scopeId","data-v-bd6049fb"]]);export{Ft as default};
