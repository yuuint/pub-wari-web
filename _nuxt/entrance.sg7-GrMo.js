import{u as T,a as k,b as v,c as _,d as e,w as a,V as i,e as h,n as p,o as u,f as V,g as m,h as n,i as o,t as w,j as C,k as b,F as M,r as S,l as W,m as B,p as I,q as f,s as y,v as D,x as N,y as j,z as L}from"./entry.9wm2MXXQ.js";import{V as O,a as A,b as $}from"./VList.TIruW2Jn.js";const F=y("div",null,"MyRoomから解除しますか？",-1),U=y("div",null," ※リストから解除しても作成したルーム自体は削除されません。 ",-1),s=T(),c=k(),q={mounted(){s.getMyRooms(),c.joinRoomId&&(this.handleMyRoomTap(c.joinRoomId),c.setJoinRoomId(""))},data(){return{deleteWarn:!1,delTarget:null,signOutWarn:!1}},methods:{handleCreateBtnTap(){p("/rooms/create")},handleMyRoomTap(d){p("/rooms/"+d+"/dashboard")},handleSignOut(){this.signOutWarn=!0},handleDeleteTran(d){this.deleteWarn=!0,this.delTarget=d},async handleDeleteConfirm(){this.deleteWarn=!1,await s.deleteMyRoom(this.delTarget),s.getMyRooms()}}},H=Object.assign(q,{__name:"entrance",setup(d){const g=k();return v({title:"マイページ"}),(l,r)=>(u(),_("div",null,[e(i,{variant:"flat",class:"mt-2 mr-2 ml-2"},{default:a(()=>[e(V,null,{default:a(()=>[e(m,null,{default:a(()=>[e(n,{cols:"4"},{default:a(()=>[o("マイページ")]),_:1}),e(n,{class:"text-right"},{default:a(()=>[o(w(C(g).appUserName??"ゲスト")+"さん",1)]),_:1})]),_:1})]),_:1})]),_:1}),e(h,null,{default:a(()=>[e(m,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(i,{color:"orange-darken-2",variant:"elevated",onClick:l.handleCreateBtnTap},{default:a(()=>[e(V,null,{default:a(()=>[o("新規作成")]),_:1}),e(b,null,{default:a(()=>[o("共有可能な割り勘ルームを新規作成します。 ")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:a(()=>[e(O,{lines:"two"},{default:a(()=>[e(A,null,{default:a(()=>[o("MyRooms")]),_:1}),(u(!0),_(M,null,S(C(s).myRooms,t=>(u(),L($,{key:t.roomId,title:t.roomName,subtitle:"Created By "+(t.ownerName??"unknown"),onClick:R=>l.handleMyRoomTap(t.roomId),rounded:""},{prepend:a(()=>[e(D,{color:"orange"},{default:a(()=>[e(N,{color:"white",icon:"mdi-home"})]),_:1})]),append:a(()=>[e(f,{variant:"flat",color:"yellow-darken-4",icon:"mdi-link-off",onClick:j(R=>l.handleDeleteTran(t.roomId),["stop"])},null,8,["onClick"])]),_:2},1032,["title","subtitle","onClick"]))),128)),e(W,{modelValue:l.deleteWarn,"onUpdate:modelValue":r[1]||(r[1]=t=>l.deleteWarn=t),width:"auto"},{default:a(()=>[e(i,{"prepend-icon":"mdi-link-off",title:"MyRoomから解除しますか？"},{default:a(()=>[e(B,null,{default:a(()=>[F,U]),_:1}),e(I,null,{default:a(()=>[e(m,null,{default:a(()=>[e(n,null,{default:a(()=>[e(f,{color:"primary",block:"",onClick:l.handleDeleteConfirm},{default:a(()=>[o("解除する")]),_:1},8,["onClick"])]),_:1}),e(n,null,{default:a(()=>[e(f,{color:"primary",block:"",onClick:r[0]||(r[0]=t=>l.deleteWarn=!1)},{default:a(()=>[o("キャンセル")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}});export{H as default};
