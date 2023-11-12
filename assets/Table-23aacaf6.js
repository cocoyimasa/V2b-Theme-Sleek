import{b as s,c as o,d as t,t as c,r as y,a as b,o as C,F as g,y as $,g as f,w as S,v as q,S as T,j as M,k,A as j,u,i as p,n as B}from"./index-8c629536.js";import{C as D,b as I}from"./data-4d5ebd04.js";const x=""+new URL("../img/touxiang.jpg",import.meta.url).href,z={class:"bg-[var(--theme-com-item)] w-full h-full rounded-lg filter blur-[0.8px]"},A={class:"text-[var(--theme-text)] flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto"},Dt={__name:"InfoNo",props:{title:String},setup(a){const l=a;return(n,_)=>(s(),o("div",z,[t("p",A,c(l.title),1)]))}},F=a=>y({url:"api/v1/user/ticket/fetch",method:"get",params:{id:a}}),L=(a,l)=>y({url:"api/v1/user/ticket/reply",method:"post",data:{id:a,message:l}}),N={class:"absolute z-20 top-0 w-full h-full bg-[rgba(0,0,0,0.5)]"},V={class:"w-screen h-screen flex fixed top-0 justify-center items-center"},E={class:"shadow-md bg-[var(--theme-model-bg)] shadow-[var(--theme-shadow-bg)] text-[var(--theme-title)] w-80 h-96 lg:w-[28rem] lg:h-[30rem] flex p-4 rounded-lg flex-col"},G=t("div",{class:"flex items-center"},[t("img",{class:"rounded-full w-10 h-10",src:x}),t("div",{class:"pl-2"},[t("div",{class:"font-semibold"},[t("p",null,"客服")])])],-1),H=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),U=[H],P={class:"flex-1 px-4 py-4 overflow-y-auto"},R={key:0,class:"flex items-center mb-4"},Y=t("div",{class:"flex-none flex flex-col items-center space-y-1 mr-4"},[t("img",{class:"rounded-full w-10 h-10",src:x}),t("a",{href:"#",class:"block text-xs hover:underline"},"客服")],-1),J={class:"flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative"},K=t("div",{class:"absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"},null,-1),O={key:1,class:"flex items-center flex-row-reverse mb-4"},Q=t("div",{class:"flex-none flex flex-col items-center space-y-1 ml-4"},[t("img",{class:"rounded-full w-10 h-10",src:x}),t("a",{href:"#",class:"block text-xs hover:underline"},"我")],-1),W={class:"flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative"},X=t("div",{class:"absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"},null,-1),Z={key:0,class:"flex items-center p-2"},tt={key:0,class:"m-auto"},et={class:"w-full mx-2"},st=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),ot=[st],lt={__name:"Chat",props:{id:Number,remove:Function},setup(a){const l=a,n=b(null),_=b(""),v=()=>{F(l.id).then(d=>{n.value=d.data.data})};C(()=>{v()});let r=setInterval(()=>{v(),n.value.status===1&&clearInterval(r)},1e4);const i=()=>{l.remove(),clearInterval(r)},e=()=>{L(l.id,_.value).then(d=>{v()}).catch(d=>{T("提交失败",d.data.message,400)})};return(d,m)=>(s(),o("div",N,[t("div",V,[t("div",E,[t("div",{class:"flex items-center justify-between border-b p-2"},[G,t("div",null,[t("button",{onClick:i,class:"inline-flex rounded-full p-2",type:"button"},U)])]),t("div",P,[n.value!==null?(s(!0),o(g,{key:0},$(n.value.message,(h,w)=>(s(),o(g,null,[h.is_me!==!0?(s(),o("div",R,[Y,t("div",J,[t("div",null,c(h.message),1),K])])):(s(),o("div",O,[Q,t("div",W,[t("div",null,c(h.message),1),X])]))],64))),256)):f("",!0)]),n.value!==null?(s(),o("div",Z,[n.value.status===1?(s(),o("p",tt,"工单已关闭，如有新疑问，请添加新工单")):(s(),o(g,{key:1},[t("div",et,[S(t("input",{class:"outline-0 w-full text-black p-2 rounded-full border border-gray-200",type:"text","onUpdate:modelValue":m[0]||(m[0]=h=>_.value=h),placeholder:"Aa"},null,512),[[q,_.value]])]),t("div",null,[t("button",{onClick:e,class:"inline-flex rounded-full p-2",type:"button"},ot)])],64))])):f("",!0)])])]))}},nt=a=>{const n=M(lt,{id:a,remove:()=>{k(null,document.getElementById("Model"))}});k(n,document.getElementById("Model"))},at={class:"inline-block min-w-full overflow-scroll rounded-lg shadow"},ct={class:"min-w-full leading-normal text-[var(--theme-title)]"},rt={class:"bg-[var(--theme-com)] sticky top-0"},it={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase"},dt={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase"},ut={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase"},ht=t("th",{scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase"}," 操作 ",-1),pt={class:"bg-[var(--theme-com-item)]"},_t={class:"px-5 py-5 text-sm"},mt={class:"flex items-center"},vt=t("div",{class:"flex-shrink-0"},[t("img",{alt:"profil",src:x,class:"mx-auto object-cover rounded-full h-10 w-10"})],-1),gt={class:"mx-3"},xt={class:"whitespace-nowrap w-[6rem] overflow-hidden overflow-ellipsis"},ft={class:"px-5 py-5 text-sm"},wt={class:"whitespace-nowrap"},bt={class:"px-5 py-5 text-sm"},kt={class:"relative whitespace-nowrap"},yt={class:"px-5 py-5 text-sm"},$t={class:"flex gap-5 items-center"},Ct=["onClick"],St=t("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",class:"w-8 h-8 text-stone-300",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"})],-1),qt=[St],Tt=["onClick"],It={__name:"Table",setup(a){const l=j(),n=r=>{nt(r)},_=r=>{D(r).then(i=>{I().then(e=>{l.Set_Ticket(e.data.data)})})},v=r=>{const i=new Date(r*1e3),e=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),m=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),w=String(i.getMinutes()).padStart(2,"0");return`${e}/${d}/${m} ${h}:${w}`};return(r,i)=>(s(),o("div",at,[t("table",ct,[t("thead",rt,[t("tr",null,[t("th",it,c(u(p).global.t("Ticket.Title")),1),t("th",dt,c(u(p).global.t("Ticket.Time")),1),t("th",ut,c(u(p).global.t("Ticket.Status")),1),ht])]),t("tbody",pt,[(s(!0),o(g,null,$(u(l).Ticket,(e,d)=>(s(),o("tr",{key:d},[t("td",_t,[t("div",mt,[vt,t("div",gt,[t("p",xt,c(e.subject),1)])])]),t("td",ft,[t("p",wt,c(v(e.updated_at)),1)]),t("td",bt,[t("span",{class:B([e.status===1?"text-red-600  bg-red-200":e.reply_status===1?"text-yellow-600  bg-yellow-200":"text-green-600  bg-green-200","relative inline-block px-3 py-1 font-semibold leading-tight rounded-lg"])},[t("span",kt,c(e.status===1?u(p).global.t("Ticket.Status3"):e.reply_status===1?u(p).global.t("Ticket.Status1"):u(p).global.t("Ticket.Status2")),1)],2)]),t("td",yt,[t("div",$t,[t("p",{class:"whitespace-nowrap cursor-pointer",onClick:m=>n(e.id)},qt,8,Ct),e.status!==1?(s(),o("p",{key:0,onClick:m=>_(e.id),class:"whitespace-nowrap bg-red-400 cursor-pointer p-1 rounded-lg"},c(u(p).global.t("Ticket.Close")),9,Tt)):f("",!0)])])]))),128))])])]))}};export{Dt as _,x as a,It as b};