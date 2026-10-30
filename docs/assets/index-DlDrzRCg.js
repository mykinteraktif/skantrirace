(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,ee=1020,O=35902,k=35899,A=1021,te=1022,j=1023,ne=1026,M=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,ue=33778,N=33779,P=35840,de=35841,fe=35842,pe=35843,me=36196,he=37492,ge=37496,_e=37488,ve=37489,ye=37490,be=37491,xe=37808,Se=37809,Ce=37810,we=37811,Te=37812,Ee=37813,De=37814,Oe=37815,ke=37816,Ae=37817,je=37818,Me=37819,Ne=37820,F=37821,Pe=36492,Fe=36494,Ie=36495,I=36283,Le=36284,L=36285,Re=36286,ze=2300,Be=2301,Ve=2302,He=2303,Ue=2400,We=2401,Ge=2402,Ke=3200,qe=`srgb`,Je=`srgb-linear`,Ye=`linear`,Xe=`srgb`,Ze=7680,Qe=35044,$e=35048,et=2e3;function tt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function it(){let e=rt(`canvas`);return e.style.display=`block`,e}var at={};function ot(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function st(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ct(...e){let t=e.join(` `);t in at||(at[t]=!0,R(...e))}function lt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ut={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},dt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ft=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pt=1234567,mt=Math.PI/180,ht=180/Math.PI;function gt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ft[e&255]+ft[e>>8&255]+ft[e>>16&255]+ft[e>>24&255]+`-`+ft[t&255]+ft[t>>8&255]+`-`+ft[t>>16&15|64]+ft[t>>24&255]+`-`+ft[n&63|128]+ft[n>>8&255]+`-`+ft[n>>16&255]+ft[n>>24&255]+ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function _t(e,t){return(e%t+t)%t}function vt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function yt(e,t,n){return e===t?0:(n-e)/(t-e)}function bt(e,t,n){return(1-n)*e+n*t}function xt(e,t,n,r){return bt(e,t,1-Math.exp(-n*r))}function St(e,t=1){return t-Math.abs(_t(e,t*2)-t)}function Ct(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function wt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Tt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Et(e,t){return e+Math.random()*(t-e)}function Dt(e){return e*(.5-Math.random())}function Ot(e){e!==void 0&&(pt=e);let t=pt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kt(e){return e*mt}function At(e){return e*ht}function jt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Pt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Lt={DEG2RAD:mt,RAD2DEG:ht,generateUUID:gt,clamp:B,euclideanModulo:_t,mapLinear:vt,inverseLerp:yt,lerp:bt,damp:xt,pingpong:St,smoothstep:Ct,smootherstep:wt,randInt:Tt,randFloat:Et,randFloatSpread:Dt,seededRandom:Ot,degToRad:kt,radToDeg:At,isPowerOfTwo:jt,ceilPowerOfTwo:Mt,floorPowerOfTwo:Nt,setQuaternionFromProperEuler:Pt,normalize:It,denormalize:Ft};o=Symbol.iterator;var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=V,e.prototype.isVector2=!0;var Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var H=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=H,t.prototype.isVector3=!0;var zt=new H,Bt=new Rt,U=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ct(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vt.makeScale(e,t)),this}rotate(e){return ct(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vt.makeRotation(-e)),this}translate(e,t){return ct(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=U,n.prototype.isMatrix3=!0;var Vt=new U,Ht=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ut=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wt(){let e={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ye:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ct(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ct(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Je]:{primaries:t,whitePoint:r,transfer:Ye,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),e}var Gt=Wt();function Kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jt,Yt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jt===void 0&&(Jt=rt(`canvas`)),Jt.width=e.width,Jt.height=e.height;let t=Jt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kt(t[e]/255)*255):t[e]=Kt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xt=0,Zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=gt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qt(r[t].image)):e.push(Qt(r[t]))}else e=Qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var $t=0,en=new H,tn=class e extends dt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=j,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=gt(),this.name=``,this.source=new Zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(en).x}get height(){return this.source.getSize(en).y}get depth(){return this.source.getSize(en).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=300,tn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var nn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=nn,r.prototype.isVector4=!0;var rn=class extends dt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];let r=new tn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},an=class extends rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},on=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sn=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},cn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ln.setFromMatrixColumn(e,0).length(),i=1/ln.setFromMatrixColumn(e,1).length(),a=1/ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dn,e,fn)}lookAt(e,t,n){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),pn.crossVectors(n,hn),pn.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),pn.crossVectors(n,hn)),pn.normalize(),mn.crossVectors(hn,pn),r[0]=pn.x,r[4]=mn.x,r[8]=hn.x,r[1]=pn.y,r[5]=mn.y,r[9]=hn.y,r[2]=pn.z,r[6]=mn.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*M,i[12]=a*w+o*ee+s*te+c*re,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*M,i[13]=l*w+u*ee+d*te+f*re,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*M,i[14]=p*w+m*ee+h*te+g*re,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*M,i[15]=_*w+v*ee+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ln.set(r[0],r[1],r[2]).length(),o=ln.set(r[4],r[5],r[6]).length(),s=ln.set(r[8],r[9],r[10]).length();i<0&&(a=-a),un.copy(this);let c=1/a,l=1/o,u=1/s;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=l,un.elements[5]*=l,un.elements[6]*=l,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=cn,i.prototype.isMatrix4=!0;var ln=new H,un=new cn,dn=new H(0,0,0),fn=new H(1,1,1),pn=new H,mn=new H,hn=new H,gn=new cn,_n=new Rt,vn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _n.setFromEuler(this),this.setFromQuaternion(_n,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER=`XYZ`;var yn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},bn=0,xn=new H,Sn=new Rt,Cn=new cn,wn=new H,Tn=new H,En=new H,Dn=new Rt,On=new H(1,0,0),kn=new H(0,1,0),An=new H(0,0,1),jn={type:`added`},Mn={type:`removed`},Nn={type:`childadded`,child:null},Pn={type:`childremoved`,child:null},Fn=class e extends dt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bn++}),this.uuid=gt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new vn,r=new Rt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new cn},normalMatrix:{value:new U}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(On,e)}rotateY(e){return this.rotateOnAxis(kn,e)}rotateZ(e){return this.rotateOnAxis(An,e)}translateOnAxis(e,t){return xn.copy(e).applyQuaternion(this.quaternion),this.position.add(xn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(On,e)}translateY(e){return this.translateOnAxis(kn,e)}translateZ(e){return this.translateOnAxis(An,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wn.copy(e):wn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Tn,wn,this.up):Cn.lookAt(wn,Tn,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Sn.setFromRotationMatrix(Cn),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,En),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,Dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Fn.DEFAULT_UP=new H(0,1,0),Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Fn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ln={type:`move`},Rn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=_t(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Hn(i,r,e+1/3),this.g=Hn(i,r,e),this.b=Hn(i,r,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,t=qe){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){let n=zn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return Gt.workingToColorSpace(Un.copy(this),e),Math.round(B(Un.r*255,0,255))*65536+Math.round(B(Un.g*255,0,255))*256+Math.round(B(Un.b*255,0,255))}getHexString(e=qe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(Un.copy(this),t);let n=Un.r,r=Un.g,i=Un.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=qe){Gt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,r=Un.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Vn);let n=bt(Bn.h,Vn.h,t),r=bt(Bn.s,Vn.s,t),i=bt(Bn.l,Vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new W;W.NAMES=zn;var Wn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gn=class extends Fn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new H,Zn=new H,Qn=new H,$n=new H,er=new H,tr=new H,nr=new nn,rr=new nn,ir=new nn,ar=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kn.subVectors(e,t),r.cross(Kn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Kn.subVectors(r,t),qn.subVectors(n,t),Jn.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(qn),s=Kn.dot(Jn),c=qn.dot(qn),l=qn.dot(Jn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)!==null&&Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Yn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Yn.x),s.addScaledVector(a,Yn.y),s.addScaledVector(o,Yn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return nr.setScalar(0),rr.setScalar(0),ir.setScalar(0),nr.fromBufferAttribute(e,t),rr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nr,i.x),a.addScaledVector(rr,i.y),a.addScaledVector(ir,i.z),a}static isFrontFacing(e,t,n,r){return Kn.subVectors(n,t),qn.subVectors(e,t),Kn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Kn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Xn.subVectors(r,n),Zn.subVectors(i,n),$n.subVectors(e,n);let s=Xn.dot($n),c=Zn.dot($n);if(s<=0&&c<=0)return t.copy(n);er.subVectors(e,r);let l=Xn.dot(er),u=Zn.dot(er);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Xn,a);tr.subVectors(e,i);let f=Xn.dot(tr),p=Zn.dot(tr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Xn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},or=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,cr):cr.fromBufferAttribute(r,t),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),_r.subVectors(this.max,gr),ur.subVectors(e.a,gr),dr.subVectors(e.b,gr),fr.subVectors(e.c,gr),pr.subVectors(dr,ur),mr.subVectors(fr,dr),hr.subVectors(ur,fr);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-hr.z,hr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,hr.z,0,-hr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-hr.y,hr.x,0];return!br(t,ur,dr,fr,_r)||(t=[1,0,0,0,1,0,0,0,1],!br(t,ur,dr,fr,_r))?!1:(vr.crossVectors(pr,mr),t=[vr.x,vr.y,vr.z],br(t,ur,dr,fr,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new H,new H,new H,new H,new H,new H,new H,new H],cr=new H,lr=new or,ur=new H,dr=new H,fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H,vr=new H,yr=new H;function br(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){yr.fromArray(e,a);let o=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),s=t.dot(yr),c=n.dot(yr),l=r.dot(yr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var xr=new H,Sr=new V,Cr=0,wr=class extends dt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Qe,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix4(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyNormalMatrix(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.transformDirection(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ft(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ft(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ft(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ft(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Tr=class extends wr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Er=class extends wr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Dr=class extends wr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Or=new or,kr=new H,Ar=new H,jr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ar)),this.expandByPoint(kr.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mr=0,Nr=new cn,Pr=new Fn,Fr=new H,Ir=new or,Lr=new or,Rr=new H,zr=class e extends dt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=gt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(tt(e)?Er:Tr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(this.boundingBox.min,Ir.min),this.boundingBox.expandByPoint(Rr),Rr.addVectors(this.boundingBox.max,Ir.max),this.boundingBox.expandByPoint(Rr)):(this.boundingBox.expandByPoint(Ir.min),this.boundingBox.expandByPoint(Ir.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Ir.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(Ir.min,Lr.min),Ir.expandByPoint(Rr),Rr.addVectors(Ir.max,Lr.max),Ir.expandByPoint(Rr)):(Ir.expandByPoint(Lr.min),Ir.expandByPoint(Lr.max))}Ir.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Rr.fromBufferAttribute(a,t),o&&(Fr.fromBufferAttribute(e,t),Rr.add(Fr)),r=Math.max(r,n.distanceToSquared(Rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new wr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new wr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rr.fromBufferAttribute(e,t),Rr.normalize(),e.setXYZ(t,Rr.x,Rr.y,Rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new wr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Qe,this.updateRanges=[],this.version=0,this.uuid=gt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vr=new H,Hr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix4(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyNormalMatrix(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.transformDirection(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ft(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ft(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ft(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ft(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){ot(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new wr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ot(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ur=new H,Wr=new H,Gr=new U,Kr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ur.subVectors(n,t).cross(Wr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ur),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gr.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qr=0,Jr=class extends dt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=gt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ze,this.stencilZFail=Ze,this.stencilZPass=Ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Kr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=class extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xr,Zr=new H,Qr=new H,$r=new H,ei=new V,ti=new V,ni=new cn,ri=new H,ii=new H,ai=new H,oi=new V,si=new V,ci=new V,li=class extends Fn{constructor(e=new Yr){if(super(),this.isSprite=!0,this.type=`Sprite`,Xr===void 0){Xr=new zr;let e=new Br(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute(`position`,new Hr(e,3,0,!1)),Xr.setAttribute(`uv`,new Hr(e,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Qr.setFromMatrixScale(this.matrixWorld),ni.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-$r.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ui(ri.set(-.5,-.5,0),$r,a,Qr,r,i),ui(ii.set(.5,-.5,0),$r,a,Qr,r,i),ui(ai.set(.5,.5,0),$r,a,Qr,r,i),oi.set(0,0),si.set(1,0),ci.set(1,1);let o=e.ray.intersectTriangle(ri,ii,ai,!1,Zr);if(o===null&&(ui(ii.set(-.5,.5,0),$r,a,Qr,r,i),si.set(0,1),o=e.ray.intersectTriangle(ri,ai,ii,!1,Zr),o===null))return;let s=e.ray.origin.distanceTo(Zr);s<e.near||s>e.far||t.push({distance:s,point:Zr.clone(),uv:ar.getInterpolation(Zr,ri,ii,ai,oi,si,ci,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ui(e,t,n,r,i,a){ei.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ti.copy(ei):(ti.x=a*ei.x-i*ei.y,ti.y=i*ei.x+a*ei.y),e.copy(t),e.x+=ti.x,e.y+=ti.y,e.applyMatrix4(ni)}var di=new H,fi=new H,pi=new H,mi=new H,hi=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fi.copy(e).add(t).multiplyScalar(.5),pi.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pi),o=mi.dot(this.direction),s=-mi.dot(pi),c=mi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fi).addScaledVector(pi,d),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,te=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,te=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,te=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,te=g)),w===0)return null;let ne=S/w,M=C/w,re=1/w,ie=T-ne*D,ae=E-M*D,oe=ee-ne*k,se=O-M*k,ce=A-ne*j,le=te-M*j,ue=ce*se-le*oe,N=ie*le-ae*ce,P=oe*ae-se*ie;if(r){if(ue<0||N<0||P<0)return null}else if((ue<0||N<0||P<0)&&(ue>0||N>0||P>0))return null;let de=ue+N+P;if(de===0)return null;let fe=re*(ue*D+N*k+P*j);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=new cn,vi=new hi,yi=new jr,bi=new H,xi=new H,Si=new H,Ci=new H,wi=new H,Ti=new H,Ei=new H,Di=new H,G=class extends Fn{constructor(e=new zr,t=new gi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wi.fromBufferAttribute(s,e),a?Ti.addScaledVector(wi,r):Ti.addScaledVector(wi.sub(t),r))}t.add(Ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(i),vi.copy(e.ray).recast(e.near),!(yi.containsPoint(vi.origin)===!1&&(vi.intersectSphere(yi,bi)===null||vi.origin.distanceToSquared(bi)>(e.far-e.near)**2))&&(_i.copy(i).invert(),vi.copy(e.ray).applyMatrix4(_i),(n.boundingBox===null||vi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ki(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ki(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ki(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ki(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Oi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Di.copy(s),Di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Di);return l<n.near||l>n.far?null:{distance:l,point:Di.clone(),object:e}}function ki(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xi),e.getVertexPosition(c,Si),e.getVertexPosition(l,Ci);let u=Oi(e,t,n,r,xi,Si,Ci,Ei);if(u){let e=new H;ar.getBarycoord(Ei,xi,Si,Ci,e),i&&(u.uv=ar.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=ar.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=ar.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};ar.getNormal(xi,Si,Ci,t.normal),u.face=t,u.barycoord=e}return u}var Ai=class extends tn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ji=class extends wr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mi=new cn,Ni=new cn,Pi=[],Fi=new or,Ii=new cn,Li=new G,Ri=new jr,zi=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ii)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Fi.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Ri.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Ri)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(n),e.ray.intersectsSphere(Ri)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Mi),Ni.multiplyMatrices(n,Mi),Li.matrixWorld=Ni,Li.raycast(e,Pi);for(let e=0,n=Pi.length;e<n;e++){let n=Pi[e];n.instanceId=i,n.object=this,t.push(n)}Pi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ai(new Float32Array(r*this.count),r,this.count,re,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new jr,Vi=new V(.5,.5),Hi=new H,Ui=class{constructor(e=new Kr,t=new Kr,n=new Kr,r=new Kr,i=new Kr,a=new Kr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=et,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476+Vi.distanceTo(e.center),Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Hi.x=r.normal.x>0?e.max.x:e.min.x,Hi.y=r.normal.y>0?e.max.y:e.min.y,Hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wi=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gi=new cn,Ki=new hi,qi=new jr,Ji=new H,Yi=class extends Fn{constructor(e=new zr,t=new Wi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),qi.radius+=i,e.ray.intersectsSphere(qi)===!1)return;Gi.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Gi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ji.fromBufferAttribute(l,n),Xi(Ji,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ji.fromBufferAttribute(l,a),Xi(Ji,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Xi(e,t,n,r,i,a,o){let s=Ki.distanceSqToPoint(e);if(s<n){let n=new H;Ki.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Zi=class extends tn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qi=class extends tn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$i=class extends tn{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ne,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends $i{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ne){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},na=class e extends zr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Dr(c,3)),this.setAttribute(`normal`,new Dr(l,3)),this.setAttribute(`uv`,new Dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ra=class e extends zr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Dr(a,3)),this.setAttribute(`normal`,new Dr(o,3)),this.setAttribute(`uv`,new Dr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ia=class e extends zr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Dr(u,3)),this.setAttribute(`normal`,new Dr(d,3)),this.setAttribute(`uv`,new Dr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},aa=class e extends ia{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class e extends zr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Dr(i,3)),this.setAttribute(`normal`,new Dr(i.slice(),3)),this.setAttribute(`uv`,new Dr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},sa=class e extends oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ca=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new cn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(B(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(B(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},la=class extends ca{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ua=class extends la{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function da(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var fa=new H,pa=new H,ma=new da,ha=new da,ga=new da,_a=class extends ca{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(pa.subVectors(r[0],r[1]).add(r[0]),c=pa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(fa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=fa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ma.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ha.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ga.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ma.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ha.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ga.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ma.calc(s),ha.calc(s),ga.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function va(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ya(e,t){let n=1-e;return n*n*t}function ba(e,t){return 2*(1-e)*e*t}function xa(e,t){return e*e*t}function Sa(e,t,n,r){return ya(e,t)+ba(e,n)+xa(e,r)}function Ca(e,t){let n=1-e;return n*n*n*t}function wa(e,t){let n=1-e;return 3*n*n*e*t}function Ta(e,t){return 3*(1-e)*e*e*t}function Ea(e,t){return e*e*e*t}function Da(e,t,n,r,i){return Ca(e,t)+wa(e,n)+Ta(e,r)+Ea(e,i)}var Oa=class extends ca{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,r.x,i.x,a.x,o.x),Da(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends ca{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,r.x,i.x,a.x,o.x),Da(e,r.y,i.y,a.y,o.y),Da(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends ca{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends ca{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends ca{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Sa(e,r.x,i.x,a.x),Sa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends ca{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Sa(e,r.x,i.x,a.x),Sa(e,r.y,i.y,a.y),Sa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends ca{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(va(o,s.x,c.x,l.x,u.x),va(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},Fa=Object.freeze({__proto__:null,ArcCurve:ua,CatmullRomCurve3:_a,CubicBezierCurve:Oa,CubicBezierCurve3:ka,EllipseCurve:la,LineCurve:Aa,LineCurve3:ja,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:Na,SplineCurve:Pa}),Ia=class extends ca{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Fa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Fa[n.type]().fromJSON(n))}return this}},La=class extends Ia{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Aa(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ma(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Oa(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Pa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new la(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ra=class extends La{constructor(e){super(e),this.uuid=gt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new La().fromJSON(n))}return this}};function za(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ba(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=qa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ha(a,o,n,s,c,l,0),o}function Ba(e,t,n,r,i){let a;if(i===vo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=ho(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=ho(i/r|0,e[i],e[i+1],a);return a&&oo(a,a.next)&&(go(a),a=a.next),a}function Va(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(oo(n,n.next)||ao(n.prev,n,n.next)===0)){if(go(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ha(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Qa(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Wa(e,r,i,a):Ua(e))t.push(c.i,e.i,l.i),go(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ga(Va(e),t),Ha(e,t,n,r,i,a,2)):o===2&&Ka(e,t,n,r,i,a):Ha(Va(e),t,n,r,i,a,1);break}}}function Ua(e){let t=e.prev,n=e,r=e.next;if(ao(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ro(i,s,a,c,o,l,m.x,m.y)&&ao(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wa(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ao(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=eo(p,m,t,n,r),v=eo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ro(s,u,c,d,l,f,y.x,y.y)&&ao(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ro(s,u,c,d,l,f,b.x,b.y)&&ao(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ro(s,u,c,d,l,f,y.x,y.y)&&ao(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ro(s,u,c,d,l,f,b.x,b.y)&&ao(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ga(e,t){let n=e;do{let r=n.prev,i=n.next.next;!oo(r,i)&&so(r,n,n.next,i)&&fo(r,i)&&fo(i,r)&&(t.push(r.i,n.i,i.i),go(n),go(n.next),n=e=i),n=n.next}while(n!==e);return Va(n)}function Ka(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&io(o,e)){let s=mo(o,e);o=Va(o,o.next),s=Va(s,s.next),Ha(o,t,n,r,i,a,0),Ha(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function qa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ba(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(to(o))}i.sort(Ja);for(let e=0;e<i.length;e++)n=Ya(i[e],n);return n}function Ja(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ya(e,t){let n=Xa(e,t);if(!n)return t;let r=mo(n,e);return Va(r,r.next),Va(n,n.next)}function Xa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(oo(e,n))return n;do{if(oo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&no(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);fo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Za(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Za(e,t){return ao(e.prev,e,t.prev)<0&&ao(t.next,e,e.next)<0}function Qa(e,t,n,r){let i=e;do i.z===0&&(i.z=eo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,$a(i)}function $a(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function eo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function to(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function no(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ro(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&no(e,t,n,r,i,a,o,s)}function io(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!uo(e,t)&&(fo(e,t)&&fo(t,e)&&po(e,t)&&(ao(e.prev,e,t.prev)||ao(e,t.prev,t))||oo(e,t)&&ao(e.prev,e,e.next)>0&&ao(t.prev,t,t.next)>0)}function ao(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function oo(e,t){return e.x===t.x&&e.y===t.y}function so(e,t,n,r){let i=lo(ao(e,t,n)),a=lo(ao(e,t,r)),o=lo(ao(n,r,e)),s=lo(ao(n,r,t));return!!(i!==a&&o!==s||i===0&&co(e,n,t)||a===0&&co(e,r,t)||o===0&&co(n,e,r)||s===0&&co(n,t,r))}function co(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function lo(e){return e>0?1:e<0?-1:0}function uo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&so(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function fo(e,t){return ao(e.prev,e,e.next)<0?ao(e,t,e.next)>=0&&ao(e,e.prev,t)>=0:ao(e,t,e.prev)<0||ao(e,e.next,t)<0}function po(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function mo(e,t){let n=_o(e.i,e.x,e.y),r=_o(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ho(e,t,n,r){let i=_o(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function go(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _o(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var yo=class{static triangulate(e,t,n=2){return za(e,t,n)}},bo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];xo(e),So(n,e);let a=e.length;t.forEach(xo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,So(n,t[e]);let o=yo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function xo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function So(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Co=class e extends zr{constructor(e=new Ra([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Dr(r,3)),this.setAttribute(`uv`,new Dr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?wo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!bo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];bo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||z(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let A=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=k(D[e],D[n],D[r]);let te=[],j,ne=A.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=k(t[e],t[r],t[i]);te.push(j),ne=ne.concat(j)}let M;if(p===0)M=bo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=ee(D[t],A[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=ee(n[e],j[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}M=bo.triangulateShape(e,t)}let re=M.length,ie=d+f;for(let e=0;e<O;e++){let t=l?ee(C[e],ne[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?ee(C[t],ne[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=ee(D[e],A[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],j[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<re;e++){let n=M[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<re;e++){let n=M[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<re;e++){let t=M[e];le(t[2],t[1],t[0])}for(let e=0;e<re;e++){let t=M[e];le(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);P(o[0]),P(o[1]),P(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);P(s[0]),P(s[1]),P(s[3]),P(s[1]),P(s[2]),P(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function P(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return To(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fa[i.type]().fromJSON(i)),new e(r,t.options)}},wo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function To(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Eo=class e extends oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Do=class e extends oa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Oo=class e extends zr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ko=class e extends zr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Dr(s,3)),this.setAttribute(`normal`,new Dr(c,3)),this.setAttribute(`uv`,new Dr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ao=class e extends zr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},jo=class e extends zr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Dr(c,3)),this.setAttribute(`normal`,new Dr(l,3)),this.setAttribute(`uv`,new Dr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Mo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Po(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Po(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function No(e){let t={};for(let n=0;n<e.length;n++){let r=Mo(e[n]);for(let e in r)t[e]=r[e]}return t}function Po(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Io(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var Lo={clone:Mo,merge:No},Ro=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bo=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ro,this.fragmentShader=zo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=Fo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new nn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new cn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vo=class extends Bo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},K=class extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ho=class extends K{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return B(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Uo=class extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wo=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ke,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ko(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function qo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Jo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Yo=class extends Jo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ue,endingEnd:Ue}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case We:i=e,o=2*t-n;break;case Ge:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case We:a=e,s=2*n-t;break;case Ge:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Xo=class extends Jo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Zo=class extends Jo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qo=class extends Jo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ts(n,t,g,y,r);i[p]=$o(x,o,_,b,m)}return i}};function $o(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function es(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ts(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=$o(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=es(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ns=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),qo(e.settings)&&(n.settings={inTangents:Ko(e.settings.inTangents,Array),outTangents:Ko(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ze:t=this.InterpolantFactoryMethodDiscrete;break;case Be:t=this.InterpolantFactoryMethodLinear;break;case Ve:t=this.InterpolantFactoryMethodSmooth;break;case He:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ze;case this.InterpolantFactoryMethodLinear:return Be;case this.InterpolantFactoryMethodSmooth:return Ve;case this.InterpolantFactoryMethodBezier:return He}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;qo(this.settings)&&(rs(this.settings.inTangents,e),rs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&nt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ve,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,qo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function rs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ns.prototype.ValueTypeName=``,ns.prototype.TimeBufferType=Float32Array,ns.prototype.ValueBufferType=Float32Array,ns.prototype.DefaultInterpolation=Be;var is=class extends ns{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName=`bool`,is.prototype.ValueBufferType=Array,is.prototype.DefaultInterpolation=ze,is.prototype.InterpolantFactoryMethodLinear=void 0,is.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends ns{constructor(e,t,n,r){super(e,t,n,r)}};as.prototype.ValueTypeName=`color`;var os=class extends ns{constructor(e,t,n,r){super(e,t,n,r)}};os.prototype.ValueTypeName=`number`;var ss=class extends Jo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},cs=class extends ns{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ss(this.times,this.values,this.getValueSize(),e)}};cs.prototype.ValueTypeName=`quaternion`,cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends ns{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName=`string`,ls.prototype.ValueBufferType=Array,ls.prototype.DefaultInterpolation=ze,ls.prototype.InterpolantFactoryMethodLinear=void 0,ls.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends ns{constructor(e,t,n,r){super(e,t,n,r)}};us.prototype.ValueTypeName=`vector`;var ds=class extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fs=class extends ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ps=new cn,ms=new H,hs=new H,gs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ms.setFromMatrixPosition(e.matrixWorld),t.position.copy(ms),hs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ps.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ps,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_s=new H,vs=new Rt,ys=new H,bs=class extends Fn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=et,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_s,vs,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_s,vs,ys.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_s,vs,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_s,vs,ys.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new H,Ss=new V,Cs=new V,ws=class extends bs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ht*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ht*2*Math.atan(Math.tan(mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,Ss,Cs),t.subVectors(Cs,Ss)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ts=class extends gs{constructor(){super(new ws(90,1,.5,500)),this.isPointLightShadow=!0}},Es=class extends ds{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ts}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ds=class extends bs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Os=class extends gs{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Os}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},As=-90,js=1,Ms=class extends Fn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ws(As,js,e,t);r.layers=this.layers,this.add(r);let i=new ws(As,js,e,t);i.layers=this.layers,this.add(i);let a=new ws(As,js,e,t);a.layers=this.layers,this.add(a);let o=new ws(As,js,e,t);o.layers=this.layers,this.add(o);let s=new ws(As,js,e,t);s.layers=this.layers,this.add(s);let c=new ws(As,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ns=class extends ws{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ps=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Fs.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Fs(){this._document.hidden===!1&&this.reset()}var Is=`\\[\\]\\.:\\/`,Ls=RegExp(`[\\[\\]\\.:\\/]`,`g`),Rs=`[^\\[\\]\\.:\\/]`,zs=`[^`+Is.replace(`\\.`,``)+`]`,Bs=`((?:WC+[\\/:])*)`.replace(`WC`,Rs),Vs=`(WCOD+)?`.replace(`WCOD`,zs),Hs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Rs),Us=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Rs),Ws=RegExp(`^`+Bs+Vs+Hs+Us+`$`),Gs=[`material`,`materials`,`bones`,`map`],Ks=class{constructor(e,t,n){let r=n||qs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ls,``)}static parseTrackName(e){let t=Ws.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Gs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qs.Composite=Ks,qs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qs.prototype.GetterByBindingType=[qs.prototype._getValue_direct,qs.prototype._getValue_array,qs.prototype._getValue_arrayElement,qs.prototype._getValue_toArray],qs.prototype.SetterByBindingTypeAndVersioning=[[qs.prototype._setValue_direct,qs.prototype._setValue_direct_setNeedsUpdate,qs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qs.prototype._setValue_array,qs.prototype._setValue_array_setNeedsUpdate,qs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qs.prototype._setValue_arrayElement,qs.prototype._setValue_arrayElement_setNeedsUpdate,qs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qs.prototype._setValue_fromArray,qs.prototype._setValue_fromArray_setNeedsUpdate,qs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Js(e,t,n,r){let i=Ys(r);switch(n){case A:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:case pe:return Math.max(e,16)*Math.max(t,8)/4;case P:case fe:return Math.max(e,8)*Math.max(t,8)/2;case me:case he:case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ge:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pe:case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*16;case I:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*8;case L:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ys(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Xs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Zs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Qs={basic:{uniforms:No([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:No([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:No([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:No([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:No([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new W(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:No([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:No([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:No([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:No([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:No([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:No([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:No([J.common,J.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:No([J.lights,J.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};Qs.physical={uniforms:No([Qs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var $s={r:0,b:0,g:0},ec=new cn,tc=new U;tc.set(-1,0,0,0,1,0,0,0,1);function nc(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new G(new na(1,1,1),new Bo({name:`BackgroundCubeMaterial`,uniforms:Mo(Qs.backgroundCube.uniforms),vertexShader:Qs.backgroundCube.vertexShader,fragmentShader:Qs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ec.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tc),l.material.toneMapped=Gt.getTransfer(i.colorSpace)!==Xe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new Oo(2,2),new Bo({name:`BackgroundMaterial`,uniforms:Mo(Qs.background.uniforms),vertexShader:Qs.background.vertexShader,fragmentShader:Qs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(i.colorSpace)!==Xe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($s,Io(e)),n.buffers.color.setClear($s.r,$s.g,$s.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function rc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ic(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ac(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function oc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Kr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var sc=4,cc=6,lc=20,uc=256,dc=new Ds,fc=new W,pc=null,mc=0,hc=0,gc=!1,_c=new H,vc=new H,yc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_c}=i;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,hc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:j,colorSpace:Je,depthBuffer:!1},r=xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bc(r)),this._blurMaterial=wc(r,e,t),this._ggxMaterial=Cc(r,e,t)}return r}_compileMaterial(e){let t=new G(new zr,e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,r,i){let a=new ws(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(fc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new G(new na,new gi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(fc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Sc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Sc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,dc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-sc?n-d+sc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Sc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,dc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Sc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,dc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Sc(t,3*l*(r>this._lodMax-sc?r-this._lodMax+sc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,dc)}};function bc(e){let t=[],n=[],r=e,i=e-sc+1+cc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?vc.set(1,r,n):e===1?vc.set(-n,1,-r):e===2?vc.set(-n,r,1):e===3?vc.set(-1,r,-n):e===4?vc.set(-n,-1,r):vc.set(n,r,-1),vc.toArray(l,(e*6+t)*3)}}let u=new zr;u.setAttribute(`position`,new wr(c,3)),u.setAttribute(`outputDirection`,new wr(l,3)),n.push(new G(u,null)),r>sc&&r--}return{lodMeshes:n,sizeLods:t}}function xc(e,t,n){let r=new an(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Sc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Cc(e,t,n){return new Bo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:uc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wc(e,t,n){return new Bo({name:`SphericalGaussianBlur`,defines:{SAMPLES:lc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tc(){return new Bo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ec(){return new Bo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Oc=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new na(5,5,5),i=new Bo({name:`CubemapFromEquirect`,uniforms:Mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new Ms(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function kc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Oc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new yc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new yc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ac(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function jc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Er:Tr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Mc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Nc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Pc(e,t,n){let r=new WeakMap,i=new nn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new on(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Fc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ic={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Lc(e,t,n,r,i,a){let o=new an(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new zr;l.setAttribute(`position`,new Dr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Dr([0,2,0,0,2,0],2));let u=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new G(l,u),f=new Ds(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new an(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new an(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Gt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ic[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Rc=new tn,zc=new $i(1,1),Bc=new on,Vc=new sn,Hc=new Zi,Uc=[],Wc=[],Gc=new Float32Array(16),Kc=new Float32Array(9),qc=new Float32Array(4);function Jc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Uc[i];if(a===void 0&&(a=new Float32Array(i),Uc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Yc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Xc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Zc(e,t){let n=Wc[t];n===void 0&&(n=new Int32Array(t),Wc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yc(n,t))return;e.uniform2fv(this.addr,t),Xc(n,t)}}function el(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Yc(n,t))return;e.uniform3fv(this.addr,t),Xc(n,t)}}function tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yc(n,t))return;e.uniform4fv(this.addr,t),Xc(n,t)}}function nl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xc(n,t)}else{if(Yc(n,r))return;qc.set(r),e.uniformMatrix2fv(this.addr,!1,qc),Xc(n,r)}}function rl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xc(n,t)}else{if(Yc(n,r))return;Kc.set(r),e.uniformMatrix3fv(this.addr,!1,Kc),Xc(n,r)}}function il(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xc(n,t)}else{if(Yc(n,r))return;Gc.set(r),e.uniformMatrix4fv(this.addr,!1,Gc),Xc(n,r)}}function al(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yc(n,t))return;e.uniform2iv(this.addr,t),Xc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yc(n,t))return;e.uniform3iv(this.addr,t),Xc(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yc(n,t))return;e.uniform4iv(this.addr,t),Xc(n,t)}}function ll(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yc(n,t))return;e.uniform2uiv(this.addr,t),Xc(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yc(n,t))return;e.uniform3uiv(this.addr,t),Xc(n,t)}}function fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yc(n,t))return;e.uniform4uiv(this.addr,t),Xc(n,t)}}function pl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(zc.compareFunction=n.isReversedDepthBuffer()?518:515,a=zc):a=Rc,n.setTexture2D(t||a,i)}function ml(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Vc,i)}function hl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Hc,i)}function gl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Bc,i)}function _l(e){switch(e){case 5126:return Qc;case 35664:return $c;case 35665:return el;case 35666:return tl;case 35674:return nl;case 35675:return rl;case 35676:return il;case 5124:case 35670:return al;case 35667:case 35671:return ol;case 35668:case 35672:return sl;case 35669:case 35673:return cl;case 5125:return ll;case 36294:return ul;case 36295:return dl;case 36296:return fl;case 35678:case 36198:case 36298:case 36306:case 35682:return pl;case 35679:case 36299:case 36307:return ml;case 35680:case 36300:case 36308:case 36293:return hl;case 36289:case 36303:case 36311:case 36292:return gl}}function vl(e,t){e.uniform1fv(this.addr,t)}function yl(e,t){let n=Jc(t,this.size,2);e.uniform2fv(this.addr,n)}function bl(e,t){let n=Jc(t,this.size,3);e.uniform3fv(this.addr,n)}function xl(e,t){let n=Jc(t,this.size,4);e.uniform4fv(this.addr,n)}function Sl(e,t){let n=Jc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cl(e,t){let n=Jc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wl(e,t){let n=Jc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tl(e,t){e.uniform1iv(this.addr,t)}function El(e,t){e.uniform2iv(this.addr,t)}function Dl(e,t){e.uniform3iv(this.addr,t)}function Ol(e,t){e.uniform4iv(this.addr,t)}function kl(e,t){e.uniform1uiv(this.addr,t)}function Al(e,t){e.uniform2uiv(this.addr,t)}function jl(e,t){e.uniform3uiv(this.addr,t)}function Ml(e,t){e.uniform4uiv(this.addr,t)}function Nl(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?zc:Rc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pl(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Vc,a[e])}function Fl(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Hc,a[e])}function Il(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Bc,a[e])}function Ll(e){switch(e){case 5126:return vl;case 35664:return yl;case 35665:return bl;case 35666:return xl;case 35674:return Sl;case 35675:return Cl;case 35676:return wl;case 5124:case 35670:return Tl;case 35667:case 35671:return El;case 35668:case 35672:return Dl;case 35669:case 35673:return Ol;case 5125:return kl;case 36294:return Al;case 36295:return jl;case 36296:return Ml;case 35678:case 36198:case 36298:case 36306:case 35682:return Nl;case 35679:case 36299:case 36307:return Pl;case 35680:case 36300:case 36308:case 36293:return Fl;case 36289:case 36303:case 36311:case 36292:return Il}}var Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_l(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ll(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function Hl(e,t){e.seq.push(t),e.map[t.id]=t}function Ul(e,t,n){let r=e.name,i=r.length;for(Vl.lastIndex=0;;){let a=Vl.exec(r),o=Vl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hl(n,l===void 0?new Rl(s,e,t):new zl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bl(s),Hl(n,e)),n=e}}}var Wl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ul(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kl=37297,ql=0;function Jl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yl=new U;function Xl(e){Gt._getMatrix(Yl,Gt.workingColorSpace,e);let t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(e)){case Ye:return[t,`LinearTransferOETF`];case Xe:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jl(e.getShaderSource(t),r)}return i}function Ql(e,t){let n=Xl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var $l={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function eu(e,t){let n=$l[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var tu=new H;function nu(){return Gt.getLuminanceCoefficients(tu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${tu.x.toFixed(4)}, ${tu.y.toFixed(4)}, ${tu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ru(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ou).join(`
`)}function iu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function au(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ou(e){return e!==``}function su(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lu=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(e){return e.replace(lu,fu)}var du=new Map;function fu(e,t){let n=q[t];if(n===void 0){let e=du.get(t);if(e!==void 0)n=q[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return uu(n)}var pu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(e){return e.replace(pu,hu)}function hu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function gu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var _u={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function vu(e){return _u[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var yu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function bu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:yu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var xu={302:`ENVMAP_MODE_REFRACTION`};function Su(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:xu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Cu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function wu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Cu[e.combine]||`ENVMAP_BLENDING_NONE`}function Tu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Eu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vu(n),l=bu(n),u=Su(n),d=wu(n),f=Tu(n),p=ru(n),m=iu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ou).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ou).join(`
`),_.length>0&&(_+=`
`)):(g=[gu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ou).join(`
`),_=[gu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:eu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,Ql(`linearToOutputTexel`,n.outputColorSpace),nu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ou).join(`
`)),o=uu(o),o=su(o,n),o=cu(o,n),s=uu(s),s=su(s,n),s=cu(s,n),o=mu(o),s=mu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Gl(i,i.VERTEX_SHADER,y),S=Gl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Zl(i,x,`vertex`),n=Zl(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Wl(i,h),T=au(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Kl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ql++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Du=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ku(e),t.set(e,n)),n}},ku=class{constructor(e){this.id=Du++,this.code=e,this.usedTimes=0}};function Au(e){return e===1030||e===37490||e===36285}function ju(e,t,n,r,i,a){let o=new yn,s=new Ou,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Qs[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,P=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Au(i.normalMap.format),metalnessMap:N,roughnessMap:P,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:P&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Qs[t];n=Lo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Eu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Mu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nu),r.length>1&&r.sort(t||Pu),i.length>1&&i.sort(t||Pu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Iu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fu,e.set(t,[i])):n>=r.length?(i=new Fu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Ru(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zu=0;function Bu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vu(e){let t=new Lu,n=Ru(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new cn,o=new cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hu(e){let t=new Vu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Uu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hu(e),t.set(n,[a])):r>=i.length?(a=new Hu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ku=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],qu=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ju=new cn,Yu=new H,Xu=new H;function Zu(e,t,n){let r=new Ui,i=new V,a=new V,o=new nn,s=new Wo,c=new Go,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new Bo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Wu,fragmentShader:Gu}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new zr;g.setAttribute(`position`,new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new G(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new an(i.x,i.y,{format:ae,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new $i(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ne,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Oc(i.x),d.map.depthTexture=new ea(i.x,C)):(d.map=new an(i.x,i.y),d.map.depthTexture=new $i(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ne,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Yu),Xu.copy(e.position),Xu.add(Ku[t]),e.up.copy(qu[t]),e.lookAt(Xu),e.updateMatrixWorld(),n.makeTranslation(-Yu.x,-Yu.y,-Yu.z),Ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ju,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new an(i.x,i.y,{format:ae,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qu(e,t){function n(){let t=!1,n=new nn,r=null,i=new nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):P(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ut[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):P(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ne>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new nn().fromArray(ae),ce=new nn().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),N(e.CULL_FACE),ge(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function P(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(P(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?P(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):P(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?P(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function be(t){t!==O&&(j&&e.lineWidth(t),O=t)}function xe(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):P(e.POLYGON_OFFSET_FILL)}function Se(t){t?N(e.SCISSOR_TEST):P(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function we(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Te(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:P,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:ze}}function $u(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):rt(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ye:Gt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},me={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=k(o.format===M,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ye(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Js(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Js(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Fe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Pe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);ge(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Fe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function F(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=P,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ed(e,t){function n(n,r=``){let i,a=Gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var td=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bo({vertexShader:td,fragmentShader:nd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends dt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new rd,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new V,T=null,E=null,D=new ws;D.viewport=new nn;let O=new ws;O.viewport=new nn;let k=[D,O],A=new Ns,te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Rn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Rn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Rn,x[e]=t),t.getHandSpace()};function ie(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,re=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?M:ne,a=_.stencil?ee:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new an(d.textureWidth,d.textureHeight,{format:j,type:v,depthTexture:new $i(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new an(f.framebufferWidth,f.framebufferHeight,{format:j,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let se=new H,ce=new H;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||re!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,re=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),N(e,A,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ht*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let P=null;function de(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new ws,o.layers.enable(n),o.viewport=new nn,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ta,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}P&&P(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let fe=new Xs;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){P=e},this.dispose=function(){}}},ad=new cn,od=new U;od.set(-1,0,0,0,1,0,0,0,1);function sd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Io(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ad.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(od),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ld=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ud=null;function dd(){return ud===null&&(ud=new Ai(ld,16,16,ae,T),ud.name=`DFG_LUT`,ud.minFilter=h,ud.magFilter=h,ud.wrapS=u,ud.wrapT=u,ud.generateMipmaps=!1,ud.needsUpdate=!0),ud}var fd=class{constructor(e={}){let{canvas:t=it(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([v,C,x,ee,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new H,w=null,O=null,k=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,M=null,re=null,ae=null,ce=null;this._outputColorSpace=qe;let le=0,ue=0,N=null,P=-1,de=null,fe=new nn,pe=new nn,me=null,he=new W(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new nn(0,0,_e,ve),Ce=new nn(0,0,_e,ve),we=!1,Te=new Ui,Ee=!1,De=!1,Oe=new cn,ke=new H,Ae=new nn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return N===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,L,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,Je,Ye,Xe,Ze,Qe,$e,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function at(){Fe=new Ac(F),Fe.init(),tt=new ed(F,Fe),Ie=new ac(F,Fe,e,tt),I=new Qu(F,Fe),Ie.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),re=F.createFramebuffer(),ae=F.createFramebuffer(),ce=F.createFramebuffer(),Le=new Nc(F),L=new Mu,Re=new $u(F,Fe,I,L,Ie,tt,Le),ze=new kc(j),Be=new Zs(F),nt=new rc(F,Be),Ve=new jc(F,Be,Le,nt),He=new Fc(F,Ve,Be,nt,Le),Ze=new Pc(F,Ie,Re),Je=new oc(L),Ue=new ju(j,ze,Fe,Ie,nt,Je),We=new sd(j,L),Ge=new Iu,Ke=new Uu(Fe),Xe=new nc(j,ze,I,He,p,s),Ye=new Zu(j,He,Ie),rt=new cd(F,Le,Ie,I),Qe=new ic(F,Fe,Le),$e=new Mc(F,Fe,Le),Le.programs=Ue.programs,j.capabilities=Ie,j.extensions=Fe,j.properties=L,j.renderLists=Ge,j.shadowMap=Ye,j.state=I,j.info=Le}m!==1009&&(te=new Lc(m,t.width,t.height,o,r,i));let st=new id(j,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){st.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,F.clearBufferiv(F.COLOR,0,b))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Xe.dispose(),Ge.dispose(),Ke.dispose(),L.dispose(),ze.dispose(),He.dispose(),nt.dispose(),rt.dispose(),Ue.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,_t),st.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),ot(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){ot(`WebGLRenderer: Context Restored.`),ne=!1;let e=Le.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;at(),Le.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),L.remove(e)}function mt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Be.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),Ee===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),O=Ke.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),M!==null&&M.updateLights(O.state.lightsArray),De=this.localClippingEnabled,Ee=Je.init(this.clippingPlanes,De),Ee===!0&&Je.setGlobalState(this.clippingPlanes,t),M!==null&&Ye.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),O=A.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function B(e){gt&&gt(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new Xs;yt.setAnimationLoop(B),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){gt=e,st.setAnimationLoop(e),e===null?yt.stop():yt.start()},st.addEventListener(`sessionstart`,_t),st.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;M!==null&&M.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(j,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,N),O=Ke.get(e,A.length),O.init(t),O.state.textureUnits=Re.getTextureUnits(),A.push(O),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,et,t.reversedDepth),De=this.localClippingEnabled,Ee=Je.init(this.clippingPlanes,De),w=Ge.get(e,k.length),w.init(),k.push(w),st.enabled===!0&&st.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,j.sortObjects)}bt(e,t,0,j.sortObjects),w.finish(),M!==null&&M.updateLights(O.state.lightsArray),j.sortObjects===!0&&w.sort(be,xe),Me=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Me&&Xe.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Je.beginShadows();let i=O.state.shadowsArray;if(Ye.render(i,e,t),Ee===!0&&Je.endShadows(),(r&&te.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Me&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(w,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Me&&Xe.render(e),xt(w,e,t)}N!==null&&ue===0&&(Re.updateMultisampleRenderTarget(N),Re.updateRenderTargetMipmap(N)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),nt.resetDefaultState(),P=-1,de=null,A.pop(),A.length>0?(O=A[A.length-1],Re.setTextureUnits(O.state.textureUnits),Ee===!0&&Je.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),w=k.length>0?k[k.length-1]:null,M!==null&&M.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=He.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Ee===!0&&Je.setGlobalState(j.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new an(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(he),ge=j.getClearAlpha(),ge<1&&j.setClearColor(16777215,.5),j.clear(),Me&&Xe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Ee===!0&&Je.setGlobalState(j.clippingPlanes,r),Ct(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(he,ge),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=Ue.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=je),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?j.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=O.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===P;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==P&&(P=r.id,C=!0),v.needsLights){let e=Ot(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,Re),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,Re),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,Re));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=dd()),C){if(T.setValue(F,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,ye,ve,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Wl.upload(F,Et(v),E,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wl.upload(F,Et(v),E,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),P=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=re),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}P=-1};function Mt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lt(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ae),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,I.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return et}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}},pd=class e extends G{constructor(){let t=e.SkyShader,n=new Bo({name:t.name,uniforms:Lo.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new na(1,1,1),n),this.isSky=!0}};pd.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new H},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var md=class extends Gn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new na;e.deleteAttribute(`uv`);let t=new K({side:1}),n=new K,r=new Es(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new G(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new zi(e,n,6),o=new Fn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new G(e,hd(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new G(e,hd(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new G(e,hd(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new G(e,hd(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new G(e,hd(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new G(e,hd(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function hd(e){return new Uo({color:0,emissive:16777215,emissiveIntensity:e})}function gd(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function _d(e,t){gd(e,t),t.add(e)}function Y(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}var vd=new WeakSet,yd=class{constructor(e){_d(this,vd),this.def=e,this.halfWidth=e.width/2,this.curbWidth=e.curbWidth??1.2,this.wallOffset=this.halfWidth+this.curbWidth+(e.wallGap??.8);let t=e.points.map(([e,t,n=0])=>new H(e,n,t));this.curve=new _a(t,!0,`centripetal`);let n=this.curve.getLength(),r=e.sampleSpacing??2.5,i=Math.max(200,Math.round(n/r));this.count=i;let a=this.curve.getSpacedPoints(i);this.x=new Float32Array(i),this.y=new Float32Array(i),this.z=new Float32Array(i),this.tx=new Float32Array(i),this.tz=new Float32Array(i),this.sx=new Float32Array(i),this.sz=new Float32Array(i),this.s=new Float32Array(i),this.segLen=new Float32Array(i),this.curvature=new Float32Array(i);for(let e=0;e<i;e++)this.x[e]=a[e].x,this.y[e]=a[e].y,this.z[e]=a[e].z;let o=0;for(let e=0;e<i;e++){let t=(e+1)%i,n=this.x[t]-this.x[e],r=this.z[t]-this.z[e],a=Math.hypot(n,r);this.segLen[e]=a,this.s[e]=o,o+=a}this.length=o;for(let e=0;e<i;e++){let t=(e-1+i)%i,n=(e+1)%i,r=this.x[n]-this.x[t],a=this.z[n]-this.z[t],o=Math.hypot(r,a)||1;r/=o,a/=o,this.tx[e]=r,this.tz[e]=a,this.sx[e]=-a,this.sz[e]=r}for(let e=0;e<i;e++){let t=(e-1+i)%i,n=(e+1)%i,r=Math.atan2(this.tx[t],this.tz[t]),a=Math.atan2(this.tx[n],this.tz[n])-r;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;let o=this.segLen[t]+this.segLen[e];this.curvature[e]=-a/o}this.ramps=(e.ramps??[]).map(e=>({s0:e.at*this.length,length:e.length,height:e.height,lateral:e.lateral??0,halfWidth:e.halfWidth??3})),this.bounds=Y(vd,this,bd).call(this)}wrap(e){let t=this.count;return(e%t+t)%t}wrapS(e){let t=this.length;return(e%t+t)%t}indexAt(e){let t=this.count,n=this.wrapS(e),r=Math.floor(n/this.length*t);for(r=Math.min(t-1,Math.max(0,r));r>0&&this.s[r]>n;)r--;for(;r<t-1&&this.s[r+1]<=n;)r++;return r}frameAt(e,t={}){let n=this.wrapS(e),r=this.indexAt(n),i=(r+1)%this.count,a=Math.min(1,Math.max(0,(n-this.s[r])/(this.segLen[r]||1)));t.index=r,t.s=n,t.x=this.x[r]+(this.x[i]-this.x[r])*a,t.y=this.y[r]+(this.y[i]-this.y[r])*a,t.z=this.z[r]+(this.z[i]-this.z[r])*a;let o=this.tx[r]+(this.tx[i]-this.tx[r])*a,s=this.tz[r]+(this.tz[i]-this.tz[r])*a,c=Math.hypot(o,s)||1;return o/=c,s/=c,t.tx=o,t.tz=s,t.sx=-s,t.sz=o,t.heading=Math.atan2(o,s),t}project(e,t,n=-1,r={}){let i=this.count,a=-1,o=1/0;if(n>=0){for(let r=-30;r<=30;r++){let s=(n+r+i)%i,c=e-this.x[s],l=t-this.z[s],u=c*c+l*l;u<o&&(o=u,a=s)}let s=a===(n+30)%i||a===(n-30+i)%i,c=o>(this.wallOffset+8)**2;if(s||c)return this.project(e,t,-1,r)}else for(let n=0;n<i;n++){let r=e-this.x[n],i=t-this.z[n],s=r*r+i*i;s<o&&(o=s,a=n)}let s=a,c=0,l=1/0;for(let n=-1;n<=0;n++){let r=(a+n+i)%i,o=(r+1)%i,u=this.x[r],d=this.z[r],f=this.x[o]-u,p=this.z[o]-d,m=f*f+p*p||1,h=((e-u)*f+(t-d)*p)/m;h=Math.min(1,Math.max(0,h));let g=u+f*h,_=d+p*h,v=(e-g)**2+(t-_)**2;v<l&&(l=v,s=r,c=h)}let u=s,d=(u+1)%i,f=c,p=this.x[u]+(this.x[d]-this.x[u])*f,m=this.z[u]+(this.z[d]-this.z[u])*f,h=this.tx[u]+(this.tx[d]-this.tx[u])*f,g=this.tz[u]+(this.tz[d]-this.tz[u])*f,_=Math.hypot(h,g)||1;return h/=_,g/=_,r.index=f<.5?u:d,r.s=this.s[u]+this.segLen[u]*f,r.x=p,r.z=m,r.y=this.y[u]+(this.y[d]-this.y[u])*f,r.tx=h,r.tz=g,r.sx=-g,r.sz=h,r.lateral=(e-p)*r.sx+(t-m)*r.sz,r.distance=Math.sqrt(l),r.dy=(this.y[d]-this.y[u])/(this.segLen[u]||1),r}surfaceAt(e,t={}){let n=e.y,r=e.dy??0;for(let t of this.ramps){let i=e.s-t.s0;i<-this.length/2&&(i+=this.length),i>=0&&i<=t.length&&Math.abs(e.lateral-t.lateral)<=t.halfWidth&&(n+=t.height*i/t.length,r+=t.height/t.length)}return t.height=n,t.slope=r,t}maxCurvatureAhead(e,t,n=5){let r=0;for(let i=0;i<=t;i+=n){let t=this.indexAt(e+i);r=Math.max(r,Math.abs(this.curvature[t]))}return r}minRadius(){let e=0;for(let t=0;t<this.count;t++)e=Math.max(e,Math.abs(this.curvature[t]));return e>0?1/e:1/0}};function bd(){let e=1/0,t=-1/0,n=1/0,r=-1/0;for(let i=0;i<this.count;i++)e=Math.min(e,this.x[i]),t=Math.max(t,this.x[i]),n=Math.min(n,this.z[i]),r=Math.max(r,this.z[i]);return{minX:e,maxX:t,minZ:n,maxZ:r,cx:(e+t)/2,cz:(n+r)/2}}function xd(e){let t=-10-Math.floor(e/2)*9-e%2*4.5;return{mark:t,s:t-2.6,lateral:e%2?3.6:-3.6}}var Sd=new WeakSet,Cd=class{constructor(e,{mode:t=`race`,laps:n=3,checkpoints:r=4,finishTimeout:i=60}={}){_d(this,Sd),this.path=e,this.mode=t,this.totalLaps=t===`race`?n:1/0,this.finishTimeout=i;let a=e.length;this.checkpoints=[];for(let e=1;e<r;e++)this.checkpoints.push(e/r*a);this.racers=[],this.events=[],this.reset()}reset(){this.phase=`idle`,this.time=0,this.countdown=0,this.lastCount=0,this.finishOrder=[],this.deadline=1/0,this.events.length=0}addRacer(e,t,n={}){let r={id:e,vehicle:t,name:n.name??e,color:n.color??`#ffffff`,isPlayer:!!n.isPlayer};return Y(Sd,this,wd).call(this,r),this.racers.push(r),r}start(){this.reset();for(let e of this.racers)Y(Sd,this,wd).call(this,e);this.mode===`race`?(this.phase=`countdown`,this.countdown=3,this.lastCount=4):this.phase=`racing`,Y(Sd,this,Od).call(this)}get canMove(){return this.phase===`racing`||this.phase===`done`}update(e){if(this.phase===`idle`)return;if(this.phase===`countdown`){this.countdown-=e;let t=Math.ceil(this.countdown);if(t<this.lastCount&&t>=1&&(this.lastCount=t,this.events.push({type:`count`,value:t})),this.countdown<=0){this.phase=`racing`,this.time=0;for(let e of this.racers)e.prevS=e.vehicle.state.s;this.events.push({type:`go`})}return}this.time+=e;let t=this.path.length;for(let e of this.racers){let n=e.vehicle.state.s;if(e.finished){e.prevS=n;continue}let r=Y(Sd,this,Td).call(this,e.prevS,n);if(e.progress+=r,r>0){let n=this.checkpoints[e.nextCheckpoint];n!==void 0&&Y(Sd,this,Ed).call(this,e.prevS,r,n)&&(e.nextCheckpoint++,this.events.push({type:`checkpoint`,racer:e,index:e.nextCheckpoint})),e.prevS+r>=t&&e.nextCheckpoint>=this.checkpoints.length&&Y(Sd,this,Dd).call(this,e)}e.prevS=n}if(this.time>this.deadline)for(let e of this.racers)e.finished||(e.finished=!0,e.dnf=!0,this.events.push({type:`dnf`,racer:e}));Y(Sd,this,Od).call(this),this.phase===`racing`&&this.mode===`race`&&this.racers.every(e=>e.finished)&&(this.phase=`done`,this.events.push({type:`all-finished`}))}get timeLeft(){return isFinite(this.deadline)?Math.max(0,this.deadline-this.time):null}currentLapTime(e){return this.phase===`racing`||this.phase===`done`?this.time-e.lapStart:0}isWrongWay(e){return kd(e.vehicle.state)}drainEvents(){let e=this.events.slice();return this.events.length=0,e}};function wd(e){e.lap=1,e.nextCheckpoint=0,e.lapStart=0,e.lastLap=null,e.bestLap=null,e.laps=[],e.prevS=e.vehicle.state.s;let t=e.vehicle.state.s;t>this.path.length/2&&(t-=this.path.length),e.progress=t,e.finished=!1,e.finishTime=null,e.dnf=!1,e.position=0}function Td(e,t){let n=this.path.length,r=t-e;return r<-n/2&&(r+=n),r>n/2&&(r-=n),r}function Ed(e,t,n){let r=this.path.length,i=n-e;return i<0&&(i+=r),i>0&&i<=t}function Dd(e){let t=this.time-e.lapStart,n=e.bestLap===null||t<e.bestLap;e.lastLap=t,e.laps.push(t),n&&(e.bestLap=t),e.lapStart=this.time,e.nextCheckpoint=0,e.lap>=this.totalLaps?(e.finished=!0,e.finishTime=this.time,this.finishOrder.push(e),this.finishOrder.length===1&&(this.deadline=this.time+this.finishTimeout),this.events.push({type:`finish`,racer:e,place:this.finishOrder.length,time:this.time,lapTime:t,isBest:n})):(e.lap++,this.events.push({type:`lap`,racer:e,lapTime:t,isBest:n,lap:e.lap,final:e.lap===this.totalLaps}))}function Od(){let e=this.racers.slice().sort((e,t)=>e.dnf===t.dnf?e.finishTime!==null&&t.finishTime!==null?e.finishTime-t.finishTime:e.finishTime===null?t.finishTime===null?t.progress-e.progress:1:-1:e.dnf?1:-1);e.forEach((e,t)=>e.position=t+1),this.standings=e}function kd(e){let t=Math.hypot(e.vx,e.vz);return t<5?!1:(e.vx*e.tangentX+e.vz*e.tangentZ)/t<-.35}function Ad(e,t=4){let n=[];for(let r=1;r<t;r++)n.push(r/t*e);return n}function jd(e){if(e==null||!isFinite(e))return`--:--.--`;let t=Math.round(e*100),n=Math.floor(t/6e3),r=Math.floor(t%6e3/100),i=t%100;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}.${String(i).padStart(2,`0`)}`}function Md(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new zr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Nd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Nd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Nd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new wr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Pd(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Fd(e,{srgb:t=!0,repeat:n=!0,anisotropy:r=8}={}){let i=new Qi(e);return n&&(i.wrapS=i.wrapT=l),t&&(i.colorSpace=qe),i.anisotropy=r,i}function Id(e=1){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Ld(e,t,n,r,i,a,o=2){for(let s=0;s<r;s++){e.fillStyle=i[Math.floor(a()*i.length)];let r=o*(.5+a());e.fillRect(a()*t,a()*n,r,r)}}function Rd(){let[e,t]=Pd(512,512),n=Id(7);t.fillStyle=`#3a3e46`,t.fillRect(0,0,512,512),Ld(t,512,512,9e3,[`#32363d`,`#454a53`,`#2c3036`,`#4c515a`],n,2),t.globalAlpha=.12,t.fillStyle=`#1c1f24`;for(let e of[.3,.38,.62,.7])t.fillRect(e*512-10,0,20,512);t.globalAlpha=1,t.fillStyle=`#f2f2f2`,t.fillRect(9.216,0,8.192,512),t.fillRect(494.592,0,8.192,512),t.fillStyle=`rgba(240,240,240,0.85)`;for(let e of[1/3,2/3])t.fillRect(e*512-3,0,6,230.4);return Fd(e)}function zd(){let[e,t]=Pd(64,128);return t.fillStyle=`#f4f4f4`,t.fillRect(0,0,64,128),t.fillStyle=`#e02634`,t.fillRect(0,0,64,64),t.fillStyle=`rgba(0,0,0,0.15)`,t.fillRect(0,62,64,4),t.fillRect(0,126,64,2),Fd(e)}function Bd(e=`#e8303a`,t=`#f4f4f4`){let[n,r]=Pd(256,64);return r.fillStyle=e,r.fillRect(0,0,128,64),r.fillStyle=t,r.fillRect(128,0,128,64),r.fillStyle=`rgba(0,0,0,0.22)`,r.fillRect(0,54,256,10),r.fillStyle=`rgba(255,255,255,0.35)`,r.fillRect(0,0,256,4),r.fillStyle=`rgba(0,0,0,0.25)`,r.fillRect(127,0,2,64),r.fillRect(254,0,2,64),Fd(n)}function Vd(e=16,t=2){let[n,r]=Pd(e*32,t*32);for(let n=0;n<t;n++)for(let t=0;t<e;t++)r.fillStyle=(t+n)%2==0?`#f5f5f5`:`#111317`,r.fillRect(t*32,n*32,32,32);let i=Fd(n,{repeat:!1});return i.magFilter=f,i}function Hd(e=`START`,t=``){let n=1024,[r,i]=Pd(n,256),a=i.createLinearGradient(0,0,0,256);a.addColorStop(0,`#0b1e3d`),a.addColorStop(1,`#06101f`),i.fillStyle=a,i.fillRect(0,0,n,256);for(let e of[24,860])for(let t=0;t<6;t++)for(let n=0;n<5;n++)i.fillStyle=(n+t)%2?`#f2f2f2`:`#10141b`,i.fillRect(e+n*28,44+t*28,28,28);i.strokeStyle=`#22d3ee`,i.lineWidth=8,i.shadowColor=`#22d3ee`,i.shadowBlur=24,i.strokeRect(10,10,1004,236);let o=132;do i.font=`italic 400 ${o}px "Russo One", "Segoe UI", sans-serif`,o-=4;while(i.measureText(e).width>644&&o>40);return i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`#7dd3fc`,i.shadowBlur=30,i.fillText(e,n/2,128+(t?-16:6)),t&&(i.shadowBlur=0,i.font=`700 38px "Rajdhani", "Segoe UI", sans-serif`,i.fillStyle=`#facc15`,i.fillText(t,n/2,210)),Fd(r,{repeat:!1})}function Ud(e=!1){let[t,n]=Pd(256,128);n.fillStyle=`#ffc61a`,n.fillRect(0,0,256,128),n.fillStyle=`#16181d`,n.fillRect(0,0,256,8),n.fillRect(0,120,256,8);let r=e?-1:1;for(let e=0;e<3;e++){let t=128+(e-1)*72;n.beginPath(),n.moveTo(t-22*r,22),n.lineTo(t+18*r,64),n.lineTo(t-22*r,106),n.lineTo(t-2*r,106),n.lineTo(t+38*r,64),n.lineTo(t-2*r,22),n.closePath(),n.fill()}return Fd(t,{repeat:!1})}function Wd(){let[e,t]=Pd(256,256);t.fillStyle=`#ffc61a`,t.fillRect(0,0,256,256),t.fillStyle=`#16181d`;for(let e=-256;e<512;e+=64)t.beginPath(),t.moveTo(e,0),t.lineTo(e+32,0),t.lineTo(e+32-256,256),t.lineTo(e-256,256),t.closePath(),t.fill();return t.fillStyle=`rgba(255,255,255,0.9)`,t.beginPath(),t.moveTo(128,40),t.lineTo(188,120),t.lineTo(150,120),t.lineTo(150,216),t.lineTo(106,216),t.lineTo(106,120),t.lineTo(68,120),t.closePath(),t.fill(),Fd(e,{repeat:!1})}function Gd(e=`#e6d29c`){let[t,n]=Pd(256,256),r=Id(11);return n.fillStyle=e,n.fillRect(0,0,256,256),Ld(n,256,256,5e3,[`#d9c288`,`#efdcaa`,`#cdb67c`,`#f5e6bd`],r,1.6),Fd(t)}function Kd(e=`#6fae4f`){let[t,n]=Pd(256,256),r=Id(23);return n.fillStyle=e,n.fillRect(0,0,256,256),Ld(n,256,256,7e3,[`#5f9e42`,`#7dbb5b`,`#55913b`,`#8ac765`],r,2),Fd(t)}function qd(e=`#d1d5db`){let[t,n]=Pd(128,128);n.fillStyle=`#16181c`,n.fillRect(0,0,128,128),n.fillStyle=`#2a2d33`,n.beginPath(),n.arc(64,64,51.2,0,Math.PI*2),n.fill(),n.strokeStyle=e,n.lineCap=`round`,n.lineWidth=11;for(let e=0;e<5;e++){let t=e/5*Math.PI*2;n.beginPath(),n.moveTo(64+Math.cos(t)*8,64+Math.sin(t)*8),n.lineTo(64+Math.cos(t)*128*.37,64+Math.sin(t)*128*.37),n.stroke()}return n.lineWidth=4,n.beginPath(),n.arc(64,64,48.64,0,Math.PI*2),n.stroke(),n.fillStyle=`#e02634`,n.beginPath(),n.arc(64,64,9,0,Math.PI*2),n.fill(),Fd(t,{repeat:!1})}function Jd(e=`#e02634`,t=`#f8f8f8`,n=6){let[r,i]=Pd(16,256);for(let r=0;r<n;r++)i.fillStyle=r%2?t:e,i.fillRect(0,r/n*256,16,256/n);return Fd(r)}function Yd(e=`#22d3ee`){let[t,n]=Pd(128,128),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,e),r.addColorStop(.45,e+`88`),r.addColorStop(1,e+`00`),n.fillStyle=r,n.fillRect(0,0,128,128),Fd(t,{repeat:!1})}function Xd(e=`01`){let[t,n]=Pd(256,148);return n.font=`italic 400 118px "Russo One", "Segoe UI", sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineWidth=12,n.strokeStyle=`#0b0d12`,n.strokeText(e,128,80),n.fillStyle=`#f8fafc`,n.fillText(e,128,80),Fd(t,{repeat:!1})}function Zd(e,t,n=`#22d3ee`){let[r,i]=Pd(512,128),a=64;i.font=`italic 400 ${a}px "Russo One", "Segoe UI", sans-serif`;let o=i.measureText(e).width;o>354&&(a=Math.max(30,Math.floor(a*354/o)),i.font=`italic 400 ${a}px "Russo One", "Segoe UI", sans-serif`,o=i.measureText(e).width);let s=Math.min(504,o+150),c=(512-s)/2;return i.fillStyle=`rgba(6, 16, 31, 0.82)`,i.beginPath(),i.moveTo(c+18,12),i.lineTo(c+s,12),i.lineTo(c+s-18,116),i.lineTo(c,116),i.closePath(),i.fill(),i.fillStyle=n,i.fillRect(c+14,12,92,104),i.fillStyle=`#ffffff`,i.textBaseline=`middle`,i.textAlign=`center`,i.font=`italic 400 54px "Russo One", "Segoe UI", sans-serif`,i.fillText(t,c+60,67),i.textAlign=`left`,i.font=`italic 400 ${a}px "Russo One", "Segoe UI", sans-serif`,i.fillText(e,c+120,68,354),Fd(r,{repeat:!1})}function Qd(){let[e,t]=Pd(128,128);t.fillStyle=`#ffffff`,t.fillRect(0,0,128,128),t.fillStyle=`#5b7083`;for(let e of[22,78])t.fillRect(e,38,28,30);return t.fillStyle=`#7a5537`,t.fillRect(52,80,24,48),Fd(e)}function $d(){let[e,t]=Pd(256,256),n=Id(31);t.fillStyle=`#9aa1ab`,t.fillRect(0,0,256,256),Ld(t,256,256,3e3,[`#8f96a0`,`#a7aeb8`,`#959ca6`],n,1.5),t.strokeStyle=`rgba(40,44,52,0.45)`,t.lineWidth=3;for(let e=0;e<=4;e++)t.beginPath(),t.moveTo(0,e*256/4),t.lineTo(256,e*256/4),t.moveTo(e*256/4,0),t.lineTo(e*256/4,256),t.stroke();return Fd(e)}function ef(){let[e,t]=Pd(512,512),n=Id(37);t.fillStyle=`#3b3f47`,t.fillRect(0,0,512,512),Ld(t,512,512,8e3,[`#353941`,`#42464f`,`#30343b`],n,2),t.fillStyle=`rgba(230,230,230,0.25)`;for(let e=0;e<8;e++)t.fillRect(40+e*56,40,4,90);return t.fillStyle=`rgba(250,204,21,0.35)`,t.fillRect(0,300,512,5),Fd(e)}function tf(e=5){let[t,n]=Pd(256,512),[r,i]=Pd(256,512),a=Id(e);n.fillStyle=`#d6dde6`,n.fillRect(0,0,256,512),i.fillStyle=`#000`,i.fillRect(0,0,256,512);for(let e=0;e<24;e++)for(let t=0;t<8;t++){let r=6+t*32,o=6+512/24*e,s=512/24-9,c=a()<.42;n.fillStyle=c?`#fde68a`:a()<.5?`#334155`:`#475569`,n.fillRect(r,o,20,s),c&&(i.fillStyle=a()<.8?`#ffd27a`:`#9be7ff`,i.fillRect(r,o,20,s))}return{map:Fd(t),emissive:Fd(r)}}function nf(e,t,n=`#22d3ee`,r=`#f472b6`){let[i,a]=Pd(512,256);a.fillStyle=`#0b1020`,a.fillRect(0,0,512,256),a.strokeStyle=n,a.lineWidth=10,a.shadowColor=n,a.shadowBlur=24,a.strokeRect(14,14,484,228),a.textAlign=`center`,a.textBaseline=`middle`;let o=96;do a.font=`italic 400 ${o}px "Russo One", "Segoe UI", sans-serif`,o-=4;while(a.measureText(e).width>442&&o>30);return a.fillStyle=`#ffffff`,a.shadowColor=r,a.shadowBlur=30,a.fillText(e,256,128-(t?22:0)),t&&(a.shadowBlur=0,a.font=`700 34px "Rajdhani", "Segoe UI", sans-serif`,a.fillStyle=r,a.fillText(t,256,198)),Fd(i,{repeat:!1})}function rf(){let[e,t]=Pd(256,64);t.fillStyle=`#6b7280`,t.fillRect(0,0,256,64);let n=t.createLinearGradient(0,8,0,40);n.addColorStop(0,`#e5e7eb`),n.addColorStop(.5,`#9ca3af`),n.addColorStop(1,`#e5e7eb`),t.fillStyle=n,t.fillRect(0,8,256,32),t.fillStyle=`#374151`,t.fillRect(0,44,256,20),t.fillStyle=`#facc15`;for(let e=0;e<256;e+=128)t.fillRect(e+56,18,16,12);return Fd(e)}function af(e=`#22d3ee`){let[t,n]=Pd(256,64),r=Id(41);return n.fillStyle=`#4b5563`,n.fillRect(0,0,256,64),Ld(n,256,64,1500,[`#434b57`,`#566070`],r,1.4),n.fillStyle=e,n.fillRect(0,10,256,7),n.fillStyle=`rgba(0,0,0,0.35)`,n.fillRect(253,0,3,64),Fd(t)}function of(){let[e,t]=Pd(64,256),n=Id(43),r=[`#b45f2c`,`#c97b3f`,`#a14d22`,`#d9955a`,`#8f4320`],i=0;for(;i<256;){let e=8+n()*26;t.fillStyle=r[Math.floor(n()*r.length)],t.fillRect(0,i,64,e),i+=e}return Ld(t,64,256,600,[`rgba(0,0,0,0.12)`,`rgba(255,255,255,0.08)`],n,2),Fd(e)}function sf(e=`#2f80b4`){let[t,n]=Pd(128,256),r=Id(47);n.fillStyle=e,n.fillRect(0,0,128,256),n.strokeStyle=`rgba(255,255,255,0.35)`,n.lineWidth=2;for(let e=0;e<40;e++){let e=r()*128,t=r()*256,i=10+r()*30;n.beginPath(),n.moveTo(e,t),n.lineTo(e,t+i),n.stroke()}return Fd(t)}var cf=new cn,lf=new Rt,uf=new H,df=new H,ff=new vn,pf=new W,mf={};function hf(e,t,n,{shadow:r=!0,receive:i=r,colors:a=null}={}){let o=new zi(e,t,Math.max(1,n.length));return o.count=n.length,n.forEach((e,t)=>{ff.set(e.rx??0,e.ry??0,e.rz??0),lf.setFromEuler(ff),uf.set(e.x,e.y??0,e.z),df.set(e.sx??e.s??1,e.sy??e.s??1,e.sz??e.s??1),cf.compose(uf,lf,df),o.setMatrixAt(t,cf),a&&o.setColorAt(t,pf.set(a[t]))}),o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.castShadow=r,o.receiveShadow=i,o.computeBoundingSphere(),o}function gf(e,t,n){return e.project(t,n,-1,mf),mf.distance-e.wallOffset}var _f=(e,t)=>Math.max(1,Math.round(t*(e.quality?.decor??1)));function vf(e,t,n,r,i=null){let a=e.center,o=e.radius+r;for(let r=0;r<80;r++){let r=t()*Math.PI*2,s=Math.sqrt(t())*o,c=a.x+Math.cos(r)*s,l=a.y+Math.sin(r)*s;if(!(gf(e.path,c,l)<n)&&(!i||i(c,l)))return{x:c,z:l}}return null}function yf(e,t,n,r){let i=e.path,a=i.frameAt(t()*i.length),o=t()<.5?-1:1,s=o*(i.wallOffset+n+t()*(r-n));return{x:a.x+a.sx*s,z:a.z+a.sz*s,heading:a.heading,side:o,s:a.s}}function bf(e,t,n){let r=e.riverInfo;return r?Math.abs(r.dirX*(n-r.z)-r.dirZ*(t-r.x)):1/0}function xf(e,t){let n=e.path,r=[],i=[],a=[];for(let t=0;t<n.length;t+=13){let o=n.indexAt(t),s=n.curvature[o];if(Math.abs(s)<1/95||e.inBridge(o))continue;let c=n.frameAt(t),l=-Math.sign(s)*(n.wallOffset+2.2),u=c.x+c.sx*l,d=c.z+c.sz*l,f=c.y*Math.max(0,1-1.7/(4+c.y*1.8)),p=c.heading+Math.PI;(s>0?r:i).push({x:u,z:d,y:f+1.9,ry:p});for(let e of[-1.1,1.1])a.push({x:u+Math.cos(c.heading)*e,z:d-Math.sin(c.heading)*e,y:f,ry:p})}let o=new Oo(3,1.5),s=new ia(.07,.07,2.7,5);return s.translate(0,1.35,0),t.add(hf(o,new K({map:Ud(!1),roughness:.5,side:2}),r)),t.add(hf(o,new K({map:Ud(!0),roughness:.5,side:2}),i)),t.add(hf(s,new K({color:4937059,metalness:.5,roughness:.4}),a)),r.length+i.length}function Sf(){let e=new ia(.2,.34,8,7,8);e.translate(0,4,0);let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++){let n=t.getY(e)/8;t.setX(e,t.getX(e)+.9*n*n)}e.computeVertexNormals();let n=[];for(let e=0;e<8;e++){let t=new Oo(1,4.2,1,6),r=t.getAttribute(`position`);for(let e=0;e<r.count;e++){let t=r.getX(e),n=r.getY(e)+2.1,i=n/4.2,a=n,o=.5*n-.13*n*n;r.setXYZ(e,a,o,t*(1-.7*i))}t.rotateY(e/8*Math.PI*2+e%2*.2),t.rotateZ(0),t.translate(.9,7.9,0),n.push(t)}let r=Md(n);return r.computeVertexNormals(),n.forEach(e=>e.dispose()),{trunk:e,crown:r}}function Cf(e){let t=e.path,n=new In;n.name=`scenery`;let r=Id(2026),i={palms:_f(e,120),rocks:_f(e,70),houses:_f(e,22),lighthouse:!0},a=e.islandCenter.x,o=e.islandCenter.y,s=e.islandRadius,c=(e,n=s-10)=>{for(let i=0;i<60;i++){let i=r()*Math.PI*2,s=Math.sqrt(r())*n,c=a+Math.cos(i)*s,l=o+Math.sin(i)*s;if(gf(t,c,l)>e)return{x:c,z:l}}return null},l=[],u=Math.floor(i.palms*.6);for(let e=0;e<u;e++){let e=t.frameAt(r()*t.length),n=(r()<.5?-1:1)*(t.wallOffset+3+r()*10),i=e.x+e.sx*n,a=e.z+e.sz*n;gf(t,i,a)<2.5||l.push({x:i,z:a,ry:r()*Math.PI*2,s:.8+r()*.5})}for(;l.length<i.palms;){let e=c(4);if(!e)break;l.push({...e,ry:r()*Math.PI*2,s:.75+r()*.6})}let{trunk:d,crown:f}=Sf();n.add(hf(d,new K({color:9071173,roughness:.95}),l));let p=l.map(()=>[`#2f8f3a`,`#3a9e45`,`#28803a`,`#4caf50`][Math.floor(r()*4)]);n.add(hf(f,new K({color:16777215,roughness:.8,side:2}),l,{colors:p}));let m=[];for(let e=0;e<i.rocks;e++){let n,i;if(e%3==0){let e=r()*Math.PI*2,c=s-4+r()*8;if(n=a+Math.cos(e)*c,i=o+Math.sin(e)*c,gf(t,n,i)<6)continue}else{let e=c(5);if(!e)continue;({x:n,z:i}=e)}let l=.8+r()*2.6;m.push({x:n,z:i,y:-.2,ry:r()*6,rx:r()*.4,sx:l*(.8+r()*.6),sy:l*(.5+r()*.4),sz:l})}let h=new Eo(1,0),g=m.map(()=>[`#8d8577`,`#9c9384`,`#7a7366`,`#a8a090`][Math.floor(r()*4)]);n.add(hf(h,new K({color:16777215,roughness:1,flatShading:!0}),m,{colors:g}));let _=[];for(let e=0;e<2&&_.length<i.houses;e++){let e=c(45,s-40);if(e)for(let n=0;n<i.houses/2;n++){let n=r()*Math.PI*2,i=6+r()*32,a=e.x+Math.cos(n)*i,o=e.z+Math.sin(n)*i;gf(t,a,o)<16||_.some(e=>Math.hypot(e.x-a,e.z-o)<11)||_.push({x:a,z:o,ry:Math.round(r()*4)*(Math.PI/2)+(r()-.5)*.3,sx:6+r()*3,sy:4+r()*3,sz:6+r()*3})}}let v=new na(1,1,1);v.translate(0,.5,0);let y=new aa(.8,.5,4);y.rotateY(Math.PI/4),y.translate(0,1.25,0);let b=_.map(()=>[`#f5f0e6`,`#f3e3c3`,`#d6e8f2`,`#f6d2bd`][Math.floor(r()*4)]),x=_.map(()=>[`#c4622d`,`#b5532a`,`#2f6fa8`,`#d9733b`][Math.floor(r()*4)]);n.add(hf(v,new K({map:Qd(),roughness:.85}),_,{colors:b})),n.add(hf(y,new K({color:16777215,roughness:.7,flatShading:!0}),_,{colors:x}));let S=[];for(let e=0;e<26;e++){let e=r()*Math.PI*2,n=s-18+r()*12,i=a+Math.cos(e)*n,c=o+Math.sin(e)*n;gf(t,i,c)<6||S.push({x:i,z:c,rz:(r()-.5)*.2,s:.9+r()*.3})}let C=new ia(.05,.05,2.4,5);C.translate(0,1.2,0);let w=new aa(1.4,.6,10);w.translate(0,2.5,0),n.add(hf(C,new K({color:15067115}),S,{shadow:!1})),n.add(hf(w,new K({color:16777215,roughness:.7}),S,{colors:S.map(()=>[`#ef4444`,`#facc15`,`#22d3ee`,`#f97316`,`#3b82f6`][Math.floor(r()*5)])}));let T=xf(e,n);if(i.lighthouse){let e=null;for(let n=0;n<Math.PI*2;n+=.15){let r=a+Math.cos(n)*(s-22),i=o+Math.sin(n)*(s-22),c=gf(t,r,i);(!e||c>e.c)&&(e={x:r,z:i,c})}let r=new In,i=Jd(`#e02634`,`#f8f8f8`,6),c=new G(new ia(1.5,2.4,20,18),new K({map:i,roughness:.6}));c.position.y=10;let l=new G(new ia(2.3,2.3,.5,18),new K({color:2042167}));l.position.y=20.2;let u=new G(new ia(1.1,1.1,2,12),new K({color:16774064,emissive:16765773,emissiveIntensity:1.6}));u.position.y=21.4;let d=new G(new aa(1.6,1.8,18),new K({color:13114923,roughness:.5}));d.position.y=23.3;let f=new G(new Eo(6,1),new K({color:9274743,flatShading:!0}));f.scale.set(1,.35,1);for(let e of[c,l,u,d,f])e.castShadow=!0,r.add(e);r.position.set(e.x,0,e.z),n.add(r)}let E=[];for(let e=0;e<9;e++){let t=e/9*Math.PI*2+r()*.4,n=s+320+r()*300,i=150+r()*170;E.push({x:a+Math.cos(t)*n,z:o+Math.sin(t)*n,y:-1,ry:r()*6,sx:i,sy:22+r()*38,sz:i*(.6+r()*.5)})}let D=new Ao(1,9,5,0,Math.PI*2,0,Math.PI/2);n.add(hf(D,new K({color:5209418,roughness:1,flatShading:!0}),E,{shadow:!1})),e.group.add(n),e.sceneryCounts={palms:l.length,rocks:m.length,houses:_.length,signs:T,umbrellas:S.length}}function wf(e){let t=e.path,n=new In;n.name=`scenery-kota`;let r=Id(1945),i=t.bounds,a=e.theme.neon,o=[{min:16,max:34,rep:1,items:[]},{min:34,max:70,rep:2,items:[]},{min:70,max:130,rep:3.6,items:[]}],s=e.quality?.decor??1;for(let n=i.minX-260;n<=i.maxX+260;n+=34)for(let a=i.minZ-260;a<=i.maxZ+260;a+=34){if(r()>.72*s+.15)continue;let c=14+r()*12,l=14+r()*12,u=n+(r()-.5)*8,d=a+(r()-.5)*8;if(gf(t,u,d)<Math.hypot(c,l)/2+9)continue;let f=1-Math.min(1,Math.hypot(u-i.cx,d-i.cz)/(e.radius+260)),p=r()*(.5+f),m=p>.95?o[2]:p>.55?o[1]:o[0],h=m.min+r()*(m.max-m.min);m.items.push({x:u,z:d,sx:c,sy:h,sz:l,ry:Math.round(r())*(Math.PI/2)})}let c=[`#e2e8f0`,`#cbd5e1`,`#bfdbfe`,`#fde68a`,`#c7d2fe`,`#d1d5db`];o.forEach((e,t)=>{if(!e.items.length)return;let i=tf(7+t);i.map.repeat.set(1,e.rep),i.emissive.repeat.set(1,e.rep);let a=new na(1,1,1);a.translate(0,.5,0);let o=new K({map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:1.1,roughness:.6,metalness:.2});n.add(hf(a,o,e.items,{colors:e.items.map(()=>c[Math.floor(r()*c.length)])}))});let l=o[2].items.concat(o[1].items.filter(()=>r()<.3)),u=new na(1,1,1);u.translate(0,.5,0),n.add(hf(u,new K({color:4674921,roughness:.8}),l.map(e=>({x:e.x,z:e.z,y:e.sy,sx:e.sx*.4,sy:3,sz:e.sz*.4})),{shadow:!1})),n.add(hf(new Ao(.6,8,6),new gi({color:16724804,toneMapped:!1}),l.map(e=>({x:e.x,z:e.z,y:e.sy+3.6})),{shadow:!1}));let d=[],f=[],p=[];for(let e=6;e<t.length;e+=32){let n=t.frameAt(e);for(let e of[-1,1]){let r=e*(t.wallOffset+1.4),i=n.x+n.sx*r,a=n.z+n.sz*r;d.push({x:i,z:a,y:0}),f.push({x:i-n.sx*e*2.2,z:a-n.sz*e*2.2,y:8.6,ry:n.heading}),p.push({x:i-n.sx*e*1.1,z:a-n.sz*e*1.1,y:8.75,ry:n.heading})}}let m=new ia(.12,.16,8.8,6);m.translate(0,4.4,0),n.add(hf(m,new K({color:3359061,metalness:.6,roughness:.4}),d)),n.add(hf(new na(2.4,.14,.14),new K({color:3359061,metalness:.6,roughness:.4}),p,{shadow:!1})),n.add(hf(new na(1.6,.18,.7),new K({color:1120295,emissive:16773569,emissiveIntensity:1.6}),f,{shadow:!1}));let h=[[`SKANTRI RACE`,`CHAMPIONS RACING`],[`MANTAP`,`Mandiri Aktif Terampil Berprestasi`],[`SMK BISA!`,`SMKS PGRI SINGOSARI`],[`NEON CITY`,`GRAND PRIX`],[`TURBO 4D`,`AMBIL CINCIN TURBO`],[`JADI JUARA`,`BALAP · TANTANG`]],g=[];for(let e=0;e<h.length;e++){let r=(e+.35)/h.length*t.length,i=t.frameAt(r),o=e%2?1:-1,s=o*(t.wallOffset+6),c=i.x+i.sx*s,l=i.z+i.sz*s;if(gf(t,c,l)<4)continue;let u=new gi({map:nf(h[e][0],h[e][1],a[e%a.length],a[(e+1)%a.length]),toneMapped:!1,side:2}),d=new G(new Oo(12,6),u);d.position.set(c,9.5,l),d.rotation.y=i.heading+Math.PI+o*.35,n.add(d),g.push(d);let f=new G(new na(.5,7,.5),new K({color:2042167}));f.position.set(c,3.5,l),f.castShadow=!0,n.add(f)}e.animated.push({update:(e,t)=>g.forEach((e,n)=>e.material.color.setScalar(.85+.15*Math.sin(t*3+n*1.7)))});let _=[];for(let n=0;n<_f(e,110);n++){let n=yf(e,r,3.5,6.5);gf(t,n.x,n.z)<2.5||_.push({x:n.x,z:n.z,s:.8+r()*.5})}let v=new ia(.15,.22,2.6,6);v.translate(0,1.3,0);let y=new Eo(1.6,0);y.translate(0,3.6,0),n.add(hf(v,new K({color:7032629}),_)),n.add(hf(y,new K({color:16777215,flatShading:!0,roughness:.9}),_,{colors:_.map(()=>[`#3f7d3a`,`#4d8f45`,`#2f6b34`][Math.floor(r()*3)])})),xf(e,n);let b=[];for(let t=0;t<_f(e,90);t++){let t=r()*Math.PI*2,n=e.radius+420+r()*380;b.push({x:i.cx+Math.cos(t)*n,z:i.cz+Math.sin(t)*n,sx:30+r()*40,sy:60+r()*180,sz:30+r()*40})}let x=new na(1,1,1);x.translate(0,.5,0);let S=tf(99);S.map.repeat.set(1,4),S.emissive.repeat.set(1,4),n.add(hf(x,new K({map:S.map,emissiveMap:S.emissive,emissive:16777215,emissiveIntensity:.9,color:8161957}),b,{shadow:!1})),e.group.add(n),e.sceneryCounts={buildings:o.reduce((e,t)=>e+t.items.length,0),lamps:d.length,billboards:g.length,trees:_.length}}function Tf(){let e=[],t=new ia(.18,.28,2.2,6);t.translate(0,1.1,0),e.push(t.toNonIndexed());for(let t=0;t<3;t++){let n=new aa(2.2-t*.55,3.2-t*.4,8);n.translate(0,3+t*1.7,0),e.push(n.toNonIndexed())}let n=e.map((e,t)=>{let n=e.getAttribute(`position`).count,r=new Float32Array(n*3),i=new W(t===0?5980976:t===3?3107642:2382385);for(let e=0;e<n;e++)r.set([i.r,i.g,i.b],e*3);return e.setAttribute(`color`,new wr(r,3)),e.deleteAttribute(`uv`),e}),r=Md(n,!1);return n.forEach(e=>e.dispose()),t.dispose(),r}function Ef(e){let t=e.path,n=new In;n.name=`scenery-gunung`;let r=Id(3676),i=t.bounds,a=(t,n)=>bf(e,t,n)>20,o=[];for(let n=0;n<_f(e,120);n++){let n=yf(e,r,4,22);if(gf(t,n.x,n.z)<3.5||!a(n.x,n.z))continue;let i=t.project(n.x,n.z,-1);o.push({x:n.x,z:n.z,y:(i.y,0),ry:r()*6,s:.8+r()*.9})}for(let t=0;t<_f(e,240);t++){let t=vf(e,r,8,260,a);t&&o.push({x:t.x,z:t.z,ry:r()*6,s:.9+r()*1.1})}n.add(hf(Tf(),new K({vertexColors:!0,roughness:.9,flatShading:!0}),o));let s=[];for(let e=20;e<t.length;e+=70){let n=t.frameAt(e),i=t.curvature[t.indexAt(e)],o=(i===0?r()<.5?-1:1:-Math.sign(i))*(t.wallOffset+22+r()*18),c=n.x+n.sx*o,l=n.z+n.sz*o,u=14+r()*18;gf(t,c,l)<u*.75+4||!a(c,l)||s.push({x:c,z:l,y:-2,sx:u,sy:16+r()*26,sz:u*(.7+r()*.5),ry:r()*6,rx:(r()-.5)*.2})}let c=new sa(1,0);c.translate(0,.6,0),n.add(hf(c,new K({color:16777215,flatShading:!0,roughness:1}),s,{colors:s.map(()=>[`#7c7468`,`#8a8174`,`#6f685e`,`#958b7c`][Math.floor(r()*4)])}));let l=[];for(let t=0;t<_f(e,90);t++){let t=vf(e,r,4,200,a);if(!t)continue;let n=.8+r()*2.4;l.push({x:t.x,z:t.z,y:-.2,sx:n*1.2,sy:n*.7,sz:n,ry:r()*6})}n.add(hf(new Eo(1,0),new K({color:16777215,flatShading:!0}),l,{colors:l.map(()=>[`#8d8577`,`#7a7366`,`#9c9384`][Math.floor(r()*3)])})),xf(e,n);let u=[],d=[];for(let t=0;t<16;t++){let n=t/16*Math.PI*2+r()*.3,a=e.radius+380+r()*300,o=140+r()*170,s=150+r()*170,c=i.cx+Math.cos(n)*a,l=i.cz+Math.sin(n)*a;u.push({x:c,z:l,sx:o,sy:s,sz:o*(.8+r()*.4),ry:r()*6}),d.push({x:c,z:l,y:s*.66,sx:o*.345,sy:s*.345,sz:o*.345*(.8+r()*.3),ry:r()*6})}let f=new aa(1,1,9,3);f.translate(0,.5,0),n.add(hf(f,new K({color:6122328,flatShading:!0,roughness:1}),u,{shadow:!1}));let p=new aa(1,1,9,1);p.translate(0,.5,0),n.add(hf(p,new K({color:15857145,flatShading:!0,roughness:.8}),d,{shadow:!1})),e.group.add(n),e.sceneryCounts={pines:o.length,cliffs:s.length,rocks:l.length,mountains:u.length}}function Df(){let e=[],t=new ia(.35,.4,4,8);t.translate(0,2,0),e.push(t);for(let[t,n]of[[-1,1.6],[1,2.3]]){let r=new ia(.22,.24,1,6);r.rotateZ(Math.PI/2),r.translate(t*.75,n,0),e.push(r);let i=new ia(.22,.24,1.3,6);i.translate(t*1.2,n+.6,0),e.push(i)}let n=Md(e.map(e=>e.toNonIndexed()),!1);return e.forEach(e=>e.dispose()),n}function Of(){return new Bo({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime; varying vec2 vUv;
      void main() {
        float t = fract(vUv.x * 3.0 - uTime * 0.35);
        vec3 a = vec3(0.13, 0.83, 0.93), b = vec3(0.91, 0.47, 0.98);
        vec3 col = mix(a, b, smoothstep(0.0, 1.0, abs(t * 2.0 - 1.0)));
        float rim = 0.65 + 0.35 * sin(vUv.y * 6.2831);
        gl_FragColor = vec4(col * (1.4 + rim), 1.0);
      }`,toneMapped:!1})}function kf(e){let t=e.path,n=new In;n.name=`scenery-gurun`;let r=Id(404),i=t.bounds,a=[];for(let t=0;t<_f(e,26);t++){let t=14+r()*30,n=vf(e,r,t+12,340);n&&a.push({x:n.x,z:n.z,sx:t,sy:14+r()*34,sz:t*(.7+r()*.5),ry:r()*6})}for(let t=0;t<14;t++){let t=r()*Math.PI*2,n=e.radius+420+r()*300,o=50+r()*90;a.push({x:i.cx+Math.cos(t)*n,z:i.cz+Math.sin(t)*n,sx:o,sy:40+r()*70,sz:o*.7,ry:r()*6})}let o=of();o.repeat.set(4,1);let s=new ia(.82,1,1,9,1);s.translate(0,.5,0),n.add(hf(s,new K({map:o,flatShading:!0,roughness:1}),a));let c=[];for(let e=0;e<3;e++){let n=(e+.2)/3*t.length,i=t.frameAt(n),a=(e%2?1:-1)*(t.wallOffset+26),o=i.x+i.sx*a,s=i.z+i.sz*a;gf(t,o,s)<18||c.push({x:o,z:s,ry:i.heading+r(),s:1+r()*.4})}let l=new jo(10,2.6,6,14,Math.PI);n.add(hf(l,new K({color:12085050,flatShading:!0,roughness:1}),c));let u=[];for(let t=0;t<_f(e,50);t++){let t=vf(e,r,20,420);if(!t)continue;let n=18+r()*40;u.push({x:t.x,z:t.z,y:-1,sx:n,sy:3+r()*7,sz:n*(.5+r()*.6),ry:r()*6})}n.add(hf(new Ao(1,14,6,0,Math.PI*2,0,Math.PI/2),new K({color:14264427,roughness:1}),u,{shadow:!1,receive:!0}));let d=[];for(let t=0;t<_f(e,70);t++){let t=vf(e,r,4,180);t&&d.push({x:t.x,z:t.z,ry:r()*6,s:.7+r()*.8})}n.add(hf(Df(),new K({color:5209402,roughness:.8}),d));let f=[];for(let t=0;t<_f(e,80);t++){let t=vf(e,r,3.5,200);if(!t)continue;let n=.6+r()*2.2;f.push({x:t.x,z:t.z,y:-.15,sx:n*1.3,sy:n*.7,sz:n,ry:r()*6})}n.add(hf(new sa(1,0),new K({color:16777215,flatShading:!0}),f,{colors:f.map(()=>[`#a65a2e`,`#c27a45`,`#8c4a26`][Math.floor(r()*3)])})),xf(e,n);let p=[],m=Of(),h=new gi({color:15772668,transparent:!0,opacity:.55,blending:2,depthWrite:!1,toneMapped:!1});for(let r of e.def.portals??[]){let e=t.frameAt(r*t.length),i=t.wallOffset+1.6,a=new In;a.position.set(e.x,e.y+i*.32,e.z),a.rotation.y=e.heading;let o=new G(new jo(i,.55,10,64),m);a.add(o);let s=new G(new jo(i-1.3,.12,6,64),h);a.add(s);for(let e of[-1,1]){let t=new G(new na(.9,2.4,.9),new K({color:1120295,metalness:.7,roughness:.3}));t.position.set(i*.95*e,-i*.32+1.2,0),a.add(t)}n.add(a),p.push({portal:a,inner:s,s:e.s})}e.portals=p,e.animated.push({update:(e,t)=>{m.uniforms.uTime.value=t;for(let t of p)t.inner.rotation.z+=e*.9}}),e.group.add(n),e.sceneryCounts={mesas:a.length,arches:c.length,dunes:u.length,cacti:d.length,portals:p.length}}function Af(e){switch(e.kind){case`kota`:return wf(e);case`gunung`:return Ef(e);case`gurun`:return kf(e);default:return Cf(e)}}var jf=e=>`#`+new W(e).getHexString(),Mf=new WeakSet,Nf=class{constructor(e,t={decor:1}){_d(this,Mf),this.def=e,this.theme=e.theme,this.kind=e.theme.kind,this.quality=t,this.path=new yd(e),this.group=new In,this.group.name=`track:${e.id}`,this.animated=[],this.bridge=Y(Mf,this,Pf).call(this),Y(Mf,this,Ff).call(this),Y(Mf,this,If).call(this),Y(Mf,this,Lf).call(this),this.bridge&&Y(Mf,this,Rf).call(this),Y(Mf,this,zf).call(this),Y(Mf,this,Bf).call(this),Y(Mf,this,Vf).call(this),Af(this)}inBridge(e){let t=this.bridge;return!!t&&e>=t.i0&&e<=t.i1}ribbon(e,t,n,r,i,a=null){let o=this.path,s=o.count,c=a?a[0]:0,l=a?a[1]-a[0]+1:s+1,u=new Float32Array(l*2*3),d=new Float32Array(l*2*2),f=(e,t,n,r)=>typeof e==`function`?e(n,r):(r.off=e,r.y=o.y[n]+t,r),p={},m={},h=o.s[c%s];for(let a=0;a<l;a++){let l=c+a,g=l%s;a>0&&(h+=o.segLen[(l-1)%s]),f(e,n,g,p),f(t,r,g,m);let _=a*6;u[_]=o.x[g]+o.sx[g]*p.off,u[_+1]=p.y,u[_+2]=o.z[g]+o.sz[g]*p.off,u[_+3]=o.x[g]+o.sx[g]*m.off,u[_+4]=m.y,u[_+5]=o.z[g]+o.sz[g]*m.off;let v=a*4;d[v]=0,d[v+1]=h/i,d[v+2]=1,d[v+3]=h/i}let g=[];for(let e=0;e<l-1;e++){let t=e*2;g.push(t,t+1,t+2,t+1,t+3,t+2)}let _=new zr;return _.setAttribute(`position`,new wr(u,3)),_.setAttribute(`uv`,new wr(d,2)),_.setIndex(g),_.computeVertexNormals(),_}update(e,t){for(let n of this.animated)n.update(e,t)}dispose(){let e=new Set;this.group.traverse(t=>{t.geometry&&!t.isSprite&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(t=>e.add(t))});for(let t of e){for(let e of Object.keys(t)){let n=t[e];n&&n.isTexture&&n.dispose()}if(t.uniforms)for(let e of Object.values(t.uniforms))e.value&&e.value.isTexture&&e.value.dispose();t.dispose()}this.group.removeFromParent(),this.animated.length=0}};function Pf(){let e=this.def.bridge;if(!e)return null;let t=this.path;return{i0:t.indexAt(e.from*t.length),i1:t.indexAt(e.to*t.length),from:e.from,to:e.to}}function Ff(){let e=this.path,t=e.halfWidth,n=new G(this.ribbon(-t,t,0,0,14),new K({map:Rd(),roughness:.92,metalness:0}));n.receiveShadow=!0,n.name=`road`,this.group.add(n);let r=new K({map:zd(),roughness:.7});for(let n of[-1,1]){let i=n*t,a=n*(t+e.curbWidth),o=new G(n<0?this.ribbon(a,i,.04,.04,4):this.ribbon(i,a,.04,.04,4),r);o.receiveShadow=!0,this.group.add(o)}let i=new K({color:this.theme.shoulder,roughness:1});for(let n of[-1,1]){let r=n*(t+e.curbWidth),a=n*(e.wallOffset+.02),o=new G(n<0?this.ribbon(a,r,.02,.02,10):this.ribbon(r,a,.02,.02,10),i);o.receiveShadow=!0,this.group.add(o)}}function If(){let e=this.path.wallOffset,t=this.kind===`gunung`?.95:1.15,n;n=this.kind===`kota`?af(`#22d3ee`):this.kind===`gunung`?rf():Bd(this.theme.barrierA,this.theme.barrierB);let r=new K({map:n,roughness:.55,metalness:this.kind===`gunung`?.5:0,side:2}),i=new K({color:this.kind===`kota`?7041664:14672872,roughness:.6,side:2});for(let n of[-1,1]){let a=n*e,o=n*(e+.5),s=new G(this.ribbon(a,a,0,t,4),r),c=s.geometry.getAttribute(`uv`);for(let e=0;e<c.count;e++){let t=c.getX(e),n=c.getY(e);c.setXY(e,n,t)}s.castShadow=!0,s.receiveShadow=!0,this.group.add(s),this.group.add(new G(this.ribbon(o,o,0,t,4),i)),this.group.add(new G(this.ribbon(a,o,t,t,4),i))}if(this.kind===`kota`){let n=this.theme.neon;[-1,1].forEach((r,i)=>{let a=new gi({color:n[i],toneMapped:!1}),o=r*(e+.05),s=r*(e+.2),c=r<0?this.ribbon(s,o,t+.02,t+.02,4):this.ribbon(o,s,t+.02,t+.02,4);this.group.add(new G(c,a))})}}function Lf(){let e=this.path,t={tropis:9,kota:7,gunung:4,gurun:5}[this.kind]??5,n=e.wallOffset+.5,r;r=this.kind===`kota`?$d():this.kind===`gurun`?Gd(jf(this.theme.shoulder)):Kd(jf(this.theme.shoulder));let i=new K({map:r,roughness:1,side:2}),a=n=>t+Math.max(0,e.y[n])*1.8,o=[];this.bridge?o.push([this.bridge.i1,this.bridge.i0+e.count]):o.push(null);for(let r of o)for(let o of[-1,1]){let s=(t,r)=>(r.off=o*n,r.y=e.y[t]-.02,r),c=(e,t)=>(t.off=o*(n+a(e)),t.y=-.03,t),l=o<0?this.ribbon(c,s,0,0,10,r):this.ribbon(s,c,0,0,10,r),u=l.getAttribute(`uv`);for(let e=0;e<u.count;e++)u.setX(e,u.getX(e)*(t/10));let d=new G(l,i);d.receiveShadow=!0,this.group.add(d)}}function Rf(){let e=this.path,{i0:t,i1:n}=this.bridge,r=[t,n],i=e.wallOffset+.5,a=new K({color:9146521,roughness:.8,side:2});for(let e of[-1,1]){let t=e*i;this.group.add(new G(this.ribbon(t,t,-1.1,0,6,r),a))}this.group.add(new G(this.ribbon(i,-i,-1.1,-1.1,6,r),a));let o=new na(1.4,1,1.4);o.translate(0,.5,0);let s=new zi(o,new K({color:10265519,roughness:.85}),64),c=new K({color:12131356,roughness:.5,metalness:.4}),l=new na(.25,3.2,.25);l.translate(0,1.6,0);let u=new zi(l,c,128),d=new cn,f=new Rt,p=new H(0,1,0),m=0,h=0;for(let r=t+2;r<=n-1;r+=4){let t=e.y[r]-1.1;for(let n of[-i+1,i-1]){if(m>=64)break;d.compose(new H(e.x[r]+e.sx[r]*n,0,e.z[r]+e.sz[r]*n),f.setFromAxisAngle(p,Math.atan2(e.tx[r],e.tz[r])),new H(1,Math.max(.1,t),1)),s.setMatrixAt(m++,d)}}for(let r=t;r<=n;r+=2)for(let t of[-(i-.25),i-.25]){if(h>=128)break;d.compose(new H(e.x[r]+e.sx[r]*t,e.y[r]+.95,e.z[r]+e.sz[r]*t),f.setFromAxisAngle(p,Math.atan2(e.tx[r],e.tz[r])),new H(1,1,1)),u.setMatrixAt(h++,d)}s.count=m,u.count=h,s.castShadow=u.castShadow=!0,this.group.add(s,u);for(let e of[-1,1]){let t=e*(i-.25),n=this.ribbon(t-.12,t+.12,4.1,4.1,6,r);this.group.add(new G(n,c)),this.group.add(new G(this.ribbon(t,t,3.9,4.1,6,r),c))}let g=e.frameAt((this.bridge.from+this.bridge.to)/2*e.length),_=sf(jf(this.theme.river??3113140));_.repeat.set(2,40);let v=new G(new Oo(26,1400),new K({map:_,roughness:.15,metalness:.1}));v.rotation.order=`YXZ`,v.rotation.set(-Math.PI/2,Math.atan2(g.tx,g.tz)+Math.PI/2,0),v.position.set(g.x,.03,g.z),v.receiveShadow=!0,this.group.add(v);let y=new K({map:Gd(`#bfa77a`),roughness:1});for(let e of[-1,1]){let t=new G(new Oo(5,1400),y);t.rotation.copy(v.rotation),t.position.set(g.x+g.tx*e*15.5,.02,g.z+g.tz*e*15.5),this.group.add(t)}this.riverInfo={x:g.x,z:g.z,dirX:g.sx,dirZ:g.sz,halfWidth:18},this.animated.push({update:e=>_.offset.y-=e*.25})}function zf(){let e=this.path,t=e.frameAt(0),n=e.halfWidth,r=new K({map:Vd(16,2),roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new G(new Oo(n*2,2.4),r);i.rotation.order=`YXZ`,i.rotation.set(-Math.PI/2,t.heading,0),i.position.set(t.x,t.y+.01,t.z),i.receiveShadow=!0,this.group.add(i);let a=new In;a.position.set(t.x,t.y,t.z),a.rotation.y=t.heading;let o=e.wallOffset+1.6,s=new K({color:2042167,roughness:.4,metalness:.6}),c=new K({color:947344,emissive:2282478,emissiveIntensity:2.2});for(let e of[-1,1]){let t=new G(new na(1.4,9,1.4),s);t.position.set(e*o,4.5,0),t.castShadow=!0,a.add(t);let n=new G(new na(.18,8.6,.18),c);n.position.set(e*(o-.72),4.5,-.72),a.add(n)}let l=new G(new na(o*2+1.4,2.6,1),s);l.position.set(0,8.4,0),l.castShadow=!0,a.add(l);let u=new G(new Oo(o*1.5,o*1.5*.25),new gi({map:Hd(`START`),toneMapped:!1}));u.position.set(0,8.4,-.52),u.rotation.y=Math.PI,a.add(u);let d=new G(new Oo(o*1.5,o*1.5*.25),new gi({map:Hd(`SKANTRI RACE`,`CHAMPIONS RACING`),toneMapped:!1}));d.position.set(0,8.4,.52),a.add(d),this.group.add(a);let f=new gi({color:16777215,transparent:!0,opacity:.75});for(let t=0;t<6;t++){let n=xd(t),r=e.frameAt(n.mark),i=new G(new Oo(3.2,.3),f);i.rotation.order=`YXZ`,i.rotation.set(-Math.PI/2,r.heading,0),i.position.set(r.x+r.sx*n.lateral,r.y+.02,r.z+r.sz*n.lateral),this.group.add(i)}}function Bf(){let e=this.path;if(!e.ramps.length)return;let t=new K({map:Wd(),roughness:.6,side:2}),n=new K({color:2830134,roughness:.8,side:2});for(let r of e.ramps){let i=e.frameAt(r.s0),a=r.halfWidth,o=r.length,s=r.height,c=new zr;c.setAttribute(`position`,new Dr([-a,0,0,-a,s,o,a,0,0,a,0,0,-a,s,o,a,s,o],3)),c.setAttribute(`uv`,new Dr([1,0,1,1,0,0,0,0,1,1,0,1],2)),c.computeVertexNormals();let l=new zr;l.setAttribute(`position`,new Dr([-a,0,o,-a,s,o,a,0,o,a,0,o,-a,s,o,a,s,o,-a,0,0,-a,s,o,-a,0,o,a,0,0,a,0,o,a,s,o],3)),l.computeVertexNormals();let u=new In;for(let e of[new G(c,t),new G(l,n)])e.castShadow=!0,e.receiveShadow=!0,u.add(e);u.position.set(i.x+i.sx*r.lateral,i.y+.01,i.z+i.sz*r.lateral),u.rotation.y=i.heading,u.name=`ramp`,this.group.add(u)}}function Vf(){let e=this.path,t=e.bounds,n=0;for(let r=0;r<e.count;r++)n=Math.max(n,Math.hypot(e.x[r]-t.cx,e.z[r]-t.cz));if(this.center=new V(t.cx,t.cz),this.radius=n,this.kind===`tropis`){this.islandCenter=this.center,this.islandRadius=n+90;let e=Gd(jf(this.theme.ground));e.repeat.set(this.islandRadius/8,this.islandRadius/8);let r=new G(new ra(this.islandRadius,96),new K({map:e,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(t.cx,-.06,t.cz),r.receiveShadow=!0,this.group.add(r);let i=new G(new ko(this.islandRadius-1,this.islandRadius+7,96),new gi({color:15858687,transparent:!0,opacity:.55,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set(t.cx,-.35,t.cz),this.group.add(i),this.animated.push({update:(e,t)=>{i.material.opacity=.4+Math.sin(t*1.3)*.15,i.scale.setScalar(1+Math.sin(t*.9)*.004)}});let a=new G(new Oo(6e3,6e3),new K({color:this.theme.sea,roughness:.12,metalness:.05}));a.rotation.x=-Math.PI/2,a.position.set(t.cx,-.6,t.cz),this.group.add(a);return}let r,i=60;this.kind===`kota`?(r=ef(),i=50):r=this.kind===`gurun`?Gd(jf(this.theme.ground)):Kd(jf(this.theme.ground)),this.kind!==`kota`&&(i=375),r.repeat.set(i,i);let a=new G(new Oo(3e3,3e3),new K({map:r,roughness:1}));a.rotation.x=-Math.PI/2,a.position.set(t.cx,-.06,t.cz),a.receiveShadow=!0,this.group.add(a)}var Hf={speed:{name:`SPEED ORB`,label:`Tambahan kecepatan`,color:`#facc15`,duration:2.5,cooldown:5,respawn:8,kick:10,topBonus:9},shield:{name:`SHIELD`,label:`Perlindungan sementara`,color:`#38bdf8`,duration:6,cooldown:10,respawn:10,massMult:4},turbo:{name:`TURBO RING`,label:`Akselerasi berlipat`,color:`#fb923c`,duration:3,cooldown:3,respawn:4,accelMult:1.9,topBonus:5}},Uf={gravity:26,fixedStep:1/120};function Wf(){return{x:0,y:0,z:0,heading:0,vx:0,vz:0,vy:0,steer:0,forwardSpeed:0,lateralSpeed:0,onGround:!0,airTime:0,drifting:!1,scraping:!1,trackIndex:-1,s:0,lateral:0,extent:1,carImpact:0,tangentX:0,tangentZ:1,impact:0,landing:0,odometer:0,nitro:1,boosting:!1,nitroLock:!1,slope:0,fx:{speed:0,shield:0,turbo:0},cool:{speed:0,shield:0,turbo:0}}}function Gf(e){e.nitro=1,e.boosting=!1,e.nitroLock=!1;for(let t of Object.keys(e.fx))e.fx[t]=0,e.cool[t]=0}function Kf(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var qf=(e,t,n)=>e<t?t:e>n?n:e;function Jf(e,t,n,r=0){let i=t.frameAt(n);e.x=i.x+i.sx*r,e.z=i.z+i.sz*r,e.y=i.y,e.heading=i.heading,e.vx=e.vz=e.vy=0,e.steer=0,e.forwardSpeed=0,e.lateralSpeed=0,e.onGround=!0,e.airTime=0,e.drifting=!1,e.trackIndex=i.index,e.s=i.s,e.lateral=r,e.tangentX=i.tx,e.tangentZ=i.tz}var Yf={},Xf={};function Zf(e,t,n,r,i){let a=e.onGround,o=e.fx,s=e.cool;for(let e in o)o[e]>0&&(o[e]=Math.max(0,o[e]-i)),s[e]>0&&(s[e]=Math.max(0,s[e]-i));let c=n.nitro,l=e.vx*Math.sin(e.heading)+e.vz*Math.cos(e.heading);if(e.boosting=!1,c){if(e.nitro<=.005?e.nitroLock=!0:e.nitro>=.15&&(e.nitroLock=!1),t.nitro&&!e.nitroLock&&l>2&&!(t.brake>0))e.boosting=!0,e.nitro=Math.max(0,e.nitro-c.drain*i);else{let t=c.regen+(e.drifting?c.driftRegen:0);e.nitro=Math.min(1,e.nitro+t*i)}}let u=n.maxSpeed,d=n.accel;o.speed>0&&(u+=Hf.speed.topBonus),o.turbo>0&&(u+=Hf.turbo.topBonus,d*=Hf.turbo.accelMult);let f=qf(t.steer,-1,1),p=Math.abs(f)<Math.abs(e.steer)||Math.sign(f)!==Math.sign(e.steer)?9:5;e.steer+=qf(f-e.steer,-p*i,p*i);let m=e.heading,h=Math.sin(m),g=Math.cos(m),_=Math.cos(m),v=-Math.sin(m),y=e.vx*h+e.vz*g,b=e.vx*_+e.vz*v;if(a){let r=qf(t.brake,0,1),a=e.boosting?1:qf(t.throttle,0,1);if(a>0){if(y>=-.5){let t=Math.max(0,y/u),n=Math.max(1-t*t,e.boosting?0:-.25);if(y+=d*a*n*i,e.boosting){let e=u+c.boostSpeed;y+=c.boostAccel*qf((e-y)/4,0,1)*i}}else y+=n.brake*a*i}if(r>0&&(y>.5?(y-=n.brake*r*i,y<0&&(y=0)):(y-=n.accel*.45*r*i,y<-n.reverseMax&&(y=-n.reverseMax))),a===0&&r===0){let e=n.coastDecel*i;y=Math.abs(y)<=e?0:y-Math.sign(y)*e}y-=y*Math.abs(y)*5e-4*i,y-=Uf.gravity*.3*e.slope*i;let o=n.grip;if(t.handbrake){o=n.driftGrip;let e=7*i;y=Math.abs(y)<=e?0:y-Math.sign(y)*e}b*=Math.exp(-o*i)}else b*=Math.exp(-.4*i);e.vx=h*y+_*b,e.vz=g*y+v*b;let x=Math.abs(y),S;if(a){let r=qf(x/7,0,1),i=1-(1-n.highSpeedSteer)*qf(x/n.maxSpeed,0,1);S=e.steer*n.steerRate*r*i*(t.handbrake?1.35:1),y<0&&(S=-S)}else S=e.steer*.6;let C=-S*i;e.heading=Kf(e.heading+C);let w=a?t.handbrake?.25:.88:0;if(w>0){let t=C*w,n=Math.cos(t),r=Math.sin(t),i=e.vx*n+e.vz*r,a=e.vz*n-e.vx*r;e.vx=i,e.vz=a}e.x+=e.vx*i,e.z+=e.vz*i;let T=$f(e,n,r,i),E=r.surfaceAt(T,Xf),D=e.vx*T.tx+e.vz*T.tz,ee=E.slope*D;e.slope=e.onGround?E.slope:0,e.onGround&&(E.height>=e.y-.08?(e.y=E.height,e.vy=ee):(e.onGround=!1,e.airTime=0)),e.onGround||(e.vy-=Uf.gravity*i,e.y+=e.vy*i,e.airTime+=i,e.y<=E.height&&(e.landing=Math.max(e.landing,-e.vy),e.y=E.height,e.vy=ee,e.onGround=!0)),Qf(e),e.odometer+=e.forwardSpeed*i}function Qf(e){let t=e.heading,n=Math.sin(t),r=Math.cos(t),i=Math.cos(t),a=-Math.sin(t);e.forwardSpeed=e.vx*n+e.vz*r,e.lateralSpeed=e.vx*i+e.vz*a,e.drifting=e.onGround&&Math.abs(e.lateralSpeed)>3&&Math.abs(e.forwardSpeed)>10}function $f(e,t,n,r){let i=n.project(e.x,e.z,e.trackIndex,Yf),a=Math.sin(e.heading),o=Math.cos(e.heading),s=Math.abs(a*i.tx+o*i.tz),c=Math.abs(a*i.sx+o*i.sz);e.extent=t.halfWidth*s+t.halfLength*c;let l=n.wallOffset-e.extent;if(e.scraping=!1,Math.abs(i.lateral)>l){let n=Math.sign(i.lateral),s=i.sx*n,c=i.sz*n,u=Math.abs(i.lateral)-l;e.x-=s*u,e.z-=c*u,i.lateral=l*n;let d=e.vx*s+e.vz*c,f=e.fx.shield>0;if(d>0){let n=f?.05:.3;e.vx-=s*d*(1+n),e.vz-=c*d*(1+n);let r=f?0:qf(.06+d*.022,.06,.55)*(t.wallLoss??1);e.vx*=1-r,e.vz*=1-r,e.impact=Math.max(e.impact,d);let l=a*i.tx+o*i.tz>=0?1:-1,u=Kf(Math.atan2(i.tx*l,i.tz*l)-e.heading);e.heading=Kf(e.heading+u*qf(d*.05,.05,.5))}if(r>0&&!f){let n=Math.exp(-1.4*(t.wallLoss??1)*r);e.vx*=n,e.vz*=n}e.scraping=!0}return e.trackIndex=i.index,e.s=i.s,e.lateral=i.lateral,e.tangentX=i.tx,e.tangentZ=i.tz,i}var ep=1.2,tp=1.12;function np(e){let t=e.phys.mass??1;return e.state.fx.shield>0?t*Hf.shield.massMult:t}function rp(e,t){let n=0,r=tp*2;for(let t=0;t<e.length;t++){let i=e[t].state,a=!!e[t].kinematic;for(let o=t+1;o<e.length;o++){let s=e[o].state,c=!!e[o].kinematic;if(a&&c)continue;let l=s.x-i.x,u=s.z-i.z,d=4.640000000000001;if(l*l+u*u>d*d||Math.abs(i.y-s.y)>1.3)continue;let f=np(e[t]),p=np(e[o]),m=Math.sin(i.heading),h=Math.cos(i.heading),g=Math.sin(s.heading),_=Math.cos(s.heading),v=!1;for(let e of[-1.2,ep])for(let t of[-1.2,ep]){let n=i.x+m*e,o=i.z+h*e,l=s.x+g*t,u=s.z+_*t,d=l-n,y=u-o,b=Math.hypot(d,y);if(b>=r)continue;b<1e-4?(d=i.tangentZ,y=-i.tangentX):(d/=b,y/=b);let x=r-Math.max(b,0),S=1/f,C=1/p,w=S+C;a||(i.x-=d*x*(S/w),i.z-=y*x*(S/w)),c||(s.x+=d*x*(C/w),s.z+=y*x*(C/w));let T=(s.vx-i.vx)*d+(s.vz-i.vz)*y;if(T<0){let e=-1.25*T/w;a||(i.vx-=d*e*S,i.vz-=y*e*S),c||(s.vx+=d*e*C,s.vz+=y*e*C),i.carImpact=Math.max(i.carImpact||0,-T),s.carImpact=Math.max(s.carImpact||0,-T)}v=!0}v&&n++}}if(n>0)for(let n of e)n.kinematic||($f(n.state,n.phys,t,0),Qf(n.state));return n}function ip(e,t,n=.06){let r=new Ra;r.moveTo(e[0][0],e[0][1]);for(let t=1;t<e.length;t++)r.lineTo(e[t][0],e[t][1]);r.closePath();let i=new Co(r,{depth:t-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:4});return i.rotateY(-Math.PI/2),i.translate((t-n*2)/2,0,0),i.computeVertexNormals(),i}var X=(e,t,n)=>new na(e,t,n);function ap(e,t={}){let n=e.shape,r=n.width,i=r/2,a=new In;a.rotation.order=`YXZ`;let o=new In;a.add(o);let s=t.glow??e.glow??`#22d3ee`,c=new Ho({color:t.color??e.color,metalness:.55,roughness:.3,clearcoat:1,clearcoatRoughness:.08}),l=new K({color:e.accent,roughness:.45,metalness:.4}),u=new Ho({color:725536,metalness:.2,roughness:.05,clearcoat:1}),d=new K({color:14742270,emissive:12577279,emissiveIntensity:2.4}),f=new K({color:8330525,emissive:16720947,emissiveIntensity:1.2}),p=new K({color:10265519,metalness:.9,roughness:.25}),m=new K({color:1118481,emissive:new W(s),emissiveIntensity:2.2}),h=new K({color:15857145,roughness:.4}),g=new Map,_=(e,t,n=0,r=0,i=0,a=null,o=null)=>{let s=new Fn;s.position.set(n,r,i),a&&s.rotation.set(a[0],a[1],a[2]),o&&s.scale.set(o[0],o[1],o[2]),s.updateMatrix();let c=(e.index?e.toNonIndexed():e.clone()).applyMatrix4(s.matrix);c.clearGroups(),g.has(t)||g.set(t,[]),g.get(t).push(c),e.dispose()},v=e=>[-1,1].forEach(e);_(ip(n.body,r),c),n.model===`phantom`?_(new Ao(1,20,12,0,Math.PI*2,0,Math.PI/2),u,0,.72,-.35,null,[n.cabinWidth/2,.42,1.25]):_(ip(n.cabin,n.cabinWidth,.05),u),_(X(r+.08,.06,.42),l,0,.27,n.nose-.08),v(e=>_(X(.1,.2,(n.axleF-n.axleR)*.75),l,e*(i+.01),.36,(n.axleF+n.axleR)/2)),_(X(r*.9,.2,.3),l,0,.36,n.tail+.12);let y=n.headY??(n.model===`titan`?.62:n.model===`arrow`?.44:.53);v(e=>_(X(.42,.07,.14),d,e*i*.66,y,n.nose,[0,e*.22,0]));let b=new K({map:Xd(t.number??e.number??`01`),transparent:!0,roughness:.4});n.model===`phantom`?_(new Oo(.75,.44),b,0,.668,1.3,[-Math.PI/2+.145,0,0]):v(e=>_(new Oo(.62,.36),b,e*(i+.006),n.model===`titan`?.66:.58,.12,[0,e*Math.PI/2,0]));let x=[],S=n.model===`titan`?.42:.38;v(e=>{_(new ia(.09,.09,.3,10),p,e*.35,S,n.tail+.05,[Math.PI/2,0,0]),x.push(new H(e*.35,S,n.tail-.12))});let C=n.tail-.02;switch(n.model){case`wedge`:v(e=>_(X(.12,.26,.6),l,e*i,.66,-.75));for(let e=0;e<4;e++)_(X(1,.03,.08),l,0,.965,-1.62-e*.14);v(e=>_(X(.16,.1,.22),c,e*(i+.04),.98,.5)),_(X(.5,.04,1),c,0,1.29,-.42),_(X(1.74,.08,.06),f,0,.76,C),v(e=>{_(X(.34,.07,.06),f,e*.74,.64,C-.03),_(X(.07,.19,.06),f,e*.89,.7,C-.02)}),_(X(1.5,.2,.05),l,0,.47,C-.04);break;case`arrow`:_(X(1.2,.05,.5),l,0,.3,n.nose+.08),v(e=>{_(X(.03,.04,2.6),m,e*(i+.02),.5,.1),_(X(.14,.3,.7),l,e*(i-.02),.62,-.95),_(X(.06,.5,.85),l,e*.55,1.02,-1.85,[.3,0,0]),_(X(.15,.09,.2),c,e*(i+.04),.86,.75)}),_(X(1.82,.05,.06),f,0,.74,C),_(X(1.6,.16,.05),l,0,.5,C-.04);break;case`phantom`:v(e=>{_(X(.26,.3,2.3),l,e*(i-.02),.5,-.25),_(X(.03,.04,2.2),m,e*(i+.115),.58,-.25),_(X(.3,.06,.5),l,e*.6,.36,n.nose-.1,[0,e*-.35,0]),_(X(.04,.24,.6),l,e*.45,.42,n.tail+.25)}),_(X(r*.94,.07,.06),f,0,.66,C),_(X(r*.6,.03,.06),m,0,.56,C-.01),_(X(1.2,.04,1.4),l,0,.79,-1.5);break;case`titan`:for(let e of[n.axleF,n.axleR])v(t=>_(X(.24,.32,1.05),c,t*(i+.02),.72,e));_(X(.6,.16,.8),l,0,.92,1.25),_(X(r*.75,.24,.06),l,0,.52,n.nose-.02),v(e=>{_(X(.16,.02,2),h,e*.18,.87,1.05,[-.06,0,0]),_(X(.16,.02,1),h,e*.18,1.415,-.45),_(X(.17,.1,.24),c,e*(i+.06),1.06,.45)}),v(e=>_(X(.42,.14,.06),f,e*.66,.74,C)),_(X(1.4,.22,.05),l,0,.5,C-.03)}let w=n.wing??{type:`none`};w.type===`tall`?(_(X(w.width,.07,.5),l,0,w.y,w.z,[-.08,0,0]),v(e=>{_(X(.07,.42,.2),l,e*.6,w.y-.24,w.z+.03),_(X(.05,.32,.6),c,e*(w.width/2),w.y,w.z)})):w.type===`duck`?_(X(w.width,.06,.32),l,0,w.y,w.z,[.25,0,0]):w.type===`gt`&&(_(X(w.width,.06,.46),l,0,w.y,w.z,[-.1,0,0]),v(e=>{_(X(.06,.5,.12),l,e*.5,w.y-.27,w.z+.12,[.25,0,0]),_(X(.05,.36,.62),l,e*(w.width/2),w.y-.05,w.z)}));for(let[e,t]of g){let n=Md(t,!1);t.forEach(e=>e.dispose());let r=new G(n,e);r.castShadow=!e.transparent,o.add(r)}let T=n.wheelR,E=new K({color:1382171,roughness:.85}),D=new K({map:qd(),metalness:.6,roughness:.35}),ee=new ia(T,T,n.model===`titan`?.4:.34,22);ee.rotateZ(Math.PI/2);let O=[],k=[];for(let[e,t]of[[n.axleF,!0],[n.axleR,!1]])for(let r of[-1,1]){let i=new In;i.position.set(r*n.track,T,e);let o=new G(ee,[E,D,D]);o.castShadow=!0,i.add(o),a.add(i),O.push(o),t&&k.push(i)}let A=new G(new Oo(r+.6,n.nose-n.tail+.8),new gi({map:Yd(s),transparent:!0,opacity:.55,depthWrite:!1,blending:2}));return A.rotation.x=-Math.PI/2,A.position.set(0,.04,(n.nose+n.tail)/2),a.add(A),{root:a,body:o,wheels:O,frontPivots:k,tailMat:f,exhausts:x,glow:A,wheelRadius:T}}function op(){return new Bo({uniforms:{uTime:{value:0},uColor:{value:new W(`#38bdf8`)},uFade:{value:1}},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        vP = position;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime; uniform vec3 uColor; uniform float uFade;
      varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        float f = pow(1.0 - abs(dot(vN, vV)), 2.2);
        float bands = 0.5 + 0.5 * sin(vP.y * 18.0 - uTime * 6.0);
        float a = (0.12 + f * 0.75 + bands * 0.08) * uFade;
        gl_FragColor = vec4(uColor * (0.6 + f), a);
      }`,transparent:!0,depthWrite:!1,blending:2,side:2})}var sp=class{constructor(e,t={}){this.spec=e,this.phys=e.physics,this.state=Wf(),this.model=ap(e,t),this.object=this.model.root,this.pitch=0,this.squat=0,this.bounce=0,this.bounceVel=0,this.braking=!1,this.lastForward=0,this.time=0,t.name&&this.setNameTag(t.name,t.number??``,`#`+new W(t.color??e.color).getHexString());let n=e.shape.nose-e.shape.tail;this.shield=new G(new Ao(1,24,16),op()),this.shield.scale.set(e.shape.width*.85,1.05,n*.6),this.shield.position.set(0,.7,(e.shape.nose+e.shape.tail)/2),this.shield.visible=!1,this.shield.renderOrder=3,this.object.add(this.shield)}setNameTag(e,t=``,n=`#22d3ee`){let r=e?`${e}|${t}|${n}`:null;if(r===this.nameTagKey||(this.nameTag&&(this.nameTag.material.map?.dispose(),this.nameTag.material.dispose(),this.nameTag.removeFromParent(),this.nameTag=null),this.nameTagKey=r,!e))return;let i=new li(new Yr({map:Zd(e,t,n),transparent:!0,depthWrite:!1,fog:!0}));i.scale.set(3.2,.8,1),i.position.set(0,2.45,0),i.renderOrder=2,this.object.add(i),this.nameTag=i}place(e,t,n=0){Jf(this.state,e.path,t,n),this.pitch=this.squat=this.bounce=this.bounceVel=0,this.lastForward=0,this.syncVisual(0)}resetForRace(e,t,n){Gf(this.state),this.place(e,t,n)}step(e,t,n){this.braking=e.brake>0&&this.state.forwardSpeed>.5,Zf(this.state,e,this.phys,t.path,n)}get speedKmh(){return this.state.forwardSpeed*3.6}exhaustWorld(e,t){return t.copy(this.model.exhausts[e]).applyMatrix4(this.object.matrixWorld)}syncVisual(e){let t=this.state,n=this.model,r=e>0?1-Math.exp(-10*e):1;this.time+=e;let i=Math.max(6,Math.abs(t.forwardSpeed)),a=Math.max(-.4,Math.min(.4,-Math.atan2(t.vy,i)));if(this.pitch+=(a-this.pitch)*r,e>0){let n=Math.max(-60,Math.min(60,(t.forwardSpeed-this.lastForward)/e));this.lastForward=t.forwardSpeed;let r=Math.max(-.05,Math.min(.05,-n*.0022));this.squat+=(r-this.squat)*(1-Math.exp(-6*e))}if(t.landing>0&&(this.bounceVel-=Math.min(t.landing,12)*.12),e>0){let t=Math.min(e,.05),n=Math.ceil(t/(1/120)),r=t/n;for(let e=0;e<n;e++)this.bounceVel+=(-this.bounce*180-this.bounceVel*14)*r,this.bounce+=this.bounceVel*r;this.bounce=Math.max(-.25,Math.min(.25,this.bounce))}this.object.position.set(t.x,t.y,t.z),this.object.rotation.set(this.pitch,t.heading,0);let o=Math.min(1,Math.abs(t.forwardSpeed)/30);n.body.rotation.z=-t.steer*o*.045+(t.drifting?-Math.sign(t.lateralSpeed)*.02:0),n.body.rotation.x=this.squat,n.body.position.y=this.bounce;let s=t.odometer/n.wheelRadius;for(let e of n.wheels)e.rotation.x=s;for(let e of n.frontPivots)e.rotation.y=-t.steer*.42;n.tailMat.emissiveIntensity=this.braking?4:1.2,n.glow.material.opacity=t.onGround?t.boosting?.95:.55:.25;let c=t.fx.shield;if(this.shield.visible=c>0&&(c>1.2||Math.sin(this.time*30)>-.3),this.shield.visible){let e=this.shield.material.uniforms;e.uTime.value=this.time,e.uFade.value=Math.min(1,c*2)}}dispose(){let e=new Set;this.object.traverse(t=>{t.geometry&&!t.isSprite&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(t=>e.add(t))});for(let t of e)t.map&&t.map.dispose(),t.dispose();this.object.removeFromParent()}},cp=new WeakSet,lp=class{constructor(e){_d(this,cp),this.camera=e,this.yaw=0,this.pos=new H,this.look=new H,this.trauma=0,this.baseFov=62,this.menuS=0,this.boostPull=0,this.orbitA=.6,this.fovK=1,this.fovCur=e.fov,this._tmp=new H}setViewAspect(e){let t=16/9,n=1;e&&(n=e>t?(t/e)**.6:(t/e)**.4),this.fovK=n,Y(cp,this,dp).call(this,!0)}addShake(e){this.trauma=Math.min(1,this.trauma+e)}snapTo(e){let t=e.state;this.yaw=t.heading,Y(cp,this,fp).call(this,t,0,this.pos),this.look.set(t.x+Math.sin(this.yaw)*6,t.y+1.1,t.z+Math.cos(this.yaw)*6),this.trauma=0,Y(cp,this,pp).call(this,0,0)}follow(e,t){let n=t.state,r=Math.abs(n.forwardSpeed),i=1-Math.exp(-(n.drifting?3.2:5.5)*e);this.yaw=Kf(this.yaw+Kf(n.heading-this.yaw)*i);let a=Y(cp,this,fp).call(this,n,r,this._tmp),o=1-Math.exp(-9*e),s=1-Math.exp(-5*e);this.pos.x+=(a.x-this.pos.x)*o,this.pos.z+=(a.z-this.pos.z)*o,this.pos.y+=(a.y-this.pos.y)*s;let c=6+r*.06;this.look.set(n.x+Math.sin(this.yaw)*c,n.y+1.1,n.z+Math.cos(this.yaw)*c);let l=t.phys.maxSpeed,u=n.boosting?1:n.fx.speed>0||n.fx.turbo>0?.5:0;this.boostPull+=(u*1.6-this.boostPull)*(1-Math.exp(-4*e));let d=this.baseFov+Math.min(1,r/l)*14+u*9;Y(cp,this,pp).call(this,e,d)}flyThrough(e,t){let n=t.path;this.menuS=(this.menuS+e*16)%n.length;let r=n.frameAt(this.menuS),i=n.frameAt(this.menuS+45),a=n.halfWidth*.5+Math.sin(this.menuS*.01)*n.halfWidth*.45,o=9+Math.sin(this.menuS*.02)*2;this.pos.set(r.x+r.sx*a,r.y+o,r.z+r.sz*a),this.look.set(i.x,i.y+1.5,i.z),this.trauma=0,Y(cp,this,pp).call(this,e,58)}orbit(e,t){this.orbitA+=e*.35;let n=t.object.position,r=t.state.heading+this.orbitA;this.pos.set(n.x+Math.sin(r)*8.2,n.y+2.3,n.z+Math.cos(r)*8.2),this.look.set(n.x+Math.cos(r)*1.6,n.y+.75,n.z-Math.sin(r)*1.6),this.trauma=0,Y(cp,this,pp).call(this,e,42)}showcase(e,t,n){this.orbitA+=e*.25;let r=t.object.position,i=n.object.position,a=t.state.heading,o=Math.sin(a),s=Math.cos(a),c=(r.x+i.x)/2,l=(r.y+i.y)/2,u=(r.z+i.z)/2,d=Math.sin(this.orbitA)*2;this.pos.set(c+o*14+s*d,l+2.7,u+s*14-o*d),this.look.set(c,l-2,u),this.trauma=0,Y(cp,this,pp).call(this,e,44)}};function up(e){return this.fovK===1?e:Lt.radToDeg(2*Math.atan(Math.tan(Lt.degToRad(e)/2)*this.fovK))}function dp(e=!1){let t=this.camera,n=Y(cp,this,up).call(this,this.fovCur);(e||Math.abs(t.fov-n)>.01)&&(t.fov=n,t.updateProjectionMatrix())}function fp(e,t,n){let r=7+t*.05+this.boostPull,i=2.7+t*.012,a=Math.sin(this.yaw),o=Math.cos(this.yaw);return n.set(e.x-a*r,e.y+i,e.z-o*r)}function pp(e,t){let n=this.camera;if(n.position.copy(this.pos),this.trauma>0){let t=this.trauma*this.trauma;n.position.x+=(Math.random()-.5)*.6*t,n.position.y+=(Math.random()-.5)*.4*t,n.position.z+=(Math.random()-.5)*.6*t,this.trauma=Math.max(0,this.trauma-e*1.8)}n.lookAt(this.look),t&&Math.abs(this.fovCur-t)>.05&&(this.fovCur+=(t-this.fovCur)*(e>0?1-Math.exp(-4*e):1)),Y(cp,this,dp).call(this)}var mp={solo:{accelerate:[`KeyW`,`ArrowUp`],brake:[`KeyS`,`ArrowDown`],left:[`KeyA`,`ArrowLeft`],right:[`KeyD`,`ArrowRight`],handbrake:[`Space`],nitro:[`ShiftLeft`,`ShiftRight`]},p1:{accelerate:[`KeyW`],brake:[`KeyS`],left:[`KeyA`],right:[`KeyD`],handbrake:[`Space`],nitro:[`ShiftLeft`]},p2:{accelerate:[`ArrowUp`],brake:[`ArrowDown`],left:[`ArrowLeft`],right:[`ArrowRight`],handbrake:[`Slash`,`Period`],nitro:[`ShiftRight`,`Enter`,`NumpadEnter`]}},hp={pause:[`Escape`,`KeyP`],reset:[`KeyR`],reset2:[`Backspace`],mute:[`KeyM`]},gp=new Set([...Object.values(mp).flatMap(e=>Object.values(e).flat()),...Object.values(hp).flat()]),_p=(e,t,n)=>e<t?t:e>n?n:e,vp=e=>!!e&&(e.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName??``)),yp=e=>!!e&&e.tagName===`BUTTON`,bp=.18;function xp(e,t={}){let n=t=>{let n=e.buttons?.[t];return n==null?0:typeof n==`object`?Number(n.value)||+!!n.pressed:Number(n)||0},r=e=>e>.06?e:0,i=Number(e.axes?.[0])||0,a=Math.abs(i)>.18?Math.sign(i)*(Math.abs(i)-bp)/.8200000000000001:0;return n(14)>.5&&(a=-1),n(15)>.5&&(a=1),t.steer=_p(a,-1,1),t.throttle=Math.max(r(n(7)),+(n(0)>.5),+(n(12)>.5)),t.brake=Math.max(r(n(6)),+(n(2)>.5),+(n(13)>.5)),t.nitro=n(1)>.5||n(5)>.5,t.handbrake=n(4)>.5||n(3)>.5,t.start=n(9)>.5,t.back=n(8)>.5,t.a=n(0)>.5,t.b=n(1)>.5,t.left=n(14)>.5||i<-.6,t.right=n(15)>.5||i>.6,t}function Sp(e,t=`solo`,n=!1){let r=[];for(let i=0;i<e;i++)t===`duo`?e===1?r.push(+!n):i<2?r.push(i===0?+!!n:+!n):r.push(-1):r.push(0);return r}var Cp=[`start`,`back`,`a`,`b`,`left`,`right`],wp=()=>({throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1}),Tp=new WeakSet,Ep=class{constructor(e=globalThis){_d(this,Tp),this.target=e,this.down=new Set,this.virtual=new Set,this.handlers={pause:[],reset:[],mute:[],pad:[]},this.enabled=!0,this.playerEnabled=[!0,!0],this.mode=`solo`,this.padSwap=!1,this.padCount=0,this.padOwners=[],this.padInput=[wp(),wp()],this.padPrev=new Map,this._tmp={},this._onKeyDown=e=>{if(gp.has(e.code)&&!vp(e.target)){if(yp(e.target)&&(e.code===`Space`||e.code===`Enter`||e.code===`NumpadEnter`))(e.repeat||this.down.has(e.code))&&e.preventDefault();else if(e.preventDefault(),!e.repeat){this.down.add(e.code);for(let[t,n]of Object.entries(hp))n.includes(e.code)&&(t===`reset`||t===`reset2`?Y(Tp,this,Dp).call(this,`reset`,t===`reset`?0:1):Y(Tp,this,Dp).call(this,t))}}},this._onKeyUp=e=>{this.down.delete(e.code)},this._onBlur=()=>this.down.clear(),e.addEventListener(`keydown`,this._onKeyDown),e.addEventListener(`keyup`,this._onKeyUp),globalThis.addEventListener?.(`blur`,this._onBlur)}on(e,t){this.handlers[e]?.push(t)}setMode(e){this.mode=e===`duo`?`duo`:`solo`}setPlayerEnabled(e,t){this.playerEnabled[e]=!!t}setVirtual(e,t){t?this.virtual.add(e):this.virtual.delete(e)}poll(){let e=[];try{e=globalThis.navigator?.getGamepads?.()??[]}catch{e=[]}let t=[];for(let n of e)n&&n.connected!==!1&&t.push(n);let n=Sp(t.length,this.mode,this.padSwap);this.padCount=t.length,this.padOwners=n;let r=[wp(),wp()],i=new Set;t.forEach((e,t)=>{let a=xp(e,this._tmp),o=n[t],s=e.index??t;i.add(s);let c=this.padPrev.get(s)??{},l={};for(let e of Cp)l[e]=a[e],a[e]&&!c[e]&&o>=0&&Y(Tp,this,Dp).call(this,`pad`,{player:o,button:e});if(this.padPrev.set(s,l),o<0)return;let u=r[o];u.throttle=Math.max(u.throttle,a.throttle),u.brake=Math.max(u.brake,a.brake),Math.abs(a.steer)>Math.abs(u.steer)&&(u.steer=a.steer),u.nitro=u.nitro||a.nitro,u.handbrake=u.handbrake||a.handbrake});for(let e of[...this.padPrev.keys()])i.has(e)||this.padPrev.delete(e);this.padInput=r}read(e={},t=0){if(!this.enabled||!this.playerEnabled[t])return e.throttle=e.brake=e.steer=0,e.handbrake=e.nitro=!1,e;let n=Y(Tp,this,Op).call(this,t),r=this.padInput[t]??wp(),i=+!!Y(Tp,this,kp).call(this,n,`right`,t)-!!Y(Tp,this,kp).call(this,n,`left`,t);return e.throttle=Math.max(+!!Y(Tp,this,kp).call(this,n,`accelerate`,t),r.throttle),e.brake=Math.max(+!!Y(Tp,this,kp).call(this,n,`brake`,t),r.brake),e.steer=i===0?r.steer:i,e.handbrake=Y(Tp,this,kp).call(this,n,`handbrake`,t)||r.handbrake,e.nitro=Y(Tp,this,kp).call(this,n,`nitro`,t)||r.nitro,e}clear(){this.down.clear(),this.virtual.clear()}dispose(){this.target.removeEventListener(`keydown`,this._onKeyDown),this.target.removeEventListener(`keyup`,this._onKeyUp),globalThis.removeEventListener?.(`blur`,this._onBlur)}};function Dp(e,t){this.handlers[e]?.forEach(e=>e(t))}function Op(e){return this.mode===`duo`?e===1?mp.p2:mp.p1:mp.solo}function kp(e,t,n){return n===0&&this.virtual.has(t)?!0:e[t].some(e=>this.down.has(e))}var Ap=(e,t,n)=>e<t?t:e>n?n:e,jp=new WeakSet,Mp=class{constructor(e,t,n,r){_d(this,jp),this.profile=e,this.phys=t,this.path=n,this.difficulty=r,this.usable=n.halfWidth-1.7,this.reset()}reset(){this.reaction=this.profile.reaction,this.latTarget=this.profile.lane*this.usable,this.latSmooth=this.latTarget,this.stuckTime=0,this.wrongTime=0,this.targetSpeed=0,this.blocked=!1,this.wantsRespawn=!1,this.wobble=Math.random()*100}computeInput(e,t,n,r){let i=this.profile,a=this.path,o=this.difficulty,s=a.length,c=e.forwardSpeed;if(r.handbrake=!1,r.nitro=!1,this.reaction>0)return this.reaction-=n,r.throttle=0,r.brake=0,r.steer=0,r;let l=i.skill*o.speed,u=o.corner;if(t.cruise)l*=.72,u*=.8;else if(t.playerGap!==void 0){let e=t.playerGap;e>90?l*=1-Math.min(.09,(e-90)/1500*o.catchUp):e<-60&&(l*=1+Math.min(.05,(-e-60)/1500*o.catchUp))}let d=Math.min(this.phys.maxSpeed,this.phys.maxSpeed*l);e.fx.speed>0&&(d+=Hf.speed.topBonus),e.fx.turbo>0&&(d+=Hf.turbo.topBonus);let f=i.corner*u*(this.phys.aiCorner??1),p=Y(jp,this,Np).call(this,e.s,d,f),m=this.phys.nitro,h=!1,g=.15+(1-i.aggression)*.45;if(!t.cruise&&m&&e.nitro>g&&c>16&&!this.blocked&&e.onGround){let t=Y(jp,this,Np).call(this,e.s,d+m.boostSpeed*o.speed,f);t>c+5&&(h=!0,p=t)}this.usingNitro=h;let _=0;for(let t=15;t<=55;t+=10)_+=a.curvature[a.indexAt(e.s+t)];let v=_/5,y=Ap(Math.abs(v)*70,0,1),b=(1-y)*i.lane*this.usable+y*Math.sign(v)*i.line*this.usable;if(b+=Math.sin((e.s+this.wobble)*.013)*.6,this.items&&!t.cruise)for(let t of this.items){if(!t.active||e.cool[t.type]>0)continue;let n=t.s-e.s;if(n<-s/2&&(n+=s),!(n<10||n>60)&&!(Math.abs(t.lateral-b)>4.2)){b=t.lateral;break}}this.blocked=!1;let x=!1,S=1/0,C=t.cars;for(let n=0;n<C.length;n++){if(n===t.self)continue;let r=C[n].state,a=r.s-e.s;a>s/2&&(a-=s),a<-s/2&&(a+=s);let o=r.lateral-e.lateral;Math.abs(a)<5&&Math.abs(o)<2.6&&(b=e.lateral-Math.sign(o||1)*2.8,x=!0);let l=c-r.forwardSpeed,u=16+Math.max(0,l)*1.8;if(a<=2||a>u||!(Math.abs(r.lateral-b)<2.5)||l<-1)continue;let d=r.lateral-2.7- -this.usable,f=this.usable-(r.lateral+2.7);Math.max(d,f)>=0&&i.aggression>.25?(b=f>=d?r.lateral+2.9:r.lateral-2.9,x=!0,Math.abs(e.lateral-r.lateral)>2.4?a<9&&(S=Math.min(S,r.forwardSpeed+2+i.aggression*4)):S=Math.min(S,r.forwardSpeed+Math.max(.5,(a-5.5)*.9))):(this.blocked=!0,S=Math.min(S,r.forwardSpeed+(a-9)*.6))}p=Math.min(p,S),S!==1/0&&(h=!1),r.nitro=h,this.targetSpeed=p,b=Ap(b,-this.usable,this.usable),this.latTarget=b,this.latSmooth+=(b-this.latSmooth)*(1-Math.exp(-(x?5:2.2)*n));let w=10+Math.abs(c)*.4,T=a.frameAt(e.s+w),E=T.x+T.sx*this.latSmooth-e.x,D=T.z+T.sz*this.latSmooth-e.z;r.steer=Ap(-Kf(Math.atan2(E,D)-e.heading)*2.6,-1,1),c<p-.3?(r.throttle=Ap((p-c)/2.5,.35,1),r.brake=0):c>p+1.5?(r.throttle=0,r.brake=Ap((c-p)/5,.2,1)):(r.throttle=.25,r.brake=0);let ee=Math.sin(e.heading)*e.tangentX+Math.cos(e.heading)*e.tangentZ;return this.stuckTime=Math.abs(c)<2.5?this.stuckTime+n:0,this.wrongTime=ee<-.2?this.wrongTime+n:0,(this.stuckTime>2.2||this.wrongTime>1.5)&&(this.wantsRespawn=!0,this.stuckTime=0,this.wrongTime=0),r}};function Np(e,t,n){let r=this.path,i=this.phys.brake*.55,a=t;for(let t=0;t<=130;t+=5){let o=Math.abs(r.curvature[r.indexAt(e+t)]);if(o<1e-4)continue;let s=Math.sqrt(n/o),c=Math.sqrt(s*s+2*i*t);c<a&&(a=c)}return a}var Pp={id:`autopilot`,name:`AUTOPILOT`,skill:.7,corner:12,line:.35,lane:0,reaction:0,aggression:.5},Fp=class{constructor(e,t=[]){this.path=e,this.items=t.map((t,n)=>{let r=e.frameAt(t.at*e.length);return{id:n,type:t.type,lateral:t.lateral,s:r.s,x:r.x+r.sx*t.lateral,y:r.y,z:r.z+r.sz*t.lateral,heading:r.heading,active:!0,timer:0}}),this.events=[]}reset(){for(let e of this.items)e.active=!0,e.timer=0;this.events.length=0}update(e,t){for(let n of this.items){if(!n.active){n.timer-=e,n.timer<=0&&(n.active=!0,this.events.push({type:`respawn`,item:n}));continue}let r=n.type===`turbo`?2.9:2.5;for(let e of t){let t=e.state,i=t.x-n.x,a=t.z-n.z;if(!(i*i+a*a>r*r)&&!(Math.abs(t.y-n.y)>2.6)&&!(t.cool[n.type]>0)){Ip(t,e.phys,n.type),n.active=!1,n.timer=Hf[n.type].respawn,this.events.push({type:`pickup`,item:n,car:e});break}}}}takeRemote(e,t=null){let n=this.items[e];return!n||!n.active?!1:(n.active=!1,n.timer=Hf[n.type].respawn,this.events.push({type:`pickup`,item:n,car:t,remote:!0}),!0)}drainEvents(){let e=this.events.slice();return this.events.length=0,e}};function Ip(e,t,n){let r=Hf[n];if(e.fx[n]=r.duration,e.cool[n]=r.cooldown,n===`speed`){let n=Math.sin(e.heading),i=Math.cos(e.heading),a=e.vx*n+e.vz*i,o=Math.min(a+r.kick,t.maxSpeed+r.topBonus),s=Math.max(0,o-a);e.vx+=n*s,e.vz+=i*s,e.nitro=Math.min(1,e.nitro+.15)}}var Lp=class{constructor(e,t){this.group=new In,this.group.name=`items`,this.entries=[];let n={};for(let e of Object.keys(Hf)){let t=new W(Hf[e].color);n[e]={core:new K({color:t,emissive:t,emissiveIntensity:1.8,roughness:.3,metalness:.2,transparent:!0}),halo:new Yr({map:Yd(Hf[e].color),transparent:!0,depthWrite:!1,blending:2})}}let r={speed:new Ao(.75,20,14),speedRing:new jo(1.15,.08,6,32),shield:new Do(.95,0),turbo:new jo(2.3,.26,10,40)};this.shared={mats:n,geos:r};for(let t of e){let e=new In;e.position.set(t.x,t.y,t.z),e.rotation.y=t.heading;let i=n[t.type],a;if(t.type===`turbo`){let t=new G(r.turbo,i.core);t.position.y=2.3,e.add(t);let n=new li(i.halo);n.scale.set(4.2,4.2,1),n.position.y=2.3,e.add(n),a=t}else{let n=new G(t.type===`speed`?r.speed:r.shield,i.core);if(n.position.y=1.4,e.add(n),t.type===`speed`){let t=new G(r.speedRing,i.core);t.position.y=1.4,t.rotation.x=Math.PI/2.4,e.add(t)}let o=new li(i.halo);o.scale.set(3.2,3.2,1),o.position.y=1.4,e.add(o),a=n}this.group.add(e),this.entries.push({item:t,group:e,spin:a,phase:t.id*1.3})}t.add(this.group)}update(e,t){for(let n of this.entries){let r=n.item,i=Hf[r.type].respawn,a=r.active?1:.2+.35*(1-Math.max(0,r.timer)/i),o=n.group.scale.x+(a-n.group.scale.x)*Math.min(1,e*10);n.group.scale.setScalar(o),n.group.visible=!0,r.type===`turbo`?n.spin.rotation.z+=e*1.6:(n.spin.rotation.y+=e*2.2,n.group.position.y=r.y+Math.sin(t*2.4+n.phase)*.18),n.group.children.forEach(e=>{e.material&&`opacity`in e.material&&!e.isSprite&&(e.material.opacity=1)}),n.group.traverse(e=>{e.isSprite&&(e.material.opacity=r.active?.85:.25)})}}},Rp=class{constructor(e,{capacity:t=900,additive:n=!0}={}){this.cap=t,this.count=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.alpha=new Float32Array(t),this.size=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grow=new Float32Array(t),this.next=0;let r=new zr;r.setAttribute(`position`,new wr(this.pos,3).setUsage($e)),r.setAttribute(`color`,new wr(this.col,3).setUsage($e)),r.setAttribute(`alpha`,new wr(this.alpha,1).setUsage($e)),r.setAttribute(`size`,new wr(this.size,1).setUsage($e)),r.setDrawRange(0,0),this.geometry=r,this.material=new Bo({uniforms:{uScale:{value:400}},vertexShader:`
        attribute float alpha; attribute float size; attribute vec3 color;
        uniform float uScale; varying float vA; varying vec3 vC;
        void main() {
          vA = alpha; vC = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(1.0, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vA; varying vec3 vC;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r = length(d) * 2.0;
          float a = smoothstep(1.0, 0.0, r) * vA;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vC, a);
        }`,transparent:!0,depthWrite:!1,blending:n?2:1,toneMapped:!1}),this.points=new Yi(r,this.material),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points)}setViewportHeight(e){this.material.uniforms.uScale.value=e*.6}spawn(e,t,n,r,i,a,o,s,c,l,u,d=1.5){let f=this.next;this.next=(this.next+1)%this.cap,this.count<this.cap&&this.count++;let p=f*3;this.pos[p]=e,this.pos[p+1]=t,this.pos[p+2]=n,this.vel[p]=r,this.vel[p+1]=i,this.vel[p+2]=a,this.col[p]=c,this.col[p+1]=l,this.col[p+2]=u,this.life[f]=o,this.maxLife[f]=o,this.size[f]=s,this.grow[f]=d,this.alpha[f]=1}update(e){let t=this.count;for(let n=0;n<t;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=e;let t=n*3;this.pos[t]+=this.vel[t]*e,this.pos[t+1]+=this.vel[t+1]*e,this.pos[t+2]+=this.vel[t+2]*e;let r=Math.exp(-3*e);this.vel[t]*=r,this.vel[t+1]*=r,this.vel[t+2]*=r;let i=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=i,this.size[n]+=this.grow[n]*e}this.geometry.setDrawRange(0,t);let n=this.geometry.attributes;n.position.needsUpdate=!0,n.alpha.needsUpdate=!0,n.size.needsUpdate=!0,n.color.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}dispose(){this.geometry.dispose(),this.material.dispose(),this.points.removeFromParent()}},zp=new WeakSet,Bp=class{constructor(){_d(this,zp),this.ctx=null,this.master=null,this.engines=[],this.nitroNodes=[],this.pans=[0,0],this.muted=!1,this.volume=.7;try{this.muted=localStorage.getItem(`skantri-muted`)===`1`}catch{}}get ready(){return!!this.ctx}unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>{});return}let e=window.AudioContext||window.webkitAudioContext;if(e){try{this.ctx=new e}catch{return}this.master=this.ctx.createGain(),this.master.gain.value=Y(zp,this,Hp).call(this),this.master.connect(this.ctx.destination),Y(zp,this,Vp).call(this,0)}}setDuo(e){this.duo=!!e,this.pans=e?[-.35,.35]:[0,0],this.engines.forEach((e,t)=>{e?.out?.pan&&e.out.pan.setTargetAtTime(this.pans[t]??0,this.ctx.currentTime,.05)})}setVolume(e){this.volume=Math.max(0,Math.min(1,e/100)),this.master&&this.master.gain.setTargetAtTime(Y(zp,this,Hp).call(this),this.ctx.currentTime,.05)}updateNitro(e,t=.5,n=0){e&&Y(zp,this,Vp).call(this,n);let r=this.nitroNodes[n];if(!r)return;let i=this.ctx.currentTime;r.gain.gain.setTargetAtTime(e?this.duo?.12:.16:0,i,e?.04:.15),r.filter.frequency.setTargetAtTime(700+t*1400,i,.1)}pickup(e){e===`speed`?(Y(zp,this,Kp).call(this,520,.25,{type:`sawtooth`,vol:.12,slide:2.4}),Y(zp,this,Kp).call(this,1040,.2,{type:`triangle`,vol:.16,delay:.08})):e===`shield`?[660,880,1320].forEach((e,t)=>Y(zp,this,Kp).call(this,e,.28,{type:`sine`,vol:.16,delay:t*.07})):Y(zp,this,Kp).call(this,300,.35,{type:`sawtooth`,vol:.12,slide:3})}portal(){Y(zp,this,Kp).call(this,1500,.3,{type:`sine`,vol:.08,slide:.5})}toggleMute(){this.muted=!this.muted;try{localStorage.setItem(`skantri-muted`,this.muted?`1`:`0`)}catch{}return this.master&&this.master.gain.setTargetAtTime(Y(zp,this,Hp).call(this),this.ctx.currentTime,.05),this.muted}updateEngine(e,t,n,r=0){let i=n?Y(zp,this,Vp).call(this,r):this.engines[r];if(!i)return;let a=this.ctx.currentTime,o=Math.min(4,Math.floor(e*5)),s=.25+(e*5-o)*.6+o*.05,c=42+s*120;i.o1.frequency.setTargetAtTime(c,a,.05),i.o2.frequency.setTargetAtTime(c*.5,a,.05),i.filter.frequency.setTargetAtTime(400+t*900+s*600,a,.08);let l=this.duo?.75:1;i.gain.gain.setTargetAtTime(n?(.06+t*.07)*l:0,a,.12)}stopEngine(){this.engines.forEach((e,t)=>{e&&e.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.updateNitro(!1,.5,t)})}countBeep(){Y(zp,this,Kp).call(this,440,.22,{vol:.22})}goBeep(){Y(zp,this,Kp).call(this,880,.55,{vol:.26})}checkpoint(){Y(zp,this,Kp).call(this,1320,.12,{type:`triangle`,vol:.18})}lap(e=!1){Y(zp,this,Kp).call(this,660,.14,{type:`triangle`,vol:.2}),Y(zp,this,Kp).call(this,990,.22,{type:`triangle`,vol:.2,delay:.12}),e&&Y(zp,this,Kp).call(this,1320,.3,{type:`triangle`,vol:.2,delay:.26})}finish(e){(e?[523,659,784,1047,784,1047]:[523,494,440,392]).forEach((e,t)=>Y(zp,this,Kp).call(this,e,.24,{type:`triangle`,vol:.22,delay:t*.14}))}hit(e){if(!this.ctx)return;let t=this.ctx,n=t.currentTime,r=t.createBuffer(1,Math.floor(t.sampleRate*.18),t.sampleRate),i=r.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=(Math.random()*2-1)*(1-e/i.length)**2;let a=t.createBufferSource();a.buffer=r;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=500+Math.min(e,30)*30;let s=t.createGain();s.gain.value=Math.min(.5,.08+e*.015),a.connect(o).connect(s).connect(this.master),a.start(n)}dispose(){this.ctx&&this.ctx.close().catch(()=>{}),this.ctx=null}};function Vp(e){if(!this.ctx)return null;if(!this.engines[e]){let t=this.ctx.createStereoPanner?this.ctx.createStereoPanner():this.ctx.createGain();t.pan&&(t.pan.value=this.pans[e]??0),t.connect(this.master),this.engines[e]=Y(zp,this,Gp).call(this,t),this.engines[e].out=t,this.nitroNodes[e]=Y(zp,this,Wp).call(this,t)}return this.engines[e]}function Hp(){return this.muted?0:.8*this.volume}function Up(e=1){let t=this.ctx,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;return n}function Wp(e){let t=this.ctx,n=t.createBufferSource();n.buffer=Y(zp,this,Up).call(this,1.5),n.loop=!0;let r=t.createBiquadFilter();r.type=`bandpass`,r.frequency.value=900,r.Q.value=.8;let i=t.createGain();return i.gain.value=0,n.connect(r).connect(i).connect(e),n.start(),{gain:i,filter:r}}function Gp(e){let t=this.ctx,n=t.createGain();n.gain.value=0;let r=t.createBiquadFilter();r.type=`lowpass`,r.frequency.value=600,r.Q.value=2;let i=t.createOscillator();i.type=`sawtooth`;let a=t.createOscillator();a.type=`square`;let o=t.createGain();return o.gain.value=.35,i.connect(r),a.connect(o).connect(r),r.connect(n).connect(e),i.start(),a.start(),{gain:n,filter:r,o1:i,o2:a,on:!1}}function Kp(e,t,{type:n=`square`,vol:r=.25,delay:i=0,slide:a=0}={}){if(!this.ctx)return;let o=this.ctx,s=o.currentTime+i,c=o.createOscillator(),l=o.createGain();c.type=n,c.frequency.setValueAtTime(e,s),a&&c.frequency.exponentialRampToValueAtTime(e*a,s+t),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(r,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+t),c.connect(l).connect(this.master),c.start(s),c.stop(s+t+.02)}var qp={skantri:{id:`skantri`,name:`SKANTRI`,tagline:`Akselerasi tinggi`,color:14231087,accent:1119e3,glow:`#22d3ee`,number:`01`,stats:{speed:7,accel:10,handling:7,nitro:7},physics:{maxSpeed:57,accel:30,brake:42,reverseMax:14,coastDecel:5,steerRate:2.3,highSpeedSteer:.5,grip:9,driftGrip:1.6,halfWidth:1.1,halfLength:2.3,mass:1,wallLoss:1,aiCorner:1,nitro:{boostAccel:20,boostSpeed:12,drain:.34,regen:.045,driftRegen:.22}},shape:{model:`wedge`,width:1.96,body:[[-2.2,.3],[2.12,.3],[2.28,.44],[2.05,.62],[.95,.8],[-1.55,.9],[-2.22,.86],[-2.28,.52]],cabin:[[-1.35,.82],[.85,.8],[.12,1.24],[-.95,1.27],[-1.5,.96]],cabinWidth:1.4,wheelR:.38,axleF:1.38,axleR:-1.42,track:.93,wing:{type:`tall`,z:-1.98,y:1.32,width:2.1},nose:2.17,tail:-2.32}},vortex:{id:`vortex`,name:`VORTEX`,tagline:`Kecepatan maksimum tinggi`,color:1920728,accent:725024,glow:`#38bdf8`,number:`07`,stats:{speed:10,accel:6,handling:6,nitro:8},physics:{maxSpeed:62,accel:24,brake:40,reverseMax:14,coastDecel:4.5,steerRate:2.15,highSpeedSteer:.45,grip:8.5,driftGrip:1.5,halfWidth:1.1,halfLength:2.5,mass:.95,wallLoss:1.05,aiCorner:.95,nitro:{boostAccel:18,boostSpeed:14,drain:.36,regen:.045,driftRegen:.22}},shape:{model:`arrow`,width:2,body:[[-2.4,.28],[2.42,.26],[2.52,.36],[2.2,.5],[.9,.7],[-1.6,.82],[-2.38,.8],[-2.46,.5]],cabin:[[-.95,.74],[1.1,.68],[.35,1.06],[-.55,1.1],[-1.25,.86]],cabinWidth:1.3,wheelR:.37,axleF:1.55,axleR:-1.55,track:.95,wing:{type:`duck`,z:-2.3,y:.86,width:1.9},nose:2.46,tail:-2.5}},phantom:{id:`phantom`,name:`PHANTOM`,tagline:`Handling unggul`,color:3868516,accent:656914,glow:`#e879f9`,number:`13`,stats:{speed:6,accel:7,handling:10,nitro:6},physics:{maxSpeed:56,accel:26,brake:46,reverseMax:14,coastDecel:5,steerRate:2.65,highSpeedSteer:.64,grip:11.5,driftGrip:2.2,halfWidth:1.08,halfLength:2.2,mass:.95,wallLoss:1,aiCorner:1.1,nitro:{boostAccel:18,boostSpeed:11,drain:.36,regen:.045,driftRegen:.26}},shape:{model:`phantom`,width:2,body:[[-2.15,.3],[2.1,.28],[2.24,.4],[1.9,.56],[.8,.72],[-1.4,.78],[-2.15,.74],[-2.22,.5]],cabinWidth:1.36,wheelR:.38,axleF:1.36,axleR:-1.38,track:.94,wing:{type:`none`},nose:2.16,tail:-2.24}},titan:{id:`titan`,name:`TITAN`,tagline:`Seimbang & stabil`,color:14721286,accent:1382172,glow:`#fbbf24`,number:`88`,stats:{speed:8,accel:7,handling:8,nitro:9},physics:{maxSpeed:58.5,accel:25.5,brake:43,reverseMax:14,coastDecel:5,steerRate:2.35,highSpeedSteer:.55,grip:10.5,driftGrip:1.9,halfWidth:1.15,halfLength:2.35,mass:1.4,wallLoss:.7,aiCorner:1.02,nitro:{boostAccel:19,boostSpeed:12,drain:.26,regen:.05,driftRegen:.2}},shape:{model:`titan`,width:2.1,body:[[-2.25,.32],[2.15,.32],[2.3,.5],[2.22,.72],[1,.86],[-2.2,.92],[-2.3,.6]],cabin:[[-1.45,.88],[.8,.86],[.25,1.36],[-1.1,1.4],[-1.62,1]],cabinWidth:1.62,wheelR:.41,axleF:1.42,axleR:-1.45,track:.97,wing:{type:`gt`,z:-2.05,y:1.42,width:2.2},nose:2.27,tail:-2.3}}},Jp=[`skantri`,`vortex`,`phantom`,`titan`],Yp=`skantri`,Xp={"trek-mondoroko":{id:`trek-mondoroko`,name:`Trek Mondoroko`,tagline:`Pantai tropis, tikungan lebar`,width:16,points:[[-40,-200],[80,-200],[170,-185],[225,-130],[235,-50],[205,20],[140,55],[105,115],[125,180],[95,240],[10,262],[-80,240],[-130,175],[-125,95],[-170,35],[-230,-15],[-248,-105],[-205,-178],[-130,-200]],ramps:[{at:.518,length:12,height:1.6,lateral:0,halfWidth:3.5}],items:[{at:.045,lateral:3.2,type:`turbo`},{at:.16,lateral:-3.6,type:`speed`},{at:.16,lateral:3.6,type:`shield`},{at:.4,lateral:-3.6,type:`shield`},{at:.4,lateral:3.6,type:`speed`},{at:.68,lateral:-3,type:`turbo`},{at:.8,lateral:-3.6,type:`speed`},{at:.8,lateral:3.6,type:`shield`}],theme:{kind:`tropis`,sky:{turbidity:2.2,rayleigh:1.1,elevation:38,azimuth:135,clouds:.35},exposure:.85,sun:{color:16773596,intensity:2.6},hemi:{sky:13625599,ground:14929818,intensity:.9},fogColor:12575474,fogNear:180,fogFar:950,ground:15127196,shoulder:7319119,sea:1413816,barrierA:`#e8303a`,barrierB:`#f4f4f4`}},"kota-modern":{id:`kota-modern`,name:`Kota Modern`,tagline:`Gedung tinggi & lampu neon`,width:15,points:[[-60,-150],[90,-150],[200,-150],[245,-135],[262,-95],[262,20],[248,65],[205,85],[120,88],[80,105],[66,150],[66,215],[48,255],[5,268],[-120,268],[-170,255],[-192,215],[-192,120],[-185,75],[-160,45],[-160,20],[-190,-15],[-200,-60],[-200,-100],[-188,-138],[-150,-150]],ramps:[],items:[{at:.06,lateral:-3,type:`turbo`},{at:.25,lateral:-3.4,type:`speed`},{at:.25,lateral:3.4,type:`shield`},{at:.475,lateral:3.4,type:`speed`},{at:.475,lateral:-3.4,type:`shield`},{at:.6,lateral:3,type:`turbo`},{at:.72,lateral:-3.4,type:`speed`},{at:.72,lateral:3.4,type:`shield`}],theme:{kind:`kota`,sky:{turbidity:6,rayleigh:2.4,elevation:5,azimuth:250,clouds:.45},exposure:.62,sun:{color:16757611,intensity:1.6},hemi:{sky:9086166,ground:2830138,intensity:.85},fogColor:9341096,fogNear:160,fogFar:820,ground:3882823,shoulder:10133931,barrierA:`#1e293b`,barrierB:`#22d3ee`,neon:[`#22d3ee`,`#f472b6`,`#a3e635`,`#facc15`]}},pegunungan:{id:`pegunungan`,name:`Pegunungan`,tagline:`Tebing, jembatan & tikungan tajam`,width:14,points:[[0,0,0],[120,0,0],[200,-8,1.5],[250,-45,4],[262,-95,6],[248,-135,7],[212,-142,7],[188,-118,6.5],[170,-80,5],[130,-58,3.5],[85,-80,2],[55,-135,2],[15,-170,5],[-55,-172,6.5],[-110,-150,6],[-150,-100,4.5],[-215,-85,3],[-250,-40,2],[-235,15,1],[-180,30,.5],[-120,10,0]],ramps:[],bridge:{from:.53,to:.578},items:[{at:.06,lateral:3,type:`turbo`},{at:.16,lateral:-3.2,type:`shield`},{at:.16,lateral:3.2,type:`speed`},{at:.45,lateral:-3.2,type:`speed`},{at:.45,lateral:3.2,type:`shield`},{at:.7,lateral:-3.2,type:`speed`},{at:.7,lateral:3.2,type:`shield`},{at:.93,lateral:-3,type:`turbo`}],theme:{kind:`gunung`,sky:{turbidity:1.6,rayleigh:.9,elevation:32,azimuth:60,clouds:.5},exposure:.8,sun:{color:16774888,intensity:2.4},hemi:{sky:14150911,ground:5335100,intensity:1},fogColor:12900068,fogNear:150,fogFar:900,ground:6261315,shoulder:5999167,river:3113140,barrierA:`#cbd5e1`,barrierB:`#f8fafc`}},"gurun-4d":{id:`gurun-4d`,name:`Gurun 4D`,tagline:`Ramp, batuan & portal futuristik`,width:17,points:[[0,0],[180,0],[320,20],[400,90],[400,190],[330,250],[230,240],[170,300],[60,330],[-80,320],[-200,260],[-260,160],[-230,60],[-140,10]],ramps:[{at:.11,length:12,height:1.7,lateral:-3.6,halfWidth:3.6},{at:.595,length:14,height:2.1,lateral:0,halfWidth:4},{at:.65,length:12,height:1.6,lateral:3.6,halfWidth:3.6}],portals:[.05,.36,.72,.9],items:[{at:.075,lateral:3.6,type:`turbo`},{at:.22,lateral:-3.8,type:`speed`},{at:.22,lateral:3.8,type:`shield`},{at:.45,lateral:-3.8,type:`shield`},{at:.45,lateral:3.8,type:`speed`},{at:.62,lateral:-4,type:`turbo`},{at:.82,lateral:-3.8,type:`speed`},{at:.82,lateral:3.8,type:`shield`}],theme:{kind:`gurun`,sky:{turbidity:4,rayleigh:1.4,elevation:46,azimuth:200,clouds:.12},exposure:.78,sun:{color:16769720,intensity:2.8},hemi:{sky:15916994,ground:13209426,intensity:.95},fogColor:15323045,fogNear:200,fogFar:1e3,ground:14462578,shoulder:13868898,barrierA:`#f97316`,barrierB:`#fef3c7`}}},Zp=[`trek-mondoroko`,`kota-modern`,`pegunungan`,`gurun-4d`],Qp=`trek-mondoroko`,$p=[{id:`arjuno`,name:`ARJUNO`,car:`vortex`,number:`02`,color:2450411,skill:.95,corner:15,line:.7,lane:.3,reaction:.18,aggression:.8},{id:`semeru`,name:`SEMERU`,car:`titan`,number:`03`,color:16102145,skill:.93,corner:14.6,line:.6,lane:-.4,reaction:.25,aggression:.6},{id:`bromo`,name:`BROMO`,car:`phantom`,number:`04`,color:1483594,skill:.91,corner:14.2,line:.55,lane:.5,reaction:.3,aggression:.5},{id:`kawi`,name:`KAWI`,car:`skantri`,number:`05`,color:16347926,skill:.9,corner:13.6,line:.45,lane:-.2,reaction:.22,aggression:.4},{id:`panderman`,name:`PANDERMAN`,car:`titan`,number:`06`,color:9647082,skill:.88,corner:13,line:.4,lane:0,reaction:.35,aggression:.3}],em={mudah:{speed:.86,corner:.66,catchUp:.6},normal:{speed:.93,corner:.8,catchUp:1},sulit:{speed:1,corner:1,catchUp:1.2}},tm=`normal`,nm=[1,2,3,5],rm=`skantri-race-settings-v1`,im={rendah:{label:`Rendah`,pixelRatio:.75,shadows:!1,shadowSize:1024,decor:.5},sedang:{label:`Sedang`,pixelRatio:1,shadows:!0,shadowSize:1024,decor:.8},tinggi:{label:`Tinggi`,pixelRatio:1.5,shadows:!0,shadowSize:2048,decor:1}},am=[`otomatis`,`rendah`,`sedang`,`tinggi`],om=[`otomatis`,`selalu`,`mati`],sm=[0,2,4],cm=[`atas-bawah`,`kiri-kanan`],lm=[`PEMAIN 1`,`PEMAIN 2`];function um(e,t=``){return String(e??``).toUpperCase().replace(/[^A-Z0-9 .\-]/g,``).replace(/\s+/g,` `).trim().slice(0,12).trim()||t}var dm={car:Yp,track:Qp,difficulty:tm,laps:3,quality:`otomatis`,volume:70,touch:`otomatis`,showFps:!1,duoCars:[Yp,`vortex`],duoNames:[...lm],duoRivals:4,duoLayout:`atas-bawah`,duoPadSwap:!1,netName:`PEMAIN`,netRivals:2};function fm(){let e={};try{e=JSON.parse(localStorage.getItem(rm)||`{}`)||{}}catch{e={}}let t={...dm,...e};qp[t.car]||(t.car=Yp),Xp[t.track]||(t.track=Qp),em[t.difficulty]||(t.difficulty=tm),nm.includes(t.laps)||(t.laps=3),am.includes(t.quality)||(t.quality=`otomatis`),om.includes(t.touch)||(t.touch=`otomatis`),t.volume=Math.max(0,Math.min(100,Number(t.volume)||0)),t.showFps=!!t.showFps;let n=Array.isArray(t.duoCars)?t.duoCars:[];t.duoCars=dm.duoCars.map((e,t)=>qp[n[t]]?n[t]:e);let r=Array.isArray(t.duoNames)?t.duoNames:[];return t.duoNames=lm.map((e,t)=>um(r[t],e)),sm.includes(t.duoRivals)||(t.duoRivals=dm.duoRivals),cm.includes(t.duoLayout)||(t.duoLayout=dm.duoLayout),t.duoPadSwap=!!t.duoPadSwap,t.netName=um(t.netName,dm.netName),sm.includes(t.netRivals)||(t.netRivals=dm.netRivals),t}function pm(e){try{return localStorage.setItem(rm,JSON.stringify(e)),!0}catch{return!1}}function mm(){try{return window.matchMedia(`(pointer: coarse)`).matches||`ontouchstart`in window||navigator.maxTouchPoints>0}catch{return!1}}var hm=240,gm=`M 43.43 156.57 A 80 80 0 1 1 156.57 156.57`;function _m(){let e=``;for(let t=0;t<=hm;t+=20){let n=(135+t/hm*270)*Math.PI/180,r=t%40==0,i=r?62:66,a=100+Math.cos(n)*i,o=100+Math.sin(n)*i,s=100+Math.cos(n)*71,c=100+Math.sin(n)*71;e+=`<line x1="${a.toFixed(1)}" y1="${o.toFixed(1)}" x2="${s.toFixed(1)}" y2="${c.toFixed(1)}" class="${r?`tick major`:`tick`}"/>`}return e}var vm={0:`<span><kbd>W</kbd><kbd>↑</kbd> Gas</span>
    <span><kbd>S</kbd><kbd>↓</kbd> Rem / Mundur</span>
    <span><kbd>A</kbd><kbd>D</kbd> Belok</span>
    <span><kbd>Spasi</kbd> Drift</span>
    <span><kbd>Shift</kbd> Nitro</span>
    <span><kbd>R</kbd> Reset</span>
    <span><kbd>M</kbd> Suara</span>
    <span><kbd>Esc</kbd> Jeda</span>`,1:`<span><kbd>W</kbd> Gas</span>
    <span><kbd>S</kbd> Rem</span>
    <span><kbd>A</kbd><kbd>D</kbd> Belok</span>
    <span><kbd>Spasi</kbd> Drift</span>
    <span><kbd>Shift</kbd> kiri Nitro</span>
    <span><kbd>R</kbd> Reset</span>
    <span><kbd>Esc</kbd> Jeda</span>`,2:`<span><kbd>↑</kbd> Gas</span>
    <span><kbd>↓</kbd> Rem</span>
    <span><kbd>←</kbd><kbd>→</kbd> Belok</span>
    <span><kbd>/</kbd> Drift</span>
    <span><kbd>Shift</kbd> kanan Nitro</span>
    <span><kbd>⌫</kbd> Reset</span>`},ym={0:`Shift`,1:`Shift kiri`,2:`Shift kanan`},bm=e=>`
  <div class="hud-panel hud-tl">
    <div class="hud-who" data-who hidden><i data-who-color></i><span data-who-name></span><em class="hud-net" data-who-net hidden></em></div>
    <div class="hud-row race-only">
      <div>
        <div class="hud-label">POSISI</div>
        <div class="hud-pos"><b data-pos>1</b><span data-pos-total>/6</span></div>
      </div>
      <div>
        <div class="hud-label">LAP</div>
        <div class="hud-mid" data-lap-race>1/3</div>
      </div>
    </div>
    <div class="practice-only">
      <div class="hud-label">MODE</div>
      <div class="hud-mode">LATIHAN BEBAS</div>
      <div class="hud-row">
        <div>
          <div class="hud-label">LAP</div>
          <div class="hud-big" data-lap>1</div>
        </div>
        <div>
          <div class="hud-label">CHECKPOINT</div>
          <div class="hud-mid" data-cp>0/3</div>
        </div>
      </div>
    </div>
  </div>

  <ol class="hud-standings race-only" data-standings aria-label="Klasemen"></ol>

  <div class="hud-panel hud-tr">
    <div class="hud-label race-only">WAKTU BALAP</div>
    <div class="hud-label practice-only">WAKTU LAP</div>
    <div class="hud-big mono" data-time>00:00.00</div>
    <div class="hud-sub race-only"><span>LAP INI</span><b class="mono" data-laptime>--:--.--</b></div>
    <div class="hud-sub"><span>TERBAIK</span><b class="mono" data-best>--:--.--</b></div>
    <div class="hud-sub practice-only"><span>TERAKHIR</span><b class="mono" data-last>--:--.--</b></div>
  </div>

  <div class="hud-timeout" data-timeout>SISA WAKTU <b class="mono" data-timeout-val>60</b> DETIK</div>

  <div class="hud-countdown" data-countdown aria-live="assertive">
    <div class="lights"><i></i><i></i><i></i></div>
    <div class="count-num" data-count-num>3</div>
  </div>

  <div class="hud-msg" data-msg aria-live="polite"><div class="hud-msg-main"></div><div class="hud-msg-sub"></div></div>
  <div class="hud-warn" data-warn>⚠ ARAH SALAH — PUTAR BALIK</div>

  <div class="hud-panel hud-bl"><canvas data-minimap width="180" height="180"></canvas></div>

  <div class="hud-br">
    <svg viewBox="0 0 200 200" class="speedo">
      <defs>
        <linearGradient id="spd-${e}" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#22d3ee"/>
          <stop offset="0.7" stop-color="#3b82f6"/>
          <stop offset="1" stop-color="#ef4444"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="94" class="speedo-bg"/>
      <path d="${gm}" class="speedo-track" pathLength="100"/>
      <path d="${gm}" class="speedo-value" pathLength="100" data-arc stroke-dasharray="0 100" stroke="url(#spd-${e})"/>
      ${_m()}
    </svg>
    <div class="speedo-num mono" data-speed>0</div>
    <div class="speedo-unit">km/jam</div>
    <div class="speedo-gear" data-gear>N</div>
  </div>

  <div class="hud-nitro" data-nitro>
    <div class="nitro-label"><span>NITRO</span><kbd>${ym[e]??`Shift`}</kbd></div>
    <div class="nitro-bar"><i data-nitro-fill></i></div>
  </div>

  <div class="hud-effects">
    ${Object.entries(Hf).map(([e,t])=>`<div class="fx fx-${e}" data-fx="${e}"><b>${t.name}</b><span class="mono" data-fx-t></span><i><s data-fx-bar></s></i></div>`).join(``)}
  </div>

  <div class="hud-chips">
    <span class="chip chip-drift" data-drift>DRIFT</span>
    <span class="chip chip-air" data-air>MELAYANG!</span>
  </div>

  <div class="hud-hint" data-hint>${vm[e]??vm[0]}</div>

  <div class="hud-flash" data-flash></div>
  <div class="hud-fps mono" data-fps hidden></div>
`,xm=new WeakSet,Sm=class{constructor(e,t={}){_d(this,xm),this.root=e,this.player=t.player??0,e.innerHTML=bm(this.player),e.dataset.player=String(this.player);let n=t=>e.querySelector(t);this.el={who:n(`[data-who]`),whoName:n(`[data-who-name]`),whoColor:n(`[data-who-color]`),whoNet:n(`[data-who-net]`),pos:n(`[data-pos]`),posTotal:n(`[data-pos-total]`),lapRace:n(`[data-lap-race]`),standings:n(`[data-standings]`),lap:n(`[data-lap]`),cp:n(`[data-cp]`),time:n(`[data-time]`),laptime:n(`[data-laptime]`),best:n(`[data-best]`),last:n(`[data-last]`),timeout:n(`[data-timeout]`),timeoutVal:n(`[data-timeout-val]`),countdown:n(`[data-countdown]`),countNum:n(`[data-count-num]`),msg:n(`[data-msg]`),msgMain:n(`.hud-msg-main`),msgSub:n(`.hud-msg-sub`),warn:n(`[data-warn]`),minimap:n(`[data-minimap]`),arc:n(`[data-arc]`),speed:n(`[data-speed]`),gear:n(`[data-gear]`),drift:n(`[data-drift]`),air:n(`[data-air]`),hint:n(`[data-hint]`),flash:n(`[data-flash]`),fps:n(`[data-fps]`),nitro:n(`[data-nitro]`),nitroFill:n(`[data-nitro-fill]`),fx:Object.fromEntries([...e.querySelectorAll(`[data-fx]`)].map(e=>[e.dataset.fx,{el:e,t:e.querySelector(`[data-fx-t]`),bar:e.querySelector(`[data-fx-bar]`)}]))},this.cache={},this.msgTimer=0,this.hintTimer=0,this.flashLevel=0,this.map=null,this.standingRows=[]}show(e){this.root.hidden=!e}setControls(e){this.player!==e&&(this.player=e,this.root.dataset.player=String(e),this.el.hint.innerHTML=vm[e]??vm[0],this.root.querySelector(`.nitro-label kbd`).textContent=ym[e]??`Shift`)}setNetInfo(e,t=!1){let n=this.el.whoNet;n.hidden=!e,e&&(Y(xm,this,Cm).call(this,`net`,e,n),Y(xm,this,wm).call(this,`netBad`,!!t,n))}setIdentity(e,t){this.el.who.hidden=!e,e||(this.el.whoNet.hidden=!0),e&&(this.el.whoName.textContent=e,this.el.whoColor.style.background=t,this.root.style.setProperty(`--pc`,t))}setMode(e,t=1){this.root.dataset.mode=e,this.cache={},this.el.posTotal.textContent=`/${t}`,this.el.timeout.classList.remove(`on`),this.el.countdown.className=`hud-countdown`,this.el.msg.classList.remove(`on`),this.msgTimer=0}showHint(e=9){this.hintTimer=e,this.el.hint.classList.add(`on`)}message(e,t=``,n=2.2,r=``){this.el.msgMain.textContent=e,this.el.msgSub.textContent=t,this.el.msg.className=`hud-msg on ${r}`,this.msgTimer=n}flash(e){this.el.flash.classList.remove(`portal`),this.flashLevel=Math.min(.8,Math.max(this.flashLevel,e))}portalFlash(){this.el.flash.classList.add(`portal`),this.flashLevel=.55}countdown(e){let t=this.el.countdown;e===null?t.className=`hud-countdown`:(t.className=`hud-countdown on lit-${e===`GO`?3:4-e}${e===`GO`?` go`:``}`,this.el.countNum.textContent=e===`GO`?`GO!`:String(e),this.el.countNum.classList.remove(`pop`),this.el.countNum.offsetWidth,this.el.countNum.classList.add(`pop`))}setRacers(e,t=null){let n=this.el.standings;n.innerHTML=``,this.standingRows=e.map(e=>{let r=t?e===t:e.isPlayer,i=document.createElement(`li`);return i.className=r?`me`:e.isPlayer?`human`:``,i.innerHTML=`<span class="st-pos"></span><i style="background:${e.color}"></i><span class="st-name"></span><span class="st-flag" title="Sudah finis"></span>`,i.querySelector(`.st-name`).textContent=r?`${e.name} (KAMU)`:e.isPlayer?`${e.name} (P${e.playerIndex??2})`:e.name,n.appendChild(i),{li:i,racer:e,pos:0}})}setTrack(e){let t=this.el.minimap,n=Math.min(2,window.devicePixelRatio||1);t.width=180*n,t.height=180*n,t.style.width=`180px`,t.style.height=`180px`;let r=e.bounds,i=Math.max(r.maxX-r.minX,r.maxZ-r.minZ),a=148/i,o=e=>16+(e-r.minX)*a+(i-(r.maxX-r.minX))*a/2,s=e=>16+(e-r.minZ)*a+(i-(r.maxZ-r.minZ))*a/2,c=new Path2D;for(let t=0;t<=e.count;t++){let n=t%e.count;t===0?c.moveTo(o(e.x[n]),s(e.z[n])):c.lineTo(o(e.x[n]),s(e.z[n]))}c.closePath();let l=e.frameAt(0);this.map={ctx:t.getContext(`2d`),dpr:n,size:180,line:c,tx:o,tz:s,start:l}}drawMinimap(e){let t=this.map;if(!t)return;let n=t.ctx;n.setTransform(t.dpr,0,0,t.dpr,0,0),n.clearRect(0,0,t.size,t.size),n.lineJoin=`round`,n.strokeStyle=`rgba(2,8,23,0.9)`,n.lineWidth=9,n.stroke(t.line),n.strokeStyle=`#e2e8f0`,n.lineWidth=4.5,n.stroke(t.line);let r=t.tx(t.start.x),i=t.tz(t.start.z);n.save(),n.translate(r,i),n.rotate(Math.atan2(t.start.sz,t.start.sx)),n.fillStyle=`#facc15`,n.fillRect(-7,-1.5,14,3),n.restore();for(let r of e){let e=t.tx(r.x),i=t.tz(r.z);n.save(),n.translate(e,i),n.rotate(-r.heading),n.fillStyle=r.color,n.strokeStyle=r.me||r.human?`#ffffff`:`#020617`,n.lineWidth=r.me?2:1.5,n.beginPath();let a=r.me?7.5:r.human?6.5:5;n.moveTo(0,a),n.lineTo(a*.75,-a*.7),n.lineTo(-a*.75,-a*.7),n.closePath(),n.fill(),n.stroke(),n.restore()}}update(e,t){let n=Math.round(Math.abs(t.speedKmh));Y(xm,this,Cm).call(this,`speed`,String(n),this.el.speed);let r=Math.min(100,Math.abs(t.speedKmh)/hm*100).toFixed(1);this.cache.arcAttr!==r&&(this.cache.arcAttr=r,this.el.arc.setAttribute(`stroke-dasharray`,`${r} 100`));let i=t.speedKmh<-1?`R`:Math.abs(t.speedKmh)<1?`N`:`D`;if(Y(xm,this,Cm).call(this,`gear`,i,this.el.gear),t.mode===`race`){Y(xm,this,Cm).call(this,`pos`,String(t.position),this.el.pos),Y(xm,this,Cm).call(this,`lapRace`,`${Math.min(t.lap,t.totalLaps)}/${t.totalLaps}`,this.el.lapRace),Y(xm,this,Cm).call(this,`time`,jd(t.raceTime),this.el.time),Y(xm,this,Cm).call(this,`laptime`,jd(t.lapTime),this.el.laptime),Y(xm,this,Tm).call(this,t.standings);let e=t.timeLeft!==null&&!t.finished;Y(xm,this,wm).call(this,`timeout`,e,this.el.timeout),e&&Y(xm,this,Cm).call(this,`timeoutVal`,String(Math.ceil(t.timeLeft)),this.el.timeoutVal)}else Y(xm,this,Cm).call(this,`lap`,String(t.lap),this.el.lap),Y(xm,this,Cm).call(this,`cp`,`${t.checkpoint}/${t.checkpointTotal}`,this.el.cp),Y(xm,this,Cm).call(this,`time`,jd(t.lapTime),this.el.time),Y(xm,this,Cm).call(this,`last`,jd(t.lastLap),this.el.last);Y(xm,this,Cm).call(this,`best`,jd(t.bestLap),this.el.best);let a=Math.round((t.nitro??0)*100);if(this.cache.nitro!==a&&(this.cache.nitro=a,this.el.nitroFill.style.width=`${a}%`),Y(xm,this,wm).call(this,`boost`,!!t.boosting,this.el.nitro),Y(xm,this,wm).call(this,`nitroLow`,a<15,this.el.nitroFill),t.fx)for(let[e,n]of Object.entries(this.el.fx)){let r=t.fx[e]??0;if(Y(xm,this,wm).call(this,`fx-`+e,r>0,n.el),r>0){let t=Math.round(r/Hf[e].duration*100);this.cache[`fxp-`+e]!==t&&(this.cache[`fxp-`+e]=t,n.bar.style.width=`${t}%`,n.t.textContent=`${r.toFixed(1).replace(`.`,`,`)} dtk`)}}this.player!==0&&this.hintTimer>0&&t.fx&&(t.fx.speed>0||t.fx.shield>0||t.fx.turbo>0)&&(this.hintTimer=.001),Y(xm,this,wm).call(this,`drift`,t.drifting,this.el.drift),Y(xm,this,wm).call(this,`air`,t.airborne,this.el.air),Y(xm,this,wm).call(this,`warn`,t.wrongWay,this.el.warn),this.msgTimer>0&&(this.msgTimer-=e,this.msgTimer<=0&&this.el.msg.classList.remove(`on`)),this.hintTimer>0&&(this.hintTimer-=e,this.hintTimer<=0&&this.el.hint.classList.remove(`on`)),this.flashLevel>.001&&(this.flashLevel=Math.max(0,this.flashLevel-e*2.5),this.el.flash.style.opacity=this.flashLevel.toFixed(3))}setFps(e,t=``){this.el.fps.hidden=!1,this.el.fps.textContent=`${e} FPS${t?` · `+t:``}`}hideFps(){this.el.fps.hidden=!0}};function Cm(e,t,n,r=`textContent`){this.cache[e]!==t&&(this.cache[e]=t,n[r]=t)}function wm(e,t,n){this.cache[e]!==t&&(this.cache[e]=t,n.classList.toggle(`on`,t))}function Tm(e){if(!this.standingRows.length)return;let t=e.map(e=>`${e.id}${e.finished?`f`:``}`).join(`,`);if(this.cache.standings===t)return;this.cache.standings=t;let n=new Map(this.standingRows.map(e=>[e.racer.id,e])),r=this.el.standings;e.forEach((e,t)=>{let i=n.get(e.id);i&&(i.li.querySelector(`.st-pos`).textContent=String(t+1),i.li.classList.toggle(`done`,e.finished&&!e.dnf),r.appendChild(i.li))})}var Em=new URL(`logo-smks-pgri-singosari-CsCY1GwX.png`,import.meta.url).href,Dm=function(e,t){let n=e,r=km[t],i=null,a=0,o=null,s=[],c={},l=function(e,t){a=n*4+17,i=function(e){let t=Array(e);for(let n=0;n<e;n+=1){t[n]=Array(e);for(let r=0;r<e;r+=1)t[n][r]=null}return t}(a),u(0,0),u(a-7,0),u(0,a-7),p(),f(),h(e,t),n>=7&&m(e),o??(o=v(n,r,s)),g(o,t)},u=function(e,t){for(let n=-1;n<=7;n+=1)if(!(e+n<=-1||a<=e+n))for(let r=-1;r<=7;r+=1)t+r<=-1||a<=t+r||(0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4?i[e+n][t+r]=!0:i[e+n][t+r]=!1)},d=function(){let e=0,t=0;for(let n=0;n<8;n+=1){l(!0,n);let r=jm.getLostPoint(c);(n==0||e>r)&&(e=r,t=n)}return t},f=function(){for(let e=8;e<a-8;e+=1)i[e][6]??(i[e][6]=e%2==0);for(let e=8;e<a-8;e+=1)i[6][e]??(i[6][e]=e%2==0)},p=function(){let e=jm.getPatternPosition(n);for(let t=0;t<e.length;t+=1)for(let n=0;n<e.length;n+=1){let r=e[t],a=e[n];if(i[r][a]==null)for(let e=-2;e<=2;e+=1)for(let t=-2;t<=2;t+=1)e==-2||e==2||t==-2||t==2||e==0&&t==0?i[r+e][a+t]=!0:i[r+e][a+t]=!1}},m=function(e){let t=jm.getBCHTypeNumber(n);for(let n=0;n<18;n+=1){let r=!e&&(t>>n&1)==1;i[Math.floor(n/3)][n%3+a-8-3]=r}for(let n=0;n<18;n+=1){let r=!e&&(t>>n&1)==1;i[n%3+a-8-3][Math.floor(n/3)]=r}},h=function(e,t){let n=r<<3|t,o=jm.getBCHTypeInfo(n);for(let t=0;t<15;t+=1){let n=!e&&(o>>t&1)==1;t<6?i[t][8]=n:t<8?i[t+1][8]=n:i[a-15+t][8]=n}for(let t=0;t<15;t+=1){let n=!e&&(o>>t&1)==1;t<8?i[8][a-t-1]=n:t<9?i[8][15-t-1+1]=n:i[8][15-t-1]=n}i[a-8][8]=!e},g=function(e,t){let n=-1,r=a-1,o=7,s=0,c=jm.getMaskFunction(t);for(let t=a-1;t>0;t-=2)for(t==6&&--t;;){for(let n=0;n<2;n+=1)if(i[r][t-n]==null){let a=!1;s<e.length&&(a=(e[s]>>>o&1)==1),c(r,t-n)&&(a=!a),i[r][t-n]=a,--o,o==-1&&(s+=1,o=7)}if(r+=n,r<0||a<=r){r-=n,n=-n;break}}},_=function(e,t){let n=0,r=0,i=0,a=Array(t.length),o=Array(t.length);for(let s=0;s<t.length;s+=1){let c=t[s].dataCount,l=t[s].totalCount-c;r=Math.max(r,c),i=Math.max(i,l),a[s]=Array(c);for(let t=0;t<a[s].length;t+=1)a[s][t]=255&e.getBuffer()[t+n];n+=c;let u=jm.getErrorCorrectPolynomial(l),d=Nm(a[s],u.getLength()-1).mod(u);o[s]=Array(u.getLength()-1);for(let e=0;e<o[s].length;e+=1){let t=e+d.getLength()-o[s].length;o[s][e]=t>=0?d.getAt(t):0}}let s=0;for(let e=0;e<t.length;e+=1)s+=t[e].totalCount;let c=Array(s),l=0;for(let e=0;e<r;e+=1)for(let n=0;n<t.length;n+=1)e<a[n].length&&(c[l]=a[n][e],l+=1);for(let e=0;e<i;e+=1)for(let n=0;n<t.length;n+=1)e<o[n].length&&(c[l]=o[n][e],l+=1);return c},v=function(e,t,n){let r=Pm.getRSBlocks(e,t),i=Fm();for(let t=0;t<n.length;t+=1){let r=n[t];i.put(r.getMode(),4),i.put(r.getLength(),jm.getLengthInBits(r.getMode(),e)),r.write(i)}let a=0;for(let e=0;e<r.length;e+=1)a+=r[e].dataCount;if(i.getLengthInBits()>a*8)throw`code length overflow. (`+i.getLengthInBits()+`>`+a*8+`)`;for(i.getLengthInBits()+4<=a*8&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=a*8||(i.put(236,8),i.getLengthInBits()>=a*8));)i.put(17,8);return _(i,r)};c.addData=function(e,t){t=t||`Byte`;let n=null;switch(t){case`Numeric`:n=Im(e);break;case`Alphanumeric`:n=Lm(e);break;case`Byte`:n=Rm(e);break;case`Kanji`:n=zm(e);break;default:throw`mode:`+t}s.push(n),o=null},c.isDark=function(e,t){if(e<0||a<=e||t<0||a<=t)throw e+`,`+t;return i[e][t]},c.getModuleCount=function(){return a},c.make=function(){if(n<1){let e=1;for(;e<40;e++){let t=Pm.getRSBlocks(e,r),n=Fm();for(let t=0;t<s.length;t++){let r=s[t];n.put(r.getMode(),4),n.put(r.getLength(),jm.getLengthInBits(r.getMode(),e)),r.write(n)}let i=0;for(let e=0;e<t.length;e++)i+=t[e].dataCount;if(n.getLengthInBits()<=i*8)break}n=e}l(!1,d())},c.createTableTag=function(e,t){e=e||2,t=t===void 0?e*4:t;let n=``;n+=`<table style="`,n+=` border-width: 0px; border-style: none;`,n+=` border-collapse: collapse;`,n+=` padding: 0px; margin: `+t+`px;`,n+=`">`,n+=`<tbody>`;for(let t=0;t<c.getModuleCount();t+=1){n+=`<tr>`;for(let r=0;r<c.getModuleCount();r+=1)n+=`<td style="`,n+=` border-width: 0px; border-style: none;`,n+=` border-collapse: collapse;`,n+=` padding: 0px; margin: 0px;`,n+=` width: `+e+`px;`,n+=` height: `+e+`px;`,n+=` background-color: `,n+=c.isDark(t,r)?`#000000`:`#ffffff`,n+=`;`,n+=`"/>`;n+=`</tr>`}return n+=`</tbody>`,n+=`</table>`,n},c.createSvgTag=function(e,t,n,r){let i={};typeof arguments[0]==`object`&&(i=arguments[0],e=i.cellSize,t=i.margin,n=i.alt,r=i.title),e=e||2,t=t===void 0?e*4:t,n=typeof n==`string`?{text:n}:n||{},n.text=n.text||null,n.id=n.text?n.id||`qrcode-description`:null,r=typeof r==`string`?{text:r}:r||{},r.text=r.text||null,r.id=r.text?r.id||`qrcode-title`:null;let a=c.getModuleCount()*e+t*2,o,s,l,u,d=``,f;for(f=`l`+e+`,0 0,`+e+` -`+e+`,0 0,-`+e+`z `,d+=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg"`,d+=i.scalable?``:` width="`+a+`px" height="`+a+`px"`,d+=` viewBox="0 0 `+a+` `+a+`" `,d+=` preserveAspectRatio="xMinYMin meet"`,d+=r.text||n.text?` role="img" aria-labelledby="`+y([r.id,n.id].join(` `).trim())+`"`:``,d+=`>`,d+=r.text?`<title id="`+y(r.id)+`">`+y(r.text)+`</title>`:``,d+=n.text?`<description id="`+y(n.id)+`">`+y(n.text)+`</description>`:``,d+=`<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>`,d+=`<path d="`,l=0;l<c.getModuleCount();l+=1)for(u=l*e+t,o=0;o<c.getModuleCount();o+=1)c.isDark(l,o)&&(s=o*e+t,d+=`M`+s+`,`+u+f);return d+=`" stroke="transparent" fill="black"/>`,d+=`</svg>`,d},c.createDataURL=function(e,t){e=e||2,t=t===void 0?e*4:t;let n=c.getModuleCount()*e+t*2,r=t,i=n-t;return Wm(n,n,function(t,n){if(r<=t&&t<i&&r<=n&&n<i){let i=Math.floor((t-r)/e),a=Math.floor((n-r)/e);return+!c.isDark(a,i)}return 1})},c.createImgTag=function(e,t,n){e=e||2,t=t===void 0?e*4:t;let r=c.getModuleCount()*e+t*2,i=``;return i+=`<img`,i+=` src="`,i+=c.createDataURL(e,t),i+=`"`,i+=` width="`,i+=r,i+=`"`,i+=` height="`,i+=r,i+=`"`,n&&(i+=` alt="`,i+=y(n),i+=`"`),i+=`/>`,i};let y=function(e){let t=``;for(let n=0;n<e.length;n+=1){let r=e.charAt(n);switch(r){case`<`:t+=`&lt;`;break;case`>`:t+=`&gt;`;break;case`&`:t+=`&amp;`;break;case`"`:t+=`&quot;`;break;default:t+=r}}return t},b=function(e){e=e===void 0?2:e;let t=c.getModuleCount()*1+e*2,n=e,r=t-e,i,a,o,s,l,u={"██":`█`,"█ ":`▀`," █":`▄`,"  ":` `},d={"██":`▀`,"█ ":`▀`," █":` `,"  ":` `},f=``;for(i=0;i<t;i+=2){for(o=Math.floor((i-n)/1),s=Math.floor((i+1-n)/1),a=0;a<t;a+=1)l=`█`,n<=a&&a<r&&n<=i&&i<r&&c.isDark(o,Math.floor((a-n)/1))&&(l=` `),n<=a&&a<r&&n<=i+1&&i+1<r&&c.isDark(s,Math.floor((a-n)/1))?l+=` `:l+=`█`,f+=e<1&&i+1>=r?d[l]:u[l];f+=`
`}return t%2&&e>0?f.substring(0,f.length-t-1)+Array(t+1).join(`▀`):f.substring(0,f.length-1)};return c.createASCII=function(e,t){if(e=e||1,e<2)return b(t);--e,t=t===void 0?e*2:t;let n=c.getModuleCount()*e+t*2,r=t,i=n-t,a,o,s,l,u=Array(e+1).join(`██`),d=Array(e+1).join(`  `),f=``,p=``;for(a=0;a<n;a+=1){for(s=Math.floor((a-r)/e),p=``,o=0;o<n;o+=1)l=1,r<=o&&o<i&&r<=a&&a<i&&c.isDark(s,Math.floor((o-r)/e))&&(l=0),p+=l?u:d;for(s=0;s<e;s+=1)f+=p+`
`}return f.substring(0,f.length-1)},c.renderTo2dContext=function(e,t){t=t||2;let n=c.getModuleCount();for(let r=0;r<n;r++)for(let i=0;i<n;i++)e.fillStyle=c.isDark(r,i)?`black`:`white`,e.fillRect(i*t,r*t,t,t)},c};Dm.stringToBytes=function(e){let t=[];for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);t.push(r&255)}return t},Dm.createStringToBytes=function(e,t){let n=function(){let n=Hm(e),r=function(){let e=n.read();if(e==-1)throw`eof`;return e},i=0,a={};for(;;){let e=n.read();if(e==-1)break;let t=r(),o=r(),s=r(),c=String.fromCharCode(e<<8|t);a[c]=o<<8|s,i+=1}if(i!=t)throw i+` != `+t;return a}();return function(e){let t=[];for(let r=0;r<e.length;r+=1){let i=e.charCodeAt(r);if(i<128)t.push(i);else{let i=n[e.charAt(r)];typeof i==`number`?(i&255)==i?t.push(i):(t.push(i>>>8),t.push(i&255)):t.push(63)}}return t}};var Om={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},km={L:1,M:0,Q:3,H:2},Am={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},jm=function(){let e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,n=7973,r={},i=function(e){let t=0;for(;e!=0;)t+=1,e>>>=1;return t};return r.getBCHTypeInfo=function(e){let n=e<<10;for(;i(n)-i(t)>=0;)n^=t<<i(n)-i(t);return(e<<10|n)^21522},r.getBCHTypeNumber=function(e){let t=e<<12;for(;i(t)-i(n)>=0;)t^=n<<i(t)-i(n);return e<<12|t},r.getPatternPosition=function(t){return e[t-1]},r.getMaskFunction=function(e){switch(e){case Am.PATTERN000:return function(e,t){return(e+t)%2==0};case Am.PATTERN001:return function(e,t){return e%2==0};case Am.PATTERN010:return function(e,t){return t%3==0};case Am.PATTERN011:return function(e,t){return(e+t)%3==0};case Am.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case Am.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case Am.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case Am.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw`bad maskPattern:`+e}},r.getErrorCorrectPolynomial=function(e){let t=Nm([1],0);for(let n=0;n<e;n+=1)t=t.multiply(Nm([1,Mm.gexp(n)],0));return t},r.getLengthInBits=function(e,t){if(1<=t&&t<10)switch(e){case Om.MODE_NUMBER:return 10;case Om.MODE_ALPHA_NUM:return 9;case Om.MODE_8BIT_BYTE:return 8;case Om.MODE_KANJI:return 8;default:throw`mode:`+e}else if(t<27)switch(e){case Om.MODE_NUMBER:return 12;case Om.MODE_ALPHA_NUM:return 11;case Om.MODE_8BIT_BYTE:return 16;case Om.MODE_KANJI:return 10;default:throw`mode:`+e}else if(t<41)switch(e){case Om.MODE_NUMBER:return 14;case Om.MODE_ALPHA_NUM:return 13;case Om.MODE_8BIT_BYTE:return 16;case Om.MODE_KANJI:return 12;default:throw`mode:`+e}else throw`type:`+t},r.getLostPoint=function(e){let t=e.getModuleCount(),n=0;for(let r=0;r<t;r+=1)for(let i=0;i<t;i+=1){let a=0,o=e.isDark(r,i);for(let n=-1;n<=1;n+=1)if(!(r+n<0||t<=r+n))for(let s=-1;s<=1;s+=1)i+s<0||t<=i+s||(n!=0||s!=0)&&o==e.isDark(r+n,i+s)&&(a+=1);a>5&&(n+=3+a-5)}for(let r=0;r<t-1;r+=1)for(let i=0;i<t-1;i+=1){let t=0;e.isDark(r,i)&&(t+=1),e.isDark(r+1,i)&&(t+=1),e.isDark(r,i+1)&&(t+=1),e.isDark(r+1,i+1)&&(t+=1),(t==0||t==4)&&(n+=3)}for(let r=0;r<t;r+=1)for(let i=0;i<t-6;i+=1)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(let r=0;r<t;r+=1)for(let i=0;i<t-6;i+=1)e.isDark(i,r)&&!e.isDark(i+1,r)&&e.isDark(i+2,r)&&e.isDark(i+3,r)&&e.isDark(i+4,r)&&!e.isDark(i+5,r)&&e.isDark(i+6,r)&&(n+=40);let r=0;for(let n=0;n<t;n+=1)for(let i=0;i<t;i+=1)e.isDark(i,n)&&(r+=1);let i=Math.abs(100*r/t/t-50)/5;return n+=i*10,n},r}(),Mm=function(){let e=Array(256),t=Array(256);for(let t=0;t<8;t+=1)e[t]=1<<t;for(let t=8;t<256;t+=1)e[t]=e[t-4]^e[t-5]^e[t-6]^e[t-8];for(let n=0;n<255;n+=1)t[e[n]]=n;let n={};return n.glog=function(e){if(e<1)throw`glog(`+e+`)`;return t[e]},n.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]},n}(),Nm=function(e,t){if(e.length===void 0)throw e.length+`/`+t;let n=function(){let n=0;for(;n<e.length&&e[n]==0;)n+=1;let r=Array(e.length-n+t);for(let t=0;t<e.length-n;t+=1)r[t]=e[t+n];return r}(),r={};return r.getAt=function(e){return n[e]},r.getLength=function(){return n.length},r.multiply=function(e){let t=Array(r.getLength()+e.getLength()-1);for(let n=0;n<r.getLength();n+=1)for(let i=0;i<e.getLength();i+=1)t[n+i]^=Mm.gexp(Mm.glog(r.getAt(n))+Mm.glog(e.getAt(i)));return Nm(t,0)},r.mod=function(e){if(r.getLength()-e.getLength()<0)return r;let t=Mm.glog(r.getAt(0))-Mm.glog(e.getAt(0)),n=Array(r.getLength());for(let e=0;e<r.getLength();e+=1)n[e]=r.getAt(e);for(let r=0;r<e.getLength();r+=1)n[r]^=Mm.gexp(Mm.glog(e.getAt(r))+t);return Nm(n,0).mod(e)},r},Pm=function(){let e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){let n={};return n.totalCount=e,n.dataCount=t,n},n={},r=function(t,n){switch(n){case km.L:return e[(t-1)*4+0];case km.M:return e[(t-1)*4+1];case km.Q:return e[(t-1)*4+2];case km.H:return e[(t-1)*4+3];default:return}};return n.getRSBlocks=function(e,n){let i=r(e,n);if(i===void 0)throw`bad rs block @ typeNumber:`+e+`/errorCorrectionLevel:`+n;let a=i.length/3,o=[];for(let e=0;e<a;e+=1){let n=i[e*3+0],r=i[e*3+1],a=i[e*3+2];for(let e=0;e<n;e+=1)o.push(t(r,a))}return o},n}(),Fm=function(){let e=[],t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(t){let n=Math.floor(t/8);return(e[n]>>>7-t%8&1)==1},n.put=function(e,t){for(let r=0;r<t;r+=1)n.putBit((e>>>t-r-1&1)==1)},n.getLengthInBits=function(){return t},n.putBit=function(n){let r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1},n},Im=function(e){let t=Om.MODE_NUMBER,n=e,r={};r.getMode=function(){return t},r.getLength=function(e){return n.length},r.write=function(e){let t=n,r=0;for(;r+2<t.length;)e.put(i(t.substring(r,r+3)),10),r+=3;r<t.length&&(t.length-r==1?e.put(i(t.substring(r,r+1)),4):t.length-r==2&&e.put(i(t.substring(r,r+2)),7))};let i=function(e){let t=0;for(let n=0;n<e.length;n+=1)t=t*10+a(e.charAt(n));return t},a=function(e){if(`0`<=e&&e<=`9`)return e.charCodeAt(0)-48;throw`illegal char :`+e};return r},Lm=function(e){let t=Om.MODE_ALPHA_NUM,n=e,r={};r.getMode=function(){return t},r.getLength=function(e){return n.length},r.write=function(e){let t=n,r=0;for(;r+1<t.length;)e.put(i(t.charAt(r))*45+i(t.charAt(r+1)),11),r+=2;r<t.length&&e.put(i(t.charAt(r)),6)};let i=function(e){if(`0`<=e&&e<=`9`)return e.charCodeAt(0)-48;if(`A`<=e&&e<=`Z`)return e.charCodeAt(0)-65+10;switch(e){case` `:return 36;case`$`:return 37;case`%`:return 38;case`*`:return 39;case`+`:return 40;case`-`:return 41;case`.`:return 42;case`/`:return 43;case`:`:return 44;default:throw`illegal char :`+e}};return r},Rm=function(e){let t=Om.MODE_8BIT_BYTE,n=Dm.stringToBytes(e),r={};return r.getMode=function(){return t},r.getLength=function(e){return n.length},r.write=function(e){for(let t=0;t<n.length;t+=1)e.put(n[t],8)},r},zm=function(e){let t=Om.MODE_KANJI,n=Dm.stringToBytes;(function(e,t){let r=n(e);if(r.length!=2||(r[0]<<8|r[1])!=t)throw`sjis not supported.`})(`友`,38726);let r=n(e),i={};return i.getMode=function(){return t},i.getLength=function(e){return~~(r.length/2)},i.write=function(e){let t=r,n=0;for(;n+1<t.length;){let r=(255&t[n])<<8|255&t[n+1];if(33088<=r&&r<=40956)r-=33088;else if(57408<=r&&r<=60351)r-=49472;else throw`illegal char at `+(n+1)+`/`+r;r=(r>>>8&255)*192+(r&255),e.put(r,13),n+=2}if(n<t.length)throw`illegal char at `+(n+1)},i},Bm=function(){let e=[],t={};return t.writeByte=function(t){e.push(t&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,r){n=n||0,r=r||e.length;for(let i=0;i<r;i+=1)t.writeByte(e[i+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return e},t.toString=function(){let t=``;t+=`[`;for(let n=0;n<e.length;n+=1)n>0&&(t+=`,`),t+=e[n];return t+=`]`,t},t},Vm=function(){let e=0,t=0,n=0,r=``,i={},a=function(e){r+=String.fromCharCode(o(e&63))},o=function(e){if(e<0)throw`n:`+e;if(e<26)return 65+e;if(e<52)return 97+(e-26);if(e<62)return 48+(e-52);if(e==62)return 43;if(e==63)return 47;throw`n:`+e};return i.writeByte=function(r){for(e=e<<8|r&255,t+=8,n+=1;t>=6;)a(e>>>t-6),t-=6},i.flush=function(){if(t>0&&(a(e<<6-t),e=0,t=0),n%3!=0){let e=3-n%3;for(let t=0;t<e;t+=1)r+=`=`}},i.toString=function(){return r},i},Hm=function(e){let t=e,n=0,r=0,i=0,a={};a.read=function(){for(;i<8;){if(n>=t.length){if(i==0)return-1;throw`unexpected end of file./`+i}let e=t.charAt(n);if(n+=1,e==`=`)return i=0,-1;e.match(/^\s$/)||(r=r<<6|o(e.charCodeAt(0)),i+=6)}let e=r>>>i-8&255;return i-=8,e};let o=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(e==43)return 62;if(e==47)return 63;throw`c:`+e};return a},Um=function(e,t){let n=e,r=t,i=Array(e*t),a={};a.setPixel=function(e,t,r){i[t*n+e]=r},a.write=function(e){e.writeString(`GIF87a`),e.writeShort(n),e.writeShort(r),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(`,`),e.writeShort(0),e.writeShort(0),e.writeShort(n),e.writeShort(r),e.writeByte(0);let t=s(2);e.writeByte(2);let i=0;for(;t.length-i>255;)e.writeByte(255),e.writeBytes(t,i,255),i+=255;e.writeByte(t.length-i),e.writeBytes(t,i,t.length-i),e.writeByte(0),e.writeString(`;`)};let o=function(e){let t=e,n=0,r=0,i={};return i.write=function(e,i){if(e>>>i)throw`length over`;for(;n+i>=8;)t.writeByte(255&(e<<n|r)),i-=8-n,e>>>=8-n,r=0,n=0;r=e<<n|r,n+=i},i.flush=function(){n>0&&t.writeByte(r)},i},s=function(e){let t=1<<e,n=(1<<e)+1,r=e+1,a=c();for(let e=0;e<t;e+=1)a.add(String.fromCharCode(e));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(n));let s=Bm(),l=o(s);l.write(t,r);let u=0,d=String.fromCharCode(i[u]);for(u+=1;u<i.length;){let e=String.fromCharCode(i[u]);u+=1,a.contains(d+e)?d+=e:(l.write(a.indexOf(d),r),a.size()<4095&&(a.size()==1<<r&&(r+=1),a.add(d+e)),d=e)}return l.write(a.indexOf(d),r),l.write(n,r),l.flush(),s.toByteArray()},c=function(){let e={},t=0,n={};return n.add=function(r){if(n.contains(r))throw`dup key:`+r;e[r]=t,t+=1},n.size=function(){return t},n.indexOf=function(t){return e[t]},n.contains=function(t){return e[t]!==void 0},n};return a},Wm=function(e,t,n){let r=Um(e,t);for(let i=0;i<t;i+=1)for(let t=0;t<e;t+=1)r.setPixel(t,i,n(t,i));let i=Bm();r.write(i);let a=Vm(),o=i.toByteArray();for(let e=0;e<o.length;e+=1)a.writeByte(o[e]);return a.flush(),`data:image/gif;base64,`+a};Dm.stringToBytes;var Gm=`skantri-race-v1-`,Km=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`,qm=1/20;function Jm(e=Math.random){let t=``;for(let n=0;n<4;n++)t+=Km[Math.floor(e()*32)%32];return t}function Ym(e){return String(e??``).toUpperCase().replace(/[^A-Z0-9]/g,``).slice(0,4)}function Xm(e){return typeof e==`string`&&e.length===4&&[...e].every(e=>`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`.includes(e))}var Zm=e=>Gm+e,Qm=e=>Math.round(e*100)/100,$m=e=>Math.round(e*1e3)/1e3,eh=e=>Math.round(e*10)/10;function th(e){let t=+!!e.onGround|(e.boosting?2:0)|(e.drifting?4:0);return[Qm(e.x),Qm(e.y),Qm(e.z),$m(e.heading),Qm(e.vx),Qm(e.vy),Qm(e.vz),Qm(e.steer),t,eh(e.fx.speed),eh(e.fx.shield),eh(e.fx.turbo),Qm(e.nitro)]}function nh(e,t={}){return t.x=e[0],t.y=e[1],t.z=e[2],t.heading=e[3],t.vx=e[4],t.vy=e[5],t.vz=e[6],t.steer=e[7],t.onGround=!!(e[8]&1),t.boosting=!!(e[8]&2),t.drifting=!!(e[8]&4),t.fx={speed:e[9],shield:e[10],turbo:e[11]},t.nitro=e[12],t}var rh=e=>e==null?null:Math.round(e*1e3)/1e3;function ih(e){return[e.id,e.lap,e.position,e.nextCheckpoint,+!!e.finished,+!!e.dnf,rh(e.finishTime),rh(e.bestLap),rh(e.lastLap),rh(e.lapStart),Qm(e.progress)]}function ah(e,t){return e.lap=t[1],e.position=t[2],e.nextCheckpoint=t[3],e.finished=!!t[4],e.dnf=!!t[5],e.finishTime=t[6],e.bestLap=t[7],e.lastLap=t[8],e.lapStart=t[9]??0,e.progress=t[10]??e.progress,e}var oh=e=>e.map(e=>e.active?`1`:`0`).join(``);function sh(e){let t={...e};return e.racer&&(t.racer=e.racer.id),t}var ch=(e,t,n)=>e<t?t:e>n?n:e,lh={},uh=class{constructor(){this.last=null,this.recv=0,this.yawRate=0,this.applied=!1,this.count=0}get has(){return!!this.last}push(e,t){let n=nh(e);if(this.last){let e=t-this.recv;e>.001&&(this.yawRate=ch(Kf(n.heading-this.last.heading)/e,-3,3))}this.last=n,this.recv=t,this.count++}predict(e,t={}){let n=this.last,r=ch(e-this.recv,0,.25);return t.x=n.x+n.vx*r,t.z=n.z+n.vz*r,t.y=n.onGround?n.y:n.y+n.vy*r,t.heading=Kf(n.heading+this.yawRate*r),t}apply(e,t,n,r){if(!this.last)return!1;let i=this.last,a=this.predict(t,this._tmp||(this._tmp={})),o=Math.hypot(a.x-e.x,a.z-e.z);if(!this.applied||o>8)e.x=a.x,e.y=a.y,e.z=a.z,e.heading=a.heading,this.applied=!0;else{let t=Math.max(n,0);e.x+=i.vx*t,e.z+=i.vz*t,e.heading=Kf(e.heading+this.yawRate*t);let r=1-Math.exp(-10*t);e.x+=(a.x-e.x)*r,e.y+=(a.y-e.y)*r,e.z+=(a.z-e.z)*r,e.heading=Kf(e.heading+Kf(a.heading-e.heading)*r)}e.vx=i.vx,e.vy=i.vy,e.vz=i.vz,e.steer=i.steer,e.onGround=i.onGround,e.boosting=i.boosting,e.drifting=i.drifting,e.fx.speed=i.fx.speed,e.fx.shield=i.fx.shield,e.fx.turbo=i.fx.turbo,e.nitro=i.nitro;let s=e.heading;if(e.forwardSpeed=e.vx*Math.sin(s)+e.vz*Math.cos(s),e.lateralSpeed=e.vx*Math.cos(s)-e.vz*Math.sin(s),e.odometer+=e.forwardSpeed*Math.max(n,0),r){let t=r.project(e.x,e.z,e.trackIndex,lh);e.trackIndex=t.index,e.s=t.s,e.lateral=t.lateral,e.tangentX=t.tx,e.tangentZ=t.tz}return!0}},dh={developer:`Mohammad Yusron Kholish, S.Kom`,school:`SMKS PGRI SINGOSARI`},fh=`Versi 1.2 · Multiplayer`,ph=[`#ef4444`,`#22d3ee`],Z={flag:`<svg viewBox="0 0 24 24"><path d="M5 3v18M5 4h12l-2 4 2 4H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 4h3v4H8zM11 8h3v4h-3z" fill="currentColor"/></svg>`,car:`<svg viewBox="0 0 24 24"><path d="M3 15l2-5 3-3h7l4 4 2 1v3h-2M3 15h2m13 0H9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7" cy="16" r="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="16" r="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,route:`<svg viewBox="0 0 24 24"><circle cx="6" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,cone:`<svg viewBox="0 0 24 24"><path d="M10 3h4l5 16H5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8.2 11h7.6M6.9 15h10.2M3 20h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,gear:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,book:`<svg viewBox="0 0 24 24"><path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z M12 6v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,play:`<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>`,retry:`<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,home:`<svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7M6 9v11h12V9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,arrow:`<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,back:`<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,check:`<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,trophy:`<svg viewBox="0 0 24 24"><path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8M9 18h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,duo:`<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9" r="2.4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 20c0-3.3 2.4-5.6 5.5-5.6s5.5 2.3 5.5 5.6M14.6 14.6c.7-.3 1.5-.5 2.4-.5 2.6 0 4.5 2 4.5 4.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,pad:`<svg viewBox="0 0 24 24"><path d="M7 7h10a5 5 0 0 1 4.8 6.4l-1.2 4a2.6 2.6 0 0 1-4.4 1L14.4 16H9.6l-1.8 2.4a2.6 2.6 0 0 1-4.4-1l-1.2-4A5 5 0 0 1 7 7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 10v4M6 12h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="11" r="1.1" fill="currentColor"/><circle cx="18" cy="13" r="1.1" fill="currentColor"/></svg>`,online:`<svg viewBox="0 0 24 24"><rect x="2" y="5" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M1 17h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="16.5" y="7" width="6" height="11" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19.5 15.5h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,wifi:`<svg viewBox="0 0 24 24"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 16a5 5 0 0 1 6.8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="19.3" r="1.4" fill="currentColor"/></svg>`,splitTB:`<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18" stroke="currentColor" stroke-width="2"/></svg>`,splitLR:`<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4v16" stroke="currentColor" stroke-width="2"/></svg>`},mh={mudah:`Mudah`,normal:`Normal`,sulit:`Sulit`},hh={otomatis:`Otomatis`,rendah:`Rendah`,sedang:`Sedang`,tinggi:`Tinggi`},gh={otomatis:`Otomatis`,selalu:`Selalu`,mati:`Mati`},_h={0:`Tanpa`,2:`2`,4:`4`},vh={"atas-bawah":`Atas–Bawah`,"kiri-kanan":`Kiri–Kanan`},yh={"atas-bawah":Z.splitTB,"kiri-kanan":Z.splitLR},bh=e=>`#`+qp[e].color.toString(16).padStart(6,`0`),xh=[{pick:`<kbd>A</kbd><kbd>D</kbd>`,drive:`<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> setir · <kbd>Spasi</kbd> drift · <kbd>Shift</kbd> kiri nitro · <kbd>R</kbd> reset`},{pick:`<kbd>←</kbd><kbd>→</kbd>`,drive:`<kbd>↑</kbd><kbd>←</kbd><kbd>↓</kbd><kbd>→</kbd> setir · <kbd>/</kbd> drift · <kbd>Shift</kbd> kanan nitro · <kbd>⌫</kbd> reset`}],Sh=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Ch=e=>Math.round(e*3.6),wh=(e,t=1)=>e.toLocaleString(`id-ID`,{minimumFractionDigits:t,maximumFractionDigits:t});function Th(e,t,n=``){return`<div class="stat"><span>${e}</span><i><b ${n?`data-stat="${n}"`:``} style="width:${t*10}%"></b></i></div>`}function Eh(e,t,n,{html:r=!1,label:i=``}={}){return`<div class="seg" role="radiogroup" data-seg="${e}"${i?` aria-label="${Sh(i)}"`:``}>${t.map(e=>`<button type="button" role="radio" data-val="${e}">${r?n[e]??e:Sh(n[e]??e)}</button>`).join(``)}</div>`}var Dh={ok:`●`};function Oh(e){try{let t=Dm(0,`M`);return t.addData(e),t.make(),t.createSvgTag({cellSize:4,margin:2,scalable:!0,alt:`QR kode gabung ruang`})}catch{return``}}function kh(e){let t=e+1,n=Jp.map(t=>`<button type="button" class="duo-thumb" data-duo-car="${e}:${t}" title="${qp[t].name}" aria-label="Pilih ${qp[t].name}" style="--car:${bh(t)}">
      <img data-thumb="${t}" alt="" width="320" height="180" /><span>${qp[t].name}</span></button>`).join(``);return`
    <article class="duo-card p${t}" data-duo-card="${e}" style="--pc:${ph[e]}">
      <div class="duo-head">
        <span class="duo-badge">P${t}</span>
        <label class="duo-name-wrap"><span>NAMA PEMAIN ${t}</span>
          <input class="duo-name" data-duo-name="${e}" maxlength="12" spellcheck="false" autocomplete="off" aria-label="Nama pemain ${t}" placeholder="${lm[e]}" />
        </label>
      </div>
      <div class="duo-carline">
        <button type="button" class="duo-arrow" data-duo-step="${e}:-1" aria-label="Mobil sebelumnya">${Z.back}</button>
        <div class="duo-carname" data-duo-carname="${e}"></div>
        <button type="button" class="duo-arrow" data-duo-step="${e}:1" aria-label="Mobil berikutnya">${Z.arrow}</button>
      </div>
      <em class="duo-tagline" data-duo-tagline="${e}"></em>
      <div class="duo-stats" data-duo-stats="${e}"></div>
      <div class="duo-thumbs">${n}</div>
      <p class="duo-keys"><span>${xh[e].pick} ganti mobil</span><span>${xh[e].drive}</span></p>
    </article>`}function Ah(e){let t=new yd(e),n=0,r=!1,i=0;for(let e=0;e<t.count;e++){let a=Math.abs(t.curvature[e]);i=Math.max(i,a);let o=a>1/80;o&&!r&&n++,r=o}let a=[];e.ramps?.length&&a.push(`${e.ramps.length} ramp`),e.bridge&&a.push(`jembatan`),e.portals?.length&&a.push(`${e.portals.length} portal`);let o=0;for(let e=0;e<t.count;e++)o=Math.max(o,t.y[e]);return o>1&&a.push(`tanjakan ${Math.round(o)} m`),{path:t,length:t.length,corners:n,minR:1/i,feats:a}}function jh(e,t,n){let r=e.getContext(`2d`),i=e.width,a=e.height,o={tropis:[`#0e7490`,`#155e75`],kota:[`#312e81`,`#0f172a`],gunung:[`#166534`,`#14532d`],gurun:[`#c2410c`,`#7c2d12`]}[t.theme.kind],s=r.createLinearGradient(0,0,i,a);s.addColorStop(0,o[0]),s.addColorStop(1,o[1]),r.fillStyle=s,r.fillRect(0,0,i,a);let c=n.path,l=c.bounds,u=Math.min((i-36)/(l.maxX-l.minX),(a-36)/(l.maxZ-l.minZ)),d=(i-(l.maxX-l.minX)*u)/2,f=(a-(l.maxZ-l.minZ)*u)/2;r.beginPath();for(let e=0;e<=c.count;e++){let t=e%c.count,n=d+(c.x[t]-l.minX)*u,i=f+(c.z[t]-l.minZ)*u;e===0?r.moveTo(n,i):r.lineTo(n,i)}r.lineJoin=`round`,r.strokeStyle=`rgba(2,6,23,0.6)`,r.lineWidth=10,r.stroke(),r.strokeStyle=`#f8fafc`,r.lineWidth=5,r.stroke();let p=c.frameAt(0);r.fillStyle=`#facc15`,r.beginPath(),r.arc(d+(p.x-l.minX)*u,f+(p.z-l.minZ)*u,6,0,Math.PI*2),r.fill()}var Q=new WeakSet,Mh=class{constructor(e,t,n){_d(this,Q),this.root=e,this.cb=n,this.settings=t,this.garageCar=t.car,this.trackInfo=Object.fromEntries(Zp.map(e=>[e,Ah(Xp[e])]));let r=Jp.map(e=>{let t=qp[e];return`<button class="car-card" data-car="${e}" style="--car:#${t.color.toString(16).padStart(6,`0`)}">
        <span class="thumb"><img data-thumb="${e}" alt="" width="320" height="180" /></span>
        <b>${t.name}</b><em>${Sh(t.tagline)}</em></button>`}).join(``),i=Zp.map(e=>{let t=Xp[e],n=this.trackInfo[e];return`<button class="track-card" data-track="${e}">
        <canvas width="320" height="180" data-track-thumb="${e}"></canvas>
        <b>${t.name}</b><em>${Sh(t.tagline)}</em>
        <small>${wh(n.length/1e3,2)} km · ${n.corners} tikungan${n.feats.length?` · `+n.feats.join(` · `):``}</small>
      </button>`}).join(``);e.innerHTML=`
      <section class="screen screen-main" data-screen="main">
        <div class="main-left">
          <div class="brand">
            <img class="brand-logo" src="${Em}" alt="Logo ${dh.school}" width="249" height="238" />
            <div class="logo-top"><span class="logo-main">SKANTRI</span><span class="logo-accent">RACE</span></div>
          </div>
          <div class="logo-bars">
            <div class="logo-sub">CHAMPIONS RACING</div>
            <div class="logo-tag">BALAP · TANTANG · TINGKATKAN · JADI JUARA</div>
          </div>
          <nav class="menu-list">
            <button class="menu-btn primary" data-action="race">${Z.flag}<span>MULAI BALAP</span>${Z.arrow}</button>
            <button class="menu-btn duo-btn" data-action="multi">${Z.duo}<span>MULTIPLAYER</span><em class="btn-tag">2 PEMAIN</em></button>
            <button class="menu-btn" data-action="garage">${Z.car}<span>PILIH MOBIL</span></button>
            <button class="menu-btn" data-action="tracks">${Z.route}<span>PILIH LINTASAN</span></button>
            <button class="menu-btn" data-action="practice">${Z.cone}<span>LATIHAN BEBAS</span></button>
            <button class="menu-btn" data-action="settings">${Z.gear}<span>PENGATURAN</span></button>
            <button class="menu-btn" data-action="help">${Z.book}<span>PETUNJUK</span></button>
          </nav>
          <div class="credit">
            <span>PENGEMBANG</span>
            <b>${dh.developer}</b>
            <em>${dh.school} · ${fh}</em>
          </div>
        </div>

        <aside class="info-card" data-info></aside>

        <div class="slogan"><span class="slogan-main">MANTAP</span><span class="slogan-sub">Mandiri Aktif Terampil dan Berprestasi</span></div>
      </section>

      <section class="screen screen-multi" data-screen="multi" hidden>
        <div class="modal multi">
          <h2>MULTIPLAYER</h2>
          <p class="multi-sub">Pilih cara bermain berdua:</p>
          <div class="multi-grid">
            <button class="multi-card primary" data-action="duo">
              ${Z.splitTB}
              <b>SATU LAYAR</b>
              <span>2 pemain di <strong>1 komputer</strong> — layar dibagi dua. Keyboard &amp; joystick. Tanpa internet.</span>
            </button>
            <button class="multi-card" data-action="online">
              ${Z.online}
              <b>DUA PERANGKAT</b>
              <span>Laptop A + laptop B / <strong>HP</strong> — masing-masing di layarnya sendiri. Gabung dengan <strong>kode ruang</strong> (butuh internet).</span>
            </button>
          </div>
          <button class="menu-btn small ghost" data-action="back">${Z.back}<span>KEMBALI</span></button>
        </div>
      </section>

      <section class="screen screen-online" data-screen="online" data-state="start" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="back">${Z.back}<span>KEMBALI</span></button>
          <h2>ONLINE</h2>
          <span class="duo-kicker">2 PERANGKAT · KODE RUANG</span>
        </header>
        <article class="duo-card net-me" data-net-me style="--pc:#facc15">
          <div class="duo-head">
            <span class="duo-badge is-long" data-net-me-badge>KAMU</span>
            <label class="duo-name-wrap"><span>NAMAMU</span>
              <input class="duo-name" data-net-name maxlength="12" spellcheck="false" autocomplete="off" aria-label="Namamu" placeholder="PEMAIN" />
            </label>
          </div>
          <div class="duo-carline">
            <button type="button" class="duo-arrow" data-net-step="-1" aria-label="Mobil sebelumnya">${Z.back}</button>
            <div class="duo-carname" data-net-carname></div>
            <button type="button" class="duo-arrow" data-net-step="1" aria-label="Mobil berikutnya">${Z.arrow}</button>
          </div>
          <em class="duo-tagline" data-net-tagline></em>
          <div class="duo-stats" data-net-stats></div>
          <div class="duo-thumbs">${Jp.map(e=>`<button type="button" class="duo-thumb" data-net-car="${e}" title="${qp[e].name}" aria-label="Pilih ${qp[e].name}" style="--car:${bh(e)}"><img data-thumb="${e}" alt="" width="320" height="180" /><span>${qp[e].name}</span></button>`).join(``)}</div>
          <p class="duo-keys"><span><kbd>←</kbd><kbd>→</kbd> ganti mobil</span><span>Kontrol balapan sama seperti mode 1 pemain: keyboard, joystick, atau tombol sentuh di HP.</span></p>
        </article>

        <div class="net-center">
          <div class="net-pane net-start">
            <button class="menu-btn primary" data-action="net-host">${Z.wifi}<span>BUAT RUANG</span>${Z.arrow}</button>
            <p class="net-or">atau gabung ke ruang teman:</p>
            <div class="net-join">
              <input class="net-code-input" data-net-code-input maxlength="4" spellcheck="false" autocomplete="off" autocapitalize="characters" inputmode="text" aria-label="Kode ruang" placeholder="KODE" />
              <button class="menu-btn" data-action="net-join">${Z.arrow}<span>GABUNG</span></button>
            </div>
            <p class="net-hint">Satu perangkat menekan <b>BUAT RUANG</b>, perangkat lain memasukkan kodenya (atau memindai QR dengan kamera HP).</p>
          </div>
          <div class="net-pane net-connecting">
            <div class="net-spinner" aria-hidden="true"></div>
            <p class="net-status" data-net-status></p>
            <button class="menu-btn small ghost" data-action="net-leave">${Z.back}<span>BATAL</span></button>
          </div>
          <div class="net-pane net-room">
            <div class="net-codebox">
              <div><span>KODE RUANG</span><b data-net-code></b></div>
              <div class="net-qr" data-net-qr title="Pindai dengan kamera HP untuk bergabung"></div>
            </div>
            <small class="net-url" data-net-url></small>
            <div class="net-opts host-only">
              <div class="duo-opt wide">
                <span class="duo-lbl">LINTASAN</span>
                <div class="duo-stepper">
                  <button type="button" class="duo-arrow" data-net-track-step="-1" aria-label="Lintasan sebelumnya">${Z.back}</button>
                  <b data-net-track></b>
                  <button type="button" class="duo-arrow" data-net-track-step="1" aria-label="Lintasan berikutnya">${Z.arrow}</button>
                </div>
              </div>
              <div class="duo-opt"><span class="duo-lbl">LAP</span>${Eh(`laps`,nm.map(String),{},{label:`Jumlah lap`})}</div>
              <div class="duo-opt"><span class="duo-lbl">LAWAN AI</span>${Eh(`netRivals`,sm.map(String),_h,{label:`Jumlah lawan AI`})}</div>
            </div>
            <p class="net-info guest-only" data-net-info></p>
            <button class="menu-btn primary host-only" data-action="net-start">${Z.flag}<span>MULAI</span>${Z.arrow}</button>
            <p class="net-wait" data-net-wait></p>
            <button class="menu-btn small ghost" data-action="net-leave">${Z.back}<span>KELUAR RUANG</span></button>
          </div>
          <p class="net-error" data-net-error role="alert"></p>
        </div>

        <article class="duo-card net-opp" data-net-opp style="--pc:#64748b">
          <div class="duo-head"><span class="duo-badge" data-net-opp-badge>LAWAN</span><div class="duo-name-wrap"><span>LAWAN</span><b class="net-opp-name" data-net-opp-name>—</b></div></div>
          <div class="net-opp-body" data-net-opp-body></div>
          <p class="net-ping" data-net-ping></p>
        </article>
      </section>

      <section class="screen screen-duo" data-screen="duo" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="back">${Z.back}<span>KEMBALI</span></button>
          <h2>2 PEMAIN</h2>
          <span class="duo-kicker">LAYAR TERBAGI · SATU KOMPUTER</span>
        </header>
        ${kh(0)}
        ${kh(1)}
        <div class="duo-center">
          <div class="duo-opt wide">
            <span class="duo-lbl">LINTASAN</span>
            <div class="duo-stepper">
              <button type="button" class="duo-arrow" data-duo-track-step="-1" aria-label="Lintasan sebelumnya">${Z.back}</button>
              <b data-duo-track></b>
              <button type="button" class="duo-arrow" data-duo-track-step="1" aria-label="Lintasan berikutnya">${Z.arrow}</button>
            </div>
          </div>
          <div class="duo-opt"><span class="duo-lbl">LAP</span>${Eh(`laps`,nm.map(String),{},{label:`Jumlah lap`})}</div>
          <div class="duo-opt"><span class="duo-lbl">LAWAN AI</span>${Eh(`duoRivals`,sm.map(String),_h,{label:`Jumlah lawan AI`})}</div>
          <div class="duo-opt wide"><span class="duo-lbl">TATA LAYAR</span>${Eh(`duoLayout`,cm,Object.fromEntries(cm.map(e=>[e,`${yh[e]}<span>${vh[e]}</span>`])),{html:!0,label:`Tata layar`})}</div>
          <button class="menu-btn primary duo-go" data-action="duo-start">${Z.flag}<span>MULAI</span>${Z.arrow}</button>
          <p class="duo-pad" data-duo-pad></p>
        </div>
      </section>

      <section class="screen screen-garage" data-screen="garage" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="garage-cancel">${Z.back}<span>KEMBALI</span></button>
          <h2>PILIH MOBIL</h2>
        </header>
        <div class="garage-panel" data-garage-panel></div>
        <div class="car-strip">${r}</div>
        <button class="menu-btn primary use-btn" data-action="garage-use">${Z.check}<span>GUNAKAN</span></button>
      </section>

      <section class="screen screen-tracks" data-screen="tracks" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="back">${Z.back}<span>KEMBALI</span></button>
          <h2>PILIH LINTASAN</h2>
        </header>
        <div class="track-grid">${i}</div>
        <p class="scr-note">Lintasan yang dipilih langsung tampil di latar belakang. Tekan <kbd>Esc</kbd> atau KEMBALI bila sudah.</p>
      </section>

      <section class="screen screen-settings" data-screen="settings" hidden>
        <div class="modal settings">
          <h2>PENGATURAN</h2>
          <div class="set-grid">
            <label>Tingkat kesulitan</label>${Eh(`difficulty`,Object.keys(em),mh)}
            <label>Jumlah lap</label>${Eh(`laps`,nm.map(String),Object.fromEntries(nm.map(e=>[String(e),`${e} lap`])))}
            <label>Kualitas grafis</label>${Eh(`quality`,am,hh)}
            <label>Tombol sentuh</label>${Eh(`touch`,om,gh)}
            <label for="set-volume">Volume suara <output data-vol-out></output></label>
            <input id="set-volume" type="range" min="0" max="100" step="5" data-volume />
            <label for="set-fps">Tampilkan FPS</label>
            <label class="switch"><input id="set-fps" type="checkbox" data-fps /><span></span></label>
          </div>
          <p class="set-note" data-set-note></p>
          <button class="menu-btn primary small" data-action="back">${Z.check}<span>SELESAI</span></button>
        </div>
      </section>

      <section class="screen screen-help" data-screen="help" hidden>
        <div class="modal help">
          <h2>PETUNJUK</h2>
          <div class="help-cols">
            <div class="help-grid">
              <div><kbd>W</kbd> / <kbd>↑</kbd></div><div>Gas</div>
              <div><kbd>S</kbd> / <kbd>↓</kbd></div><div>Rem · tahan saat berhenti untuk mundur</div>
              <div><kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd></div><div>Belok kiri / kanan</div>
              <div><kbd>Spasi</kbd></div><div>Rem tangan untuk drift (mengisi nitro)</div>
              <div><kbd>Shift</kbd></div><div>Nitro</div>
              <div><kbd>R</kbd></div><div>Kembalikan mobil ke tengah jalan</div>
              <div><kbd>M</kbd></div><div>Bisukan / bunyikan suara</div>
              <div><kbd>Esc</kbd> / <kbd>P</kbd></div><div>Jeda</div>
            </div>
            <div>
              <ul class="help-tips">
                <li><b>Balapan:</b> lawan ${$p.length} pembalap komputer, mulai dari barisan paling belakang. Tunggu lampu hijau.</li>
                <li>Satu lap sah bila melewati 3 checkpoint lalu garis START/FINIS.</li>
                <li><b>Menang</b> = finis posisi 1. Setelah pemenang finis, sisa waktumu 60 detik.</li>
                <li><b>Nitro</b> terisi pelan sendiri dan lebih cepat saat drift.</li>
              </ul>
              <ul class="help-items">
                <li><i class="it it-speed"></i><b>${Hf.speed.name}</b> dorongan kecepatan + kecepatan maks naik ${Hf.speed.duration} dtk</li>
                <li><i class="it it-shield"></i><b>${Hf.shield.name}</b> ${Hf.shield.duration} dtk tidak melambat saat menabrak; lawan terpental</li>
                <li><i class="it it-turbo"></i><b>${Hf.turbo.name}</b> lewati cincinnya: akselerasi ×${wh(Hf.turbo.accelMult)} selama ${Hf.turbo.duration} dtk</li>
                <li class="muted">Item muncul lagi beberapa detik setelah diambil. Item sejenis tidak bisa diambil lagi sampai cooldown-mu habis.</li>
              </ul>
            </div>
          </div>
          <div class="help-duo">
            <h3>${Z.duo}<span>MODE 2 PEMAIN · LAYAR TERBAGI</span></h3>
            <div class="help-duo-grid">
              <div><b class="p1">PEMAIN 1</b>${xh[0].drive}</div>
              <div><b class="p2">PEMAIN 2</b>${xh[1].drive}</div>
              <div class="muted">${Z.pad}<span>Gamepad: RT/A gas · LT/X rem · stik kiri belok · B/RB nitro · LB/Y drift · Start jeda. Satu gamepad otomatis dipakai PEMAIN 2 (bisa ditukar di lobi).</span></div>
            </div>
            <h3 class="help-online">${Z.online}<span>MODE ONLINE · 2 PERANGKAT</span></h3>
            <ul class="help-tips">
              <li>Perangkat A: <b>MULTIPLAYER → DUA PERANGKAT → BUAT RUANG</b>. Muncul kode 4 huruf &amp; QR.</li>
              <li>Perangkat B (laptop/HP): masukkan kodenya lalu <b>GABUNG</b>, atau pindai QR dengan kamera HP.</li>
              <li>Host memilih lintasan, lap, dan lawan AI, lalu menekan <b>MULAI</b>. Kedua perangkat butuh internet; jangan pindah tab saat balapan.</li>
            </ul>
          </div>
          <div class="modal-foot">
            <button class="menu-btn primary small" data-action="back">${Z.arrow}<span>KEMBALI</span></button>
            <p class="help-credit"><img src="${Em}" alt="" width="249" height="238" /><span>Pengembang: <b>${dh.developer}</b><br />${dh.school}</span></p>
          </div>
        </div>
      </section>

      <section class="screen screen-pause" data-screen="pause" hidden>
        <div class="modal pause">
          <h2>JEDA</h2>
          <button class="menu-btn primary" data-action="resume">${Z.play}<span>LANJUTKAN</span></button>
          <button class="menu-btn" data-action="restart">${Z.retry}<span>ULANGI DARI START</span></button>
          <button class="menu-btn" data-action="menu">${Z.home}<span>MENU UTAMA</span></button>
        </div>
      </section>

      <section class="screen screen-pause" data-screen="netpause" hidden>
        <div class="modal pause">
          <h2>MENU</h2>
          <p class="net-pause-note">Balapan online tidak bisa dijeda — mobilmu tetap di lintasan.</p>
          <button class="menu-btn primary" data-action="net-resume">${Z.play}<span>LANJUTKAN</span></button>
          <button class="menu-btn" data-action="menu">${Z.home}<span>KELUAR KE MENU UTAMA</span></button>
        </div>
      </section>

      <section class="screen screen-results" data-screen="results" hidden>
        <div class="modal results" data-result-tone>
          <div class="res-head">
            <div class="res-icon" data-res-icon>${Z.trophy}</div>
            <div>
              <div class="res-kicker" data-res-kicker>HASIL BALAPAN</div>
              <h2 class="res-title" data-res-title>MENANG!</h2>
              <p class="res-sub" data-res-sub></p>
            </div>
          </div>
          <div class="res-table-wrap">
            <table class="res-table">
              <thead><tr><th>POS</th><th>PEMBALAP</th><th>MOBIL</th><th>WAKTU</th><th>LAP TERBAIK</th></tr></thead>
              <tbody data-res-body></tbody>
            </table>
          </div>
          <p class="res-net-note" data-res-net-note hidden></p>
          <div class="res-actions">
            <button class="menu-btn primary" data-action="restart">${Z.retry}<span>MAIN LAGI</span></button>
            <button class="menu-btn" data-action="net-tolobby" hidden>${Z.wifi}<span>LOBI ONLINE</span></button>
            <button class="menu-btn" data-action="menu">${Z.home}<span>MENU UTAMA</span></button>
          </div>
        </div>
      </section>
    `,this.screens=Object.fromEntries([...e.querySelectorAll(`[data-screen]`)].map(e=>[e.dataset.screen,e])),this.res={box:e.querySelector(`[data-result-tone]`),icon:e.querySelector(`[data-res-icon]`),kicker:e.querySelector(`[data-res-kicker]`),title:e.querySelector(`[data-res-title]`),sub:e.querySelector(`[data-res-sub]`),body:e.querySelector(`[data-res-body]`),netNote:e.querySelector(`[data-res-net-note]`),restart:e.querySelector(`[data-screen="results"] [data-action="restart"]`),lobby:e.querySelector(`[data-screen="results"] [data-action="net-tolobby"]`),menu:e.querySelector(`[data-screen="results"] [data-action="menu"]`)};for(let t of Zp)jh(e.querySelector(`[data-track-thumb="${t}"]`),Xp[t],this.trackInfo[t]);e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-duo-car]`);if(t){let[e,n]=t.dataset.duoCar.split(`:`);return Y(Q,this,Hh).call(this,Number(e),n)}let n=e.target.closest(`[data-duo-step]`);if(n){let[e,t]=n.dataset.duoStep.split(`:`);return Y(Q,this,Vh).call(this,Number(e),Number(t))}let r=e.target.closest(`[data-duo-track-step]`);if(r)return Y(Q,this,Uh).call(this,Number(r.dataset.duoTrackStep));let i=e.target.closest(`[data-net-car]`);if(i)return Y(Q,this,Lh).call(this,i.dataset.netCar);let a=e.target.closest(`[data-net-step]`);if(a)return Y(Q,this,Ih).call(this,Number(a.dataset.netStep));let o=e.target.closest(`[data-net-track-step]`);if(o)return Y(Q,this,Uh).call(this,Number(o.dataset.netTrackStep)),this.cb.onNetLobby?.(),Y(Q,this,Bh).call(this);let s=e.target.closest(`[data-car]`);if(s)return Y(Q,this,qh).call(this,s.dataset.car);let c=e.target.closest(`[data-track]`);if(c)return Y(Q,this,Yh).call(this,c.dataset.track);let l=e.target.closest(`[data-seg] [data-val]`);if(l)return Y(Q,this,Zh).call(this,l.parentElement.dataset.seg,l.dataset.val);let u=e.target.closest(`[data-action]`);u&&(u.blur(),Y(Q,this,Nh).call(this,u.dataset.action))}),e.querySelector(`[data-volume]`).addEventListener(`input`,e=>Y(Q,this,Zh).call(this,`volume`,Number(e.target.value))),e.querySelector(`[data-fps]`).addEventListener(`change`,e=>Y(Q,this,Zh).call(this,`showFps`,e.target.checked)),e.querySelectorAll(`[data-duo-name]`).forEach(e=>{e.addEventListener(`input`,()=>{let t=e.selectionStart??e.value.length,n=e.value.toUpperCase().replace(/[^A-Z0-9 .\-]/g,``).slice(0,12);if(n!==e.value){e.value=n;let r=Math.min(t,n.length);e.setSelectionRange(r,r)}}),e.addEventListener(`change`,()=>Y(Q,this,Wh).call(this))});let a=e.querySelector(`[data-net-name]`);a.addEventListener(`input`,()=>{let e=a.selectionStart??a.value.length,t=a.value.toUpperCase().replace(/[^A-Z0-9 .\-]/g,``).slice(0,12);t!==a.value&&(a.value=t,a.setSelectionRange(Math.min(e,t.length),Math.min(e,t.length)))}),a.addEventListener(`change`,()=>Y(Q,this,Rh).call(this));let o=e.querySelector(`[data-net-code-input]`);o.addEventListener(`input`,()=>{let e=Ym(o.value);e!==o.value&&(o.value=e)}),window.addEventListener(`keydown`,e=>Y(Q,this,Ph).call(this,e)),Y(Q,this,Fh).call(this),Y(Q,this,Qh).call(this),Y(Q,this,Xh).call(this)}back(){return this.current===`garage`?(Y(Q,this,Nh).call(this,`garage-cancel`),!0):[`tracks`,`settings`,`help`,`duo`,`multi`,`online`].includes(this.current)?(Y(Q,this,Nh).call(this,`back`),!0):!1}padNav(e){if(this.root.hidden)return!1;if(this.current===`duo`){if(e.button===`left`||e.button===`right`)return Y(Q,this,Vh).call(this,e.player,e.button===`left`?-1:1),!0;if(e.button===`start`||e.button===`a`)return Y(Q,this,Nh).call(this,`duo-start`),!0;if(e.button===`b`||e.button===`back`)return this.back()}return this.current===`results`&&(e.button===`start`||e.button===`a`)&&(Y(Q,this,Nh).call(this,`restart`),!0)}show(e){this.root.hidden=!1;for(let[t,n]of Object.entries(this.screens))n.hidden=t!==e;this.current=e,this.root.dataset.current=e,(this.screens[e]?.querySelector(`.primary`))?.focus({preventScroll:!0})}hide(){this.root.hidden=!0,this.current=null,document.activeElement instanceof HTMLElement&&document.activeElement.blur()}openOnline(e=``){this.cb.onScreen?.(`online`),this.show(`online`),e&&(this.root.querySelector(`[data-net-code-input]`).value=Ym(e)),Y(Q,this,Bh).call(this)}setOnlineView(e){this.netView=e,this.current===`online`&&Y(Q,this,Bh).call(this)}setOnlinePing(e,t){let n=this.root.querySelector(`[data-net-ping]`);if(!this.netView?.opp)return n.textContent=``;n.textContent=t?`${Dh.ok} Tersambung${e==null?``:` · ${e} ms`}`:`Koneksi terputus`,n.classList.toggle(`bad`,!t||(e??0)>250)}setCarThumbs(e){for(let[t,n]of Object.entries(e))this.root.querySelectorAll(`[data-thumb="${t}"]`).forEach(e=>e.src=n)}setPadStatus(e,t){let n=`${e}|${t.join(`,`)}|${this.settings.duoPadSwap}`;n!==this.padKey&&(this.padKey=n,this.padInfo={count:e,owners:[...t]},Y(Q,this,Kh).call(this))}setQualityNote(e){this.qualityNote=e,Y(Q,this,Qh).call(this)}showResults(e,t){let n=this.res,r,i,a,o;e.dnf?(r=`lose`,i=`TIDAK FINIS`,a=`KALAH`,o=`Waktu habis sebelum kamu menyelesaikan semua lap. Coba lagi!`):e.position===1?(r=`win`,i=`JUARA 1`,a=`MENANG!`,o=`Selamat! Kamu finis pertama dengan waktu ${jd(e.finishTime)}.`):e.position<=3?(r=`podium`,i=`JUARA ${e.position}`,a=`PODIUM!`,o=`Finis di posisi ${e.position} dari ${t}. Sedikit lagi menuju juara 1!`):(r=`lose`,i=`POSISI ${e.position} DARI ${t}`,a=`KALAH`,o=`Belum masuk podium. Coba pakai nitro di lurusan dan ambil item di jalur!`),delete n.box.dataset.duo,Y(Q,this,$h).call(this,null),n.box.dataset.resultTone=r,n.icon.innerHTML=r===`lose`?Z.flag:Z.trophy,n.kicker.textContent=i,n.title.textContent=a,n.sub.textContent=o,this.result={tone:r,position:e.position,dnf:e.dnf},this.show(`results`)}showDuoResults(e,t,n={}){let r=this.res;Y(Q,this,$h).call(this,n.online??null);let[i,a]=e,o=e=>e.racer.dnf?1/0:e.racer.position,s=o(i)<o(a)?1:o(a)<o(i)?2:0,c=e=>e.racer.dnf?`tidak finis`:`posisi ${e.racer.position}`,l,u,d,f;if(!s)l=`lose`,u=`TIDAK FINIS`,d=`SERI`,f=`Kedua pemain kehabisan waktu sebelum finis. Coba lagi!`;else{let r=e[s-1],i=e[2-s];if(l=`win`,u=r.racer.position===1?`JUARA 1 · MENANG DUEL`:`MENANG DUEL`,d=`${r.name} MENANG!`,n.me){let e=r.racer===n.me;u=e?`KAMU MENANG DUEL`:`LAWAN MENANG DUEL`,e||(l=`lose`)}f=`${r.name} ${c(r)} · ${i.name} ${c(i)} (dari ${t} pembalap).`}r.box.dataset.duo=`1`,r.box.dataset.resultTone=l,r.box.style.setProperty(`--win`,s?ph[s-1]:`var(--red)`),r.icon.innerHTML=l===`lose`?Z.flag:Z.trophy,r.kicker.textContent=u,r.title.textContent=d,r.sub.textContent=f,this.result={tone:l,duo:!0,online:n.online??null,winner:s,positions:[i.racer.position,a.racer.position],dnf:[i.racer.dnf,a.racer.dnf]},this.show(`results`)}updateResults(e,t,n=!1,r=null){let i=e.map(e=>{let i;i=e.dnf?`<span class="muted">TIDAK FINIS</span>`:e.finished?jd(e.finishTime):`<span class="muted">Lap ${Math.min(e.lap,t)}/${t}…</span>`;let a=e.isPlayer?` <em>(${r&&e===r?`KAMU`:n?`P${e.playerIndex}`:`KAMU`})</em>`:``;return`<tr class="${(r?e===r:e.isPlayer)?`me`:``}"><td class="pos">${e.position}</td><td><i style="background:${e.color}"></i>${Sh(e.name)}${a}</td><td class="car">${Sh(e.carName??``)}</td><td class="mono">${i}</td><td class="mono">${jd(e.bestLap)}</td></tr>`}).join(``);i!==this.lastResultsHtml&&(this.lastResultsHtml=i,this.res.body.innerHTML=i)}};function Nh(e){let t=this.cb;switch(e){case`race`:return t.onRace?.();case`multi`:return this.show(`multi`);case`online`:return t.onScreen?.(`online`),this.show(`online`),Y(Q,this,Bh).call(this);case`net-host`:return Y(Q,this,Rh).call(this),t.onNetHost?.();case`net-join`:return Y(Q,this,Rh).call(this),t.onNetJoin?.(this.root.querySelector(`[data-net-code-input]`).value);case`net-leave`:return t.onNetLeave?.();case`net-start`:return Y(Q,this,Rh).call(this),t.onNetStart?.();case`net-resume`:return t.onNetResume?.();case`net-tolobby`:return t.onNetToLobby?.();case`duo`:return Y(Q,this,Qh).call(this),Y(Q,this,Gh).call(this),t.onScreen?.(`duo`),this.show(`duo`);case`duo-start`:return Y(Q,this,Wh).call(this),t.onDuoStart?.();case`duo-pad-swap`:return this.settings.duoPadSwap=!this.settings.duoPadSwap,this.padKey=null,t.onSettings?.(this.settings,`duoPadSwap`);case`practice`:return t.onPractice?.();case`garage`:return this.garageCar=this.settings.car,Y(Q,this,Jh).call(this),t.onScreen?.(`garage`),this.show(`garage`);case`garage-use`:return t.onConfirmCar?.(this.garageCar),Y(Q,this,Fh).call(this),t.onScreen?.(`main`),this.show(`main`);case`garage-cancel`:return t.onCancelCar?.(),t.onScreen?.(`main`),this.show(`main`);case`tracks`:return Y(Q,this,Xh).call(this),t.onScreen?.(`tracks`),this.show(`tracks`);case`settings`:return Y(Q,this,Qh).call(this),this.show(`settings`);case`help`:return this.show(`help`);case`back`:return this.current===`online`&&t.onNetLeave?.(),Y(Q,this,Fh).call(this),t.onScreen?.(`main`),this.show(`main`);case`resume`:return t.onResume?.();case`restart`:return t.onRestart?.();case`menu`:return t.onMenu?.()}}function Ph(e){if(!this.root.hidden){if(this.current===`online`){if(e.target?.tagName===`INPUT`){e.code===`Enter`||e.code===`NumpadEnter`?(e.preventDefault(),e.target.matches(`[data-net-code-input]`)?Y(Q,this,Nh).call(this,`net-join`):e.target.blur()):e.code===`Escape`&&(e.preventDefault(),e.target.blur());return}let t={KeyA:-1,ArrowLeft:-1,KeyD:1,ArrowRight:1}[e.code];t?(e.preventDefault(),Y(Q,this,Ih).call(this,t)):(e.code===`Enter`||e.code===`NumpadEnter`)&&this.netView?.role===`host`&&this.netView?.opp&&(e.preventDefault(),Y(Q,this,Nh).call(this,`net-start`))}else if(this.current===`duo`){if(e.target?.tagName===`INPUT`){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Escape`)&&(e.preventDefault(),e.target.blur());return}let t={KeyA:[0,-1],KeyD:[0,1],ArrowLeft:[1,-1],ArrowRight:[1,1]}[e.code];t?(e.preventDefault(),Y(Q,this,Vh).call(this,t[0],t[1])):(e.code===`Enter`||e.code===`NumpadEnter`)&&(e.preventDefault(),Y(Q,this,Nh).call(this,`duo-start`))}else if(this.current===`garage`&&(e.code===`ArrowLeft`||e.code===`ArrowRight`)){let t=Jp.indexOf(this.garageCar),n=Jp.length;Y(Q,this,qh).call(this,Jp[(t+(e.code===`ArrowRight`?1:n-1))%n]),e.preventDefault()}else if(this.current===`tracks`&&(e.code===`ArrowLeft`||e.code===`ArrowRight`)){let t=Zp.indexOf(this.settings.track),n=Zp.length;Y(Q,this,Yh).call(this,Zp[(t+(e.code===`ArrowRight`?1:n-1))%n]),e.preventDefault()}else(e.code===`Enter`||e.code===`NumpadEnter`)&&(this.current===`garage`||this.current===`tracks`)&&(e.preventDefault(),Y(Q,this,Nh).call(this,this.current===`garage`?`garage-use`:`back`))}}function Fh(){let e=qp[this.settings.car],t=Xp[this.settings.track],n=this.trackInfo[this.settings.track];this.root.querySelector(`[data-info]`).innerHTML=`
      <div class="info-head"><span>MOBIL</span><b>${e.name}</b><em>${Sh(e.tagline)}</em></div>
      ${Th(`KECEPATAN`,e.stats.speed)}
      ${Th(`AKSELERASI`,e.stats.accel)}
      ${Th(`HANDLING`,e.stats.handling)}
      ${Th(`NITRO`,e.stats.nitro)}
      <div class="info-head track"><span>LINTASAN</span><b>${t.name.toUpperCase()}</b><em>${wh(n.length/1e3,2)} km · ${this.settings.laps} lap · ${$p.length} lawan · ${mh[this.settings.difficulty]}</em></div>`}function Ih(e){let t=Jp.length,n=Jp.indexOf(this.settings.car);Y(Q,this,Lh).call(this,Jp[(n+e+t)%t])}function Lh(e){qp[e]&&(this.settings.car=e,this.cb.onNetProfile?.(),Y(Q,this,Fh).call(this),Y(Q,this,Bh).call(this))}function Rh(){let e=this.root.querySelector(`[data-net-name]`),t=um(e.value,`PEMAIN`);e.value=t,this.settings.netName!==t&&(this.settings.netName=t,this.cb.onNetProfile?.())}function zh(e){let t=qp[e];return`<div class="duo-carname" style="--car:${bh(e)}">${t.name}</div><em class="duo-tagline">${Sh(t.tagline)}</em>
      <div class="duo-stats">${Th(`KECEPATAN`,t.stats.speed)}${Th(`AKSELERASI`,t.stats.accel)}${Th(`HANDLING`,t.stats.handling)}${Th(`NITRO`,t.stats.nitro)}</div>`}function Bh(){let e=this.netView??{state:`start`,role:null,me:{name:this.settings.netName,car:this.settings.car}},t=this.screens.online;t.dataset.state=e.state,t.dataset.role=e.role??`none`;let n=e=>t.querySelector(e),r=e.role===`guest`?ph[1]:e.role===`host`?ph[0]:`#facc15`,i=n(`[data-net-me]`);i.style.setProperty(`--pc`,r);let a=n(`[data-net-me-badge]`);a.textContent=e.role===`host`?`P1`:e.role===`guest`?`P2`:`KAMU`,a.classList.toggle(`is-long`,a.textContent.length>2);let o=n(`[data-net-name]`);document.activeElement!==o&&(o.value=this.settings.netName);let s=qp[this.settings.car];i.style.setProperty(`--car`,bh(this.settings.car)),n(`[data-net-carname]`).textContent=s.name,n(`[data-net-tagline]`).textContent=s.tagline,n(`[data-net-stats]`).innerHTML=Th(`KECEPATAN`,s.stats.speed)+Th(`AKSELERASI`,s.stats.accel)+Th(`HANDLING`,s.stats.handling)+Th(`NITRO`,s.stats.nitro),t.querySelectorAll(`[data-net-car]`).forEach(e=>{let t=e.dataset.netCar===this.settings.car;e.classList.toggle(`sel`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)});let c=n(`[data-net-opp]`),l=e.role===`guest`?ph[0]:ph[1];c.style.setProperty(`--pc`,e.opp?l:`#64748b`),n(`[data-net-opp-badge]`).textContent=e.opp?e.role===`guest`?`P1`:`P2`:`?`,n(`[data-net-opp-name]`).textContent=e.opp?e.opp.name:`—`,n(`[data-net-opp-body]`).innerHTML=e.opp?Y(Q,this,zh).call(this,e.opp.car):`<p class="net-waiting">${e.state===`room`&&e.role===`host`?`Menunggu lawan bergabung…<br /><small>Bagikan kode atau QR di tengah.</small>`:`Belum ada lawan.`}</p>`,e.opp||(n(`[data-net-ping]`).textContent=``),n(`[data-net-status]`).textContent=e.status||(e.role===`guest`?`Menyambung…`:`Membuat ruang…`),n(`[data-net-code]`).textContent=e.code??``,n(`[data-net-url]`).textContent=e.role===`host`&&e.joinUrl?e.joinUrl:``;let u=n(`[data-net-qr]`),d=e.role===`host`?e.joinUrl:``;u.dataset.key!==d&&(u.dataset.key=d,u.innerHTML=d?Oh(d):``);let f=e.lobby;e.role===`host`&&(n(`[data-net-track]`).textContent=Xp[this.settings.track].name),n(`[data-net-info]`).innerHTML=f?`<span>LINTASAN</span><b>${Sh(Xp[f.track]?.name??``)}</b><span>${f.laps} lap · ${f.rivals?`${f.rivals} lawan AI`:`tanpa AI`}</span>`:``;let p=n(`[data-action="net-start"]`);p.disabled=!(e.opp&&e.connected),n(`[data-net-wait]`).textContent=e.state===`room`?e.role===`host`?e.opp?`Lawan siap. Tekan MULAI!`:`Menunggu lawan bergabung…`:`Menunggu host menekan MULAI…`:``;let m=n(`[data-net-error]`);m.textContent=e.error||``,m.hidden=!e.error}function Vh(e,t){let n=Jp.length,r=Jp.indexOf(this.settings.duoCars[e]);Y(Q,this,Hh).call(this,e,Jp[(r+t+n)%n])}function Hh(e,t){!qp[t]||e!==0&&e!==1||(this.settings.duoCars[e]=t,this.cb.onDuoCar?.(e,t),Y(Q,this,Gh).call(this))}function Uh(e){let t=Zp.length,n=Zp.indexOf(this.settings.track);Y(Q,this,Yh).call(this,Zp[(n+e+t)%t]),Y(Q,this,Gh).call(this)}function Wh(){let e=!1;this.root.querySelectorAll(`[data-duo-name]`).forEach(t=>{let n=Number(t.dataset.duoName),r=um(t.value,lm[n]);t.value=r,this.settings.duoNames[n]!==r&&(this.settings.duoNames[n]=r,e=!0)}),e&&this.cb.onSettings?.(this.settings,`duoNames`)}function Gh(){let e=this.settings;for(let t of[0,1]){let n=e.duoCars[t],r=qp[n],i=this.root.querySelector(`[data-duo-card="${t}"]`);i.style.setProperty(`--car`,bh(n)),i.querySelector(`[data-duo-carname]`).textContent=r.name,i.querySelector(`[data-duo-tagline]`).textContent=r.tagline,i.querySelector(`[data-duo-stats]`).innerHTML=Th(`KECEPATAN`,r.stats.speed)+Th(`AKSELERASI`,r.stats.accel)+Th(`HANDLING`,r.stats.handling)+Th(`NITRO`,r.stats.nitro),i.querySelectorAll(`[data-duo-car]`).forEach(e=>{let r=e.dataset.duoCar===`${t}:${n}`;e.classList.toggle(`sel`,r),e.setAttribute(`aria-pressed`,r?`true`:`false`)});let a=i.querySelector(`[data-duo-name]`);document.activeElement!==a&&(a.value=e.duoNames[t])}this.root.querySelector(`[data-duo-track]`).textContent=Xp[e.track].name,Y(Q,this,Kh).call(this)}function Kh(){let e=this.root.querySelector(`[data-duo-pad]`),{count:t=0,owners:n=[]}=this.padInfo??{};if(!t){e.innerHTML=`${Z.pad}<span>Gamepad: tidak terdeteksi — sambungkan lalu tekan salah satu tombolnya.</span>`;return}let r=n.map((e,t)=>e<0?``:`Gamepad ${t+1} → <b style="color:${ph[e]}">${Sh(this.settings.duoNames[e])}</b>`).filter(Boolean).join(` · `);e.innerHTML=`${Z.pad}<span>${r}</span><button type="button" class="duo-swap" data-action="duo-pad-swap">TUKAR</button>`}function qh(e){this.garageCar=e,Y(Q,this,Jh).call(this),this.cb.onPreviewCar?.(e)}function Jh(){let e=qp[this.garageCar],t=e.physics;this.root.querySelectorAll(`[data-car]`).forEach(e=>{e.classList.toggle(`sel`,e.dataset.car===this.garageCar),e.classList.toggle(`current`,e.dataset.car===this.settings.car)}),this.root.querySelector(`[data-garage-panel]`).innerHTML=`
      <div class="g-name" style="--car:#${e.color.toString(16).padStart(6,`0`)}">${e.name}</div>
      <em class="g-tag">${Sh(e.tagline)}</em>
      ${Th(`KECEPATAN`,e.stats.speed)}
      ${Th(`AKSELERASI`,e.stats.accel)}
      ${Th(`HANDLING`,e.stats.handling)}
      ${Th(`NITRO`,e.stats.nitro)}
      <dl class="g-specs">
        <div><dt>Kecepatan maks</dt><dd>${Ch(t.maxSpeed)} km/j</dd></div>
        <div><dt>Dengan nitro</dt><dd>${Ch(t.maxSpeed+t.nitro.boostSpeed)} km/j</dd></div>
        <div><dt>Tangki nitro</dt><dd>${wh(1/t.nitro.drain)} dtk</dd></div>
        <div><dt>Bobot</dt><dd>${t.mass>=1.2?`Berat`:t.mass<1?`Ringan`:`Sedang`}</dd></div>
      </dl>
      <p class="g-hint"><kbd>←</kbd> <kbd>→</kbd> ganti mobil · <kbd>Enter</kbd> gunakan</p>`}function Yh(e){this.settings.track!==e&&(this.settings.track=e,this.cb.onSelectTrack?.(e)),Y(Q,this,Xh).call(this)}function Xh(){this.root.querySelectorAll(`[data-track]`).forEach(e=>{let t=e.dataset.track===this.settings.track;e.classList.toggle(`sel`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)})}function Zh(e,t){(e===`laps`||e===`duoRivals`||e===`netRivals`)&&(t=Number(t)),this.settings[e]=t,this.cb.onSettings?.(this.settings,e),Y(Q,this,Qh).call(this),Y(Q,this,Fh).call(this),this.current===`online`&&(e===`laps`||e===`netRivals`)&&(this.cb.onNetLobby?.(),Y(Q,this,Bh).call(this))}function Qh(){let e=this.settings;this.root.querySelectorAll(`[data-seg]`).forEach(t=>{let n=String(e[t.dataset.seg]);t.querySelectorAll(`[data-val]`).forEach(e=>{let t=e.dataset.val===n;e.classList.toggle(`on`,t),e.setAttribute(`aria-checked`,t?`true`:`false`)})});let t=this.root.querySelector(`[data-volume]`);t.value=e.volume,this.root.querySelector(`[data-vol-out]`).textContent=`${e.volume}%`,this.root.querySelector(`[data-fps]`).checked=e.showFps,this.root.querySelector(`[data-set-note]`).textContent=(this.qualityNote?this.qualityNote+` `:``)+`Pengaturan tersimpan otomatis di browser ini. Kesulitan & jumlah lap berlaku mulai balapan berikutnya.`}function $h(e){let t=this.res;t.restart.hidden=e===`guest`,t.lobby.hidden=e!==`host`,t.netNote.hidden=e!==`guest`,t.netNote.textContent=e===`guest`?`Menunggu host memilih MAIN LAGI atau LOBI ONLINE…`:``,t.menu.querySelector(`span`).textContent=e?`KELUAR RUANG`:`MENU UTAMA`}var eg={left:`<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,right:`<svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,pause:`<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>`},tg=new WeakSet,ng=class{constructor(e,t,{onPause:n}){_d(this,tg),this.root=e,this.input=t,e.innerHTML=`
      <div class="tc-steer">
        <button class="tc-btn tc-round" data-act="left" aria-label="Belok kiri">${eg.left}</button>
        <button class="tc-btn tc-round" data-act="right" aria-label="Belok kanan">${eg.right}</button>
      </div>
      <div class="tc-pedals">
        <button class="tc-btn tc-small tc-drift" data-act="handbrake" aria-label="Drift">DRIFT</button>
        <button class="tc-btn tc-small tc-nitro" data-act="nitro" aria-label="Nitro">NITRO</button>
        <button class="tc-btn tc-brake" data-act="brake" aria-label="Rem">REM</button>
        <button class="tc-btn tc-gas" data-act="accelerate" aria-label="Gas">GAS</button>
      </div>
      <button class="tc-btn tc-pause" data-act="pause" aria-label="Jeda">${eg.pause}</button>
    `,this.pointers=new Map;let r=e=>{let t=e.target.closest(`[data-act]`);if(!t)return;e.preventDefault();let r=t.dataset.act;if(r===`pause`)n?.();else{try{t.setPointerCapture(e.pointerId)}catch{}this.pointers.set(e.pointerId,{act:r,btn:t}),Y(tg,this,rg).call(this)}},i=e=>{this.pointers.has(e.pointerId)&&(this.pointers.delete(e.pointerId),Y(tg,this,rg).call(this))};e.addEventListener(`pointerdown`,r),e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),e.addEventListener(`lostpointercapture`,i),e.addEventListener(`contextmenu`,e=>e.preventDefault()),this.enabled=!1}setEnabled(e){this.enabled=e,this.root.hidden=!e,document.body.classList.toggle(`touch-mode`,e)}release(){this.pointers.clear(),Y(tg,this,rg).call(this)}};function rg(){let e=new Set([...this.pointers.values()].map(e=>e.act));for(let t of[`left`,`right`,`accelerate`,`brake`,`nitro`,`handbrake`])this.input.setVirtual(t,e.has(t));this.root.querySelectorAll(`[data-act]`).forEach(t=>t.classList.toggle(`on`,e.has(t.dataset.act)))}var ig=new WeakSet,ag=class{constructor(e){_d(this,ig),this.canvas=document.createElement(`canvas`),this.canvas.className=`speed-lines`,this.canvas.setAttribute(`aria-hidden`,`true`),e.appendChild(this.canvas),this.ctx=this.canvas.getContext(`2d`),this.intensity=0,this.rect=null,this.lines=Array.from({length:70},()=>Y(ig,this,og).call(this,Math.random())),this.resize()}setRect(e){this.rect=e?{...e}:null;let t=this.canvas.style;e?(t.left=`${e.x}px`,t.top=`${e.y}px`,t.width=`${e.w}px`,t.height=`${e.h}px`):t.left=t.top=t.width=t.height=``,this.resize()}setVisible(e){this.canvas.hidden=!e,e||(this.intensity=0,this.canvas.style.opacity=`0`)}resize(){let e=.5,t=this.rect?this.rect.w:window.innerWidth,n=this.rect?this.rect.h:window.innerHeight;this.canvas.width=Math.max(1,Math.floor(t*e)),this.canvas.height=Math.max(1,Math.floor(n*e))}update(e,t,n=`255,255,255`){this.intensity+=(t-this.intensity)*Math.min(1,e*6);let{ctx:r,canvas:i}=this;if(r.clearRect(0,0,i.width,i.height),this.intensity<.02){this.canvas.style.opacity=`0`;return}this.canvas.style.opacity=`1`;let a=i.width/2,o=i.height*.46,s=Math.hypot(a,o);r.lineCap=`round`;for(let t of this.lines){t.r+=t.speed*e*(.8+this.intensity),t.r>1.2&&Object.assign(t,Y(ig,this,og).call(this,0));let i=t.r*s,c=(t.r+t.len)*s,l=Math.min(1,(t.r-.25)*2)*.55*this.intensity;l<=0||(r.strokeStyle=`rgba(${n},${l.toFixed(3)})`,r.lineWidth=t.w,r.beginPath(),r.moveTo(a+Math.cos(t.a)*i,o+Math.sin(t.a)*i),r.lineTo(a+Math.cos(t.a)*c,o+Math.sin(t.a)*c),r.stroke())}let c=r.createRadialGradient(a,o,s*.45,a,o,s);c.addColorStop(0,`rgba(0,0,0,0)`),c.addColorStop(1,`rgba(8,20,40,${(.35*this.intensity).toFixed(3)})`),r.fillStyle=c,r.fillRect(0,0,i.width,i.height)}};function og(e=0){return{a:Math.random()*Math.PI*2,r:.25+e*.8,speed:1.2+Math.random()*1.8,len:.08+Math.random()*.14,w:1+Math.random()*2.2}}var sg=`modulepreload`,cg=function(e,t){return new URL(e,t).href},lg={},ug=function(e){return e.pathname.endsWith(`.css`)},dg=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},fg=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=cg(t,n);let r=s(t),i=ug(r);return dg(lg,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:sg,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},pg={"peer-unavailable":`Kode ruang tidak ditemukan. Periksa kodenya dan pastikan perangkat host masih membuka ruang.`,network:`Tidak bisa terhubung ke server online. Periksa koneksi internet, lalu coba lagi.`,"server-error":`Server online sedang bermasalah. Coba lagi beberapa saat lagi.`,"socket-error":`Tidak bisa terhubung ke server online. Periksa koneksi internet, lalu coba lagi.`,"socket-closed":`Sambungan ke server online terputus.`,"browser-incompatible":`Browser ini tidak mendukung mode online (WebRTC). Pakai Chrome/Edge terbaru.`,"ssl-unavailable":`Mode online butuh alamat https:// (mis. GitHub Pages).`,webrtc:`Koneksi langsung antar-perangkat gagal (jaringan memblokir WebRTC).`};function mg(e=globalThis.location?.search??``){let t=new URLSearchParams(e),n={debug:Math.max(0,Math.min(3,Number(t.get(`peerDebug`))||0))},r=t.get(`peer`);if(r){let[e,i]=r.split(`:`);n.host=e,i&&(n.port=Number(i)),n.path=t.get(`peerPath`)||`/`,n.secure=t.get(`peerSecure`)!==`0`}t.get(`ice`)===`none`&&(n.config={iceServers:[]});let i=Number(t.get(`netTimeout`));return i>0&&(n.linkTimeout=i),n}var hg=new WeakSet,gg=class{constructor(e=mg()){_d(this,hg),this.options=e,this.handlers={},this.peer=null,this.conn=null,this.role=null,this.code=null,this.connected=!1,this.closed=!1,this.rtt=null,this.lastRecv=0,this.sent=0,this.received=0,this._timer=null}on(e,t){var n;return((n=this.handlers)[e]||(n[e]=[])).push(t),this}async host(){this.role=`host`;let e=await Y(hg,this,vg).call(this);for(let t=0;t<6&&!this.closed;t++){let t=Jm();Y(hg,this,_g).call(this,`status`,`Membuat ruang…`);let n=await new Promise(n=>{let r=new e(Zm(t),this.options);this.peer=r;let i=e=>{r.off(`open`,a),r.off(`error`,o),n(e)},a=()=>i(!0),o=e=>{e?.type===`unavailable-id`?(r.destroy(),i(!1)):(Y(hg,this,yg).call(this,e?.type??`server-error`,e?.message),i(null))};r.on(`open`,a),r.on(`error`,o)});if(n===null)return null;if(n)return this.code=t,Y(hg,this,Sg).call(this),this.peer.on(`connection`,e=>Y(hg,this,bg).call(this,e)),Y(hg,this,_g).call(this,`ready`,t),t}return this.closed||Y(hg,this,yg).call(this,`server-error`),null}async join(e){if(this.role=`guest`,!Xm(e))return Y(hg,this,_g).call(this,`error`,`Kode ruang harus 4 karakter (contoh: K7QM).`),!1;this.code=e;let t=await Y(hg,this,vg).call(this);Y(hg,this,_g).call(this,`status`,`Menghubungi server…`);let n=new t(this.options);return this.peer=n,new Promise(t=>{let r=!1,i=e=>{r||(r=!0,clearTimeout(a),t(e))},a=setTimeout(()=>{this.connected||(Y(hg,this,_g).call(this,`error`,`Waktu habis saat menyambung. Pastikan kedua perangkat terhubung ke internet, lalu coba lagi.`),i(!1))},2e4);n.on(`error`,e=>{this.connected?e?.type!==`peer-unavailable`&&Y(hg,this,_g).call(this,`status`,pg[e?.type]??`Gangguan jaringan`):(Y(hg,this,yg).call(this,e?.type??`server-error`,e?.message),i(!1))}),n.on(`open`,()=>{Y(hg,this,_g).call(this,`status`,`Menyambung ke ruang `+e+`…`);let t=n.connect(Zm(e),{serialization:`json`,reliable:!0,metadata:{v:1}});Y(hg,this,xg).call(this,t,()=>i(!0))}),Y(hg,this,Sg).call(this)})}dropPeer(){let e=this.conn;this.connected=!1,this.conn=null,clearInterval(this._timer);try{e?.close()}catch{}}send(e){if(!this.connected||!this.conn)return!1;try{return this.conn.send(e),this.sent++,!0}catch{return!1}}close(){this.closed=!0,clearInterval(this._timer),this.connected&&this.send({t:`bye`});let e=this.peer,t=this.conn;this.connected=!1,this.conn=null,setTimeout(()=>{try{t?.close()}catch{}try{e?.destroy()}catch{}},150)}};function _g(e,t){for(let n of this.handlers[e]??[])n(t)}async function vg(){let e=await fg(()=>import(`./bundler-CA_qUttM.js`),[],import.meta.url);return e.Peer??e.default?.Peer??e.default}function yg(e,t=``){let n=pg[e]??`Gagal tersambung (${e}). ${t}`.trim();Y(hg,this,_g).call(this,`error`,n)}function bg(e){this.conn&&this.connected?e.on(`open`,()=>{try{e.send({t:`reject`,reason:`penuh`})}catch{}setTimeout(()=>e.close(),400)}):Y(hg,this,xg).call(this,e)}function xg(e,t){this.conn=e,e.on(`open`,()=>{this.connected=!0,this.lastRecv=performance.now(),Y(hg,this,Cg).call(this),Y(hg,this,_g).call(this,`connected`),t?.()}),e.on(`data`,e=>{if(this.lastRecv=performance.now(),this.received++,e&&typeof e==`object`){if(e.t===`ping`)return this.send({t:`pong`,ts:e.ts});e.t===`pong`?this.rtt=Math.round(performance.now()-e.ts):Y(hg,this,_g).call(this,`message`,e)}}),e.on(`close`,()=>Y(hg,this,wg).call(this,`Lawan keluar dari ruang.`)),e.on(`error`,e=>{this.connected||Y(hg,this,yg).call(this,`webrtc`,e?.message)}),e.on(`iceStateChanged`,e=>{e===`failed`&&Y(hg,this,wg).call(this,`Koneksi ke lawan terputus.`)})}function Sg(){this.peer.on(`disconnected`,()=>{if(!this.closed&&!this.peer.destroyed)try{this.peer.reconnect()}catch{}})}function Cg(){clearInterval(this._timer),this._timer=setInterval(()=>{if(!this.connected)return;this.send({t:`ping`,ts:performance.now()});let e=this.options.linkTimeout??15;performance.now()-this.lastRecv>e*1e3&&Y(hg,this,wg).call(this,`Koneksi ke lawan terputus (tidak ada data ${e} detik).`)},2e3)}function wg(e){this.connected&&(this.connected=!1,this.conn=null,clearInterval(this._timer),Y(hg,this,_g).call(this,`closed`,e))}var Tg=new WeakSet,Eg=class{constructor(e){_d(this,Tg),this.game=e,this.link=null,this.role=null,this.state=`start`,this.code=null,this.opp=null,this.hostLobby=null,this.status=``,this.error=``,this.sendAcc=0,this.lastSnap=0,this.urlOptions=mg()}get settings(){return this.game.settings}get active(){return!!this.link&&!this.link.closed}get connected(){return!!this.link?.connected}get laggy(){return this.connected&&performance.now()-this.link.lastRecv>1500}me(){return{name:this.settings.netName,car:this.settings.car}}lobby(){return{track:this.settings.track,laps:this.settings.laps,rivals:this.settings.netRivals}}pingLabel(){return this.connected?this.laggy?`SINYAL LEMAH`:this.link.rtt===null?`ONLINE`:`ONLINE · ${this.link.rtt} ms`:`LAWAN TERPUTUS`}joinUrl(){if(!this.code)return``;let e=globalThis.location,t=new URLSearchParams,n=new URLSearchParams(e?.search??``);for(let e of[`peer`,`peerSecure`,`peerPath`,`ice`,`netTimeout`,`peerDebug`,`debug`])n.has(e)&&t.set(e,n.get(e));return t.set(`gabung`,this.code),`${e?.origin??``}${e?.pathname??`/`}?${t.toString()}`}view(){return{state:this.state,role:this.role,code:this.code,joinUrl:this.joinUrl(),connected:this.connected,me:this.me(),opp:this.opp,lobby:this.role===`guest`?this.hostLobby:this.lobby(),rtt:this.link?.rtt??null,status:this.status,error:this.error}}render(){this.game.menu?.setOnlineView(this.view())}async host(){if(this.active)return;Y(Tg,this,Og).call(this),this.role=`host`,this.state=`connecting`,this.link=Y(Tg,this,Dg).call(this),this.game.netRefreshCar(),this.render();let e=this.link,t=await e.host();this.link===e&&(t?(this.code=t,this.state=`room`,this.status=``):(Y(Tg,this,Og).call(this,!1),this.game.netRefreshCar()),this.render())}async join(e){if(this.active)return;let t=Ym(e);if(Y(Tg,this,Og).call(this),!Xm(t)){this.error=`Kode ruang harus 4 karakter (huruf/angka), contoh: K7QM.`,this.render();return}this.role=`guest`,this.code=t,this.state=`connecting`,this.link=Y(Tg,this,Dg).call(this),this.render();let n=this.link,r=await n.join(t);this.link===n&&(r||Y(Tg,this,Og).call(this,!1),this.render())}leave(){let e=!!this.game.netRace;return Y(Tg,this,Og).call(this),this.game.netRefreshCar?.(),this.render(),e}sendProfile(){this.connected&&this.link.send({t:`prof`,...this.me()}),this.render()}sendLobby(){this.role===`host`&&this.connected&&this.link.send({t:`lobby`,...this.lobby()}),this.render()}startRace(){if(this.role!==`host`||!this.connected||!this.opp)return!1;let e={t:`start`,v:1,...this.lobby(),diff:this.settings.difficulty,host:this.me(),guest:{...this.opp}};return this.link.send(e),this.game.netStartHost(e),!0}backToLobby(){this.role===`host`&&this.connected&&this.link.send({t:`tolobby`}),this.game.netToLobby(),this.render()}tick(e){this.connected&&(this.sendAcc+=e,!(this.sendAcc<.05)&&(this.sendAcc=Math.min(this.sendAcc-qm,qm),this.role===`host`?this.link.send(this.game.netBuildSnapshot()):this.link.send({t:`car`,s:this.game.netOwnCar()})))}frame(e){this.active&&this.state===`room`&&(this._uiAcc=(this._uiAcc??0)+e,this._uiAcc>1&&(this._uiAcc=0,this.game.mode===`menu`&&this.game.menu?.setOnlinePing?.(this.link.rtt,this.connected)))}sendEvent(e){this.connected&&this.link.send({t:`ev`,e})}sendPick(e){this.connected&&this.link.send({t:`pick`,id:e})}debugInfo(){return{state:this.state,role:this.role,code:this.code,connected:this.connected,rtt:this.link?.rtt??null,sent:this.link?.sent??0,received:this.link?.received??0,opp:this.opp?{...this.opp}:null,hostLobby:this.hostLobby?{...this.hostLobby}:null,error:this.error}}};function Dg(){let e=new gg(this.urlOptions);return e.on(`status`,t=>{this.link===e&&(this.status=t,this.render())}),e.on(`error`,t=>{this.link===e&&(this.error=t,this.status=``,!e.connected&&this.state===`connecting`&&Y(Tg,this,Og).call(this,!1),this.render())}),e.on(`connected`,()=>{this.link===e&&(this.status=``,this.role===`guest`&&e.send({t:`hello`,v:1,...this.me()}),this.render())}),e.on(`message`,t=>{this.link===e&&Y(Tg,this,Ag).call(this,t)}),e.on(`closed`,t=>{this.link===e&&Y(Tg,this,Mg).call(this,t)}),e}function Og(e=!0){let t=this.link;this.link=null,t&&!t.closed&&t.close(),this.role=null,this.state=`start`,this.code=null,this.opp=null,this.hostLobby=null,this.status=``,e&&(this.error=``)}function kg(e){return{name:um(e?.name,`LAWAN`),car:qp[e?.car]?e.car:Yp}}function Ag(e){switch(e.t){case`hello`:if(this.role!==`host`)return;if(e.v!==1){this.link.send({t:`reject`,reason:`versi`});return}this.opp=Y(Tg,this,kg).call(this,e),this.error=``,this.link.send({t:`welcome`,v:1,...this.me(),lobby:this.lobby()}),this.render();return;case`car`:this.role===`host`&&this.game.netRemoteCar(e.s);return;case`pick`:this.role===`host`&&Number.isInteger(e.id)&&this.game.netPick(e.id);return;case`welcome`:if(this.role!==`guest`)return;this.opp=Y(Tg,this,kg).call(this,e),this.hostLobby=Y(Tg,this,jg).call(this,e.lobby),this.state=`room`,this.error=``,this.status=``,this.game.netRefreshCar(),this.render();return;case`reject`:this.error=e.reason===`penuh`?`Ruang sudah penuh (sudah ada 2 pemain).`:`Versi game di kedua perangkat berbeda. Muat ulang halaman (Ctrl+F5) di keduanya.`,Y(Tg,this,Og).call(this,!1),this.game.netRefreshCar(),this.render();return;case`lobby`:if(this.role!==`guest`)return;this.hostLobby=Y(Tg,this,jg).call(this,e),this.render();return;case`start`:if(this.role!==`guest`)return;this.hostLobby=Y(Tg,this,jg).call(this,e),e.host&&(this.opp=Y(Tg,this,kg).call(this,e.host)),this.game.netStartGuest({...this.hostLobby,diff:e.diff,host:Y(Tg,this,kg).call(this,e.host),guest:Y(Tg,this,kg).call(this,e.guest)});return;case`snap`:this.role===`guest`&&this.game.netSnapshot(e);return;case`ev`:this.role===`guest`&&this.game.netEvent(e.e);return;case`tolobby`:this.role===`guest`&&(this.game.netToLobby(),this.render());return;case`prof`:this.opp=Y(Tg,this,kg).call(this,e),this.render();return;case`bye`:Y(Tg,this,Mg).call(this,this.role===`host`?`Lawan keluar dari ruang.`:`Host menutup ruang.`);return}}function jg(e){return{track:Xp[e?.track]?e.track:this.settings.track,laps:nm.includes(e?.laps)?e.laps:3,rivals:sm.includes(e?.rivals)?e.rivals:2}}function Mg(e){if(this.role===`host`){let t=!!this.opp;this.opp=null,this.link?.dropPeer(),this.game.netRace&&this.game.netOpponentLeft(e),t&&(this.error=e),this.render()}else{let t=!!this.game.netRace;Y(Tg,this,Og).call(this,!1),this.error=e||`Koneksi ke host terputus.`,t||this.game.mode!==`menu`?this.game.netHostLost(e):this.game.netRefreshCar(),this.render()}}var Ng=class{constructor(e,{laps:t=3,finishTimeout:n=60}={}){this.path=e,this.mode=`race`,this.totalLaps=t,this.finishTimeout=n,this.checkpoints=Ad(e.length),this.racers=[],this.byId=new Map,this.events=[],this.phase=`countdown`,this.countdown=3,this.time=0,this._timeLeft=null,this.standings=[],this.snapshots=0}addRacer(e,t,n={}){let r={id:e,vehicle:t,name:n.name??e,color:n.color??`#ffffff`,isPlayer:!!n.isPlayer,lap:1,nextCheckpoint:0,lapStart:0,lastLap:null,bestLap:null,laps:[],progress:0,finished:!1,finishTime:null,dnf:!1,position:this.racers.length+1};return this.racers.push(r),this.byId.set(e,r),this.standings=this.racers.slice(),r}start(){this.phase=`countdown`,this.countdown=3,this.time=0,this._timeLeft=null}get canMove(){return this.phase===`racing`||this.phase===`done`}get timeLeft(){return this._timeLeft}applySnapshot(e){if(this.snapshots++,e.ph&&(this.phase=e.ph),typeof e.cd==`number`&&(this.countdown=e.cd),typeof e.tm==`number`&&Math.abs(e.tm-this.time)>.12&&(this.time=e.tm),this._timeLeft=typeof e.tl==`number`?e.tl:null,Array.isArray(e.rc)){for(let t of e.rc){let e=this.byId.get(t[0]);e&&ah(e,t)}this.standings=this.racers.slice().sort((e,t)=>e.position-t.position)}}pushEvent(e){let t={...e};typeof e.racer==`string`&&(t.racer=this.byId.get(e.racer),!t.racer)||(e.type===`go`&&(this.phase=`racing`,this.time=0),e.type===`all-finished`&&(this.phase=`done`),this.events.push(t))}update(e){this.phase===`countdown`?this.countdown=Math.max(0,this.countdown-e):(this.phase===`racing`||this.phase===`done`)&&(this.time+=e,this._timeLeft!==null&&(this._timeLeft=Math.max(0,this._timeLeft-e)))}currentLapTime(e){return this.canMove?Math.max(0,this.time-e.lapStart):0}isWrongWay(e){return kd(e.vehicle.state)}drainEvents(){let e=this.events.slice();return this.events.length=0,e}},Pg=12,Fg=5,Ig=0,Lg=ph[0],Rg=561586,zg=`#67e8f9`,Bg=60,Vg=2.6,Hg=[`rendah`,`sedang`,`tinggi`],Ug=e=>`#`+new W(e).getHexString(),Wg=new H,Gg=new V,$=new WeakSet,Kg=class{constructor({container:e,hudRoot:t,menuRoot:n,touchRoot:r,debug:i=!1}){_d(this,$),this.container=e,this.debug=i,this.settings=fm(),this.mode=`menu`,this.menuView=`main`,this.raceMode=`race`,this.time=0,this.accumulator=0,this.controls={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.aiInput={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.wrongWayTime=0,this.timeScale=1,this.fps={frames:0,time:0,value:0,low:0,high:0},this.timer=new Ps,this.timer.connect(document),this.cars=[],this.rivals=[],this.pilots=[],this.duo=!1,this.netRace=null,this.renders=0,this.spawnAcc=new Map,Y($,this,qg).call(this),Y($,this,Jg).call(this),this.audio=new Bp,this.audio.setVolume(this.settings.volume),this.input=new Ep(window),this.input.padSwap=this.settings.duoPadSwap,this.input.on(`pause`,()=>this.togglePause()),this.input.on(`reset`,e=>this.resetCar(e)),this.input.on(`mute`,()=>{let e=this.audio.toggleMute();if(this.mode===`playing`)for(let t of this.pilots)t.hud.message(e?`SUARA MATI`:`SUARA HIDUP`,``,.9)}),this.input.on(`pad`,e=>Y($,this,y_).call(this,e)),this._onGesture=()=>{(this.mode===`playing`||this.audio.ready)&&this.audio.unlock()},window.addEventListener(`pointerdown`,this._onGesture),window.addEventListener(`keydown`,this._onGesture),this.hudLayer=t;let a=document.createElement(`div`);a.className=`hud`,a.dataset.pane=`1`,t.appendChild(a),this.splitLine=document.createElement(`div`),this.splitLine.className=`split-line`,this.splitLine.hidden=!0,t.appendChild(this.splitLine),this.hud=new Sm(a),this.speedLines=new ag(e.parentElement),this.controls2={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.touch=new ng(r,this.input,{onPause:()=>this.togglePause()}),this.flames=new Rp(this.scene,{capacity:1100,additive:!0}),this.smoke=new Rp(this.scene,{capacity:500,additive:!1}),this.qualityLevel=this.settings.quality===`otomatis`?`sedang`:this.settings.quality,Y($,this,c_).call(this,this.qualityLevel),this.loadTrack(this.settings.track),this.loadCar(this.settings.car),Y($,this,$g).call(this),this.chase=new lp(this.camera),this.menu=new Mh(n,this.settings,{onRace:()=>this.startRace(),onPractice:()=>this.startPractice(),onResume:()=>this.resume(),onRestart:()=>this.restart(),onMenu:()=>this.toMenu(),onScreen:e=>Y($,this,t_).call(this,e),onPreviewCar:e=>Y($,this,r_).call(this,e),onConfirmCar:e=>Y($,this,i_).call(this,e),onCancelCar:()=>Y($,this,r_).call(this,this.settings.car),onSelectTrack:e=>Y($,this,a_).call(this,e),onSettings:(e,t)=>Y($,this,o_).call(this,t),onDuoStart:()=>this.startDuo(),onDuoCar:(e,t)=>Y($,this,n_).call(this,e,t),onNetHost:()=>this.online.host(),onNetJoin:e=>this.online.join(e),onNetLeave:()=>this.online.leave(),onNetStart:()=>this.online.startRace(),onNetProfile:()=>Y($,this,I_).call(this),onNetLobby:()=>this.online.sendLobby(),onNetToLobby:()=>this.online.backToLobby(),onNetResume:()=>Y($,this,g_).call(this)}),this.online=new Eg(this),Y($,this,s_).call(this),this._onResize=()=>this.resize(),this._onVisibility=()=>{document.hidden&&this.mode===`playing`&&!this.netRace&&this.pause()},window.addEventListener(`resize`,this._onResize),document.addEventListener(`visibilitychange`,this._onVisibility),this.resize(),this.toMenu(),this.renderer.setAnimationLoop(e=>Y($,this,b_).call(this,e));let o=new URLSearchParams(globalThis.location?.search??``).get(`gabung`);o&&(this.menu.openOnline(o),this.online.join(o))}loadTrack(e){this.track&&this.track.dispose();let t=Xp[e],n=this.settings.quality===`otomatis`?.85:im[this.settings.quality].decor;this.track=new Nf(t,{decor:n}),this.scene.add(this.track.group),Y($,this,Yg).call(this,t.theme),this.hud.setTrack(this.track.path),this.hud2?.setTrack(this.track.path),this.items=new Fp(this.track.path,t.items),this.itemVisuals=new Lp(this.items.items,this.track.group),this.flames?.clear(),this.smoke?.clear(),this.vehicle&&Y($,this,e_).call(this)}loadCar(e,t=`solo`){this.vehicle&&this.vehicle.dispose();let n=qp[e];this.vehicle=new sp(n,Y($,this,Xg).call(this,e,t)),this.vehicleVariant=t,this.scene.add(this.vehicle.object);let r=xd(Fg);this.vehicle.place(this.track,r.s,r.lateral)}get split(){return this.duo&&this.pilots.length===2&&(this.mode===`playing`||this.mode===`paused`||this.mode===`results`)}startRace(){Y($,this,d_).call(this,`race`)}startPractice(){Y($,this,d_).call(this,`practice`)}startDuo(){Y($,this,d_).call(this,`race`,{duo:!0})}restart(){this.netRace?this.netRace.role===`host`&&this.online.startRace():Y($,this,d_).call(this,this.raceMode,{duo:this.duo})}pause(){this.mode===`playing`&&(this.mode=`paused`,this.needsRender=!0,this.input.clear(),this.touch.release(),this.audio.stopEngine(),Y($,this,p_).call(this),this.menu.show(`pause`))}resume(){this.mode===`paused`&&(this.mode=`playing`,this.menu.hide(),this.input.clear(),Y($,this,p_).call(this),this.timer.reset())}togglePause(){if(this.mode===`playing`&&this.netRace)return this.netMenuOpen?Y($,this,g_).call(this):Y($,this,h_).call(this);this.mode===`playing`?this.pause():this.mode===`paused`?this.resume():this.mode===`menu`&&this.menu.back()}toMenu(){this.online.active&&this.online.leave(),this.mode=`menu`,this.menuView=`main`,this.duo=!1,this.netRace=null,this.netMenuOpen=!1,this.input.enabled=!0,Y($,this,m_).call(this,!1),this.audio.stopEngine(),this.audio.setDuo(!1),this.speedLines.update(1,0),this.speedLines2?.setVisible(!1),this.cars=[],this.pilots=[],this.items.reset(),this.input.setMode(`solo`),(this.vehicleVariant!==`solo`||this.vehicle.spec.id!==this.settings.car)&&this.loadCar(this.settings.car),this.vehicle.setNameTag(null),this.vehicle2?.setNameTag(null),Y($,this,e_).call(this),Y($,this,p_).call(this),this.resize(),this.menu.show(`main`)}resetCar(e=0){let t=this.pilots[e];this.mode===`playing`&&t&&!t.done&&this.race?.canMove&&(t.vehicle.place(this.track,t.vehicle.state.s,0),t.chase.snapTo(t.vehicle),t.hud.message(`RESET`,``,.8))}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t);let n=this.renderer.getPixelRatio(),r=this.hudLayer;if(this.split){let n=this.settings.duoLayout!==`kiri-kanan`,i=n?{x:0,y:0,w:e,h:Math.floor(t/2)}:{x:0,y:0,w:Math.floor(e/2),h:t};[i,n?{x:0,y:i.h,w:e,h:t-i.h}:{x:i.w,y:0,w:e-i.w,h:t}].forEach((e,t)=>{let n=this.pilots[t];n.view=e,n.camera.aspect=e.w/e.h,n.camera.updateProjectionMatrix(),n.chase.setViewAspect(e.w/e.h),n.speedLines.setRect(e),n.speedLines.setVisible(!0);let r=n.hud.root.style;r.left=`${e.x}px`,r.top=`${e.y}px`,r.width=`${e.w}px`,r.height=`${e.h}px`}),r.classList.add(`duo`),r.classList.toggle(`tb`,n),r.classList.toggle(`lr`,!n);let a=this.splitLine.style;n?Object.assign(a,{left:`0px`,width:`${e}px`,top:`${i.h-1.5}px`,height:`3px`}):Object.assign(a,{top:`0px`,height:`${t}px`,left:`${i.w-1.5}px`,width:`3px`}),this.splitLine.hidden=!1}else{this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.chase?.setViewAspect(null),this.speedLines?.setRect(null),this.speedLines2?.setVisible(!1);for(let e of[this.hud,this.hud2]){if(!e)continue;let t=e.root.style;t.left=t.top=t.width=t.height=``}r?.classList.remove(`duo`,`tb`,`lr`),this.splitLine&&(this.splitLine.hidden=!0)}let i=(this.split?this.pilots[0].view.h:t)*n;this.flames?.setViewportHeight(i),this.smoke?.setViewportHeight(i),this.needsRender=!0}netStartHost(e){this.track.def.id!==e.track&&(this.settings.track=e.track,this.loadTrack(e.track)),Y($,this,d_).call(this,`race`,{net:{...e,role:`host`}})}netStartGuest(e){return!Xp[e.track]||!qp[e.host?.car]||!qp[e.guest?.car]?!1:(this.track.def.id!==e.track&&(this.settings.track=e.track,pm(this.settings),this.loadTrack(e.track)),Y($,this,d_).call(this,`race`,{net:{...e,role:`guest`}}),!0)}netToLobby(){this.mode!==`menu`&&(Y($,this,__).call(this),Y($,this,p_).call(this),this.resize()),this.menu.show(`online`),Y($,this,t_).call(this,`online`)}netHostLost(){this.netToLobby()}netRefreshCar(){let e=this.online.role===`host`?`p1`:this.online.role===`guest`?`p2`:`solo`;(this.vehicle.spec.id!==this.settings.car||this.vehicleVariant!==e)&&(this.loadCar(this.settings.car,e),Y($,this,e_).call(this))}netBuildSnapshot(){let e=this.race,t=(e,t)=>Math.round(e*t)/t;return{t:`snap`,ph:e.phase,cd:t(e.countdown,100),tm:t(e.time,1e3),tl:e.timeLeft===null?null:t(e.timeLeft,100),cars:this.cars.filter(e=>!e.remote).map(e=>[e.racer.id,th(e.state)]),rc:e.racers.map(ih),it:oh(this.items.items)}}netSnapshot(e){if(this.netRace?.role!==`guest`)return;this.race.applySnapshot(e);let t=Y($,this,L_).call(this);for(let[n,r]of e.cars??[]){let e=t.get(n);e?.remote&&e.remote.push(r,this.time)}typeof e.it==`string`&&Y($,this,R_).call(this,e.it)}netRemoteCar(e){let t=this.netRace?.guestCar;t&&!t.gone&&Array.isArray(e)&&t.remote.push(e,this.time)}netPick(e){this.netRace?.role===`host`&&this.items.takeRemote(e,this.netRace.guestCar)}netEvent(e){this.netRace?.role===`guest`&&e&&typeof e.type==`string`&&this.race.pushEvent(e)}netOwnCar(){return th(this.vehicle.state)}netOpponentLeft(e){let t=this.netRace;if(!t||t.role!==`host`)return;let n=t.guestCar;n&&!n.gone&&(n.gone=!0,n.vehicle.object.visible=!1,this.cars=this.cars.filter(e=>e!==n),t.byId=null,n.racer.finished||(n.racer.finished=!0,n.racer.dnf=!0),this.mode===`playing`&&this.hud.message(`LAWAN KELUAR`,e||`Balapan dilanjutkan melawan AI`,2.6,`warn`),Y($,this,w_).call(this)&&this.resultsTimer<=0&&this.mode===`playing`&&(this.resultsTimer=Vg))}snapshot(){let e=this.vehicle.state,t=this.race;return{mode:this.mode,menuView:this.menuView,menuScreen:this.menu?.current??null,raceMode:this.raceMode,car:this.vehicle.spec.id,track:this.track.def.id,settings:JSON.parse(JSON.stringify(this.settings)),quality:this.qualityLevel,shadows:this.renderer.shadowMap.enabled,pixelRatio:this.renderer.getPixelRatio(),touch:this.touch.enabled,phase:t?.phase??`idle`,countdown:t?.countdown??0,totalLaps:t?.totalLaps??0,fps:this.fps.value,raceTime:t?.time??0,x:e.x,y:e.y,z:e.z,s:e.s,lateral:e.lateral,extent:e.extent,speedKmh:this.vehicle.speedKmh,onGround:e.onGround,heading:e.heading,nitro:e.nitro,boosting:e.boosting,fx:{...e.fx},cool:{...e.cool},lap:this.player?.lap??0,position:this.player?.position??0,finished:this.player?.finished??!1,checkpoint:this.player?.nextCheckpoint??0,bestLap:this.player?.bestLap??null,items:this.items.items.map(e=>({type:e.type,active:e.active,x:e.x,z:e.z,s:e.s,lateral:e.lateral})),racers:(t?.standings??[]).map(e=>({id:e.id,name:e.name,isPlayer:e.isPlayer,playerIndex:e.playerIndex??null,car:e.carName,position:e.position,lap:e.lap,finished:e.finished,dnf:e.dnf,finishTime:e.finishTime,progress:e.progress,speed:e.vehicle.state.forwardSpeed,x:e.vehicle.state.x,z:e.vehicle.state.z,lateral:e.vehicle.state.lateral,extent:e.vehicle.state.extent,nitro:e.vehicle.state.nitro})),net:this.online.debugInfo(),netRace:this.netRace?{role:this.netRace.role,rivals:this.netRace.rivals,guestGone:!!this.netRace.guestCar?.gone}:null,remotes:this.cars.filter(e=>e.remote).map(e=>({id:e.racer.id,x:e.state.x,z:e.state.z,s:e.state.s,speedKmh:e.state.forwardSpeed*3.6,updates:e.remote.count,visible:e.vehicle.object.visible})),duo:this.duo,split:this.split,layout:this.settings.duoLayout,renders:this.renders,views:this.split?this.pilots.map(e=>({...e.view})):null,pads:this.input.padCount,padOwners:[...this.input.padOwners],p1tag:!!this.vehicle.nameTag,p2:this.vehicle2?{car:this.vehicle2.spec.id,visible:this.vehicle2.object.visible,tag:!!this.vehicle2.nameTag}:null,players:this.pilots.map(e=>{let t=e.vehicle.state,n=e.camera;return{index:e.index,id:e.racer.id,name:e.name,car:e.vehicle.spec.id,speedKmh:e.vehicle.speedKmh,x:t.x,y:t.y,z:t.z,s:t.s,lateral:t.lateral,extent:t.extent,heading:t.heading,nitro:t.nitro,boosting:t.boosting,drifting:t.drifting,fx:{...t.fx},position:e.racer.position,lap:e.racer.lap,finished:e.racer.finished,dnf:e.racer.dnf,done:e.done,controls:{...e.controls},cam:{x:n.position.x,y:n.position.y,z:n.position.z,aspect:n.aspect,fov:n.fov}}}),result:this.menu?.result??null,wallOffset:this.track.path.wallOffset,halfWidth:this.vehicle.phys.halfWidth,trackLength:this.track.path.length,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures}}dispose(){this.renderer.setAnimationLoop(null),this.timer.dispose(),window.removeEventListener(`resize`,this._onResize),window.removeEventListener(`pointerdown`,this._onGesture),window.removeEventListener(`keydown`,this._onGesture),document.removeEventListener(`visibilitychange`,this._onVisibility),this.input.dispose(),this.audio.dispose(),this.vehicle.dispose(),this.vehicle2?.dispose();for(let e of this.rivals)e.vehicle.dispose();this.flames.dispose(),this.smoke.dispose(),this.track.dispose(),this.envMap.dispose(),this.sky.geometry.dispose(),this.sky.material.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};function qg(){let e=new fd({antialias:!0,powerPreference:`high-performance`});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=4,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=1,e.info.autoReset=!1,this.container.appendChild(e.domElement),e.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.pause(),this.hud.message(`GRAFIS TERPUTUS`,`Muat ulang halaman (F5) untuk melanjutkan`,999,`warn`)}),this.renderer=e}function Jg(){let e=new Gn;this.scene=e,this.camera=new ws(62,window.innerWidth/window.innerHeight,.3,3e3),this.hemi=new fs(13625599,14929818,.9),e.add(this.hemi);let t=new ks(16773596,2.6);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let n=t.shadow.camera;n.left=-45,n.right=45,n.top=45,n.bottom=-45,n.near=1,n.far=320,t.shadow.bias=-4e-4,t.shadow.normalBias=.04,e.add(t,t.target),this.sun=t,this.sunDir=new H(0,1,0),this.sky=new pd,this.sky.scale.setScalar(4e3),e.add(this.sky);let r=new yc(this.renderer),i=new md;this.envMap=r.fromScene(i,.04).texture,i.dispose?.(),r.dispose(),e.environment=this.envMap,e.environmentIntensity=.45}function Yg(e){let t=this.sky.material.uniforms;t.turbidity.value=e.sky.turbidity,t.rayleigh.value=e.sky.rayleigh,t.mieCoefficient.value=.004,t.mieDirectionalG.value=.8,t.cloudCoverage.value=e.sky.clouds;let n=Lt.degToRad(90-e.sky.elevation),r=Lt.degToRad(e.sky.azimuth);this.sunDir.setFromSphericalCoords(1,n,r),t.sunPosition.value.copy(this.sunDir),this.scene.fog=new Wn(e.fogColor,e.fogNear,e.fogFar),this.renderer.toneMappingExposure=e.exposure??.85,this.sun.color.set(e.sun?.color??16773596),this.sun.intensity=e.sun?.intensity??2.6,this.hemi.color.set(e.hemi?.sky??13625599),this.hemi.groundColor.set(e.hemi?.ground??14929818),this.hemi.intensity=e.hemi?.intensity??.9,this.sunDistance=e.sky.elevation<15?260:160,this.sun.shadow.camera.far=this.sunDistance+200,this.sun.shadow.camera.updateProjectionMatrix()}function Xg(e,t){let n=qp[e];return t===`p2`?{color:Rg,number:`P2`,glow:zg}:t===`p1`?{glow:n.glow,number:`P1`}:{glow:n.glow}}function Zg(e,t=`p2`){(this.vehicle2?.spec.id!==e||this.vehicle2Role!==t)&&(this.vehicle2?.dispose(),this.vehicle2=new sp(qp[e],Y($,this,Xg).call(this,e,t)),this.vehicle2Role=t,this.vehicle2.object.visible=!1,this.scene.add(this.vehicle2.object))}function Qg(){if(!this.hud2){this.camera2=new ws(62,1,.3,3e3),this.chase2=new lp(this.camera2);let e=document.createElement(`div`);e.className=`hud`,e.dataset.pane=`2`,e.hidden=!0,this.hudLayer.insertBefore(e,this.splitLine),this.hud2=new Sm(e,{player:2}),this.hud2.setTrack(this.track.path),this.speedLines2=new ag(this.container.parentElement),this.speedLines2.setVisible(!1)}Y($,this,Zg).call(this,this.settings.duoCars[1],`p2`)}function $g(){for(let e of this.rivals)e.vehicle.dispose();this.rivals=$p.map(e=>{let t=new sp(qp[e.car],{color:e.color,number:e.number,name:e.name,glow:Ug(e.color)});return this.scene.add(t.object),{profile:e,vehicle:t,ai:null}})}function e_(){let e=this.mode===`menu`,t=this.raceMode===`practice`&&!e,n=e&&(this.menuView===`garage`||this.menuView===`online`),r=e&&this.menuView===`duo`&&!!this.vehicle2,i=!e&&this.duo,a=!e&&!!this.netRace,o=i?this.settings.duoRivals:a?this.netRace.rivals:this.rivals.length;if(n)this.vehicle.place(this.track,-26,0);else if(r)this.vehicle.place(this.track,-26,2.3),this.vehicle2.place(this.track,-26,-2.3);else if(i||a){let e=a&&this.netRace.role===`guest`,t=xd(e?o+1:o),n=xd(e?o:o+1);this.vehicle.place(this.track,t.s,t.lateral),this.vehicle2.place(this.track,n.s,n.lateral)}else{let e=xd(t?Ig:Fg);this.vehicle.place(this.track,e.s,e.lateral)}this.vehicle2&&(this.vehicle2.object.visible=r||i||a);let s=i||a?[0,1,2,3,4,5]:[0,1,2,3,4,5].filter(e=>e!==Fg);this.rivals.forEach((e,i)=>{let a=xd(s[i]);e.vehicle.place(this.track,a.s,a.lateral),e.vehicle.object.visible=!t&&!n&&!r&&i<o})}function t_(e){let t=this.menuView;this.menuView=e,(e===`garage`||e===`duo`||e===`online`)&&!this.carThumbs&&(this.carThumbs=Y($,this,u_).call(this),this.menu.setCarThumbs(this.carThumbs)),e===`duo`?(Y($,this,Qg).call(this),(this.vehicle.spec.id!==this.settings.duoCars[0]||this.vehicleVariant!==`p1`)&&this.loadCar(this.settings.duoCars[0],`p1`),this.input.setMode(`duo`)):e===`online`?this.netRefreshCar():(t===`duo`||t===`online`)&&((this.vehicle.spec.id!==this.settings.car||this.vehicleVariant!==`solo`)&&this.loadCar(this.settings.car),this.input.setMode(`solo`)),Y($,this,e_).call(this)}function n_(e,t){this.settings.duoCars[e]=t,pm(this.settings),e===0?(this.vehicle.spec.id!==t||this.vehicleVariant!==`p1`)&&this.loadCar(t,`p1`):Y($,this,Zg).call(this,t,`p2`),Y($,this,e_).call(this)}function r_(e){this.vehicle.spec.id!==e&&(this.loadCar(e),Y($,this,e_).call(this))}function i_(e){this.settings.car=e,pm(this.settings),Y($,this,r_).call(this,e)}function a_(e){this.settings.track=e,pm(this.settings),this.loadTrack(e),this.chase.menuS=0}function o_(e){if(pm(this.settings),e===`volume`&&this.audio.setVolume(this.settings.volume),e===`quality`){let e=this.settings.quality;this.qualityLevel=e===`otomatis`?`sedang`:e,Y($,this,c_).call(this,this.qualityLevel),this.loadTrack(this.settings.track),Y($,this,s_).call(this)}e===`showFps`&&!this.settings.showFps&&!this.debug&&this.hud.hideFps(),e===`duoPadSwap`&&(this.input.padSwap=this.settings.duoPadSwap)}function s_(){this.menu&&this.menu.setQualityNote(this.settings.quality===`otomatis`?`Mode otomatis — saat ini: ${im[this.qualityLevel].label}.`:``)}function c_(e){let t=im[e],n=this.renderer;n.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pixelRatio)),n.shadowMap.enabled!==t.shadows&&(n.shadowMap.enabled=t.shadows,this.scene.traverse(e=>{e.material&&[].concat(e.material).forEach(e=>e.needsUpdate=!0)})),this.sun.castShadow=t.shadows,this.sun.shadow.mapSize.x!==t.shadowSize&&(this.sun.shadow.mapSize.set(t.shadowSize,t.shadowSize),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.qualityLevel=e,this.camera&&this.resize()}function l_(e){if(this.settings.quality!==`otomatis`||this.mode!==`playing`||this.timeScale!==1)return;let t=this.fps;if(t.value===0)return;t.low=t.value<38?t.low+e:0,t.high=t.value>57?t.high+e:0;let n=Hg.indexOf(this.qualityLevel);t.low>3&&n>0?(Y($,this,c_).call(this,Hg[n-1]),t.low=0,Y($,this,s_).call(this)):t.high>12&&n<Hg.length-1&&(Y($,this,c_).call(this,Hg[n+1]),t.high=0,Y($,this,s_).call(this))}function u_(){let e={},t;try{t=new fd({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return e}t.setPixelRatio(1),t.setSize(320,180,!1),t.toneMapping=4,t.toneMappingExposure=.95;let n=new Gn,r=new yc(t),i=new md,a=r.fromScene(i,.04).texture;n.environment=a,n.environmentIntensity=.55,n.add(new fs(14412542,3359061,1.2));let o=new ks(16777215,2.4);o.position.set(5,8,6),n.add(o);let s=new ws(30,16/9,.1,100);s.position.set(4.3,1.75,4.7),s.lookAt(0,.5,0);for(let r of Jp){let i=ap(qp[r],{glow:qp[r].glow});i.root.rotation.y=.35,n.add(i.root),t.render(n,s),e[r]=t.domElement.toDataURL(`image/png`),n.remove(i.root),i.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(e=>(e.map?.dispose(),e.dispose()))})}return a.dispose(),r.dispose(),i.dispose?.(),t.dispose(),t.forceContextLoss(),e}function d_(e,t={}){let n=e===`race`?t.net??null:null;if(this.raceMode=e,this.duo=!!t.duo&&e===`race`&&!n,this.netRace=n?{role:n.role,rivals:n.rivals,cfg:n,sendAcc:0,guestCar:null,itemBits:null,pending:new Map}:null,this.netMenuOpen=!1,this.mode=`playing`,this.menuView=`main`,n){let e=n.role===`host`?n.host:n.guest,t=n.role===`host`?n.guest:n.host,r=n.role===`host`?`p1`:`p2`;(this.vehicle.spec.id!==e.car||this.vehicleVariant!==r)&&this.loadCar(e.car,r),Y($,this,Zg).call(this,t.car,n.role===`host`?`p2`:`p1`)}else this.duo?(Y($,this,Qg).call(this),(this.vehicle.spec.id!==this.settings.duoCars[0]||this.vehicleVariant!==`p1`)&&this.loadCar(this.settings.duoCars[0],`p1`)):(this.vehicleVariant!==`solo`||this.vehicle.spec.id!==this.settings.car)&&this.loadCar(this.settings.car);Y($,this,e_).call(this);let r=this.track.path,i=em[n?n.diff??this.settings.difficulty:this.settings.difficulty]??em.normal,a=n?n.laps:this.settings.laps,o=e===`race`?n?n.rivals:this.duo?this.settings.duoRivals:this.rivals.length:0,s=n?.role===`guest`;this.race=s?new Ng(r,{laps:a,finishTimeout:Bg}):new Cd(r,{mode:e,laps:a,finishTimeout:Bg}),this.items.reset(),this.cars=[],this.pilots=[];let c={vehicle:this.vehicle,chase:this.chase,camera:this.camera,hud:this.hud,speedLines:this.speedLines,controls:this.controls},l;if(n){let e=n.role===`host`?n.host:n.guest;l=[{...c,id:n.role===`host`?`p1`:`p2`,slot:n.role===`host`?o:o+1,name:e.name,color:ph[n.role===`host`?0:1],playerIndex:n.role===`host`?1:2}]}else l=this.duo?[{...c,id:`p1`,slot:o,name:this.settings.duoNames[0],color:ph[0]},{vehicle:this.vehicle2,chase:this.chase2,camera:this.camera2,hud:this.hud2,speedLines:this.speedLines2,controls:this.controls2,id:`p2`,slot:o+1,name:this.settings.duoNames[1],color:ph[1]}]:[{...c,id:`player`,slot:e===`race`?Fg:Ig,name:this.vehicle.spec.name,color:Lg}];let u=(e,t)=>{let n=xd(e.slot);e.vehicle.resetForRace(this.track,n.s,n.lateral);let a={vehicle:e.vehicle,state:e.vehicle.state,phys:e.vehicle.phys,isPlayer:!0,ai:null};a.racer=this.race.addRacer(e.id,e.vehicle,{name:e.name,color:e.color,isPlayer:!0}),a.racer.carName=e.vehicle.spec.name,a.racer.playerIndex=e.playerIndex??t+1;let o=new Mp(Pp,e.vehicle.phys,r,i);o.reaction=0;let s={...e,index:t,car:a,racer:a.racer,done:!1,wrongWayTime:0,prevS:e.vehicle.state.s,cooldownAI:o,view:null};a.pilot=s,this.cars.push(a),this.pilots.push(s)};if(n&&s?(Y($,this,f_).call(this,`p1`,this.vehicle2,n.host.name,ph[0],1,xd(o)),u(l[0],0)):(l.forEach(u),n&&(this.netRace.guestCar=Y($,this,f_).call(this,`p2`,this.vehicle2,n.guest.name,ph[1],2,xd(o+1)))),e===`race`){let e=this.duo||n?[0,1,2,3,4,5]:[0,1,2,3,4,5].filter(e=>e!==Fg);this.rivals.slice(0,o).forEach((t,n)=>{let a=xd(e[n]);t.vehicle.resetForRace(this.track,a.s,a.lateral);let o={vehicle:t.vehicle,state:t.vehicle.state,phys:t.vehicle.phys,isPlayer:!1,ai:null};s?(o.remote=new uh,o.kinematic=!0):(t.ai=new Mp(t.profile,t.vehicle.phys,r,i),t.ai.items=this.items.items,o.ai=t.ai),o.racer=this.race.addRacer(t.profile.id,t.vehicle,{name:t.profile.name,color:Ug(t.profile.color)}),o.racer.carName=qp[t.profile.car].name,this.cars.push(o)})}let d=this.pilots[0];if(this.player=d.racer,this.cooldownAI=d.cooldownAI,this.playerDone=!1,this.resultsTimer=0,this.goTimer=0,this.resultsRefresh=0,this.prevPlayerS=this.vehicle.state.s,this.flames.clear(),this.smoke.clear(),this.race.start(),n){this.vehicle.setNameTag(null);let e=s?n.host:n.guest;this.vehicle2.setNameTag(e.name,s?`P1`:`P2`,ph[+!s])}else this.vehicle.setNameTag(this.duo?this.settings.duoNames[0]:null,`P1`,ph[0]),this.vehicle2?.setNameTag(this.duo?this.settings.duoNames[1]:null,`P2`,ph[1]);this.input.clear(),this.input.setMode(this.duo?`duo`:`solo`),this.input.setPlayerEnabled(0,!0),this.input.setPlayerEnabled(1,!0),this.touch.release(),this.input.enabled=!0,this.accumulator=0,this.wrongWayTime=0,this.menu.hide(),s||this.audio.unlock(),this.audio.setDuo(this.duo),this.resize();for(let e of this.pilots)e.chase.snapTo(e.vehicle);Y($,this,m_).call(this,!0);for(let t of this.pilots)t.hud.setMode(e,this.cars.length),t.hud.setRacers(this.cars.map(e=>e.racer),this.duo||n?t.racer:null),t.hud.setIdentity(this.duo||n?t.name:null,t.color),t.hud.setControls(this.duo?t.index+1:0),t.hud.showHint(this.duo?10:e===`race`?12:10);if(Y($,this,p_).call(this),!this.duo){if(n){let e=s?n.host.name:n.guest.name;this.hud.message(`BERSIAP!`,`${this.track.def.name} · ${a} lap · lawan: ${e}${o?` + ${o} AI`:``}`,1.2)}else e===`race`?this.hud.message(`BERSIAP!`,`${this.track.def.name} · ${this.settings.laps} lap · kalahkan ${$p.length} lawan`,1.2):this.hud.message(`LATIHAN BEBAS`,`${this.track.def.name} · lewati 3 checkpoint lalu garis START`,3.2)}this.timer.reset()}function f_(e,t,n,r,i,a){t.resetForRace(this.track,a.s,a.lateral),t.object.visible=!0;let o={vehicle:t,state:t.state,phys:t.phys,isPlayer:!0,ai:null,remote:new uh,kinematic:!0};return o.racer=this.race.addRacer(e,t,{name:n,color:r,isPlayer:!0}),o.racer.carName=t.spec.name,o.racer.playerIndex=i,this.cars.push(o),o}function p_(){let e=this.settings.touch,t=e===`selalu`||e===`otomatis`&&mm();this.touch.setEnabled(t&&this.mode===`playing`&&!this.duo)}function m_(e){this.hudLayer.hidden=!e,this.hud.show(e),this.hud2?.show(e&&this.duo)}function h_(){this.netMenuOpen=!0,this.input.clear(),this.input.enabled=!1,this.touch.release(),this.menu.show(`netpause`)}function g_(){this.netMenuOpen&&(this.netMenuOpen=!1,this.input.clear(),this.input.enabled=!0,this.menu.hide())}function __(){this.mode=`menu`,this.menuView=`main`,this.duo=!1,this.netRace=null,this.netMenuOpen=!1,this.input.enabled=!0,Y($,this,m_).call(this,!1),this.audio.stopEngine(),this.audio.setDuo(!1),this.speedLines.update(1,0),this.speedLines2?.setVisible(!1),this.cars=[],this.pilots=[],this.items.reset(),this.input.setMode(`solo`),this.vehicle.setNameTag(null),this.vehicle2?.setNameTag(null)}function v_(){this.mode=`results`,Y($,this,m_).call(this,!1),this.audio.stopEngine(),Y($,this,p_).call(this);let e=this.duo||!!this.netRace;if(this.menu.updateResults(this.race.standings,this.race.totalLaps,e,this.netRace?this.player:null),this.duo)this.menu.showDuoResults(this.pilots.map(e=>({name:e.name,racer:e.racer})),this.cars.length);else if(this.netRace){let e=this.race.racers.filter(e=>e.isPlayer).sort((e,t)=>e.playerIndex-t.playerIndex);this.menu.showDuoResults(e.map(e=>({name:e.name,racer:e})),this.cars.length,{online:this.netRace.role,me:this.player})}else this.menu.showResults(this.player,this.cars.length)}function y_(e){if(e.button===`start`&&(this.mode===`playing`||this.mode===`paused`))return this.togglePause();if(e.button===`back`&&this.mode===`playing`)return this.resetCar(e.player);(this.mode===`menu`||this.mode===`results`)&&this.menu.padNav(e)}function b_(e){this.timer.update(e);let t=Math.min(.1,this.timer.getDelta()),n=t*this.timeScale;if(this.time+=n,Y($,this,F_).call(this,t),Y($,this,l_).call(this,t),this.input.poll(),this.mode===`playing`||this.mode===`results`?Y($,this,T_).call(this,n):this.mode===`menu`&&(this.menuView===`garage`||this.menuView===`online`?(this.vehicle.syncVisual(n),this.chase.orbit(n,this.vehicle)):this.menuView===`duo`&&this.vehicle2?(this.vehicle.syncVisual(n),this.vehicle2.syncVisual(n),this.chase.showcase(n,this.vehicle,this.vehicle2),this.menu.setPadStatus(this.input.padCount,this.input.padOwners)):this.chase.flyThrough(n,this.track)),this.netRace&&(this.mode===`playing`||this.mode===`results`)&&this.online.tick(t),this.online.frame(t),this.mode!==`paused`||this.needsRender){if(this.needsRender=!1,this.sky.material.uniforms.time.value=this.time,this.track.update(n,this.time),this.itemVisuals.update(n,this.time),this.flames.update(n),this.smoke.update(n),this.renderer.info.reset(),this.split)Y($,this,x_).call(this);else{let e=this.mode===`menu`&&![`garage`,`duo`,`online`].includes(this.menuView);Y($,this,P_).call(this,e?this.chase.look:this.vehicle.object.position),Y($,this,N_).call(this,this.camera,this.vehicle),this.renderer.render(this.scene,this.camera),this.renders=1}}}function x_(){let e=this.renderer,t=e.getSize(Gg),n=e.getPixelRatio();e.setScissorTest(!0);for(let r of this.pilots){let i=r.view,a=t.y-i.y-i.h;e.setViewport(i.x,a,i.w,i.h),e.setScissor(i.x,a,i.w,i.h);let o=i.h*n/r.chase.fovK;this.flames.setViewportHeight(o),this.smoke.setViewportHeight(o),Y($,this,P_).call(this,r.vehicle.object.position),Y($,this,N_).call(this,r.camera,r.vehicle),e.render(this.scene,r.camera)}e.setScissorTest(!1),e.setViewport(0,0,t.x,t.y),this.renders=this.pilots.length}function S_(e){let t=this.track.path;if(this.race.canMove){let n=-1/0;for(let e of this.cars)e.racer.isPlayer&&(n=Math.max(n,e.racer.progress));let r=Y($,this,w_).call(this);for(let t=0;t<this.cars.length;t++){let i=this.cars[t];if(i.remote)continue;let a;if(i.pilot){let n=i.pilot;a=n.done?n.cooldownAI.computeInput(i.state,{cars:this.cars,self:t,cruise:!0},e,this.aiInput):n.controls}else a=i.ai.computeInput(i.state,{cars:this.cars,self:t,playerGap:i.racer.progress-n,cruise:i.racer.finished||r},e,this.aiInput),i.ai.wantsRespawn&&(i.ai.wantsRespawn=!1,i.vehicle.place(this.track,i.state.s,0));i.vehicle.step(a,this.track,e)}this.cars.length>1&&rp(this.cars,t),this.items.update(e,this.netRace?this.cars.filter(e=>!e.remote):this.cars)}this.race.update(e)}function C_(){return this.pilots.every(e=>e.done)}function w_(){return Y($,this,C_).call(this)?this.cars.every(e=>!e.remote||!e.racer.isPlayer||e.racer.finished||e.gone):!1}function T_(e){for(let e of this.pilots)this.input.read(e.controls,e.index);if(this.netRace){let t=this.track.path;for(let n of this.cars)n.remote&&!n.gone&&n.remote.apply(n.state,this.time,e,t)}this.accumulator+=e;let t=0,n=Pg*Math.max(1,Math.ceil(this.timeScale));for(;this.accumulator>=Uf.fixedStep&&t<n;)Y($,this,S_).call(this,Uf.fixedStep),this.accumulator-=Uf.fixedStep,t++;t===n&&(this.accumulator=0);for(let e of this.pilots){let t=e.vehicle.state,n=Math.max(t.impact,t.carImpact*.8);if(n>2&&this.mode===`playing`){let r=t.fx.shield>0;e.chase.addShake(Math.min(r?.2:.7,n/25)),r||e.hud.flash(Math.min(.6,n/35)),this.audio.hit(n)}t.landing>4&&e.chase.addShake(Math.min(.4,t.landing/30))}for(let t of this.cars)t.vehicle.syncVisual(e),Y($,this,E_).call(this,t,e),t.state.impact=0,t.state.carImpact=0,t.state.landing=0;this.cars.length===0&&this.vehicle.syncVisual(e);for(let t of this.pilots)t.chase.follow(e,t.vehicle);if(Y($,this,M_).call(this),Y($,this,D_).call(this),Y($,this,k_).call(this),this.goTimer>0&&(this.goTimer-=e,this.goTimer<=0))for(let e of this.pilots)e.hud.countdown(null);if(this.resultsTimer>0&&(this.resultsTimer-=e,this.resultsTimer<=0&&this.mode===`playing`&&Y($,this,v_).call(this)),this.mode===`results`){for(let t of this.pilots)t.speedLines.update(e,0);this.resultsRefresh-=e,this.resultsRefresh<=0&&(this.resultsRefresh=.25,this.menu.updateResults(this.race.standings,this.race.totalLaps,this.duo||!!this.netRace,this.netRace?this.player:null))}else{for(let t of this.pilots){let n=t.vehicle,r=n.state,i=0,a=`255,255,255`;r.boosting?(i=1,a=`186,230,253`):r.fx.turbo>0?(i=.7,a=`253,186,116`):r.fx.speed>0&&(i=.7,a=`253,224,71`),t.speedLines.update(e,i,a);let o=t.racer;t.wrongWayTime=!t.done&&this.race.isWrongWay(o)?t.wrongWayTime+e:0;let s=Math.min(1,Math.abs(r.forwardSpeed)/n.phys.maxSpeed);this.audio.updateEngine(s,t.done?.3:r.boosting?1:t.controls.throttle,!0,t.index),this.audio.updateNitro(r.boosting,s,t.index),t.hud.update(e,{mode:this.raceMode,speedKmh:n.speedKmh,position:o.position,lap:o.lap,totalLaps:this.race.totalLaps,raceTime:this.race.time,standings:this.race.standings,timeLeft:this.race.timeLeft,finished:o.finished,checkpoint:o.nextCheckpoint,checkpointTotal:this.race.checkpoints.length,lapTime:o.finished?0:this.race.currentLapTime(o),bestLap:o.bestLap,lastLap:o.lastLap,drifting:r.drifting,airborne:!r.onGround&&r.airTime>.2,wrongWay:t.wrongWayTime>1,nitro:r.nitro,boosting:r.boosting,fx:r.fx}),this.netRace&&t.hud.setNetInfo(this.online.pingLabel(),this.online.laggy);let c=[];for(let e of this.cars)e.pilot!==t&&c.push({x:e.state.x,z:e.state.z,heading:e.state.heading,color:e.racer.color,me:!1,human:!!e.pilot});c.push({x:r.x,z:r.z,heading:r.heading,color:t.color,me:!0}),t.hud.drawMinimap(c)}this.wrongWayTime=this.pilots[0]?.wrongWayTime??0}}function E_(e,t){let n=e.state,r=e.vehicle,i=this.spawnAcc.get(e)??{flame:0,smoke:0};if(this.spawnAcc.set(e,i),(n.boosting||n.fx.turbo>0)&&t>0){i.flame+=t*70,r.object.updateMatrixWorld();let e=-Math.sin(n.heading),a=-Math.cos(n.heading);for(;i.flame>=1;){--i.flame;for(let t=0;t<r.model.exhausts.length;t++){r.exhaustWorld(t,Wg);let i=6+Math.random()*5,o=n.boosting?Math.random()<.5?[.55,.9,1]:[.3,.55,1]:[1,.45+Math.random()*.25,.12];this.flames.spawn(Wg.x+(Math.random()-.5)*.15,Wg.y+(Math.random()-.5)*.1,Wg.z+(Math.random()-.5)*.15,n.vx*.55+e*i,.4+Math.random()*.6,n.vz*.55+a*i,.22+Math.random()*.12,.45,o[0],o[1],o[2],1.6)}}}else i.flame=0;if(n.drifting&&Math.abs(n.forwardSpeed)>12&&t>0){i.smoke+=t*30;let e=Math.cos(n.heading),a=-Math.sin(n.heading),o=-Math.sin(n.heading),s=-Math.cos(n.heading),c=r.spec.shape.axleR;for(;i.smoke>=1;){--i.smoke;for(let t of[-1,1]){let i=n.x+e*t*r.spec.shape.track-o*c,l=n.z+a*t*r.spec.shape.track-s*c;this.smoke.spawn(i,n.y+.25,l,n.vx*.2,.8,n.vz*.2,.9,.9,.86,.86,.88,3.2)}}}else i.smoke=0}function D_(){for(let e of this.items.drainEvents()){if(e.type!==`pickup`)continue;let t=e.item;Y($,this,O_).call(this,t);let n=e.car?this.pilots.find(t=>t.vehicle.state===e.car.state):null;if(n&&this.mode===`playing`){let e=Hf[t.type];n.hud.message(e.name,e.label,1.3,`item-${t.type}`),this.audio.pickup(t.type)}n&&this.netRace?.role===`guest`&&(this.netRace.pending.set(t.id,this.time+1.5),this.online.sendPick(t.id))}}function O_(e){let t=new W(Hf[e.type].color);for(let n=0;n<26;n++){let n=Math.random()*Math.PI*2,r=4+Math.random()*6;this.flames.spawn(e.x,e.y+1.4,e.z,Math.cos(n)*r,1+Math.random()*4,Math.sin(n)*r,.5,.5,t.r,t.g,t.b,.8)}}function k_(){let e=this.track.portals,t=this.track.path.length;for(let n of this.pilots){let r=n.vehicle.state.s;if(e&&this.mode===`playing`){let i=r-n.prevS;if(i<-t/2&&(i+=t),i>0&&i<40)for(let r of e){let e=r.s-n.prevS;e<0&&(e+=t),e>0&&e<=i&&(this.audio.portal(),n.hud.portalFlash?.())}}n.prevS=r}this.pilots[0]&&(this.prevPlayerS=this.pilots[0].prevS)}function A_(e){return this.pilots.find(t=>t.racer===e)??null}function j_(e){e.done=!0,this.input.setPlayerEnabled(e.index,!1),e.index===0&&this.touch.release(),this.playerDone=this.pilots[0].done}function M_(){let e=this.netRace?.role===`host`;for(let t of this.race.drainEvents())switch(e&&this.online.sendEvent(sh(t)),t.type){case`count`:for(let e of this.pilots)e.hud.countdown(t.value);this.audio.countBeep();break;case`go`:for(let e of this.pilots)e.hud.countdown(`GO`);this.audio.goBeep(),this.goTimer=.9;break;case`checkpoint`:{let e=Y($,this,A_).call(this,t.racer);e&&(e.hud.message(`CHECKPOINT ${t.index}/${this.race.checkpoints.length}`,``,1.1,`cp`),this.audio.checkpoint());break}case`lap`:{let e=Y($,this,A_).call(this,t.racer);if(e){let n=t.lapTime.toFixed(2).replace(`.`,`,`);this.raceMode===`race`?e.hud.message(t.final?`LAP TERAKHIR!`:`LAP ${t.lap}/${this.race.totalLaps}`,`Lap sebelumnya ${n} detik${t.isBest?` · TERBAIK`:``}`,2.4,t.final?`best`:``):e.hud.message(t.isBest?`REKOR BARU!`:`LAP ${t.lap-1} SELESAI`,`Waktu lap ${n} detik`,2.6,t.isBest?`best`:``),this.audio.lap(t.isBest)}break}case`finish`:{let e=Y($,this,A_).call(this,t.racer);if(e){Y($,this,j_).call(this,e);let n=t.place===1;e.hud.message(n?`JUARA 1!`:`FINIS!`,`Posisi ${t.place} · ${t.time.toFixed(2).replace(`.`,`,`)} detik`,Vg,n?`best`:``),this.audio.finish(n),Y($,this,w_).call(this)&&(this.resultsTimer=Vg)}else t.racer?.isPlayer&&Y($,this,w_).call(this)&&this.resultsTimer<=0&&(this.resultsTimer=Vg);if(t.place===1)for(let n of this.pilots)n!==e&&!n.done&&n.hud.message(`${t.racer.name} FINIS PERTAMA`,`Selesaikan balapan dalam ${Bg} detik!`,2.4,`warn`);break}case`dnf`:{let e=Y($,this,A_).call(this,t.racer);e?(Y($,this,j_).call(this,e),e.hud.message(`WAKTU HABIS`,`Kamu tidak sempat finis`,2.2,`warn`),this.audio.finish(!1),Y($,this,w_).call(this)&&(this.resultsTimer=Math.max(this.resultsTimer,2.2))):t.racer?.isPlayer&&Y($,this,w_).call(this)&&this.resultsTimer<=0&&(this.resultsTimer=2.2);break}}}function N_(e,t){let n=e.position,r=this.mode===`playing`&&this.raceMode===`race`,i=this.rivals.map(e=>e.vehicle);i.push(this.vehicle),this.vehicle2&&i.push(this.vehicle2);for(let e of i){let i=e.nameTag;if(!i)continue;let a=r&&e!==t?n.distanceTo(e.object.position):1/0;i.visible=a>14&&a<95}}function P_(e){this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,this.sunDistance??160)}function F_(e){let t=this.fps;t.frames++,t.time+=e,t.time>=.5&&(t.value=Math.round(t.frames/t.time),t.frames=0,t.time=0,(this.debug||this.settings.showFps)&&this.hud.setFps(t.value,im[this.qualityLevel].label))}function I_(){pm(this.settings),this.menuView===`online`&&this.netRefreshCar(),this.online.sendProfile()}function L_(){return this.netRace.byId||(this.netRace.byId=new Map(this.cars.map(e=>[e.racer.id,e]))),this.netRace.byId}function R_(e){let t=this.netRace;this.items.items.forEach((n,r)=>{let i=e[r]===`1`,a=t.pending.get(n.id);if(a!==void 0){if(i&&this.time<a)return;t.pending.delete(n.id)}n.active&&!i&&t.itemBits&&Y($,this,O_).call(this,n),n.active=i,i||(n.timer=999)}),t.itemBits=e}function z_(){try{let e=document.createElement(`canvas`);return!!(window.WebGL2RenderingContext&&e.getContext(`webgl2`))}catch{return!1}}function B_(e,t){let n=document.getElementById(`fatal`);n.querySelector(`h1`).textContent=e,n.querySelector(`p`).textContent=t,n.hidden=!1,document.getElementById(`loading`)?.remove()}async function V_(){if(!document.fonts?.load)return;let e=Promise.all([document.fonts.load(`400 64px "Russo One"`),document.fonts.load(`700 32px "Rajdhani"`),document.fonts.load(`600 32px "Rajdhani"`)]);await Promise.race([e,new Promise(e=>setTimeout(e,2500))]).catch(()=>{})}async function H_(){if(!z_()){B_(`WebGL 2 tidak tersedia`,`Game ini membutuhkan WebGL 2. Gunakan Google Chrome/Edge versi terbaru, aktifkan "Use graphics acceleration when available" di Pengaturan > Sistem, lalu perbarui driver kartu grafis.`);return}await V_();let e=new URLSearchParams(location.search).has(`debug`);try{let t=new Kg({container:document.getElementById(`stage`),hudRoot:document.getElementById(`hud`),menuRoot:document.getElementById(`menu`),touchRoot:document.getElementById(`touch`),debug:e});e&&(window.__skantri=t)}catch(e){console.error(e),B_(`Gagal memulai game`,String(e?.message||e));return}let t=document.getElementById(`loading`);t.classList.add(`done`),setTimeout(()=>t.remove(),600)}H_();