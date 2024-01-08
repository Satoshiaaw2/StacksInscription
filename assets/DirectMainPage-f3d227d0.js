import{a as S,i as N,j as V,u as A,k as U,U as v,r as F,b as _,l as M,o as s,c as a,d as e,m as y,t as u,g as c,f as w,w as k,n as W,q as x,s as B,v as O,p as j,h as z}from"./index-492f4f73.js";import{C,c as L}from"./ContractHelper-fb9fbece.js";import{f as H}from"./browser-ponyfill-635efb53.js";const q=B(),T=O(),P={name:"DirectMainPage",components:{},data(){return{kFixImageHeight:400,bLoadSummaryFinish:!1,curId:1,maxId:10,totalAmount:0,curInsData:{bLoading:!1,curInscriptionId:"",block:0,dataType:"",dataLength:"",payload:"",owner:"",optInfo:{imageUrl:"",imageWidth:"",text:""}},bNonDSMode:!0}},async mounted(){await this.loadSummary(),this.totalAmount>0&&this.showInscription(this.maxId)},methods:{_inGetNetType(){return N()},async loadSummary(){const n=await C.loadSummary();this.totalAmount=parseInt(n.last_token_id),this.curId=this.maxId=Math.max(this.totalAmount,1),this.bLoadSummaryFinish=!0},async onClickChangeInscriptionId(){this.curId>=1&&this.curId<=this.maxId&&this.showInscription(this.curId)},async showInscription(n){this.curId=n;const o=V(A(this.curId));try{this.curInsData.bLoading=!0;const p=await H(`${q.coreApiUrl}/v2/map_entry/${T.defaultContractAddress}/${T.inscriptionsContract.name}/map_inscriptions`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},proof:0,body:JSON.stringify(o)});if(p.status==200){const t=await p.json(),d=U(t.data).value.data,f=Number(L(d.block)),l=L(d.type),m=d.payload.buffer,D=m.length;let i={imageUrl:null,text:null},r=!1;if(l.startsWith("image/")){i.imageUrl=window.URL.createObjectURL(new Blob([m],{type:l})),r=!0;var h=new Image;h.src=i.imageUrl;let b=this;h.onload=function(){b.curInsData.bLoading=!1,b.curInsData.optInfo.imageWidth=Math.ceil(h.width*b.kFixImageHeight/h.height)}}else(l=="text"||l=="deploy-stx10")&&(i.text=new TextDecoder().decode(d.payload.buffer));r||(this.curInsData.bLoading=!1),this.curInsData.curInscriptionId=n,this.curInsData.block=f,this.curInsData.dataType=l,this.curInsData.dataLength=D,this.curInsData.payload=m,this.curInsData.owner="",this.curInsData.optInfo.imageUrl=i.imageUrl,this.curInsData.optInfo.imageWidth=i.imageWidth,this.curInsData.optInfo.text=i.text}else v.alert(`Request server fail, tokenId=${this.curId}, code=${p.status}, please try again 1 minute later.`)}catch{v.alert(`Request server fail, tokenId=${this.curId}, please try again 1 minute later.`)}finally{this.curInsData.bLoading=!1}},async onClickQueryOwner(){const n=this.curInsData.curInscriptionId,o=await C.queryNFTOwner(n);n==this.curInsData.curInscriptionId&&n==this.curId&&(this.curInsData.owner=o||"")},onClickLatest(){this.showInscription(this.maxId)},onChangeDSMode(){setTimeout(()=>{F.push({path:"/",replace:!0})},100)}}},g=n=>(j("data-v-740b6054"),n=n(),z(),n),R={id:"main"},Q={id:"title"},E={key:0},G={key:0,id:"searchArea"},J=g(()=>e("span",{id:"id"},"ID:",-1)),K={key:1,id:"inscInfoArea"},X={id:"previewPayload"},Y={key:0},Z={key:1},$=["src","width","height"],tt={key:2},et={id:"briefInfoArea"},nt=g(()=>e("span",null,"Block: ",-1)),ot=g(()=>e("span",null,"Content type: ",-1)),st=g(()=>e("span",null,"Content length: ",-1)),at=g(()=>e("span",null,"Owner: ",-1)),it=["href"],rt={key:2,id:"emptyTip"},ct={id:"dsArea"};function lt(n,o,h,p,t,I){const d=_("el-input-number"),f=_("el-space"),l=_("el-input"),m=_("el-button"),D=_("el-switch"),i=M("loading");return s(),a("div",R,[e("div",Q,[y("Total Inscriptions: "),t.bLoadSummaryFinish?(s(),a("span",E,u(t.totalAmount),1)):c("",!0)]),t.bLoadSummaryFinish&&t.totalAmount>0?(s(),a("div",G,[w(f,{size:"large"},{default:k(()=>[J,w(d,{modelValue:t.curId,"onUpdate:modelValue":o[0]||(o[0]=r=>t.curId=r),min:1,max:t.maxId,size:"large",onChange:I.onClickChangeInscriptionId,disabled:t.curInsData.bLoading},null,8,["modelValue","max","onChange","disabled"])]),_:1})])):c("",!0),t.totalAmount>0?W((s(),a("fieldset",K,[e("legend",null,"Inscription #"+u(t.curInsData.curInscriptionId),1),e("div",X,[!t.curInsData.bLoading&&(t.curInsData.dataType=="text"||t.curInsData.dataType=="deploy-stx10")?(s(),a("div",Y,[w(l,{modelValue:t.curInsData.optInfo.text,"onUpdate:modelValue":o[1]||(o[1]=r=>t.curInsData.optInfo.text=r),readonly:"",type:"textarea",autosize:"",resize:"none"},null,8,["modelValue"])])):!t.curInsData.bLoading&&t.curInsData.dataType.startsWith("image/")?(s(),a("div",Z,[e("img",{src:t.curInsData.optInfo.imageUrl,width:t.curInsData.optInfo.imageWidth,height:t.kFixImageHeight,alt:""},null,8,$)])):t.curInsData.bLoading?c("",!0):(s(),a("div",tt," Not support preview yet. "))]),e("div",et,[e("div",null,[nt,y(u(t.curInsData.block),1)]),e("div",null,[ot,y(u(t.curInsData.dataType),1)]),e("div",null,[st,y(" "+u(t.curInsData.dataLength)+" bytes ",1)]),e("div",null,[at,t.curInsData.owner.length>0?(s(),a("a",{key:0,style:{color:"white"},href:"https://explorer.hiro.so/address/"+t.curInsData.owner+"?chain="+I._inGetNetType(),target:"_blank"},u(t.curInsData.owner),9,it)):c("",!0),t.curInsData.owner.length==0?(s(),x(m,{key:1,type:"info",size:"small",onClick:I.onClickQueryOwner},{default:k(()=>[y("Query")]),_:1},8,["onClick"])):c("",!0)])])])),[[i,t.curInsData.bLoading]]):c("",!0),t.bLoadSummaryFinish&&t.totalAmount==0?(s(),a("div",rt,"No inscription yet")):c("",!0),e("div",ct,[t.bLoadSummaryFinish?(s(),x(D,{key:0,modelValue:t.bNonDSMode,"onUpdate:modelValue":o[2]||(o[2]=r=>t.bNonDSMode=r),"active-text":"Non dedicate server","inactive-text":"Dedicate server",onChange:I.onChangeDSMode},null,8,["modelValue","onChange"])):c("",!0)])])}const pt=S(P,[["render",lt],["__scopeId","data-v-740b6054"]]);export{pt as default};