import{u as _,U as p,b as k,c as B,d as a,w as e,e as C,n as r,o as h,g as n,h as t,q as g,i as o,v,x as s,t as V,V as d,f as u,m as i,z as T,j as b,P as S,s as m}from"./entry.5b2rDDrJ.js";import{S as f}from"./index.es.eOzeECfp.js";const w=m("div",{class:"ftext-ht2"},"共有リンク",-1),R=m("div",{class:"ftext-ht1"}," QRコードまたはここをタップで、簡単に共有できます ",-1),U=_(),y=p(),I={components:{QRCodeVue3:f},async mounted(){this.roomId=y.params.id,this.roomData=await U.getRoom(this.roomId),this.shareUrl="https://wari.ynetlabo.net/?joinroomid="+this.roomId},data(){return{roomData:null,shareUrl:void 0,roomId:null}},methods:{handleShareBtnTap(){navigator.share({url:this.shareUrl,title:"wa/riで割り勘"})},handleMemberBtnTap(){r("./member/list")},handleBookBtnTap(){r("./book/list")},handleSplitBtnTap(){r("./book/split")},handleBackBtnTap(){r("/entrance")}}},z=Object.assign(I,{__name:"dashboard",setup(N){return k({title:"ダッシュボード"}),(l,q)=>(h(),B("div",null,[a(C,null,{default:e(()=>[a(n,null,{default:e(()=>[a(t,{cols:"auto"},{default:e(()=>[a(g,{onClick:l.handleBackBtnTap,color:"orange-darken-2","prepend-icon":"mdi-arrow-left",variant:"tonal"},{default:e(()=>[o("マイページに戻る")]),_:1},8,["onClick"])]),_:1})]),_:1}),a(n,null,{default:e(()=>[a(t,null,{default:e(()=>{var c;return[a(v,{color:"orange-darken-2"},{default:e(()=>[a(s,{icon:"mdi-home"})]),_:1}),o(" "+V((c=l.roomData)==null?void 0:c.roomName),1)]}),_:1})]),_:1}),a(n,null,{default:e(()=>[a(t,{cols:"6"},{default:e(()=>[a(d,{variant:"outlined",color:"orange-darken-2",onClick:l.handleMemberBtnTap},{default:e(()=>[a(u,null,{default:e(()=>[a(s,{icon:"mdi-account-group"}),o("メンバー ")]),_:1}),a(i,null,{default:e(()=>[o("割り勘のメンバーを編集しましょう")]),_:1})]),_:1},8,["onClick"])]),_:1}),a(t,{cols:"6"},{default:e(()=>[a(d,{onClick:l.handleBookBtnTap,variant:"outlined",color:"orange-darken-2"},{default:e(()=>[a(u,null,{default:e(()=>[a(s,{icon:"mdi-cash-multiple"}),o("記帳 ")]),_:1}),a(i,null,{default:e(()=>[o("出費／集金を記録しましょう")]),_:1})]),_:1},8,["onClick"])]),_:1}),a(t,{cols:"6"},{default:e(()=>[a(d,{onClick:l.handleSplitBtnTap,variant:"outlined",color:"orange-darken-2"},{default:e(()=>[a(u,null,{default:e(()=>[a(s,{icon:"mdi-set-split"}),o("割り勘 ")]),_:1}),a(i,null,{default:e(()=>[o("建て替え／余り金を精算しましょう")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),a(n,null,{default:e(()=>[a(t,{cols:"12"},{default:e(()=>[l.shareUrl?(h(),T(d,{key:0,color:"orange-darken-2",variant:"elevated",onClick:l.handleShareBtnTap},{default:e(()=>[a(n,null,{default:e(()=>[a(t,{cols:"4"},{default:e(()=>[a(i,null,{default:e(()=>[a(b(f),{width:"80",height:"80","qr-options":{errorCorrectionLevel:"L"},"corners-square-options":{type:"square",imageSize:1,margin:0},value:l.shareUrl},null,8,["value"])]),_:1})]),_:1}),a(t,null,{default:e(()=>[w,R]),_:1})]),_:1})]),_:1},8,["onClick"])):S("",!0)]),_:1})]),_:1})]),_:1})]))}});export{z as default};
