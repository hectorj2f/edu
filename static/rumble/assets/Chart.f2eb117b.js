import{t as pt,j as o,Q as dt,g as ft,r as F,u as xt,l as vt,F as w,d,B as yt,G as K,v as Z,w as Ct,f as u,L as _t,T as gt,e as Ft}from"./RumbleLoader.c6d6c914.js";import{c as kt,e as Dt,J as $,L as tt,C as St,i as E,A as bt,a as Et}from"./ClipPath.d9870ced.js";import{G as mt,A as wt,a as Tt}from"./Grid.be76391d.js";function et(e){return e<0?-1:1}function ot(e,i,t){var p=e._x1-e._x0,l=i-e._x1,r=(e._y1-e._y0)/(p||l<0&&-0),a=(t-e._y1)/(l||p<0&&-0),s=(r*l+a*p)/(p+l);return(et(r)+et(a))*Math.min(Math.abs(r),Math.abs(a),.5*Math.abs(s))||0}function nt(e,i){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-i)/2:i}function m(e,i,t){var p=e._x0,l=e._y0,r=e._x1,a=e._y1,s=(r-p)/3;e._context.bezierCurveTo(p+s,l+s*i,r-s,a-s*t,r,a)}function D(e){this._context=e}D.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:m(this,this._t0,nt(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,i){var t=NaN;if(e=+e,i=+i,!(e===this._x1&&i===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,i):this._context.moveTo(e,i);break;case 1:this._point=2;break;case 2:this._point=3,m(this,nt(this,t=ot(this,e,i)),t);break;default:m(this,this._t0,t=ot(this,e,i));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=i,this._t0=t}}};Object.create(D.prototype).point=function(e,i){D.prototype.point.call(this,i,e)};function it(e){return new D(e)}const At=new URLSearchParams(window.location.search),Ot=At.has("expandChainguard"),x="#EB47E4",Mt="#454CE4",Nt="#F8F7FD",k={10:"#04086D",30:"#282ECC",40:"#444CE4",60:"#7F87FC",70:"#9FA6FB",80:"#C0C3FD",90:"#E0E1FF",95:"#F1EEFE"},y={10:"#191A2B",40:"#6D6D7F",50:"#9594A9",60:"#B5B4C9",90:"#F8F7FE"},Lt={top:60,right:40,bottom:40,left:40},Bt=pt(e=>e.date),g=["golang:latest","php:latest","nginx:latest","cgr.dev/chainguard/nginx:latest","cgr.dev/chainguard/go:latest","cgr.dev/chainguard/php:latest"],_={"nginx:latest":{color:k[70],strokeWidth:2},"golang:latest":{color:k[40],strokeWidth:2,fill:"url(#area-gradient)"},"php:latest":{color:k[60],strokeWidth:2},"cgr.dev/chainguard/nginx:latest":{color:x,strokeWidth:1},"cgr.dev/chainguard/go:latest":{color:x,strokeWidth:1},"cgr.dev/chainguard/php:latest":{color:x,strokeWidth:1}};function Rt(e){return o(dt,{keys:g,children:i=>o(Wt,{query:i,...e})})}function Wt({width:e,height:i,margin:t=Lt,expandChainguard:p=Ot,query:{data:l}}){var M,N,L,B,W,j,P,H,I,R,V,z,G,U,X,Q,Y;const r=e-((M=t==null?void 0:t.left)!=null?M:0)-((N=t==null?void 0:t.right)!=null?N:0),a=i-((L=t==null?void 0:t.top)!=null?L:0)-((B=t==null?void 0:t.bottom)!=null?B:0),s=kt({domain:Dt(Object.values(l["nginx:latest"]),n=>n.date),range:[0,r]}),v=ft({domain:[0,Math.max(...Object.values(l).flatMap(n=>Object.values(n)).map(n=>n.totalCveCount))*1.1],nice:!0,range:[a,0]}),T={tension:280,friction:120,restVelocity:1,clamp:!0},[st,lt]=F.exports.useState(!1),at=$({from:{width:0},to:{width:Math.max(r+4,0)},immediate:st,onRest(){lt(!0),rt(1)},config:T}),[ct,rt]=F.exports.useState(0),A=$({opacity:ct,config:T}),{tooltipOpen:O,tooltipData:c,showTooltip:S}=xt();F.exports.useEffect(()=>{const n=Object.values(l["nginx:latest"]);S({tooltipData:{cursorDate:n[n.length-2].date}})},[]);const b=F.exports.useCallback(n=>{var J;let{x:h}=vt(n)||{x:0};h-=(J=t==null?void 0:t.left)!=null?J:0;const f=s.invert(h),q=Object.values(l["nginx:latest"]),ht=Bt.center(q,f),ut=q[ht].date;S({tooltipData:{cursorDate:ut}})},[t,S,s]);return i<10||e<10?o(w,{}):d("div",{style:{position:"relative"},children:[d("svg",{width:e,height:i,children:[o("rect",{x:0,y:0,width:e,height:i,fill:Nt,rx:14,pointerEvents:"none"}),o(tt,{id:"area-gradient",fromOpacity:.4,from:"#E0E1FE",to:"#FFFFFF",toOpacity:.4}),o(tt,{id:"line-gradient",from:Mt,to:x}),o(St,{id:"animated_clip",children:o(E.rect,{x:"0",y:"0",...at,height:i})}),o(yt,{width:r,height:a,fill:"transparent"}),d(K,{left:(W=t==null?void 0:t.left)!=null?W:0,top:(j=t==null?void 0:t.top)!=null?j:0,children:[o(mt,{xScale:s,yScale:v,columnTickValues:s.ticks(Z),width:r,height:a,stroke:k[10],strokeOpacity:.1}),o(wt,{scale:v,tickFormat:n=>n.toString(),stroke:y[40],tickStroke:y[40],tickLabelProps:()=>({fill:y[40],fontSize:11,textAnchor:"end",dx:"-0.5em",dy:"0.33em"})}),o(Tt,{top:a,scale:s,stroke:y[40],tickValues:s.ticks(Ct(n=>{n.setTime(Z.floor(n).getTime())},(n,h)=>{n.setDate(n.getDate()+h*2)})),tickFormat:n=>u(new Date(n.valueOf())),tickStroke:y[40],tickLabelProps:()=>({fill:y[40],fontSize:11,fontFamily:"Helvetica Neue",textAnchor:"middle"})})]}),d(K,{left:(P=t==null?void 0:t.left)!=null?P:0,top:(H=t==null?void 0:t.top)!=null?H:0,clipPath:"url(#animated_clip)",children:[g.map(n=>o(jt,{values:Object.values(l[n]),..._[n],dateScale:s,vulnzScale:v},n)),O&&c&&d(E.g,{...A,children:[o(_t,{from:{x:s(c.cursorDate),y:v(0)},to:{x:s(c.cursorDate)+.001,y:v(Math.max(...g.map(n=>{var h,f;return(f=(h=l[n][u(c.cursorDate)])==null?void 0:h.totalCveCount)!=null?f:0})))},stroke:"url(#line-gradient)",strokeWidth:3,pointerEvents:"none"}),g.map(n=>{var h,f;return o("circle",{cx:s(c.cursorDate),cy:v((f=(h=l[n][u(c.cursorDate)])==null?void 0:h.totalCveCount)!=null?f:0),r:_[n].strokeWidth+2,fill:_[n].color,pointerEvents:"none"},n)})]}),o("rect",{width:r,height:a,onTouchStart:b,onTouchMove:b,onMouseMove:b,fill:"transparent"})]})]}),o("div",{style:{position:"absolute",top:20,width:"100%",height:20,display:"flex",justifyContent:"center",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:500,fontSize:16,textAlign:"center",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:"Total CVE count per image"}),O&&c&&o(E.div,{style:A,children:o(gt,{top:v(Math.max(...g.map(n=>{var h,f;return(f=(h=l[n][u(c.cursorDate)])==null?void 0:h.totalCveCount)!=null?f:0})))+(t==null?void 0:t.top),left:s(c.cursorDate)+t.left,style:{...Ft,background:"#FFFFFF",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.16)",borderRadius:8,padding:16,width:p?280:176,boxSizing:"border-box"},children:d("div",{style:{display:"flex",flexDirection:"column"},children:[o("div",{style:{fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:500,fontSize:14,lineHeight:1.2,letterSpacing:"0.0025em",color:"#191A2B"},children:c.cursorDate.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"})}),d("div",{style:{marginTop:8,fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:400,fontSize:14,lineHeight:"20px",letterSpacing:"0.0025em",color:"#191A2B",display:"flex",flexDirection:"column",gap:4},children:[d("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"Helvetica Neue",fontStyle:"normal",fontWeight:400,fontSize:13,lineHeight:"20px",letterSpacing:"0.0025em",color:y[40]},children:[o("span",{children:"Image"}),o("span",{children:"Total CVE count"})]}),o(C,{name:"go",count:l["golang:latest"][u(c.cursorDate)].totalCveCount,color:_["golang:latest"].color}),o(C,{name:"php",count:l["php:latest"][u(c.cursorDate)].totalCveCount,color:_["php:latest"].color}),o(C,{name:"nginx",count:l["nginx:latest"][u(c.cursorDate)].totalCveCount,color:_["nginx:latest"].color}),p?d(w,{children:[o(C,{name:"Chainguard / go",count:(I=l["cgr.dev/chainguard/go:latest"][u(c.cursorDate)])==null?void 0:I.totalCveCount,color:x}),o(C,{name:"Chainguard / php",count:(R=l["cgr.dev/chainguard/php:latest"][u(c.cursorDate)])==null?void 0:R.totalCveCount,color:x}),o(C,{name:"Chainguard / nginx",count:(V=l["cgr.dev/chainguard/nginx:latest"][u(c.cursorDate)])==null?void 0:V.totalCveCount,color:x})]}):o(C,{name:"Chainguard",count:((G=(z=l["cgr.dev/chainguard/nginx:latest"][u(c.cursorDate)])==null?void 0:z.totalCveCount)!=null?G:0)+((X=(U=l["cgr.dev/chainguard/go:latest"][u(c.cursorDate)])==null?void 0:U.totalCveCount)!=null?X:0)+((Y=(Q=l["cgr.dev/chainguard/php:latest"][u(c.cursorDate)])==null?void 0:Q.totalCveCount)!=null?Y:0),color:x})]})]})},Math.random())})]})}function C({name:e,count:i,color:t}){return d("div",{style:{display:"flex",justifyContent:"space-between"},children:[d("span",{children:[o("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",style:{marginRight:8},children:o("circle",{cx:"4",cy:"4",r:"4",fill:t})}),e]}),o("span",{children:i!=null?i:o("em",{children:"unknown"})})]})}function jt({values:e,color:i,fill:t,strokeWidth:p,dateScale:l,vulnzScale:r}){return d(w,{children:[t&&o(bt,{data:e,x:a=>{var s;return(s=l(a.date))!=null?s:0},y:a=>{var s;return(s=r(a.totalCveCount))!=null?s:0},yScale:r,strokeWidth:1,stroke:t,fill:t,curve:it,pointerEvents:"none"}),o(Et,{curve:it,data:e,stroke:i,strokeWidth:p,strokeOpacity:1,strokeLinecap:"round",pointerEvents:"none",x:a=>{var s;return(s=l(a.date))!=null?s:0},y:a=>{var s;return(s=r(a.totalCveCount))!=null?s:0}})]})}export{Rt as C};
