import{u as y,U as c,b as k,c as D,d as e,w as l,n as g,W as T,o as w,e as u,q as b,i as m,j as f,s as v,t as C,g as i,h as r,V as p,f as I,x as M,l as U,_ as P,T as R}from"./entry.TLCi9gJp.js";import{V as B,p as j}from"./VDatePicker.PFJoBnq7.js";import{V as S}from"./VForm.fsWiarMA.js";import{V as q}from"./VSelect.uHPeu6q3.js";import{V as d}from"./VTextField.vYk6q66d.js";import"./VList.MFM4AeHJ.js";const _={class:"ftext-ht1g text-center"},s=y(),V=c(),L={async mounted(){this.roomId=V.params.id,this.form.roomMateId=V.query.member??null,this.roomData=await s.getRoom(this.roomId),this.roomMates=await s.getRoomMates(this.roomId),this.shareUrl="https://wari.ynetlabo.net/?joinroomid="+this.roomId},data(){return{roomData:null,roomMates:null,shareUrl:void 0,roomId:null,form:{roomMateId:"",payDate:new Date,payValue:null,payTitle:""},valid:!0,datePicker:!1,rules:{required:n=>!!n||"入力してください"}}},computed:{listRoomMates(){return this.roomMates?this.roomMates:[{title:"ルーム",id:"999999"}]}},methods:{handleBackBtnTap(){window.history.back()},handleCreateBtnTap(){g("./create")},handleDateLabelTap(){this.datePicker=!0},handleDateUpdate(){this.datePicker=!1},async handleSubmit(){await this.$refs.form.validate(),this.valid&&(await s.addPayTransactions(this.roomId,T.CREDIT,this.form.payDate.toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"}),this.form.roomMateId,this.form.payValue,this.form.payTitle),window.history.back())}}},Y=Object.assign(L,{__name:"cr-tran",setup(n){return k({title:"レコード CR."}),(a,t)=>{const h=P;return w(),D("div",null,[e(S,{ref:"form",modelValue:a.valid,"onUpdate:modelValue":t[5]||(t[5]=o=>a.valid=o),"lazy-validation":""},{default:l(()=>[e(u,null,{default:l(()=>{var o;return[e(b,{onClick:a.handleBackBtnTap,color:"orange-darken-2","prepend-icon":"mdi-arrow-left",variant:"tonal"},{default:l(()=>[m("戻る")]),_:1},8,["onClick"]),e(h,null,{default:l(()=>[e(f(R),{animationData:f(j),loop:!0,height:100,width:100},null,8,["animationData"])]),_:1}),v("div",_,C((o=a.roomData)==null?void 0:o.roomName)+"に支払／建替を追加する ",1)]}),_:1}),e(u,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{cols:"6"},{default:l(()=>[e(q,{modelValue:a.form.roomMateId,"onUpdate:modelValue":t[0]||(t[0]=o=>a.form.roomMateId=o),items:a.listRoomMates,rules:[a.rules.required],"item-value":"id",label:"誰が"},null,8,["modelValue","items","rules"])]),_:1}),e(r,{cols:"6"},{default:l(()=>[e(d,{onClick:a.handleDateLabelTap,label:"いつ",outlined:"",readonly:"","model-value":a.form.payDate.toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"}),rules:[a.rules.required]},null,8,["onClick","model-value","rules"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(d,{label:"内容",outlined:"",class:"right",modelValue:a.form.payTitle,"onUpdate:modelValue":t[1]||(t[1]=o=>a.form.payTitle=o)},null,8,["modelValue"])]),_:1}),e(r,{cols:"6"}),e(r,{cols:"6"},{default:l(()=>[e(d,{label:"支払／建替金額",outlined:"",class:"right",suffix:"円",type:"number",modelValue:a.form.payValue,"onUpdate:modelValue":t[2]||(t[2]=o=>a.form.payValue=o),rules:[a.rules.required]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(p,{onClick:a.handleSubmit,variant:"flat",color:"yellow-darken-4"},{default:l(()=>[e(I,null,{default:l(()=>[e(M,{icon:"mdi-cash-minus"}),m("支払／建替を追加する ")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),e(i,{justify:"center"},{default:l(()=>[e(U,{modelValue:a.datePicker,"onUpdate:modelValue":t[4]||(t[4]=o=>a.datePicker=o),"close-on-content-click":!1,"full-screen":""},{default:l(()=>[e(p,{class:"d-flex justify-center align-center"},{default:l(()=>[e(B,{modelValue:a.form.payDate,"onUpdate:modelValue":[t[3]||(t[3]=o=>a.form.payDate=o),a.handleDateUpdate]},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});export{Y as default};
