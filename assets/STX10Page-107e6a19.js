import{a as U,U as d,y as P,C as z,b as n,l as A,o as p,c as g,f as e,w as a,n as Q,q as v,g as k,v as X,m,d as c,t as o,p as R,h as F}from"./index-a7afa0d0.js";import{C as y}from"./ContractHelper-df4ef2e5.js";import"./browser-ponyfill-82064336.js";const E=X(),H={name:"STX10Page",components:{},data(){return{Utils:d,bSignedIn:P.isUserSignedIn(),defaultReadonlyAddress:E.defaultContractAddress,progressColors:[{color:"#5cb87a",percentage:33},{color:"#e6a23c",percentage:66},{color:"#f56c6c",percentage:100}],selfAddress:"",activeTabName:"tick-list",tickListDatas:{queryTick:"",queryState:0,state:0,pageLimit:8,total:0,curPage:1,cacheTableData:[],tableData:[]},queryBalanceDatas:{tick:"",address:"",loadState:0,balance:0,block:0,tokenId:0,max:0,lim:0,supply:0,progress:0}}},computed:{queryTickBtnValid(){return/^[a-z]{2,16}$/i.test(d.trimLower(this.tickListDatas.queryTick))},queryBalanceBtnValid(){return/^[a-z]{2,16}$/i.test(d.trimLower(this.queryBalanceDatas.tick))&&d.parseAddress(this.queryBalanceDatas.address)!=null}},async mounted(){this.queryTickList(1);const l=await y.loadSummary();this.tickListDatas.total=parseInt(l.last_stx10_tick_index)},methods:{async queryTickList(l){this.tickListDatas.state=1;const s=(l-1)*this.tickListDatas.pageLimit;let u=[];for(let t=1;t<=this.tickListDatas.pageLimit;t++)u.push(s+t);const b=await y.queryTickList(u);for(let t of b)t.supply>=t.max?t.progress=100:t.progress=Number(t.supply*1000n/t.max)/10;this.tickListDatas.state=2,this.tickListDatas.tableData.splice(0,this.tickListDatas.tableData.length),this.tickListDatas.tableData.push(...b),this.tickListDatas.cacheTableData=null},onClickChangePage(){this.queryTickList(this.tickListDatas.curPage)},async onClickQueryTick(){const l=d.trimLower(this.tickListDatas.queryTick);if(l.length==0){this.tickListDatas.cacheTableData&&(this.tickListDatas.tableData.splice(0,this.tickListDatas.tableData.length),this.tickListDatas.tableData.push(...this.tickListDatas.cacheTableData),this.tickListDatas.cacheTableData=null);return}if(!this.queryTickBtnValid)return;this.tickListDatas.queryState=1;const s=await y.resolveSTX10InfoByTick(l);if(this.tickListDatas.queryState=2,this.tickListDatas.cacheTableData||(this.tickListDatas.cacheTableData=[],this.tickListDatas.cacheTableData.push(...this.tickListDatas.tableData)),this.tickListDatas.tableData.splice(0,this.tickListDatas.tableData.length),s.block>0){let u=0;s.supply>=s.max?u=100:u=Number(s.supply*1000n/s.max)/10,this.tickListDatas.tableData.push({tick:l,block:s.block,max:s.max,lim:s.lim,supply:s.supply,progress:u})}},async onClickQueryBalance(){this.queryBalanceDatas.loadState=1;const l=await y.resolveSTX10InfoByTick(d.trimLower(this.queryBalanceDatas.tick));this.queryBalanceDatas.block=l.block,this.queryBalanceDatas.max=l.max,this.queryBalanceDatas.lim=l.lim,this.queryBalanceDatas.supply=l.supply,this.queryBalanceDatas.progress=l.max>0?Number(l.lim*100n/l.max):0,this.queryBalanceDatas.balance=await y.loadSTX10Balance(d.trimLower(this.queryBalanceDatas.tick),this.queryBalanceDatas.address.trim()),this.queryBalanceDatas.loadState=2},onClickFillAddress(){this.queryBalanceDatas.address=z()}}},r=l=>(R("data-v-9b369d43"),l=l(),F(),l),j={id:"main"},G=r(()=>c("div",{id:"title"},"stx10",-1)),J={key:0},K={key:1,class:"queryResult"},M={class:"resultDiv"},O=r(()=>c("span",null,"balance:",-1)),W=r(()=>c("div",{style:{"border-bottom":"1px solid #666",height:"16px"}}," ",-1)),Y={class:"resultDiv"},Z=r(()=>c("span",null,"max:",-1)),$={class:"resultDiv"},tt=r(()=>c("span",null,"supply:",-1)),et=r(()=>c("span",null,"minted:",-1)),at={class:"resultDiv"},st=r(()=>c("span",null,"lim:",-1)),lt={key:0},it={class:"tickName"},ct={class:"queryResultTxt"},nt=r(()=>c("span",null,"minted:",-1)),ot={class:"queryResultTxt"},rt={class:"queryResultTxt"};function ut(l,s,u,b,t,_){const f=n("el-input"),h=n("el-col"),L=n("el-button"),C=n("el-row"),x=n("el-tab-pane"),q=n("el-form-item"),T=n("el-progress"),B=n("el-space"),w=n("el-form"),S=n("el-tabs"),D=n("el-table-column"),V=n("el-table"),N=n("el-pagination"),I=A("loading");return p(),g("div",j,[G,e(S,{modelValue:t.activeTabName,"onUpdate:modelValue":s[3]||(s[3]=i=>t.activeTabName=i),size:"large"},{default:a(()=>[e(x,{label:"Tick list",name:"tick-list"},{default:a(()=>[e(C,{style:{margin:"16px auto"}},{default:a(()=>[e(h,{span:6},{default:a(()=>[e(f,{modelValue:t.tickListDatas.queryTick,"onUpdate:modelValue":s[0]||(s[0]=i=>t.tickListDatas.queryTick=i),placeholder:"",clearable:"",onChange:_.onClickQueryTick},null,8,["modelValue","onChange"])]),_:1}),e(L,{type:"primary",disabled:!_.queryTickBtnValid,loading:t.tickListDatas.queryState==1},{default:a(()=>[m("Query")]),_:1},8,["disabled","loading"])]),_:1})]),_:1}),e(x,{label:"Query balance",name:"query-balance"},{default:a(()=>[e(w,{model:t.queryBalanceDatas,"label-width":"80px",class:"tabInner",size:"large"},{default:a(()=>[e(q,{label:"tick"},{default:a(()=>[e(h,{span:14},{default:a(()=>[e(f,{modelValue:t.queryBalanceDatas.tick,"onUpdate:modelValue":s[1]||(s[1]=i=>t.queryBalanceDatas.tick=i),placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(q,{label:"address"},{default:a(()=>[e(h,{span:14},{default:a(()=>[e(f,{modelValue:t.queryBalanceDatas.address,"onUpdate:modelValue":s[2]||(s[2]=i=>t.queryBalanceDatas.address=i),placeholder:""},null,8,["modelValue"])]),_:1}),t.bSignedIn?(p(),v(h,{key:0,span:4},{default:a(()=>[e(L,{style:{"margin-left":"4px"},type:"primary",plain:"",onClick:_.onClickFillAddress},{default:a(()=>[m("Fill current account")]),_:1},8,["onClick"])]),_:1})):k("",!0)]),_:1}),e(q,null,{default:a(()=>[e(B,{direction:"vertical",alignment:"start"},{default:a(()=>[e(L,{type:"primary",onClick:_.onClickQueryBalance,disabled:!_.queryBalanceBtnValid,loading:t.queryBalanceDatas.loadState==1},{default:a(()=>[m("Query")]),_:1},8,["onClick","disabled","loading"]),t.queryBalanceDatas.loadState==2&&t.queryBalanceDatas.block==0?(p(),g("div",J,"Tick not exist")):k("",!0),t.queryBalanceDatas.loadState==2&&t.queryBalanceDatas.block>0?(p(),g("div",K,[c("div",M,[O,m(" "+o(t.queryBalanceDatas.balance),1)]),W,c("div",Y,[Z,m(" "+o(t.queryBalanceDatas.max),1)]),c("div",$,[tt,m(" "+o(t.queryBalanceDatas.supply),1)]),e(B,{alignment:"center",class:"resultDiv"},{default:a(()=>[et,e(T,{style:{width:"300px"},percentage:t.queryBalanceDatas.progress,color:t.progressColors,"stroke-width":8},null,8,["percentage","color"])]),_:1}),c("div",at,[st,m(" "+o(t.queryBalanceDatas.lim),1)])])):k("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"]),t.activeTabName=="tick-list"?(p(),g("div",lt,[Q((p(),v(V,{size:"large",data:t.tickListDatas.tableData,"element-loading-background":"rgba(0, 0, 0, 0)",style:{"min-height":"155px"},"empty-text":t.tickListDatas.state==2?"No ticks":" "},{default:a(()=>[e(D,{label:"tick",width:"180"},{default:a(i=>[c("div",it,o(i.row.tick),1)]),_:1}),e(D,{label:"state"},{default:a(i=>[c("div",ct,[c("div",null,"max: "+o(t.Utils.thousandNumStr(i.row.max)),1),e(B,{alignment:"center"},{default:a(()=>[nt,e(T,{style:{"min-width":"250px"},percentage:i.row.progress,color:t.progressColors,"stroke-width":8},null,8,["percentage","color"])]),_:2},1024)])]),_:1}),e(D,{label:"supply",width:"150"},{default:a(i=>[c("div",ot,o(t.Utils.thousandNumStr(i.row.supply)),1)]),_:1}),e(D,{label:"lim",width:"150"},{default:a(i=>[c("div",rt,o(t.Utils.thousandNumStr(i.row.lim)),1)]),_:1})]),_:1},8,["data","empty-text"])),[[I,t.tickListDatas.state==1]]),t.tickListDatas.state==2&&t.tickListDatas.total>t.tickListDatas.pageLimit?(p(),v(N,{key:0,style:{"margin-top":"16px"},background:"",layout:"total, prev, pager, next","default-page-size":t.tickListDatas.pageLimit,"current-page":t.tickListDatas.curPage,"onUpdate:currentPage":s[4]||(s[4]=i=>t.tickListDatas.curPage=i),total:t.tickListDatas.total,onCurrentChange:_.onClickChangePage},null,8,["default-page-size","current-page","total","onCurrentChange"])):k("",!0)])):k("",!0)])}const _t=U(H,[["render",ut],["__scopeId","data-v-9b369d43"]]);export{_t as default};