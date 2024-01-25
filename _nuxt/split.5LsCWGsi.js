import{A as k,B as I,D as _,G as A,K as N,d as e,u as V,U as B,b as M,c as h,w as r,e as S,W as w,n as p,o as u,q as J,i as o,s as D,t as n,g as C,h as f,V as y,f as L,x as l,k as d,F as T,r as v,v as F,z as c,P}from"./entry.5b2rDDrJ.js";import{S as j}from"./index.es.eOzeECfp.js";import{V as Y,b as E,c as R}from"./VList.DHdCbgLR.js";const b=k({start:Boolean,end:Boolean,...I(),..._()},"VListItemMedia"),W=A()({name:"VListItemMedia",props:b(),setup(a,t){let{slots:s}=t;return N(()=>e(a.tag,{class:["v-list-item-media",{"v-list-item-media--start":a.start,"v-list-item-media--end":a.end},a.class],style:a.style},s)),{}}}),q={class:"ftext-ht1g text-center"},U={class:"ftext-ht1 text-center"},g=V(),$=B(),z={components:{QRCodeVue3:j},async mounted(){this.roomId=$.params.id,this.roomData=await g.getRoom(this.roomId),this.roomTrans=await g.getRoomPayTransactions(this.roomId),this.roomMates=await g.getRoomMates(this.roomId),this.shareUrl="https://wari.ynetlabo.net/?joinroomid="+this.roomId,this.roomMates.forEach(a=>{this.roomMemberCnt+=1,this.paySumByMemberMap.set(a.id,{payTranSum:0,payCrSum:0,payDrSum:0,payDiff:0,dispTranSum:"",dispDrSum:"",dispCrSum:"",dispDiff:""})}),this.roomTrans.forEach(a=>{a.payType===w.CREDIT?(this.payTranSum-=Number(a.value),this.payCrSum+=Number(a.value),this.paySumByMemberMap.has(a.member)&&(this.paySumByMemberMap.get(a.member).payTranSum-=Number(a.value),this.paySumByMemberMap.get(a.member).payCrSum+=Number(a.value))):(a.value>0&&(this.payTranSum+=Number(a.value),this.payDrSum+=Number(a.value)),this.paySumByMemberMap.has(a.member)&&(this.paySumByMemberMap.get(a.member).payTranSum-=Number(a.value),this.paySumByMemberMap.get(a.member).payDrSum+=Number(a.value)))}),this.roomMemberCnt&&(this.payAt=this.payCrSum/this.roomMemberCnt,this.dispPayAt=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(this.payAt)),this.roomMates.forEach(a=>{a.payTranSum=this.paySumByMemberMap.get(a.id).payTranSum,a.payCrSum=this.paySumByMemberMap.get(a.id).payCrSum,a.payDrSum=this.paySumByMemberMap.get(a.id).payDrSum,a.payDiff=this.payAt-(a.payCrSum+a.payDrSum),a.payDiffAfter=a.payDiff,a.payToList=[],a.dispTranSum=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(this.paySumByMemberMap.get(a.id).payTranSum),a.dispDrSum=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(this.paySumByMemberMap.get(a.id).payDrSum),a.dispCrSum=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(this.paySumByMemberMap.get(a.id).payCrSum),a.dispDiff=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(Math.abs(a.payDiff))}),this.roomMates.forEach(a=>{a.payDiffAfter>0&&this.roomMates.forEach(t=>{if(a.id!==t.id&&t.payDiffAfter<0&&t.payDiffAfter+a.payDiffAfter==0){let s=0;if(t.payDiffAfter+a.payDiffAfter>0?s=t.payDiffAfter*-1:s=a.payDiffAfter,s){a.payDiffAfter-=s;const i=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(s);s>=1&&(a.payToList.push({text:i+" ("+t.memberName+" へ)",isIn:!1}),t.payDiffAfter+=s,t.payToList.push({text:i+" ("+a.memberName+" から)",isIn:!0}))}}})}),this.roomMates.forEach(a=>{a.payDiffAfter>0&&this.roomMates.forEach(t=>{if(a.id!==t.id&&t.payDiffAfter<0){let s=0;if(t.payDiffAfter+a.payDiffAfter>0?s=t.payDiffAfter*-1:s=a.payDiffAfter,s&&s>=1){a.payDiffAfter-=s;const i=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(s);a.payToList.push({text:i+" ("+t.memberName+" へ)",isIn:!1}),t.payDiffAfter+=s,t.payToList.push({text:i+" ("+a.memberName+" から)",isIn:!0})}}})}),this.dispTranSum=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(this.payTranSum),this.dispDrSum=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(this.payDrSum),this.dispCrSum=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(this.payCrSum),this.loading=!1},data(){return{roomMates:[],roomData:null,shareUrl:void 0,roomId:null,loading:!0,roomMemberCnt:0,payTranSum:0,payDrSum:0,payCrSum:0,payAt:0,dispTranSum:0,dispDrSum:0,dispCrSum:0,dispPayAt:"-",paySumByMemberMap:new Map,headers:[{title:"日付",align:"start",sortable:!0,key:"date",minWidth:"5rem"},{title:"区分",align:"start",sortable:!0,key:"payType",minWidth:"3rem"},{title:"金額",align:"end",sortable:!1,key:"displayValue",minWidth:"5rem"},{title:"内容",align:"start",sortable:!0,key:"title",minWidth:"10rem"},{title:"メンバー",align:"start",sortable:!0,key:"memberName",minWidth:"8rem"},{title:"カテゴリ",align:"end",sortable:!0,key:"category",minWidth:"8rem"}],roomTrans:[],items:[{date:"2024/1/14",plusMinus:1,value:"¥-123,000",member:"優希",title:"sample titlaaaaaaaaaaaaaaaae",way:"建替",category:"宿泊代"}]}},methods:{handleBackBtnTap(){p("../dashboard")},handleSummaryBtnTap(){p("./list")},handleCrTrun(a){p({path:"./cr-tran",query:{member:a}})},handleDrTrun(a){p({path:"./dr-tran",query:{member:a}})},getPaysumVariant(a){return a!=0?"elevated":"tonal"}}},O=Object.assign(z,{__name:"split",setup(a){return M({title:"ワリカン"}),(t,s)=>(u(),h("div",null,[e(S,null,{default:r(()=>[e(J,{onClick:t.handleBackBtnTap,color:"orange-darken-2","prepend-icon":"mdi-arrow-left",variant:"tonal"},{default:r(()=>[o("ルームに戻る")]),_:1},8,["onClick"])]),_:1}),e(S,null,{default:r(()=>{var i;return[D("div",q,n((i=t.roomData)==null?void 0:i.roomName)+"の割り勘提案 ",1),e(C,null,{default:r(()=>[e(f,null,{default:r(()=>[e(y,{onClick:t.handleSummaryBtnTap,color:"blue-grey-lighten-1"},{default:r(()=>[e(L,null,{default:r(()=>[e(l,{icon:"mdi-calculator-variant-outline"}),o(n(t.dispTranSum+"  ")+" ",1),D("div",U," 1人あたり費用　"+n(t.dispPayAt),1)]),_:1}),e(d,null,{default:r(()=>[e(C,null,{default:r(()=>[e(f,{cols:"6"},{default:r(()=>[e(y,{variant:t.getPaysumVariant(t.payDrSum),color:"teal-darken-4"},{default:r(()=>[e(d,null,{default:r(()=>[e(l,{icon:"mdi-cash-plus"}),o(n(t.dispDrSum),1)]),_:1})]),_:1},8,["variant"])]),_:1}),e(f,{cols:"6"},{default:r(()=>[e(y,{variant:t.getPaysumVariant(t.payCrSum),color:"yellow-darken-4"},{default:r(()=>[e(d,null,{default:r(()=>[e(l,{icon:"mdi-cash-minus"}),o(n(t.dispCrSum),1)]),_:1})]),_:1},8,["variant"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]}),_:1}),e(S,null,{default:r(()=>[e(Y,{lines:"three"},{default:r(()=>[(u(!0),h(T,null,v(t.roomMates,i=>(u(),c(E,{key:i.id,title:i.memberName},{prepend:r(()=>[e(F,{color:"orange-darken-1",variant:"outlined"},{default:r(()=>[e(l,{icon:"mdi-account"})]),_:1})]),default:r(()=>[e(W,null,{default:r(()=>[D("div",null,n(i.dispDiff+" ")+" "+n(i.payDiff<0?"受け取ってください":"渡してください"),1),(u(!0),h(T,null,v(i.payToList,m=>(u(),c(y,{key:m.text,class:"ftext-ht1g",variant:"flat"},{default:r(()=>[e(d,null,{default:r(()=>[m.isIn?(u(),c(l,{key:0,icon:"mdi-account-arrow-left",color:"blue"})):P("",!0),m.isIn?P("",!0):(u(),c(l,{key:1,icon:"mdi-account-arrow-right",color:"red"})),o(" "+n(m.text),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),e(R,null,{default:r(()=>[e(C,null,{default:r(()=>[e(f,{cols:"6"},{default:r(()=>[e(y,{variant:t.getPaysumVariant(i.payDrSum),color:"teal-darken-4",onClick:m=>t.handleDrTrun(i.id)},{default:r(()=>[e(d,null,{default:r(()=>[e(l,{icon:"mdi-cash-plus"}),o(n(i.dispDrSum),1)]),_:2},1024)]),_:2},1032,["variant","onClick"])]),_:2},1024),e(f,{cols:"6"},{default:r(()=>[e(y,{variant:t.getPaysumVariant(i.payCrSum),color:"yellow-darken-4",onClick:m=>t.handleCrTrun(i.id)},{default:r(()=>[e(d,null,{default:r(()=>[e(l,{icon:"mdi-cash-minus"}),o(n(i.dispCrSum),1)]),_:2},1024)]),_:2},1032,["variant","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1})]),_:1})]))}});export{O as default};
