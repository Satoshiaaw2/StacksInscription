import{_ as S,u as w,y as V,r,b as I,o as n,d as m,e as s,j as a,w as l,n as R,k as C,l as f,f as c,i as k,t as i,p as Q,q as A}from"./index-88f05315.js";import{C as g}from"./ContractHelper-06a52c12.js";import{U as d}from"./utils-bf7ba3cc.js";import"./browser-ponyfill-76e78561.js";const N=R(),U={name:"SRC20Page",components:{},data(){return{bSignedIn:w.isUserSignedIn(),defaultReadonlyAddress:N.defaultContractAddress,progressColors:[{color:"#5cb87a",percentage:33},{color:"#e6a23c",percentage:66},{color:"#f56c6c",percentage:100}],selfAddress:"",queryTickDatas:{tick:"",loadState:0,block:0,tokenId:0,max:0,lim:0,supply:0,progress:0},queryBalanceDatas:{tick:"",address:"",loadState:0,balance:0,block:0,tokenId:0,max:0,lim:0,supply:0,progress:0}}},computed:{queryTickBtnValid(){return/^[a-z]{2,16}$/i.test(d.trimLower(this.queryTickDatas.tick))},queryBalanceBtnValid(){return/^[a-z]{2,16}$/i.test(d.trimLower(this.queryBalanceDatas.tick))&&d.parseAddress(this.queryBalanceDatas.address)!=null}},async mounted(){},methods:{async onClickQueryTick(){this.queryTickDatas.loadState=1;const t=await g.resolveSRC20InfoByTick(d.trimLower(this.queryTickDatas.tick));this.queryTickDatas.loadState=2,this.queryTickDatas.block=t.block,this.queryTickDatas.max=t.max,this.queryTickDatas.lim=t.lim,this.queryTickDatas.supply=t.supply,this.queryTickDatas.progress=t.max>0?Number(t.lim/t.max):0},async onClickQueryBalance(){this.queryBalanceDatas.loadState=1;const t=await g.resolveSRC20InfoByTick(d.trimLower(this.queryBalanceDatas.tick));this.queryBalanceDatas.block=t.block,this.queryBalanceDatas.max=t.max,this.queryBalanceDatas.lim=t.lim,this.queryBalanceDatas.supply=t.supply,this.queryBalanceDatas.progress=t.max>0?Number(t.lim/t.max):0,this.queryBalanceDatas.balance=await g.loadSRC20Balance(d.trimLower(this.queryBalanceDatas.tick),this.queryBalanceDatas.address.trim()),this.queryBalanceDatas.loadState=2},onClickFillAddress(){this.queryBalanceDatas.address=V()}}},o=t=>(Q("data-v-4c5c3b25"),t=t(),A(),t),L={id:"main"},z=o(()=>s("div",{id:"title"},"src-20",-1)),F=o(()=>s("legend",null,"Query tick",-1)),P={key:0},j={key:1,class:"queryResult"},E={class:"resultDiv"},H=o(()=>s("span",null,"max:",-1)),G={class:"resultDiv"},J=o(()=>s("span",null,"lim:",-1)),K={class:"resultDiv"},M=o(()=>s("span",null,"supply:",-1)),O=o(()=>s("span",null,"mint progress:",-1)),W=o(()=>s("legend",null,"Query balance",-1)),X={key:0},Y={key:1,class:"queryResult"},Z={class:"resultDiv"},$=o(()=>s("span",null,"balance:",-1)),ee={class:"resultDiv"},ae=o(()=>s("span",null,"max:",-1)),se={class:"resultDiv"},te=o(()=>s("span",null,"lim:",-1)),le={class:"resultDiv"},oe=o(()=>s("span",null,"supply:",-1)),ce=o(()=>s("span",null,"mint progress:",-1));function re(t,u,ne,ie,e,_){const h=r("el-input"),D=r("el-col"),p=r("el-form-item"),B=r("el-button"),v=r("el-progress"),q=r("el-space"),b=r("el-form"),x=r("el-divider"),T=I("loading");return n(),m("div",L,[z,s("fieldset",null,[F,a(b,{model:e.queryTickDatas,"label-width":"80px",class:"tabInner",size:"large"},{default:l(()=>[a(p,{label:"tick"},{default:l(()=>[a(D,{span:14},{default:l(()=>[a(h,{modelValue:e.queryTickDatas.tick,"onUpdate:modelValue":u[0]||(u[0]=y=>e.queryTickDatas.tick=y),placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),a(p,null,{default:l(()=>[a(q,{direction:"vertical",alignment:"start"},{default:l(()=>[C((n(),f(B,{type:"primary",onClick:_.onClickQueryTick,disabled:!_.queryTickBtnValid},{default:l(()=>[c("Query")]),_:1},8,["onClick","disabled"])),[[T,e.queryTickDatas.loadState==1]]),e.queryTickDatas.loadState==2&&e.queryTickDatas.block==0?(n(),m("div",P,"Tick not exist")):k("",!0),e.queryTickDatas.loadState==2&&e.queryTickDatas.block>0?(n(),m("div",j,[s("div",E,[H,c(" "+i(e.queryTickDatas.max),1)]),s("div",G,[J,c(" "+i(e.queryTickDatas.lim),1)]),s("div",K,[M,c(" "+i(e.queryTickDatas.supply),1)]),a(q,{alignment:"center",class:"resultDiv"},{default:l(()=>[O,a(v,{style:{width:"300px"},percentage:e.queryTickDatas.progress,color:e.progressColors,"stroke-width":8},null,8,["percentage","color"])]),_:1})])):k("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),s("fieldset",null,[W,a(b,{model:e.queryBalanceDatas,"label-width":"80px",class:"tabInner",size:"large"},{default:l(()=>[a(p,{label:"tick"},{default:l(()=>[a(D,{span:14},{default:l(()=>[a(h,{modelValue:e.queryBalanceDatas.tick,"onUpdate:modelValue":u[1]||(u[1]=y=>e.queryBalanceDatas.tick=y),placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),a(p,{label:"address"},{default:l(()=>[a(D,{span:14},{default:l(()=>[a(h,{modelValue:e.queryBalanceDatas.address,"onUpdate:modelValue":u[2]||(u[2]=y=>e.queryBalanceDatas.address=y),placeholder:""},null,8,["modelValue"])]),_:1}),e.bSignedIn?(n(),f(D,{key:0,span:4},{default:l(()=>[a(B,{style:{"margin-left":"4px"},type:"primary",plain:"",onClick:_.onClickFillAddress},{default:l(()=>[c("Fill current account")]),_:1},8,["onClick"])]),_:1})):k("",!0)]),_:1}),a(p,null,{default:l(()=>[a(q,{direction:"vertical",alignment:"start"},{default:l(()=>[C((n(),f(B,{type:"primary",onClick:_.onClickQueryBalance,disabled:!_.queryBalanceBtnValid},{default:l(()=>[c("Query")]),_:1},8,["onClick","disabled"])),[[T,e.queryBalanceDatas.loadState==1]]),e.queryBalanceDatas.loadState==2&&e.queryBalanceDatas.block==0?(n(),m("div",X,"Tick not exist")):k("",!0),e.queryBalanceDatas.loadState==2&&e.queryBalanceDatas.block>0?(n(),m("div",Y,[s("div",Z,[$,c(" "+i(e.queryBalanceDatas.balance),1)]),a(x),s("div",ee,[ae,c(" "+i(e.queryBalanceDatas.max),1)]),s("div",se,[te,c(" "+i(e.queryBalanceDatas.lim),1)]),s("div",le,[oe,c(" "+i(e.queryBalanceDatas.supply),1)]),a(q,{alignment:"center",class:"resultDiv"},{default:l(()=>[ce,a(v,{style:{width:"300px"},percentage:e.queryBalanceDatas.progress,color:e.progressColors,"stroke-width":8},null,8,["percentage","color"])]),_:1})])):k("",!0)]),_:1})]),_:1})]),_:1},8,["model"])])])}const ye=S(U,[["render",re],["__scopeId","data-v-4c5c3b25"]]);export{ye as default};
