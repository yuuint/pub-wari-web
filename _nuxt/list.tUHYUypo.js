import{u as _,U as V,b as k,c as u,d as e,w as a,e as c,l as C,n as p,o as d,q as m,i as r,j as f,s as g,t as w,g as T,h as b,V as h,f as y,F as v,r as B,m as I,p as D,_ as R,T as E,v as M,x as N,z as L}from"./entry.9JS5Pq2R.js";import{m as U}from"./member.Ruxq_-8N.js";import{V as j,b as A}from"./VList.F4ZM69fc.js";const F={class:"ftext-ht1g text-center"},n=_(),O=V(),S={async mounted(){this.roomId=O.params.id,this.roomData=await n.getRoom(this.roomId),this.roomMates=await n.getRoomMates(this.roomId),this.shareUrl="https://wari.ynetlabo.net/?joinroomid="+this.roomId},data(){return{roomData:null,roomMates:null,shareUrl:void 0,roomId:null,deleteError:!1}},methods:{handleBackBtnTap(){p("../dashboard")},handleCreateBtnTap(){p("./create")},async handleDeleteTran(s){const t=await n.getRoomPayTransactions(this.roomId),l=new Map;t.forEach(i=>{l.set(i.member)}),l.has(s.id)?this.deleteError=!0:(await n.deleteRoomMember(this.roomId,s.id),this.roomMates=await n.getRoomMates(this.roomId))}}},H=Object.assign(S,{__name:"list",setup(s){return k({title:"ルームメイト"}),(t,l)=>{const i=R;return d(),u("div",null,[e(c,null,{default:a(()=>{var o;return[e(m,{onClick:t.handleBackBtnTap,color:"orange-darken-2","prepend-icon":"mdi-arrow-left",variant:"tonal"},{default:a(()=>[r("ルームに戻る")]),_:1},8,["onClick"]),e(i,null,{default:a(()=>[e(f(E),{animationData:f(U),loop:!0,height:100,width:100},null,8,["animationData"])]),_:1}),g("div",F,w((o=t.roomData)==null?void 0:o.roomName)+"の参加メンバー ",1)]}),_:1}),e(c,null,{default:a(()=>[e(T,null,{default:a(()=>[e(b,{cols:"12"},{default:a(()=>[e(h,{color:"orange-darken-2",variant:"outlined",onClick:t.handleCreateBtnTap},{default:a(()=>[e(y,null,{default:a(()=>[r("メンバー追加")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),e(j,{lines:"two"},{default:a(()=>[(d(!0),u(v,null,B(t.roomMates,o=>(d(),L(A,{key:o.id,title:o.memberName},{prepend:a(()=>[e(M,{color:"orange-darken-1",variant:"outlined"},{default:a(()=>[e(N,{icon:"mdi-account"})]),_:1})]),append:a(()=>[e(m,{variant:"flat",color:"yellow-darken-4",icon:"mdi-delete-empty-outline",onClick:$=>t.handleDeleteTran(o)},null,8,["onClick"])]),_:2},1032,["title"]))),128))]),_:1})]),_:1}),e(C,{modelValue:t.deleteError,"onUpdate:modelValue":l[1]||(l[1]=o=>t.deleteError=o),width:"auto"},{default:a(()=>[e(h,{"prepend-icon":"mdi-book-alert",title:"削除できません"},{default:a(()=>[e(I,null,{default:a(()=>[r(" このメンバーには、すでに集金／支払い記録があります。削除する場合は記録を削除してください。 ")]),_:1}),e(D,null,{default:a(()=>[e(m,{color:"primary",block:"",onClick:l[0]||(l[0]=o=>t.deleteError=!1)},{default:a(()=>[r("OK")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});export{H as default};
