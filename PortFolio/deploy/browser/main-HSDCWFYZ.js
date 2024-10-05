import{a as Te}from"./chunk-H4ESWRQI.js";import{L as Fe,a as ue,b as ge,c as he,d as fe,e as _e,f as ve,g as x,h as ye,i as be,j as Ce,k as Se,l as xe,m as we,n as Me,o as ke,p as Ie,q as Ee,t as O,x as Ae}from"./chunk-3FKMM36V.js";import{$ as _,$a as Q,Ca as q,Cb as I,E as z,Ea as Z,Ec as A,Fb as R,Fc as de,Gb as S,Gc as pe,Hc as F,Ka as M,Kb as te,Lb as re,M as W,Mb as ie,Nb as ne,Ob as d,Qb as oe,Vb as ae,Wb as se,Xb as ce,Y as U,Yb as le,Za as c,_a as p,aa as v,bb as Y,ca as w,cb as $,ea as V,fa as P,fb as K,j as D,ja as y,jb as X,ka as b,ma as G,mb as u,nc as E,o as j,pb as C,qb as m,r as B,rb as k,sb as J,tb as ee,ua as N,va as H,wc as me,xb as s,yb as a,zb as g}from"./chunk-XPCOFF6R.js";function He(r,t){r&1&&(s(0,"span"),d(1,"Email id is required"),a())}function qe(r,t){r&1&&(s(0,"span"),d(1,"Invalid Email id!!"),a())}function Ze(r,t){if(r&1&&(s(0,"span",10),u(1,He,2,0,"span",11)(2,qe,2,0,"span",11),a()),r&2){let i,e,n=S();c(),m("ngIf",(i=n.loginForm.get("email"))==null||i.errors==null?null:i.errors.required),c(),m("ngIf",(e=n.loginForm.get("email"))==null||e.errors==null?null:e.errors.pattern)}}function Qe(r,t){r&1&&(s(0,"span"),d(1,"password is required"),a())}function Ye(r,t){r&1&&g(0,"span")}function $e(r,t){if(r&1&&(s(0,"span",10),u(1,Qe,2,0,"span",11)(2,Ye,1,0,"span",11),a()),r&2){let i,e,n=S();c(),m("ngIf",(i=n.loginForm.get("password"))==null||i.errors==null?null:i.errors.required),c(),m("ngIf",(e=n.loginForm.get("password"))==null||e.errors==null?null:e.errors.minlength)}}function Ke(r,t){if(r&1&&(s(0,"div",10),d(1),a()),r&2){let i=S();c(),oe(" ",i.errorMessage," ")}}var Pe=(()=>{class r{userService;router;fb;loginForm;errorMessage=null;constructor(i,e,n){this.userService=i,this.router=e,this.fb=n,this.loginForm=this.fb.group({email:["hashim@gmail.com",[x.required,x.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],password:["1234",[x.required,x.minLength(4)]]})}onLogin(){let{email:i,password:e}=this.loginForm.value;this.userService.loginUser(i,e).subscribe(n=>{if(n.length>0){let o=n[0];o.role==="admin"?(this.userService.setCurrentUser(o),this.router.navigate(["/admin/admin-home"])):(this.errorMessage="Unauthorized access",this.userService.clearCurrentUser())}else this.errorMessage="Invalid email or password",this.userService.clearCurrentUser()},n=>{console.error("Login error:",n),this.errorMessage="An error occurred during login",this.userService.clearCurrentUser()})}cancel(){this.userService.logout(),this.router.navigate(["/home"])}static \u0275fac=function(e){return new(e||r)(p(ke),p(Ee),p(we))};static \u0275cmp=y({type:r,selectors:[["app-login"]],decls:25,vars:5,consts:[[1,"login-container"],[3,"ngSubmit","formGroup"],["for","email"],[1,"required"],["id","email","formControlName","email"],["class","error-message",4,"ngIf"],["for","password"],["id","password","formControlName","password"],["type","submit",3,"disabled"],[1,"home",3,"click"],[1,"error-message"],[4,"ngIf"]],template:function(e,n){if(e&1&&(s(0,"div",0)(1,"h2"),d(2,"Login"),a(),s(3,"form",1),R("ngSubmit",function(){return n.onLogin()}),s(4,"div")(5,"label",2),d(6,"Email"),s(7,"span",3),d(8,"*"),a(),d(9,":"),a(),g(10,"input",4),u(11,Ze,3,2,"span",5),a(),s(12,"div")(13,"label",6),d(14,"Password "),s(15,"span",3),d(16,"*"),a(),d(17,":"),a(),g(18,"input",7),u(19,$e,3,2,"span",5),a(),s(20,"button",8),d(21,"Login"),a(),s(22,"button",9),R("click",function(){return n.cancel()}),d(23,"Back to Home"),a()(),u(24,Ke,2,1,"div",5),a()),e&2){let o,l;c(3),m("formGroup",n.loginForm),c(8),m("ngIf",((o=n.loginForm.get("email"))==null?null:o.invalid)&&((o=n.loginForm.get("email"))==null?null:o.touched)),c(8),m("ngIf",((l=n.loginForm.get("password"))==null?null:l.invalid)&&((l=n.loginForm.get("password"))==null?null:l.touched)),c(),m("disabled",!n.loginForm.valid),c(4),m("ngIf",n.errorMessage)}},dependencies:[A,Ce,ve,ye,be,Se,xe],styles:[".error-message[_ngcontent-%COMP%]{color:red;font-size:14px}.login-container[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:10px;background-color:#f9f9f9}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}input[_ngcontent-%COMP%]{width:100%;padding:8px;margin-bottom:10px;border:1px solid #ccc;border-radius:5px}button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#4caf50;color:#fff;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#45a049}.error-message[_ngcontent-%COMP%]{color:red;margin-top:10px;text-align:center}.home[_ngcontent-%COMP%]{background-color:#271dbc;color:#fff;border:none;padding:12px 24px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:4px;transition:background-color .3s ease}.home[_ngcontent-%COMP%]:hover{background-color:#150953}"]})}return r})();var Xe=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"login",component:Pe},{path:"admin",loadChildren:()=>import("./chunk-GAWSH3VE.js").then(r=>r.AdminModule)},{path:"home",loadChildren:()=>import("./chunk-TV75VEMU.js").then(r=>r.HomeModule)}],Ne=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=b({type:r});static \u0275inj=v({imports:[O.forRoot(Xe),O]})}return r})();var T=(()=>{class r{isLoading=new D;constructor(){}show(){this.isLoading.next(!0)}hide(){this.isLoading.next(!1)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Je=["determinateSpinner"];function et(r,t){if(r&1&&(N(),s(0,"svg",11),g(1,"circle",12),a()),r&2){let i=S();C("viewBox",i._viewBox()),c(),k("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),C("r",i._circleRadius())}}var tt=new w("mat-progress-spinner-default-options",{providedIn:"root",factory:rt});function rt(){return{diameter:Oe}}var Oe=100,it=10,Le=(()=>{let t=class t{get color(){return this._color||this._defaultColor}set color(e){this._color=e}constructor(e,n,o){this._elementRef=e,this._defaultColor="primary",this._value=0,this._diameter=Oe,this._noopAnimations=n==="NoopAnimations"&&!!o&&!o._forceAnimations,this.mode=e.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",o&&(o.color&&(this.color=this._defaultColor=o.color),o.diameter&&(this.diameter=o.diameter),o.strokeWidth&&(this.strokeWidth=o.strokeWidth))}get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_circleRadius(){return(this.diameter-it)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}};t.\u0275fac=function(n){return new(n||t)(p(Z),p(M,8),p(tt))},t.\u0275cmp=y({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,o){if(n&1&&te(Je,5),n&2){let l;re(l=ie())&&(o._determinateCircle=l.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,o){n&2&&(C("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),ee("mat-"+o.color),k("width",o.diameter,"px")("height",o.diameter,"px")("--mdc-circular-progress-size",o.diameter+"px")("--mdc-circular-progress-active-indicator-width",o.diameter+"px"),J("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",E],diameter:[2,"diameter","diameter",E],strokeWidth:[2,"strokeWidth","strokeWidth",E]},exportAs:["matProgressSpinner"],standalone:!0,features:[X,ae],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,o){if(n&1&&(u(0,et,2,8,"ng-template",null,0,le),s(2,"div",2,1),N(),s(4,"svg",3),g(5,"circle",4),a()(),H(),s(6,"div",5)(7,"div",6)(8,"div",7),I(9,8),a(),s(10,"div",9),I(11,8),a(),s(12,"div",10),I(13,8),a()()()),n&2){let l=ne(1);c(4),C("viewBox",o._viewBox()),c(),k("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),C("r",o._circleRadius()),c(4),m("ngTemplateOutlet",l),c(2),m("ngTemplateOutlet",l),c(2),m("ngTemplateOutlet",l)}},dependencies:[de],styles:[".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-app-primary))}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],encapsulation:2,changeDetection:0});let r=t;return r})();var De=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=v({imports:[F,Ae]});let r=t;return r})();function ot(r,t){r&1&&(s(0,"div",2),g(1,"mat-spinner",3),a())}var je=(()=>{class r{loaderService;title="PortFolio";isLoading;constructor(i){this.loaderService=i,this.isLoading=this.loaderService.isLoading}static \u0275fac=function(e){return new(e||r)(p(T))};static \u0275cmp=y({type:r,selectors:[["app-root"]],decls:5,vars:3,consts:[[1,"mt-2"],["class","overlay",4,"ngIf"],[1,"overlay"],[1,"spinner"]],template:function(e,n){e&1&&(s(0,"div",0),g(1,"router-outlet"),a(),s(2,"div"),u(3,ot,2,0,"div",1),se(4,"async"),a()),e&2&&(c(3),m("ngIf",ce(4,1,n.isLoading)))},dependencies:[A,Ie,Le,pe],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;display:block;width:100%;height:100%;top:0;left:0;background-color:#4a4a4a66;z-index:99999}.spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]})}return r})();var at="@",st=(()=>{let t=class t{constructor(e,n,o,l,h){this.doc=e,this.delegate=n,this.zone=o,this.animationType=l,this.moduleImpl=h,this._rendererFactoryPromise=null,this.scheduler=P(Y,{optional:!0}),this.loadingSchedulerFn=P(ct,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MURLIOXE.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(o=>{throw new U(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:l})=>{this._engine=o(this.animationType,this.doc);let h=new l(this.delegate,this._engine,this.zone);return this.delegate=h,h})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let l=new L(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(h=>{let Ue=h.createRenderer(e,n);l.use(Ue),this.scheduler?.notify(10)}).catch(h=>{l.use(o)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(n){Q()},t.\u0275prov=_({token:t,factory:t.\u0275fac});let r=t;return r})(),L=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let i of this.replay)i(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,i){return this.delegate.createElement(t,i)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,i){this.delegate.appendChild(t,i)}insertBefore(t,i,e,n){this.delegate.insertBefore(t,i,e,n)}removeChild(t,i,e){this.delegate.removeChild(t,i,e)}selectRootElement(t,i){return this.delegate.selectRootElement(t,i)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,i,e,n){this.delegate.setAttribute(t,i,e,n)}removeAttribute(t,i,e){this.delegate.removeAttribute(t,i,e)}addClass(t,i){this.delegate.addClass(t,i)}removeClass(t,i){this.delegate.removeClass(t,i)}setStyle(t,i,e,n){this.delegate.setStyle(t,i,e,n)}removeStyle(t,i,e){this.delegate.removeStyle(t,i,e)}setProperty(t,i,e){this.shouldReplay(i)&&this.replay.push(n=>n.setProperty(t,i,e)),this.delegate.setProperty(t,i,e)}setValue(t,i){this.delegate.setValue(t,i)}listen(t,i,e){return this.shouldReplay(i)&&this.replay.push(n=>n.listen(t,i,e)),this.delegate.listen(t,i,e)}shouldReplay(t){return this.replay!==null&&t.startsWith(at)}},ct=new w("");function Be(r="animations"){return K("NgAsyncAnimations"),G([{provide:$,useFactory:(t,i,e)=>new st(t,i,e,r),deps:[me,he,q]},{provide:M,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ze=(()=>{class r{loaderService;constructor(i){this.loaderService=i}intercept(i,e){return this.loaderService.show(),e.handle(i).pipe(W(()=>{this.loaderService.hide()}),B(n=>n),z(n=>{let o="";return alert("this is api error "+n.status),j(n.message)}))}static \u0275fac=function(e){return new(e||r)(V(T))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})();var We=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=b({type:r,bootstrap:[je]});static \u0275inj=v({providers:[{provide:ue,useClass:ze,multi:!0},Be()],imports:[_e,Ne,ge,Me,F,Te,De,Fe]})}return r})();fe().bootstrapModule(We,{ngZoneEventCoalescing:!0}).catch(r=>console.error(r));