import{G as O,bC as w,K as B,d as e,a7 as x,bD as A,bE as L,a as N,v as u,w as a,bF as W,o as d,bG as I,j as p,q as s,y as _,i,P as c,x as b,R as f,bH as D,bI as R,bJ as K,V as C,m as M,p as k,g as v,h as g,l as h,f as P,k as j,e as F,bK as G,aN as H,Y as U,s as Y,bL as q,bM as E,n as m}from"./Bo5CoKcQ.js";import{_ as J}from"./Cqa-6P3Z.js";const z=O()({name:"VAppBarTitle",props:w(),setup(l,t){let{slots:V}=t;return B(()=>e(A,x(l,{class:"v-app-bar-title"}),V)),{}}}),T=N(),Q={name:"DefaultLayout",data(){return{dialog:!1,signOutWarn:!1,clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},computed:{isLoggined:()=>T.isLoggedIn},methods:{handleSignOut(){this.signOutWarn=!0},handleSignOutConfirm(){this.signOutWarn=!1,T.signOut()},handleShareBtnTap(){navigator.share({url:"https://wari.ynetlabo.net/",title:"wa/riで割り勘"})}}},X=Y("div",null,"SNSアカウントと連携していない場合はMyRoomを復元できません。",-1);function Z(l,t,V,$,n,r){const y=q,S=E;return d(),u(W,{dark:""},{default:a(()=>[e(D,{app:"",color:"brown-darken-4",collapse:!r.isLoggined},{default:a(()=>[e(I,{icon:"mdi-home",variant:"text",onClick:t[0]||(t[0]=o=>("navigateTo"in l?l.navigateTo:p(m))("/entrance"))}),e(z,null,{default:a(()=>[e(y)]),_:1}),r.isLoggined?(d(),u(s,{key:0,onClick:r.handleShareBtnTap,icon:""},{default:a(()=>[e(_,null,{default:a(()=>[i("mdi-share-variant-outline")]),_:1})]),_:1},8,["onClick"])):c("",!0),r.isLoggined?(d(),u(s,{key:1,onClick:r.handleSignOut,icon:""},{default:a(()=>[e(_,null,{default:a(()=>[i("mdi-logout")]),_:1})]),_:1},8,["onClick"])):c("",!0),e(s,{icon:""},{default:a(()=>[e(b,null,{default:a(()=>[e(f,{onClick:t[1]||(t[1]=o=>n.dialog=!0),src:J})]),_:1})]),_:1})]),_:1},8,["collapse"]),e(K,null,{default:a(()=>[R(l.$slots,"default")]),_:3}),e(S),e(h,{modelValue:n.signOutWarn,"onUpdate:modelValue":t[3]||(t[3]=o=>n.signOutWarn=o),width:"auto"},{default:a(()=>[e(C,{"prepend-icon":"mdi-logout",title:"サインアウトしますか？"},{default:a(()=>[e(M,null,{default:a(()=>[X]),_:1}),e(k,null,{default:a(()=>[e(v,null,{default:a(()=>[e(g,null,{default:a(()=>[e(s,{color:"primary",block:"",onClick:r.handleSignOutConfirm},{default:a(()=>[i("サインアウト")]),_:1},8,["onClick"])]),_:1}),e(g,null,{default:a(()=>[e(s,{color:"primary",block:"",onClick:t[2]||(t[2]=o=>n.signOutWarn=!1)},{default:a(()=>[i("キャンセル")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(h,{modelValue:n.dialog,"onUpdate:modelValue":t[7]||(t[7]=o=>n.dialog=o),width:"500"},{default:a(()=>[e(C,null,{default:a(()=>[e(P,{class:"text-h7"},{default:a(()=>[i(" Author ")]),_:1}),e(j,null,{default:a(()=>[i("Copyright 2024 Y.NetLabo")]),_:1}),e(v,null,{default:a(()=>[e(g,null,{default:a(()=>[e(F,null,{default:a(()=>[e(f,{contain:"",src:G,height:"120px",onClick:t[4]||(t[4]=()=>{("navigateTo"in l?l.navigateTo:p(m))("https://web.ynetlabo.net/",{external:!0,open:{target:"_blank"}})})}),e(b,null,{default:a(()=>[e(f,{onClick:t[5]||(t[5]=()=>{("navigateTo"in l?l.navigateTo:p(m))("https://mapengu.ynetlabo.net/",{external:!0,open:{target:"_blank"}})}),src:"https://mapengu.ynetlabo.net/favicon.ico"})]),_:1})]),_:1})]),_:1})]),_:1}),e(H),e(k,null,{default:a(()=>[e(U),e(s,{color:"primary",text:"",onClick:t[6]||(t[6]=o=>n.dialog=!1)},{default:a(()=>[i(" OK ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:3})}const te=L(Q,[["render",Z]]);export{te as default};