(self.webpackChunkdosmetal_app_frontend=self.webpackChunkdosmetal_app_frontend||[]).push([[592],{6468:(I,Y,l)=>{"use strict";l.d(Y,{i:()=>_});var O=l(1135),d=l(5e3),M=l(2340),g=l(520);let f=(()=>{class h{constructor(r){this._HTTP=r,this.API_URL=`${M.N.server_uri}/dosmetal/api/clientes`}getAllEmpresas(){return this._HTTP.get(`${this.API_URL}/all-clients`)}addNewClient(r){return this._HTTP.post(`${this.API_URL}/add-new-client`,r)}deleteClient(r){return this._HTTP.delete(`${this.API_URL}/delete-client/${r}`)}}return h.\u0275fac=function(r){return new(r||h)(d.LFG(g.eN))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})();var b=l(8662),y=l(5226),T=l.n(y);let H=(()=>{class h{constructor(){this.swalWithBootstrapButtons=T().mixin({customClass:{confirmButton:"btn btn-success me-1",cancelButton:"btn btn-danger"},buttonsStyling:!1})}confirmDeleteClient(){return this.swalWithBootstrapButtons.fire({text:"Esta seguro de borrar este cliente? Todos sus presupuestos tambien seran borrados",icon:"warning",confirmButtonText:"Si, eliminar."})}}return h.\u0275fac=function(r){return new(r||h)},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})(),_=(()=>{class h{constructor(r,m,a){this.ClientesService=r,this.WebSocketService=m,this.ClientNofitications=a,this._ClientsStoreSource=new O.X([]),this.Clients$=this._ClientsStoreSource.asObservable(),this.ClientesService.getAllEmpresas().subscribe(v=>this._setClients(v)),this.WebSocketService.fromEvent("[CLIENTS] Presupuesto deleted").subscribe(v=>this.removePresupuestoToClient(v)),this.WebSocketService.fromEvent("[CLIENTS] Presupuesto added").subscribe(v=>this.addPresupuestoToClient(v))}_setClients(r){this._ClientsStoreSource.next(this.sortClients(r))}getClientsValue(){return this._ClientsStoreSource.getValue()}addClient(r){this.ClientesService.addNewClient(r).subscribe({next:m=>{const a=[...this.getClientsValue(),m.newClient];this._setClients(a)}})}getClient(r){return this.getClientsValue().find(m=>m._id===r)}removeClient(r){this.ClientNofitications.confirmDeleteClient().then(m=>{m.isConfirmed&&this.ClientesService.deleteClient(r).subscribe({next:a=>{const v=this.getClientsValue().filter(w=>w._id!==r);this._setClients(v)},error:a=>{console.log(a)}})})}editClient(r){const m=this.getClientsValue().map(a=>(a._id===r._id&&(a=Object.assign(Object.assign({},a),r)),a));this._setClients(m)}removePresupuestoToClient(r){console.log(r);const m=this.getClientsValue().map(a=>(a._id===r.ClientID&&(a.presupuestos=a.presupuestos.filter(v=>v!==r.PresupuestoID)),a));this._setClients(m)}addPresupuestoToClient(r){const m=this.getClientsValue().map(a=>(a._id===r.clientID&&a.presupuestos.push(r.presupuestoID),a));this._setClients(m)}sortClients(r){return r.sort((m,a)=>m.nombre>a.nombre?1:-1)}}return h.\u0275fac=function(r){return new(r||h)(d.LFG(f),d.LFG(b.l),d.LFG(H))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},3404:(I,Y,l)=>{"use strict";l.d(Y,{R:()=>H});var O=l(1135),d=l(5e3),M=l(2340),g=l(520);let f=(()=>{class _{constructor(o){this._HTTP=o,this.URL=`${M.N.server_uri}/dosmetal/api/presupuestos`}getAllPresupuestos(){return this._HTTP.get(`${this.URL}/getPresupuestos`)}getPresupuesto(o){return this._HTTP.get(`${this.URL}/getPresupuesto/${o}`)}createPresupuesto(o){return this._HTTP.post(`${this.URL}/createPresupuesto`,o)}saveChangesOnPresupuesto(o){return this._HTTP.post(`${this.URL}/saveChangesOnPresupuesto`,o)}delItemFromPage(o){}saveModifiedItem(o){return this._HTTP.post(`${this.URL}/saveModifiedItem`,o)}savePaymentDetails(o){return this._HTTP.post(`${this.URL}/savePaymentDetails`,o)}getDolarToday(){return this._HTTP.get("https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolaroficial")}deletePresupuesto(o){return this._HTTP.delete(`${this.URL}/deletePresupuesto/${o}`)}}return _.\u0275fac=function(o){return new(o||_)(d.LFG(g.eN))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})();var b=l(8726),y=l(8662),T=l(1598);let H=(()=>{class _{constructor(o,r,m,a){this.PresupuestoService=o,this.PresupuestoNotifications=r,this.WebSocketService=m,this.Router=a,this._presupuestoSource=new O.X([]),this.Presupuestos$=this._presupuestoSource.asObservable(),this.PresupuestoService.getAllPresupuestos().subscribe(v=>{this._setPresupuestos(v)}),this.WebSocketService.fromEvent("[PRESUPUESTOS] New Presupuesto").subscribe(v=>this._setPresupuestos([...this._getPresupuestosValue(),v])),this.WebSocketService.fromEvent("[PRESUPUESTOS] Presupuesto Deleted").subscribe(v=>{this._setPresupuestos(this._getPresupuestosValue().filter(w=>w._id!==v.presupuestoID))}),this.WebSocketService.fromEvent("[PRESUPUESTOS] Change on presupuesto").subscribe(v=>{this._setPresupuestos(this._getPresupuestosValue().map(w=>(w._id===v._id&&(w=v),w)))})}_setPresupuestos(o){this._presupuestoSource.next(this.sortPresupuestos(o))}_getPresupuestosValue(){return this._presupuestoSource.getValue()}addNewPresupuesto(o){return new Promise((r,m)=>{this.PresupuestoService.createPresupuesto(o).subscribe({next:a=>{this.Router.navigate(["presupuestos","editar-presupuesto",a.presupuesto._id]),r(!0)},error:a=>{m(!1),console.log(a)}})})}ModifyPresupuesto(o){return new Promise((r,m)=>{this.PresupuestoService.saveChangesOnPresupuesto(o).subscribe({next:a=>{const v=this._getPresupuestosValue().map(w=>(w._id===o._id&&(w=a.presupuestoUpdated,this.PresupuestoNotifications.requestSuccessful(a.message)),w));return console.log(v),this._setPresupuestos(v),r(!0)},error:a=>{console.log(a.error)}})})}getPresupuesto(o){return this._getPresupuestosValue().find(r=>r._id===o)}deletePresupuesto(o){this.PresupuestoNotifications.confirmDeletePresupuesto().then(r=>{r.isConfirmed&&this.PresupuestoService.deletePresupuesto(o).subscribe({next:m=>{this.PresupuestoNotifications.requestSuccessful(m.message)}})})}sortPresupuestos(o){return o.sort((r,m)=>r.PresupuestoNum<m.PresupuestoNum?1:-1)}}return _.\u0275fac=function(o){return new(o||_)(d.LFG(f),d.LFG(b.R),d.LFG(y.l),d.LFG(T.F0))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},8726:(I,Y,l)=>{"use strict";l.d(Y,{R:()=>g});var O=l(5226),d=l.n(O),M=l(5e3);let g=(()=>{class f{constructor(){this.swalWithBootstrapButtons=d().mixin({customClass:{confirmButton:"btn btn-success me-1",cancelButton:"btn btn-danger"},buttonsStyling:!1})}ConfirmToProducction(){return this.swalWithBootstrapButtons.fire({text:"\xbfQuiere dar este presupuesto como terminado?",icon:"question",allowOutsideClick:!1,confirmButtonText:"Si",cancelButtonText:"No, seguir editando mas tarde",showCancelButton:!0,heightAuto:!1})}confirmDeletePresupuesto(){return this.swalWithBootstrapButtons.fire({text:"Desea eliminar este presupuesto?, una vez borrado ya no podra recuperarse",icon:"warning",confirmButtonText:"Eliminar",cancelButtonText:"Conservar",heightAuto:!1})}requestSuccessful(y){d().fire({title:y,icon:"success",iconColor:"#fff",background:"#00C851",customClass:{title:"text-white"},toast:!0,timer:3e3,position:"top-right",showConfirmButton:!1})}requestError(y){d().fire({title:y,background:"#e53935",customClass:{title:"text-light"},icon:"error",iconColor:"#e0e0e0",toast:!0,timer:3e3,position:"top-right",showConfirmButton:!1})}}return f.\u0275fac=function(y){return new(y||f)},f.\u0275prov=M.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},4586:(I,Y,l)=>{"use strict";l.d(Y,{D:()=>M});var O=l(9808),d=l(5e3);let M=(()=>{class g{}return g.\u0275fac=function(b){return new(b||g)},g.\u0275mod=d.oAB({type:g}),g.\u0275inj=d.cJS({imports:[[O.ez]]}),g})()},1764:function(I){I.exports=function(){"use strict";var l=6e4,O=36e5,d="millisecond",M="second",g="minute",f="hour",b="day",y="week",T="month",H="quarter",_="year",h="date",o="Invalid Date",r=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(i,s,e){var n=String(i);return!n||n.length>=s?i:""+Array(s+1-n.length).join(e)+i},w={s:v,z:function(i){var s=-i.utcOffset(),e=Math.abs(s),n=Math.floor(e/60),t=e%60;return(s<=0?"+":"-")+v(n,2,"0")+":"+v(t,2,"0")},m:function i(s,e){if(s.date()<e.date())return-i(e,s);var n=12*(e.year()-s.year())+(e.month()-s.month()),t=s.clone().add(n,T),c=e-t<0,u=s.clone().add(n+(c?-1:1),T);return+(-(n+(e-t)/(c?t-u:u-t))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:T,y:_,w:y,d:b,D:h,h:f,m:g,s:M,ms:d,Q:H}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return void 0===i}},W="en",x={};x[W]=a;var j=function(i){return i instanceof k},F=function(i,s,e){var n;if(!i)return W;if("string"==typeof i)x[i]&&(n=i),s&&(x[i]=s,n=i);else{var t=i.name;x[t]=i,n=t}return!e&&n&&(W=n),n||!e&&W},C=function(i,s){if(j(i))return i.clone();var e="object"==typeof s?s:{};return e.date=i,e.args=arguments,new k(e)},p=w;p.l=F,p.i=j,p.w=function(i,s){return C(i,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var k=function(){function i(e){this.$L=F(e.locale,null,!0),this.parse(e)}var s=i.prototype;return s.parse=function(e){this.$d=function(n){var t=n.date,c=n.utc;if(null===t)return new Date(NaN);if(p.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var u=t.match(r);if(u){var S=u[2]-1||0,$=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],S,u[3]||1,u[4]||0,u[5]||0,u[6]||0,$)):new Date(u[1],S,u[3]||1,u[4]||0,u[5]||0,u[6]||0,$)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return p},s.isValid=function(){return this.$d.toString()!==o},s.isSame=function(e,n){var t=C(e);return this.startOf(n)<=t&&t<=this.endOf(n)},s.isAfter=function(e,n){return C(e)<this.startOf(n)},s.isBefore=function(e,n){return this.endOf(n)<C(e)},s.$g=function(e,n,t){return p.u(e)?this[n]:this.set(t,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,n){var t=this,c=!!p.u(n)||n,u=p.p(e),S=function(U,L){var N=p.w(t.$u?Date.UTC(t.$y,L,U):new Date(t.$y,L,U),t);return c?N:N.endOf(b)},$=function(U,L){return p.w(t.toDate()[U].apply(t.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(L)),t)},P=this.$W,D=this.$M,B=this.$D,E="set"+(this.$u?"UTC":"");switch(u){case _:return c?S(1,0):S(31,11);case T:return c?S(1,D):S(0,D+1);case y:var R=this.$locale().weekStart||0,A=(P<R?P+7:P)-R;return S(c?B-A:B+(6-A),D);case b:case h:return $(E+"Hours",0);case f:return $(E+"Minutes",1);case g:return $(E+"Seconds",2);case M:return $(E+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,n){var t,c=p.p(e),u="set"+(this.$u?"UTC":""),S=(t={},t[b]=u+"Date",t[h]=u+"Date",t[T]=u+"Month",t[_]=u+"FullYear",t[f]=u+"Hours",t[g]=u+"Minutes",t[M]=u+"Seconds",t[d]=u+"Milliseconds",t)[c],$=c===b?this.$D+(n-this.$W):n;if(c===T||c===_){var P=this.clone().set(h,1);P.$d[S]($),P.init(),this.$d=P.set(h,Math.min(this.$D,P.daysInMonth())).$d}else S&&this.$d[S]($);return this.init(),this},s.set=function(e,n){return this.clone().$set(e,n)},s.get=function(e){return this[p.p(e)]()},s.add=function(e,n){var t,c=this;e=Number(e);var u=p.p(n),S=function(D){var B=C(c);return p.w(B.date(B.date()+Math.round(D*e)),c)};if(u===T)return this.set(T,this.$M+e);if(u===_)return this.set(_,this.$y+e);if(u===b)return S(1);if(u===y)return S(7);var $=(t={},t[g]=l,t[f]=O,t[M]=1e3,t)[u]||1,P=this.$d.getTime()+e*$;return p.w(P,this)},s.subtract=function(e,n){return this.add(-1*e,n)},s.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||o;var c=e||"YYYY-MM-DDTHH:mm:ssZ",u=p.z(this),S=this.$H,$=this.$m,P=this.$M,D=t.weekdays,B=t.months,E=function(L,N,z,V){return L&&(L[N]||L(n,c))||z[N].substr(0,V)},R=function(L){return p.s(S%12||12,L,"0")},A=t.meridiem||function(L,N,z){var V=L<12?"AM":"PM";return z?V.toLowerCase():V},U={YY:String(this.$y).slice(-2),YYYY:this.$y,M:P+1,MM:p.s(P+1,2,"0"),MMM:E(t.monthsShort,P,B,3),MMMM:E(B,P),D:this.$D,DD:p.s(this.$D,2,"0"),d:String(this.$W),dd:E(t.weekdaysMin,this.$W,D,2),ddd:E(t.weekdaysShort,this.$W,D,3),dddd:D[this.$W],H:String(S),HH:p.s(S,2,"0"),h:R(1),hh:R(2),a:A(S,$,!0),A:A(S,$,!1),m:String($),mm:p.s($,2,"0"),s:String(this.$s),ss:p.s(this.$s,2,"0"),SSS:p.s(this.$ms,3,"0"),Z:u};return c.replace(m,function(L,N){return N||U[L]||u.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,n,t){var c,u=p.p(n),S=C(e),$=(S.utcOffset()-this.utcOffset())*l,P=this-S,D=p.m(this,S);return D=(c={},c[_]=D/12,c[T]=D,c[H]=D/3,c[y]=(P-$)/6048e5,c[b]=(P-$)/864e5,c[f]=P/O,c[g]=P/l,c[M]=P/1e3,c)[u]||P,t?D:p.a(D)},s.daysInMonth=function(){return this.endOf(T).$D},s.$locale=function(){return x[this.$L]},s.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),c=F(e,n,!0);return c&&(t.$L=c),t},s.clone=function(){return p.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},i}(),G=k.prototype;return C.prototype=G,[["$ms",d],["$s",M],["$m",g],["$H",f],["$W",b],["$M",T],["$y",_],["$D",h]].forEach(function(i){G[i[1]]=function(s){return this.$g(s,i[0],i[1])}}),C.extend=function(i,s){return i.$i||(i(s,k,C),i.$i=!0),C},C.locale=F,C.isDayjs=j,C.unix=function(i){return C(1e3*i)},C.en=x[W],C.Ls=x,C.p={},C}()},3634:function(I,Y,l){I.exports=function(O){"use strict";var M=function d(f){return f&&"object"==typeof f&&"default"in f?f:{default:f}}(O),g={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},ordinal:function(f){return f+"\xba"}};return M.default.locale(g,null,!0),g}(l(1764))}}]);