(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('vue-displacement-slideshow',[],t):'object'==typeof exports?exports['vue-displacement-slideshow']=t():e['vue-displacement-slideshow']=t()})('undefined'==typeof self?this:self,function(){var e=Math.LOG2E,t=Math.asin,r=Math.tan,a=Math.atan,n=Number.EPSILON,o=Math.pow,i=Math.LN2,s=Math.log,m=Math.PI,l=Math.atan2,g=Math.cos,h=Math.sin,d=Math.acos,f=Math.abs,p=Math.sqrt,u=Math.round,c=Math.ceil,_=Math.floor,T=Math.max,M=Math.min;return function(e){function t(a){if(r[a])return r[a].exports;var i=r[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(r,'a',r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=40)}([function(e,t,r){'use strict';function a(e,t,r){this.x=e||0,this.y=t||0,this.z=r||0}r.d(t,'a',function(){return a});var i=r(3),n=r(13),o=new a,s=new n.a;Object.assign(a.prototype,{isVector3:!0,set:function(e,t,r){return this.x=e,this.y=t,this.z=r,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error('index is out of range: '+e);}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error('index is out of range: '+e);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return void 0===t?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this):(console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),this.addVectors(e,t))},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return void 0===t?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this):(console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),this.subVectors(e,t))},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return void 0===t?(this.x*=e.x,this.y*=e.y,this.z*=e.z,this):(console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'),this.multiplyVectors(e,t))},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(e){return e&&e.isEuler||console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'),this.applyQuaternion(s.setFromEuler(e))},applyAxisAngle:function(e,t){return this.applyQuaternion(s.setFromAxisAngle(e,t))},applyMatrix3:function(t){var r=this.x,a=this.y,i=this.z,n=t.elements;return this.x=n[0]*r+n[3]*a+n[6]*i,this.y=n[1]*r+n[4]*a+n[7]*i,this.z=n[2]*r+n[5]*a+n[8]*i,this},applyNormalMatrix:function(e){return this.applyMatrix3(e).normalize()},applyMatrix4:function(t){var r=this.x,a=this.y,i=this.z,n=t.elements,e=1/(n[3]*r+n[7]*a+n[11]*i+n[15]);return this.x=(n[0]*r+n[4]*a+n[8]*i+n[12])*e,this.y=(n[1]*r+n[5]*a+n[9]*i+n[13])*e,this.z=(n[2]*r+n[6]*a+n[10]*i+n[14])*e,this},applyQuaternion:function(e){var t=this.x,r=this.y,a=this.z,i=e.x,n=e.y,o=e.z,s=e.w,l=s*t+n*a-o*r,d=s*r+o*t-i*a,p=s*a+i*r-n*t,c=-i*t-n*r-o*a;return this.x=l*s+c*-i+d*-o-p*-n,this.y=d*s+c*-n+p*-i-l*-o,this.z=p*s+c*-o+l*-n-d*-i,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)},transformDirection:function(t){var r=this.x,a=this.y,i=this.z,n=t.elements;return this.x=n[0]*r+n[4]*a+n[8]*i,this.y=n[1]*r+n[5]*a+n[9]*i,this.z=n[2]*r+n[6]*a+n[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=M(this.x,e.x),this.y=M(this.y,e.y),this.z=M(this.z,e.z),this},max:function(e){return this.x=T(this.x,e.x),this.y=T(this.y,e.y),this.z=T(this.z,e.z),this},clamp:function(e,t){return this.x=T(e.x,M(t.x,this.x)),this.y=T(e.y,M(t.y,this.y)),this.z=T(e.z,M(t.z,this.z)),this},clampScalar:function(e,t){return this.x=T(e,M(t,this.x)),this.y=T(e,M(t,this.y)),this.z=T(e,M(t,this.z)),this},clampLength:function(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(T(e,M(t,r)))},floor:function(){return this.x=_(this.x),this.y=_(this.y),this.z=_(this.z),this},ceil:function(){return this.x=c(this.x),this.y=c(this.y),this.z=c(this.z),this},round:function(){return this.x=u(this.x),this.y=u(this.y),this.z=u(this.z),this},roundToZero:function(){return this.x=0>this.x?c(this.x):_(this.x),this.y=0>this.y?c(this.y):_(this.y),this.z=0>this.z?c(this.z):_(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return p(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return f(this.x)+f(this.y)+f(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e)},cross:function(e,t){return void 0===t?this.crossVectors(this,e):(console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'),this.crossVectors(e,t))},crossVectors:function(e,t){var r=e.x,a=e.y,i=e.z,n=t.x,o=t.y,s=t.z;return this.x=a*s-i*o,this.y=i*n-r*s,this.z=r*o-a*n,this},projectOnVector:function(e){var t=e.dot(this)/e.lengthSq();return this.copy(e).multiplyScalar(t)},projectOnPlane:function(e){return o.copy(this).projectOnVector(e),this.sub(o)},reflect:function(e){return this.sub(o.copy(e).multiplyScalar(2*this.dot(e)))},angleTo:function(e){var t=p(this.lengthSq()*e.lengthSq());0===t&&console.error('THREE.Vector3: angleTo() can\'t handle zero length vectors.');var r=this.dot(e)/t;return d(i.a.clamp(r,-1,1))},distanceTo:function(e){return p(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a},manhattanDistanceTo:function(e){return f(this.x-e.x)+f(this.y-e.y)+f(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,r){var a=h(t)*e;return this.x=a*h(r),this.y=g(t)*e,this.z=a*g(r),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,r){return this.x=e*h(t),this.y=r,this.z=e*g(t),this},setFromMatrixPosition:function(t){var r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this},setFromMatrixScale:function(e){var t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,4*t)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,r){return void 0!==r&&console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().'),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}})},function(e,t,r){'use strict';r.d(t,'s',function(){return a}),r.d(t,'q',function(){return i}),r.d(t,'r',function(){return n}),r.d(t,'_16',function(){return o}),r.d(t,'_17',function(){return s}),r.d(t,'_73',function(){return l}),r.d(t,'E',function(){return d}),r.d(t,'h',function(){return p}),r.d(t,'w',function(){return c}),r.d(t,'C',function(){return u}),r.d(t,'_6',function(){return m}),r.d(t,'_5',function(){return g}),r.d(t,'_8',function(){return f}),r.d(t,'d',function(){return h}),r.d(t,'_59',function(){return y}),r.d(t,'Z',function(){return x}),r.d(t,'t',function(){return v}),r.d(t,'b',function(){return _}),r.d(t,'_58',function(){return b}),r.d(t,'_51',function(){return T}),r.d(t,'W',function(){return M}),r.d(t,'V',function(){return E}),r.d(t,'_74',function(){return S}),r.d(t,'_11',function(){return w}),r.d(t,'_56',function(){return A}),r.d(t,'_15',function(){return R}),r.d(t,'_54',function(){return L}),r.d(t,'_14',function(){return P}),r.d(t,'x',function(){return C}),r.d(t,'_12',function(){return I}),r.d(t,'y',function(){return D}),r.d(t,'_13',function(){return N}),r.d(t,'_55',function(){return z}),r.d(t,'_4',function(){return U}),r.d(t,'f',function(){return F}),r.d(t,'L',function(){return B}),r.d(t,'M',function(){return O}),r.d(t,'z',function(){return G}),r.d(t,'H',function(){return V}),r.d(t,'G',function(){return H}),r.d(t,'_9',function(){return k}),r.d(t,'_0',function(){return W}),r.d(t,'Y',function(){return j}),r.d(t,'c',function(){return X}),r.d(t,'_7',function(){return q}),r.d(t,'R',function(){return Y}),r.d(t,'_49',function(){return Z}),r.d(t,'_65',function(){return J}),r.d(t,'k',function(){return Q}),r.d(t,'a',function(){return K}),r.d(t,'_64',function(){return $}),r.d(t,'m',function(){return ee}),r.d(t,'n',function(){return te}),r.d(t,'A',function(){return re}),r.d(t,'B',function(){return ae}),r.d(t,'_53',function(){return ie}),r.d(t,'o',function(){return ne}),r.d(t,'p',function(){return oe}),r.d(t,'_50',function(){return se}),r.d(t,'l',function(){return le}),r.d(t,'X',function(){return de}),r.d(t,'_1',function(){return pe}),r.d(t,'_3',function(){return ce}),r.d(t,'_2',function(){return ue}),r.d(t,'O',function(){return me}),r.d(t,'Q',function(){return ge}),r.d(t,'P',function(){return fe}),r.d(t,'_66',function(){return he}),r.d(t,'j',function(){return ye}),r.d(t,'_52',function(){return xe}),r.d(t,'_72',function(){return ve}),r.d(t,'J',function(){return _e}),r.d(t,'_68',function(){return be}),r.d(t,'D',function(){return Te}),r.d(t,'I',function(){return Me}),r.d(t,'_69',function(){return Ee}),r.d(t,'_70',function(){return Se}),r.d(t,'_71',function(){return we}),r.d(t,'_67',function(){return Ae}),r.d(t,'e',function(){return Re}),r.d(t,'_41',function(){return Le}),r.d(t,'_19',function(){return Pe}),r.d(t,'U',function(){return Ce}),r.d(t,'T',function(){return Ie}),r.d(t,'u',function(){return De}),r.d(t,'v',function(){return Ne}),r.d(t,'_48',function(){return ze}),r.d(t,'_47',function(){return Ue}),r.d(t,'_36',function(){return Fe}),r.d(t,'_37',function(){return Be}),r.d(t,'_38',function(){return Oe}),r.d(t,'_46',function(){return Ge}),r.d(t,'_45',function(){return Ve}),r.d(t,'_35',function(){return He}),r.d(t,'_34',function(){return ke}),r.d(t,'_44',function(){return We}),r.d(t,'_26',function(){return je}),r.d(t,'_27',function(){return Xe}),r.d(t,'_28',function(){return qe}),r.d(t,'_29',function(){return Ye}),r.d(t,'_30',function(){return Ze}),r.d(t,'_31',function(){return Je}),r.d(t,'_32',function(){return Qe}),r.d(t,'_33',function(){return Ke}),r.d(t,'_21',function(){return $e}),r.d(t,'_22',function(){return et}),r.d(t,'_23',function(){return tt}),r.d(t,'_20',function(){return rt}),r.d(t,'_24',function(){return at}),r.d(t,'_25',function(){return it}),r.d(t,'_63',function(){return nt}),r.d(t,'_62',function(){return ot}),r.d(t,'_61',function(){return st}),r.d(t,'N',function(){return lt}),r.d(t,'_75',function(){return dt}),r.d(t,'F',function(){return pt}),r.d(t,'_40',function(){return ct}),r.d(t,'S',function(){return ut}),r.d(t,'_43',function(){return mt}),r.d(t,'_42',function(){return gt}),r.d(t,'_39',function(){return ft}),r.d(t,'i',function(){return ht}),r.d(t,'_18',function(){return yt}),r.d(t,'_60',function(){return xt}),r.d(t,'_10',function(){return vt}),r.d(t,'K',function(){return _t}),r.d(t,'g',function(){return bt}),r.d(t,'_57',function(){return Tt});var a=0,i=1,n=2,o=1,s=2,l=3,d=0,p=1,c=2,u=1,m=0,g=0,f=1,h=2,y=3,x=4,v=5,_=100,b=101,T=102,M=103,E=104,S=200,w=201,A=202,R=203,L=204,P=205,C=206,I=207,D=208,N=209,z=210,U=0,F=1,B=2,O=3,G=4,V=5,H=6,k=7,W=0,j=1,X=2,q=0,Y=1,Z=2,J=3,Q=4,K=5,$=300,ee=301,te=302,re=303,ae=304,ie=305,ne=306,oe=307,se=1e3,le=1001,de=1002,pe=1003,ce=1004,ue=1005,me=1006,ge=1007,fe=1008,he=1009,ye=1010,xe=1011,ve=1012,_e=1013,be=1014,Te=1015,Me=1016,Ee=1017,Se=1018,we=1019,Ae=1020,Re=1021,Le=1022,Pe=1023,Ce=1024,Ie=1025,De=1026,Ne=1027,ze=1028,Ue=33776,Fe=33777,Be=33778,Oe=33779,Ge=35840,Ve=35841,He=35842,ke=35843,We=36196,je=37808,Xe=37809,qe=37810,Ye=37811,Ze=37812,Je=37813,Qe=37814,Ke=37815,$e=37816,et=37817,tt=37818,rt=37819,at=37820,it=37821,nt=0,ot=1,st=2,lt=3e3,dt=3001,pt=3007,ct=3002,ut=3003,mt=3004,gt=3005,ft=3006,ht=3200,yt=3201,xt=0,vt=1,_t=7680,bt=519,Tt=35044},function(e,t,r){'use strict';function a(e,t){this.x=e||0,this.y=t||0}r.d(t,'a',function(){return a}),Object.defineProperties(a.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}}),Object.assign(a.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error('index is out of range: '+e);}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error('index is out of range: '+e);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return void 0===t?(this.x+=e.x,this.y+=e.y,this):(console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),this.addVectors(e,t))},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return void 0===t?(this.x-=e.x,this.y-=e.y,this):(console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),this.subVectors(e,t))},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(t){var r=this.x,a=this.y,i=t.elements;return this.x=i[0]*r+i[3]*a+i[6],this.y=i[1]*r+i[4]*a+i[7],this},min:function(e){return this.x=M(this.x,e.x),this.y=M(this.y,e.y),this},max:function(e){return this.x=T(this.x,e.x),this.y=T(this.y,e.y),this},clamp:function(e,t){return this.x=T(e.x,M(t.x,this.x)),this.y=T(e.y,M(t.y,this.y)),this},clampScalar:function(e,t){return this.x=T(e,M(t,this.x)),this.y=T(e,M(t,this.y)),this},clampLength:function(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(T(e,M(t,r)))},floor:function(){return this.x=_(this.x),this.y=_(this.y),this},ceil:function(){return this.x=c(this.x),this.y=c(this.y),this},round:function(){return this.x=u(this.x),this.y=u(this.y),this},roundToZero:function(){return this.x=0>this.x?c(this.x):_(this.x),this.y=0>this.y?c(this.y):_(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return p(this.x*this.x+this.y*this.y)},manhattanLength:function(){return f(this.x)+f(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var e=l(this.y,this.x);return 0>e&&(e+=2*m),e},distanceTo:function(e){return p(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,r=this.y-e.y;return t*t+r*r},manhattanDistanceTo:function(e){return f(this.x-e.x)+f(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,r){return void 0!==r&&console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().'),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){var r=g(t),a=h(t),i=this.x-e.x,n=this.y-e.y;return this.x=i*r-n*a+e.x,this.y=i*a+n*r+e.y,this}})},function(e,t,r){'use strict';r.d(t,'a',function(){return l});for(var a=[],n=0;256>n;n++)a[n]=(16>n?'0':'')+n.toString(16);var l={DEG2RAD:m/180,RAD2DEG:180/m,generateUUID:function(){var e=0|4294967295*Math.random(),t=0|4294967295*Math.random(),r=0|4294967295*Math.random(),i=0|4294967295*Math.random(),n=a[255&e]+a[255&e>>8]+a[255&e>>16]+a[255&e>>24]+'-'+a[255&t]+a[255&t>>8]+'-'+a[64|15&t>>16]+a[255&t>>24]+'-'+a[128|63&r]+a[255&r>>8]+'-'+a[255&r>>16]+a[255&r>>24]+a[255&i]+a[255&i>>8]+a[255&i>>16]+a[255&i>>24];return n.toUpperCase()},clamp:function(e,t,r){return T(t,M(r,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,r,a,i){return a+(e-t)*(i-a)/(r-t)},lerp:function(e,r,a){return(1-a)*e+a*r},smoothstep:function(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*(3-2*e))},smootherstep:function(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*e*(e*(6*e-15)+10))},randInt:function(e,t){return e+_(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*l.DEG2RAD},radToDeg:function(e){return e*l.RAD2DEG},isPowerOfTwo:function(e){return 0==(e&e-1)&&0!==e},ceilPowerOfTwo:function(e){return o(2,c(s(e)/i))},floorPowerOfTwo:function(e){return o(2,_(s(e)/i))}}},function(e,t,r){'use strict';function a(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],0<arguments.length&&console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.')}r.d(t,'a',function(){return a});var i=r(0),n=new i.a,o=new a,s=new i.a(0,0,0),l=new i.a(1,1,1),d=new i.a,c=new i.a,u=new i.a;Object.assign(a.prototype,{isMatrix4:!0,set:function(e,t,r,a,i,n,o,s,l,d,p,c,u,m,g,f){var h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=a,h[1]=i,h[5]=n,h[9]=o,h[13]=s,h[2]=l,h[6]=d,h[10]=p,h[14]=c,h[3]=u,h[7]=m,h[11]=g,h[15]=f,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new a().fromArray(this.elements)},copy:function(e){var t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this},copyPosition:function(e){var t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this},extractBasis:function(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this},extractRotation:function(e){var t=this.elements,r=e.elements,a=1/n.setFromMatrixColumn(e,0).length(),i=1/n.setFromMatrixColumn(e,1).length(),o=1/n.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromEuler:function(t){t&&t.isEuler||console.error('THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.');var r=this.elements,i=t.x,n=t.y,o=t.z,s=g(i),l=h(i),p=g(n),u=h(n),m=g(o),e=h(o);if('XYZ'===t.order){var y=s*m,x=s*e,v=l*m,_=l*e;r[0]=p*m,r[4]=-p*e,r[8]=u,r[1]=x+v*u,r[5]=y-_*u,r[9]=-l*p,r[2]=_-y*u,r[6]=v+x*u,r[10]=s*p}else if('YXZ'===t.order){var T=p*m,M=p*e,E=u*m,S=u*e;r[0]=T+S*l,r[4]=E*l-M,r[8]=s*u,r[1]=s*e,r[5]=s*m,r[9]=-l,r[2]=M*l-E,r[6]=S+T*l,r[10]=s*p}else if('ZXY'===t.order){var T=p*m,M=p*e,E=u*m,S=u*e;r[0]=T-S*l,r[4]=-s*e,r[8]=E+M*l,r[1]=M+E*l,r[5]=s*m,r[9]=S-T*l,r[2]=-s*u,r[6]=l,r[10]=s*p}else if('ZYX'===t.order){var y=s*m,x=s*e,v=l*m,_=l*e;r[0]=p*m,r[4]=v*u-x,r[8]=y*u+_,r[1]=p*e,r[5]=_*u+y,r[9]=x*u-v,r[2]=-u,r[6]=l*p,r[10]=s*p}else if('YZX'===t.order){var w=s*p,A=s*u,R=l*p,L=l*u;r[0]=p*m,r[4]=L-w*e,r[8]=R*e+A,r[1]=e,r[5]=s*m,r[9]=-l*m,r[2]=-u*m,r[6]=A*e+R,r[10]=w-L*e}else if('XZY'===t.order){var w=s*p,A=s*u,R=l*p,L=l*u;r[0]=p*m,r[4]=-e,r[8]=u*m,r[1]=w*e+L,r[5]=s*m,r[9]=A*e-R,r[2]=R*e-A,r[6]=l*m,r[10]=L*e+w}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this},makeRotationFromQuaternion:function(e){return this.compose(s,e,l)},lookAt:function(e,t,r){var a=this.elements;return u.subVectors(e,t),0===u.lengthSq()&&(u.z=1),u.normalize(),d.crossVectors(r,u),0===d.lengthSq()&&(1===f(r.z)?u.x+=1e-4:u.z+=1e-4,u.normalize(),d.crossVectors(r,u)),d.normalize(),c.crossVectors(u,d),a[0]=d.x,a[4]=c.x,a[8]=u.x,a[1]=d.y,a[5]=c.y,a[9]=u.y,a[2]=d.z,a[6]=c.z,a[10]=u.z,this},multiply:function(e,t){return void 0===t?this.multiplyMatrices(this,e):(console.warn('THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'),this.multiplyMatrices(e,t))},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var r=e.elements,a=t.elements,i=this.elements,n=r[0],o=r[4],s=r[8],l=r[12],d=r[1],p=r[5],c=r[9],u=r[13],m=r[2],g=r[6],f=r[10],h=r[14],y=r[3],x=r[7],v=r[11],_=r[15],b=a[0],T=a[4],M=a[8],E=a[12],S=a[1],w=a[5],A=a[9],R=a[13],L=a[2],P=a[6],C=a[10],I=a[14],D=a[3],N=a[7],z=a[11],U=a[15];return i[0]=n*b+o*S+s*L+l*D,i[4]=n*T+o*w+s*P+l*N,i[8]=n*M+o*A+s*C+l*z,i[12]=n*E+o*R+s*I+l*U,i[1]=d*b+p*S+c*L+u*D,i[5]=d*T+p*w+c*P+u*N,i[9]=d*M+p*A+c*C+u*z,i[13]=d*E+p*R+c*I+u*U,i[2]=m*b+g*S+f*L+h*D,i[6]=m*T+g*w+f*P+h*N,i[10]=m*M+g*A+f*C+h*z,i[14]=m*E+g*R+f*I+h*U,i[3]=y*b+x*S+v*L+_*D,i[7]=y*T+x*w+v*P+_*N,i[11]=y*M+x*A+v*C+_*z,i[15]=y*E+x*R+v*I+_*U,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},applyToBufferAttribute:function(e){for(var t=0,r=e.count;t<r;t++)n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.applyMatrix4(this),e.setXYZ(t,n.x,n.y,n.z);return e},determinant:function(){var e=this.elements,t=e[0],r=e[4],a=e[8],i=e[12],n=e[1],o=e[5],s=e[9],l=e[13],d=e[2],p=e[6],c=e[10],u=e[14],m=e[3],g=e[7],f=e[11],h=e[15];return m*(+i*s*p-a*l*p-i*o*c+r*l*c+a*o*u-r*s*u)+g*(+t*s*u-t*l*c+i*n*c-a*n*u+a*l*d-i*s*d)+f*(+t*l*p-t*o*u-i*n*p+r*n*u+i*o*d-r*l*d)+h*(-a*o*d-t*s*p+t*o*c+a*n*p-r*n*c+r*s*d)},transpose:function(){var e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e,t,r){var a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this},getInverse:function(e,t){var r=this.elements,a=e.elements,i=a[0],n=a[1],o=a[2],s=a[3],l=a[4],d=a[5],p=a[6],c=a[7],u=a[8],m=a[9],g=a[10],f=a[11],h=a[12],y=a[13],x=a[14],v=a[15],_=m*x*c-y*g*c+y*p*f-d*x*f-m*p*v+d*g*v,b=h*g*c-u*x*c-h*p*f+l*x*f+u*p*v-l*g*v,T=u*y*c-h*m*c+h*d*f-l*y*f-u*d*v+l*m*v,M=h*m*p-u*y*p-h*d*g+l*y*g+u*d*x-l*m*x,E=i*_+n*b+o*T+s*M;if(0==E){var S='THREE.Matrix4: .getInverse() can\'t invert matrix, determinant is 0';if(!0===t)throw new Error(S);else console.warn(S);return this.identity()}var w=1/E;return r[0]=_*w,r[1]=(y*g*s-m*x*s-y*o*f+n*x*f+m*o*v-n*g*v)*w,r[2]=(d*x*s-y*p*s+y*o*c-n*x*c-d*o*v+n*p*v)*w,r[3]=(m*p*s-d*g*s-m*o*c+n*g*c+d*o*f-n*p*f)*w,r[4]=b*w,r[5]=(u*x*s-h*g*s+h*o*f-i*x*f-u*o*v+i*g*v)*w,r[6]=(h*p*s-l*x*s-h*o*c+i*x*c+l*o*v-i*p*v)*w,r[7]=(l*g*s-u*p*s+u*o*c-i*g*c-l*o*f+i*p*f)*w,r[8]=T*w,r[9]=(h*m*s-u*y*s-h*n*f+i*y*f+u*n*v-i*m*v)*w,r[10]=(l*y*s-h*d*s+h*n*c-i*y*c-l*n*v+i*d*v)*w,r[11]=(u*d*s-l*m*s-u*n*c+i*m*c+l*n*f-i*d*f)*w,r[12]=M*w,r[13]=(u*y*o-h*m*o+h*n*g-i*y*g-u*n*x+i*m*x)*w,r[14]=(h*d*o-l*y*o-h*n*p+i*y*p+l*n*x-i*d*x)*w,r[15]=(l*m*o-u*d*o+u*n*p-i*m*p-l*n*g+i*d*g)*w,this},scale:function(e){var t=this.elements,r=e.x,a=e.y,i=e.z;return t[0]*=r,t[4]*=a,t[8]*=i,t[1]*=r,t[5]*=a,t[9]*=i,t[2]*=r,t[6]*=a,t[10]*=i,t[3]*=r,t[7]*=a,t[11]*=i,this},getMaxScaleOnAxis:function(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return p(T(t,r,a))},makeTranslation:function(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this},makeRotationX:function(e){var t=g(e),r=h(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this},makeRotationY:function(e){var t=g(e),r=h(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this},makeRotationZ:function(e){var t=g(e),r=h(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,r){var a=g(r),i=h(r),n=1-a,t=e.x,o=e.y,s=e.z,l=n*t,d=n*o;return this.set(l*t+a,l*o-i*s,l*s+i*o,0,l*o+i*s,d*o+a,d*s-i*t,0,l*s-i*o,d*s+i*t,n*s*s+a,0,0,0,0,1),this},makeScale:function(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this},makeShear:function(e,t,r){return this.set(1,t,r,0,e,1,r,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,r){var a=this.elements,i=t._x,n=t._y,o=t._z,s=t._w,l=i+i,d=n+n,p=o+o,c=i*l,u=i*d,m=i*p,g=n*d,f=n*p,h=o*p,y=s*l,x=s*d,v=s*p,_=r.x,b=r.y,T=r.z;return a[0]=(1-(g+h))*_,a[1]=(u+v)*_,a[2]=(m-x)*_,a[3]=0,a[4]=(u-v)*b,a[5]=(1-(c+h))*b,a[6]=(f+y)*b,a[7]=0,a[8]=(m+x)*T,a[9]=(f-y)*T,a[10]=(1-(c+g))*T,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this},decompose:function(e,t,r){var a=this.elements,i=n.set(a[0],a[1],a[2]).length(),s=n.set(a[4],a[5],a[6]).length(),l=n.set(a[8],a[9],a[10]).length(),d=this.determinant();0>d&&(i=-i),e.x=a[12],e.y=a[13],e.z=a[14],o.copy(this);var p=1/i,c=1/s,u=1/l;return o.elements[0]*=p,o.elements[1]*=p,o.elements[2]*=p,o.elements[4]*=c,o.elements[5]*=c,o.elements[6]*=c,o.elements[8]*=u,o.elements[9]*=u,o.elements[10]*=u,t.setFromRotationMatrix(o),r.x=i,r.y=s,r.z=l,this},makePerspective:function(e,t,r,a,i,n){void 0===n&&console.warn('THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.');var o=this.elements;return o[0]=2*i/(t-e),o[4]=0,o[8]=(t+e)/(t-e),o[12]=0,o[1]=0,o[5]=2*i/(r-a),o[9]=(r+a)/(r-a),o[13]=0,o[2]=0,o[6]=0,o[10]=-(n+i)/(n-i),o[14]=-2*n*i/(n-i),o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},makeOrthographic:function(e,t,r,a,i,n){var o=this.elements,s=1/(t-e),l=1/(r-a),d=1/(n-i);return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-((t+e)*s),o[1]=0,o[5]=2*l,o[9]=0,o[13]=-((r+a)*l),o[2]=0,o[6]=0,o[10]=-2*d,o[14]=-((n+i)*d),o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},equals:function(e){for(var t=this.elements,r=e.elements,a=0;16>a;a++)if(t[a]!==r[a])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var r=0;16>r;r++)this.elements[r]=e[r+t];return this},toArray:function(e,t){void 0===e&&(e=[]),void 0===t&&(t=0);var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}})},function(e,t,r){'use strict';function a(){this.elements=[1,0,0,0,1,0,0,0,1],0<arguments.length&&console.error('THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.')}r.d(t,'a',function(){return a});var i=r(0),n=new i.a;Object.assign(a.prototype,{isMatrix3:!0,set:function(e,t,r,a,i,n,o,s,l){var d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=i,d[5]=s,d[6]=r,d[7]=n,d[8]=l,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){var t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this},setFromMatrix4:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},applyToBufferAttribute:function(e){for(var t=0,r=e.count;t<r;t++)n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.applyMatrix3(this),e.setXYZ(t,n.x,n.y,n.z);return e},multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var r=e.elements,a=t.elements,i=this.elements,n=r[0],o=r[3],s=r[6],l=r[1],d=r[4],p=r[7],c=r[2],u=r[5],m=r[8],g=a[0],f=a[3],h=a[6],y=a[1],x=a[4],v=a[7],_=a[2],b=a[5],T=a[8];return i[0]=n*g+o*y+s*_,i[3]=n*f+o*x+s*b,i[6]=n*h+o*v+s*T,i[1]=l*g+d*y+p*_,i[4]=l*f+d*x+p*b,i[7]=l*h+d*v+p*T,i[2]=c*g+u*y+m*_,i[5]=c*f+u*x+m*b,i[8]=c*h+u*v+m*T,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){var t=this.elements,r=t[0],a=t[1],n=t[2],o=t[3],s=t[4],e=t[5],l=t[6],d=t[7],p=t[8];return r*s*p-r*e*d-a*o*p+a*e*l+n*o*d-n*s*l},getInverse:function(e,t){e&&e.isMatrix4&&console.error('THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.');var r=e.elements,a=this.elements,i=r[0],n=r[1],o=r[2],s=r[3],l=r[4],d=r[5],p=r[6],c=r[7],u=r[8],m=u*l-d*c,g=d*p-u*s,f=c*s-l*p,h=i*m+n*g+o*f;if(0==h){var y='THREE.Matrix3: .getInverse() can\'t invert matrix, determinant is 0';if(!0===t)throw new Error(y);else console.warn(y);return this.identity()}var x=1/h;return a[0]=m*x,a[1]=(o*c-u*n)*x,a[2]=(d*n-o*l)*x,a[3]=g*x,a[4]=(u*i-o*p)*x,a[5]=(o*s-d*i)*x,a[6]=f*x,a[7]=(n*p-c*i)*x,a[8]=(l*i-n*s)*x,this},transpose:function(){var e=this.elements,t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,r,a,i,n,o){var l=g(i),d=h(i);this.set(r*l,r*d,-r*(l*n+d*o)+n+e,-a*d,a*l,-a*(-d*n+l*o)+o+t,0,0,1)},scale:function(e,t){var r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this},rotate:function(e){var t=g(e),r=h(e),a=this.elements,i=a[0],n=a[3],o=a[6],l=a[1],d=a[4],p=a[7];return a[0]=t*i+r*l,a[3]=t*n+r*d,a[6]=t*o+r*p,a[1]=-r*i+t*l,a[4]=-r*n+t*d,a[7]=-r*o+t*p,this},translate:function(e,t){var r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this},equals:function(e){for(var t=this.elements,r=e.elements,a=0;9>a;a++)if(t[a]!==r[a])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var r=0;9>r;r++)this.elements[r]=e[r+t];return this},toArray:function(e,t){void 0===e&&(e=[]),void 0===t&&(t=0);var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}})},function(e,t,r){'use strict';function a(e,t,r,i,d,c,u,m,g,f){Object.defineProperty(this,'id',{value:p++}),this.uuid=o.a.generateUUID(),this.name='',this.image=e===void 0?a.DEFAULT_IMAGE:e,this.mipmaps=[],this.mapping=t===void 0?a.DEFAULT_MAPPING:t,this.wrapS=r===void 0?n.l:r,this.wrapT=i===void 0?n.l:i,this.magFilter=d===void 0?n.O:d,this.minFilter=c===void 0?n.P:c,this.anisotropy=g===void 0?1:g,this.format=u===void 0?n._19:u,this.type=m===void 0?n._66:m,this.offset=new s.a(0,0),this.repeat=new s.a(1,1),this.center=new s.a(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new l.a,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f===void 0?n.N:f,this.version=0,this.onUpdate=null}r.d(t,'a',function(){return a});var i=r(8),n=r(1),o=r(3),s=r(2),l=r(5),d=r(52),p=0;a.DEFAULT_IMAGE=void 0,a.DEFAULT_MAPPING=n._64,a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){var t=void 0===e||'string'==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];var r={metadata:{version:4.5,type:'Texture',generator:'Texture.toJSON'},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var a=this.image;if(void 0===a.uuid&&(a.uuid=o.a.generateUUID()),!t&&void 0===e.images[a.uuid]){var n;if(Array.isArray(a)){n=[];for(var s=0,i=a.length;s<i;s++)n.push(d.a.getDataURL(a[s]))}else n=d.a.getDataURL(a);e.images[a.uuid]={uuid:a.uuid,url:n}}r.image=a.uuid}return t||(e.textures[this.uuid]=r),r},dispose:function(){this.dispatchEvent({type:'dispose'})},transformUv:function(e){if(this.mapping!==n._64)return e;if(e.applyMatrix3(this.matrix),0>e.x||1<e.x)switch(this.wrapS){case n._50:e.x-=_(e.x);break;case n.l:e.x=0>e.x?0:1;break;case n.X:1===f(_(e.x)%2)?e.x=c(e.x)-e.x:e.x-=_(e.x);}if(0>e.y||1<e.y)switch(this.wrapT){case n._50:e.y-=_(e.y);break;case n.l:e.y=0>e.y?0:1;break;case n.X:1===f(_(e.y)%2)?e.y=c(e.y)-e.y:e.y-=_(e.y);}return this.flipY&&(e.y=1-e.y),e}}),Object.defineProperty(a.prototype,'needsUpdate',{set:function(e){!0===e&&this.version++}})},function(e,t,r){'use strict';function a(){Object.defineProperty(this,'id',{value:m++}),this.uuid=c.a.generateUUID(),this.name='',this.type='Object3D',this.parent=null,this.children=[],this.up=a.DefaultUp.clone();var e=new n.a,t=new l.a,r=new i.a,s=new n.a(1,1,1);t._onChange(function(){r.setFromEuler(t,!1)}),r._onChange(function(){t.setFromQuaternion(r,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new o.a},normalMatrix:{value:new p.a}}),this.matrix=new o.a,this.matrixWorld=new o.a,this.matrixAutoUpdate=a.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new d.a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}r.d(t,'a',function(){return a});var i=r(13),n=r(0),o=r(4),s=r(8),l=r(48),d=r(49),p=r(5),c=r(3),u=r(1),m=0,g=new n.a,f=new i.a,h=new o.a,v=new n.a,_=new n.a,y=new n.a,x=new i.a,b=new n.a(1,0,0),T=new n.a(0,1,0),M=new n.a(0,0,1),E={type:'added'},S={type:'removed'};a.DefaultUp=new n.a(0,1,0),a.DefaultMatrixAutoUpdate=!0,a.prototype=Object.assign(Object.create(s.a.prototype),{constructor:a,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return f.setFromAxisAngle(e,t),this.quaternion.multiply(f),this},rotateOnWorldAxis:function(e,t){return f.setFromAxisAngle(e,t),this.quaternion.premultiply(f),this},rotateX:function(e){return this.rotateOnAxis(b,e)},rotateY:function(e){return this.rotateOnAxis(T,e)},rotateZ:function(e){return this.rotateOnAxis(M,e)},translateOnAxis:function(e,t){return g.copy(e).applyQuaternion(this.quaternion),this.position.add(g.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(b,e)},translateY:function(e){return this.translateOnAxis(T,e)},translateZ:function(e){return this.translateOnAxis(M,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(h.getInverse(this.matrixWorld))},lookAt:function(e,t,r){e.isVector3?v.copy(e):v.set(e,t,r);var a=this.parent;this.updateWorldMatrix(!0,!1),_.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?h.lookAt(_,v,this.up):h.lookAt(v,_,this.up),this.quaternion.setFromRotationMatrix(h),a&&(h.extractRotation(a.matrixWorld),f.setFromRotationMatrix(h),this.quaternion.premultiply(f.inverse()))},add:function(e){if(1<arguments.length){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error('THREE.Object3D.add: object can\'t be added as a child of itself.',e),this):(e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(E)):console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.',e),this)},remove:function(e){if(1<arguments.length){for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}var r=this.children.indexOf(e);return-1!==r&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(S)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),h.getInverse(this.matrixWorld),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),h.multiply(e.parent.matrixWorld)),e.applyMatrix(h),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty('id',e)},getObjectByName:function(e){return this.getObjectByProperty('name',e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var r=0,a=this.children.length;r<a;r++){var i=this.children[r],n=i.getObjectByProperty(e,t);if(n!==void 0)return n}},getWorldPosition:function(e){return void 0===e&&(console.warn('THREE.Object3D: .getWorldPosition() target is now required'),e=new n.a),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return void 0===e&&(console.warn('THREE.Object3D: .getWorldQuaternion() target is now required'),e=new i.a),this.updateMatrixWorld(!0),this.matrixWorld.decompose(_,e,y),e},getWorldScale:function(e){return void 0===e&&(console.warn('THREE.Object3D: .getWorldScale() target is now required'),e=new n.a),this.updateMatrixWorld(!0),this.matrixWorld.decompose(_,x,e),e},getWorldDirection:function(t){t===void 0&&(console.warn('THREE.Object3D: .getWorldDirection() target is now required'),t=new n.a),this.updateMatrixWorld(!0);var r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()},raycast:function(){},traverse:function(e){e(this);for(var t=this.children,r=0,a=t.length;r<a;r++)t[r].traverse(e)},traverseVisible:function(e){if(!1!==this.visible){e(this);for(var t=this.children,r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}},traverseAncestors:function(e){var t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var t=this.children,r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){var r=this.parent;if(!0===e&&null!==r&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t)for(var a=this.children,n=0,i=a.length;n<i;n++)a[n].updateWorldMatrix(!1,!0)},toJSON:function(e){function t(t,r){return void 0===t[r.uuid]&&(t[r.uuid]=r.toJSON(e)),r.uuid}function r(e){var t=[];for(var r in e){var a=e[r];delete a.metadata,t.push(a)}return t}var a=void 0===e||'string'==typeof e,n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:'Object',generator:'Object3D.toJSON'});var o={};if(o.uuid=this.uuid,o.type=this.type,''!==this.name&&(o.name=this.name),!0===this.castShadow&&(o.castShadow=!0),!0===this.receiveShadow&&(o.receiveShadow=!0),!1===this.visible&&(o.visible=!1),!1===this.frustumCulled&&(o.frustumCulled=!1),0!==this.renderOrder&&(o.renderOrder=this.renderOrder),'{}'!==JSON.stringify(this.userData)&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(o.matrixAutoUpdate=!1),this.isMesh&&this.drawMode!==u._63&&(o.drawMode=this.drawMode),this.isInstancedMesh&&(o.type='InstancedMesh',o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON()),this.isMesh||this.isLine||this.isPoints){o.geometry=t(e.geometries,this.geometry);var s=this.geometry.parameters;if(void 0!==s&&void 0!==s.shapes){var d=s.shapes;if(Array.isArray(d))for(var p=0,i=d.length,l;p<i;p++)l=d[p],t(e.shapes,l);else t(e.shapes,d)}}if(void 0!==this.material)if(Array.isArray(this.material)){for(var c=[],p=0,i=this.material.length;p<i;p++)c.push(t(e.materials,this.material[p]));o.material=c}else o.material=t(e.materials,this.material);if(0<this.children.length){o.children=[];for(var p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(a){var m=r(e.geometries),g=r(e.materials),f=r(e.textures),h=r(e.images),d=r(e.shapes);0<m.length&&(n.geometries=m),0<g.length&&(n.materials=g),0<f.length&&(n.textures=f),0<h.length&&(n.images=h),0<d.length&&(n.shapes=d)}return n.object=o,n},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(void 0===t&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(var r=0,a;r<e.children.length;r++)a=e.children[r],this.add(a.clone());return this}})},function(e,t,r){'use strict';function a(){}r.d(t,'a',function(){return a}),Object.assign(a.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});var r=this._listeners;r[e]===void 0&&(r[e]=[]),-1===r[e].indexOf(t)&&r[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;var r=this._listeners;return r[e]!==void 0&&-1!==r[e].indexOf(t)},removeEventListener:function(e,t){if(void 0!==this._listeners){var r=this._listeners,a=r[e];if(void 0!==a){var i=a.indexOf(t);-1!==i&&a.splice(i,1)}}},dispatchEvent:function(e){if(void 0!==this._listeners){var t=this._listeners,r=t[e.type];if(void 0!==r){e.target=this;for(var a=r.slice(0),n=0,i=a.length;n<i;n++)a[n].call(this,e)}}}})},function(e,t,r){'use strict';function a(e,t,r){return void 0===t&&void 0===r?this.set(e):this.setRGB(e,t,r)}function i(e,r,a){return 0>a&&(a+=1),1<a&&(a-=1),a<1/6?e+6*(r-e)*a:a<1/2?r:a<2/3?e+6*(r-e)*(2/3-a):e}function n(e){return .04045>e?.0773993808*e:o(.9478672986*e+.0521327014,2.4)}function s(e){return .0031308>e?12.92*e:1.055*o(e,.41666)-.055}r.d(t,'a',function(){return a});var d=r(3),l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},p={h:0,s:0,l:0},c={h:0,s:0,l:0};Object.assign(a.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):'number'==typeof e?this.setHex(e):'string'==typeof e&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=_(e),this.r=(255&e>>16)/255,this.g=(255&e>>8)/255,this.b=(255&e)/255,this},setRGB:function(e,t,r){return this.r=e,this.g=t,this.b=r,this},setHSL:function(e,t,r){if(e=d.a.euclideanModulo(e,1),t=d.a.clamp(t,0,1),r=d.a.clamp(r,0,1),0===t)this.r=this.g=this.b=r;else{var a=.5>=r?r*(1+t):r+t-r*t,n=2*r-a;this.r=i(n,a,e+1/3),this.g=i(n,a,e),this.b=i(n,a,e-1/3)}return this},setStyle:function(e){function t(t){void 0===t||1>parseFloat(t)&&console.warn('THREE.Color: Alpha component of '+e+' will be ignored.')}var r;if(r=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){var a=r[1],i=r[2],n;switch(a){case'rgb':case'rgba':if(n=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i))return this.r=M(255,parseInt(n[1],10))/255,this.g=M(255,parseInt(n[2],10))/255,this.b=M(255,parseInt(n[3],10))/255,t(n[5]),this;if(n=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i))return this.r=M(100,parseInt(n[1],10))/100,this.g=M(100,parseInt(n[2],10))/100,this.b=M(100,parseInt(n[3],10))/100,t(n[5]),this;break;case'hsl':case'hsla':if(n=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)){var o=parseFloat(n[1])/360,d=parseInt(n[2],10)/100,s=parseInt(n[3],10)/100;return t(n[5]),this.setHSL(o,d,s)}}}else if(r=/^\#([A-Fa-f0-9]+)$/.exec(e)){var l=r[1],p=l.length;if(3===p)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,this;if(6===p)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,this}return e&&0<e.length?this.setColorName(e):this},setColorName:function(e){var t=l[e];return void 0===t?console.warn('THREE.Color: Unknown color '+e):this.setHex(t),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return void 0===t&&(t=2),this.r=o(e.r,t),this.g=o(e.g,t),this.b=o(e.b,t),this},copyLinearToGamma:function(e,t){void 0===t&&(t=2);var r=0<t?1/t:1;return this.r=o(e.r,r),this.g=o(e.g,r),this.b=o(e.b,r),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(e){return this.r=n(e.r),this.g=n(e.g),this.b=n(e.b),this},copyLinearToSRGB:function(e){return this.r=s(e.r),this.g=s(e.g),this.b=s(e.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return('000000'+this.getHex().toString(16)).slice(-6)},getHSL:function(e){void 0===e&&(console.warn('THREE.Color: .getHSL() target is now required'),e={h:0,s:0,l:0});var t=this.r,r=this.g,a=this.b,i=T(t,r,a),n=M(t,r,a),o=(n+i)/2,s,l;if(n===i)s=0,l=0;else{var d=i-n;l=.5>=o?d/(i+n):d/(2-i-n),i===t?s=(r-a)/d+(r<a?6:0):i===r?s=(a-t)/d+2:i===a?s=(t-r)/d+4:void 0,s/=6}return e.h=s,e.s=l,e.l=o,e},getStyle:function(){return'rgb('+(0|255*this.r)+','+(0|255*this.g)+','+(0|255*this.b)+')'},offsetHSL:function(e,t,r){return this.getHSL(p),p.h+=e,p.s+=t,p.l+=r,this.setHSL(p.h,p.s,p.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=T(0,this.r-e.r),this.g=T(0,this.g-e.g),this.b=T(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(e,t){this.getHSL(p),e.getHSL(c);var r=d.a.lerp(p.h,c.h,t),a=d.a.lerp(p.s,c.s,t),i=d.a.lerp(p.l,c.l,t);return this.setHSL(r,a,i),this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return void 0===t&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},toJSON:function(){return this.getHex()}}),a.NAMES=l},function(e,t,r){'use strict';function a(e,t,r,a){this.x=e||0,this.y=t||0,this.z=r||0,this.w=a===void 0?1:a}r.d(t,'a',function(){return a}),Object.defineProperties(a.prototype,{width:{get:function(){return this.z},set:function(e){this.z=e}},height:{get:function(){return this.w},set:function(e){this.w=e}}}),Object.assign(a.prototype,{isVector4:!0,set:function(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error('index is out of range: '+e);}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error('index is out of range: '+e);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0===e.w?1:e.w,this},add:function(e,t){return void 0===t?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this):(console.warn('THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),this.addVectors(e,t))},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return void 0===t?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this):(console.warn('THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),this.subVectors(e,t))},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(t){var r=this.x,a=this.y,i=this.z,n=this.w,o=t.elements;return this.x=o[0]*r+o[4]*a+o[8]*i+o[12]*n,this.y=o[1]*r+o[5]*a+o[9]*i+o[13]*n,this.z=o[2]*r+o[6]*a+o[10]*i+o[14]*n,this.w=o[3]*r+o[7]*a+o[11]*i+o[15]*n,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*d(e.w);var t=p(1-e.w*e.w);return 1e-4>t?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){var t=.01,r=.1,a=e.elements,i=a[0],n=a[4],o=a[8],l=a[1],c=a[5],u=a[9],g=a[2],h=a[6],v=a[10],_,b,x,y;if(f(n-l)<t&&f(o-g)<t&&f(u-h)<t){if(f(n+l)<r&&f(o+g)<r&&f(u+h)<r&&f(i+c+v-3)<r)return this.set(1,0,0,0),this;_=m;var T=(i+1)/2,M=(c+1)/2,E=(v+1)/2,S=(n+l)/4,w=(o+g)/4,A=(u+h)/4;return T>M&&T>E?T<t?(b=0,x=.707106781,y=.707106781):(b=p(T),x=S/b,y=w/b):M>E?M<t?(b=.707106781,x=0,y=.707106781):(x=p(M),b=S/x,y=A/x):E<t?(b=.707106781,x=.707106781,y=0):(y=p(E),b=w/y,x=A/y),this.set(b,x,y,_),this}var R=p((h-u)*(h-u)+(o-g)*(o-g)+(l-n)*(l-n));return .001>f(R)&&(R=1),this.x=(h-u)/R,this.y=(o-g)/R,this.z=(l-n)/R,this.w=d((i+c+v-1)/2),this},min:function(e){return this.x=M(this.x,e.x),this.y=M(this.y,e.y),this.z=M(this.z,e.z),this.w=M(this.w,e.w),this},max:function(e){return this.x=T(this.x,e.x),this.y=T(this.y,e.y),this.z=T(this.z,e.z),this.w=T(this.w,e.w),this},clamp:function(e,t){return this.x=T(e.x,M(t.x,this.x)),this.y=T(e.y,M(t.y,this.y)),this.z=T(e.z,M(t.z,this.z)),this.w=T(e.w,M(t.w,this.w)),this},clampScalar:function(e,t){return this.x=T(e,M(t,this.x)),this.y=T(e,M(t,this.y)),this.z=T(e,M(t,this.z)),this.w=T(e,M(t,this.w)),this},clampLength:function(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(T(e,M(t,r)))},floor:function(){return this.x=_(this.x),this.y=_(this.y),this.z=_(this.z),this.w=_(this.w),this},ceil:function(){return this.x=c(this.x),this.y=c(this.y),this.z=c(this.z),this.w=c(this.w),this},round:function(){return this.x=u(this.x),this.y=u(this.y),this.z=u(this.z),this.w=u(this.w),this},roundToZero:function(){return this.x=0>this.x?c(this.x):_(this.x),this.y=0>this.y?c(this.y):_(this.y),this.z=0>this.z?c(this.z):_(this.z),this.w=0>this.w?c(this.w):_(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return p(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return f(this.x)+f(this.y)+f(this.z)+f(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,r){return this.subVectors(t,e).multiplyScalar(r).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,r){return void 0!==r&&console.warn('THREE.Vector4: offset has been removed from .fromBufferAttribute().'),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}})},function(e,t,r){'use strict';function a(){Object.defineProperty(this,'id',{value:h+=2}),this.uuid=g.a.generateUUID(),this.name='',this.type='BufferGeometry',this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}r.d(t,'a',function(){return a});var n=r(0),o=r(17),i=r(8),s=r(12),l=r(14),d=r(179),c=r(7),u=r(4),m=r(5),g=r(3),f=r(30),h=1,v=new u.a,y=new c.a,x=new n.a,_=new o.a,b=new o.a,E=new n.a;a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){this.index=Array.isArray(e)?new(65535<Object(f.a)(e)?s.d:s.c)(e,1):e},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,r){this.groups.push({start:e,count:t,materialIndex:r===void 0?0:r})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix:function(e){var t=this.attributes.position;void 0!==t&&(e.applyToBufferAttribute(t),t.needsUpdate=!0);var r=this.attributes.normal;if(void 0!==r){var a=new m.a().getNormalMatrix(e);a.applyToBufferAttribute(r),r.needsUpdate=!0}var i=this.attributes.tangent;if(void 0!==i){var a=new m.a().getNormalMatrix(e);a.applyToBufferAttribute(i),i.needsUpdate=!0}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(e){return v.makeRotationX(e),this.applyMatrix(v),this},rotateY:function(e){return v.makeRotationY(e),this.applyMatrix(v),this},rotateZ:function(e){return v.makeRotationZ(e),this.applyMatrix(v),this},translate:function(e,t,r){return v.makeTranslation(e,t,r),this.applyMatrix(v),this},scale:function(e,t,r){return v.makeScale(e,t,r),this.applyMatrix(v),this},lookAt:function(e){return y.lookAt(e),y.updateMatrix(),this.applyMatrix(y.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(x).negate(),this.translate(x.x,x.y,x.z),this},setFromObject:function(e){var t=e.geometry;if(e.isPoints||e.isLine){var r=new s.b(3*t.vertices.length,3),a=new s.b(3*t.colors.length,3);if(this.setAttribute('position',r.copyVector3sArray(t.vertices)),this.setAttribute('color',a.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){var i=new s.b(t.lineDistances.length,1);this.setAttribute('lineDistance',i.copyArray(t.lineDistances))}null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){for(var t=[],r=0,a=e.length,i;r<a;r++)i=e[r],t.push(i.x,i.y,i.z||0);return this.setAttribute('position',new s.b(t,3)),this},updateFromObject:function(e){var t=e.geometry;if(e.isMesh){var r=t.__directGeometry;if(!0===t.elementsNeedUpdate&&(r=void 0,t.elementsNeedUpdate=!1),void 0===r)return this.fromGeometry(t);r.verticesNeedUpdate=t.verticesNeedUpdate,r.normalsNeedUpdate=t.normalsNeedUpdate,r.colorsNeedUpdate=t.colorsNeedUpdate,r.uvsNeedUpdate=t.uvsNeedUpdate,r.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=r}var a;return!0===t.verticesNeedUpdate&&(a=this.attributes.position,void 0!==a&&(a.copyVector3sArray(t.vertices),a.needsUpdate=!0),t.verticesNeedUpdate=!1),!0===t.normalsNeedUpdate&&(a=this.attributes.normal,void 0!==a&&(a.copyVector3sArray(t.normals),a.needsUpdate=!0),t.normalsNeedUpdate=!1),!0===t.colorsNeedUpdate&&(a=this.attributes.color,void 0!==a&&(a.copyColorsArray(t.colors),a.needsUpdate=!0),t.colorsNeedUpdate=!1),t.uvsNeedUpdate&&(a=this.attributes.uv,void 0!==a&&(a.copyVector2sArray(t.uvs),a.needsUpdate=!0),t.uvsNeedUpdate=!1),t.lineDistancesNeedUpdate&&(a=this.attributes.lineDistance,void 0!==a&&(a.copyArray(t.lineDistances),a.needsUpdate=!0),t.lineDistancesNeedUpdate=!1),t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new d.a().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){var t=new Float32Array(3*e.vertices.length);if(this.setAttribute('position',new s.a(t,3).copyVector3sArray(e.vertices)),0<e.normals.length){var r=new Float32Array(3*e.normals.length);this.setAttribute('normal',new s.a(r,3).copyVector3sArray(e.normals))}if(0<e.colors.length){var a=new Float32Array(3*e.colors.length);this.setAttribute('color',new s.a(a,3).copyColorsArray(e.colors))}if(0<e.uvs.length){var n=new Float32Array(2*e.uvs.length);this.setAttribute('uv',new s.a(n,2).copyVector2sArray(e.uvs))}if(0<e.uvs2.length){var o=new Float32Array(2*e.uvs2.length);this.setAttribute('uv2',new s.a(o,2).copyVector2sArray(e.uvs2))}for(var d in this.groups=e.groups,e.morphTargets){for(var p=[],c=e.morphTargets[d],u=0,i=c.length;u<i;u++){var l=c[u],m=new s.b(3*l.data.length,3);m.name=l.name,p.push(m.copyVector3sArray(l.data))}this.morphAttributes[d]=p}if(0<e.skinIndices.length){var g=new s.b(4*e.skinIndices.length,4);this.setAttribute('skinIndex',g.copyVector4sArray(e.skinIndices))}if(0<e.skinWeights.length){var f=new s.b(4*e.skinWeights.length,4);this.setAttribute('skinWeight',f.copyVector4sArray(e.skinWeights))}return null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new o.a);var e=this.attributes.position,t=this.morphAttributes.position;if(void 0===e)this.boundingBox.makeEmpty();else if(this.boundingBox.setFromBufferAttribute(e),t)for(var r=0,a=t.length,i;r<a;r++)i=t[r],_.setFromBufferAttribute(i),this.morphTargetsRelative?(E.addVectors(this.boundingBox.min,_.min),this.boundingBox.expandByPoint(E),E.addVectors(this.boundingBox.max,_.max),this.boundingBox.expandByPoint(E)):(this.boundingBox.expandByPoint(_.min),this.boundingBox.expandByPoint(_.max));(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new l.a);var e=this.attributes.position,t=this.morphAttributes.position;if(e){var r=this.boundingSphere.center;if(_.setFromBufferAttribute(e),t)for(var a=0,i=t.length,n;a<i;a++)n=t[a],b.setFromBufferAttribute(n),this.morphTargetsRelative?(E.addVectors(_.min,b.min),_.expandByPoint(E),E.addVectors(_.max,b.max),_.expandByPoint(E)):(_.expandByPoint(b.min),_.expandByPoint(b.max));_.getCenter(r);for(var o=0,a=0,i=e.count;a<i;a++)E.fromBufferAttribute(e,a),o=T(o,r.distanceToSquared(E));if(t)for(var a=0,i=t.length;a<i;a++)for(var n=t[a],s=this.morphTargetsRelative,d=0,c=n.count;d<c;d++)E.fromBufferAttribute(n,d),s&&(x.fromBufferAttribute(e,d),E.add(x)),o=T(o,r.distanceToSquared(E));this.boundingSphere.radius=p(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){var e=this.index,t=this.attributes;if(t.position){var r=t.position.array;if(t.normal===void 0)this.setAttribute('normal',new s.a(new Float32Array(r.length),3));else for(var a=t.normal.array,o=0,i=a.length;o<i;o++)a[o]=0;var l=t.normal.array,d=new n.a,p=new n.a,c=new n.a,u=new n.a,m=new n.a,g,f,h;if(e)for(var y=e.array,o=0,i=e.count;o<i;o+=3)g=3*y[o+0],f=3*y[o+1],h=3*y[o+2],d.fromArray(r,g),p.fromArray(r,f),c.fromArray(r,h),u.subVectors(c,p),m.subVectors(d,p),u.cross(m),l[g]+=u.x,l[g+1]+=u.y,l[g+2]+=u.z,l[f]+=u.x,l[f+1]+=u.y,l[f+2]+=u.z,l[h]+=u.x,l[h+1]+=u.y,l[h+2]+=u.z;else for(var o=0,i=r.length;o<i;o+=9)d.fromArray(r,o),p.fromArray(r,o+3),c.fromArray(r,o+6),u.subVectors(c,p),m.subVectors(d,p),u.cross(m),l[o]=u.x,l[o+1]=u.y,l[o+2]=u.z,l[o+3]=u.x,l[o+4]=u.y,l[o+5]=u.z,l[o+6]=u.x,l[o+7]=u.y,l[o+8]=u.z;this.normalizeNormals(),t.normal.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry))return void console.error('THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.',e);t===void 0&&(t=0,console.warn('THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'));var r=this.attributes;for(var a in r)if(e.attributes[a]!==void 0)for(var n=r[a],o=n.array,s=e.attributes[a],l=s.array,d=s.itemSize*t,p=M(l.length,o.length-d),c=0,i=d;c<p;c++,i++)o[i]=l[c];return this},normalizeNormals:function(){for(var e=this.attributes.normal,t=0,r=e.count;t<r;t++)E.x=e.getX(t),E.y=e.getY(t),E.z=e.getZ(t),E.normalize(),e.setXYZ(t,E.x,E.y,E.z)},toNonIndexed:function(){function e(e,t){for(var r=e.array,a=e.itemSize,n=new r.constructor(t.length*a),o=0,d=0,p=0,i=t.length;p<i;p++){o=t[p]*a;for(var l=0;l<a;l++)n[d++]=r[o++]}return new s.a(n,a)}if(null===this.index)return console.warn('THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.'),this;var t=new a,r=this.index.array,n=this.attributes;for(var o in n){var d=n[o],p=e(d,r);t.setAttribute(o,p)}var c=this.morphAttributes;for(o in c){for(var u=[],m=c[o],g=0,i=m.length;g<i;g++){var d=m[g],p=e(d,r);u.push(p)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;for(var f=this.groups,g=0,h=f.length,l;g<h;g++)l=f[g],t.addGroup(l.start,l.count,l.materialIndex);return t},toJSON:function(){var e={metadata:{version:4.5,type:'BufferGeometry',generator:'BufferGeometry.toJSON'}};if(e.uuid=this.uuid,e.type=this.type,''!==this.name&&(e.name=this.name),0<Object.keys(this.userData).length&&(e.userData=this.userData),void 0!==this.parameters){var t=this.parameters;for(var r in t)void 0!==t[r]&&(e[r]=t[r]);return e}e.data={attributes:{}};var a=this.index;null!==a&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});var n=this.attributes;for(var r in n){var o=n[r],s=o.toJSON();''!==o.name&&(s.name=o.name),e.data.attributes[r]=s}var l={},d=!1;for(var r in this.morphAttributes){for(var p=this.morphAttributes[r],c=[],u=0,i=p.length;u<i;u++){var o=p[u],s=o.toJSON();''!==o.name&&(s.name=o.name),c.push(s)}0<c.length&&(l[r]=c,d=!0)}d&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);var m=this.groups;0<m.length&&(e.data.groups=JSON.parse(JSON.stringify(m)));var g=this.boundingSphere;return null!==g&&(e.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),e},clone:function(){return new a().copy(this)},copy:function(e){var t,r,a;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;var i=e.index;null!==i&&this.setIndex(i.clone());var n=e.attributes;for(t in n){var o=n[t];this.setAttribute(t,o.clone())}var s=e.morphAttributes;for(t in s){var l=[],d=s[t];for(r=0,a=d.length;r<a;r++)l.push(d[r].clone());this.morphAttributes[t]=l}this.morphTargetsRelative=e.morphTargetsRelative;var p=e.groups;for(r=0,a=p.length;r<a;r++){var c=p[r];this.addGroup(c.start,c.count,c.materialIndex)}var u=e.boundingBox;null!==u&&(this.boundingBox=u.clone());var m=e.boundingSphere;return null!==m&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(e,t,r){'use strict';function a(e,t,r){if(Array.isArray(e))throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');this.name='',this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=!0===r,this.usage=y._57,this.updateRange={offset:0,count:-1},this.version=0}function i(e,t,r){a.call(this,new Int8Array(e),t,r)}function n(e,t,r){a.call(this,new Uint8Array(e),t,r)}function o(e,t,r){a.call(this,new Uint8ClampedArray(e),t,r)}function s(e,t,r){a.call(this,new Int16Array(e),t,r)}function l(e,t,r){a.call(this,new Uint16Array(e),t,r)}function d(e,t,r){a.call(this,new Int32Array(e),t,r)}function p(e,t,r){a.call(this,new Uint32Array(e),t,r)}function c(e,t,r){a.call(this,new Float32Array(e),t,r)}function u(e,t,r){a.call(this,new Float64Array(e),t,r)}r.d(t,'b',function(){return c}),r.d(t,'d',function(){return p}),r.d(t,'c',function(){return l}),r.d(t,'a',function(){return a});var m=r(10),g=r(0),f=r(2),h=r(9),y=r(1);Object.defineProperty(a.prototype,'needsUpdate',{set:function(e){!0===e&&this.version++}}),Object.assign(a.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,r){e*=this.itemSize,r*=t.itemSize;for(var a=0,i=this.itemSize;a<i;a++)this.array[e+a]=t.array[r+a];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var t=this.array,r=0,a=0,i=e.length,n;a<i;a++)n=e[a],void 0===n&&(console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined',a),n=new h.a),t[r++]=n.r,t[r++]=n.g,t[r++]=n.b;return this},copyVector2sArray:function(e){for(var t=this.array,r=0,a=0,i=e.length,n;a<i;a++)n=e[a],void 0===n&&(console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined',a),n=new f.a),t[r++]=n.x,t[r++]=n.y;return this},copyVector3sArray:function(e){for(var t=this.array,r=0,a=0,i=e.length,n;a<i;a++)n=e[a],void 0===n&&(console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined',a),n=new g.a),t[r++]=n.x,t[r++]=n.y,t[r++]=n.z;return this},copyVector4sArray:function(e){for(var t=this.array,r=0,a=0,i=e.length,n;a<i;a++)n=e[a],void 0===n&&(console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined',a),n=new m.a),t[r++]=n.x,t[r++]=n.y,t[r++]=n.z,t[r++]=n.w;return this},set:function(e,t){return void 0===t&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this},setXYZ:function(e,t,r,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this},setXYZW:function(e,t,r,a,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=i,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),i.prototype=Object.create(a.prototype),i.prototype.constructor=i,n.prototype=Object.create(a.prototype),n.prototype.constructor=n,o.prototype=Object.create(a.prototype),o.prototype.constructor=o,s.prototype=Object.create(a.prototype),s.prototype.constructor=s,l.prototype=Object.create(a.prototype),l.prototype.constructor=l,d.prototype=Object.create(a.prototype),d.prototype.constructor=d,p.prototype=Object.create(a.prototype),p.prototype.constructor=p,c.prototype=Object.create(a.prototype),c.prototype.constructor=c,u.prototype=Object.create(a.prototype),u.prototype.constructor=u},function(e,t,r){'use strict';function a(e,t,r,a){this._x=e||0,this._y=t||0,this._z=r||0,this._w=a===void 0?1:a}r.d(t,'a',function(){return a});var i=r(3);Object.assign(a,{slerp:function(e,r,a,i){return a.copy(e).slerp(r,i)},slerpFlat:function(e,r,a,i,o,d,c){var t=a[i+0],u=a[i+1],m=a[i+2],g=a[i+3],y=o[d+0],x=o[d+1],v=o[d+2],_=o[d+3];if(g!==_||t!==y||u!==x||m!==v){var b=1-c,s=t*y+u*x+m*v+g*_,T=0<=s?1:-1,M=1-s*s;if(M>n){var E=p(M),S=l(E,s*T);b=h(b*S)/E,c=h(c*S)/E}var w=c*T;if(t=t*b+y*w,u=u*b+x*w,m=m*b+v*w,g=g*b+_*w,b==1-c){var A=1/p(t*t+u*u+m*m+g*g);t*=A,u*=A,m*=A,g*=A}}e[r]=t,e[r+1]=u,e[r+2]=m,e[r+3]=g}}),Object.defineProperties(a.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this._onChangeCallback()}}}),Object.assign(a.prototype,{isQuaternion:!0,set:function(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');var r=e._x,a=e._y,i=e._z,n=e.order,o=g,s=h,l=o(r/2),d=o(a/2),p=o(i/2),c=s(r/2),u=s(a/2),m=s(i/2);return'XYZ'===n?(this._x=c*d*p+l*u*m,this._y=l*u*p-c*d*m,this._z=l*d*m+c*u*p,this._w=l*d*p-c*u*m):'YXZ'===n?(this._x=c*d*p+l*u*m,this._y=l*u*p-c*d*m,this._z=l*d*m-c*u*p,this._w=l*d*p+c*u*m):'ZXY'===n?(this._x=c*d*p-l*u*m,this._y=l*u*p+c*d*m,this._z=l*d*m+c*u*p,this._w=l*d*p-c*u*m):'ZYX'===n?(this._x=c*d*p-l*u*m,this._y=l*u*p+c*d*m,this._z=l*d*m-c*u*p,this._w=l*d*p+c*u*m):'YZX'===n?(this._x=c*d*p+l*u*m,this._y=l*u*p+c*d*m,this._z=l*d*m-c*u*p,this._w=l*d*p-c*u*m):'XZY'===n&&(this._x=c*d*p-l*u*m,this._y=l*u*p-c*d*m,this._z=l*d*m+c*u*p,this._w=l*d*p+c*u*m),!1!==t&&this._onChangeCallback(),this},setFromAxisAngle:function(e,t){var r=t/2,a=h(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=g(r),this._onChangeCallback(),this},setFromRotationMatrix:function(e){var t=e.elements,r=t[0],a=t[4],i=t[8],n=t[1],o=t[5],l=t[9],d=t[2],c=t[6],u=t[10],m=r+o+u,g;return 0<m?(g=.5/p(m+1),this._w=.25/g,this._x=(c-l)*g,this._y=(i-d)*g,this._z=(n-a)*g):r>o&&r>u?(g=2*p(1+r-o-u),this._w=(c-l)/g,this._x=.25*g,this._y=(a+n)/g,this._z=(i+d)/g):o>u?(g=2*p(1+o-r-u),this._w=(i-d)/g,this._x=(a+n)/g,this._y=.25*g,this._z=(l+c)/g):(g=2*p(1+u-r-o),this._w=(n-a)/g,this._x=(i+d)/g,this._y=(l+c)/g,this._z=.25*g),this._onChangeCallback(),this},setFromUnitVectors:function(e,t){var a=e.dot(t)+1;return a<1e-6?(a=0,f(e.x)>f(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()},angleTo:function(e){return 2*d(f(i.a.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,r){var a=this.angleTo(e);if(0===a)return this;var i=M(1,r/a);return this.slerp(e,i),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return p(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this},multiply:function(e,t){return void 0===t?this.multiplyQuaternions(this,e):(console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'),this.multiplyQuaternions(e,t))},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){var r=e._x,a=e._y,i=e._z,n=e._w,o=t._x,s=t._y,l=t._z,d=t._w;return this._x=r*d+n*o+a*l-i*s,this._y=a*d+n*s+i*o-r*l,this._z=i*d+n*l+r*s-a*o,this._w=n*d-r*o-a*s-i*l,this._onChangeCallback(),this},slerp:function(e,r){if(0===r)return this;if(1===r)return this.copy(e);var t=this._x,a=this._y,i=this._z,o=this._w,d=o*e._w+t*e._x+a*e._y+i*e._z;if(0>d?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),1<=d)return this._w=o,this._x=t,this._y=a,this._z=i,this;var c=1-d*d;if(c<=n){var u=1-r;return this._w=u*o+r*this._w,this._x=u*t+r*this._x,this._y=u*a+r*this._y,this._z=u*i+r*this._z,this.normalize(),this._onChangeCallback(),this}var s=p(c),m=l(s,d),g=h((1-r)*m)/s,f=h(r*m)/s;return this._w=o*g+this._w*f,this._x=t*g+this._x*f,this._y=a*g+this._y*f,this._z=i*g+this._z*f,this._onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return void 0===t&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}})},function(e,t,r){'use strict';function a(e,t){this.center=e===void 0?new n.a:e,this.radius=t===void 0?0:t}r.d(t,'a',function(){return a});var i=r(17),n=r(0),o=new i.a;Object.assign(a.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(e,t){var r=this.center;void 0===t?o.setFromPoints(e).getCenter(r):r.copy(t);for(var a=0,n=0,i=e.length;n<i;n++)a=T(a,r.distanceToSquared(e[n]));return this.radius=p(a),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},empty:function(){return 0>=this.radius},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return f(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){var r=this.center.distanceToSquared(e);return void 0===t&&(console.warn('THREE.Sphere: .clampPoint() target is now required'),t=new n.a),t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return void 0===e&&(console.warn('THREE.Sphere: .getBoundingBox() target is now required'),e=new i.a),e.set(this.center,this.center),e.expandByScalar(this.radius),e},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}})},function(e,t){'use strict';function r(e){var t={};for(var r in e)for(var a in t[r]={},e[r]){var i=e[r][a];t[r][a]=i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture)?i.clone():Array.isArray(i)?i.slice():i}return t}function a(e){for(var t={},a=0,i;a<e.length;a++)for(var n in i=r(e[a]),i)t[n]=i[n];return t}t.a=r,t.b=a},function(e,t,r){'use strict';function a(){Object.defineProperty(this,'id',{value:s++}),this.uuid=o.a.generateUUID(),this.name='',this.type='Material',this.fog=!0,this.blending=n._8,this.side=n.E,this.flatShading=!1,this.vertexTangents=!1,this.vertexColors=n._6,this.opacity=1,this.transparent=!1,this.blendSrc=n._54,this.blendDst=n._14,this.blendEquation=n.b,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=n.M,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n.g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=n.K,this.stencilZFail=n.K,this.stencilZPass=n.K,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}r.d(t,'a',function(){return a});var i=r(8),n=r(1),o=r(3),s=0;a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isMaterial:!0,onBeforeCompile:function(){},setValues:function(e){if(void 0!==e)for(var t in e){var r=e[t];if(void 0===r){console.warn('THREE.Material: \''+t+'\' parameter is undefined.');continue}if('shading'==t){console.warn('THREE.'+this.type+': .shading has been removed. Use the boolean .flatShading instead.'),this.flatShading=r===n.C;continue}var a=this[t];if(void 0===a){console.warn('THREE.'+this.type+': \''+t+'\' is not a property of this material.');continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}},toJSON:function(e){function t(e){var t=[];for(var r in e){var a=e[r];delete a.metadata,t.push(a)}return t}var r=void 0===e||'string'==typeof e;r&&(e={textures:{},images:{}});var a={metadata:{version:4.5,type:'Material',generator:'Material.toJSON'}};if(a.uuid=this.uuid,a.type=this.type,''!==this.name&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),void 0!==this.roughness&&(a.roughness=this.roughness),void 0!==this.metalness&&(a.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(a.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),void 0!==this.shininess&&(a.shininess=this.shininess),void 0!==this.clearcoat&&(a.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,a.reflectivity=this.reflectivity,a.refractionRatio=this.refractionRatio,void 0!==this.combine&&(a.combine=this.combine),void 0!==this.envMapIntensity&&(a.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.size&&(a.size=this.size),void 0!==this.sizeAttenuation&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==n._8&&(a.blending=this.blending),!0===this.flatShading&&(a.flatShading=this.flatShading),this.side!==n.E&&(a.side=this.side),this.vertexColors!==n._6&&(a.vertexColors=this.vertexColors),1>this.opacity&&(a.opacity=this.opacity),!0===this.transparent&&(a.transparent=this.transparent),a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.stencilWrite=this.stencilWrite,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,this.rotation&&0!==this.rotation&&(a.rotation=this.rotation),!0===this.polygonOffset&&(a.polygonOffset=!0),0!==this.polygonOffsetFactor&&(a.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&1!==this.linewidth&&(a.linewidth=this.linewidth),void 0!==this.dashSize&&(a.dashSize=this.dashSize),void 0!==this.gapSize&&(a.gapSize=this.gapSize),void 0!==this.scale&&(a.scale=this.scale),!0===this.dithering&&(a.dithering=!0),0<this.alphaTest&&(a.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(a.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(a.wireframe=this.wireframe),1<this.wireframeLinewidth&&(a.wireframeLinewidth=this.wireframeLinewidth),'round'!==this.wireframeLinecap&&(a.wireframeLinecap=this.wireframeLinecap),'round'!==this.wireframeLinejoin&&(a.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(a.morphTargets=!0),!0===this.morphNormals&&(a.morphNormals=!0),!0===this.skinning&&(a.skinning=!0),!1===this.visible&&(a.visible=!1),!1===this.toneMapped&&(a.toneMapped=!1),'{}'!==JSON.stringify(this.userData)&&(a.userData=this.userData),r){var i=t(e.textures),o=t(e.images);0<i.length&&(a.textures=i),0<o.length&&(a.images=o)}return a},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;var t=e.clippingPlanes,r=null;if(null!==t){var a=t.length;r=Array(a);for(var n=0;n!==a;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:'dispose'})}}),Object.defineProperty(a.prototype,'needsUpdate',{set:function(e){!0===e&&this.version++}})},function(e,t,r){'use strict';function a(e,t){this.min=e===void 0?new n.a(+Infinity,+Infinity,+Infinity):e,this.max=t===void 0?new n.a(-Infinity,-Infinity,-Infinity):t}function i(e,t,a,n,o){var s,i;for(s=0,i=e.length-3;s<=i;s+=3){v.fromArray(e,s);var l=o.x*f(v.x)+o.y*f(v.y)+o.z*f(v.z),r=t.dot(v),d=a.dot(v),p=n.dot(v);if(T(-T(r,d,p),M(r,d,p))>l)return!1}return!0}r.d(t,'a',function(){return a});var n=r(0),o=[new n.a,new n.a,new n.a,new n.a,new n.a,new n.a,new n.a,new n.a],s=new n.a,d=new a,l=new n.a,p=new n.a,c=new n.a,u=new n.a,m=new n.a,g=new n.a,h=new n.a,y=new n.a,x=new n.a,v=new n.a;Object.assign(a.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){for(var t=+Infinity,r=+Infinity,a=+Infinity,n=-Infinity,o=-Infinity,s=-Infinity,d=0,i=e.length;d<i;d+=3){var l=e[d],p=e[d+1],c=e[d+2];l<t&&(t=l),p<r&&(r=p),c<a&&(a=c),l>n&&(n=l),p>o&&(o=p),c>s&&(s=c)}return this.min.set(t,r,a),this.max.set(n,o,s),this},setFromBufferAttribute:function(e){for(var t=+Infinity,r=+Infinity,a=+Infinity,n=-Infinity,o=-Infinity,s=-Infinity,d=0,i=e.count;d<i;d++){var l=e.getX(d),p=e.getY(d),c=e.getZ(d);l<t&&(t=l),p<r&&(r=p),c<a&&(a=c),l>n&&(n=l),p>o&&(o=p),c>s&&(s=c)}return this.min.set(t,r,a),this.max.set(n,o,s),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){var r=s.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this},setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=+Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return void 0===e&&(console.warn('THREE.Box3: .getCenter() target is now required'),e=new n.a),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return void 0===e&&(console.warn('THREE.Box3: .getSize() target is now required'),e=new n.a),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(e){e.updateWorldMatrix(!1,!1);var t=e.geometry;t!==void 0&&(null===t.boundingBox&&t.computeBoundingBox(),d.copy(t.boundingBox),d.applyMatrix4(e.matrixWorld),this.expandByPoint(d.min),this.expandByPoint(d.max));for(var r=e.children,a=0,i=r.length;a<i;a++)this.expandByObject(r[a]);return this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return void 0===t&&(console.warn('THREE.Box3: .getParameter() target is now required'),t=new n.a),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(e){return this.clampPoint(e.center,s),s.distanceToSquared(e.center)<=e.radius*e.radius},intersectsPlane:function(e){var t,r;return 0<e.normal.x?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),0<e.normal.y?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),0<e.normal.z?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant},intersectsTriangle:function(e){if(this.isEmpty())return!1;this.getCenter(h),y.subVectors(this.max,h),l.subVectors(e.a,h),p.subVectors(e.b,h),c.subVectors(e.c,h),u.subVectors(p,l),m.subVectors(c,p),g.subVectors(l,c);var t=[0,-u.z,u.y,0,-m.z,m.y,0,-g.z,g.y,u.z,0,-u.x,m.z,0,-m.x,g.z,0,-g.x,-u.y,u.x,0,-m.y,m.x,0,-g.y,g.x,0];return!!i(t,l,p,c,y)&&(t=[1,0,0,0,1,0,0,0,1],!!i(t,l,p,c,y))&&(x.crossVectors(u,m),t=[x.x,x.y,x.z],i(t,l,p,c,y))},clampPoint:function(e,t){return void 0===t&&(console.warn('THREE.Box3: .clampPoint() target is now required'),t=new n.a),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){var t=s.copy(e).clamp(this.min,this.max);return t.sub(e).length()},getBoundingSphere:function(e){return void 0===e&&console.error('THREE.Box3: .getBoundingSphere() target is now required'),this.getCenter(e.center),e.radius=.5*this.getSize(s).length(),e},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(e){return this.isEmpty()?this:(o[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),o[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),o[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),o[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),o[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),o[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),o[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),o[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(o),this)},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}})},function(e,t,r){'use strict';function a(e,t){this.normal=e===void 0?new n.a(1,0,0):e,this.constant=t===void 0?0:t}r.d(t,'a',function(){return a});var i=r(5),n=r(0),o=new n.a,s=new n.a,l=new i.a;Object.assign(a.prototype,{isPlane:!0,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(e,t,r){var a=o.subVectors(r,t).cross(s.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return void 0===t&&(console.warn('THREE.Plane: .projectPoint() target is now required'),t=new n.a),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(e,r){r===void 0&&(console.warn('THREE.Plane: .intersectLine() target is now required'),r=new n.a);var a=e.delta(o),i=this.normal.dot(a);if(0===i)return 0===this.distanceToPoint(e.start)?r.copy(e.start):void 0;var s=-(e.start.dot(this.normal)+this.constant)/i;return 0>s||1<s?void 0:r.copy(a).multiplyScalar(s).add(e.start)},intersectsLine:function(e){var t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return 0>t&&0<r||0>r&&0<t},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return void 0===e&&(console.warn('THREE.Plane: .coplanarPoint() target is now required'),e=new n.a),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(e,t){var r=t||l.getNormalMatrix(e),a=this.coplanarPoint(o).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(i),this},translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}})},function(e,t,r){'use strict';function a(){function e(i,n){!1===r||(a(i,n),t.requestAnimationFrame(e))}var t=null,r=!1,a=null;return{start:function(){!0==r||null===a||(t.requestAnimationFrame(e),r=!0)},stop:function(){r=!1},setAnimationLoop:function(e){a=e},setContext:function(e){t=e}}}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e){i.a.call(this),this.type='ShaderMaterial',this.defines={},this.uniforms={},this.vertexShader=o.a,this.fragmentShader=s.a,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error('THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'),this.setValues(e))}r.d(t,'a',function(){return a});var i=r(16),n=r(15),o=r(180),s=r(181);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isShaderMaterial=!0,a.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Object(n.a)(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=e.extensions,this},a.prototype.toJSON=function(e){var t=i.a.prototype.toJSON.call(this,e);for(var r in t.uniforms={},this.uniforms){var a=this.uniforms[r],n=a.value;t.uniforms[r]=n&&n.isTexture?{type:'t',value:n.toJSON(e).uuid}:n&&n.isColor?{type:'c',value:n.getHex()}:n&&n.isVector2?{type:'v2',value:n.toArray()}:n&&n.isVector3?{type:'v3',value:n.toArray()}:n&&n.isVector4?{type:'v4',value:n.toArray()}:n&&n.isMatrix3?{type:'m3',value:n.toArray()}:n&&n.isMatrix4?{type:'m4',value:n.toArray()}:{value:n}}0<Object.keys(this.defines).length&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;var o={};for(var s in this.extensions)!0===this.extensions[s]&&(o[s]=!0);return 0<Object.keys(o).length&&(t.extensions=o),t}},function(e,t,r){'use strict';function a(e,t){c.a.call(this),this.type='Mesh',this.geometry=e===void 0?new h.a:e,this.material=t===void 0?new f.a({color:16777215*Math.random()}):t,this.drawMode=g._63,this.updateMorphTargets()}function n(e,t,r,a,i,n,o,s){var l;if(l=t.side===g.h?a.intersectTriangle(o,n,i,!0,s):a.intersectTriangle(i,n,o,t.side!==g.w,s),null===l)return null;b.copy(s),b.applyMatrix4(e.matrixWorld);var d=r.ray.origin.distanceTo(b);return d<r.near||d>r.far?null:{distance:d,point:b.clone(),object:e}}function o(e,t,r,o,l,d,p,g,f,h,a,y){E.fromBufferAttribute(l,h),S.fromBufferAttribute(l,a),w.fromBufferAttribute(l,y);var c=e.morphTargetInfluences;if(t.morphTargets&&d&&c){P.set(0,0,0),C.set(0,0,0),I.set(0,0,0);for(var x=0,i=d.length;x<i;x++){var v=c[x],_=d[x];0===v||(A.fromBufferAttribute(_,h),R.fromBufferAttribute(_,a),L.fromBufferAttribute(_,y),p?(P.addScaledVector(A,v),C.addScaledVector(R,v),I.addScaledVector(L,v)):(P.addScaledVector(A.sub(E),v),C.addScaledVector(R.sub(S),v),I.addScaledVector(L.sub(w),v)))}E.add(P),S.add(C),w.add(I)}var b=n(e,t,r,o,E,S,w,U);if(b){g&&(D.fromBufferAttribute(g,h),N.fromBufferAttribute(g,a),z.fromBufferAttribute(g,y),b.uv=u.a.getUV(U,E,S,w,D,N,z,new s.a)),f&&(D.fromBufferAttribute(f,h),N.fromBufferAttribute(f,a),z.fromBufferAttribute(f,y),b.uv2=u.a.getUV(U,E,S,w,D,N,z,new s.a));var T=new m.a(h,a,y);u.a.getNormal(E,S,w,T.normal),b.face=T}return b}r.d(t,'a',function(){return a});var i=r(0),s=r(2),l=r(14),d=r(182),p=r(4),c=r(7),u=r(183),m=r(29),g=r(1),f=r(184),h=r(11),y=new p.a,x=new d.a,v=new l.a,E=new i.a,S=new i.a,w=new i.a,A=new i.a,R=new i.a,L=new i.a,P=new i.a,C=new i.a,I=new i.a,D=new s.a,N=new s.a,z=new s.a,U=new i.a,b=new i.a;a.prototype=Object.assign(Object.create(c.a.prototype),{constructor:a,isMesh:!0,setDrawMode:function(e){this.drawMode=e},copy:function(e){return c.a.prototype.copy.call(this,e),this.drawMode=e.drawMode,void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this},updateMorphTargets:function(){var e=this.geometry,t,r,a;if(e.isBufferGeometry){var i=e.morphAttributes,n=Object.keys(i);if(0<n.length){var o=i[n[0]];if(o!==void 0)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},(t=0,r=o.length);t<r;t++)a=o[t].name||t+'',this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=t}}else{var s=e.morphTargets;s!==void 0&&0<s.length&&console.error('THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.')}},raycast:function(e,t){var r=this.geometry,l=this.material,d=this.matrixWorld;if(void 0!==l&&(null===r.boundingSphere&&r.computeBoundingSphere(),v.copy(r.boundingSphere),v.applyMatrix4(d),!1!==e.ray.intersectsSphere(v))&&(y.getInverse(d),x.copy(e.ray).applyMatrix4(y),null===r.boundingBox||!1!==x.intersectsBox(r.boundingBox))){if(this.drawMode!==g._63)return void console.warn('THREE.Mesh: TriangleStripDrawMode and TriangleFanDrawMode are not supported by .raycast().');var p;if(r.isBufferGeometry){var m=r.index,h=r.attributes.position,E=r.morphAttributes.position,S=r.morphTargetsRelative,w=r.attributes.uv,A=r.attributes.uv2,R=r.groups,L=r.drawRange,P,a,b,c,i,C,I,F,B,O,G;if(null!==m){if(Array.isArray(l))for(c=0,C=R.length;c<C;c++)for(F=R[c],B=l[F.materialIndex],O=T(F.start,L.start),G=M(F.start+F.count,L.start+L.count),(i=O,I=G);i<I;i+=3)P=m.getX(i),a=m.getX(i+1),b=m.getX(i+2),p=o(this,B,e,x,h,E,S,w,A,P,a,b),p&&(p.faceIndex=_(i/3),p.face.materialIndex=F.materialIndex,t.push(p));else for(O=T(0,L.start),G=M(m.count,L.start+L.count),(c=O,C=G);c<C;c+=3)P=m.getX(c),a=m.getX(c+1),b=m.getX(c+2),p=o(this,l,e,x,h,E,S,w,A,P,a,b),p&&(p.faceIndex=_(c/3),t.push(p));}else if(void 0!==h)if(Array.isArray(l))for(c=0,C=R.length;c<C;c++)for(F=R[c],B=l[F.materialIndex],O=T(F.start,L.start),G=M(F.start+F.count,L.start+L.count),(i=O,I=G);i<I;i+=3)P=i,a=i+1,b=i+2,p=o(this,B,e,x,h,E,S,w,A,P,a,b),p&&(p.faceIndex=_(i/3),p.face.materialIndex=F.materialIndex,t.push(p));else for(O=T(0,L.start),G=M(h.count,L.start+L.count),(c=O,C=G);c<C;c+=3)P=c,a=c+1,b=c+2,p=o(this,l,e,x,h,E,S,w,A,P,a,b),p&&(p.faceIndex=_(c/3),t.push(p))}else if(r.isGeometry){var V=Array.isArray(l),H=r.vertices,k=r.faces,W=r.faceVertexUvs[0],j,X,q,Y;0<W.length&&(Y=W);for(var Z=0,f=k.length;Z<f;Z++){var J=k[Z],Q=V?l[J.materialIndex]:l;if(void 0!==Q&&(j=H[J.a],X=H[J.b],q=H[J.c],p=n(this,Q,e,x,j,X,q,U),p)){if(Y&&Y[Z]){var K=Y[Z];D.copy(K[0]),N.copy(K[1]),z.copy(K[2]),p.uv=u.a.getUV(U,j,X,q,D,N,z,new s.a)}p.face=J,p.faceIndex=Z,t.push(p)}}}}},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}})},function(e,t,i){'use strict';function n(e,t,r,a){o.a.call(this),this.type='PerspectiveCamera',this.fov=e===void 0?50:e,this.zoom=1,this.near=r===void 0?.1:r,this.far=a===void 0?2e3:a,this.focus=10,this.aspect=t===void 0?1:t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}i.d(t,'a',function(){return n});var o=i(36),s=i(7),l=i(3);n.prototype=Object.assign(Object.create(o.a.prototype),{constructor:n,isPerspectiveCamera:!0,copy:function(e,t){return o.a.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){var t=.5*this.getFilmHeight()/e;this.fov=2*l.a.RAD2DEG*a(t),this.updateProjectionMatrix()},getFocalLength:function(){var e=r(.5*l.a.DEG2RAD*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return 2*l.a.RAD2DEG*a(r(.5*l.a.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*M(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/T(this.aspect,1)},setViewOffset:function(e,t,r,a,i,n){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=i,this.view.height=n,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,t=e*r(.5*l.a.DEG2RAD*this.fov)/this.zoom,a=2*t,i=this.aspect*a,n=-.5*i,o=this.view;if(null!==this.view&&this.view.enabled){var s=o.fullWidth,d=o.fullHeight;n+=o.offsetX*i/s,t-=o.offsetY*a/d,i*=o.width/s,a*=o.height/d}var p=this.filmOffset;0!==p&&(n+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-a,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var t=s.a.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}})},function(e,t,r){'use strict';var a=r(47),i=r(50),n=r(216),o=r(217),s=r(221),l=r(1),d=r(20),c=r(31),u=r(21),g=r(6),f=r(2),h=r(222),y=r(224),x=r(225),v=r(226);t.a={name:'vue-displacement-slideshow',props:{images:{required:!0,type:Array,default:()=>[]},displacement:{required:!0,type:String},intensity:{required:!1,type:Number,default:1},speedIn:{required:!1,type:Number,default:1},speedOut:{required:!1,type:Number,default:1},ease:{required:!1,type:String,default:'expo.inOut'},preserveAspectRatio:{required:!1,type:Boolean,default:!0},isInteractive:{required:!1,type:Boolean,default:!1},interactionFactor:{required:!1,type:Number,default:1},interactionDuration:{required:!1,type:Number,default:1},angle:{required:!1,type:Number,default:m/4},startAsTransparent:{required:!1,type:Boolean,default:!1}},data(){return{currentImage:0,scene:new a.a,renderer:new i.a({antialias:!1,alpha:!0}),mat:null,textures:[],disp:null,nextImage:0,imagesLoaded:[],isAnimating:!1,currentTransition:null,mousePosition:{},previousMousePosition:null,rafID:null,mouseSpeed:{value:0},loaded:!1,videoAspect:!1}},computed:{slider(){return this.$refs.slider},camera(){const e=new n.a(this.slider.offsetWidth/-2,this.slider.offsetWidth/2,this.slider.offsetHeight/2,this.slider.offsetHeight/-2,1,1e3);return e.position.z=1,e},videoCamera(){const e=new n.a(this.slider.offsetWidth/-2,this.slider.offsetWidth/2,this.slider.offsetHeight/2,this.slider.offsetHeight/-2,1,1e3);return e.position.z=1,e}},methods:{initScene(){this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(16777215,0),this.renderer.setSize(this.slider.offsetWidth,this.slider.offsetHeight),this.$refs.slider.appendChild(this.renderer.domElement)},render(){this.renderer.render(this.scene,this.camera)},transitionIn(){this.currentTransition=h.a.to(this.mat.uniforms.dispFactor,{duration:this.speedIn,value:1,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd(!0),paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedIn)},transitionOut(){this.currentTransition=h.a.to(this.mat.uniforms.dispFactor,{duration:this.speedOut,value:0,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd(!1),paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedOut)},setImageResolution(e){h.a.to(this.mat.uniforms.imageResolution.value,{duration:e,x:this.textures[this.nextImage].image.naturalWidth,y:this.textures[this.nextImage].image.naturalHeight,ease:this.ease,onUpdate:this.render})},onAnimationEnd(e){e&&(this.currentImage=this.nextImage,this.mat.uniforms.dispFactor.value=0),this.isAnimating=!1,this.$emit('animationEnd'),this.render()},assignTexturesToMaterial(){this.mat.uniforms.texture1.value=this.textures[this.currentImage],this.mat.uniforms.texture2.value=this.textures[this.nextImage]},previous(){return this.isAnimating?void 0:null===this.mat?void(this.currentImage=Object(x.a)(this.currentImage-1,this.textures.length)):void(this.isAnimating=!0,this.mat.uniforms.dispFactor.value=1,this.nextImage=Object(x.a)(this.currentImage-1,this.textures.length),this.mat.uniforms.texture1.value=this.textures[this.nextImage],this.mat.uniforms.texture2.value=this.textures[this.currentImage],this.mat.uniforms.texture1Alpha.value=this.textures[this.nextImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.currentImage].alpha,this.transitionOut(),this.currentImage=this.nextImage,this.setSize())},next(e=null){return this.isAnimating?void 0:null===this.mat?void(this.currentImage=Object(x.a)(this.currentImage+1,this.textures.length)):void(this.isAnimating=!0,this.nextImage=null===e?Object(x.a)(this.currentImage+1,this.textures.length):e,this.assignTexturesToMaterial(),this.mat.uniforms.texture1Alpha.value=this.textures[this.currentImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.nextImage].alpha,this.transitionIn(),this.setSize())},loadTextures(){this.images.forEach((e,t)=>{let r=this.insertImage(e,t);this.imagesLoaded.push(r)}),this.startAsTransparent&&this.insertTransparentTexture(0);const e=new o.a;e.crossOrigin='',this.disp=e.load(this.displacement,this.render),this.disp.wrapS=l._50,this.disp.wrapT=l._50},initShaderMaterial(){const e={width:this.preserveAspectRatio?this.slider.offsetWidth:this.textures[this.currentImage].image.naturalWidth,height:this.preserveAspectRatio?this.slider.offsetHeight:this.textures[this.currentImage].image.naturalHeight};this.mat=new d.a({uniforms:{intensity1:{type:'f',value:this.intensity},intensity2:{type:'f',value:this.intensity},dispFactor:{type:'f',value:0},angle1:{type:'f',value:this.angle},angle2:{type:'f',value:-m+this.angle},texture1:{type:'t',value:this.textures[this.currentImage]},texture2:{type:'t',value:this.textures[this.nextImage]},texture1Alpha:{type:'f',value:this.textures[this.currentImage].alpha},texture2Alpha:{type:'f',value:this.textures[this.nextImage].alpha},disp:{type:'t',value:this.disp},resolution:{type:'v2',value:new f.a(e.width,e.height)},imageResolution:{type:'v2',value:new f.a(this.textures[this.currentImage].image.naturalWidth,this.textures[this.currentImage].image.naturalHeight)},sliderResolution:{type:'v2',value:new f.a(this.slider.offsetWidth,this.slider.offsetHeight)},u_rgbPosition:{type:'v2',value:new f.a(window.innerWidth/2,window.innerHeight/2)},u_rgbVelocity:{type:'v2',value:new f.a(0,0)}},vertexShader:y.b,fragmentShader:y.a,transparent:!0,opacity:1});const t=new c.a(this.slider.offsetWidth,this.slider.offsetHeight,1),r=new u.a(t,this.mat);this.scene.add(r)},init(){this.initScene(),this.loadTextures(),Promise.all(this.imagesLoaded).then(()=>{this.initShaderMaterial(),this.loaded=!0,this.$emit('loaded'),this.setSize(),this.render()})},setSize(){let e=this.textures[this.currentImage].image;const t=e.src.split('.').pop();'mp4'===t||'webm'===t?1<e.readyState?(e.width=e.videoWidth,e.height=e.videoHeight,this.setVideoSize(e)):e.addEventListener('loadedmetadata',(t)=>{let r=t.path[0];e.width=r.videoWidth,e.height=r.videoHeight,this.setVideoSize(e)}):this.setImageSize()},setVideoSize(e){const t=e.width*this.slider.offsetHeight/e.height,r=this.slider.offsetWidth*e.height/e.width;e.width>=e.height?this.slider.offsetWidth>this.slider.offsetHeight?this.slider.offsetHeight<=e.height?this.renderer.setSize(t,this.slider.offsetHeight):this.renderer.setSize(this.slider.offsetWidth,r):this.renderer.setSize(t,this.slider.offsetHeight):this.slider.offsetWidth>this.slider.offsetHeight?this.renderer.setSize(this.slider.offsetWidth,r):this.slider.offsetWidth<=e.width?this.renderer.setSize(this.slider.offsetWidth,r):this.renderer.setSize(t,this.slider.offsetHeight)},setImageSize(){this.renderer.setSize(this.slider.offsetWidth,this.slider.offsetHeight)},onResize(){this.setSize();const e={width:this.textures[this.currentImage].image.width?this.textures[this.currentImage].image.width:this.textures[this.currentImage].image.naturalWidth,height:this.textures[this.currentImage].image.height?this.textures[this.currentImage].image.height:this.textures[this.currentImage].image.naturalHeight};this.camera.aspect=this.renderer.domElement.width/this.renderer.domElement.height,this.camera.updateProjectionMatrix(),this.mat.uniforms.resolution.value.set(e.width,e.height),this.mat.uniforms.sliderResolution.value.set(this.slider.offsetWidth,this.slider.offsetHeight),this.render()},play(){this.currentTransition&&this.currentTransition.play()},pause(){this.currentTransition&&this.currentTransition.pause()},insertImage(e,t=this.textures.length){const r=e.split('.').pop();if('mp4'===r||'webm'===r){const r=document.createElement('video');r.src=e,r.preload='metadata',r.muted=!0,r.loop=!0,r.timelineSelector=!1,r.playsinline=!0,r.hideVideo=!0,r.load();const a=new s.a(r);return a.magFilter=l.O,a.minFilter=l.O,a.format=v.a,a.alpha=1,a.isVideo=1,new Promise((e)=>{this.cover(this.videoAspect,window.innerWidth/window.innerHeight,a),e(),this.render(),this.textures.splice(t,0,a),t<=this.currentImage&&this.loaded&&this.currentImage++})}if('jpg'===r||'png'===r||'gif'===r){const r=new o.a;return r.crossOrigin='',new Promise((a)=>{let i=r.load(e,()=>{this.render(),a()});i.magFilter=l.O,i.minFilter=l.O,i.alpha=1,this.textures.splice(t,0,i),t<=this.currentImage&&this.loaded&&this.currentImage++})}},getVideoDimensions(t){console.log(t)},cover:function(e,t,r){t<e?r.matrix.setUvTransform(0,0,t/e,1,0,.5,.5):r.matrix.setUvTransform(0,0,1,e/t,0,.5,.5)},insertTransparentTexture(e){const t=new g.a;t.image={naturalWidth:this.slider.offsetWidth,naturalHeight:this.slider.offsetHeight},t.alpha=0,this.textures.splice(e,0,t)},removeImage(e){e!==this.currentImage&&(this.textures.splice(e,1),e<this.currentImage&&this.currentImage--)},goTo(e){0<=e&&e<this.textures.length&&this.next(e)},animate(){this.isInteractive&&(this.rafID=requestAnimationFrame(this.animate),this.getMouseSpeed()),this.render()},onMouseMove(t){if(this.isInteractive&&this.mat){const e=this.$refs.slider.getBoundingClientRect();this.mousePosition={x:t.clientX-e.left,y:t.clientY-e.top},this.mat.uniforms.u_rgbPosition.value=new f.a(this.mousePosition.x,this.mousePosition.y)}},getMouseSpeed(){if(this.mat){const e=p((this.previousMousePosition.x-this.mousePosition.x)**2+(this.previousMousePosition.y-this.mousePosition.y)**2)||0;h.a.to(this.mouseSpeed,{duration:this.interactionDuration,value:e}),this.mat.uniforms.u_rgbVelocity.value=new f.a(this.mouseSpeed.value*this.interactionFactor,this.mouseSpeed.value*this.interactionFactor)}this.previousMousePosition=this.mousePosition}},mounted(){this.init(),window.addEventListener('resize',this.onResize),window.addEventListener('mousemove',this.onMouseMove),this.animate()},beforeDestroy(){cancelAnimationFrame(this.rafID),window.removeEventListener('resize',this.onResize),window.removeEventListener('mousemove',this.onMouseMove)}}},function(e,t,r){'use strict';function a(e,t,r,a,i,n){this.planes=[e===void 0?new o.a:e,t===void 0?new o.a:t,r===void 0?new o.a:r,a===void 0?new o.a:a,i===void 0?new o.a:i,n===void 0?new o.a:n]}r.d(t,'a',function(){return a});var i=r(0),n=r(14),o=r(18),s=new n.a,l=new i.a;Object.assign(a.prototype,{set:function(e,t,r,a,i,n){var o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(a),o[4].copy(i),o[5].copy(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){for(var t=this.planes,r=0;6>r;r++)t[r].copy(e.planes[r]);return this},setFromMatrix:function(e){var t=this.planes,r=e.elements,a=r[0],i=r[1],n=r[2],o=r[3],s=r[4],l=r[5],d=r[6],p=r[7],c=r[8],u=r[9],m=r[10],g=r[11],f=r[12],h=r[13],y=r[14],x=r[15];return t[0].setComponents(o-a,p-s,g-c,x-f).normalize(),t[1].setComponents(o+a,p+s,g+c,x+f).normalize(),t[2].setComponents(o+i,p+l,g+u,x+h).normalize(),t[3].setComponents(o-i,p-l,g-u,x-h).normalize(),t[4].setComponents(o-n,p-d,g-m,x-y).normalize(),t[5].setComponents(o+n,p+d,g+m,x+y).normalize(),this},intersectsObject:function(e){var t=e.geometry;return null===t.boundingSphere&&t.computeBoundingSphere(),s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(s)},intersectsSprite:function(e){return s.center.set(0,0,0),s.radius=.7071067811865476,s.applyMatrix4(e.matrixWorld),this.intersectsSphere(s)},intersectsSphere:function(e){for(var t=this.planes,r=e.center,a=-e.radius,n=0,i;6>n;n++)if(i=t[n].distanceToPoint(r),i<a)return!1;return!0},intersectsBox:function(e){for(var t=this.planes,r=0,a;6>r;r++)if(a=t[r],l.x=0<a.normal.x?e.max.x:e.min.x,l.y=0<a.normal.y?e.max.y:e.min.y,l.z=0<a.normal.z?e.max.z:e.min.z,0>a.distanceToPoint(l))return!1;return!0},containsPoint:function(e){for(var t=this.planes,r=0;6>r;r++)if(0>t[r].distanceToPoint(e))return!1;return!0}})},function(e,t,r){'use strict';r.d(t,'a',function(){return p});var a=r(26),i=r(15),n=r(2),o=r(0),s=r(27),l=r(9),d=r(5),p={basic:{uniforms:Object(i.b)([s.a.common,s.a.specularmap,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.fog]),vertexShader:a.a.meshbasic_vert,fragmentShader:a.a.meshbasic_frag},lambert:{uniforms:Object(i.b)([s.a.common,s.a.specularmap,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.emissivemap,s.a.fog,s.a.lights,{emissive:{value:new l.a(0)}}]),vertexShader:a.a.meshlambert_vert,fragmentShader:a.a.meshlambert_frag},phong:{uniforms:Object(i.b)([s.a.common,s.a.specularmap,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.emissivemap,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,s.a.gradientmap,s.a.fog,s.a.lights,{emissive:{value:new l.a(0)},specular:{value:new l.a(1118481)},shininess:{value:30}}]),vertexShader:a.a.meshphong_vert,fragmentShader:a.a.meshphong_frag},standard:{uniforms:Object(i.b)([s.a.common,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.emissivemap,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,s.a.roughnessmap,s.a.metalnessmap,s.a.fog,s.a.lights,{emissive:{value:new l.a(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:a.a.meshphysical_vert,fragmentShader:a.a.meshphysical_frag},matcap:{uniforms:Object(i.b)([s.a.common,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,s.a.fog,{matcap:{value:null}}]),vertexShader:a.a.meshmatcap_vert,fragmentShader:a.a.meshmatcap_frag},points:{uniforms:Object(i.b)([s.a.points,s.a.fog]),vertexShader:a.a.points_vert,fragmentShader:a.a.points_frag},dashed:{uniforms:Object(i.b)([s.a.common,s.a.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:a.a.linedashed_vert,fragmentShader:a.a.linedashed_frag},depth:{uniforms:Object(i.b)([s.a.common,s.a.displacementmap]),vertexShader:a.a.depth_vert,fragmentShader:a.a.depth_frag},normal:{uniforms:Object(i.b)([s.a.common,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,{opacity:{value:1}}]),vertexShader:a.a.normal_vert,fragmentShader:a.a.normal_frag},sprite:{uniforms:Object(i.b)([s.a.sprite,s.a.fog]),vertexShader:a.a.sprite_vert,fragmentShader:a.a.sprite_frag},background:{uniforms:{uvTransform:{value:new d.a},t2D:{value:null}},vertexShader:a.a.background_vert,fragmentShader:a.a.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:a.a.cube_vert,fragmentShader:a.a.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:a.a.equirect_vert,fragmentShader:a.a.equirect_frag},distanceRGBA:{uniforms:Object(i.b)([s.a.common,s.a.displacementmap,{referencePosition:{value:new o.a},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:a.a.distanceRGBA_vert,fragmentShader:a.a.distanceRGBA_frag},shadow:{uniforms:Object(i.b)([s.a.lights,s.a.fog,{color:{value:new l.a(0)},opacity:{value:1}}]),vertexShader:a.a.shadow_vert,fragmentShader:a.a.shadow_frag}};p.physical={uniforms:Object(i.b)([p.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new l.a(0)},clearcoatNormalScale:{value:new n.a(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:a.a.meshphysical_vert,fragmentShader:a.a.meshphysical_frag}},function(e,t,r){'use strict';r.d(t,'a',function(){return xt});var a=r(53),i=r(54),n=r(55),o=r(56),s=r(57),l=r(58),d=r(59),p=r(60),c=r(61),u=r(62),m=r(63),g=r(64),f=r(65),h=r(66),y=r(67),x=r(68),v=r(69),_=r(70),b=r(71),T=r(72),M=r(73),E=r(74),S=r(75),w=r(76),A=r(77),R=r(78),L=r(79),P=r(80),C=r(81),I=r(82),D=r(83),N=r(84),z=r(85),U=r(86),F=r(87),B=r(88),O=r(89),G=r(90),V=r(91),H=r(92),k=r(93),W=r(94),j=r(95),X=r(96),q=r(97),Y=r(98),Z=r(99),J=r(100),Q=r(101),K=r(102),$=r(103),ee=r(104),te=r(105),re=r(106),ae=r(107),ie=r(108),ne=r(109),oe=r(110),se=r(111),le=r(112),de=r(113),pe=r(114),ce=r(115),ue=r(116),me=r(117),ge=r(118),fe=r(119),he=r(120),ye=r(121),xe=r(122),ve=r(123),_e=r(124),be=r(125),Te=r(126),Me=r(127),Ee=r(128),Se=r(129),we=r(130),Ae=r(131),Re=r(132),Le=r(133),Pe=r(134),Ce=r(135),Ie=r(136),De=r(137),Ne=r(138),ze=r(139),Ue=r(140),Fe=r(141),Be=r(142),Oe=r(143),Ge=r(144),Ve=r(145),He=r(146),ke=r(147),We=r(148),je=r(149),Xe=r(150),qe=r(151),Ye=r(152),Ze=r(153),Je=r(154),Qe=r(155),Ke=r(156),$e=r(157),et=r(158),tt=r(159),rt=r(160),at=r(161),it=r(162),nt=r(163),ot=r(164),st=r(165),lt=r(166),dt=r(167),pt=r(168),ct=r(169),ut=r(170),mt=r(171),gt=r(172),ft=r(173),ht=r(174),yt=r(175),xt={alphamap_fragment:a.a,alphamap_pars_fragment:i.a,alphatest_fragment:n.a,aomap_fragment:o.a,aomap_pars_fragment:s.a,begin_vertex:l.a,beginnormal_vertex:d.a,bsdfs:p.a,bumpmap_pars_fragment:c.a,clipping_planes_fragment:u.a,clipping_planes_pars_fragment:m.a,clipping_planes_pars_vertex:g.a,clipping_planes_vertex:f.a,color_fragment:h.a,color_pars_fragment:y.a,color_pars_vertex:x.a,color_vertex:v.a,common:_.a,cube_uv_reflection_fragment:b.a,defaultnormal_vertex:T.a,displacementmap_pars_vertex:M.a,displacementmap_vertex:E.a,emissivemap_fragment:S.a,emissivemap_pars_fragment:w.a,encodings_fragment:A.a,encodings_pars_fragment:R.a,envmap_fragment:L.a,envmap_common_pars_fragment:P.a,envmap_pars_fragment:C.a,envmap_pars_vertex:I.a,envmap_physical_pars_fragment:k.a,envmap_vertex:D.a,fog_vertex:N.a,fog_pars_vertex:z.a,fog_fragment:U.a,fog_pars_fragment:F.a,gradientmap_pars_fragment:B.a,lightmap_fragment:O.a,lightmap_pars_fragment:G.a,lights_lambert_vertex:V.a,lights_pars_begin:H.a,lights_phong_fragment:W.a,lights_phong_pars_fragment:j.a,lights_physical_fragment:X.a,lights_physical_pars_fragment:q.a,lights_fragment_begin:Y.a,lights_fragment_maps:Z.a,lights_fragment_end:J.a,logdepthbuf_fragment:Q.a,logdepthbuf_pars_fragment:K.a,logdepthbuf_pars_vertex:$.a,logdepthbuf_vertex:ee.a,map_fragment:te.a,map_pars_fragment:re.a,map_particle_fragment:ae.a,map_particle_pars_fragment:ie.a,metalnessmap_fragment:ne.a,metalnessmap_pars_fragment:oe.a,morphnormal_vertex:se.a,morphtarget_pars_vertex:le.a,morphtarget_vertex:de.a,normal_fragment_begin:pe.a,normal_fragment_maps:ce.a,normalmap_pars_fragment:ue.a,clearcoat_normal_fragment_begin:me.a,clearcoat_normal_fragment_maps:ge.a,clearcoat_normalmap_pars_fragment:fe.a,packing:he.a,premultiplied_alpha_fragment:ye.a,project_vertex:xe.a,dithering_fragment:ve.a,dithering_pars_fragment:_e.a,roughnessmap_fragment:be.a,roughnessmap_pars_fragment:Te.a,shadowmap_pars_fragment:Me.a,shadowmap_pars_vertex:Ee.a,shadowmap_vertex:Se.a,shadowmask_pars_fragment:we.a,skinbase_vertex:Ae.a,skinning_pars_vertex:Re.a,skinning_vertex:Le.a,skinnormal_vertex:Pe.a,specularmap_fragment:Ce.a,specularmap_pars_fragment:Ie.a,tonemapping_fragment:De.a,tonemapping_pars_fragment:Ne.a,uv_pars_fragment:ze.a,uv_pars_vertex:Ue.a,uv_vertex:Fe.a,uv2_pars_fragment:Be.a,uv2_pars_vertex:Oe.a,uv2_vertex:Ge.a,worldpos_vertex:Ve.a,background_frag:He.a,background_vert:ke.a,cube_frag:We.a,cube_vert:je.a,depth_frag:Xe.a,depth_vert:qe.a,distanceRGBA_frag:Ye.a,distanceRGBA_vert:Ze.a,equirect_frag:Je.a,equirect_vert:Qe.a,linedashed_frag:Ke.a,linedashed_vert:$e.a,meshbasic_frag:et.a,meshbasic_vert:tt.a,meshlambert_frag:rt.a,meshlambert_vert:at.a,meshmatcap_frag:it.a,meshmatcap_vert:nt.a,meshphong_frag:ot.a,meshphong_vert:st.a,meshphysical_frag:lt.a,meshphysical_vert:dt.a,normal_frag:pt.a,normal_vert:ct.a,points_frag:ut.a,points_vert:mt.a,shadow_frag:gt.a,shadow_vert:ft.a,sprite_frag:ht.a,sprite_vert:yt.a}},function(e,t,r){'use strict';r.d(t,'a',function(){return o});var a=r(9),i=r(2),n=r(5),o={common:{diffuse:{value:new a.a(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new n.a},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new i.a(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new a.a(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new a.a(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new n.a}},sprite:{diffuse:{value:new a.a(15658734)},opacity:{value:1},center:{value:new i.a(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new n.a}}}},function(e,t,r){'use strict';function a(){Object.defineProperty(this,'id',{value:h+=2}),this.uuid=f.a.generateUUID(),this.name='',this.type='Geometry',this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}r.d(t,'a',function(){return a});var i=r(8),n=r(29),o=r(5),s=r(14),l=r(17),d=r(0),p=r(4),m=r(2),c=r(9),g=r(7),f=r(3),h=0,v=new p.a,y=new g.a,x=new d.a;a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isGeometry:!0,applyMatrix:function(e){for(var t=new o.a().getNormalMatrix(e),r=0,a=this.vertices.length,i;r<a;r++)i=this.vertices[r],i.applyMatrix4(e);for(var r=0,a=this.faces.length,n;r<a;r++){n=this.faces[r],n.normal.applyMatrix3(t).normalize();for(var s=0,l=n.vertexNormals.length;s<l;s++)n.vertexNormals[s].applyMatrix3(t).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return v.makeRotationX(e),this.applyMatrix(v),this},rotateY:function(e){return v.makeRotationY(e),this.applyMatrix(v),this},rotateZ:function(e){return v.makeRotationZ(e),this.applyMatrix(v),this},translate:function(e,t,r){return v.makeTranslation(e,t,r),this.applyMatrix(v),this},scale:function(e,t,r){return v.makeScale(e,t,r),this.applyMatrix(v),this},lookAt:function(e){return y.lookAt(e),y.updateMatrix(),this.applyMatrix(y.matrix),this},fromBufferGeometry:function(e){function t(e,t,a,i){var o=void 0===p?[]:[r.colors[e].clone(),r.colors[t].clone(),r.colors[a].clone()],s=void 0===l?[]:[new d.a().fromArray(l,3*e),new d.a().fromArray(l,3*t),new d.a().fromArray(l,3*a)],c=new n.a(e,t,a,s,o,i);r.faces.push(c),void 0!==u&&r.faceVertexUvs[0].push([new m.a().fromArray(u,2*e),new m.a().fromArray(u,2*t),new m.a().fromArray(u,2*a)]),void 0!==g&&r.faceVertexUvs[1].push([new m.a().fromArray(g,2*e),new m.a().fromArray(g,2*t),new m.a().fromArray(g,2*a)])}var r=this,a=null===e.index?void 0:e.index.array,o=e.attributes;if(void 0===o.position)return console.error('THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.'),this;var s=o.position.array,l=void 0===o.normal?void 0:o.normal.array,p=void 0===o.color?void 0:o.color.array,u=void 0===o.uv?void 0:o.uv.array,g=void 0===o.uv2?void 0:o.uv2.array;void 0!==g&&(this.faceVertexUvs[1]=[]);for(var f=0;f<s.length;f+=3)r.vertices.push(new d.a().fromArray(s,f)),void 0!==p&&r.colors.push(new c.a().fromArray(p,f));var i=e.groups;if(0<i.length)for(var f=0;f<i.length;f++)for(var h=i[f],y=h.start,x=h.count,v=y;v<y+x;v+=3)void 0===a?t(v,v+1,v+2,h.materialIndex):t(a[v],a[v+1],a[v+2],h.materialIndex);else if(void 0!==a)for(var f=0;f<a.length;f+=3)t(a[f],a[f+1],a[f+2]);else for(var f=0;f<s.length/3;f+=3)t(f,f+1,f+2);return this.computeFaceNormals(),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(x).negate(),this.translate(x.x,x.y,x.z),this},normalize:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,t=this.boundingSphere.radius,r=0===t?1:1/t,a=new p.a;return a.set(r,0,0,-r*e.x,0,r,0,-r*e.y,0,0,r,-r*e.z,0,0,0,1),this.applyMatrix(a),this},computeFaceNormals:function(){for(var e=new d.a,t=new d.a,r=0,a=this.faces.length;r<a;r++){var i=this.faces[r],n=this.vertices[i.a],o=this.vertices[i.b],s=this.vertices[i.c];e.subVectors(s,o),t.subVectors(n,o),e.cross(t),e.normalize(),i.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);var t,r,a,i,n,o;for(o=Array(this.vertices.length),t=0,r=this.vertices.length;t<r;t++)o[t]=new d.a;if(e){var s=new d.a,l=new d.a,p,c,u;for(a=0,i=this.faces.length;a<i;a++)n=this.faces[a],p=this.vertices[n.a],c=this.vertices[n.b],u=this.vertices[n.c],s.subVectors(u,c),l.subVectors(p,c),s.cross(l),o[n.a].add(s),o[n.b].add(s),o[n.c].add(s)}else for(this.computeFaceNormals(),a=0,i=this.faces.length;a<i;a++)n=this.faces[a],o[n.a].add(n.normal),o[n.b].add(n.normal),o[n.c].add(n.normal);for(t=0,r=this.vertices.length;t<r;t++)o[t].normalize();for(a=0,i=this.faces.length;a<i;a++){n=this.faces[a];var m=n.vertexNormals;3===m.length?(m[0].copy(o[n.a]),m[1].copy(o[n.b]),m[2].copy(o[n.c])):(m[0]=o[n.a].clone(),m[1]=o[n.b].clone(),m[2]=o[n.c].clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var e,t,r;for(this.computeFaceNormals(),e=0,t=this.faces.length;e<t;e++){r=this.faces[e];var a=r.vertexNormals;3===a.length?(a[0].copy(r.normal),a[1].copy(r.normal),a[2].copy(r.normal)):(a[0]=r.normal.clone(),a[1]=r.normal.clone(),a[2]=r.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var e,t,r,i,n;for(r=0,i=this.faces.length;r<i;r++)for(n=this.faces[r],n.__originalFaceNormal?n.__originalFaceNormal.copy(n.normal):n.__originalFaceNormal=n.normal.clone(),n.__originalVertexNormals||(n.__originalVertexNormals=[]),(e=0,t=n.vertexNormals.length);e<t;e++)n.__originalVertexNormals[e]?n.__originalVertexNormals[e].copy(n.vertexNormals[e]):n.__originalVertexNormals[e]=n.vertexNormals[e].clone();var o=new a;for(o.faces=this.faces,e=0,t=this.morphTargets.length;e<t;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];var s=this.morphNormals[e].faceNormals,l=this.morphNormals[e].vertexNormals,p,c;for(r=0,i=this.faces.length;r<i;r++)p=new d.a,c={a:new d.a,b:new d.a,c:new d.a},s.push(p),l.push(c)}var u=this.morphNormals[e];o.vertices=this.morphTargets[e].vertices,o.computeFaceNormals(),o.computeVertexNormals();var p,c;for(r=0,i=this.faces.length;r<i;r++)n=this.faces[r],p=u.faceNormals[r],c=u.vertexNormals[r],p.copy(n.normal),c.a.copy(n.vertexNormals[0]),c.b.copy(n.vertexNormals[1]),c.c.copy(n.vertexNormals[2])}for(r=0,i=this.faces.length;r<i;r++)n=this.faces[r],n.normal=n.__originalFaceNormal,n.vertexNormals=n.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new l.a),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new s.a),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,r){if(!(e&&e.isGeometry))return void console.error('THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.',e);var a=this.vertices.length,s=this.vertices,l=e.vertices,d=this.faces,p=e.faces,c=this.colors,u=e.colors,m;r===void 0&&(r=0),t!==void 0&&(m=new o.a().getNormalMatrix(t));for(var g=0,i=l.length;g<i;g++){var f=l[g],h=f.clone();t!==void 0&&h.applyMatrix4(t),s.push(h)}for(var g=0,i=u.length;g<i;g++)c.push(u[g].clone());for(g=0,i=p.length;g<i;g++){var y=p[g],x=y.vertexNormals,v=y.vertexColors,_,b,T;_=new n.a(y.a+a,y.b+a,y.c+a),_.normal.copy(y.normal),m!==void 0&&_.normal.applyMatrix3(m).normalize();for(var M=0,E=x.length;M<E;M++)b=x[M].clone(),void 0!==m&&b.applyMatrix3(m).normalize(),_.vertexNormals.push(b);_.color.copy(y.color);for(var M=0,E=v.length;M<E;M++)T=v[M],_.vertexColors.push(T.clone());_.materialIndex=y.materialIndex+r,d.push(_)}for(var g=0,i=e.faceVertexUvs.length,S;g<i;g++){S=e.faceVertexUvs[g],this.faceVertexUvs[g]===void 0&&(this.faceVertexUvs[g]=[]);for(var M=0,E=S.length;M<E;M++){for(var w=S[M],A=[],R=0,L=w.length;R<L;R++)A.push(w[R].clone());this.faceVertexUvs[g].push(A)}}},mergeMesh:function(e){return e&&e.isMesh?void(e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)):void console.error('THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.',e)},mergeVertices:function(){var e={},t=[],r=[],a=10000,o,s,l,i,d,p,c,m;for(l=0,i=this.vertices.length;l<i;l++)o=this.vertices[l],s=u(o.x*a)+'_'+u(o.y*a)+'_'+u(o.z*a),void 0===e[s]?(e[s]=l,t.push(this.vertices[l]),r[l]=t.length-1):r[l]=r[e[s]];var g=[];for(l=0,i=this.faces.length;l<i;l++){d=this.faces[l],d.a=r[d.a],d.b=r[d.b],d.c=r[d.c],p=[d.a,d.b,d.c];for(var f=0;3>f;f++)if(p[f]===p[(f+1)%3]){g.push(l);break}}for(l=g.length-1;0<=l;l--){var n=g[l];for(this.faces.splice(n,1),c=0,m=this.faceVertexUvs.length;c<m;c++)this.faceVertexUvs[c].splice(n,1)}var h=this.vertices.length-t.length;return this.vertices=t,h},setFromPoints:function(e){this.vertices=[];for(var t=0,r=e.length,a;t<r;t++)a=e[t],this.vertices.push(new d.a(a.x,a.y,a.z||0));return this},sortFacesByMaterialIndex:function(){for(var e=this.faces,t=e.length,r=0;r<t;r++)e[r]._id=r;e.sort(function(e,t){return e.materialIndex-t.materialIndex});var a=this.faceVertexUvs[0],i=this.faceVertexUvs[1],n,o;a&&a.length===t&&(n=[]),i&&i.length===t&&(o=[]);for(var r=0,s;r<t;r++)s=e[r]._id,n&&n.push(a[s]),o&&o.push(i[s]);n&&(this.faceVertexUvs[0]=n),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){function e(e,t,r){return r?e|1<<t:e&~(1<<t)}function t(e){var t=e.x.toString()+e.y.toString()+e.z.toString();return void 0===u[t]?(u[t]=c.length/3,c.push(e.x,e.y,e.z),u[t]):u[t]}function r(e){var t=e.r.toString()+e.g.toString()+e.b.toString();return void 0===g[t]?(g[t]=m.length,m.push(e.getHex()),g[t]):g[t]}function a(e){var t=e.x.toString()+e.y.toString();return void 0===h[t]?(h[t]=f.length/2,f.push(e.x,e.y),h[t]):h[t]}var n={metadata:{version:4.5,type:'Geometry',generator:'Geometry.toJSON'}};if(n.uuid=this.uuid,n.type=this.type,''!==this.name&&(n.name=this.name),void 0!==this.parameters){var o=this.parameters;for(var s in o)void 0!==o[s]&&(n[s]=o[s]);return n}for(var l=[],d=0,i;d<this.vertices.length;d++)i=this.vertices[d],l.push(i.x,i.y,i.z);for(var p=[],c=[],u={},m=[],g={},f=[],h={},d=0;d<this.faces.length;d++){var y=this.faces[d],x=void 0!==this.faceVertexUvs[0][d],v=0<y.normal.length(),_=0<y.vertexNormals.length,b=1!==y.color.r||1!==y.color.g||1!==y.color.b,T=0<y.vertexColors.length,M=0;if(M=e(M,0,0),M=e(M,1,!0),M=e(M,2,!1),M=e(M,3,x),M=e(M,4,v),M=e(M,5,_),M=e(M,6,b),M=e(M,7,T),p.push(M),p.push(y.a,y.b,y.c),p.push(y.materialIndex),x){var E=this.faceVertexUvs[0][d];p.push(a(E[0]),a(E[1]),a(E[2]))}if(v&&p.push(t(y.normal)),_){var S=y.vertexNormals;p.push(t(S[0]),t(S[1]),t(S[2]))}if(b&&p.push(r(y.color)),T){var w=y.vertexColors;p.push(r(w[0]),r(w[1]),r(w[2]))}}return n.data={},n.data.vertices=l,n.data.normals=c,0<m.length&&(n.data.colors=m),0<f.length&&(n.data.uvs=[f]),n.data.faces=p,n},clone:function(){return new a().copy(this)},copy:function(e){var t,r,a,i,n,o;this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;var s=e.vertices;for(t=0,r=s.length;t<r;t++)this.vertices.push(s[t].clone());var l=e.colors;for(t=0,r=l.length;t<r;t++)this.colors.push(l[t].clone());var d=e.faces;for(t=0,r=d.length;t<r;t++)this.faces.push(d[t].clone());for(t=0,r=e.faceVertexUvs.length;t<r;t++){var p=e.faceVertexUvs[t];for(void 0===this.faceVertexUvs[t]&&(this.faceVertexUvs[t]=[]),a=0,i=p.length;a<i;a++){var c=p[a],u=[];for(n=0,o=c.length;n<o;n++){var m=c[n];u.push(m.clone())}this.faceVertexUvs[t].push(u)}}var g=e.morphTargets;for(t=0,r=g.length;t<r;t++){var f={name:g[t].name};if(void 0!==g[t].vertices)for(f.vertices=[],a=0,i=g[t].vertices.length;a<i;a++)f.vertices.push(g[t].vertices[a].clone());if(void 0!==g[t].normals)for(f.normals=[],a=0,i=g[t].normals.length;a<i;a++)f.normals.push(g[t].normals[a].clone());this.morphTargets.push(f)}var h=e.morphNormals;for(t=0,r=h.length;t<r;t++){var y={};if(void 0!==h[t].vertexNormals)for(y.vertexNormals=[],a=0,i=h[t].vertexNormals.length;a<i;a++){var x=h[t].vertexNormals[a],v={};v.a=x.a.clone(),v.b=x.b.clone(),v.c=x.c.clone(),y.vertexNormals.push(v)}if(void 0!==h[t].faceNormals)for(y.faceNormals=[],a=0,i=h[t].faceNormals.length;a<i;a++)y.faceNormals.push(h[t].faceNormals[a].clone());this.morphNormals.push(y)}var _=e.skinWeights;for(t=0,r=_.length;t<r;t++)this.skinWeights.push(_[t].clone());var b=e.skinIndices;for(t=0,r=b.length;t<r;t++)this.skinIndices.push(b[t].clone());var T=e.lineDistances;for(t=0,r=T.length;t<r;t++)this.lineDistances.push(T[t]);var M=e.boundingBox;null!==M&&(this.boundingBox=M.clone());var E=e.boundingSphere;return null!==E&&(this.boundingSphere=E.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(e,t,r){'use strict';function a(e,t,r,a,o,s){this.a=e,this.b=t,this.c=r,this.normal=a&&a.isVector3?a:new n.a,this.vertexNormals=Array.isArray(a)?a:[],this.color=o&&o.isColor?o:new i.a,this.vertexColors=Array.isArray(o)?o:[],this.materialIndex=s===void 0?0:s}r.d(t,'a',function(){return a});var i=r(9),n=r(0);Object.assign(a.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(var t=0,r=e.vertexNormals.length;t<r;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(var t=0,r=e.vertexColors.length;t<r;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}})},function(e,t,r){'use strict';function a(e){if(0===e.length)return-Infinity;for(var t=e[0],r=1,a=e.length;r<a;++r)e[r]>t&&(t=e[r]);return t}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e,t,r,a){n.a.call(this),this.type='PlaneGeometry',this.parameters={width:e,height:t,widthSegments:r,heightSegments:a},this.fromBufferGeometry(new i(e,t,r,a)),this.mergeVertices()}function i(e,t,r,i){o.a.call(this),this.type='PlaneBufferGeometry',this.parameters={width:e,height:t,widthSegments:r,heightSegments:i},e=e||1,t=t||1;var n=e/2,l=t/2,p=_(r)||1,u=_(i)||1,m=p+1,g=e/p,f=t/u,h=[],v=[],T=[],M=[],E,S;for(S=0;S<u+1;S++){var w=S*f-l;for(E=0;E<m;E++){var A=E*g-n;v.push(A,-w,0),T.push(0,0,1),M.push(E/p),M.push(1-S/u)}}for(S=0;S<u;S++)for(E=0;E<p;E++){var x=E+m*S,a=E+m*(S+1),b=E+1+m*(S+1),c=E+1+m*S;h.push(x,a,c),h.push(a,b,c)}this.setIndex(h),this.setAttribute('position',new s.b(v,3)),this.setAttribute('normal',new s.b(T,3)),this.setAttribute('uv',new s.b(M,2))}r.d(t,'a',function(){return i});var n=r(28),o=r(11),s=r(12);a.prototype=Object.create(n.a.prototype),a.prototype.constructor=a,i.prototype=Object.create(o.a.prototype),i.prototype.constructor=i},function(e,t,r){'use strict';function a(e,t,a){var o=e[0];if(0>=o||0<o)return e;var s=t*a,n=Q[s];if(void 0===n&&(n=new Float32Array(s),Q[s]=n),0!==t){o.toArray(n,0);for(var r=1,i=0;r!==t;++r)i+=a,e[r].toArray(n,i)}return n}function i(e,t){if(e.length!==t.length)return!1;for(var r=0,a=e.length;r<a;r++)if(e[r]!==t[r])return!1;return!0}function n(e,t){for(var r=0,a=t.length;r<a;r++)e[r]=t[r]}function o(e,t){var a=K[t];a===void 0&&(a=new Int32Array(t),K[t]=a);for(var r=0;r!==t;++r)a[r]=e.allocateTextureUnit();return a}function s(e,t){var r=this.cache;r[0]===t||(e.uniform1f(this.addr,t),r[0]=t)}function l(e,t){var r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(i(r,t))return;e.uniform2fv(this.addr,t),n(r,t)}}function d(e,t){var r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(i(r,t))return;e.uniform3fv(this.addr,t),n(r,t)}}function p(e,t){var r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(i(r,t))return;e.uniform4fv(this.addr,t),n(r,t)}}function c(e,t){var r=this.cache,a=t.elements;if(a===void 0){if(i(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),n(r,t)}else{if(i(r,a))return;te.set(a),e.uniformMatrix2fv(this.addr,!1,te),n(r,a)}}function u(e,t){var r=this.cache,a=t.elements;if(a===void 0){if(i(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),n(r,t)}else{if(i(r,a))return;ee.set(a),e.uniformMatrix3fv(this.addr,!1,ee),n(r,a)}}function m(e,t){var r=this.cache,a=t.elements;if(a===void 0){if(i(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),n(r,t)}else{if(i(r,a))return;$.set(a),e.uniformMatrix4fv(this.addr,!1,$),n(r,a)}}function g(e,t,r){var a=this.cache,i=r.allocateTextureUnit();a[0]!==i&&(e.uniform1i(this.addr,i),a[0]=i),r.safeSetTexture2D(t||q,i)}function f(e,t,r){var a=this.cache,i=r.allocateTextureUnit();a[0]!==i&&(e.uniform1i(this.addr,i),a[0]=i),r.setTexture2DArray(t||Y,i)}function h(e,t,r){var a=this.cache,i=r.allocateTextureUnit();a[0]!==i&&(e.uniform1i(this.addr,i),a[0]=i),r.setTexture3D(t||Z,i)}function y(e,t,r){var a=this.cache,i=r.allocateTextureUnit();a[0]!==i&&(e.uniform1i(this.addr,i),a[0]=i),r.safeSetTextureCube(t||J,i)}function x(e,t){var r=this.cache;r[0]===t||(e.uniform1i(this.addr,t),r[0]=t)}function v(e,t){var r=this.cache;i(r,t)||(e.uniform2iv(this.addr,t),n(r,t))}function _(e,t){var r=this.cache;i(r,t)||(e.uniform3iv(this.addr,t),n(r,t))}function b(e,t){var r=this.cache;i(r,t)||(e.uniform4iv(this.addr,t),n(r,t))}function T(e){return 5126===e?s:35664===e?l:35665===e?d:35666===e?p:35674===e?c:35675===e?u:35676===e?m:35678===e||36198===e?g:35679===e?h:35680===e?y:36289===e?f:5124===e||35670===e?x:35667===e||35671===e?v:35668===e||35672===e?_:35669===e||35673===e?b:void 0}function M(e,t){e.uniform1fv(this.addr,t)}function E(e,t){e.uniform1iv(this.addr,t)}function S(e,t){e.uniform2iv(this.addr,t)}function w(e,t){e.uniform3iv(this.addr,t)}function A(e,t){e.uniform4iv(this.addr,t)}function R(e,t){var r=a(t,this.size,2);e.uniform2fv(this.addr,r)}function L(e,t){var r=a(t,this.size,3);e.uniform3fv(this.addr,r)}function P(e,t){var r=a(t,this.size,4);e.uniform4fv(this.addr,r)}function C(e,t){var r=a(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function I(e,t){var r=a(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function D(e,t){var r=a(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function N(e,t,r){var a=t.length,n=o(r,a);e.uniform1iv(this.addr,n);for(var s=0;s!==a;++s)r.safeSetTexture2D(t[s]||q,n[s])}function z(e,t,r){var a=t.length,n=o(r,a);e.uniform1iv(this.addr,n);for(var s=0;s!==a;++s)r.safeSetTextureCube(t[s]||J,n[s])}function U(e){return 5126===e?M:35664===e?R:35665===e?L:35666===e?P:35674===e?C:35675===e?I:35676===e?D:35678===e?N:35680===e?z:5124===e||35670===e?E:35667===e||35671===e?S:35668===e||35672===e?w:35669===e||35673===e?A:void 0}function F(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=T(t.type)}function B(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=U(t.type)}function O(e){this.id=e,this.seq=[],this.map={}}function G(e,t){e.seq.push(t),e.map[t.id]=t}function V(e,t,r){var a=e.name,i=a.length;for(re.lastIndex=0;;){var n=re.exec(a),o=re.lastIndex,s=n[1],l=']'===n[2],d=n[3];if(l&&(s|=0),void 0===d||'['===d&&o+2===i){G(r,void 0===d?new F(s,e,t):new B(s,e,t));break}else{var p=r.map,c=p[s];void 0===c&&(c=new O(s),G(r,c)),r=c}}}function H(e,t){this.seq=[],this.map={};for(var r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),a=0;a<r;++a){var i=e.getActiveUniform(t,a),n=e.getUniformLocation(t,i.name);V(i,n,this)}}r.d(t,'a',function(){return H});var k=r(196),W=r(6),j=r(197),X=r(198),q=new W.a,Y=new j.a,Z=new X.a,J=new k.a,Q=[],K=[],$=new Float32Array(16),ee=new Float32Array(9),te=new Float32Array(4);B.prototype.updateCache=function(e){var t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),n(t,e)},O.prototype.setValue=function(e,t,r){for(var a=this.seq,o=0,i=a.length,n;o!==i;++o)n=a[o],n.setValue(e,t[n.id],r)};var re=/([\w\d_]+)(\])?(\[|\.)?/g;H.prototype.setValue=function(e,t,r,a){var i=this.map[t];i!==void 0&&i.setValue(e,r,a)},H.prototype.setOptional=function(e,t,r){var a=t[r];a!==void 0&&this.setValue(e,r,a)},H.upload=function(e,t,r,a){for(var o=0,i=t.length;o!==i;++o){var n=t[o],s=r[n.id];!1!==s.needsUpdate&&n.setValue(e,s.value,a)}},H.seqWithValue=function(e,t){for(var a=[],r=0,i=e.length,n;r!==i;++r)n=e[r],n.id in t&&a.push(n);return a}},function(e,t,r){'use strict';function a(e,t,r){this.width=e,this.height=t,this.scissor=new s.a(0,0,e,t),this.scissorTest=!1,this.viewport=new s.a(0,0,e,t),r=r||{},this.texture=new n.a(void 0,void 0,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=r.generateMipmaps!==void 0&&r.generateMipmaps,this.texture.minFilter=r.minFilter===void 0?o.O:r.minFilter,this.depthBuffer=!(r.depthBuffer!==void 0)||r.depthBuffer,this.stencilBuffer=!(r.stencilBuffer!==void 0)||r.stencilBuffer,this.depthTexture=r.depthTexture===void 0?null:r.depthTexture}r.d(t,'a',function(){return a});var i=r(8),n=r(6),o=r(1),s=r(10);a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(e,t,r){'use strict';function a(){i.a.call(this),this.type='Group'}r.d(t,'a',function(){return a});var i=r(7);a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isGroup:!0})},function(e,t,r){'use strict';function a(e){i.a.call(this),this.cameras=e||[]}r.d(t,'a',function(){return a});var i=r(22);a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isArrayCamera:!0})},function(e,t,r){'use strict';function a(){n.a.call(this),this.type='Camera',this.matrixWorldInverse=new i.a,this.projectionMatrix=new i.a,this.projectionMatrixInverse=new i.a}r.d(t,'a',function(){return a});var i=r(4),n=r(7),o=r(0);a.prototype=Object.assign(Object.create(n.a.prototype),{constructor:a,isCamera:!0,copy:function(e,t){return n.a.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn('THREE.Camera: .getWorldDirection() target is now required'),t=new o.a),this.updateMatrixWorld(!0);var r=this.matrixWorld.elements;return t.set(-r[8],-r[9],-r[10]).normalize()},updateMatrixWorld:function(e){n.a.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}})},function(e,t,r){'use strict';function a(e,t,r){n.setFromMatrixPosition(t.matrixWorld),o.setFromMatrixPosition(r.matrixWorld);var a=n.distanceTo(o),i=t.projectionMatrix.elements,s=r.projectionMatrix.elements,l=i[14]/(i[10]-1),d=i[14]/(i[10]+1),p=(i[9]+1)/i[5],c=(i[9]-1)/i[5],u=(i[8]-1)/i[0],m=(s[8]+1)/s[0],g=a/(-u+m),f=g*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(f),e.translateZ(g),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.getInverse(e.matrixWorld);var h=l+g,y=d+g;e.projectionMatrix.makePerspective(l*u-f,l*m+(a-f),p*d/y*h,c*d/y*h,h,y)}r.d(t,'a',function(){return a});var i=r(0),n=new i.a,o=new i.a},function(e,t,r){'use strict';function a(e){this.manager=e===void 0?i.a:e,this.crossOrigin='anonymous',this.path='',this.resourcePath=''}r.d(t,'a',function(){return a});var i=r(220);Object.assign(a.prototype,{load:function(){},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this}})},function(e,r,a){'use strict';function n(e){if(void 0===e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return e}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.10.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/a.d(r,'a',function(){return Ht}),a.d(r,'b',function(){return xr}),a.d(r,'y',function(){return Mr}),a.d(r,'x',function(){return Xe}),a.d(r,'i',function(){return ae}),a.d(r,'n',function(){return N}),a.d(r,'o',function(){return z}),a.d(r,'k',function(){return b}),a.d(r,'l',function(){return w}),a.d(r,'s',function(){return ur}),a.d(r,'r',function(){return F}),a.d(r,'g',function(){return ie}),a.d(r,'v',function(){return yr}),a.d(r,'e',function(){return yt}),a.d(r,'t',function(){return at}),a.d(r,'c',function(){return Yt}),a.d(r,'q',function(){return J}),a.d(r,'w',function(){return xt}),a.d(r,'f',function(){return s}),a.d(r,'u',function(){return ne}),a.d(r,'m',function(){return k}),a.d(r,'j',function(){return dr}),a.d(r,'h',function(){return re}),a.d(r,'d',function(){return ft}),a.d(r,'p',function(){return se});var s={autoSleep:120,force3D:'auto',nullTargetWarn:1,units:{lineHeight:''}},l={duration:.5,overwrite:!1,delay:0},c=1e8,d=1/c,y=2*m,x=0,v=p,b=function(e){return'string'==typeof e},E=function(e){return'function'==typeof e},S=function(e){return'number'==typeof e},w=function(e){return'undefined'==typeof e},A=function(e){return'object'==typeof e},R=function(e){return!1!==e},L=function(){return'undefined'!=typeof window},P=function(e){return E(e)||b(e)},C='function'==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},I=Array.isArray,D=/(?:-?\.?\d|\.)+/gi,N=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,z=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,U=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,F=/[+-]=-?[.\d]+/,B=/[^,'"\[\]\s]+/gi,O=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,G={},V={},H=function(e){return(V=fe(e,G))&&Mr},k=function(e,t){return console.warn('Invalid property',e,'set to',t,'Missing plugin? gsap.registerPlugin()')},W=function(e,t){return!t&&console.warn(e)},j=function(e,t){return e&&(G[e]=t)&&V&&(V[e]=t)||G},X=function(){return 0},q={},Y=[],Z={},J={},Q={},K=30,$=[],ee='',te=function(e){var t=e[0],r,a;if(A(t)||E(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(a=$.length;a--&&!$[a].targetTest(t););r=$[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new Ht(e[a],r)))||e.splice(a,1);return e},re=function(e){return e._gsap||te(Je(e))[0]._gsap},ae=function(e,t,r){return(r=e[t])&&E(r)?e[t]():w(r)&&e.getAttribute&&e.getAttribute(t)||r},ie=function(e,t){return(e=e.split(',')).forEach(t)||e},ne=function(e){return u(1e5*e)/1e5||0},oe=function(e){return u(1e7*e)/1e7||0},se=function(e,t){var r=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),'+'===r?e+a:'-'===r?e-a:'*'===r?e*a:e/a},le=function(e,t){for(var r=t.length,a=0;0>e.indexOf(t[a])&&++a<r;);return a<r},de=function(){var e=Y.length,t=Y.slice(0),r,a;for(Z={},Y.length=0,r=0;r<e;r++)a=t[r],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},pe=function(e,t,r,a){Y.length&&de(),e.render(t,r,a),Y.length&&de()},ce=function(e){var t=parseFloat(e);return(t||0===t)&&2>(e+'').match(B).length?t:b(e)?e.trim():e},ue=function(e){return e},me=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},ge=function(e){return function(t,r){for(var a in r)a in t||'duration'===a&&e||'ease'===a||(t[a]=r[a])}},fe=function(e,t){for(var r in t)e[r]=t[r];return e},he=function e(t,r){for(var a in r)'__proto__'!==a&&'constructor'!==a&&'prototype'!==a&&(t[a]=A(r[a])?e(t[a]||(t[a]={}),r[a]):r[a]);return t},ye=function(e,t){var r={},a;for(a in e)a in t||(r[a]=e[a]);return r},xe=function(e){var t=e.parent||Nt,r=e.keyframes?ge(I(e.keyframes)):me;if(R(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},ve=function(e,t){for(var r=e.length,a=r===t.length;a&&r--&&e[r]===t[r];);return 0>r},_e=function(e,r,a,i,n){void 0===a&&(a='_first'),void 0===i&&(i='_last');var o=e[i],s;if(n)for(s=r[n];o&&o[n]>s;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=e[a],e[a]=r),r._next?r._next._prev=r:e[i]=r,r._prev=o,r.parent=r._dp=e,r},be=function(e,t,r,a){void 0===r&&(r='_first'),void 0===a&&(a='_last');var i=t._prev,n=t._next;i?i._next=n:e[r]===t&&(e[r]=n),n?n._prev=i:e[a]===t&&(e[a]=i),t._next=t._prev=t.parent=null},Te=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Me=function(e,t){if(e&&(!t||t._end>e._dur||0>t._start))for(var r=e;r;)r._dirty=1,r=r.parent;return e},Ee=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Se=function e(t){return!t||t._ts&&e(t.parent)},we=function(e){return e._repeat?Ae(e._tTime,e=e.duration()+e._rDelay)*e:0},Ae=function(e,t){var r=_(e/=t);return e&&r===e?r-1:r},Re=function(e,t){return(e-t._start)*t._ts+(0<=t._ts?0:t._dirty?t.totalDuration():t._tDur)},Le=function(e){return e._end=oe(e._start+(e._tDur/f(e._ts||e._rts||d)||0))},Pe=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=oe(r._time-(0<e._ts?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Le(e),r._dirty||Me(r,e)),e},Ce=function(e,r){var a;if((r._time||r._initted&&!r._dur)&&(a=Re(e.rawTime(),r),(!r._dur||je(0,r.totalDuration(),a)-r._tTime>d)&&r.render(a,!0)),Me(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)0<=a.rawTime()&&a.totalTime(a._tTime),a=a._dp;e._zTime=-d}},Ie=function(e,t,r,a){return t.parent&&Te(t),t._start=oe((S(r)?r:r||e!==Nt?He(e,r,t):e._time)+t._delay),t._end=oe(t._start+(t.totalDuration()/f(t.timeScale())||0)),_e(e,t,'_first','_last',e._sort?'_start':0),Ue(t)||(e._recent=t),a||Ce(e,t),e},De=function(e,t){return(G.ScrollTrigger||k('scrollTrigger',t))&&G.ScrollTrigger.create(t,e)},Ne=function(e,t,r,a){return Zt(e,t),e._initted?!r&&e._pt&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)&&Ot!==xt.frame?(Y.push(e),e._lazy=[t,a],1):void 0:1},ze=function e(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(0>r.rawTime()||e(r))},Ue=function(e){var t=e.data;return'isFromStart'===t||'isStart'===t},Fe=function(e,t,r,a){var i=e.ratio,n=0>t||!t&&(!e._start&&ze(e)&&(e._initted||!Ue(e))||(0>e._ts||0>e._dp._ts)&&!Ue(e))?0:1,o=e._rDelay,s=0,l,p,c;if(o&&e._repeat&&(s=je(0,e._tDur,t),p=Ae(s,o),e._yoyo&&1&p&&(n=1-n),p!==Ae(e._tTime,o)&&(i=1-n,e.vars.repeatRefresh&&e._initted&&e.invalidate())),n!==i||a||e._zTime===d||!t&&e._zTime){if(!e._initted&&Ne(e,t,a,r))return;for(c=e._zTime,e._zTime=t||(r?d:0),r||(r=t&&!c),e.ratio=n,e._from&&(n=1-n),e._time=0,e._tTime=s,l=e._pt;l;)l.r(n,l.d),l=l._next;e._startAt&&0>t&&e._startAt.render(t,!0,!0),e._onUpdate&&!r&&ot(e,'onUpdate'),s&&e._repeat&&!r&&e.parent&&ot(e,'onRepeat'),(t>=e._tDur||0>t)&&e.ratio===n&&(n&&Te(e,1),!r&&(ot(e,n?'onComplete':'onReverseComplete',!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Be=function(e,t,r){var a;if(r>t)for(a=e._first;a&&a._start<=r;){if('isPause'===a.data&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=r;){if('isPause'===a.data&&a._start<t)return a;a=a._prev}},Oe=function(e,t,r,a){var i=e._repeat,n=oe(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=n/e._dur),e._dur=n,e._tDur=i?0>i?1e10:oe(n*(i+1)+e._rDelay*i):n,0<o&&!a?Pe(e,e._tTime=e._tDur*o):e.parent&&Le(e),r||Me(e.parent,e),e},Ge=function(e){return e instanceof Wt?Me(e):Oe(e,e._dur)},Ve={_start:0,endTime:X,totalDuration:X},He=function e(t,r,a){var n=t.labels,o=t._recent||Ve,s=t.duration()>=c?o.endTime(!1):t._dur,l,i,d;return b(r)&&(isNaN(r)||r in n)?(i=r.charAt(0),d='%'===r.substr(-1),l=r.indexOf('='),'<'===i||'>'===i)?(0<=l&&(r=r.replace(/=/,'')),('<'===i?o._start:o.endTime(0<=o._repeat))+(parseFloat(r.substr(1))||0)*(d?(0>l?o:a).totalDuration()/100:1)):0>l?(r in n||(n[r]=s),n[r]):(i=parseFloat(r.charAt(l-1)+r.substr(l+1)),d&&a&&(i=i/100*(I(a)?a[0]:a).totalDuration()),1<l?e(t,r.substr(0,l-1),a)+i:s+i):null==r?s:+r},ke=function(e,t,r){var a=S(t[1]),i=(a?2:1)+(2>e?0:1),n=t[i],o,s;if(a&&(n.duration=t[1]),n.parent=r,e){for(o=n,s=r;s&&!('immediateRender'in o);)o=s.vars.defaults||{},s=R(s.vars.inherit)&&s.parent;n.immediateRender=R(o.immediateRender),2>e?n.runBackwards=1:n.startAt=t[i-1]}return new ir(t[0],n,t[i+1])},We=function(e,t){return e||0===e?t(e):t},je=function(e,t,r){return r<e?e:r>t?t:r},Xe=function(e,t){return b(e)&&(t=O.exec(e))?t[1]:''},qe=[].slice,Ye=function(e,t){return e&&A(e)&&'length'in e&&(!t&&!e.length||e.length-1 in e&&A(e[0]))&&!e.nodeType&&e!==zt},Ze=function(e,t,r){return void 0===r&&(r=[]),e.forEach(function(e){var a;return b(e)&&!t||Ye(e,1)?(a=r).push.apply(a,Je(e)):r.push(e)})||r},Je=function(e,t,r){return b(e)&&!r&&(Ut||!vt())?qe.call((t||Ft).querySelectorAll(e),0):I(e)?Ze(e,r):Ye(e)?qe.call(e,0):e?[e]:[]},Qe=function(e){return e.sort(function(){return .5-Math.random()})},Ke=function(e){if(E(e))return e;var t=A(e)?e:{each:e},r=Rt(t.ease),i=t.from||0,n=parseFloat(t.base)||0,o={},a=0<i&&1>i,s=isNaN(i)||a,p=t.axis,u=i,m=i;return b(i)?u=m={center:.5,edges:.5,end:1}[i]||0:!a&&s&&(u=i[0],m=i[1]),function(e,g,h){var a=(h||t).length,l=o[a],_,b,E,x,y,d,S,w,A;if(!l){if(A='auto'===t.grid?0:(t.grid||[1,c])[1],!A){for(S=-c;S<(S=h[A++].getBoundingClientRect().left)&&A<a;);A--}for(l=o[a]=[],_=s?M(A,a)*u-.5:i%A,b=A===c?0:s?a*m/A-.5:0|i/A,S=0,w=c,d=0;d<a;d++)E=d%A-_,x=b-(0|d/A),l[d]=y=p?f('y'===p?x:E):v(E*E+x*x),y>S&&(S=y),y<w&&(w=y);'random'===i&&Qe(l),l.max=S-w,l.min=w,l.v=a=(parseFloat(t.amount)||parseFloat(t.each)*(A>a?a-1:p?'y'===p?a/A:A:T(A,a/A))||0)*('edges'===i?-1:1),l.b=0>a?n-a:n,l.u=Xe(t.amount||t.each)||0,r=r&&0>a?wt(r):r}return a=(l[e]-l.min)/l.max||0,oe(l.b+(r?r(a):a)*l.v)+l.u}},$e=function(e){var t=o(10,((e+'').split('.')[1]||'').length);return function(r){var a=u(parseFloat(r)/e)*e*t;return(a-a%1)/t+(S(r)?0:Xe(r))}},et=function(e,t){var r=I(e),a,n;return!r&&A(e)&&(a=r=e.radius||c,e.values?(e=Je(e.values),(n=!S(e[0]))&&(a*=a)):e=$e(e.increment)),We(t,r?E(e)?function(t){return n=e(t),f(n-t)<=a?n:t}:function(t){for(var r=parseFloat(n?t.x:t),o=parseFloat(n?t.y:0),s=c,l=0,d=e.length,i,p;d--;)n?(i=e[d].x-r,p=e[d].y-o,i=i*i+p*p):i=f(e[d]-r),i<s&&(s=i,l=d);return l=!a||s<=a?e[l]:t,n||l===t||S(t)?l:l+Xe(t)}:$e(e))},tt=function(e,t,r,a){return We(I(e)?!t:!0===r?!!(r=0):!a,function(){return I(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(a=1>r?o(10,(r+'').length-2):1)&&_(u((e-r/2+Math.random()*(t-e+.99*r))/r)*r*a)/a})},rt=function(e,t,r){return We(r,function(r){return e[~~t(r)]})},at=function(e){for(var t=0,r='',a,i,n,o;~(a=e.indexOf('random(',t));)n=e.indexOf(')',a),o='['===e.charAt(a+7),i=e.substr(a+7,n-a-7).match(o?B:D),r+=e.substr(t,a-t)+tt(o?i:+i[0],o?0:+i[1],+i[2]||1e-5),t=n+1;return r+e.substr(t,e.length-t)},it=function(e,t,r,a,i){return We(i,function(i){return r+((i-e)/(t-e)*(a-r)||0)})},nt=function(e,t,r){var a=e.labels,i=c,n,o,s;for(n in a)o=a[n]-t,0>o==!!r&&o&&i>(o=f(o))&&(s=n,i=o);return s},ot=function(e,t,r){var a=e.vars,i=a[t],n,o;if(i)return n=a[t+'Params'],o=a.callbackScope||e,r&&Y.length&&de(),n?i.apply(o,n):i.call(o)},st=function(e){return Te(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),1>e.progress()&&ot(e,'onInterrupt'),e},lt=function(e){e=!e.name&&e['default']||e;var t=e.name,r=E(e),a=t&&!r&&e.init?function(){this._props=[]}:e,i={init:X,render:mr,add:Xt,kill:fr,modifier:gr,rawVars:0},n={targetTest:0,get:0,getSetter:dr,aliases:{},register:0};if(vt(),e!==a){if(J[t])return;me(a,me(ye(e,i),n)),fe(a.prototype,fe(i,ye(e,n))),J[a.prop=t]=a,e.targetTest&&($.push(a),q[t]=1),t=('css'===t?'CSS':t.charAt(0).toUpperCase()+t.substr(1))+'Plugin'}j(t,a),e.register&&e.register(Mr,a,xr)},dt=255,pt={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},ct=function(e,t,r){return e+=0>e?1:1<e?-1:0,0|(1>6*e?t+6*((r-t)*e):.5>e?r:2>3*e?t+6*((r-t)*(2/3-e)):t)*dt+.5},ut=function(e,t,i){var n=e?S(e)?[e>>16,e>>8&dt,e&dt]:0:pt.black,o,r,p,c,u,s,l,m,g,d;if(!n){if(','===e.substr(-1)&&(e=e.substr(0,e.length-1)),pt[e])n=pt[e];else if('#'===e.charAt(0)){if(6>e.length&&(o=e.charAt(1),r=e.charAt(2),p=e.charAt(3),e='#'+o+o+r+r+p+p+(5===e.length?e.charAt(4)+e.charAt(4):'')),9===e.length)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&dt,n&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&dt,e&dt]}else if('hsl'!==e.substr(0,3))n=e.match(D)||pt.transparent;else if(n=d=e.match(D),!t)c=+n[0]%360/360,u=+n[1]/100,s=+n[2]/100,r=.5>=s?s*(u+1):s+u-s*u,o=2*s-r,3<n.length&&(n[3]*=1),n[0]=ct(c+1/3,o,r),n[1]=ct(c,o,r),n[2]=ct(c-1/3,o,r);else if(~e.indexOf('='))return n=e.match(N),i&&4>n.length&&(n[3]=1),n;n=n.map(Number)}return t&&!d&&(o=n[0]/dt,r=n[1]/dt,p=n[2]/dt,l=T(o,r,p),m=M(o,r,p),s=(l+m)/2,l===m?c=u=0:(g=l-m,u=.5<s?g/(2-l-m):g/(l+m),c=l===o?(r-p)/g+(r<p?6:0):l===r?(p-o)/g+2:(o-r)/g+4,c*=60),n[0]=~~(c+.5),n[1]=~~(100*u+.5),n[2]=~~(100*s+.5)),i&&4>n.length&&(n[3]=1),n},mt=function(e){var t=[],r=[],n=-1;return e.split(ft).forEach(function(e){var i=e.match(z)||[];t.push.apply(t,i),r.push(n+=i.length+1)}),t.c=r,t},gt=function(e,t,r){var a='',n=(e+a).match(ft),o=t?'hsla(':'rgba(',s=0,i,p,c,d;if(!n)return e;if(n=n.map(function(e){return(e=ut(e,t,1))&&o+(t?e[0]+','+e[1]+'%,'+e[2]+'%,'+e[3]:e.join(','))+')'}),r&&(c=mt(e),i=r.c,i.join(a)!==c.c.join(a)))for(p=e.replace(ft,'1').split(z),d=p.length-1;s<d;s++)a+=p[s]+(~i.indexOf(s)?n.shift()||o+'0,0,0,0)':(c.length?c:n.length?n:r).shift());if(!p)for(p=e.split(ft),d=p.length-1;s<d;s++)a+=p[s]+n[s];return a+p[d]},ft=function(){var e='(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',t;for(t in pt)e+='|'+t+'\\b';return new RegExp(e+')','gi')}(),ht=/hsl[a]?\(/,yt=function(e){var t=e.join(' '),r;if(ft.lastIndex=0,ft.test(t))return r=ht.test(t),e[1]=gt(e[1],r),e[0]=gt(e[0],r,mt(e[1])),!0},xt=function(){var e=Date.now,t=500,r=33,a=e(),i=a,n=1e3/240,o=n,s=[],l=function l(d){var u=e()-i,h=!0===d,y,x,v,_;if(u>t&&(a+=u-r),i+=u,v=i-a,y=v-o,(0<y||h)&&(_=++m.frame,g=v-1e3*m.time,m.time=v/=1e3,o+=y+(y>=n?4:n-y),x=1),h||(p=c(l)),x)for(f=0;f<s.length;f++)s[f](v,g,_,d)},p,c,u,m,g,f;return m={time:0,frame:0,tick:function(){l(!0)},deltaRatio:function(e){return g/(1e3/(e||60))},wake:function(){Bt&&(!Ut&&L()&&(zt=Ut=window,Ft=zt.document||{},G.gsap=Mr,(zt.gsapVersions||(zt.gsapVersions=[])).push(Mr.version),H(V||zt.GreenSockGlobals||!zt.gsap&&zt||{}),u=zt.requestAnimationFrame),p&&m.sleep(),c=u||function(e){return setTimeout(e,0|o-1e3*m.time+1)},Vt=1,l(2))},sleep:function(){(u?zt.cancelAnimationFrame:clearTimeout)(p),Vt=0,c=X},lagSmoothing:function(e,a){t=e||1/d,r=M(a,t,0)},fps:function(e){n=1e3/(e||240),o=1e3*m.time+n},add:function(e,t,r){var a=t?function(r,t,i,n){e(r,t,i,n),m.remove(a)}:e;return m.remove(e),s[r?'unshift':'push'](a),vt(),a},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&f>=t&&f--},_listeners:s},m}(),vt=function(){return!Vt&&xt.wake()},_t={},bt=/^[\d.\-M][\d.\-,\s]/,Tt=/["']/g,Mt=function(e){for(var t={},r=e.substr(1,e.length-3).split(':'),a=r[0],n=1,i=r.length,o,s,l;n<i;n++)s=r[n],o=n===i-1?s.length:s.lastIndexOf(','),l=s.substr(0,o),t[a]=isNaN(l)?l.replace(Tt,'').trim():+l,a=s.substr(o+1).trim();return t},Et=function(e){var t=e.indexOf('(')+1,r=e.indexOf(')'),a=e.indexOf('(',t);return e.substring(t,~a&&a<r?e.indexOf(')',r+1):r)},St=function(e){var t=(e+'').split('('),r=_t[t[0]];return r&&1<t.length&&r.config?r.config.apply(null,~e.indexOf('{')?[Mt(t[1])]:Et(e).split(',').map(ce)):_t._CE&&bt.test(e)?_t._CE('',e):r},wt=function(e){return function(t){return 1-e(1-t)}},At=function e(t,r){for(var a=t._first,i;a;)a instanceof Wt?e(a,r):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==r&&(a.timeline?e(a.timeline,r):(i=a._ease,a._ease=a._yEase,a._yEase=i,a._yoyo=r)),a=a._next},Rt=function(e,t){return e?(E(e)?e:_t[e]||St(e))||t:t},Lt=function(e,t,r,a){void 0===r&&(r=function(e){return 1-t(1-e)}),void 0===a&&(a=function(e){return .5>e?t(2*e)/2:1-t(2*(1-e))/2});var i={easeIn:t,easeOut:r,easeInOut:a},n;return ie(e,function(e){for(var t in _t[e]=G[e]=i,_t[n=e.toLowerCase()]=r,i)_t[n+('easeIn'===t?'.in':'easeOut'===t?'.out':'.inOut')]=_t[e+'.'+t]=i[t]}),i},Pt=function(e){return function(t){return .5>t?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}},Ct=function e(r,a,i){var n=1<=a?a:1,s=(i||(r?.3:.45))/(1>a?a:1),l=s/y*(t(1/n)||0),d=function(e){return 1===e?1:n*o(2,-10*e)*h((e-l)*s)+1},p='out'===r?d:'in'===r?function(e){return 1-d(1-e)}:Pt(d);return s=y/s,p.config=function(t,a){return e(r,t,a)},p},It=function e(t,r){void 0===r&&(r=1.70158);var a=function(e){return e?--e*e*((r+1)*e+r)+1:0},i='out'===t?a:'in'===t?function(e){return 1-a(1-e)}:Pt(a);return i.config=function(r){return e(t,r)},i},Dt,Nt,zt,Ut,Ft,Bt,Ot,Gt,Vt;ie('Linear,Quad,Cubic,Quart,Quint,Strong',function(e,t){var r=5>t?t+1:t;Lt(e+',Power'+(r-1),t?function(e){return o(e,r)}:function(e){return e},function(e){return 1-o(1-e,r)},function(e){return .5>e?o(2*e,r)/2:1-o(2*(1-e),r)/2})}),_t.Linear.easeNone=_t.none=_t.Linear.easeIn,Lt('Elastic',Ct('in'),Ct('out'),Ct()),function(e,t){var r=1/t,a=function(a){return a<r?e*a*a:a<2*r?e*o(a-1.5/t,2)+.75:a<2.5*r?e*(a-=2.25/t)*a+.9375:e*o(a-2.625/t,2)+.984375};Lt('Bounce',function(e){return 1-a(1-e)},a)}(7.5625,2.75),Lt('Expo',function(e){return e?o(2,10*(e-1)):0}),Lt('Circ',function(e){return-(v(1-e*e)-1)}),Lt('Sine',function(e){return 1===e?1:-g(e*(y/4))+1}),Lt('Back',It('in'),It('out'),It()),_t.SteppedEase=_t.steps=G.SteppedEase={config:function(e,t){void 0===e&&(e=1);var r=1/e,a=e+(t?0:1),i=t?1:0;return function(e){return((0|a*je(0,1-d,e))+i)*r}}},l.ease=_t['quad.out'],ie('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',function(e){return ee+=e+','+e+'Params,'});var Ht=function(e,t){this.id=x++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ae,this.set=t?t.getSetter:dr},kt=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===Infinity?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Oe(this,+e.duration,1,1),this.data=e.data,Vt||xt.wake()}var t=e.prototype;return t.delay=function(e){return e||0===e?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(0<this._repeat?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Oe(this,0>this._repeat?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(vt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Pe(this,e),!r._dp||r.parent||Ce(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&e<this._tDur||0>this._ts&&0<e||!this._tDur&&!e)&&Ie(this._dp,this,this._start-this._delay)}return this._tTime===e&&(this._dur||t)&&(!this._initted||f(this._zTime)!==d)&&(e||this._initted||!this.add&&!this._ptLookup)||(this._ts||(this._pTime=e),pe(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(M(this.totalDuration(),e+we(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?M(1,this._tTime/this._tDur):this.ratio},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(1&this.iteration())?1-e:e)+we(this),t):this.duration()?M(1,this._time/this._dur):this.ratio},t.iteration=function(e,t){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*r,t):this._repeat?Ae(this._tTime,r)+1:1},t.timeScale=function(e){if(!arguments.length)return this._rts===-d?0:this._rts;if(this._rts===e)return this;var t=this.parent&&this._ts?Re(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-d?0:this._rts,this.totalTime(je(-this._delay,this._tDur,t),!0),Le(this),Ee(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||T(-this._delay,this.rawTime()),this._ts=this._act=0):(vt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&f(this._zTime)!==d&&(this._tTime-=d)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Ie(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(R(e)?this.totalDuration():this.duration())/f(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&1>this.totalProgress())?this._tTime%(this._dur+this._rDelay):this._ts?Re(t.rawTime(e),this):this._tTime:this._tTime},t.globalTime=function(e){for(var t=this,r=arguments.length?e:t.rawTime();t;)r=t._start+r/(t._ts||1),t=t._dp;return r},t.repeat=function(e){return arguments.length?(this._repeat=e===Infinity?-2:e,Ge(this)):-2===this._repeat?Infinity:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Ge(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(He(this,e),R(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,R(t))},t.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-d:0)),this):0>this._rts},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-d,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,r;return!!(!e||this._ts&&this._initted&&e.isActive()&&(r=e.rawTime(!0))>=t&&r<this.endTime(!0)-d)},t.eventCallback=function(e,t,r){var a=this.vars;return 1<arguments.length?(t?(a[e]=t,r&&(a[e+'Params']=r),'onUpdate'===e&&(this._onUpdate=t)):delete a[e],this):a[e]},t.then=function(e){var t=this;return new Promise(function(r){var a=E(e)?e:ue,i=function(){var e=t.then;t.then=null,E(a)&&(a=a(t))&&(a.then||a===t)&&(t.then=e),r(a),t.then=e};t._initted&&1===t.totalProgress()&&0<=t._ts||!t._tTime&&0>t._ts?i():t._prom=i})},t.kill=function(){st(this)},e}();me(kt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-d,_prom:0,_ps:!1,_rts:1});var Wt=function(e){function t(t,r){var a;return void 0===t&&(t={}),a=e.call(this,t)||this,a.labels={},a.smoothChildTiming=!!t.smoothChildTiming,a.autoRemoveChildren=!!t.autoRemoveChildren,a._sort=R(t.sortChildren),Nt&&Ie(t.parent||Nt,n(a),r),t.reversed&&a.reverse(),t.paused&&a.paused(!0),t.scrollTrigger&&De(n(a),t.scrollTrigger),a}i(t,e);var r=t.prototype;return r.to=function(){return ke(0,arguments,this),this},r.from=function(){return ke(1,arguments,this),this},r.fromTo=function(){return ke(2,arguments,this),this},r.set=function(e,t,r){return t.duration=0,t.parent=this,xe(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new ir(e,t,He(this,r),1),this},r.call=function(e,t,r){return Ie(this,ir.delayedCall(0,e,t),r)},r.staggerTo=function(e,t,r,a,i,n,o){return r.duration=t,r.stagger=r.stagger||a,r.onComplete=n,r.onCompleteParams=o,r.parent=this,new ir(e,r,He(this,i)),this},r.staggerFrom=function(e,t,r,a,i,n,o){return r.runBackwards=1,xe(r).immediateRender=R(r.immediateRender),this.staggerTo(e,t,r,a,i,n,o)},r.staggerFromTo=function(e,t,r,a,i,n,o,s){return a.startAt=r,xe(a).immediateRender=R(a.immediateRender),this.staggerTo(e,t,a,i,n,o,s)},r.render=function(e,t,r){var a=this._time,i=this._dirty?this.totalDuration():this._tDur,n=this._dur,o=0>=e?0:oe(e),s=0>this._zTime!=0>e&&(this._initted||!n),l,p,c,u,m,g,h,y,x,v,_,b;if(this!==Nt&&o>i&&0<=e&&(o=i),o!==this._tTime||r||s){if(a!==this._time&&n&&(o+=this._time-a,e+=this._time-a),l=o,x=this._start,y=this._ts,g=!y,s&&(n||(a=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(_=this._yoyo,m=n+this._rDelay,-1>this._repeat&&0>e)return this.totalTime(100*m+e,t,r);if(l=oe(o%m),o===i?(u=this._repeat,l=n):(u=~~(o/m),u&&u===o/m&&(l=n,u--),l>n&&(l=n)),v=Ae(this._tTime,m),!a&&this._tTime&&v!==u&&(v=u),_&&1&u&&(l=n-l,b=1),u!==v&&!this._lock){var T=_&&1&v,M=T===(_&&1&u);if(u<v&&(T=!T),a=T?0:n,this._lock=1,this.render(a||(b?0:oe(u*m)),t,!n)._lock=0,this._tTime=o,!t&&this.parent&&ot(this,'onRepeat'),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(n=this._dur,i=this._tDur,M&&(this._lock=2,a=T?n:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;At(this,b)}}if(this._hasPause&&!this._forcing&&2>this._lock&&(h=Be(this,oe(a),oe(l)),h&&(o-=l-(l=h._start))),this._tTime=o,this._time=l,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,a=0),!a&&l&&!t&&(ot(this,'onStart'),this._tTime!==o))return this;if(l>=a&&0<=e)for(p=this._first;p;){if(c=p._next,(p._act||l>=p._start)&&p._ts&&h!==p){if(p.parent!==this)return this.render(e,t,r);if(p.render(0<p._ts?(l-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(l-p._start)*p._ts,t,r),l!==this._time||!this._ts&&!g){h=0,c&&(o+=this._zTime=-d);break}}p=c}else{p=this._last;for(var E=0>e?e:l;p;){if(c=p._prev,(p._act||E<=p._end)&&p._ts&&h!==p){if(p.parent!==this)return this.render(e,t,r);if(p.render(0<p._ts?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,t,r),l!==this._time||!this._ts&&!g){h=0,c&&(o+=this._zTime=E?-d:d);break}}p=c}}if(h&&!t&&(this.pause(),h.render(l>=a?0:-d)._zTime=l>=a?1:-1,this._ts))return this._start=x,Le(this),this.render(e,t,r);this._onUpdate&&!t&&ot(this,'onUpdate',!0),(o===i&&this._tTime>=this.totalDuration()||!o&&a)&&(x===this._start||f(y)!==f(this._ts))&&!this._lock&&((e||!n)&&(o===i&&0<this._ts||!o&&0>this._ts)&&Te(this,1),!t&&(!(0>e)||a)&&(o||a||!i)&&(ot(this,o===i&&0<=e?'onComplete':'onReverseComplete',!0),this._prom&&!(o<i&&0<this.timeScale())&&this._prom()))}return this},r.add=function(e,t){var r=this;if(S(t)||(t=He(this,t,e)),!(e instanceof kt)){if(I(e))return e.forEach(function(e){return r.add(e,t)}),this;if(b(e))return this.addLabel(e,t);if(E(e))e=ir.delayedCall(0,e);else return this}return this===e?this:Ie(this,e,t)},r.getChildren=function(e,t,r,i){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===i&&(i=-c);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof ir?t&&n.push(a):(r&&n.push(a),e&&n.push.apply(n,a.getChildren(!0,t,r)))),a=a._next;return n},r.getById=function(e){for(var t=this.getChildren(1,1,1),r=t.length;r--;)if(t[r].vars.id===e)return t[r]},r.remove=function(e){return b(e)?this.removeLabel(e):E(e)?this.killTweensOf(e):(be(this,e),e===this._recent&&(this._recent=this._last),Me(this))},r.totalTime=function(t,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=oe(xt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,r),this._forcing=0,this):this._tTime},r.addLabel=function(e,t){return this.labels[e]=He(this,t),this},r.removeLabel=function(e){return delete this.labels[e],this},r.addPause=function(e,r,a){var i=ir.delayedCall(0,r||X,a);return i.data='isPause',this._hasPause=1,Ie(this,i,He(this,e))},r.removePause=function(e){var t=this._first;for(e=He(this,e);t;)t._start===e&&'isPause'===t.data&&Te(t),t=t._next},r.killTweensOf=function(e,t,r){for(var a=this.getTweensOf(e,r),n=a.length;n--;)rr!==a[n]&&a[n].kill(e,t);return this},r.getTweensOf=function(e,t){for(var r=[],a=Je(e),i=this._first,n=S(t),o;i;)i instanceof ir?le(i._targets,a)&&(n?(!rr||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&r.push(i):(o=i.getTweensOf(a,t)).length&&r.push.apply(r,o),i=i._next;return r},r.tweenTo=function(e,t){t=t||{};var r=this,a=He(r,e),i=t,n=i.startAt,o=i.onStart,s=i.onStartParams,l=i.immediateRender,p=ir.to(r,me({ease:t.ease||'none',lazy:!1,immediateRender:!1,time:a,overwrite:'auto',duration:t.duration||f((a-(n&&'time'in n?n.time:r._time))/r.timeScale())||d,onStart:function(){if(r.pause(),!c){var e=t.duration||f((a-(n&&'time'in n?n.time:r._time))/r.timeScale());p._dur!==e&&Oe(p,e,0,1).render(p._time,!0,!0),c=1}o&&o.apply(p,s||[])}},t)),c;return l?p.render(0):p},r.tweenFromTo=function(e,t,r){return this.tweenTo(t,me({startAt:{time:He(this,e)}},r))},r.recent=function(){return this._recent},r.nextLabel=function(e){return void 0===e&&(e=this._time),nt(this,He(this,e))},r.previousLabel=function(e){return void 0===e&&(e=this._time),nt(this,He(this,e),1)},r.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+d)},r.shiftChildren=function(e,t,r){void 0===r&&(r=0);for(var a=this._first,i=this.labels,n;a;)a._start>=r&&(a._start+=e,a._end+=e),a=a._next;if(t)for(n in i)i[n]>=r&&(i[n]+=e);return Me(this)},r.invalidate=function(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return e.prototype.invalidate.call(this)},r.clear=function(e){void 0===e&&(e=!0);for(var t=this._first,r;t;)r=t._next,this.remove(t),t=r;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Me(this)},r.totalDuration=function(e){var t=0,r=this,a=r._last,i=c,n,o,s;if(arguments.length)return r.timeScale((0>r._repeat?r.duration():r.totalDuration())/(r.reversed()?-e:e));if(r._dirty){for(s=r.parent;a;)n=a._prev,a._dirty&&a.totalDuration(),o=a._start,o>i&&r._sort&&a._ts&&!r._lock?(r._lock=1,Ie(r,a,o-a._delay,1)._lock=0):i=o,0>o&&a._ts&&(t-=o,(!s&&!r._dp||s&&s.smoothChildTiming)&&(r._start+=o/r._ts,r._time-=o,r._tTime-=o),r.shiftChildren(-o,!1,-1e999),i=0),a._end>t&&a._ts&&(t=a._end),a=n;Oe(r,r===Nt&&r._time>t?r._time:t,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(e){if(Nt._ts&&(pe(Nt,Re(e,Nt)),Ot=xt.frame),xt.frame>=K){K+=s.autoSleep||120;var t=Nt._first;if((!t||!t._ts)&&s.autoSleep&&2>xt._listeners.length){for(;t&&!t._ts;)t=t._next;t||xt.sleep()}}},t}(kt);me(Wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var jt=function(e,t,r,i,n,o,s){var l=new xr(this._pt,e,t,0,1,ur,null,n),d=0,p=0,c,m,g,f,h,y,x,v;for(l.b=r,l.e=i,r+='',i+='',(x=~i.indexOf('random('))&&(i=at(i)),o&&(v=[r,i],o(v,e,t),r=v[0],i=v[1]),m=r.match(U)||[];c=U.exec(i);)f=c[0],h=i.substring(d,c.index),g?g=(g+1)%5:'rgba('===h.substr(-5)&&(g=1),f!==m[p++]&&(y=parseFloat(m[p-1])||0,l._pt={_next:l._pt,p:h||1==p?h:',',s:y,c:'='===f.charAt(1)?se(y,f)-y:parseFloat(f)-y,m:g&&4>g?u:0},d=U.lastIndex);return l.c=d<i.length?i.substring(d,i.length):'',l.fp=s,(F.test(i)||x)&&(l.e=0),this._pt=l,l},Xt=function(e,t,r,a,i,n,o,l,d){E(a)&&(a=a(i||0,e,n));var p=e[t],c='get'===r?E(p)?d?e[t.indexOf('set')||!E(e['get'+t.substr(3)])?t:'get'+t.substr(3)](d):e[t]():p:r,u=E(p)?d?sr:or:nr,m;if(b(a)&&(~a.indexOf('random(')&&(a=at(a)),'='===a.charAt(1)&&(m=se(c,a)+(Xe(c)||0),(m||0===m)&&(a=m))),c!==a||ar)return isNaN(c*a)||''===a?(p||t in e||k(t,a),jt.call(this,e,t,c,a,u,l||s.stringFilter,d)):(m=new xr(this._pt,e,t,+c||0,a-(c||0),'boolean'==typeof p?cr:pr,0,u),d&&(m.fp=d),o&&m.modifier(o,this,e),this._pt=m)},qt=function(e,t,r,a,i){if(E(e)&&(e=$t(e,i,t,r,a)),!A(e)||e.style&&e.nodeType||I(e)||C(e))return b(e)?$t(e,i,t,r,a):e;var n={},o;for(o in e)n[o]=$t(e[o],i,t,r,a);return n},Yt=function(e,t,r,a,n,o){var s,l,d,p;if(J[e]&&!1!==(s=new J[e]).init(n,s.rawVars?t[e]:qt(t[e],a,n,o,r),r,a,o)&&(r._pt=l=new xr(r._pt,n,e,0,1,s.render,s,0,s.priority),r!==Gt))for(d=r._ptLookup[r._targets.indexOf(n)],p=s._props.length;p--;)d[s._props[p]]=l;return s},Zt=function e(t,r){var a=t.vars,n=a.ease,o=a.startAt,s=a.immediateRender,u=a.lazy,m=a.onUpdate,g=a.onUpdateParams,f=a.callbackScope,h=a.runBackwards,y=a.yoyoEase,x=a.keyframes,v=a.autoRevert,_=t._dur,b=t._startAt,T=t._targets,M=t.parent,E=M&&'nested'===M.data?M.parent._targets:T,S='auto'===t._overwrite&&!Dt,w=t.timeline,A,L,i,p,P,C,I,D,N,z,U,F,B;if(!w||x&&n||(n='none'),t._ease=Rt(n,l.ease),t._yEase=y?wt(Rt(!0===y?n:y,l.ease)):0,y&&t._yoyo&&!t._repeat&&(y=t._yEase,t._yEase=t._ease,t._ease=y),t._from=!w&&!!a.runBackwards,!w||x&&!a.stagger){if(D=T[0]?re(T[0]).harness:0,F=D&&a[D.prop],A=ye(a,q),b&&(Te(b.render(-1,!0)),b._lazy=0),o){if(Te(t._startAt=ir.set(T,me({data:'isStart',overwrite:!1,parent:M,immediateRender:!0,lazy:R(u),startAt:null,delay:0,onUpdate:m,onUpdateParams:g,callbackScope:f,stagger:0},o))),!(0>r)||s||v||t._startAt.render(-1,!0),!s)!1===v&&(t._startAt=0);else if(0<r&&!v&&(t._startAt=0),_&&0>=r)return void(r&&(t._zTime=r));}else if(h&&_)if(b)v||(t._startAt=0);else if(r&&(s=!1),i=me({overwrite:!1,data:'isFromStart',lazy:s&&R(u),immediateRender:s,stagger:0,parent:M},A),F&&(i[D.prop]=F),Te(t._startAt=ir.set(T,i)),0>r&&t._startAt.render(-1,!0),t._zTime=r,!s)e(t._startAt,d);else if(!r)return;for(t._pt=t._ptCache=0,u=_&&R(u)||u&&!_,L=0;L<T.length;L++){if(P=T[L],I=P._gsap||te(T)[L]._gsap,t._ptLookup[L]=z={},Z[I.id]&&Y.length&&de(),U=E===T?L:E.indexOf(P),D&&!1!==(N=new D).init(P,F||A,t,U,E)&&(t._pt=p=new xr(t._pt,P,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(e){z[e]=p}),N.priority&&(C=1)),!D||F)for(i in A)J[i]&&(N=Yt(i,A,t,U,P,E))?N.priority&&(C=1):z[i]=p=Xt.call(t,P,i,'get',A[i],U,E,0,a.stringFilter);t._op&&t._op[L]&&t.kill(P,t._op[L]),S&&t._pt&&(rr=t,Nt.killTweensOf(P,z,t.globalTime(r)),B=!t.parent,rr=0),t._pt&&u&&(Z[I.id]=1)}C&&yr(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!B,x&&0>=r&&w.render(c,!0,!0)},Jt=function(e,t,r,a,n,o,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,p,c;if(!l)for(l=e._ptCache[t]=[],p=e._ptLookup,c=e._targets.length;c--;){if(d=p[c][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t;)d=d._next;if(!d)return ar=1,e.vars[t]='+=0',Zt(e,s),ar=0,1;l.push(d)}for(c=l.length;c--;)d=l[c],d.s=(a||0===a)&&!n?a:d.s+(a||0)+o*d.c,d.c=r-d.s,d.e&&(d.e=ne(r)+Xe(d.e)),d.b&&(d.b=d.s+Xe(d.b))},Qt=function(e,t){var r=e[0]?re(e[0]).harness:0,a=r&&r.aliases,n,o,s,i;if(!a)return t;for(o in n=fe({},t),a)if(o in n)for(i=a[o].split(','),s=i.length;s--;)n[i[s]]=n[o];return n},Kt=function(e,t,r,i){var n=t.ease||i||'power1.inOut',o,s;if(I(t))s=r[e]||(r[e]=[]),t.forEach(function(e,r){return s.push({t:100*(r/(t.length-1)),v:e,e:n})});else for(o in t)s=r[o]||(r[o]=[]),'ease'===o||s.push({t:parseFloat(e),v:t[o],e:n})},$t=function(e,t,r,a,i){return E(e)?e.call(t,r,a,i):b(e)&&~e.indexOf('random(')?at(e):e},er=ee+'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',tr={},rr,ar;ie(er+',id,stagger,delay,duration,paused,scrollTrigger',function(e){return tr[e]=1});var ir=function(e){function t(t,r,o,c){var u;'number'==typeof r&&(o.duration=r,r=o,o=null),u=e.call(this,c?r:xe(r))||this;var m=u.vars,g=m.duration,f=m.delay,h=m.immediateRender,y=m.stagger,x=m.overwrite,_=m.keyframes,b=m.defaults,M=m.scrollTrigger,E=m.yoyoEase,w=r.parent||Nt,L=(I(t)||C(t)?S(t[0]):'length'in r)?[t]:Je(t),D,N,i,z,l,p,U,F;if(u._targets=L.length?te(L):W('GSAP target '+t+' not found. https://greensock.com',!s.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=x,_||y||P(g)||P(f)){if(r=u.vars,D=u.timeline=new Wt({data:'nested',defaults:b||{}}),D.kill(),D.parent=D._dp=n(u),D._start=0,y||P(g)||P(f)){if(z=L.length,U=y&&Ke(y),A(y))for(l in y)~er.indexOf(l)&&(F||(F={}),F[l]=y[l]);for(N=0;N<z;N++)i=ye(r,tr),i.stagger=0,E&&(i.yoyoEase=E),F&&fe(i,F),p=L[N],i.duration=+$t(g,n(u),N,p,L),i.delay=(+$t(f,n(u),N,p,L)||0)-u._delay,!y&&1===z&&i.delay&&(u._delay=f=i.delay,u._start+=f,i.delay=0),D.to(p,i,U?U(N,p,L):0),D._ease=_t.none;D.duration()?g=f=0:u.timeline=0}else if(_){xe(me(D.vars.defaults,{ease:'none'})),D._ease=Rt(_.ease||r.ease||'none');var B=0,O,a,G;if(I(_))_.forEach(function(e){return D.to(L,e,'>')});else{for(l in i={},_)'ease'===l||'easeEach'===l||Kt(l,_[l],i,_.easeEach);for(l in i)for(O=i[l].sort(function(e,t){return e.t-t.t}),B=0,N=0;N<O.length;N++)a=O[N],G={ease:a.e,duration:(a.t-(N?O[N-1].t:0))/100*g},G[l]=a.v,D.to(L,G,B),B+=G.duration;D.duration()<g&&D.to({},{duration:g-D.duration()})}}g||u.duration(g=D.duration())}else u.timeline=0;return!0!==x||Dt||(rr=n(u),Nt.killTweensOf(L),rr=0),Ie(w,n(u),o),r.reversed&&u.reverse(),r.paused&&u.paused(!0),(h||!g&&!_&&u._start===oe(w._time)&&R(h)&&Se(n(u))&&'nested'!==w.data)&&(u._tTime=-d,u.render(T(0,-f))),M&&De(n(u),M),u}i(t,e);var r=t.prototype;return r.render=function(e,t,r){var a=this._time,i=this._tDur,n=this._dur,o=e>i-d&&0<=e?i:e<d?0:e,s,l,p,c,u,m,g,f,h;if(!n)Fe(this,e,t,r);else if(o!==this._tTime||!e||r||!this._initted&&this._tTime||this._startAt&&0>this._zTime!=0>e){if(s=o,f=this.timeline,this._repeat){if(c=n+this._rDelay,-1>this._repeat&&0>e)return this.totalTime(100*c+e,t,r);if(s=oe(o%c),o===i?(p=this._repeat,s=n):(p=~~(o/c),p&&p===o/c&&(s=n,p--),s>n&&(s=n)),m=this._yoyo&&1&p,m&&(h=this._yEase,s=n-s),u=Ae(this._tTime,c),s===a&&!r&&this._initted)return this._tTime=o,this;p!==u&&(f&&this._yEase&&At(f,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=r=1,this.render(oe(c*p),!0).invalidate()._lock=0))}if(!this._initted){if(Ne(this,0>e?e:s,r,t))return this._tTime=0,this;if(a!==this._time)return this;if(n!==this._dur)return this.render(e,t,r)}if(this._tTime=o,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(h||this._ease)(s/n),this._from&&(this.ratio=g=1-g),s&&!a&&!t&&(ot(this,'onStart'),this._tTime!==o))return this;for(l=this._pt;l;)l.r(g,l.d),l=l._next;f&&f.render(0>e?e:!s&&m?-d:f._dur*f._ease(s/this._dur),t,r)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(0>e&&this._startAt&&this._startAt.render(e,!0,r),ot(this,'onUpdate')),this._repeat&&p!==u&&this.vars.onRepeat&&!t&&this.parent&&ot(this,'onRepeat'),o!==this._tDur&&o||this._tTime!==o||(0>e&&this._startAt&&!this._onUpdate&&this._startAt.render(e,!0,!0),(e||!n)&&(o===this._tDur&&0<this._ts||!o&&0>this._ts)&&Te(this,1),!t&&(!(0>e)||a)&&(o||a)&&(ot(this,o===i?'onComplete':'onReverseComplete',!0),this._prom&&!(o<i&&0<this.timeScale())&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),e.prototype.invalidate.call(this)},r.resetTo=function(e,t,r,a){Vt||xt.wake(),this._ts||this.play();var i=M(this._dur,(this._dp._time-this._start)*this._ts),n;return(this._initted||Zt(this,i),n=this._ease(i/this._dur),Jt(this,e,t,r,a,n,i))?this.resetTo(e,t,r,a):(Pe(this,0),this.parent||_e(this._dp,this,'_first','_last',this._dp._sort?'_start':0),this.render(0))},r.kill=function(e,t){if(void 0===t&&(t='all'),!e&&(!t||'all'===t))return this._lazy=this._pt=0,this.parent?st(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,rr&&!0!==rr.vars.overwrite)._first||st(this),this.parent&&r!==this.timeline.totalDuration()&&Oe(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,n=e?Je(e):a,o=this._ptLookup,s=this._pt,l,d,c,u,m,p,g;if((!t||'all'===t)&&ve(a,n))return'all'===t&&(this._pt=0),st(this);for(l=this._op=this._op||[],'all'!==t&&(b(t)&&(m={},ie(t,function(e){return m[e]=1}),t=m),t=Qt(a,t)),g=a.length;g--;)if(~n.indexOf(a[g]))for(m in d=o[g],'all'===t?(l[g]=t,u=d,c={}):(c=l[g]=l[g]||{},u=t),u)p=d&&d[m],p&&((!('kill'in p.d)||!0===p.d.kill(m))&&be(this,p,'_pt'),delete d[m]),'all'!==c&&(c[m]=1);return this._initted&&!this._pt&&s&&st(this),this},t.to=function(e,r){return new t(e,r,arguments[2])},t.from=function(){return ke(1,arguments)},t.delayedCall=function(e,r,a,i){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:i})},t.fromTo=function(){return ke(2,arguments)},t.set=function(e,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(e,r)},t.killTweensOf=function(e,t,r){return Nt.killTweensOf(e,t,r)},t}(kt);me(ir.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ie('staggerTo,staggerFrom,staggerFromTo',function(e){ir[e]=function(){var t=new Wt,r=qe.call(arguments,0);return r.splice('staggerFromTo'===e?5:4,0,0),t[e].apply(t,r)}});var nr=function(e,t,r){return e[t]=r},or=function(e,t,r){return e[t](r)},sr=function(e,t,r,a){return e[t](a.fp,r)},lr=function(e,t,r){return e.setAttribute(t,r)},dr=function(e,t){return E(e[t])?or:w(e[t])&&e.setAttribute?lr:nr},pr=function(e,t){return t.set(t.t,t.p,u(1e6*(t.s+t.c*e))/1e6,t)},cr=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ur=function(e,t){var r=t._pt,a='';if(!e&&t.b)a=t.b;else if(1===e&&t.e)a=t.e;else{for(;r;)a=r.p+(r.m?r.m(r.s+r.c*e):u(1e4*(r.s+r.c*e))/1e4)+a,r=r._next;a+=t.c}t.set(t.t,t.p,a,t)},mr=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},gr=function(e,t,r,a){for(var i=this._pt,n;i;)n=i._next,i.p===a&&i.modifier(e,t,r),i=n},fr=function(e){for(var t=this._pt,r,a;t;)a=t._next,(t.p!==e||t.op)&&t.op!==e?!t.dep&&(r=1):be(this,t,'_pt'),t=a;return!r},hr=function(e,t,r,a){a.mSet(e,t,a.m.call(a.tween,r,a.mt),a)},yr=function(e){for(var t=e._pt,r,a,i,n;t;){for(r=t._next,a=i;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:n)?t._prev._next=t:i=t,(t._next=a)?a._prev=t:n=t,t=r}e._pt=i},xr=function(){function e(e,t,r,a,i,n,o,s,l){this.t=t,this.s=a,this.c=i,this.p=r,this.r=n||pr,this.d=o||this,this.set=s||nr,this.pr=l||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,r){this.mSet=this.mSet||this.set,this.set=hr,this.m=e,this.mt=r,this.tween=t},e}();ie(ee+'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',function(e){return q[e]=1}),G.TweenMax=G.TweenLite=ir,G.TimelineLite=G.TimelineMax=Wt,Nt=new Wt({sortChildren:!1,defaults:l,autoRemoveChildren:!0,id:'root',smoothChildTiming:!0}),s.stringFilter=yt;var vr={registerPlugin:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(e){return lt(e)})},timeline:function(e){return new Wt(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,r,a){b(e)&&(e=Je(e)[0]);var i=re(e||{}).get,n=r?ue:ce;return'native'===r&&(r=''),e?t?n((J[t]&&J[t].get||i)(e,t,r,a)):function(t,r,a){return n((J[t]&&J[t].get||i)(e,t,r,a))}:e},quickSetter:function(e,r,a){if(e=Je(e),1<e.length){var t=e.map(function(e){return Mr.quickSetter(e,r,a)}),n=t.length;return function(e){for(var r=n;r--;)t[r](e)}}e=e[0]||{};var i=J[r],o=re(e),s=o.harness&&(o.harness.aliases||{})[r]||r,l=i?function(t){var r=new i;Gt._pt=0,r.init(e,a?t+a:t,Gt,0,[e]),r.render(1,r),Gt._pt&&mr(1,Gt)}:o.set(e,s);return i?l:function(t){return l(e,s,a?t+a:t,o,1)}},quickTo:function(e,t,r){var a=Mr.to(e,fe((n={},n[t]='+=0.1',n.paused=!0,n),r||{})),i=function(e,r,i){return a.resetTo(t,e,r,i)},n;return i.tween=a,i},isTweening:function(e){return 0<Nt.getTweensOf(e,!0).length},defaults:function(e){return e&&e.ease&&(e.ease=Rt(e.ease,l.ease)),he(l,e||{})},config:function(e){return he(s,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,a=e.plugins,i=e.defaults,n=e.extendTimeline;(a||'').split(',').forEach(function(e){return e&&!J[e]&&!G[e]&&W(t+' effect requires '+e+' plugin.')}),Q[t]=function(e,t,a){return r(Je(e),me(t||{},i),a)},n&&(Wt.prototype[t]=function(e,r,a){return this.add(Q[t](e,A(r)?r:(a=r)&&{},this),a)})},registerEase:function(e,t){_t[e]=Rt(t)},parseEase:function(e,t){return arguments.length?Rt(e,t):_t},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){void 0===e&&(e={});var r=new Wt(e),a,i;for(r.smoothChildTiming=R(e.smoothChildTiming),Nt.remove(r),r._dp=0,r._time=r._tTime=Nt._time,a=Nt._first;a;)i=a._next,(t||a._dur||!(a instanceof ir)||a.vars.onComplete!==a._targets[0])&&Ie(r,a,a._start-a._delay),a=i;return Ie(Nt,r,0),r},utils:{wrap:function e(t,r,a){var i=r-t;return I(t)?rt(t,e(0,t.length),r):We(a,function(e){return(i+(e-t)%i)%i+t})},wrapYoyo:function e(t,r,a){var i=r-t,n=2*i;return I(t)?rt(t,e(0,t.length-1),r):We(a,function(e){return e=(n+(e-t)%n)%n||0,t+(e>i?n-e:e)})},distribute:Ke,random:tt,snap:et,normalize:function(e,t,r){return it(e,t,0,1,r)},getUnit:Xe,clamp:function(e,t,r){return We(r,function(r){return je(e,t,r)})},splitColor:ut,toArray:Je,selector:function(e){return e=Je(e)[0]||W('Invalid scope')||{},function(t){var r=e.current||e.nativeElement||e;return Je(t,r.querySelectorAll?r:r===e?W('Invalid scope')||Ft.createElement('div'):e)}},mapRange:it,pipe:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce(function(e,t){return t(e)},e)}},unitize:function(e,t){return function(r){return e(parseFloat(r))+(t||Xe(r))}},interpolate:function e(t,r,a,n){var o=isNaN(t+r)?0:function(e){return(1-e)*t+e*r};if(!o){var s=b(t),d={},c,p,u,m,l;if(!0===a&&(n=1)&&(a=null),s)t={p:t},r={p:r};else if(I(t)&&!I(r)){for(u=[],m=t.length,l=m-2,p=1;p<m;p++)u.push(e(t[p-1],t[p]));m--,o=function(e){e*=m;var t=M(l,~~e);return u[t](e-t)},a=r}else n||(t=fe(I(t)?[]:{},t));if(!u){for(c in r)Xt.call(d,t,c,'get',r[c]);o=function(e){return mr(e,d)||(s?t.p:t)}}}return We(a,o)},shuffle:Qe},install:H,effects:Q,ticker:xt,updateRoot:Wt.updateRoot,plugins:J,globalTimeline:Nt,core:{PropTween:xr,globals:j,Tween:ir,Timeline:Wt,Animation:kt,getCache:re,_removeLinkedListItem:be,suppressOverwrites:function(e){return Dt=e}}};ie('to,from,fromTo,delayedCall,set,killTweensOf',function(e){return vr[e]=ir[e]}),xt.add(Wt.updateRoot),Gt=vr.to({},{duration:0});var _r=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},br=function(e,t){var r=e._targets,a,n,i;for(a in t)for(n=r.length;n--;)i=e._ptLookup[n][a],i&&(i=i.d)&&(i._pt&&(i=_r(i,a)),i&&i.modifier&&i.modifier(t[a],e,r[n],a))},Tr=function(e,t){return{name:e,rawVars:1,init:function(e,r,a){a._onInit=function(e){var a,i;if(b(r)&&(a={},ie(r,function(e){return a[e]=1}),r=a),t){for(i in a={},r)a[i]=t(r[i]);r=a}br(e,r)}}}},Mr=vr.registerPlugin({name:'attr',init:function(e,t,r,a,i){var n,o;for(n in t)o=this.add(e,'setAttribute',(e.getAttribute(n)||0)+'',t[n],a,i,0,0,n),o&&(o.op=n),this._props.push(n)}},{name:'endArray',init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r])}},Tr('roundProps',$e),Tr('modifiers'),Tr('snap',et))||vr;ir.version=Wt.version=Mr.version='3.10.2',Bt=1,L()&&vt();var Er=_t.Power0,Sr=_t.Power1,wr=_t.Power2,Ar=_t.Power3,Rr=_t.Power4,Lr=_t.Linear,Pr=_t.Quad,Cr=_t.Cubic,Ir=_t.Quart,Dr=_t.Quint,Nr=_t.Strong,zr=_t.Elastic,Ur=_t.Back,Fr=_t.SteppedEase,Br=_t.Bounce,Or=_t.Sine,Gr=_t.Expo,Vr=_t.Circ},function(e,t,r){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var a=r(23),i=r(227),n=r(46),o=n(a.a,i.a,!1,function(){!1||r(41)},null,null);o.options.__file='lib/VueDisplacementSlideshow.vue',!1,t['default']=o.exports},function(e,t,r){var a=r(42);'string'==typeof a&&(a=[[e.i,a,'']]),a.locals&&(e.exports=a.locals);r(44)('14fd354a',a,!1,{})},function(e,t,r){t=e.exports=r(43)(!1),t.push([e.i,'\n.vue-displacement-slideshow {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n',''])},function(e){function t(e,t){var a=e[1]||'',i=e[3];if(!i)return a;if(t&&'function'==typeof btoa){var n=r(i),o=i.sources.map(function(e){return'/*# sourceURL='+i.sourceRoot+e+' */'});return[a].concat(o).concat([n]).join('\n')}return[a].join('\n')}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+t)+' */'}e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var a=t(r,e);return r[2]?'@media '+r[2]+'{'+a+'}':a}).join('')},r.i=function(e,t){'string'==typeof e&&(e=[[null,e,'']]);for(var a={},n=0,i;n<this.length;n++)i=this[n][0],'number'==typeof i&&(a[i]=!0);for(n=0;n<e.length;n++){var o=e[n];'number'==typeof o[0]&&a[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]='('+o[2]+') and ('+t+')'),r.push(o))}},r}},function(e,t,r){function a(e){for(var t=0;t<e.length;t++){var r=e[t],a=p[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(n(r.parts[i]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(n(r.parts[i]));p[r.id]={id:r.id,refs:1,parts:o}}}}function i(){var e=document.createElement('style');return e.type='text/css',c.appendChild(e),e}function n(e){var t=document.querySelector('style['+y+'~="'+e.id+'"]'),r,a;if(t){if(g)return f;t.parentNode.removeChild(t)}if(x){var n=m++;t=u||(u=i()),r=o.bind(null,t,n,!1),a=o.bind(null,t,n,!0)}else t=i(),r=s.bind(null,t),a=function(){t.parentNode.removeChild(t)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function o(e,t,r,a){var i=r?'':a.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var n=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function s(e,t){var r=t.css,a=t.media,i=t.sourceMap;if(a&&e.setAttribute('media',a),h.ssrId&&e.setAttribute(y,t.id),i&&(r+='\n/*# sourceURL='+i.sources[0]+' */',r+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+' */'),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l='undefined'!=typeof document;if('undefined'!=typeof DEBUG&&DEBUG&&!l)throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');var d=r(45),p={},c=l&&(document.head||document.getElementsByTagName('head')[0]),u=null,m=0,g=!1,f=function(){},h=null,y='data-vue-ssr-id',x='undefined'!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,i){g=r,h=i||{};var n=d(e,t);return a(n),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o],s=p[i.id];s.refs--,r.push(s)}t?(n=d(e,t),a(n)):n=[];for(var o=0,s;o<r.length;o++)if(s=r[o],0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete p[s.id]}}};var v=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join('\n')}}()},function(e){e.exports=function(e,t){for(var r=[],a={},n=0;n<t.length;n++){var i=t[n],o=i[0],s=i[1],l=i[2],d=i[3],p={id:e+':'+n,css:s,media:l,sourceMap:d};a[o]?a[o].parts.push(p):r.push(a[o]={id:o,parts:[p]})}return r}},function(e){e.exports=function(e,t,r,a,i,n){var o=e=e||{},s=typeof e.default,l;('object'==s||'function'==s)&&(l=e,o=e.default);var d='function'==typeof o?o.options:o;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId=i);var p;if(n?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||'undefined'==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=p):a&&(p=a),p){var c=d.functional,u=c?d.render:d.beforeCreate;c?(d._injectStyles=p,d.render=function(e,t){return p.call(t),u(e,t)}):d.beforeCreate=u?[].concat(u,p):[p]}return{esModule:l,exports:o,options:d}}},function(e,t,r){'use strict';function a(){i.a.call(this),this.type='Scene',this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,'undefined'!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe',{detail:this}))}r.d(t,'a',function(){return a});var i=r(7);a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isScene:!0,copy:function(e,t){return i.a.prototype.copy.call(this,e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.fog&&(this.fog=e.fog.clone()),null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){var t=i.a.prototype.toJSON.call(this,e);return null!==this.background&&(t.object.background=this.background.toJSON(e)),null!==this.fog&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(e,r,a){'use strict';function i(e,t,r,a){this._x=e||0,this._y=t||0,this._z=r||0,this._order=a||i.DefaultOrder}a.d(r,'a',function(){return i});var n=a(13),o=a(0),s=a(4),d=a(3),p=new s.a,c=new n.a;i.RotationOrders=['XYZ','YZX','ZXY','XZY','YXZ','ZYX'],i.DefaultOrder='XYZ',Object.defineProperties(i.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this._onChangeCallback()}}}),Object.assign(i.prototype,{isEuler:!0,set:function(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._order=a||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this},setFromRotationMatrix:function(e,r,a){var i=d.a.clamp,n=e.elements,o=n[0],s=n[4],p=n[8],c=n[1],u=n[5],m=n[9],g=n[2],h=n[6],y=n[10];return r=r||this._order,'XYZ'===r?(this._y=t(i(p,-1,1)),.9999999>f(p)?(this._x=l(-m,y),this._z=l(-s,o)):(this._x=l(h,u),this._z=0)):'YXZ'===r?(this._x=t(-i(m,-1,1)),.9999999>f(m)?(this._y=l(p,y),this._z=l(c,u)):(this._y=l(-g,o),this._z=0)):'ZXY'===r?(this._x=t(i(h,-1,1)),.9999999>f(h)?(this._y=l(-g,y),this._z=l(-s,u)):(this._y=0,this._z=l(c,o))):'ZYX'===r?(this._y=t(-i(g,-1,1)),.9999999>f(g)?(this._x=l(h,y),this._z=l(c,o)):(this._x=0,this._z=l(-s,u))):'YZX'===r?(this._z=t(i(c,-1,1)),.9999999>f(c)?(this._x=l(-m,u),this._y=l(-g,o)):(this._x=0,this._y=l(p,y))):'XZY'===r?(this._z=t(-i(s,-1,1)),.9999999>f(s)?(this._x=l(h,u),this._y=l(p,o)):(this._x=l(-m,y),this._y=0)):console.warn('THREE.Euler: .setFromRotationMatrix() given unsupported order: '+r),this._order=r,!1!==a&&this._onChangeCallback(),this},setFromQuaternion:function(e,t,r){return p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p,t,r)},setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(e){return c.setFromEuler(this),this.setFromQuaternion(c,e)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new o.a(this._x,this._y,this._z)},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}})},function(e,t,r){'use strict';function a(){this.mask=1}r.d(t,'a',function(){return a}),Object.assign(a.prototype,{set:function(e){this.mask=0|1<<e},enable:function(e){this.mask|=0|1<<e},enableAll:function(){this.mask=-1},toggle:function(e){this.mask^=0|1<<e},disable:function(e){this.mask&=~(0|1<<e)},disableAll:function(){this.mask=0},test:function(e){return 0!=(this.mask&e.mask)}})},function(e,t,r){'use strict';function a(e){function t(){return null===Be?Ze:1}function r(){st=new R.a(nt),lt=new w.a(nt,st,e),!1===lt.isWebGL2&&(st.get('WEBGL_depth_texture'),st.get('OES_texture_float'),st.get('OES_texture_half_float'),st.get('OES_texture_half_float_linear'),st.get('OES_standard_derivatives'),st.get('OES_element_index_uint'),st.get('ANGLE_instanced_arrays')),st.get('OES_texture_float_linear'),Mt=new H.a(nt,st,lt),dt=new O.a(nt,st,lt),dt.scissor(je.copy(Qe).multiplyScalar(Ze).floor()),dt.viewport(We.copy(Je).multiplyScalar(Ze).floor()),pt=new C.a(nt),ct=new z.a,ut=new G.a(nt,st,dt,ct,lt,Mt,pt),mt=new b.a(nt),gt=new L.a(nt,mt,pt),ft=new D.a(nt,gt,mt,pt),_t=new I.a(nt),ht=new N.a(De,st,lt),yt=new U.a,xt=new F.a,vt=new E.a(De,dt,ft,Ae),bt=new S.a(nt,st,pt,lt),Tt=new P.a(nt,st,pt,lt),pt.programs=ht.programs,De.capabilities=lt,De.extensions=st,De.properties=ct,De.renderLists=yt,De.state=dt,De.info=pt}function a(e){e.preventDefault(),console.log('THREE.WebGLRenderer: Context Lost.'),Ne=!0}function X(){console.log('THREE.WebGLRenderer: Context Restored.'),Ne=!1,r()}function q(e){var t=e.target;t.removeEventListener('dispose',q),Y(t)}function Y(e){Z(e),ct.remove(e)}function Z(e){var t=ct.get(e).program;e.program=void 0,t!==void 0&&ht.releaseProgram(t)}function J(e,t){e.render(function(e){De.renderBufferImmediate(e,t)})}function Q(e,t,r,a){if(!(!1===lt.isWebGL2&&(e.isInstancedMesh||t.isInstancedBufferGeometry)&&null===st.get('ANGLE_instanced_arrays'))){dt.initAttributes();var i=t.attributes,n=a.getAttributes(),o=r.defaultAttributeValues;for(var s in n){var l=n[s];if(0<=l){var d=i[s];if(void 0!==d){var p=d.normalized,c=d.itemSize,u=mt.get(d);if(void 0===u)continue;var m=u.buffer,g=u.type,f=u.bytesPerElement;if(d.isInterleavedBufferAttribute){var h=d.data,y=h.stride,x=d.offset;h&&h.isInstancedInterleavedBuffer?(dt.enableAttributeAndDivisor(l,h.meshPerAttribute),void 0===t.maxInstancedCount&&(t.maxInstancedCount=h.meshPerAttribute*h.count)):dt.enableAttribute(l),nt.bindBuffer(nt.ARRAY_BUFFER,m),nt.vertexAttribPointer(l,c,g,p,y*f,x*f)}else d.isInstancedBufferAttribute?(dt.enableAttributeAndDivisor(l,d.meshPerAttribute),void 0===t.maxInstancedCount&&(t.maxInstancedCount=d.meshPerAttribute*d.count)):dt.enableAttribute(l),nt.bindBuffer(nt.ARRAY_BUFFER,m),nt.vertexAttribPointer(l,c,g,p,0,0)}else if('instanceMatrix'==s){var u=mt.get(e.instanceMatrix);if(void 0===u)continue;var m=u.buffer,g=u.type;dt.enableAttributeAndDivisor(l+0,1),dt.enableAttributeAndDivisor(l+1,1),dt.enableAttributeAndDivisor(l+2,1),dt.enableAttributeAndDivisor(l+3,1),nt.bindBuffer(nt.ARRAY_BUFFER,m),nt.vertexAttribPointer(l+0,4,g,!1,64,0),nt.vertexAttribPointer(l+1,4,g,!1,64,16),nt.vertexAttribPointer(l+2,4,g,!1,64,32),nt.vertexAttribPointer(l+3,4,g,!1,64,48)}else if(void 0!==o){var v=o[s];if(void 0!==v)switch(v.length){case 2:nt.vertexAttrib2fv(l,v);break;case 3:nt.vertexAttrib3fv(l,v);break;case 4:nt.vertexAttrib4fv(l,v);break;default:nt.vertexAttrib1fv(l,v);}}}}dt.disableUnusedAttributes()}}function K(e){Et.isPresenting()||At&&At(e)}function $(e,t,r,a){if(!1!==e.visible){var n=e.layers.test(t.layers);if(n)if(e.isGroup)r=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)Ie.pushLight(e),e.castShadow&&Ie.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||$e.intersectsSprite(e)){a&&it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(at);var o=ft.update(e),s=e.material;s.visible&&Ce.push(e,o,s,r,it.z,null)}}else if(e.isImmediateRenderObject)a&&it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(at),Ce.push(e,null,e.material,r,it.z,null);else if((e.isMesh||e.isLine||e.isPoints)&&(e.isSkinnedMesh&&e.skeleton.frame!==pt.render.frame&&(e.skeleton.update(),e.skeleton.frame=pt.render.frame),!e.frustumCulled||$e.intersectsObject(e))){a&&it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(at);var o=ft.update(e),s=e.material;if(Array.isArray(s))for(var d=o.groups,p=0,i=d.length;p<i;p++){var l=d[p],c=s[l.materialIndex];c&&c.visible&&Ce.push(e,o,c,r,it.z,l)}else s.visible&&Ce.push(e,o,s,r,it.z,null)}for(var u=e.children,p=0,i=u.length;p<i;p++)$(u[p],t,r,a)}}function ee(e,t,r,a){for(var n=0,i=e.length;n<i;n++){var o=e[n],s=o.object,l=o.geometry,d=a===void 0?o.material:a,p=o.group;if(!r.isArrayCamera)ke=null,te(s,t,r,l,d,p);else if(ke=r,Et.enabled&&St.isAvailable())te(s,t,r,l,d,p);else for(var c=r.cameras,u=0,m=c.length,g;u<m;u++)g=c[u],s.layers.test(g.layers)&&(dt.viewport(We.copy(g.viewport)),Ie.setupLights(g),te(s,t,g,l,d,p))}}function te(e,t,r,a,i,n){if(e.onBeforeRender(De,t,r,a,i,n),Ie=xt.get(t,ke||r),e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),e.isImmediateRenderObject){dt.setMaterial(i);var o=ae(r,t.fog,i,e);Ve.geometry=null,Ve.program=null,Ve.wireframe=!1,J(e,o)}else De.renderBufferDirect(r,t.fog,a,i,e,n);e.onAfterRender(De,t,r,a,i,n),Ie=xt.get(t,ke||r)}function re(e,t,r){var a=ct.get(e),n=Ie.state.lights,o=Ie.state.shadowsArray,s=n.state.version,l=ht.getParameters(e,n.state,o,t,et.numPlanes,et.numIntersection,r),d=ht.getProgramCacheKey(e,l),p=a.program,c=!0;if(p===void 0)e.addEventListener('dispose',q);else if(p.cacheKey!==d)Z(e);else if(a.lightsStateVersion!==s)a.lightsStateVersion=s,c=!1;else{if(l.shaderID!==void 0)return;c=!1}if(c){if(l.shaderID){var u=m.a[l.shaderID];a.shader={name:e.type,uniforms:Object(f.a)(u.uniforms),vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}}else a.shader={name:e.type,uniforms:e.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader};e.onBeforeCompile(a.shader,De),d=ht.getProgramCacheKey(e,l),p=ht.acquireProgram(e,a.shader,l,d),a.program=p,e.program=p}var g=p.getAttributes();if(e.morphTargets){e.numSupportedMorphTargets=0;for(var h=0;h<De.maxMorphTargets;h++)0<=g['morphTarget'+h]&&e.numSupportedMorphTargets++}if(e.morphNormals){e.numSupportedMorphNormals=0;for(var h=0;h<De.maxMorphNormals;h++)0<=g['morphNormal'+h]&&e.numSupportedMorphNormals++}var i=a.shader.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(a.numClippingPlanes=et.numPlanes,a.numIntersection=et.numIntersection,i.clippingPlanes=et.uniform),a.fog=t,a.needsLights=_e(e),a.lightsStateVersion=s,a.needsLights&&(i.ambientLightColor.value=n.state.ambient,i.lightProbe.value=n.state.probe,i.directionalLights.value=n.state.directional,i.spotLights.value=n.state.spot,i.rectAreaLights.value=n.state.rectArea,i.pointLights.value=n.state.point,i.hemisphereLights.value=n.state.hemi,i.directionalShadowMap.value=n.state.directionalShadowMap,i.directionalShadowMatrix.value=n.state.directionalShadowMatrix,i.spotShadowMap.value=n.state.spotShadowMap,i.spotShadowMatrix.value=n.state.spotShadowMatrix,i.pointShadowMap.value=n.state.pointShadowMap,i.pointShadowMatrix.value=n.state.pointShadowMatrix);var y=a.program.getUniforms(),x=V.a.seqWithValue(y.seq,i);a.uniformsList=x}function ae(e,t,r,a){ut.resetTextureUnits();var o=ct.get(r),c=Ie.state.lights;if(tt&&(rt||e!==He)){var u=e===He&&r.id===Ge;et.setState(r.clippingPlanes,r.clipIntersection,r.clipShadows,e,o,u)}r.version===o.__version&&(void 0===o.program?r.needsUpdate=!0:r.fog&&o.fog!==t?r.needsUpdate=!0:o.needsLights&&o.lightsStateVersion!==c.state.version?r.needsUpdate=!0:void 0!==o.numClippingPlanes&&(o.numClippingPlanes!==et.numPlanes||o.numIntersection!==et.numIntersection)&&(r.needsUpdate=!0)),r.version!==o.__version&&(re(r,t,a),o.__version=r.version);var m=!1,f=!1,h=!1,y=o.program,x=y.getUniforms(),v=o.shader.uniforms;if(dt.useProgram(y.program)&&(m=!0,f=!0,h=!0),r.id!==Ge&&(Ge=r.id,f=!0),m||He!==e){if(0<y.numMultiviewViews?St.updateCameraProjectionMatricesUniform(e,x):x.setValue(nt,'projectionMatrix',e.projectionMatrix),lt.logarithmicDepthBuffer&&x.setValue(nt,'logDepthBufFC',2/(s(e.far+1)/i)),He!==e&&(He=e,f=!0,h=!0),r.isShaderMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.envMap){var _=x.map.cameraPosition;void 0!==_&&_.setValue(nt,it.setFromMatrixPosition(e.matrixWorld))}(r.isMeshPhongMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&x.setValue(nt,'isOrthographic',!0===e.isOrthographicCamera),(r.isMeshPhongMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial||r.skinning)&&(0<y.numMultiviewViews?St.updateCameraViewMatricesUniform(e,x):x.setValue(nt,'viewMatrix',e.matrixWorldInverse))}if(r.skinning){x.setOptional(nt,a,'bindMatrix'),x.setOptional(nt,a,'bindMatrixInverse');var b=a.skeleton;if(b){var M=b.bones;if(lt.floatVertexTextures){if(void 0===b.boneTexture){var E=p(4*M.length);E=l.a.ceilPowerOfTwo(E),E=T(E,4);var S=new Float32Array(4*(E*E));S.set(b.boneMatrices);var w=new d.a(S,E,E,n._19,n.D);b.boneMatrices=S,b.boneTexture=w,b.boneTextureSize=E}x.setValue(nt,'boneTexture',b.boneTexture,ut),x.setValue(nt,'boneTextureSize',b.boneTextureSize)}else x.setOptional(nt,b,'boneMatrices')}}return(f||o.receiveShadow!==a.receiveShadow)&&(o.receiveShadow=a.receiveShadow,x.setValue(nt,'receiveShadow',a.receiveShadow)),f&&(x.setValue(nt,'toneMappingExposure',De.toneMappingExposure),x.setValue(nt,'toneMappingWhitePoint',De.toneMappingWhitePoint),o.needsLights&&ve(v,h),t&&r.fog&&de(v,t),r.isMeshBasicMaterial?ie(v,r):r.isMeshLambertMaterial?(ie(v,r),pe(v,r)):r.isMeshPhongMaterial?(ie(v,r),r.isMeshToonMaterial?ue(v,r):ce(v,r)):r.isMeshStandardMaterial?(ie(v,r),r.isMeshPhysicalMaterial?ge(v,r):me(v,r)):r.isMeshMatcapMaterial?(ie(v,r),fe(v,r)):r.isMeshDepthMaterial?(ie(v,r),he(v,r)):r.isMeshDistanceMaterial?(ie(v,r),ye(v,r)):r.isMeshNormalMaterial?(ie(v,r),xe(v,r)):r.isLineBasicMaterial?(ne(v,r),r.isLineDashedMaterial&&oe(v,r)):r.isPointsMaterial?se(v,r):r.isSpriteMaterial?le(v,r):r.isShadowMaterial&&(v.color.value.copy(r.color),v.opacity.value=r.opacity),void 0!==v.ltc_1&&(v.ltc_1.value=g.a.LTC_1),void 0!==v.ltc_2&&(v.ltc_2.value=g.a.LTC_2),V.a.upload(nt,o.uniformsList,v,ut),r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)),r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(V.a.upload(nt,o.uniformsList,v,ut),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&x.setValue(nt,'center',a.center),0<y.numMultiviewViews?St.updateObjectMatricesUniforms(a,e,x):(x.setValue(nt,'modelViewMatrix',a.modelViewMatrix),x.setValue(nt,'normalMatrix',a.normalMatrix)),x.setValue(nt,'modelMatrix',a.matrixWorld),y}function ie(e,t){e.opacity.value=t.opacity,t.color&&e.diffuse.value.copy(t.color),t.emissive&&e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity),t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap),t.specularMap&&(e.specularMap.value=t.specularMap),t.envMap&&(e.envMap.value=t.envMap,e.flipEnvMap.value=t.envMap.isCubeTexture?-1:1,e.reflectivity.value=t.reflectivity,e.refractionRatio.value=t.refractionRatio,e.maxMipLevel.value=ct.get(t.envMap).__maxMipLevel),t.lightMap&&(e.lightMap.value=t.lightMap,e.lightMapIntensity.value=t.lightMapIntensity),t.aoMap&&(e.aoMap.value=t.aoMap,e.aoMapIntensity.value=t.aoMapIntensity);var r;t.map?r=t.map:t.specularMap?r=t.specularMap:t.displacementMap?r=t.displacementMap:t.normalMap?r=t.normalMap:t.bumpMap?r=t.bumpMap:t.roughnessMap?r=t.roughnessMap:t.metalnessMap?r=t.metalnessMap:t.alphaMap?r=t.alphaMap:t.emissiveMap&&(r=t.emissiveMap),r!==void 0&&(r.isWebGLRenderTarget&&(r=r.texture),!0===r.matrixAutoUpdate&&r.updateMatrix(),e.uvTransform.value.copy(r.matrix))}function ne(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity}function oe(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function se(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*Ze,e.scale.value=.5*Ye,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);var r;t.map?r=t.map:t.alphaMap&&(r=t.alphaMap),r!==void 0&&(!0===r.matrixAutoUpdate&&r.updateMatrix(),e.uvTransform.value.copy(r.matrix))}function le(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);var r;t.map?r=t.map:t.alphaMap&&(r=t.alphaMap),r!==void 0&&(!0===r.matrixAutoUpdate&&r.updateMatrix(),e.uvTransform.value.copy(r.matrix))}function de(e,t){e.fogColor.value.copy(t.color),t.isFog?(e.fogNear.value=t.near,e.fogFar.value=t.far):t.isFogExp2&&(e.fogDensity.value=t.density)}function pe(e,t){t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap)}function ce(e,t){e.specular.value.copy(t.specular),e.shininess.value=T(t.shininess,1e-4),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===n.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===n.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function ue(e,t){ce(e,t),t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function me(e,t){e.roughness.value=t.roughness,e.metalness.value=t.metalness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap),t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===n.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===n.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function ge(e,t){me(e,t),e.reflectivity.value=t.reflectivity,e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.sheen&&e.sheen.value.copy(t.sheen),t.clearcoatNormalMap&&(e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),e.clearcoatNormalMap.value=t.clearcoatNormalMap,t.side===n.h&&e.clearcoatNormalScale.value.negate()),e.transparency.value=t.transparency}function fe(e,t){t.matcap&&(e.matcap.value=t.matcap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===n.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===n.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function he(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function ye(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),e.referencePosition.value.copy(t.referencePosition),e.nearDistance.value=t.nearDistance,e.farDistance.value=t.farDistance}function xe(e,t){t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===n.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===n.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function ve(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.pointLights.needsUpdate=t,e.spotLights.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function _e(e){return e.isMeshLambertMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}e=e||{};var be=e.canvas===void 0?document.createElementNS('http://www.w3.org/1999/xhtml','canvas'):e.canvas,Te=e.context===void 0?null:e.context,Me=e.alpha!==void 0&&e.alpha,Ee=!(e.depth!==void 0)||e.depth,Se=!(e.stencil!==void 0)||e.stencil,we=e.antialias!==void 0&&e.antialias,Ae=!(e.premultipliedAlpha!==void 0)||e.premultipliedAlpha,Re=e.preserveDrawingBuffer!==void 0&&e.preserveDrawingBuffer,Le=e.powerPreference===void 0?'default':e.powerPreference,Pe=e.failIfMajorPerformanceCaveat!==void 0&&e.failIfMajorPerformanceCaveat,Ce=null,Ie=null;this.domElement=be,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=n.R,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var De=this,Ne=!1,ze=null,Ue=0,Fe=0,Be=null,Oe=null,Ge=-1,Ve={geometry:null,program:null,wireframe:!1},He=null,ke=null,We=new x.a,je=new x.a,Xe=null,qe=be.width,Ye=be.height,Ze=1,Je=new x.a(0,0,qe,Ye),Qe=new x.a(0,0,qe,Ye),Ke=!1,$e=new c.a,et=new A.a,tt=!1,rt=!1,at=new u.a,it=new y.a,nt;try{var ot={alpha:Me,depth:Ee,stencil:Se,antialias:we,premultipliedAlpha:Ae,preserveDrawingBuffer:Re,powerPreference:Le,failIfMajorPerformanceCaveat:Pe,xrCompatible:!0};if(be.addEventListener('webglcontextlost',a,!1),be.addEventListener('webglcontextrestored',X,!1),nt=Te||be.getContext('webgl',ot)||be.getContext('experimental-webgl',ot),null===nt)if(null!==be.getContext('webgl'))throw new Error('Error creating WebGL context with your selected attributes.');else throw new Error('Error creating WebGL context.');void 0===nt.getShaderPrecisionFormat&&(nt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error('THREE.WebGLRenderer: '+e.message),e}var st,lt,dt,pt,ct,ut,mt,gt,ft,ht,yt,xt,vt,_t,bt,Tt,Mt;r();var Et='undefined'!=typeof navigator&&'xr'in navigator?new j.a(De,nt):new W.a(De);this.vr=Et;var St=new k.a(De,nt),wt=new B.a(De,ft,lt.maxTextureSize);this.shadowMap=wt,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){var e=st.get('WEBGL_lose_context');e&&e.loseContext()},this.forceContextRestore=function(){var e=st.get('WEBGL_lose_context');e&&e.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(e){void 0===e||(Ze=e,this.setSize(qe,Ye,!1))},this.getSize=function(e){return void 0===e&&(console.warn('WebGLRenderer: .getsize() now requires a Vector2 as an argument'),e=new h.a),e.set(qe,Ye)},this.setSize=function(e,t,r){return Et.isPresenting()?void console.warn('THREE.WebGLRenderer: Can\'t change size while VR device is presenting.'):void(qe=e,Ye=t,be.width=_(e*Ze),be.height=_(t*Ze),!1!==r&&(be.style.width=e+'px',be.style.height=t+'px'),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return void 0===e&&(console.warn('WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'),e=new h.a),e.set(qe*Ze,Ye*Ze).floor()},this.setDrawingBufferSize=function(e,t,r){qe=e,Ye=t,Ze=r,be.width=_(e*r),be.height=_(t*r),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return void 0===e&&(console.warn('WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'),e=new x.a),e.copy(We)},this.getViewport=function(e){return e.copy(Je)},this.setViewport=function(e,t,r,a){e.isVector4?Je.set(e.x,e.y,e.z,e.w):Je.set(e,t,r,a),dt.viewport(We.copy(Je).multiplyScalar(Ze).floor())},this.getScissor=function(e){return e.copy(Qe)},this.setScissor=function(e,t,r,a){e.isVector4?Qe.set(e.x,e.y,e.z,e.w):Qe.set(e,t,r,a),dt.scissor(je.copy(Qe).multiplyScalar(Ze).floor())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(e){dt.setScissorTest(Ke=e)},this.getClearColor=function(){return vt.getClearColor()},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(e,t,r){var a=0;(e===void 0||e)&&(a|=nt.COLOR_BUFFER_BIT),(t===void 0||t)&&(a|=nt.DEPTH_BUFFER_BIT),(r===void 0||r)&&(a|=nt.STENCIL_BUFFER_BIT),nt.clear(a)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){be.removeEventListener('webglcontextlost',a,!1),be.removeEventListener('webglcontextrestored',X,!1),yt.dispose(),xt.dispose(),ct.dispose(),ft.dispose(),Et.dispose(),Rt.stop()},this.renderBufferImmediate=function(e,t){dt.initAttributes();var r=ct.get(e);e.hasPositions&&!r.position&&(r.position=nt.createBuffer()),e.hasNormals&&!r.normal&&(r.normal=nt.createBuffer()),e.hasUvs&&!r.uv&&(r.uv=nt.createBuffer()),e.hasColors&&!r.color&&(r.color=nt.createBuffer());var a=t.getAttributes();e.hasPositions&&(nt.bindBuffer(nt.ARRAY_BUFFER,r.position),nt.bufferData(nt.ARRAY_BUFFER,e.positionArray,nt.DYNAMIC_DRAW),dt.enableAttribute(a.position),nt.vertexAttribPointer(a.position,3,nt.FLOAT,!1,0,0)),e.hasNormals&&(nt.bindBuffer(nt.ARRAY_BUFFER,r.normal),nt.bufferData(nt.ARRAY_BUFFER,e.normalArray,nt.DYNAMIC_DRAW),dt.enableAttribute(a.normal),nt.vertexAttribPointer(a.normal,3,nt.FLOAT,!1,0,0)),e.hasUvs&&(nt.bindBuffer(nt.ARRAY_BUFFER,r.uv),nt.bufferData(nt.ARRAY_BUFFER,e.uvArray,nt.DYNAMIC_DRAW),dt.enableAttribute(a.uv),nt.vertexAttribPointer(a.uv,2,nt.FLOAT,!1,0,0)),e.hasColors&&(nt.bindBuffer(nt.ARRAY_BUFFER,r.color),nt.bufferData(nt.ARRAY_BUFFER,e.colorArray,nt.DYNAMIC_DRAW),dt.enableAttribute(a.color),nt.vertexAttribPointer(a.color,3,nt.FLOAT,!1,0,0)),dt.disableUnusedAttributes(),nt.drawArrays(nt.TRIANGLES,0,e.count),e.count=0},this.renderBufferDirect=function(e,r,a,i,o,s){var l=o.isMesh&&0>o.matrixWorld.determinant();dt.setMaterial(i,l);var d=ae(e,r,i,o),p=!1;(Ve.geometry!==a.id||Ve.program!==d.id||Ve.wireframe!==(!0===i.wireframe))&&(Ve.geometry=a.id,Ve.program=d.id,Ve.wireframe=!0===i.wireframe,p=!0),o.morphTargetInfluences&&(_t.update(o,a,i,d),p=!0);var c=a.index,u=a.attributes.position;if((null===c||0!==c.count)&&void 0!==u&&0!==u.count){var m=1;!0===i.wireframe&&(c=gt.getWireframeAttribute(a),m=2);var g=bt,f;null!==c&&(f=mt.get(c),g=Tt,g.setIndex(f)),p&&(Q(o,a,i,d),null!==c&&nt.bindBuffer(nt.ELEMENT_ARRAY_BUFFER,f.buffer));var h=Infinity;null===c?void 0!==u&&(h=u.count):h=c.count;var y=a.drawRange.start*m,x=a.drawRange.count*m,v=null===s?0:s.start*m,_=null===s?Infinity:s.count*m,b=T(y,v),E=M(h,y+x,v+_)-1,S=T(0,E-b+1);if(0!==S){if(o.isMesh){if(!0===i.wireframe)dt.setLineWidth(i.wireframeLinewidth*t()),g.setMode(nt.LINES);else switch(o.drawMode){case n._63:g.setMode(nt.TRIANGLES);break;case n._62:g.setMode(nt.TRIANGLE_STRIP);break;case n._61:g.setMode(nt.TRIANGLE_FAN);}}else if(o.isLine){var w=i.linewidth;void 0===w&&(w=1),dt.setLineWidth(w*t()),o.isLineSegments?g.setMode(nt.LINES):o.isLineLoop?g.setMode(nt.LINE_LOOP):g.setMode(nt.LINE_STRIP)}else o.isPoints?g.setMode(nt.POINTS):o.isSprite&&g.setMode(nt.TRIANGLES);o.isInstancedMesh?g.renderInstances(a,b,S,o.count):a.isInstancedBufferGeometry?g.renderInstances(a,b,S,a.maxInstancedCount):g.render(b,S)}}},this.compile=function(e,t){Ie=xt.get(e,t),Ie.init(),e.traverse(function(e){e.isLight&&(Ie.pushLight(e),e.castShadow&&Ie.pushShadow(e))}),Ie.setupLights(t),e.traverse(function(t){if(t.material)if(Array.isArray(t.material))for(var r=0;r<t.material.length;r++)re(t.material[r],e.fog,t);else re(t.material,e.fog,t)})};var At=null,Rt=new v.a;Rt.setAnimationLoop(K),'undefined'!=typeof window&&Rt.setContext(window),this.setAnimationLoop=function(e){At=e,Et.setAnimationLoop(e),Rt.start()},this.render=function(e,t){var r,a;if(void 0!==arguments[2]&&(console.warn('THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.'),r=arguments[2]),void 0!==arguments[3]&&(console.warn('THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.'),a=arguments[3]),!(t&&t.isCamera))return void console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');if(!Ne){Ve.geometry=null,Ve.program=null,Ve.wireframe=!1,Ge=-1,He=null,!0===e.autoUpdate&&e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),Et.enabled&&Et.isPresenting()&&(t=Et.getCamera(t)),Ie=xt.get(e,t),Ie.init(),e.onBeforeRender(De,e,t,r||Be),at.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),$e.setFromMatrix(at),rt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,rt,t),Ce=yt.get(e,t),Ce.init(),$(e,t,0,De.sortObjects),!0===De.sortObjects&&Ce.sort(),tt&&et.beginShadows();var i=Ie.state.shadowsArray;wt.render(i,e,t),Ie.setupLights(t),tt&&et.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==r&&this.setRenderTarget(r),Et.enabled&&St.isAvailable()&&St.attachCamera(t),vt.render(Ce,e,t,a);var n=Ce.opaque,o=Ce.transparent;if(e.overrideMaterial){var s=e.overrideMaterial;n.length&&ee(n,e,t,s),o.length&&ee(o,e,t,s)}else n.length&&ee(n,e,t),o.length&&ee(o,e,t);e.onAfterRender(De,e,t),null!==Be&&(ut.updateRenderTargetMipmap(Be),ut.updateMultisampleRenderTarget(Be)),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1),Et.enabled&&(St.isAvailable()&&St.detachCamera(t),Et.submitFrame()),Ce=null,Ie=null}},this.setFramebuffer=function(e){ze!==e&&null===Be&&nt.bindFramebuffer(nt.FRAMEBUFFER,e),ze=e},this.getActiveCubeFace=function(){return Ue},this.getActiveMipmapLevel=function(){return Fe},this.getRenderTarget=function(){return Be},this.setRenderTarget=function(e,t,r){Be=e,Ue=t,Fe=r,e&&void 0===ct.get(e).__webglFramebuffer&&ut.setupRenderTarget(e);var a=ze,i=!1;if(e){var n=ct.get(e).__webglFramebuffer;e.isWebGLRenderTargetCube?(a=n[t||0],i=!0):e.isWebGLMultisampleRenderTarget?a=ct.get(e).__webglMultisampledFramebuffer:a=n,We.copy(e.viewport),je.copy(e.scissor),Xe=e.scissorTest}else We.copy(Je).multiplyScalar(Ze).floor(),je.copy(Qe).multiplyScalar(Ze).floor(),Xe=Ke;if(Oe!==a&&(nt.bindFramebuffer(nt.FRAMEBUFFER,a),Oe=a),dt.viewport(We),dt.scissor(je),dt.setScissorTest(Xe),i){var o=ct.get(e.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+(t||0),o.__webglTexture,r||0)}},this.readRenderTargetPixels=function(e,t,r,a,i,o,s){if(!(e&&e.isWebGLRenderTarget))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');var l=ct.get(e).__webglFramebuffer;if(e.isWebGLRenderTargetCube&&void 0!==s&&(l=l[s]),l){var d=!1;l!==Oe&&(nt.bindFramebuffer(nt.FRAMEBUFFER,l),d=!0);try{var p=e.texture,c=p.format,u=p.type;if(c!==n._19&&Mt.convert(c)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.');if(u!==n._66&&Mt.convert(u)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(u===n.D&&(lt.isWebGL2||st.get('OES_texture_float')||st.get('WEBGL_color_buffer_float')))&&!(u===n.I&&(lt.isWebGL2?st.get('EXT_color_buffer_float'):st.get('EXT_color_buffer_half_float'))))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');nt.checkFramebufferStatus(nt.FRAMEBUFFER)===nt.FRAMEBUFFER_COMPLETE?0<=t&&t<=e.width-a&&0<=r&&r<=e.height-i&&nt.readPixels(t,r,a,i,Mt.convert(c),Mt.convert(u),o):console.error('THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.')}finally{d&&nt.bindFramebuffer(nt.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(e,t,r){r===void 0&&(r=0);var a=o(2,-r),i=_(t.image.width*a),n=_(t.image.height*a),s=Mt.convert(t.format);ut.setTexture2D(t,0),nt.copyTexImage2D(nt.TEXTURE_2D,r,s,e.x,e.y,i,n,0),dt.unbindTexture()},this.copyTextureToTexture=function(e,t,r,a){var i=t.image.width,n=t.image.height,o=Mt.convert(r.format),s=Mt.convert(r.type);ut.setTexture2D(r,0),t.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,a||0,e.x,e.y,i,n,o,s,t.image.data):nt.texSubImage2D(nt.TEXTURE_2D,a||0,e.x,e.y,o,s,t.image),dt.unbindTexture()},this.initTexture=function(e){ut.setTexture2D(e,0),dt.unbindTexture()},'undefined'!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe',{detail:this}))}r.d(t,'a',function(){return a});var n=r(1),l=r(3),d=r(51),c=r(24),u=r(4),m=r(25),g=r(27),f=r(15),h=r(2),y=r(0),x=r(10),v=r(19),b=r(176),E=r(177),S=r(185),w=r(186),A=r(187),R=r(188),L=r(189),P=r(190),C=r(191),I=r(192),D=r(193),N=r(194),z=r(200),U=r(201),F=r(202),B=r(204),O=r(209),G=r(210),V=r(32),H=r(211),k=r(212),W=r(214),j=r(215)},function(e,t,r){'use strict';function a(e,t,r,a,o,s,l,d,p,c,u,m){i.a.call(this,null,s,l,d,p,c,a,o,u,m),this.image={data:e||null,width:t||1,height:r||1},this.magFilter=p===void 0?n._1:p,this.minFilter=c===void 0?n._1:c,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}r.d(t,'a',function(){return a});var i=r(6),n=r(1);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isDataTexture=!0},function(e,t,r){'use strict';r.d(t,'a',function(){return a});var a={getDataURL:function(e){var t;if('undefined'==typeof HTMLCanvasElement)return e.src;if(e instanceof HTMLCanvasElement)t=e;else{void 0===i&&(i=document.createElementNS('http://www.w3.org/1999/xhtml','canvas')),i.width=e.width,i.height=e.height;var r=i.getContext('2d');e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=i}return 2048<t.width||2048<t.height?t.toDataURL('image/jpeg',.6):t.toDataURL('image/png')}},i},function(e,t){'use strict';t.a=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`},function(e,t){'use strict';t.a=`
vec3 transformed = vec3( position );
`},function(e,t){'use strict';t.a=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`},function(e,t){'use strict';t.a=`

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	return vec2( -1.04, 1.04 ) * a004 + r.zw;

}

float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

#if defined ( PHYSICALLY_CORRECT_LIGHTS )

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	// this is intended to be used on spot and point lights who are represented as luminous intensity
	// but who must be converted to luminous irradiance for surface lighting calculation
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

#else

	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

#endif

}

vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotLH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );

	return ( 1.0 - specularColor ) * fresnel + specularColor;

} // validated

vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {

	// See F_Schlick
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;

	return Fr * fresnel + F0;

}


// Microfacet Models for Refraction through Rough Surfaces - equation (34)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {

	// geometry term (normalized) = G(l)⋅G(v) / 4(n⋅l)(n⋅v)
	// also see #12151

	float a2 = pow2( alpha );

	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );

	return 1.0 / ( gl * gv );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	// dotNL and dotNV are explicitly swapped. This is not a mistake.
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( incidentLight.direction + viewDir );

	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( G * D );

} // validated

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );

	return specularColor * brdf.x + brdf.y;

} // validated

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;

	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}

float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L94
float D_Charlie(float roughness, float NoH) {
	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125); // 2^(-14/2), so sin2h^2 > 0 in fp16
	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L136
float V_Neubelt(float NoV, float NoL) {
	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}

vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {

	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;

	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );

	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );

}

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 );

		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;

	}

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;

		}

		if ( clipped ) discard;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0

	#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
		varying vec3 vViewPosition;
	#endif

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	varying vec3 vViewPosition;
#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
`},function(e,t){'use strict';t.a=`
#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	float distance = dot( planeNormal, point - pointOnPlane );

	return - distance * planeNormal + point;

}

float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return sign( dot( point - pointOnPlane, planeNormal ) );

}

vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

  return m[ 2 ][ 3 ] == - 1.0;

}
`},function(e,t){'use strict';t.a=`
#ifdef ENVMAP_TYPE_CUBE_UV

#define cubeUV_textureSize (1024.0)

int getFaceFromDirection(vec3 direction) {
	vec3 absDirection = abs(direction);
	int face = -1;
	if( absDirection.x > absDirection.z ) {
		if(absDirection.x > absDirection.y )
			face = direction.x > 0.0 ? 0 : 3;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	else {
		if(absDirection.z > absDirection.y )
			face = direction.z > 0.0 ? 2 : 5;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	return face;
}
#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))

vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
	float dxRoughness = dFdx(roughness);
	float dyRoughness = dFdy(roughness);
	vec3 dx = dFdx( vec * scale * dxRoughness );
	vec3 dy = dFdy( vec * scale * dyRoughness );
	float d = max( dot( dx, dx ), dot( dy, dy ) );
	// Clamp the value to the max mip level counts. hard coded to 6 mips
	d = clamp(d, 1.0, cubeUV_rangeClamp);
	float mipLevel = 0.5 * log2(d);
	return vec2(floor(mipLevel), fract(mipLevel));
}

#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)

vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
	float a = 16.0 * cubeUV_rcpTextureSize;

	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
	// float powScale = exp2(roughnessLevel + mipLevel);
	float powScale = exp2_packed.x * exp2_packed.y;
	// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);
	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
	// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);
	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;

	bool bRes = mipLevel == 0.0;
	scale =  bRes && (scale < a) ? a : scale;

	vec3 r;
	vec2 offset;
	int face = getFaceFromDirection(direction);

	float rcpPowScale = 1.0 / powScale;

	if( face == 0) {
		r = vec3(direction.x, -direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 1) {
		r = vec3(direction.y, direction.x, direction.z);
		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 2) {
		r = vec3(direction.z, direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 3) {
		r = vec3(direction.x, direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else if( face == 4) {
		r = vec3(direction.y, direction.x, -direction.z);
		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else {
		r = vec3(direction.z, -direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	r = normalize(r);
	float texelOffset = 0.5 * cubeUV_rcpTextureSize;
	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
	vec2 base = offset + vec2( texelOffset );
	return base + s * ( scale - 2.0 * texelOffset );
}

#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)

vec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {
	float roughnessVal = roughness* cubeUV_maxLods3;
	float r1 = floor(roughnessVal);
	float r2 = r1 + 1.0;
	float t = fract(roughnessVal);
	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
	float s = mipInfo.y;
	float level0 = mipInfo.x;
	float level1 = level0 + 1.0;
	level1 = level1 > 5.0 ? 5.0 : level1;

	// round to nearest mipmap if we are not interpolating.
	level0 += min( floor( s + 0.5 ), 5.0 );

	// Tri linear interpolation.
	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));

	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));

	vec4 result = mix(color10, color20, t);

	return vec4(result.rgb, 1.0);
}

#endif
`},function(e,t){'use strict';t.a=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	transformedNormal = mat3( instanceMatrix ) * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = normalMatrix * objectTangent;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`},function(e,t){'use strict';t.a=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`},function(e,t){'use strict';t.a=`
// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}

vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}

vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}

vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = min( floor( D ) / 255.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}

// Inverse M matrix, for decoding
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`},function(e,t){'use strict';t.a=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;
		
		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		}  else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_EQUIREC )

		vec2 sampleUV;

		reflectVec = normalize( reflectVec );

		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

		vec4 envColor = texture2D( envMap, sampleUV );

	#elif defined( ENVMAP_TYPE_SPHERE )

		reflectVec = normalize( reflectVec );

		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );

		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	envColor = envMapTexelToLinear( envColor );

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) { 

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	fogDepth = -mvPosition.z;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef TOON

	uniform sampler2D gradientMap;

	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

		// dotNL will be from -1.0 to 1.0
		float dotNL = dot( normal, lightDirection );
		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

		#ifdef USE_GRADIENTMAP

			return texture2D( gradientMap, coord ).rgb;

		#else

			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

		#endif


	}

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_LIGHTMAP

	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`},function(e,t){'use strict';t.a=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );

#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif
	}

#endif

/*
#if NUM_RECT_AREA_LIGHTS > 0

	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		// TODO (abelnation): implement

	}

#endif
*/

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );

		#endif

	}

#endif
`},function(e,t){'use strict';t.a=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {

	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI;

	#endif

	return irradiance;

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
		float shadowCameraNear;
		float shadowCameraFar;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );

		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );

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

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {

		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );

		if ( angleCos > spotLight.coneCos ) {

			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );

			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;

		} else {

			directLight.color = vec3( 0.0 );
			directLight.visible = false;

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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {

		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			irradiance *= PI;

		#endif

		return irradiance;

	}

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

			#else

				// force the bias high to get the last LOD level as it is the most blurred.
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );

		#else

			vec4 envMapColor = vec4( 0.0 );

		#endif

		return PI * envMapColor.rgb * envMapIntensity;

	}

	// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {

		float maxMIPLevelScalar = float( maxMIPLevel );

		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

		  vec3 reflectVec = reflect( -viewDir, normal );

		  // Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

		#else

		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );

		#elif defined( ENVMAP_TYPE_EQUIREC )

			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_SPHERE )

			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`},function(e,t){'use strict';t.a=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`},function(e,t){'use strict';t.a=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct BlinnPhongMaterial {

	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	#ifdef TOON

		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	#else

		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
		vec3 irradiance = dotNL * directLight.color;

	#endif

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`},function(e,t){'use strict';t.a=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );

#ifdef REFLECTIVITY

	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );

#endif

#ifdef CLEARCOAT

	material.clearcoat = saturate( clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );

#endif
#ifdef USE_SHEEN

	material.sheenColor = sheen;

#endif
`},function(e,t){'use strict';t.a=`
struct PhysicalMaterial {

	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;

#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif

};

#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04

// Clear coat directional hemishperical reflectance (this approximation should be improved)
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {

	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	#ifdef CLEARCOAT

		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = ccDotNL * directLight.color;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			ccIrradiance *= PI; // punctual light

		#endif

		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

	#else

		float clearcoatDHR = 0.0;

	#endif

	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif

	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef CLEARCOAT

		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

	#else

		float clearcoatDHR = 0.0;

	#endif

	float clearcoatInv = 1.0 - clearcoatDHR;

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`},function(e,t){'use strict';t.a=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointDirectLightIrradiance( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotDirectLightIrradiance( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		}

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`},function(e,t){'use strict';t.a=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );

	#ifdef CLEARCOAT

		clearcoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`},function(e,t){'use strict';t.a=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifndef USE_MORPHNORMALS

	uniform float morphTargetInfluences[ 8 ];

	#else

	uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];

	#ifndef USE_MORPHNORMALS

	transformed += morphTarget4 * morphTargetInfluences[ 4 ];
	transformed += morphTarget5 * morphTargetInfluences[ 5 ];
	transformed += morphTarget6 * morphTargetInfluences[ 6 ];
	transformed += morphTarget7 * morphTargetInfluences[ 7 ];

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef FLAT_SHADED

	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`},function(e,t){'use strict';t.a=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Per-Pixel Tangent Space Normal Mapping
	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );

		mat3 tsn = mat3( S, T, N );

		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		return normalize( tsn * mapN );

	}

#endif
`},function(e,t){'use strict';t.a=`
#ifdef CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`},function(e,t){'use strict';t.a=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpack2HalfToRGBA( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`},function(e,t){'use strict';t.a=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`},function(e,t){'use strict';t.a=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`},function(e,t){'use strict';t.a=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`},function(e,t){'use strict';t.a=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpack2HalfToRGBA( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {

		const vec2 offset = vec2( 0.0, 1.0 );

		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;

		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );

		vec2 f = fract( uv * size + 0.5 );

		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );

		return c;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;

			shadow = (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`},function(e,t){'use strict';t.a=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLights[ i ];
		shadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLights[ i ];
		shadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLights[ i ];
		shadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`},function(e,t){'use strict';t.a=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`},function(e,t){'use strict';t.a=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicgames.com/archives/75
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {

	// John Hable's filmic operator from Uncharted 2 video game
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );

}

// source: http://filmicgames.com/archives/75
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/
vec3 ACESFilmicToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );

}
`},function(e,t){'use strict';t.a=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = uv2;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`},function(e,t){'use strict';t.a=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`},function(e,t){'use strict';t.a=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`},function(e,t){'use strict';t.a=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = mapTexelToLinear( texColor );
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`},function(e,t){'use strict';t.a=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`},function(e,t){'use strict';t.a=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );

	#endif

}
`},function(e,t){'use strict';t.a=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

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

}
`},function(e,t){'use strict';t.a=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`},function(e,t){'use strict';t.a=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

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

}
`},function(e,t){'use strict';t.a=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV;

	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`},function(e,t){'use strict';t.a=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>

	vLineDistance = scale * lineDistance;

	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>

	#ifdef USE_ENVMAP

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`},function(e,t){'use strict';t.a=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`},function(e,t){'use strict';t.a=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
#define MATCAP

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

		vNormal = normalize( transformedNormal );

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`},function(e,t){'use strict';t.a=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`},function(e,t){'use strict';t.a=`
#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

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

}
`},function(e,t){'use strict';t.a=`
#define STANDARD

#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSPARENCY
	uniform float transparency;
#endif

#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif

#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	// this is a stub for the transparency model
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`},function(e,t){'use strict';t.a=`
#define STANDARD

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

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

}
`},function(e,t){'use strict';t.a=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

}
`},function(e,t){'use strict';t.a=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
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

}
`},function(e,t){'use strict';t.a=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

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

}
`},function(e,t,r){'use strict';function a(e){function t(t,r){var a=t.array,i=t.usage,n=e.createBuffer();e.bindBuffer(r,n),e.bufferData(r,a,i),t.onUploadCallback();var o=e.FLOAT;return a instanceof Float32Array?o=e.FLOAT:a instanceof Float64Array?console.warn('THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.'):a instanceof Uint16Array?o=e.UNSIGNED_SHORT:a instanceof Int16Array?o=e.SHORT:a instanceof Uint32Array?o=e.UNSIGNED_INT:a instanceof Int32Array?o=e.INT:a instanceof Int8Array?o=e.BYTE:a instanceof Uint8Array&&(o=e.UNSIGNED_BYTE),{buffer:n,type:o,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version}}function r(t,r,a){var i=r.array,n=r.updateRange;e.bindBuffer(a,t),-1===n.count?e.bufferSubData(a,0,i):(e.bufferSubData(a,n.offset*i.BYTES_PER_ELEMENT,i.subarray(n.offset,n.offset+n.count)),n.count=-1)}var a=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),a.get(e)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);var r=a.get(t);r&&(e.deleteBuffer(r.buffer),a.delete(t))},update:function(e,i){e.isInterleavedBufferAttribute&&(e=e.data);var n=a.get(e);n===void 0?a.set(e,t(e,i)):n.version<e.version&&(r(n.buffer,e,i),n.version=e.version)}}}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e,t,r,a){function u(t,a,l,u){var _=a.background,b=e.vr,T=b.getSession&&b.getSession();if(T&&'additive'===T.environmentBlendMode&&(_=null),null===_?(m(g,f),h=null,y=0):_&&_.isColor&&(m(_,1),u=!0,h=null,y=0),(e.autoClear||u)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.isWebGLRenderTargetCube)){void 0===v&&(v=new d.a(new n.a(1,1,1),new s.a({type:'BackgroundCubeMaterial',uniforms:Object(c.a)(p.a.cube.uniforms),vertexShader:p.a.cube.vertexShader,fragmentShader:p.a.cube.fragmentShader,side:i.h,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute('normal'),v.geometry.deleteAttribute('uv'),v.onBeforeRender=function(e,t,r){this.matrixWorld.copyPosition(r.matrixWorld)},Object.defineProperty(v.material,'map',{get:function(){return this.uniforms.tCube.value}}),r.update(v));var M=_.isWebGLRenderTargetCube?_.texture:_;v.material.uniforms.tCube.value=M,v.material.uniforms.tFlip.value=_.isWebGLRenderTargetCube?1:-1,(h!==_||y!==M.version)&&(v.material.needsUpdate=!0,h=_,y=M.version),t.unshift(v,v.geometry,v.material,0,0,null)}else _&&_.isTexture&&(void 0===x&&(x=new d.a(new o.a(2,2),new s.a({type:'BackgroundMaterial',uniforms:Object(c.a)(p.a.background.uniforms),vertexShader:p.a.background.vertexShader,fragmentShader:p.a.background.fragmentShader,side:i.E,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute('normal'),Object.defineProperty(x.material,'map',{get:function(){return this.uniforms.t2D.value}}),r.update(x)),x.material.uniforms.t2D.value=_,!0===_.matrixAutoUpdate&&_.updateMatrix(),x.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||y!==_.version)&&(x.material.needsUpdate=!0,h=_,y=_.version),t.unshift(x,x.geometry,x.material,0,0,null))}function m(e,r){t.buffers.color.setClear(e.r,e.g,e.b,r,a)}var g=new l.a(0),f=0,h=null,y=0,x,v;return{getClearColor:function(){return g},setClearColor:function(e,t){g.set(e),f=t===void 0?1:t,m(g,f)},getClearAlpha:function(){return f},setClearAlpha:function(e){f=e,m(g,f)},render:u}}r.d(t,'a',function(){return a});var i=r(1),n=r(178),o=r(31),s=r(20),l=r(9),d=r(21),p=r(25),c=r(15)},function(e,t,r){'use strict';r.d(t,'a',function(){return l});var a=r(28),i=r(11),n=r(12),o=r(0);class s extends a.a{constructor(e,t,r,a,i,n){super(),this.type='BoxGeometry',this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:i,depthSegments:n},this.fromBufferGeometry(new l(e,t,r,a,i,n)),this.mergeVertices()}}class l extends i.a{constructor(e,t,r,a,i,s){function l(e,t,r,i,n,s,l,h,v,_,T){var M=v+1,E=0,S=0,w=new o.a,A,R;for(R=0;R<_+1;R++){var L=R*(l/_)-l/2;for(A=0;A<M;A++){var y=A*(s/v)-s/2;w[e]=y*i,w[t]=L*n,w[r]=h/2,d.push(w.x,w.y,w.z),w[e]=0,w[t]=0,w[r]=0<h?1:-1,c.push(w.x,w.y,w.z),m.push(A/v),m.push(1-R/_),E+=1}}for(R=0;R<_;R++)for(A=0;A<v;A++){var x=g+A+M*R,a=g+A+M*(R+1),b=g+(A+1)+M*(R+1),P=g+(A+1)+M*R;u.push(x,a,P),u.push(a,b,P),S+=6}p.addGroup(f,S,T),f+=S,g+=E}super(),this.type='BoxBufferGeometry',this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:i,depthSegments:s};var p=this;e=e||1,t=t||1,r=r||1,a=_(a)||1,i=_(i)||1,s=_(s)||1;var u=[],d=[],c=[],m=[],g=0,f=0;l('z','y','x',-1,-1,r,t,e,s,i,0),l('z','y','x',1,-1,r,t,-e,s,i,1),l('x','z','y',1,1,e,r,t,a,s,2),l('x','z','y',1,-1,e,r,-t,a,s,3),l('x','y','z',1,-1,e,t,r,a,i,4),l('x','y','z',-1,-1,e,t,-r,a,i,5),this.setIndex(u),this.setAttribute('position',new n.b(d,3)),this.setAttribute('normal',new n.b(c,3)),this.setAttribute('uv',new n.b(m,2))}}},function(e,t,r){'use strict';function a(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}r.d(t,'a',function(){return a});var n=r(2);Object.assign(a.prototype,{computeGroups:function(e){for(var t=[],r=void 0,a=e.faces,n=0,i,o;n<a.length;n++)o=a[n],o.materialIndex!==r&&(r=o.materialIndex,void 0!=i&&(i.count=3*n-i.start,t.push(i)),i={start:3*n,materialIndex:r});i!==void 0&&(i.count=3*n-i.start,t.push(i)),this.groups=t},fromGeometry:function(e){var t=e.faces,r=e.vertices,a=e.faceVertexUvs,o=a[0]&&0<a[0].length,s=a[1]&&0<a[1].length,l=e.morphTargets,d=l.length,p;if(0<d){p=[];for(var c=0;c<d;c++)p[c]={name:l[c].name,data:[]};this.morphTargets.position=p}var i=e.morphNormals,u=i.length,m;if(0<u){m=[];for(var c=0;c<u;c++)m[c]={name:i[c].name,data:[]};this.morphTargets.normal=m}var g=e.skinIndices,f=e.skinWeights,h=g.length===r.length,y=f.length===r.length;0<r.length&&0===t.length&&console.error('THREE.DirectGeometry: Faceless geometries are not supported.');for(var c=0,x;c<t.length;c++){x=t[c],this.vertices.push(r[x.a],r[x.b],r[x.c]);var v=x.vertexNormals;if(3===v.length)this.normals.push(v[0],v[1],v[2]);else{var _=x.normal;this.normals.push(_,_,_)}var b=x.vertexColors;if(3===b.length)this.colors.push(b[0],b[1],b[2]);else{var T=x.color;this.colors.push(T,T,T)}if(!0===o){var M=a[0][c];void 0===M?(console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ',c),this.uvs.push(new n.a,new n.a,new n.a)):this.uvs.push(M[0],M[1],M[2])}if(!0===s){var M=a[1][c];void 0===M?(console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ',c),this.uvs2.push(new n.a,new n.a,new n.a)):this.uvs2.push(M[0],M[1],M[2])}for(var E=0,S;E<d;E++)S=l[E].vertices,p[E].data.push(S[x.a],S[x.b],S[x.c]);for(var E=0,w;E<u;E++)w=i[E].vertexNormals[c],m[E].data.push(w.a,w.b,w.c);h&&this.skinIndices.push(g[x.a],g[x.b],g[x.c]),y&&this.skinWeights.push(f[x.a],f[x.b],f[x.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),this}})},function(e,t){'use strict';t.a=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`},function(e,t){'use strict';t.a=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`},function(e,t,r){'use strict';function a(e,t){this.origin=e===void 0?new i.a:e,this.direction=t===void 0?new i.a(0,0,-1):t}r.d(t,'a',function(){return a});var i=r(0),n=new i.a,o=new i.a,s=new i.a,l=new i.a,d=new i.a,u=new i.a,m=new i.a;Object.assign(a.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return void 0===t&&(console.warn('THREE.Ray: .at() target is now required'),t=new i.a),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(e){return this.origin.copy(this.at(e,n)),this},closestPointToPoint:function(e,t){t===void 0&&(console.warn('THREE.Ray: .closestPointToPoint() target is now required'),t=new i.a),t.subVectors(e,this.origin);var r=t.dot(this.direction);return 0>r?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)},distanceToPoint:function(e){return p(this.distanceSqToPoint(e))},distanceSqToPoint:function(e){var t=n.subVectors(e,this.origin).dot(this.direction);return 0>t?this.origin.distanceToSquared(e):(n.copy(this.direction).multiplyScalar(t).add(this.origin),n.distanceToSquared(e))},distanceSqToSegment:function(e,t,r,a){o.copy(e).add(t).multiplyScalar(.5),s.copy(t).sub(e).normalize(),l.copy(this.origin).sub(o);var i=.5*e.distanceTo(t),n=-this.direction.dot(s),d=l.dot(this.direction),p=-l.dot(s),u=l.lengthSq(),c=f(1-n*n),m,g,h,y;if(!(0<c))g=0<n?-i:i,m=T(0,-(n*g+d)),h=-m*m+g*(g+2*p)+u;else if(m=n*p-d,g=n*d-p,y=i*c,!(0<=m))g<=-y?(m=T(0,-(-n*i+d)),g=0<m?-i:M(T(-i,-p),i),h=-m*m+g*(g+2*p)+u):g<=y?(m=0,g=M(T(-i,-p),i),h=g*(g+2*p)+u):(m=T(0,-(n*i+d)),g=0<m?i:M(T(-i,-p),i),h=-m*m+g*(g+2*p)+u);else if(!(g>=-y))g=-i,m=T(0,-(n*g+d)),h=-m*m+g*(g+2*p)+u;else if(g<=y){var x=1/c;m*=x,g*=x,h=m*(m+n*g+2*d)+g*(n*m+g+2*p)+u}else g=i,m=T(0,-(n*g+d)),h=-m*m+g*(g+2*p)+u;return r&&r.copy(this.direction).multiplyScalar(m).add(this.origin),a&&a.copy(s).multiplyScalar(g).add(o),h},intersectSphere:function(e,t){n.subVectors(e.center,this.origin);var r=n.dot(this.direction),a=n.dot(n)-r*r,i=e.radius*e.radius;if(a>i)return null;var o=p(i-a),s=r-o,l=r+o;return 0>s&&0>l?null:0>s?this.at(l,t):this.at(s,t)},intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){var r=e.normal.dot(this.direction);if(0===r)return 0===e.distanceToPoint(this.origin)?0:null;var a=-(this.origin.dot(e.normal)+e.constant)/r;return 0<=a?a:null},intersectPlane:function(e,r){var a=this.distanceToPlane(e);return null===a?null:this.at(a,r)},intersectsPlane:function(e){var t=e.distanceToPoint(this.origin);if(0===t)return!0;var r=e.normal.dot(this.direction);return!!(0>r*t)},intersectBox:function(e,t){var r=1/this.direction.x,a=1/this.direction.y,i=1/this.direction.z,n=this.origin,o,s,l,d,p,c;return(0<=r?(o=(e.min.x-n.x)*r,s=(e.max.x-n.x)*r):(o=(e.max.x-n.x)*r,s=(e.min.x-n.x)*r),0<=a?(l=(e.min.y-n.y)*a,d=(e.max.y-n.y)*a):(l=(e.max.y-n.y)*a,d=(e.min.y-n.y)*a),o>d||l>s)?null:((l>o||o!=o)&&(o=l),(d<s||s!=s)&&(s=d),0<=i?(p=(e.min.z-n.z)*i,c=(e.max.z-n.z)*i):(p=(e.max.z-n.z)*i,c=(e.min.z-n.z)*i),o>c||p>s)?null:((p>o||o!=o)&&(o=p),(c<s||s!=s)&&(s=c),0>s?null:this.at(0<=o?o:s,t))},intersectsBox:function(e){return null!==this.intersectBox(e,n)},intersectTriangle:function(e,t,r,a,i){d.subVectors(t,e),u.subVectors(r,e),m.crossVectors(d,u);var n=this.direction.dot(m),o;if(0<n){if(a)return null;o=1}else if(0>n)o=-1,n=-n;else return null;l.subVectors(this.origin,e);var s=o*this.direction.dot(u.crossVectors(l,u));if(0>s)return null;var p=o*this.direction.dot(d.cross(l));if(0>p)return null;if(s+p>n)return null;var c=-o*l.dot(m);return 0>c?null:this.at(c/n,i)},applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}})},function(e,t,r){'use strict';function i(e,t,r){this.a=e===void 0?new n.a:e,this.b=t===void 0?new n.a:t,this.c=r===void 0?new n.a:r}r.d(t,'a',function(){return i});var n=r(0),a=r(18),o=new n.a,s=new n.a,l=new n.a,d=new n.a,u=new n.a,m=new n.a,g=new n.a,f=new n.a,h=new n.a,y=new n.a;Object.assign(i,{getNormal:function(e,t,r,a){a===void 0&&(console.warn('THREE.Triangle: .getNormal() target is now required'),a=new n.a),a.subVectors(r,t),o.subVectors(e,t),a.cross(o);var i=a.lengthSq();return 0<i?a.multiplyScalar(1/p(i)):a.set(0,0,0)},getBarycoord:function(e,t,r,a,i){o.subVectors(a,t),s.subVectors(r,t),l.subVectors(e,t);var d=o.dot(o),p=o.dot(s),c=o.dot(l),m=s.dot(s),g=s.dot(l),f=d*m-p*p;if(void 0===i&&(console.warn('THREE.Triangle: .getBarycoord() target is now required'),i=new n.a),0==f)return i.set(-2,-1,-1);var h=1/f,y=(m*c-p*g)*h,u=(d*g-p*c)*h;return i.set(1-y-u,u,y)},containsPoint:function(e,t,r,a){return i.getBarycoord(e,t,r,a,d),0<=d.x&&0<=d.y&&1>=d.x+d.y},getUV:function(e,t,r,a,i,n,o,s){return this.getBarycoord(e,t,r,a,d),s.set(0,0),s.addScaledVector(i,d.x),s.addScaledVector(n,d.y),s.addScaledVector(o,d.z),s},isFrontFacing:function(e,t,r,a){return o.subVectors(r,t),s.subVectors(e,t),!!(0>o.cross(s).dot(a))}}),Object.assign(i.prototype,{set:function(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this},setFromPointsAndIndices:function(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){return o.subVectors(this.c,this.b),s.subVectors(this.a,this.b),.5*o.cross(s).length()},getMidpoint:function(e){return void 0===e&&(console.warn('THREE.Triangle: .getMidpoint() target is now required'),e=new n.a),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return i.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return void 0===e&&(console.warn('THREE.Triangle: .getPlane() target is now required'),e=new a.a),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)},getUV:function(e,t,r,a,n){return i.getUV(e,this.a,this.b,this.c,t,r,a,n)},containsPoint:function(e){return i.containsPoint(e,this.a,this.b,this.c)},isFrontFacing:function(e){return i.isFrontFacing(this.a,this.b,this.c,e)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(e,t){void 0===t&&(console.warn('THREE.Triangle: .closestPointToPoint() target is now required'),t=new n.a);var r=this.a,a=this.b,i=this.c,o,s;u.subVectors(a,r),m.subVectors(i,r),f.subVectors(e,r);var l=u.dot(f),d=m.dot(f);if(0>=l&&0>=d)return t.copy(r);h.subVectors(e,a);var p=u.dot(h),c=m.dot(h);if(0<=p&&c<=p)return t.copy(a);var x=l*c-p*d;if(0>=x&&0<=l&&0>=p)return o=l/(l-p),t.copy(r).addScaledVector(u,o);y.subVectors(e,i);var v=u.dot(y),_=m.dot(y);if(0<=_&&v<=_)return t.copy(i);var b=v*d-l*_;if(0>=b&&0<=d&&0>=_)return s=d/(d-_),t.copy(r).addScaledVector(m,s);var T=p*_-v*c;if(0>=T&&0<=c-p&&0<=v-_)return g.subVectors(i,a),s=(c-p)/(c-p+(v-_)),t.copy(a).addScaledVector(g,s);var M=1/(T+b+x);return o=b*M,s=x*M,t.copy(r).addScaledVector(u,o).addScaledVector(m,s)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}})},function(e,t,r){'use strict';function a(e){i.a.call(this),this.type='MeshBasicMaterial',this.color=new o.a(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=n._0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap='round',this.wireframeLinejoin='round',this.skinning=!1,this.morphTargets=!1,this.setValues(e)}r.d(t,'a',function(){return a});var i=r(16),n=r(1),o=r(9);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isMeshBasicMaterial=!0,a.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}},function(e,t,r){'use strict';function a(e,t,r,a){function i(t,a){e.drawArrays(s,t,a),r.update(a,s)}function n(a,i,n,l){if(0!==l){var d,p;if(o)d=e,p='drawArraysInstanced';else if(d=t.get('ANGLE_instanced_arrays'),p='drawArraysInstancedANGLE',null===d)return void console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');d[p](s,i,n,l),r.update(n,s,l)}}var o=a.isWebGL2,s;this.setMode=function(e){s=e},this.render=i,this.renderInstances=n}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e,t,r){function a(){if(void 0!==l)return l;var r=t.get('EXT_texture_filter_anisotropic');return l=null===r?0:e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT),l}function i(t){if('highp'===t){if(0<e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision&&0<e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision)return'highp';t='mediump'}return'mediump'===t&&0<e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision&&0<e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision?'mediump':'lowp'}var n='undefined'!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||'undefined'!=typeof WebGL2ComputeRenderingContext&&e instanceof WebGL2ComputeRenderingContext,o=r.precision===void 0?'highp':r.precision,s=i(o),l;s!==o&&(console.warn('THREE.WebGLRenderer:',o,'not supported, using',s,'instead.'),o=s);var d=!0===r.logarithmicDepthBuffer,p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),c=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),h=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=0<c,v=n||!!t.get('OES_texture_float'),_=n?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:n,getMaxAnisotropy:a,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:c,maxTextureSize:u,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:x&&v,maxSamples:_}}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(){function e(){c.value!==a&&(c.value=a,c.needsUpdate=0<o),r.numPlanes=o,r.numIntersection=0}function t(e,t,a,n){var o=null===e?0:e.length,s=null;if(0!==o){if(s=c.value,!0!==n||null===s){var l=a+4*o,u=t.matrixWorldInverse;p.getNormalMatrix(u),(null===s||s.length<l)&&(s=new Float32Array(l));for(var m=0,i=a;m!==o;++m,i+=4)d.copy(e[m]).applyMatrix4(u,p),d.normal.toArray(s,i),s[i+3]=d.constant}c.value=s,c.needsUpdate=!0}return r.numPlanes=o,s}var r=this,a=null,o=0,s=!1,l=!1,d=new n.a,p=new i.a,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,r,i){var n=0!==e.length||r||0!==o||s;return s=r,a=t(e,i,0),o=e.length,n},this.beginShadows=function(){l=!0,t(null)},this.endShadows=function(){l=!1,e()},this.setState=function(r,n,d,p,u,m){if(!s||null===r||0===r.length||l&&!d)l?t(null):e();else{var g=l?0:o,f=4*g,h=u.clippingState||null;c.value=h,h=t(r,p,f,m);for(var y=0;y!==f;++y)h[y]=a[y];u.clippingState=h,this.numIntersection=n?this.numPlanes:0,this.numPlanes+=g}}}r.d(t,'a',function(){return a});var i=r(5),n=r(18)},function(e,t,r){'use strict';function a(e){var t={};return{get:function(r){if(void 0!==t[r])return t[r];var a;return a='WEBGL_depth_texture'===r?e.getExtension('WEBGL_depth_texture')||e.getExtension('MOZ_WEBGL_depth_texture')||e.getExtension('WEBKIT_WEBGL_depth_texture'):'EXT_texture_filter_anisotropic'===r?e.getExtension('EXT_texture_filter_anisotropic')||e.getExtension('MOZ_EXT_texture_filter_anisotropic')||e.getExtension('WEBKIT_EXT_texture_filter_anisotropic'):'WEBGL_compressed_texture_s3tc'===r?e.getExtension('WEBGL_compressed_texture_s3tc')||e.getExtension('MOZ_WEBGL_compressed_texture_s3tc')||e.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'):'WEBGL_compressed_texture_pvrtc'===r?e.getExtension('WEBGL_compressed_texture_pvrtc')||e.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'):e.getExtension(r),null===a&&console.warn('THREE.WebGLRenderer: '+r+' extension not supported.'),t[r]=a,a}}}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e,t,r){function a(e){var i=e.target,n=l.get(i);for(var o in null!==n.index&&t.remove(n.index),n.attributes)t.remove(n.attributes[o]);i.removeEventListener('dispose',a),l.delete(i);var s=d.get(n);s&&(t.remove(s),d.delete(n)),r.memory.geometries--}function s(r){var s=[],p=r.index,u=r.attributes.position,m=0;if(null!==p){var g=p.array;m=p.version;for(var f=0,i=g.length;f<i;f+=3){var l=g[f+0],a=g[f+1],h=g[f+2];s.push(l,a,a,h,h,l)}}else{var g=u.array;m=u.version;for(var f=0,i=g.length/3-1;f<i;f+=3){var l=f+0,a=f+1,h=f+2;s.push(l,a,a,h,h,l)}}var c=new(65535<Object(o.a)(s)?n.d:n.c)(s,1);c.version=m,t.update(c,e.ELEMENT_ARRAY_BUFFER);var y=d.get(r);y&&t.remove(y),d.set(r,c)}var l=new WeakMap,d=new WeakMap;return{get:function(e,t){var n=l.get(t);return n?n:(t.addEventListener('dispose',a),t.isBufferGeometry?n=t:t.isGeometry&&(void 0===t._bufferGeometry&&(t._bufferGeometry=new i.a().setFromObject(e)),n=t._bufferGeometry),l.set(t,n),r.memory.geometries++,n)},update:function(r){var a=r.index,n=r.attributes;for(var o in null!==a&&t.update(a,e.ELEMENT_ARRAY_BUFFER),n)t.update(n[o],e.ARRAY_BUFFER);var s=r.morphAttributes;for(var o in s)for(var d=s[o],p=0,i=d.length;p<i;p++)t.update(d[p],e.ARRAY_BUFFER)},getWireframeAttribute:function(e){var t=d.get(e);if(t){var r=e.index;null!==r&&t.version<r.version&&s(e)}else s(e);return d.get(e)}}}r.d(t,'a',function(){return a});var n=r(12),i=r(11),o=r(30)},function(e,t,r){'use strict';function a(e,t,r,a){function i(t,a){e.drawElements(s,a,l,t*d),r.update(a,s)}function n(a,i,n,p){if(0!==p){var c,u;if(o)c=e,u='drawElementsInstanced';else if(c=t.get('ANGLE_instanced_arrays'),u='drawElementsInstancedANGLE',null===c)return void console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');c[u](s,n,l,i*d,p),r.update(n,s,p)}}var o=a.isWebGL2,s,l,d;this.setMode=function(e){s=e},this.setIndex=function(e){l=e.type,d=e.bytesPerElement},this.render=i,this.renderInstances=n}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e){var t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(r,a,i){switch(i=i||1,t.calls++,a){case e.TRIANGLES:t.triangles+=i*(r/3);break;case e.TRIANGLE_STRIP:case e.TRIANGLE_FAN:t.triangles+=i*(r-2);break;case e.LINES:t.lines+=i*(r/2);break;case e.LINE_STRIP:t.lines+=i*(r-1);break;case e.LINE_LOOP:t.lines+=i*r;break;case e.POINTS:t.points+=i*r;break;default:console.error('THREE.WebGLInfo: Unknown draw mode:',a);}}}}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e,t){return f(t[1])-f(e[1])}function i(e){var t={},r=new Float32Array(8);return{update:function(n,o,s,l){var d=n.morphTargetInfluences,p=d.length,c=t[o.id];if(c===void 0){c=[];for(var u=0;u<p;u++)c[u]=[u,0];t[o.id]=c}for(var i=s.morphTargets&&o.morphAttributes.position,m=s.morphNormals&&o.morphAttributes.normal,u=0,g;u<p;u++)g=c[u],0!==g[1]&&(i&&o.deleteAttribute('morphTarget'+u),m&&o.deleteAttribute('morphNormal'+u));for(var u=0,g;u<p;u++)g=c[u],g[0]=u,g[1]=d[u];c.sort(a);for(var f=0,u=0,g;8>u;u++){if(g=c[u],g){var h=g[0],y=g[1];if(y){i&&o.setAttribute('morphTarget'+u,i[h]),m&&o.setAttribute('morphNormal'+u,m[h]),r[u]=y,f+=y;continue}}r[u]=0}var x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,'morphTargetBaseInfluence',x),l.getUniforms().setValue(e,'morphTargetInfluences',r)}}}r.d(t,'a',function(){return i})},function(e,t,r){'use strict';function a(e,t,r,a){function i(i){var o=a.render.frame,s=i.geometry,l=t.get(i,s);return n[l.id]!==o&&(s.isGeometry&&l.updateFromObject(i),t.update(l),n[l.id]=o),i.isInstancedMesh&&r.update(i.instanceMatrix,e.ARRAY_BUFFER),l}var n={};return{update:i,dispose:function(){n={}}}}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e,t,r){function a(e){var t=e.skeleton,r=t.bones;if(p)return 1024;var a=_((u-20)/4),i=M(a,r.length);return i<r.length?(console.warn('THREE.WebGLRenderer: Skeleton has '+r.length+' bones. This GPU supports '+i+'.'),0):i}function o(e,t){var r;return e?e.isTexture?r=e.encoding:e.isWebGLRenderTarget&&(console.warn('THREE.WebGLPrograms.getTextureEncodingFromMap: don\'t use render targets as textures. Use their .texture property instead.'),r=e.texture.encoding):r=i.N,r===i.N&&t&&(r=i.F),r}var s=[],l=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.floatVertexTextures,c=r.precision,u=r.maxVertexUniforms,m=r.vertexTextures,g={MeshDepthMaterial:'depth',MeshDistanceMaterial:'distanceRGBA',MeshNormalMaterial:'normal',MeshBasicMaterial:'basic',MeshLambertMaterial:'lambert',MeshPhongMaterial:'phong',MeshToonMaterial:'phong',MeshStandardMaterial:'physical',MeshPhysicalMaterial:'physical',MeshMatcapMaterial:'matcap',LineBasicMaterial:'basic',LineDashedMaterial:'dashed',PointsMaterial:'points',ShadowMaterial:'shadow',SpriteMaterial:'sprite'},f=['precision','isWebGL2','supportsVertexTextures','outputEncoding','instancing','numMultiviewViews','map','mapEncoding','matcap','matcapEncoding','envMap','envMapMode','envMapEncoding','envMapCubeUV','lightMap','aoMap','emissiveMap','emissiveMapEncoding','bumpMap','normalMap','objectSpaceNormalMap','tangentSpaceNormalMap','clearcoatNormalMap','displacementMap','specularMap','roughnessMap','metalnessMap','gradientMap','alphaMap','combine','vertexColors','vertexTangents','vertexUvs','uvsVertexOnly','fog','useFog','fogExp2','flatShading','sizeAttenuation','logarithmicDepthBuffer','skinning','maxBones','useVertexTexture','morphTargets','morphNormals','maxMorphTargets','maxMorphNormals','premultipliedAlpha','numDirLights','numPointLights','numSpotLights','numHemiLights','numRectAreaLights','numDirLightShadows','numPointLightShadows','numSpotLightShadows','shadowMapEnabled','shadowMapType','toneMapping','physicallyCorrectLights','alphaTest','doubleSided','flipSided','numClippingPlanes','numClipIntersection','depthPacking','dithering','sheen'];this.getParameters=function(t,n,s,u,f,h,y){var x=g[t.type],v=y.isSkinnedMesh?a(y):0;null!==t.precision&&(c=r.getMaxPrecision(t.precision),c!==t.precision&&console.warn('THREE.WebGLProgram.getParameters:',t.precision,'not supported, using',c,'instead.'));var _=e.getRenderTarget(),b=_&&_.isWebGLMultiviewRenderTarget?_.numViews:0,T={isWebGL2:l,shaderID:x,precision:c,instancing:!0===y.isInstancedMesh,supportsVertexTextures:m,numMultiviewViews:b,outputEncoding:o(_?_.texture:null,e.gammaOutput),map:!!t.map,mapEncoding:o(t.map,e.gammaInput),matcap:!!t.matcap,matcapEncoding:o(t.matcap,e.gammaInput),envMap:!!t.envMap,envMapMode:t.envMap&&t.envMap.mapping,envMapEncoding:o(t.envMap,e.gammaInput),envMapCubeUV:!!t.envMap&&(t.envMap.mapping===i.o||t.envMap.mapping===i.p),lightMap:!!t.lightMap,aoMap:!!t.aoMap,emissiveMap:!!t.emissiveMap,emissiveMapEncoding:o(t.emissiveMap,e.gammaInput),bumpMap:!!t.bumpMap,normalMap:!!t.normalMap,objectSpaceNormalMap:t.normalMapType===i._10,tangentSpaceNormalMap:t.normalMapType===i._60,clearcoatNormalMap:!!t.clearcoatNormalMap,displacementMap:!!t.displacementMap,roughnessMap:!!t.roughnessMap,metalnessMap:!!t.metalnessMap,specularMap:!!t.specularMap,alphaMap:!!t.alphaMap,gradientMap:!!t.gradientMap,sheen:!!t.sheen,combine:t.combine,vertexTangents:t.normalMap&&t.vertexTangents,vertexColors:t.vertexColors,vertexUvs:!!t.map||!!t.bumpMap||!!t.normalMap||!!t.specularMap||!!t.alphaMap||!!t.emissiveMap||!!t.roughnessMap||!!t.metalnessMap||!!t.clearcoatNormalMap||!!t.displacementMap,uvsVertexOnly:!t.map&&!t.bumpMap&&!t.normalMap&&!t.specularMap&&!t.alphaMap&&!t.emissiveMap&&!t.roughnessMap&&!t.metalnessMap&&!t.clearcoatNormalMap&&!!t.displacementMap,fog:!!u,useFog:t.fog,fogExp2:u&&u.isFogExp2,flatShading:t.flatShading,sizeAttenuation:t.sizeAttenuation,logarithmicDepthBuffer:d,skinning:t.skinning&&0<v,maxBones:v,useVertexTexture:p,morphTargets:t.morphTargets,morphNormals:t.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:n.directional.length,numPointLights:n.point.length,numSpotLights:n.spot.length,numRectAreaLights:n.rectArea.length,numHemiLights:n.hemi.length,numDirLightShadows:n.directionalShadowMap.length,numPointLightShadows:n.pointShadowMap.length,numSpotLightShadows:n.spotShadowMap.length,numClippingPlanes:f,numClipIntersection:h,dithering:t.dithering,shadowMapEnabled:e.shadowMap.enabled&&0<s.length,shadowMapType:e.shadowMap.type,toneMapping:t.toneMapped?e.toneMapping:i._7,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:t.premultipliedAlpha,alphaTest:t.alphaTest,doubleSided:t.side===i.w,flipSided:t.side===i.h,depthPacking:t.depthPacking!==void 0&&t.depthPacking};return T},this.getProgramCacheKey=function(t,r){var a=[];if(r.shaderID?a.push(r.shaderID):(a.push(t.fragmentShader),a.push(t.vertexShader)),void 0!==t.defines)for(var n in t.defines)a.push(n),a.push(t.defines[n]);for(var o=0;o<f.length;o++)a.push(r[f[o]]);return a.push(t.onBeforeCompile.toString()),a.push(e.gammaOutput),a.push(e.gammaFactor),a.join()},this.acquireProgram=function(r,a,i,o){for(var l=0,d=s.length,p,c;l<d;l++)if(c=s[l],c.cacheKey===o){p=c,++p.usedTimes;break}return void 0===p&&(p=new n.a(e,t,o,r,a,i),s.push(p)),p},this.releaseProgram=function(e){if(0==--e.usedTimes){var t=s.indexOf(e);s[t]=s[s.length-1],s.pop(),e.destroy()}},this.programs=s}r.d(t,'a',function(){return a});var i=r(1),n=r(195)},function(e,t,r){'use strict';function a(e){for(var t=e.split('\n'),r=0;r<t.length;r++)t[r]=r+1+': '+t[r];return t.join('\n')}function i(e){switch(e){case R.N:return['Linear','( value )'];case R._75:return['sRGB','( value )'];case R._40:return['RGBE','( value )'];case R._43:return['RGBM','( value, 7.0 )'];case R._42:return['RGBM','( value, 16.0 )'];case R._39:return['RGBD','( value, 256.0 )'];case R.F:return['Gamma','( value, float( GAMMA_FACTOR ) )'];case R.S:return['LogLuv','( value )'];default:throw new Error('unsupported encoding: '+e);}}function n(e,t,r){var i=e.getShaderParameter(t,e.COMPILE_STATUS),n=e.getShaderInfoLog(t).trim();if(i&&''===n)return'';var o=e.getShaderSource(t);return'THREE.WebGLShader: gl.getShaderInfoLog() '+r+'\n'+n+a(o)}function o(e,t){var r=i(t);return'vec4 '+e+'( vec4 value ) { return '+r[0]+'ToLinear'+r[1]+'; }'}function s(e,t){var r=i(t);return'vec4 '+e+'( vec4 value ) { return LinearTo'+r[0]+r[1]+'; }'}function l(e,t){var r;switch(t){case R.R:r='Linear';break;case R._49:r='Reinhard';break;case R._65:r='Uncharted2';break;case R.k:r='OptimizedCineon';break;case R.a:r='ACESFilmic';break;default:throw new Error('unsupported toneMapping: '+t);}return'vec3 '+e+'( vec3 color ) { return '+r+'ToneMapping( color ); }'}function d(e,t,r){e=e||{};var a=[e.derivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading?'#extension GL_OES_standard_derivatives : enable':'',(e.fragDepth||t.logarithmicDepthBuffer)&&r.get('EXT_frag_depth')?'#extension GL_EXT_frag_depth : enable':'',e.drawBuffers&&r.get('WEBGL_draw_buffers')?'#extension GL_EXT_draw_buffers : require':'',(e.shaderTextureLOD||t.envMap)&&r.get('EXT_shader_texture_lod')?'#extension GL_EXT_shader_texture_lod : enable':''];return a.filter(u).join('\n')}function p(e){var t=[];for(var r in e){var a=e[r];!1===a||t.push('#define '+r+' '+a)}return t.join('\n')}function c(e,t){for(var r={},a=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),n=0;n<a;n++){var i=e.getActiveAttrib(t,n),o=i.name;r[o]=e.getAttribLocation(t,o)}return r}function u(e){return''!==e}function m(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function g(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function f(e){return e.replace(P,h)}function h(e,t){var r=A.a[t];if(r===void 0)throw new Error('Can not resolve #include <'+t+'>');return f(r)}function y(e){return e.replace(C,x)}function x(e,t,r,a){for(var n='',o=parseInt(t);o<parseInt(r);o++)n+=a.replace(/\[ i \]/g,'[ '+o+' ]').replace(/UNROLLED_LOOP_INDEX/g,o);return n}function v(e){var t='precision '+e.precision+' float;\nprecision '+e.precision+' int;';return'highp'===e.precision?t+='\n#define HIGH_PRECISION':'mediump'===e.precision?t+='\n#define MEDIUM_PRECISION':'lowp'===e.precision&&(t+='\n#define LOW_PRECISION'),t}function _(e){var t='SHADOWMAP_TYPE_BASIC';return e.shadowMapType===R._16?t='SHADOWMAP_TYPE_PCF':e.shadowMapType===R._17?t='SHADOWMAP_TYPE_PCF_SOFT':e.shadowMapType===R._73&&(t='SHADOWMAP_TYPE_VSM'),t}function b(e){var t='ENVMAP_TYPE_CUBE';if(e.envMap)switch(e.envMapMode){case R.m:case R.n:t='ENVMAP_TYPE_CUBE';break;case R.o:case R.p:t='ENVMAP_TYPE_CUBE_UV';break;case R.A:case R.B:t='ENVMAP_TYPE_EQUIREC';break;case R._53:t='ENVMAP_TYPE_SPHERE';}return t}function T(e){var t='ENVMAP_MODE_REFLECTION';if(e.envMap)switch(e.envMapMode){case R.n:case R.B:t='ENVMAP_MODE_REFRACTION';}return t}function M(e){var t='ENVMAP_BLENDING_MULTIPLY';if(e.envMap)switch(e.combine){case R._0:t='ENVMAP_BLENDING_MULTIPLY';break;case R.Y:t='ENVMAP_BLENDING_MIX';break;case R.c:t='ENVMAP_BLENDING_ADD';}return t}function E(e,t,r,a,i,h){var x=e.getContext(),E=a.defines,P=i.vertexShader,C=i.fragmentShader,I=_(h),D=b(h),N=T(h),z=M(h),U=0<e.gammaFactor?e.gammaFactor:1,F=h.isWebGL2?'':d(a.extensions,h,t),B=p(E),O=x.createProgram(),G=h.numMultiviewViews,V,H;if(a.isRawShaderMaterial?(V=[B].filter(u).join('\n'),0<V.length&&(V+='\n'),H=[F,B].filter(u).join('\n'),0<H.length&&(H+='\n')):(V=[v(h),'#define SHADER_NAME '+i.name,B,h.instancing?'#define USE_INSTANCING':'',h.supportsVertexTextures?'#define VERTEX_TEXTURES':'','#define GAMMA_FACTOR '+U,'#define MAX_BONES '+h.maxBones,h.useFog&&h.fog?'#define USE_FOG':'',h.useFog&&h.fogExp2?'#define FOG_EXP2':'',h.map?'#define USE_MAP':'',h.envMap?'#define USE_ENVMAP':'',h.envMap?'#define '+N:'',h.lightMap?'#define USE_LIGHTMAP':'',h.aoMap?'#define USE_AOMAP':'',h.emissiveMap?'#define USE_EMISSIVEMAP':'',h.bumpMap?'#define USE_BUMPMAP':'',h.normalMap?'#define USE_NORMALMAP':'',h.normalMap&&h.objectSpaceNormalMap?'#define OBJECTSPACE_NORMALMAP':'',h.normalMap&&h.tangentSpaceNormalMap?'#define TANGENTSPACE_NORMALMAP':'',h.clearcoatNormalMap?'#define USE_CLEARCOAT_NORMALMAP':'',h.displacementMap&&h.supportsVertexTextures?'#define USE_DISPLACEMENTMAP':'',h.specularMap?'#define USE_SPECULARMAP':'',h.roughnessMap?'#define USE_ROUGHNESSMAP':'',h.metalnessMap?'#define USE_METALNESSMAP':'',h.alphaMap?'#define USE_ALPHAMAP':'',h.vertexTangents?'#define USE_TANGENT':'',h.vertexColors?'#define USE_COLOR':'',h.vertexUvs?'#define USE_UV':'',h.uvsVertexOnly?'#define UVS_VERTEX_ONLY':'',h.flatShading?'#define FLAT_SHADED':'',h.skinning?'#define USE_SKINNING':'',h.useVertexTexture?'#define BONE_TEXTURE':'',h.morphTargets?'#define USE_MORPHTARGETS':'',h.morphNormals&&!1===h.flatShading?'#define USE_MORPHNORMALS':'',h.doubleSided?'#define DOUBLE_SIDED':'',h.flipSided?'#define FLIP_SIDED':'',h.shadowMapEnabled?'#define USE_SHADOWMAP':'',h.shadowMapEnabled?'#define '+I:'',h.sizeAttenuation?'#define USE_SIZEATTENUATION':'',h.logarithmicDepthBuffer?'#define USE_LOGDEPTHBUF':'',h.logarithmicDepthBuffer&&(h.isWebGL2||t.get('EXT_frag_depth'))?'#define USE_LOGDEPTHBUF_EXT':'','uniform mat4 modelMatrix;','uniform mat4 modelViewMatrix;','uniform mat4 projectionMatrix;','uniform mat4 viewMatrix;','uniform mat3 normalMatrix;','uniform vec3 cameraPosition;','uniform bool isOrthographic;','#ifdef USE_INSTANCING',' attribute mat4 instanceMatrix;','#endif','attribute vec3 position;','attribute vec3 normal;','attribute vec2 uv;','#ifdef USE_TANGENT','\tattribute vec4 tangent;','#endif','#ifdef USE_COLOR','\tattribute vec3 color;','#endif','#ifdef USE_MORPHTARGETS','\tattribute vec3 morphTarget0;','\tattribute vec3 morphTarget1;','\tattribute vec3 morphTarget2;','\tattribute vec3 morphTarget3;','\t#ifdef USE_MORPHNORMALS','\t\tattribute vec3 morphNormal0;','\t\tattribute vec3 morphNormal1;','\t\tattribute vec3 morphNormal2;','\t\tattribute vec3 morphNormal3;','\t#else','\t\tattribute vec3 morphTarget4;','\t\tattribute vec3 morphTarget5;','\t\tattribute vec3 morphTarget6;','\t\tattribute vec3 morphTarget7;','\t#endif','#endif','#ifdef USE_SKINNING','\tattribute vec4 skinIndex;','\tattribute vec4 skinWeight;','#endif','\n'].filter(u).join('\n'),H=[F,v(h),'#define SHADER_NAME '+i.name,B,h.alphaTest?'#define ALPHATEST '+h.alphaTest+(h.alphaTest%1?'':'.0'):'','#define GAMMA_FACTOR '+U,h.useFog&&h.fog?'#define USE_FOG':'',h.useFog&&h.fogExp2?'#define FOG_EXP2':'',h.map?'#define USE_MAP':'',h.matcap?'#define USE_MATCAP':'',h.envMap?'#define USE_ENVMAP':'',h.envMap?'#define '+D:'',h.envMap?'#define '+N:'',h.envMap?'#define '+z:'',h.lightMap?'#define USE_LIGHTMAP':'',h.aoMap?'#define USE_AOMAP':'',h.emissiveMap?'#define USE_EMISSIVEMAP':'',h.bumpMap?'#define USE_BUMPMAP':'',h.normalMap?'#define USE_NORMALMAP':'',h.normalMap&&h.objectSpaceNormalMap?'#define OBJECTSPACE_NORMALMAP':'',h.normalMap&&h.tangentSpaceNormalMap?'#define TANGENTSPACE_NORMALMAP':'',h.clearcoatNormalMap?'#define USE_CLEARCOAT_NORMALMAP':'',h.specularMap?'#define USE_SPECULARMAP':'',h.roughnessMap?'#define USE_ROUGHNESSMAP':'',h.metalnessMap?'#define USE_METALNESSMAP':'',h.alphaMap?'#define USE_ALPHAMAP':'',h.sheen?'#define USE_SHEEN':'',h.vertexTangents?'#define USE_TANGENT':'',h.vertexColors?'#define USE_COLOR':'',h.vertexUvs?'#define USE_UV':'',h.uvsVertexOnly?'#define UVS_VERTEX_ONLY':'',h.gradientMap?'#define USE_GRADIENTMAP':'',h.flatShading?'#define FLAT_SHADED':'',h.doubleSided?'#define DOUBLE_SIDED':'',h.flipSided?'#define FLIP_SIDED':'',h.shadowMapEnabled?'#define USE_SHADOWMAP':'',h.shadowMapEnabled?'#define '+I:'',h.premultipliedAlpha?'#define PREMULTIPLIED_ALPHA':'',h.physicallyCorrectLights?'#define PHYSICALLY_CORRECT_LIGHTS':'',h.logarithmicDepthBuffer?'#define USE_LOGDEPTHBUF':'',h.logarithmicDepthBuffer&&(h.isWebGL2||t.get('EXT_frag_depth'))?'#define USE_LOGDEPTHBUF_EXT':'',(!!a.extensions&&a.extensions.shaderTextureLOD||h.envMap)&&(h.isWebGL2||t.get('EXT_shader_texture_lod'))?'#define TEXTURE_LOD_EXT':'','uniform mat4 viewMatrix;','uniform vec3 cameraPosition;','uniform bool isOrthographic;',h.toneMapping===R._7?'':'#define TONE_MAPPING',h.toneMapping===R._7?'':A.a.tonemapping_pars_fragment,h.toneMapping===R._7?'':l('toneMapping',h.toneMapping),h.dithering?'#define DITHERING':'',h.outputEncoding||h.mapEncoding||h.matcapEncoding||h.envMapEncoding||h.emissiveMapEncoding?A.a.encodings_pars_fragment:'',h.mapEncoding?o('mapTexelToLinear',h.mapEncoding):'',h.matcapEncoding?o('matcapTexelToLinear',h.matcapEncoding):'',h.envMapEncoding?o('envMapTexelToLinear',h.envMapEncoding):'',h.emissiveMapEncoding?o('emissiveMapTexelToLinear',h.emissiveMapEncoding):'',h.outputEncoding?s('linearToOutputTexel',h.outputEncoding):'',h.depthPacking?'#define DEPTH_PACKING '+a.depthPacking:'','\n'].filter(u).join('\n')),P=f(P),P=m(P,h),P=g(P,h),C=f(C),C=m(C,h),C=g(C,h),P=y(P),C=y(C),h.isWebGL2&&!a.isRawShaderMaterial){var k=!1,W=/^\s*#version\s+300\s+es\s*\n/;a.isShaderMaterial&&null!==P.match(W)&&null!==C.match(W)&&(k=!0,P=P.replace(W,''),C=C.replace(W,'')),V='#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n'+V,H=['#version 300 es\n','#define varying in',k?'':'out highp vec4 pc_fragColor;',k?'':'#define gl_FragColor pc_fragColor','#define gl_FragDepthEXT gl_FragDepth','#define texture2D texture','#define textureCube texture','#define texture2DProj textureProj','#define texture2DLodEXT textureLod','#define texture2DProjLodEXT textureProjLod','#define textureCubeLodEXT textureLod','#define texture2DGradEXT textureGrad','#define texture2DProjGradEXT textureProjGrad','#define textureCubeGradEXT textureGrad'].join('\n')+'\n'+H,0<G&&(V=V.replace('#version 300 es\n',['#version 300 es\n','#extension GL_OVR_multiview2 : require','layout(num_views = '+G+') in;','#define VIEW_ID gl_ViewID_OVR'].join('\n')),V=V.replace('uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;',['uniform mat4 modelViewMatrices['+G+'];','uniform mat4 projectionMatrices['+G+'];','uniform mat4 viewMatrices['+G+'];','uniform mat3 normalMatrices['+G+'];','#define modelViewMatrix modelViewMatrices[VIEW_ID]','#define projectionMatrix projectionMatrices[VIEW_ID]','#define viewMatrix viewMatrices[VIEW_ID]','#define normalMatrix normalMatrices[VIEW_ID]'].join('\n')),H=H.replace('#version 300 es\n','#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR'),H=H.replace('uniform mat4 viewMatrix;',['uniform mat4 viewMatrices['+G+'];','#define viewMatrix viewMatrices[VIEW_ID]'].join('\n')))}var j=V+P,X=H+C,q=Object(w.a)(x,x.VERTEX_SHADER,j),Y=Object(w.a)(x,x.FRAGMENT_SHADER,X);if(x.attachShader(O,q),x.attachShader(O,Y),void 0===a.index0AttributeName?!0===h.morphTargets&&x.bindAttribLocation(O,0,'position'):x.bindAttribLocation(O,0,a.index0AttributeName),x.linkProgram(O),e.debug.checkShaderErrors){var Z=x.getProgramInfoLog(O).trim(),J=x.getShaderInfoLog(q).trim(),Q=x.getShaderInfoLog(Y).trim(),K=!0,$=!0;if(!1===x.getProgramParameter(O,x.LINK_STATUS)){K=!1;var ee=n(x,q,'vertex'),te=n(x,Y,'fragment');console.error('THREE.WebGLProgram: shader error: ',x.getError(),'gl.VALIDATE_STATUS',x.getProgramParameter(O,x.VALIDATE_STATUS),'gl.getProgramInfoLog',Z,ee,te)}else''===Z?(''===J||''===Q)&&($=!1):console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()',Z);$&&(this.diagnostics={runnable:K,material:a,programLog:Z,vertexShader:{log:J,prefix:V},fragmentShader:{log:Q,prefix:H}})}x.deleteShader(q),x.deleteShader(Y);var re;this.getUniforms=function(){return void 0===re&&(re=new S.a(x,O)),re};var ae;return this.getAttributes=function(){return void 0===ae&&(ae=c(x,O)),ae},this.destroy=function(){x.deleteProgram(O),this.program=void 0},this.name=i.name,this.id=L++,this.cacheKey=r,this.usedTimes=1,this.program=O,this.vertexShader=q,this.fragmentShader=Y,this.numMultiviewViews=G,this}r.d(t,'a',function(){return E});var S=r(32),w=r(199),A=r(26),R=r(1),L=0,P=/^[ \t]*#include +<([\w\d./]+)>/gm,C=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g},function(e,t,r){'use strict';function a(e,t,r,a,o,s,l,d,p,c){e=e===void 0?[]:e,t=t===void 0?n.m:t,l=l===void 0?n._41:l,i.a.call(this,e,t,r,a,o,s,l,d,p,c),this.flipY=!1}r.d(t,'a',function(){return a});var i=r(6),n=r(1);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isCubeTexture=!0,Object.defineProperty(a.prototype,'images',{get:function(){return this.image},set:function(e){this.image=e}})},function(e,t,r){'use strict';function a(e,t,r,a){i.a.call(this,null),this.image={data:e||null,width:t||1,height:r||1,depth:a||1},this.magFilter=n._1,this.minFilter=n._1,this.wrapR=n.l,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}r.d(t,'a',function(){return a});var i=r(6),n=r(1);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isDataTexture2DArray=!0},function(e,t,r){'use strict';function a(e,t,r,a){i.a.call(this,null),this.image={data:e||null,width:t||1,height:r||1,depth:a||1},this.magFilter=n._1,this.minFilter=n._1,this.wrapR=n.l,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}r.d(t,'a',function(){return a});var i=r(6),n=r(1);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isDataTexture3D=!0},function(e,t,r){'use strict';function a(e,t,r){var a=e.createShader(t);return e.shaderSource(a,r),e.compileShader(a),a}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(){function e(e){var t=a.get(e);return void 0===t&&(t={},a.set(e,t)),t}function t(e){a.delete(e)}function r(e,t,r){a.get(e)[t]=r}var a=new WeakMap;return{get:e,remove:t,update:r,dispose:function(){a=new WeakMap}}}r.d(t,'a',function(){return a})},function(e,t,r){'use strict';function a(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.program===t.program?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.program.id-t.program.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function i(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function n(){function e(e,a,i,n,o,l){var d=t[r];return void 0===d?(d={id:e.id,object:e,geometry:a,material:i,program:i.program||s,groupOrder:n,renderOrder:e.renderOrder,z:o,group:l},t[r]=d):(d.id=e.id,d.object=e,d.geometry=a,d.material=i,d.program=i.program||s,d.groupOrder=n,d.renderOrder=e.renderOrder,d.z=o,d.group=l),r++,d}var t=[],r=0,n=[],o=[],s={id:-1};return{opaque:n,transparent:o,init:function(){r=0,n.length=0,o.length=0},push:function(t,r,a,i,s,l){var d=e(t,r,a,i,s,l);(!0===a.transparent?o:n).push(d)},unshift:function(t,r,a,i,s,l){var d=e(t,r,a,i,s,l);(!0===a.transparent?o:n).unshift(d)},sort:function(){1<n.length&&n.sort(a),1<o.length&&o.sort(i)}}}function o(){function e(t){var a=t.target;a.removeEventListener('dispose',e),r.delete(a)}function t(t,a){var i=r.get(t),o;return void 0===i?(o=new n,r.set(t,new WeakMap),r.get(t).set(a,o),t.addEventListener('dispose',e)):(o=i.get(a),void 0===o&&(o=new n,i.set(a,o))),o}var r=new WeakMap;return{get:t,dispose:function(){r=new WeakMap}}}r.d(t,'a',function(){return o})},function(e,t,r){'use strict';function a(){var e=new n.a,t=[],r=[];return{init:function(){t.length=0,r.length=0},state:{lightsArray:t,shadowsArray:r,lights:e},setupLights:function(a){e.setup(t,r,a)},pushLight:function(e){t.push(e)},pushShadow:function(e){r.push(e)}}}function i(){function e(t){var a=t.target;a.removeEventListener('dispose',e),r.delete(a)}function t(t,i){var n;return!1===r.has(t)?(n=new a,r.set(t,new WeakMap),r.get(t).set(i,n),t.addEventListener('dispose',e)):!1===r.get(t).has(i)?(n=new a,r.get(t).set(i,n)):n=r.get(t).get(i),n}var r=new WeakMap;return{get:t,dispose:function(){r=new WeakMap}}}r.d(t,'a',function(){return i});var n=r(203)},function(e,t,r){'use strict';function a(){var e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];var r;switch(t.type){case'DirectionalLight':r={direction:new d.a,color:new o.a,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new l.a};break;case'SpotLight':r={position:new d.a,direction:new d.a,color:new o.a,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new l.a};break;case'PointLight':r={position:new d.a,color:new o.a,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new l.a,shadowCameraNear:1,shadowCameraFar:1e3};break;case'HemisphereLight':r={direction:new d.a,skyColor:new o.a,groundColor:new o.a};break;case'RectAreaLight':r={color:new o.a,position:new d.a,halfWidth:new d.a,halfHeight:new d.a};}return e[t.id]=r,r}}}function n(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function i(){function e(e,a,s){for(var d=0,r=0,u=0,m=0;9>m;m++)o.probe[m].set(0,0,0);var f=0,h=0,y=0,x=0,v=0,_=0,b=0,T=0,M=s.matrixWorldInverse;e.sort(n);for(var m=0,E=e.length;m<E;m++){var S=e[m],w=S.color,A=S.intensity,R=S.distance,L=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=w.r*A,r+=w.g*A,u+=w.b*A;else if(S.isLightProbe)for(var P=0;9>P;P++)o.probe[P].addScaledVector(S.sh.coefficients[P],A);else if(S.isDirectionalLight){var C=t.get(S);if(C.color.copy(S.color).multiplyScalar(S.intensity),C.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(M),C.shadow=S.castShadow,S.castShadow){var I=S.shadow;C.shadowBias=I.bias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,o.directionalShadowMap[f]=L,o.directionalShadowMatrix[f]=S.shadow.matrix,_++}o.directional[f]=C,f++}else if(S.isSpotLight){var C=t.get(S);if(C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(M),C.color.copy(w).multiplyScalar(A),C.distance=R,C.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(M),C.coneCos=g(S.angle),C.penumbraCos=g(S.angle*(1-S.penumbra)),C.decay=S.decay,C.shadow=S.castShadow,S.castShadow){var I=S.shadow;C.shadowBias=I.bias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,o.spotShadowMap[y]=L,o.spotShadowMatrix[y]=S.shadow.matrix,T++}o.spot[y]=C,y++}else if(S.isRectAreaLight){var C=t.get(S);C.color.copy(w).multiplyScalar(A),C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(M),c.identity(),l.copy(S.matrixWorld),l.premultiply(M),c.extractRotation(l),C.halfWidth.set(.5*S.width,0,0),C.halfHeight.set(0,.5*S.height,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),o.rectArea[x]=C,x++}else if(S.isPointLight){var C=t.get(S);if(C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(M),C.color.copy(S.color).multiplyScalar(S.intensity),C.distance=S.distance,C.decay=S.decay,C.shadow=S.castShadow,S.castShadow){var I=S.shadow;C.shadowBias=I.bias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,C.shadowCameraNear=I.camera.near,C.shadowCameraFar=I.camera.far,o.pointShadowMap[h]=L,o.pointShadowMatrix[h]=S.shadow.matrix,b++}o.point[h]=C,h++}else if(S.isHemisphereLight){var C=t.get(S);C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(M),C.direction.normalize(),C.skyColor.copy(S.color).multiplyScalar(A),C.groundColor.copy(S.groundColor).multiplyScalar(A),o.hemi[v]=C,v++}}o.ambient[0]=d,o.ambient[1]=r,o.ambient[2]=u;var D=o.hash;(D.directionalLength!==f||D.pointLength!==h||D.spotLength!==y||D.rectAreaLength!==x||D.hemiLength!==v||D.numDirectionalShadows!==_||D.numPointShadows!==b||D.numSpotShadows!==T)&&(o.directional.length=f,o.spot.length=y,o.rectArea.length=x,o.point.length=h,o.hemi.length=v,o.directionalShadowMap.length=_,o.pointShadowMap.length=b,o.spotShadowMap.length=T,o.directionalShadowMatrix.length=_,o.pointShadowMatrix.length=b,o.spotShadowMatrix.length=T,D.directionalLength=f,D.pointLength=h,D.spotLength=y,D.rectAreaLength=x,D.hemiLength=v,D.numDirectionalShadows=_,D.numPointShadows=b,D.numSpotShadows=T,o.version=p++)}for(var t=new a,o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},r=0;9>r;r++)o.probe.push(new d.a);var i=new d.a,l=new s.a,c=new s.a;return{setup:e,state:o}}r.d(t,'a',function(){return i});var o=r(9),s=r(4),l=r(2),d=r(0),p=0},function(e,t,r){'use strict';function a(e,t,r){function a(r,a){var i=t.update(D);P.uniforms.shadow_pass.value=r.map.texture,P.uniforms.resolution.value=r.mapSize,P.uniforms.radius.value=r.radius,e.setRenderTarget(r.mapPass),e.clear(),e.renderBufferDirect(a,null,i,P,D,null),C.uniforms.shadow_pass.value=r.mapPass.texture,C.uniforms.resolution.value=r.mapSize,C.uniforms.radius.value=r.radius,e.setRenderTarget(r.map),e.clear(),e.renderBufferDirect(a,null,i,C,D,null)}function y(e,t,r){var a=e<<0|t<<1|r<<2,i=w[a];return void 0===i&&(i=new o.a({depthPacking:n._18,morphTargets:e,skinning:t}),w[a]=i),i}function x(e,t,r){var a=e<<0|t<<1|r<<2,i=A[a];return void 0===i&&(i=new s.a({morphTargets:e,skinning:t}),A[a]=i),i}function v(t,r,a,i,o,s){var l=t.geometry,d=null,p=y,c=t.customDepthMaterial;if(!0===a.isPointLight&&(p=x,c=t.customDistanceMaterial),void 0===c){var u=!1;!0===r.morphTargets&&(!0===l.isBufferGeometry?u=l.morphAttributes&&l.morphAttributes.position&&0<l.morphAttributes.position.length:!0===l.isGeometry&&(u=l.morphTargets&&0<l.morphTargets.length));var m=!1;!0===t.isSkinnedMesh&&(!0===r.skinning?m=!0:console.warn('THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:',t));var g=!0===t.isInstancedMesh;d=p(u,m,g)}else d=c;if(e.localClippingEnabled&&!0===r.clipShadows&&0!==r.clippingPlanes.length){var f=d.uuid,h=r.uuid,v=R[f];void 0===v&&(v={},R[f]=v);var _=v[h];void 0===_&&(_=d.clone(),v[h]=_),d=_}return d.visible=r.visible,d.wireframe=r.wireframe,d.side=s===n._73?null===r.shadowSide?r.side:r.shadowSide:null===r.shadowSide?L[r.side]:r.shadowSide,d.clipShadows=r.clipShadows,d.clippingPlanes=r.clippingPlanes,d.clipIntersection=r.clipIntersection,d.wireframeLinewidth=r.wireframeLinewidth,d.linewidth=r.linewidth,!0===a.isPointLight&&!0===d.isMeshDistanceMaterial&&(d.referencePosition.setFromMatrixPosition(a.matrixWorld),d.nearDistance=i,d.farDistance=o),d}function b(r,a,o,s,d){if(!1!==r.visible){var p=r.layers.test(a.layers);if(p&&(r.isMesh||r.isLine||r.isPoints)&&(r.castShadow||r.receiveShadow&&d===n._73)&&(!r.frustumCulled||T.intersectsObject(r))){r.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,r.matrixWorld);var c=t.update(r),u=r.material;if(Array.isArray(u))for(var m=c.groups,g=0,f=m.length;g<f;g++){var h=m[g],y=u[h.materialIndex];if(y&&y.visible){var x=v(r,y,s,o.near,o.far,d);e.renderBufferDirect(o,null,c,x,r,h)}}else if(u.visible){var x=v(r,u,s,o.near,o.far,d);e.renderBufferDirect(o,null,c,x,r,null)}}for(var _=r.children,M=0,i=_.length;M<i;M++)b(_[M],a,o,s,d)}}var T=new g.a,M=new m.a,E=new m.a,S=new u.a,w=[],A=[],R={},L={0:n.h,1:n.E,2:n.w},P=new l.a({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new m.a},radius:{value:4}},vertexShader:h.a,fragmentShader:f.a}),C=P.clone();C.defines.HORIZONAL_PASS=1;var I=new p.a;I.setAttribute('position',new d.a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var D=new c.a(I,P),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n._16,this.render=function(t,o,s){if(!1!==N.enabled&&(!1!==N.autoUpdate||!1!==N.needsUpdate)&&0!==t.length){var l=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),c=e.state;c.setBlending(n._5),c.buffers.color.setClear(1,1,1,1),c.buffers.depth.setTest(!0),c.setScissorTest(!1);for(var u=0,m=t.length;u<m;u++){var g=t[u],f=g.shadow;if(void 0===f){console.warn('THREE.WebGLShadowMap:',g,'has no shadow.');continue}M.copy(f.mapSize);var h=f.getFrameExtents();if(M.multiply(h),E.copy(f.mapSize),(M.x>r||M.y>r)&&(console.warn('THREE.WebGLShadowMap:',g,'has shadow exceeding max texture size, reducing'),M.x>r&&(E.x=_(r/h.x),M.x=E.x*h.x,f.mapSize.x=E.x),M.y>r&&(E.y=_(r/h.y),M.y=E.y*h.y,f.mapSize.y=E.y)),null===f.map&&!f.isPointLightShadow&&this.type===n._73){var y={minFilter:n.O,magFilter:n.O,format:n._19};f.map=new i.a(M.x,M.y,y),f.map.texture.name=g.name+'.shadowMap',f.mapPass=new i.a(M.x,M.y,y),f.camera.updateProjectionMatrix()}if(null===f.map){var y={minFilter:n._1,magFilter:n._1,format:n._19};f.map=new i.a(M.x,M.y,y),f.map.texture.name=g.name+'.shadowMap',f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();for(var x=f.getViewportCount(),v=0,w;v<x;v++)w=f.getViewport(v),S.set(E.x*w.x,E.y*w.y,E.x*w.z,E.y*w.w),c.viewport(S),f.updateMatrices(g,v),T=f.getFrustum(),b(o,s,f.camera,g,this.type);f.isPointLightShadow||this.type!==n._73||a(f,s)}N.needsUpdate=!1,e.setRenderTarget(l,d,p)}}}r.d(t,'a',function(){return a});var n=r(1),i=r(33),o=r(205),s=r(206),l=r(20),d=r(12),p=r(11),c=r(21),u=r(10),m=r(2),g=r(24),f=r(207),h=r(208)},function(e,t,r){'use strict';function a(e){i.a.call(this),this.type='MeshDepthMaterial',this.depthPacking=n.i,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}r.d(t,'a',function(){return a});var i=r(16),n=r(1);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isMeshDepthMaterial=!0,a.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},function(e,t,r){'use strict';function a(e){i.a.call(this),this.type='MeshDistanceMaterial',this.referencePosition=new n.a,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}r.d(t,'a',function(){return a});var i=r(16),n=r(0);a.prototype=Object.create(i.a.prototype),a.prototype.constructor=a,a.prototype.isMeshDistanceMaterial=!0,a.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},function(e,t){'use strict';t.a=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

  float mean = 0.0;
  float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );

  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {

    #ifdef HORIZONAL_PASS

      vec2 distribution = unpack2HalfToRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

    #else

      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;

    #endif

  }

  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;

  float std_dev = sqrt( squared_mean - mean * mean );

  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`},function(e,t){'use strict';t.a=`

void main() {

	gl_Position = vec4( position, 1.0 );

}

`},function(e,t,r){'use strict';function a(e,t,r){function a(t,r,a){var n=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(var s=0;s<a;s++)e.texImage2D(r+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,n);return o}function o(r,a){if(S[r]=1,0===w[r]&&(e.enableVertexAttribArray(r),w[r]=1),A[r]!==a){var i=_?e:t.get('ANGLE_instanced_arrays');i[_?'vertexAttribDivisor':'vertexAttribDivisorANGLE'](r,a),A[r]=a}}function s(t){!0!==R[t]&&(e.enable(t),R[t]=!0)}function l(t){!1!==R[t]&&(e.disable(t),R[t]=!1)}function d(t){return L!==t&&(e.useProgram(t),L=t,!0)}function p(t,r,a,n,o,d,p,c){return t===i._5?void(P&&(l(e.BLEND),P=!1)):(P||(s(e.BLEND),P=!0),t===i.t?void(o=o||r,d=d||a,p=p||n,(r!==I||o!==z)&&(e.blendEquationSeparate($[r],$[o]),I=r,z=o),(a!==D||n!==N||d!==U||p!==F)&&(e.blendFuncSeparate(te[a],te[n],te[d],te[p]),D=a,N=n,U=d,F=p),C=t,B=null):void((t!==C||c!==B)&&((I!==i.b||z!==i.b)&&(e.blendEquation(e.FUNC_ADD),I=i.b,z=i.b),c?t===i._8?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):t===i.d?e.blendFunc(e.ONE,e.ONE):t===i._59?e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA):t===i.Z?e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA):console.error('THREE.WebGLState: Invalid blending: ',t):t===i._8?e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):t===i.d?e.blendFunc(e.SRC_ALPHA,e.ONE):t===i._59?e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR):t===i.Z?e.blendFunc(e.ZERO,e.SRC_COLOR):console.error('THREE.WebGLState: Invalid blending: ',t),D=null,N=null,U=null,F=null,C=t,B=c)))}function c(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function u(t){t===i.s?l(e.CULL_FACE):(s(e.CULL_FACE),t!==G&&(t===i.q?e.cullFace(e.BACK):t===i.r?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),G=t}function m(t){t!==V&&(j&&e.lineWidth(t),V=t)}function g(t,r,a){t?(s(e.POLYGON_OFFSET_FILL),(H!==r||k!==a)&&(e.polygonOffset(r,a),H=r,k=a)):l(e.POLYGON_OFFSET_FILL)}function f(t){t===void 0&&(t=e.TEXTURE0+W-1),Y!==t&&(e.activeTexture(t),Y=t)}function h(t,r){null===Y&&f();var a=Z[Y];a===void 0&&(a={type:void 0,texture:void 0},Z[Y]=a),(a.type!==t||a.texture!==r)&&(e.bindTexture(t,r||K[t]),a.type=t,a.texture=r)}function y(){var t=Z[Y];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function x(t){!1===J.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),J.copy(t))}function v(t){!1===Q.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),Q.copy(t))}var _=r.isWebGL2,b=new function(){var t=!1,i=new n.a,r=null,o=new n.a(0,0,0,0);return{setMask:function(a){r===a||t||(e.colorMask(a,a,a,a),r=a)},setLocked:function(e){t=e},setClear:function(t,r,n,s,a){!0===a&&(t*=s,r*=s,n*=s),i.set(t,r,n,s),!1===o.equals(i)&&(e.clearColor(t,r,n,s),o.copy(i))},reset:function(){t=!1,r=null,o.set(-1,0,0,0)}}},T=new function(){var t=!1,r=null,a=null,n=null;return{setTest:function(t){t?s(e.DEPTH_TEST):l(e.DEPTH_TEST)},setMask:function(a){r===a||t||(e.depthMask(a),r=a)},setFunc:function(t){a!==t&&(t?t===i._4?e.depthFunc(e.NEVER):t===i.f?e.depthFunc(e.ALWAYS):t===i.L?e.depthFunc(e.LESS):t===i.M?e.depthFunc(e.LEQUAL):t===i.z?e.depthFunc(e.EQUAL):t===i.H?e.depthFunc(e.GEQUAL):t===i.G?e.depthFunc(e.GREATER):t===i._9?e.depthFunc(e.NOTEQUAL):e.depthFunc(e.LEQUAL):e.depthFunc(e.LEQUAL),a=t)},setLocked:function(e){t=e},setClear:function(t){n!==t&&(e.clearDepth(t),n=t)},reset:function(){t=!1,r=null,a=null,n=null}}},M=new function(){var t=!1,r=null,a=null,i=null,n=null,o=null,d=null,p=null,c=null;return{setTest:function(r){t||(r?s(e.STENCIL_TEST):l(e.STENCIL_TEST))},setMask:function(a){r===a||t||(e.stencilMask(a),r=a)},setFunc:function(t,r,o){(a!==t||i!==r||n!==o)&&(e.stencilFunc(t,r,o),a=t,i=r,n=o)},setOp:function(t,r,a){(o!==t||d!==r||p!==a)&&(e.stencilOp(t,r,a),o=t,d=r,p=a)},setLocked:function(e){t=e},setClear:function(t){c!==t&&(e.clearStencil(t),c=t)},reset:function(){t=!1,r=null,a=null,i=null,n=null,o=null,d=null,p=null,c=null}}},E=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=new Uint8Array(E),w=new Uint8Array(E),A=new Uint8Array(E),R={},L=null,P=null,C=null,I=null,D=null,N=null,z=null,U=null,F=null,B=!1,O=null,G=null,V=null,H=null,k=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,X=0,q=e.getParameter(e.VERSION);-1===q.indexOf('WebGL')?-1!==q.indexOf('OpenGL ES')&&(X=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(q)[1]),j=2<=X):(X=parseFloat(/^WebGL\ ([0-9])/.exec(q)[1]),j=1<=X);var Y=null,Z={},J=new n.a,Q=new n.a,K={};K[e.TEXTURE_2D]=a(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=a(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),b.setClear(0,0,0,1),T.setClear(1),M.setClear(0),s(e.DEPTH_TEST),T.setFunc(i.M),c(!1),u(i.q),s(e.CULL_FACE),p(i._5);var $={[i.b]:e.FUNC_ADD,[i._58]:e.FUNC_SUBTRACT,[i._51]:e.FUNC_REVERSE_SUBTRACT};if(_)$[i.W]=e.MIN,$[i.V]=e.MAX;else{var ee=t.get('EXT_blend_minmax');null!==ee&&($[i.W]=ee.MIN_EXT,$[i.V]=ee.MAX_EXT)}var te={[i._74]:e.ZERO,[i._11]:e.ONE,[i._56]:e.SRC_COLOR,[i._54]:e.SRC_ALPHA,[i._55]:e.SRC_ALPHA_SATURATE,[i.y]:e.DST_COLOR,[i.x]:e.DST_ALPHA,[i._15]:e.ONE_MINUS_SRC_COLOR,[i._14]:e.ONE_MINUS_SRC_ALPHA,[i._13]:e.ONE_MINUS_DST_COLOR,[i._12]:e.ONE_MINUS_DST_ALPHA};return{buffers:{color:b,depth:T,stencil:M},initAttributes:function(){for(var e=0,t=S.length;e<t;e++)S[e]=0},enableAttribute:function(e){o(e,0)},enableAttributeAndDivisor:o,disableUnusedAttributes:function(){for(var t=0,r=w.length;t!==r;++t)w[t]!==S[t]&&(e.disableVertexAttribArray(t),w[t]=0)},enable:s,disable:l,useProgram:d,setBlending:p,setMaterial:function(t,r){t.side===i.w?l(e.CULL_FACE):s(e.CULL_FACE);var a=t.side===i.h;r&&(a=!a),c(a),t.blending===i._8&&!1===t.transparent?p(i._5):p(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),T.setFunc(t.depthFunc),T.setTest(t.depthTest),T.setMask(t.depthWrite),b.setMask(t.colorWrite);var n=t.stencilWrite;M.setTest(n),n&&(M.setMask(t.stencilWriteMask),M.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),M.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),g(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits)},setFlipSided:c,setCullFace:u,setLineWidth:m,setPolygonOffset:g,setScissorTest:function(t){t?s(e.SCISSOR_TEST):l(e.SCISSOR_TEST)},activeTexture:f,bindTexture:h,unbindTexture:y,compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error('THREE.WebGLState:',e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error('THREE.WebGLState:',e)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error('THREE.WebGLState:',e)}},scissor:x,viewport:v,reset:function(){for(var t=0;t<w.length;t++)1===w[t]&&(e.disableVertexAttribArray(t),w[t]=0);R={},Y=null,Z={},L=null,C=null,O=null,G=null,b.reset(),T.reset(),M.reset()}}}r.d(t,'a',function(){return a});var i=r(1),n=r(10)},function(t,r,a){'use strict';function i(t,r,a,l,i,d,p){function c(e,t){return q?new OffscreenCanvas(e,t):document.createElementNS('http://www.w3.org/1999/xhtml','canvas')}function u(e,t,r,a){var i=1;if((e.width>a||e.height>a)&&(i=a/T(e.width,e.height)),1>i||!0===t){if('undefined'!=typeof HTMLImageElement&&e instanceof HTMLImageElement||'undefined'!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||'undefined'!=typeof ImageBitmap&&e instanceof ImageBitmap){var n=t?o.a.floorPowerOfTwo:_,s=n(i*e.width),l=n(i*e.height);void 0===$&&($=c(s,l));var d=r?c(s,l):$;d.width=s,d.height=l;var p=d.getContext('2d');return p.drawImage(e,0,0,s,l),console.warn('THREE.WebGLRenderer: Texture has been resized from ('+e.width+'x'+e.height+') to ('+s+'x'+l+').'),d}return'data'in e&&console.warn('THREE.WebGLRenderer: Image in DataTexture is too big ('+e.width+'x'+e.height+').'),e}return e}function m(e){return o.a.isPowerOfTwo(e.width)&&o.a.isPowerOfTwo(e.height)}function g(e){return!V&&(e.wrapS!==n.l||e.wrapT!==n.l||e.minFilter!==n._1&&e.minFilter!==n.O)}function f(e,t){return e.generateMipmaps&&t&&e.minFilter!==n._1&&e.minFilter!==n.O}function h(r,a,i,n){t.generateMipmap(r);var o=l.get(a);o.__maxMipLevel=s(T(i,n))*e}function y(e,a){if(!1===V)return e;var i=e;return e===t.RED&&(a===t.FLOAT&&(i=t.R32F),a===t.HALF_FLOAT&&(i=t.R16F),a===t.UNSIGNED_BYTE&&(i=t.R8)),e===t.RGB&&(a===t.FLOAT&&(i=t.RGB32F),a===t.HALF_FLOAT&&(i=t.RGB16F),a===t.UNSIGNED_BYTE&&(i=t.RGB8)),e===t.RGBA&&(a===t.FLOAT&&(i=t.RGBA32F),a===t.HALF_FLOAT&&(i=t.RGBA16F),a===t.UNSIGNED_BYTE&&(i=t.RGBA8)),i===t.R16F||i===t.R32F||i===t.RGBA16F||i===t.RGBA32F?r.get('EXT_color_buffer_float'):(i===t.RGB16F||i===t.RGB32F)&&console.warn('THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.'),i}function x(e){return e===n._1||e===n._3||e===n._2?t.NEAREST:t.LINEAR}function v(e){var t=e.target;t.removeEventListener('dispose',v),E(t),t.isVideoTexture&&X.delete(t),p.memory.textures--}function b(e){var t=e.target;t.removeEventListener('dispose',b),S(t),p.memory.textures--}function E(e){var r=l.get(e);void 0===r.__webglInit||(t.deleteTexture(r.__webglTexture),l.remove(e))}function S(e){var r=l.get(e),a=l.get(e.texture);if(e){if(void 0!==a.__webglTexture&&t.deleteTexture(a.__webglTexture),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLRenderTargetCube)for(var n=0;6>n;n++)t.deleteFramebuffer(r.__webglFramebuffer[n]),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer[n]);else t.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer);if(e.isWebGLMultiviewRenderTarget){t.deleteTexture(r.__webglColorTexture),t.deleteTexture(r.__webglDepthStencilTexture),p.memory.textures-=2;for(var n=0,i=r.__webglViewFramebuffers.length;n<i;n++)t.deleteFramebuffer(r.__webglViewFramebuffers[n])}l.remove(e.texture),l.remove(e)}}function w(){var e=Y;return e>=H&&console.warn('THREE.WebGLTextures: Trying to use '+e+' texture units while this GPU supports only '+H),Y+=1,e}function A(e,r){var i=l.get(e);if(e.isVideoTexture&&B(e),0<e.version&&i.__version!==e.version){var n=e.image;if(void 0===n)console.warn('THREE.WebGLRenderer: Texture marked for update but image is undefined');else if(!1===n.complete)console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');else return void I(i,e,r)}a.activeTexture(t.TEXTURE0+r),a.bindTexture(t.TEXTURE_2D,i.__webglTexture)}function R(e,r){if(6===e.image.length){var o=l.get(e);if(0<e.version&&o.__version!==e.version){C(o,e),a.activeTexture(t.TEXTURE0+r),a.bindTexture(t.TEXTURE_CUBE_MAP,o.__webglTexture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,e.flipY);for(var s=e&&e.isCompressedTexture,p=e.image[0]&&e.image[0].isDataTexture,c=[],g=0;6>g;g++)c[g]=s||p?p?e.image[g].image:e.image[g]:u(e.image[g],!1,!0,k);var i=c[0],x=m(i)||V,v=d.convert(e.format),_=d.convert(e.type),b=y(v,_);P(t.TEXTURE_CUBE_MAP,e,x);var T;if(s){for(var g=0;6>g;g++){T=c[g].mipmaps;for(var M=0,E;M<T.length;M++)E=T[M],e.format!==n._19&&e.format!==n._41?null===v?console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+g,M,b,E.width,E.height,0,E.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+g,M,b,E.width,E.height,0,v,_,E.data)}o.__maxMipLevel=T.length-1}else{T=e.mipmaps;for(var g=0;6>g;g++)if(p){a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,b,c[g].width,c[g].height,0,v,_,c[g].data);for(var M=0;M<T.length;M++){var E=T[M],S=E.image[g].image;a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+g,M+1,b,S.width,S.height,0,v,_,S.data)}}else{a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,b,v,_,c[g]);for(var M=0,E;M<T.length;M++)E=T[M],a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+g,M+1,b,v,_,E.image[g])}o.__maxMipLevel=T.length}f(e,x)&&h(t.TEXTURE_CUBE_MAP,e,i.width,i.height),o.__version=e.version,e.onUpdate&&e.onUpdate(e)}else a.activeTexture(t.TEXTURE0+r),a.bindTexture(t.TEXTURE_CUBE_MAP,o.__webglTexture)}}function L(e,r){a.activeTexture(t.TEXTURE0+r),a.bindTexture(t.TEXTURE_CUBE_MAP,l.get(e).__webglTexture)}function P(e,a,o){o?(t.texParameteri(e,t.TEXTURE_WRAP_S,Z[a.wrapS]),t.texParameteri(e,t.TEXTURE_WRAP_T,Z[a.wrapT]),(e===t.TEXTURE_3D||e===t.TEXTURE_2D_ARRAY)&&t.texParameteri(e,t.TEXTURE_WRAP_R,Z[a.wrapR]),t.texParameteri(e,t.TEXTURE_MAG_FILTER,J[a.magFilter]),t.texParameteri(e,t.TEXTURE_MIN_FILTER,J[a.minFilter])):(t.texParameteri(e,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(e,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(e===t.TEXTURE_3D||e===t.TEXTURE_2D_ARRAY)&&t.texParameteri(e,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(a.wrapS!==n.l||a.wrapT!==n.l)&&console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'),t.texParameteri(e,t.TEXTURE_MAG_FILTER,x(a.magFilter)),t.texParameteri(e,t.TEXTURE_MIN_FILTER,x(a.minFilter)),a.minFilter!==n._1&&a.minFilter!==n.O&&console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'));var s=r.get('EXT_texture_filter_anisotropic');if(s){if(a.type===n.D&&null===r.get('OES_texture_float_linear'))return;if(a.type===n.I&&null===(V||r.get('OES_texture_half_float_linear')))return;(1<a.anisotropy||l.get(a).__currentAnisotropy)&&(t.texParameterf(e,s.TEXTURE_MAX_ANISOTROPY_EXT,M(a.anisotropy,i.getMaxAnisotropy())),l.get(a).__currentAnisotropy=a.anisotropy)}}function C(e,r){e.__webglInit===void 0&&(e.__webglInit=!0,r.addEventListener('dispose',v),e.__webglTexture=t.createTexture(),p.memory.textures++)}function I(e,r,o){var s=t.TEXTURE_2D;r.isDataTexture2DArray&&(s=t.TEXTURE_2D_ARRAY),r.isDataTexture3D&&(s=t.TEXTURE_3D),C(e,r),a.activeTexture(t.TEXTURE0+o),a.bindTexture(s,e.__webglTexture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,r.unpackAlignment);var l=g(r)&&!1===m(r.image),p=u(r.image,l,!1,W),c=m(p)||V,x=d.convert(r.format),v=d.convert(r.type),_=y(x,v);P(s,r,c);var b=r.mipmaps,T;if(r.isDepthTexture){if(_=t.DEPTH_COMPONENT,r.type===n.D){if(!1===V)throw new Error('Float Depth Texture only supported in WebGL2.0');_=t.DEPTH_COMPONENT32F}else V&&(_=t.DEPTH_COMPONENT16);r.format===n.u&&_===t.DEPTH_COMPONENT&&r.type!==n._72&&r.type!==n._68&&(console.warn('THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'),r.type=n._72,v=d.convert(r.type)),r.format===n.v&&(_=t.DEPTH_STENCIL,r.type!==n._67&&(console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'),r.type=n._67,v=d.convert(r.type))),a.texImage2D(t.TEXTURE_2D,0,_,p.width,p.height,0,x,v,null)}else if(r.isDataTexture){if(0<b.length&&c){for(var M=0,i=b.length;M<i;M++)T=b[M],a.texImage2D(t.TEXTURE_2D,M,_,T.width,T.height,0,x,v,T.data);r.generateMipmaps=!1,e.__maxMipLevel=b.length-1}else a.texImage2D(t.TEXTURE_2D,0,_,p.width,p.height,0,x,v,p.data),e.__maxMipLevel=0;}else if(r.isCompressedTexture){for(var M=0,i=b.length;M<i;M++)T=b[M],r.format!==n._19&&r.format!==n._41?null===x?console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'):a.compressedTexImage2D(t.TEXTURE_2D,M,_,T.width,T.height,0,T.data):a.texImage2D(t.TEXTURE_2D,M,_,T.width,T.height,0,x,v,T.data);e.__maxMipLevel=b.length-1}else if(r.isDataTexture2DArray)a.texImage3D(t.TEXTURE_2D_ARRAY,0,_,p.width,p.height,p.depth,0,x,v,p.data),e.__maxMipLevel=0;else if(r.isDataTexture3D)a.texImage3D(t.TEXTURE_3D,0,_,p.width,p.height,p.depth,0,x,v,p.data),e.__maxMipLevel=0;else if(0<b.length&&c){for(var M=0,i=b.length;M<i;M++)T=b[M],a.texImage2D(t.TEXTURE_2D,M,_,x,v,T);r.generateMipmaps=!1,e.__maxMipLevel=b.length-1}else a.texImage2D(t.TEXTURE_2D,0,_,x,v,p),e.__maxMipLevel=0;f(r,c)&&h(t.TEXTURE_2D,r,p.width,p.height),e.__version=r.version,r.onUpdate&&r.onUpdate(r)}function D(e,r,i,n){var o=d.convert(r.texture.format),s=d.convert(r.texture.type),p=y(o,s);a.texImage2D(n,0,p,r.width,r.height,0,o,s,null),t.bindFramebuffer(t.FRAMEBUFFER,e),t.framebufferTexture2D(t.FRAMEBUFFER,i,n,l.get(r.texture).__webglTexture,0),t.bindFramebuffer(t.FRAMEBUFFER,null)}function N(e,r,a){if(t.bindRenderbuffer(t.RENDERBUFFER,e),r.depthBuffer&&!r.stencilBuffer){if(a){var i=F(r);t.renderbufferStorageMultisample(t.RENDERBUFFER,i,t.DEPTH_COMPONENT16,r.width,r.height)}else t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r.width,r.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e)}else if(r.depthBuffer&&r.stencilBuffer){if(a){var i=F(r);t.renderbufferStorageMultisample(t.RENDERBUFFER,i,t.DEPTH24_STENCIL8,r.width,r.height)}else t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,r.width,r.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,e)}else{var n=d.convert(r.texture.format),o=d.convert(r.texture.type),s=y(n,o);if(a){var i=F(r);t.renderbufferStorageMultisample(t.RENDERBUFFER,i,s,r.width,r.height)}else t.renderbufferStorage(t.RENDERBUFFER,s,r.width,r.height)}t.bindRenderbuffer(t.RENDERBUFFER,null)}function z(e,r){var a=r&&r.isWebGLRenderTargetCube;if(a)throw new Error('Depth Texture with cube render targets is not supported');if(t.bindFramebuffer(t.FRAMEBUFFER,e),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');l.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),A(r.depthTexture,0);var i=l.get(r.depthTexture).__webglTexture;if(r.depthTexture.format===n.u)t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,i,0);else if(r.depthTexture.format===n.v)t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,i,0);else throw new Error('Unknown depthTexture format')}function U(e){var r=l.get(e),a=!0===e.isWebGLRenderTargetCube;if(e.depthTexture){if(a)throw new Error('target.depthTexture not supported in Cube render targets');z(r.__webglFramebuffer,e)}else if(a){r.__webglDepthbuffer=[];for(var n=0;6>n;n++)t.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer[n]),r.__webglDepthbuffer[n]=t.createRenderbuffer(),N(r.__webglDepthbuffer[n],e)}else t.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),N(r.__webglDepthbuffer,e);t.bindFramebuffer(t.FRAMEBUFFER,null)}function F(e){return V&&e.isWebGLMultisampleRenderTarget?M(j,e.samples):0}function B(e){var t=p.render.frame;X.get(e)!==t&&(X.set(e,t),e.update())}function O(e,t){e&&e.isWebGLRenderTarget&&(!1===Q&&(console.warn('THREE.WebGLTextures.safeSetTexture2D: don\'t use render targets as textures. Use their .texture property instead.'),Q=!0),e=e.texture),A(e,t)}function G(e,t){e&&e.isWebGLRenderTargetCube&&(!1===K&&(console.warn('THREE.WebGLTextures.safeSetTextureCube: don\'t use cube render targets as textures. Use their .texture property instead.'),K=!0),e=e.texture),e&&e.isCubeTexture||Array.isArray(e.image)&&6===e.image.length?R(e,t):L(e,t)}var V=i.isWebGL2,H=i.maxTextures,k=i.maxCubemapSize,W=i.maxTextureSize,j=i.maxSamples,X=new WeakMap,q='undefined'!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext('2d'),Y=0,Z={[n._50]:t.REPEAT,[n.l]:t.CLAMP_TO_EDGE,[n.X]:t.MIRRORED_REPEAT},J={[n._1]:t.NEAREST,[n._3]:t.NEAREST_MIPMAP_NEAREST,[n._2]:t.NEAREST_MIPMAP_LINEAR,[n.O]:t.LINEAR,[n.Q]:t.LINEAR_MIPMAP_NEAREST,[n.P]:t.LINEAR_MIPMAP_LINEAR},Q=!1,K=!1,$;this.allocateTextureUnit=w,this.resetTextureUnits=function(){Y=0},this.setTexture2D=A,this.setTexture2DArray=function(e,r){var i=l.get(e);return 0<e.version&&i.__version!==e.version?void I(i,e,r):void(a.activeTexture(t.TEXTURE0+r),a.bindTexture(t.TEXTURE_2D_ARRAY,i.__webglTexture))},this.setTexture3D=function(e,r){var i=l.get(e);return 0<e.version&&i.__version!==e.version?void I(i,e,r):void(a.activeTexture(t.TEXTURE0+r),a.bindTexture(t.TEXTURE_3D,i.__webglTexture))},this.setTextureCube=R,this.setTextureCubeDynamic=L,this.setupRenderTarget=function(e){var n=l.get(e),o=l.get(e.texture);e.addEventListener('dispose',b),o.__webglTexture=t.createTexture(),p.memory.textures++;var s=!0===e.isWebGLRenderTargetCube,c=!0===e.isWebGLMultisampleRenderTarget,u=!0===e.isWebGLMultiviewRenderTarget,g=m(e)||V;if(s){n.__webglFramebuffer=[];for(var x=0;6>x;x++)n.__webglFramebuffer[x]=t.createFramebuffer()}else if(n.__webglFramebuffer=t.createFramebuffer(),c){if(V){n.__webglMultisampledFramebuffer=t.createFramebuffer(),n.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,n.__webglColorRenderbuffer);var i=d.convert(e.texture.format),v=d.convert(e.texture.type),_=y(i,v),T=F(e);t.renderbufferStorageMultisample(t.RENDERBUFFER,T,_,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,n.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,n.__webglColorRenderbuffer),t.bindRenderbuffer(t.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=t.createRenderbuffer(),N(n.__webglDepthRenderbuffer,e,!0)),t.bindFramebuffer(t.FRAMEBUFFER,null)}else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.');}else if(u){var M=e.width,E=e.height,S=e.numViews;t.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer);var w=r.get('OVR_multiview2');p.memory.textures+=2;var A=t.createTexture();t.bindTexture(t.TEXTURE_2D_ARRAY,A),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texImage3D(t.TEXTURE_2D_ARRAY,0,t.RGBA8,M,E,S,0,t.RGBA,t.UNSIGNED_BYTE,null),w.framebufferTextureMultiviewOVR(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,A,0,0,S);var R=t.createTexture();t.bindTexture(t.TEXTURE_2D_ARRAY,R),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texImage3D(t.TEXTURE_2D_ARRAY,0,t.DEPTH24_STENCIL8,M,E,S,0,t.DEPTH_STENCIL,t.UNSIGNED_INT_24_8,null),w.framebufferTextureMultiviewOVR(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,R,0,0,S);for(var L=Array(S),x=0;x<S;++x)L[x]=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,L[x]),t.framebufferTextureLayer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,A,0,x);n.__webglColorTexture=A,n.__webglDepthStencilTexture=R,n.__webglViewFramebuffers=L,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D_ARRAY,null)}if(s){a.bindTexture(t.TEXTURE_CUBE_MAP,o.__webglTexture),P(t.TEXTURE_CUBE_MAP,e.texture,g);for(var x=0;6>x;x++)D(n.__webglFramebuffer[x],e,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+x);f(e.texture,g)&&h(t.TEXTURE_CUBE_MAP,e.texture,e.width,e.height),a.bindTexture(t.TEXTURE_CUBE_MAP,null)}else u||(a.bindTexture(t.TEXTURE_2D,o.__webglTexture),P(t.TEXTURE_2D,e.texture,g),D(n.__webglFramebuffer,e,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),f(e.texture,g)&&h(t.TEXTURE_2D,e.texture,e.width,e.height),a.bindTexture(t.TEXTURE_2D,null));e.depthBuffer&&U(e)},this.updateRenderTargetMipmap=function(e){var r=e.texture,i=m(e)||V;if(f(r,i)){var n=e.isWebGLRenderTargetCube?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,o=l.get(r).__webglTexture;a.bindTexture(n,o),h(n,r,e.width,e.height),a.bindTexture(n,null)}},this.updateMultisampleRenderTarget=function(e){if(e.isWebGLMultisampleRenderTarget)if(V){var r=l.get(e);t.bindFramebuffer(t.READ_FRAMEBUFFER,r.__webglMultisampledFramebuffer),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,r.__webglFramebuffer);var a=e.width,i=e.height,n=t.COLOR_BUFFER_BIT;e.depthBuffer&&(n|=t.DEPTH_BUFFER_BIT),e.stencilBuffer&&(n|=t.STENCIL_BUFFER_BIT),t.blitFramebuffer(0,0,a,i,0,0,a,i,n,t.NEAREST)}else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.')},this.safeSetTexture2D=O,this.safeSetTextureCube=G}a.d(r,'a',function(){return i});var n=a(1),o=a(3)},function(e,t,r){'use strict';function a(e,t,r){var a=r.isWebGL2;return{convert:function(r){var n;if(r===i._66)return e.UNSIGNED_BYTE;if(r===i._69)return e.UNSIGNED_SHORT_4_4_4_4;if(r===i._70)return e.UNSIGNED_SHORT_5_5_5_1;if(r===i._71)return e.UNSIGNED_SHORT_5_6_5;if(r===i.j)return e.BYTE;if(r===i._52)return e.SHORT;if(r===i._72)return e.UNSIGNED_SHORT;if(r===i.J)return e.INT;if(r===i._68)return e.UNSIGNED_INT;if(r===i.D)return e.FLOAT;if(r===i.I)return a?e.HALF_FLOAT:(n=t.get('OES_texture_half_float'),null===n?null:n.HALF_FLOAT_OES);if(r===i.e)return e.ALPHA;if(r===i._41)return e.RGB;if(r===i._19)return e.RGBA;if(r===i.U)return e.LUMINANCE;if(r===i.T)return e.LUMINANCE_ALPHA;if(r===i.u)return e.DEPTH_COMPONENT;if(r===i.v)return e.DEPTH_STENCIL;if(r===i._48)return e.RED;if(r===i._47||r===i._36||r===i._37||r===i._38)if(n=t.get('WEBGL_compressed_texture_s3tc'),null!==n){if(r===i._47)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===i._36)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===i._37)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===i._38)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===i._46||r===i._45||r===i._35||r===i._34)if(n=t.get('WEBGL_compressed_texture_pvrtc'),null!==n){if(r===i._46)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===i._45)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===i._35)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===i._34)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;return r===i._44?(n=t.get('WEBGL_compressed_texture_etc1'),null===n?null:n.COMPRESSED_RGB_ETC1_WEBGL):r===i._26||r===i._27||r===i._28||r===i._29||r===i._30||r===i._31||r===i._32||r===i._33||r===i._21||r===i._22||r===i._23||r===i._20||r===i._24||r===i._25?(n=t.get('WEBGL_compressed_texture_astc'),null===n?null:r):r===i._67?a?e.UNSIGNED_INT_24_8:(n=t.get('WEBGL_depth_texture'),null===n?null:n.UNSIGNED_INT_24_8_WEBGL):void 0}}}r.d(t,'a',function(){return a});var i=r(1)},function(e,t,r){'use strict';function a(e,t){function r(){if(void 0===w){var e=y.get('OVR_multiview2');if(w=null!==e&&!1===t.getContextAttributes().antialias,w){v=t.getParameter(e.MAX_VIEWS_OVR),_=new n.a(0,0,h),S=new l.a,M=[],T=[],E=[];for(var r=0;r<v;r++)M[r]=new s.a,T[r]=new o.a}}return w}function a(e){return e.isArrayCamera?e.cameras:(E[0]=e,E)}function i(e,r){for(var n=a(e),o=0;o<n.length;o++)M[o].copy(n[o].projectionMatrix);r.setValue(t,'projectionMatrices',M)}function d(e,r){for(var n=a(e),o=0;o<n.length;o++)M[o].copy(n[o].matrixWorldInverse);r.setValue(t,'viewMatrices',M)}function p(e,r,n){for(var o=a(r),s=0;s<o.length;s++)M[s].multiplyMatrices(o[s].matrixWorldInverse,e.matrixWorld),T[s].getNormalMatrix(M[s]);n.setValue(t,'modelViewMatrices',M),n.setValue(t,'normalMatrices',T)}function c(e){if(e.isArrayCamera===void 0)return!0;var t=e.cameras;if(t.length>v)return!1;for(var r=1,a=t.length;r<a;r++)if(t[0].viewport.z!==t[r].viewport.z||t[0].viewport.w!==t[r].viewport.w)return!1;return!0}function u(t){if(b?S.set(b.width,b.height):e.getDrawingBufferSize(S),t.isArrayCamera){var r=t.cameras[0].viewport;_.setSize(r.z,r.w),_.setNumViews(t.cameras.length)}else _.setSize(S.x,S.y),_.setNumViews(h)}function m(t){!1===c(t)||(b=e.getRenderTarget(),u(t),e.setRenderTarget(_))}function g(t){_!==e.getRenderTarget()||(e.setRenderTarget(b),f(t))}function f(e){var r=_,a=r.numViews,n=x.get(r).__webglViewFramebuffers,o=r.width,s=r.height;if(e.isArrayCamera)for(var l=0;l<a;l++){var i=e.cameras[l].viewport,d=i.x,p=i.y,c=d+i.z,u=p+i.w;t.bindFramebuffer(t.READ_FRAMEBUFFER,n[l]),t.blitFramebuffer(0,0,o,s,d,p,c,u,t.COLOR_BUFFER_BIT,t.NEAREST)}else t.bindFramebuffer(t.READ_FRAMEBUFFER,n[0]),t.blitFramebuffer(0,0,o,s,0,0,S.x,S.y,t.COLOR_BUFFER_BIT,t.NEAREST)}var h=2,y=e.extensions,x=e.properties,v=0,_,b,T,M,E,S,w;this.isAvailable=r,this.attachCamera=m,this.detachCamera=g,this.updateCameraProjectionMatricesUniform=i,this.updateCameraViewMatricesUniform=d,this.updateObjectMatricesUniforms=p}r.d(t,'a',function(){return a});var n=r(213),o=r(5),s=r(4),l=r(2)},function(e,t,r){'use strict';function a(e,t,r,a){i.a.call(this,e,t,a),this.depthBuffer=!1,this.stencilBuffer=!1,this.numViews=r}r.d(t,'a',function(){return a});var i=r(33);a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isWebGLMultiviewRenderTarget:!0,copy:function(e){return i.a.prototype.copy.call(this,e),this.numViews=e.numViews,this},setNumViews:function(e){return this.numViews!==e&&(this.numViews=e,this.dispose()),this}})},function(e,t,r){'use strict';function a(e){function t(){return null!==y&&!0===y.isPresenting}function r(){if(t()){var r=y.getEyeParameters('left');E=2*r.renderWidth*T,S=r.renderHeight*T,U=e.getPixelRatio(),e.getSize(D),e.setDrawingBufferSize(E,S,1),P.viewport.set(0,0,E/2,S),C.viewport.set(E/2,0,E/2,S),F.start(),h.dispatchEvent({type:'sessionstart'})}else h.enabled&&e.setDrawingBufferSize(D.width,D.height,U),F.stop(),h.dispatchEvent({type:'sessionend'})}function a(e){for(var t=navigator.getGamepads&&navigator.getGamepads(),r=0,a=t.length,i;r<a;r++)if(i=t[r],i&&('Daydream Controller'===i.id||'Gear VR Controller'===i.id||'Oculus Go Controller'===i.id||'OpenVR Gamepad'===i.id||i.id.startsWith('Oculus Touch')||i.id.startsWith('HTC Vive Focus')||i.id.startsWith('Spatial Controller'))){var n=i.hand;if(0===e&&(''===n||'right'===n))return i;if(1===e&&'left'===n)return i}}function f(){for(var e=0;e<v.length;e++){var t=v[e],r=a(e);if(r!==void 0&&r.pose!==void 0){if(null===r.pose)return;var i=r.pose;!1===i.hasPosition&&t.position.set(.2,-.6,-.05),null!==i.position&&t.position.fromArray(i.position),null!==i.orientation&&t.quaternion.fromArray(i.orientation),t.matrix.compose(t.position,t.quaternion,t.scale),t.matrix.premultiply(_),t.matrix.decompose(t.position,t.quaternion,t.scale),t.matrixWorldNeedsUpdate=!0,t.visible=!0;var n='Daydream Controller'===r.id?0:1;N[e]===void 0&&(N[e]=!1),N[e]!==r.buttons[n].pressed&&(N[e]=r.buttons[n].pressed,!0===N[e]?t.dispatchEvent({type:'selectstart'}):(t.dispatchEvent({type:'selectend'}),t.dispatchEvent({type:'select'}))),n=2,z[e]===void 0&&(z[e]=!1),r.buttons[n]!==void 0&&z[e]!==r.buttons[n].pressed&&(z[e]=r.buttons[n].pressed,!0===z[e]?t.dispatchEvent({type:'squeezestart'}):(t.dispatchEvent({type:'squeezeend'}),t.dispatchEvent({type:'squeeze'})))}else t.visible=!1}}function i(e,t){null!==t&&4===t.length&&e.set(t[0]*E,t[1]*S,t[2]*E,t[3]*S)}var h=this,y=null,x=null,v=[],_=new o.a,b=new o.a,T=1,M='local-floor',E,S;'undefined'!=typeof window&&'VRFrameData'in window&&(x=new window.VRFrameData,window.addEventListener('vrdisplaypresentchange',r,!1));var w=new o.a,A=new p.a,R=new l.a,L=new u.a,P=new u.a;P.viewport=new d.a,P.layers.enable(1);var C=new u.a;C.viewport=new d.a,C.layers.enable(2);var I=new c.a([P,C]);I.layers.enable(1),I.layers.enable(2);var D=new s.a,N=[],z=[],U;this.enabled=!1,this.getController=function(e){var t=v[e];return void 0===t&&(t=new n.a,t.matrixAutoUpdate=!1,t.visible=!1,v[e]=t),t},this.getDevice=function(){return y},this.setDevice=function(e){e!==void 0&&(y=e),F.setContext(e)},this.setFramebufferScaleFactor=function(e){T=e},this.setReferenceSpaceType=function(e){M=e},this.getCamera=function(e){var t='local-floor'===M?1.6:0;if(y.depthNear=e.near,y.depthFar=e.far,y.getFrameData(x),'local-floor'===M){var r=y.stageParameters;r?_.fromArray(r.sittingToStandingTransform):_.makeTranslation(0,t,0)}var a=x.pose;L.matrix.copy(_),L.matrix.decompose(L.position,L.quaternion,L.scale),null!==a.orientation&&(A.fromArray(a.orientation),L.quaternion.multiply(A)),null!==a.position&&(A.setFromRotationMatrix(_),R.fromArray(a.position),R.applyQuaternion(A),L.position.add(R)),L.updateMatrixWorld(),e.matrixWorld.copy(L.matrixWorld);for(var n=e.children,o=0,s=n.length;o<s;o++)n[o].updateMatrixWorld(!0);P.near=e.near,C.near=e.near,P.far=e.far,C.far=e.far,P.matrixWorldInverse.fromArray(x.leftViewMatrix),C.matrixWorldInverse.fromArray(x.rightViewMatrix),b.getInverse(_),'local-floor'===M&&(P.matrixWorldInverse.multiply(b),C.matrixWorldInverse.multiply(b));var l=e.parent;null!==l&&(w.getInverse(l.matrixWorld),P.matrixWorldInverse.multiply(w),C.matrixWorldInverse.multiply(w)),P.matrixWorld.getInverse(P.matrixWorldInverse),C.matrixWorld.getInverse(C.matrixWorldInverse),P.projectionMatrix.fromArray(x.leftProjectionMatrix),C.projectionMatrix.fromArray(x.rightProjectionMatrix),Object(g.a)(I,P,C);var d=y.getLayers();if(d.length){var p=d[0];i(P.viewport,p.leftBounds),i(C.viewport,p.rightBounds)}return f(),I},this.getStandingMatrix=function(){return _},this.isPresenting=t;var F=new m.a;this.setAnimationLoop=function(e){F.setAnimationLoop(e),t()&&F.start()},this.submitFrame=function(){t()&&y.submitFrame()},this.dispose=function(){'undefined'!=typeof window&&window.removeEventListener('vrdisplaypresentchange',r)},this.setFrameOfReferenceType=function(){console.warn('THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.')}}r.d(t,'a',function(){return a});var i=r(8),n=r(34),o=r(4),s=r(2),l=r(0),d=r(10),p=r(13),c=r(35),u=r(22),m=r(19),g=r(37);Object.assign(a.prototype,i.a.prototype)},function(e,t,r){'use strict';function a(e,t){function r(){return null!==x&&null!==v}function a(e){for(var t=0;t<T.length;t++)M[t]===e.inputSource&&T[t].dispatchEvent({type:e.type})}function i(){e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),R.stop(),y.dispatchEvent({type:'sessionend'})}function u(e){v=e,R.setContext(x),R.start(),y.dispatchEvent({type:'sessionstart'})}function m(){for(var e=0;e<T.length;e++)M[e]=g(e)}function g(e){for(var t=x.inputSources,r=0;r<t.length;r++){var a=t[r],i=a.handedness;if(0===e&&('none'===i||'right'===i))return a;if(1===e&&'left'===i)return a}}function f(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.getInverse(e.matrixWorld)}function h(t,r){if(b=r.getViewerPose(v),null!==b){var a=b.views,n=x.renderState.baseLayer;e.setFramebuffer(n.framebuffer);for(var o=0;o<a.length;o++){var i=a[o],s=n.getViewport(i),l=i.transform.inverse.matrix,d=w.cameras[o];d.matrix.fromArray(l).getInverse(d.matrix),d.projectionMatrix.fromArray(i.projectionMatrix),d.viewport.set(s.x,s.y,s.width,s.height),0===o&&w.matrix.copy(d.matrix)}}for(var o=0;o<T.length;o++){var p=T[o],c=M[o];if(c){var u=r.getPose(c.targetRaySpace,v);if(null!==u){p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.visible=!0;continue}}p.visible=!1}A&&A(t)}var y=this,x=null,v=null,_='local-floor',b=null,T=[],M=[],E=new d.a;E.layers.enable(1),E.viewport=new s.a;var S=new d.a;S.layers.enable(2),S.viewport=new s.a;var w=new l.a([E,S]);w.layers.enable(1),w.layers.enable(2),this.enabled=!1,this.getController=function(e){var t=T[e];return void 0===t&&(t=new n.a,t.matrixAutoUpdate=!1,t.visible=!1,T[e]=t),t},this.setFramebufferScaleFactor=function(){},this.setReferenceSpaceType=function(e){_=e},this.getSession=function(){return x},this.setSession=function(e){x=e,null!==x&&(x.addEventListener('select',a),x.addEventListener('selectstart',a),x.addEventListener('selectend',a),x.addEventListener('squeeze',a),x.addEventListener('squeezestart',a),x.addEventListener('squeezeend',a),x.addEventListener('end',i),x.updateRenderState({baseLayer:new XRWebGLLayer(x,t)}),x.requestReferenceSpace(_).then(u),x.addEventListener('inputsourceschange',m),m())},this.getCamera=function(e){var t=e.parent,r=w.cameras;f(w,t);for(var a=0;a<r.length;a++)f(r[a],t);e.matrixWorld.copy(w.matrixWorld);for(var i=e.children,a=0,n=i.length;a<n;a++)i[a].updateMatrixWorld(!0);return Object(c.a)(w,E,S),w},this.isPresenting=r;var A=null,R=new p.a;R.setAnimationLoop(h),this.setAnimationLoop=function(e){A=e},this.dispose=function(){},this.getStandingMatrix=function(){return console.warn('THREE.WebXRManager: getStandingMatrix() is no longer needed.'),new o.a},this.getDevice=function(){console.warn('THREE.WebXRManager: getDevice() has been deprecated.')},this.setDevice=function(){console.warn('THREE.WebXRManager: setDevice() has been deprecated.')},this.setFrameOfReferenceType=function(){console.warn('THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.')},this.submitFrame=function(){}}r.d(t,'a',function(){return a});var i=r(8),n=r(34),o=r(4),s=r(10),l=r(35),d=r(22),p=r(19),c=r(37);Object.assign(a.prototype,i.a.prototype)},function(e,t,r){'use strict';function a(e,t,r,a,n,o){i.a.call(this),this.type='OrthographicCamera',this.zoom=1,this.view=null,this.left=e===void 0?-1:e,this.right=t===void 0?1:t,this.top=r===void 0?1:r,this.bottom=a===void 0?-1:a,this.near=n===void 0?.1:n,this.far=o===void 0?2e3:o,this.updateProjectionMatrix()}r.d(t,'a',function(){return a});var i=r(36),n=r(7);a.prototype=Object.assign(Object.create(i.a.prototype),{constructor:a,isOrthographicCamera:!0,copy:function(e,t){return i.a.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this},setViewOffset:function(e,t,r,a,i,n){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=i,this.view.height=n,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2,i=r-e,n=r+e,o=a+t,s=a-t;if(null!==this.view&&this.view.enabled){var l=this.zoom/(this.view.width/this.view.fullWidth),d=this.zoom/(this.view.height/this.view.fullHeight),p=(this.right-this.left)/this.view.width,c=(this.top-this.bottom)/this.view.height;i+=p*(this.view.offsetX/l),n=i+p*(this.view.width/l),o-=c*(this.view.offsetY/d),s=o-c*(this.view.height/d)}this.projectionMatrix.makeOrthographic(i,n,o,s,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var t=n.a.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}})},function(e,t,r){'use strict';function a(e){s.a.call(this,e)}r.d(t,'a',function(){return a});var i=r(1),n=r(218),o=r(6),s=r(38);a.prototype=Object.assign(Object.create(s.a.prototype),{constructor:a,load:function(e,t,r,a){var s=new o.a,l=new n.a(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(r){s.image=r;var a=0<e.search(/\.jpe?g($|\?)/i)||0===e.search(/^data\:image\/jpeg/);s.format=a?i._41:i._19,s.needsUpdate=!0,void 0!==t&&t(s)},r,a),s}})},function(e,t,r){'use strict';function a(e){n.a.call(this,e)}r.d(t,'a',function(){return a});var i=r(219),n=r(38);a.prototype=Object.assign(Object.create(n.a.prototype),{constructor:a,load:function(e,t,r,a){function n(){d.removeEventListener('load',n,!1),d.removeEventListener('error',o,!1),i.a.add(e,this),t&&t(this),s.manager.itemEnd(e)}function o(t){d.removeEventListener('load',n,!1),d.removeEventListener('error',o,!1),a&&a(t),s.manager.itemError(e),s.manager.itemEnd(e)}void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);var s=this,l=i.a.get(e);if(void 0!==l)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;var d=document.createElementNS('http://www.w3.org/1999/xhtml','img');return d.addEventListener('load',n,!1),d.addEventListener('error',o,!1),'data:'!==e.substr(0,5)&&void 0!==this.crossOrigin&&(d.crossOrigin=this.crossOrigin),s.manager.itemStart(e),d.src=e,d}})},function(e,t,r){'use strict';r.d(t,'a',function(){return a});var a={enabled:!1,files:{},add:function(e,t){!1===this.enabled||(this.files[e]=t)},get:function(e){return!1===this.enabled?void 0:this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}}},function(e,t,r){'use strict';r.d(t,'a',function(){return a});var a=new function(e,t,r){var a=this,i=!1,n=0,o=0,s=void 0,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(e){o++,!1==i&&a.onStart!==void 0&&a.onStart(e,n,o),i=!0},this.itemEnd=function(e){n++,a.onProgress!==void 0&&a.onProgress(e,n,o),n==o&&(i=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(e){a.onError!==void 0&&a.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return d.push(e,t),this},this.removeHandler=function(e){var t=d.indexOf(e);return-1!==t&&d.splice(t,2),this},this.getHandler=function(e){for(var t=0,r=d.length;t<r;t+=2){var a=d[t],i=d[t+1];if(a.global&&(a.lastIndex=0),a.test(e))return i}return null}}},function(e,t,r){'use strict';function a(e,t,r,a,o,s,l,d,p){n.a.call(this,e,t,r,a,o,s,l,d,p),this.format=l===void 0?i._41:l,this.minFilter=s===void 0?i.O:s,this.magFilter=o===void 0?i.O:o,this.generateMipmaps=!1}r.d(t,'a',function(){return a});var i=r(1),n=r(6);a.prototype=Object.assign(Object.create(n.a.prototype),{constructor:a,isVideoTexture:!0,update:function(){var e=this.image;e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}})},function(e,t,r){'use strict';r.d(t,'a',function(){return n});var a=r(39),i=r(223),n=a.y.registerPlugin(i.a)||a.y,o=n.core.Tween},function(e,t,a){'use strict';a.d(t,'a',function(){return Ae});var i=a(39),n=function(){return'undefined'!=typeof window},o={},s=180/m,v=m/180,_=l,d=1e8,c=/([A-Z])/g,y=/(left|right|width|margin|padding|x)/i,x=/[\s,\(]\S/,b={autoAlpha:'opacity,visibility',scale:'scaleX,scaleY',alpha:'opacity'},T=function(e,t){return t.set(t.t,t.p,u(1e4*(t.s+t.c*e))/1e4+t.u,t)},M=function(e,t){return t.set(t.t,t.p,1===e?t.e:u(1e4*(t.s+t.c*e))/1e4+t.u,t)},E=function(e,t){return t.set(t.t,t.p,e?u(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},S=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(0>r?-.5:.5))+t.u,t)},w=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},A=function(e,t){return t.set(t.t,t.p,1===e?t.e:t.b,t)},R=function(e,t,r){return e.style[t]=r},L=function(e,t,r){return e.style.setProperty(t,r)},P=function(e,t,r){return e._gsap[t]=r},C=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},I=function(e,t,r,a,i){var n=e._gsap;n.scaleX=n.scaleY=r,n.renderTransform(i,n)},D=function(e,t,r,a,i){var n=e._gsap;n[t]=r,n.renderTransform(i,n)},N='transform',U=N+'Origin',z=function(t,r){var a=_e.createElementNS?_e.createElementNS((r||'http://www.w3.org/1999/xhtml').replace(/^https/,'http'),t):_e.createElement(t);return a.style?a:_e.createElement(t)},F=function e(t,r,a){var i=getComputedStyle(t);return i[r]||i.getPropertyValue(r.replace(c,'-$1').toLowerCase())||i.getPropertyValue(r)||!a&&e(t,O(r)||r,1)||''},B=['O','Moz','ms','Ms','Webkit'],O=function(t,r,a){var n=r||Me,e=n.style,o=5;if(t in e&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(B[o]+t in e););return 0>o?null:(3==o?'ms':0<=o?B[o]:'')+t},G=function(){n()&&window.document&&(ve=window,_e=ve.document,be=_e.documentElement,Me=z('div')||{style:{}},Ee=z('div'),N=O(N),U=N+'Origin',Me.style.cssText='border-width:0;line-height:0;position:absolute;padding:0',we=!!O('perspective'),Te=1)},V=function e(t){var r=z('svg',this.ownerSVGElement&&this.ownerSVGElement.getAttribute('xmlns')||'http://www.w3.org/2000/svg'),a=this.parentNode,i=this.nextSibling,n=this.style.cssText,o;if(be.appendChild(r),r.appendChild(this),this.style.display='block',t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch(t){}else this._gsapBBox&&(o=this._gsapBBox());return a&&(i?a.insertBefore(this,i):a.appendChild(this)),be.removeChild(r),this.style.cssText=n,o},H=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},k=function(e){var t;try{t=e.getBBox()}catch(r){t=V.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===V||(t=V.call(e,!0)),!t||t.width||t.x||t.y?t:{x:+H(e,['x','cx','x1'])||0,y:+H(e,['y','cy','y1'])||0,width:0,height:0}},W=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&k(t))},j=function(e,t){if(t){var r=e.style;t in o&&t!==U&&(t=N),r.removeProperty?(('ms'===t.substr(0,2)||'webkit'===t.substr(0,6))&&(t='-'+t),r.removeProperty(t.replace(c,'-$1').toLowerCase())):r.removeAttribute(t)}},X=function(e,t,r,a,n,o){var s=new i.b(e._pt,t,r,0,1,o?A:w);return e._pt=s,s.b=a,s.e=n,e._props.push(r),s},q={deg:1,rad:1,turn:1},Y=function e(t,r,a,n){var s=parseFloat(a)||0,l=(a+'').trim().substr((s+'').length)||'px',d=Me.style,p=y.test(r),c='svg'===t.tagName.toLowerCase(),u=(c?'client':'offset')+(p?'Width':'Height'),m=100,g='px'===n,f='%'===n,h,x,v,_;return n===l||!s||q[n]||q[l]?s:('px'===l||g||(s=e(t,r,a,'px')),_=t.getCTM&&W(t),(f||'%'===l)&&(o[r]||~r.indexOf('adius')))?(h=_?t.getBBox()[p?'width':'height']:t[u],Object(i.u)(f?s/h*m:s/100*h)):(d[p?'width':'height']=m+(g?l:n),x=~r.indexOf('adius')||'em'===n&&t.appendChild&&!c?t:t.parentNode,_&&(x=(t.ownerSVGElement||{}).parentNode),x&&x!==_e&&x.appendChild||(x=_e.body),v=x._gsap,v&&f&&v.width&&p&&v.time===i.w.time)?Object(i.u)(s/v.width*m):((f||'%'===l)&&(d.position=F(t,'position')),x===t&&(d.position='static'),x.appendChild(Me),h=Me[u],x.removeChild(Me),d.position='absolute',p&&f&&(v=Object(i.h)(x),v.time=i.w.time,v.width=x[u]),Object(i.u)(g?h*s/m:h&&s?m/h*s:0))},Z=function(e,t,r,a){var n;return Te||G(),t in b&&'transform'!==t&&(t=b[t],~t.indexOf(',')&&(t=t.split(',')[0])),o[t]&&'transform'!==t?(n=se(e,a),n='transformOrigin'===t?n.svg?n.origin:le(F(e,U))+' '+n.zOrigin+'px':n[t]):(n=e.style[t],(!n||'auto'===n||a||~(n+'').indexOf('calc('))&&(n=ee[t]&&ee[t](e,t,r)||F(e,t)||Object(i.i)(e,t)||('opacity'===t?1:0))),r&&!~(n+'').trim().indexOf(' ')?Y(e,t,n,r)+r:n},J=function(e,t,r,n){if(!r||'none'===r){var o=O(t,e,1),l=o&&F(e,o,1);l&&l!==r?(t=o,r=l):'borderColor'===t&&(r=F(e,'borderTopColor'))}var s=new i.b(this._pt,e.style,t,0,1,i.s),d=0,p=0,c,a,m,g,f,h,y,x,v,_,b,T;if(s.b=r,s.e=n,r+='',n+='','auto'===n&&(e.style[t]=n,n=F(e,t)||n,e.style[t]=r),c=[r,n],Object(i.e)(c),r=c[0],n=c[1],m=r.match(i.o)||[],T=n.match(i.o)||[],T.length){for(;a=i.o.exec(n);)y=a[0],v=n.substring(d,a.index),f?f=(f+1)%5:('rgba('===v.substr(-5)||'hsla('===v.substr(-5))&&(f=1),y!==(h=m[p++]||'')&&(g=parseFloat(h)||0,b=h.substr((g+'').length),'='===y.charAt(1)&&(y=Object(i.p)(g,y)+b),x=parseFloat(y),_=y.substr((x+'').length),d=i.o.lastIndex-_.length,!_&&(_=_||i.f.units[t]||b,d===n.length&&(n+=_,s.e+=_)),b!==_&&(g=Y(e,t,h,_)||0),s._pt={_next:s._pt,p:v||1==p?v:',',s:g,c:x-g,m:f&&4>f||'zIndex'===t?u:0});s.c=d<n.length?n.substring(d,n.length):''}else s.r='display'===t&&'none'===n?A:w;return i.r.test(n)&&(s.e=0),this._pt=s,s},Q={top:'0%',bottom:'100%',left:'0%',right:'100%',center:'50%'},K=function(e){var t=e.split(' '),r=t[0],a=t[1]||'50%';return('top'===r||'bottom'===r||'left'===a||'right'===a)&&(e=r,r=a,a=e),t[0]=Q[r]||r,t[1]=Q[a]||a,t.join(' ')},$=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,a=r.style,n=t.u,s=r._gsap,l,d,p;if('all'===n||!0===n)a.cssText='',d=1;else for(n=n.split(','),p=n.length;-1<--p;)l=n[p],o[l]&&(d=1,l='transformOrigin'===l?U:N),j(r,l);d&&(j(r,N),s&&(s.svg&&r.removeAttribute('transform'),se(r,1),s.uncache=1))}},ee={clearProps:function(e,t,r,a,n){if('isFromStart'!==n.data){var o=e._pt=new i.b(e._pt,t,r,0,0,$);return o.u=a,o.pr=-10,o.tween=n,e._props.push(r),1}}},te=[1,0,0,1,0,0],re={},ae=function(e){return'matrix(1, 0, 0, 1, 0, 0)'===e||'none'===e||!e},ie=function(e){var t=F(e,N);return ae(t)?te:t.substr(7).match(i.n).map(i.u)},ne=function(e,t){var r=e._gsap||Object(i.h)(e),a=e.style,n=ie(e),o,s,l,d;return r.svg&&e.getAttribute('transform')?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],'1,0,0,1,0,0'===n.join(',')?te:n):(n!==te||e.offsetParent||e===be||r.svg||(l=a.display,a.display='block',o=e.parentNode,o&&e.offsetParent||(d=1,s=e.nextSibling,be.appendChild(e)),n=ie(e),l?a.display=l:j(e,'display'),d&&(s?o.insertBefore(e,s):o?o.appendChild(e):be.removeChild(e))),t&&6<n.length?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},oe=function(e,t,r,i,n,o){var s=e._gsap,l=n||ne(e,!0),p=s.xOrigin||0,u=s.yOrigin||0,m=s.xOffset||0,g=s.yOffset||0,f=l[0],a=l[1],h=l[2],v=l[3],d=l[4],_=l[5],T=t.split(' '),M=parseFloat(T[0])||0,E=parseFloat(T[1])||0,S,w,A,x;r?l!==te&&(w=f*v-a*h)&&(A=M*(v/w)+E*(-h/w)+(h*_-v*d)/w,x=M*(-a/w)+E*(f/w)-(f*_-a*d)/w,M=A,E=x):(S=k(e),M=S.x+(~T[0].indexOf('%')?M/100*S.width:M),E=S.y+(~(T[1]||T[0]).indexOf('%')?E/100*S.height:E)),i||!1!==i&&s.smooth?(d=M-p,_=E-u,s.xOffset=m+(d*f+_*h)-d,s.yOffset=g+(d*a+_*v)-_):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=E,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!r,e.style[U]='0px 0px',o&&(X(o,s,'xOrigin',p,M),X(o,s,'yOrigin',u,E),X(o,s,'xOffset',m,s.xOffset),X(o,s,'yOffset',g,s.yOffset)),e.setAttribute('data-svg-origin',M+' '+E)},se=function(e,t){var r=e._gsap||new i.a(e);if('x'in r&&!t&&!r.uncache)return r;var n=e.style,o=0>r.scaleX,l='px',m='deg',T=F(e,U)||'0',M,E,S,w,A,R,L,P,C,I,D,z,B,O,G,V,H,k,a,b,j,d,X,q,Y,Z,J,Q,K,$,ee,re;return M=E=S=R=L=P=C=I=D=0,w=A=1,r.svg=!!(e.getCTM&&W(e)),O=ne(e,r.svg),r.svg&&(q=(!r.uncache||'0px 0px'===T)&&!t&&e.getAttribute('data-svg-origin'),oe(e,q||T,!!q||r.originIsAbsolute,!1!==r.smooth,O)),z=r.xOrigin||0,B=r.yOrigin||0,O!==te&&(k=O[0],a=O[1],b=O[2],j=O[3],M=d=O[4],E=X=O[5],6===O.length?(w=p(k*k+a*a),A=p(j*j+b*b),R=k||a?_(a,k)*s:0,C=b||j?_(b,j)*s+R:0,C&&(A*=f(g(C*v))),r.svg&&(M-=z-(z*k+B*b),E-=B-(z*a+B*j))):(re=O[6],$=O[7],J=O[8],Q=O[9],K=O[10],ee=O[11],M=O[12],E=O[13],S=O[14],G=_(re,K),L=G*s,G&&(V=g(-G),H=h(-G),q=d*V+J*H,Y=X*V+Q*H,Z=re*V+K*H,J=d*-H+J*V,Q=X*-H+Q*V,K=re*-H+K*V,ee=$*-H+ee*V,d=q,X=Y,re=Z),G=_(-b,K),P=G*s,G&&(V=g(-G),H=h(-G),q=k*V-J*H,Y=a*V-Q*H,Z=b*V-K*H,ee=j*H+ee*V,k=q,a=Y,b=Z),G=_(a,k),R=G*s,G&&(V=g(G),H=h(G),q=k*V+a*H,Y=d*V+X*H,a=a*V-k*H,X=X*V-d*H,k=q,d=Y),L&&359.9<f(L)+f(R)&&(L=R=0,P=180-P),w=Object(i.u)(p(k*k+a*a+b*b)),A=Object(i.u)(p(X*X+re*re)),G=_(d,X),C=2e-4<f(G)?G*s:0,D=ee?1/(0>ee?-ee:ee):0),r.svg&&(q=e.getAttribute('transform'),r.forceCSS=e.setAttribute('transform','')||!ae(F(e,N)),q&&e.setAttribute('transform',q))),90<f(C)&&270>f(C)&&(o?(w*=-1,C+=0>=R?180:-180,R+=0>=R?180:-180):(A*=-1,C+=0>=C?180:-180)),t=t||r.uncache,r.x=M-((r.xPercent=M&&(!t&&r.xPercent||(u(e.offsetWidth/2)===u(-M)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+l,r.y=E-((r.yPercent=E&&(!t&&r.yPercent||(u(e.offsetHeight/2)===u(-E)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+l,r.z=S+l,r.scaleX=Object(i.u)(w),r.scaleY=Object(i.u)(A),r.rotation=Object(i.u)(R)+m,r.rotationX=Object(i.u)(L)+m,r.rotationY=Object(i.u)(P)+m,r.skewX=C+m,r.skewY=I+m,r.transformPerspective=D+l,(r.zOrigin=parseFloat(T.split(' ')[2])||0)&&(n[U]=le(T)),r.xOffset=r.yOffset=0,r.force3D=i.f.force3D,r.renderTransform=r.svg?fe:we?ge:pe,r.uncache=0,r},le=function(e){return(e=e.split(' '))[0]+' '+e[1]},de=function(e,t,r){var a=Object(i.x)(t);return Object(i.u)(parseFloat(t)+parseFloat(Y(e,'x',r+'px',a)))+a},pe=function(e,t){t.z='0px',t.rotationY=t.rotationX='0deg',t.force3D=0,ge(e,t)},ce='0deg',ue='0px',me=') ',ge=function(e,t){var r=t||this,a=r.xPercent,i=r.yPercent,n=r.x,o=r.y,s=r.z,l=r.rotation,d=r.rotationY,p=r.rotationX,c=r.skewX,u=r.skewY,m=r.scaleX,f=r.scaleY,y=r.transformPerspective,x=r.force3D,_=r.target,b=r.zOrigin,T='',M='auto'===x&&e&&1!==e||!0===x;if(b&&(p!==ce||d!==ce)){var E=parseFloat(d)*v,S=h(E),w=g(E),A;E=parseFloat(p)*v,A=g(E),n=de(_,n,S*A*-b),o=de(_,o,-h(E)*-b),s=de(_,s,w*A*-b+b)}y!==ue&&(T+='perspective('+y+me),(a||i)&&(T+='translate('+a+'%, '+i+'%) '),(M||n!==ue||o!==ue||s!==ue)&&(T+=s!==ue||M?'translate3d('+n+', '+o+', '+s+') ':'translate('+n+', '+o+me),l!==ce&&(T+='rotate('+l+me),d!==ce&&(T+='rotateY('+d+me),p!==ce&&(T+='rotateX('+p+me),(c!==ce||u!==ce)&&(T+='skew('+c+', '+u+me),(1!==m||1!==f)&&(T+='scale('+m+', '+f+me),_.style[N]=T||'translate(0, 0)'},fe=function(e,t){var a=t||this,n=a.xPercent,o=a.yPercent,s=a.x,l=a.y,d=a.rotation,c=a.skewX,u=a.skewY,m=a.scaleX,f=a.scaleY,y=a.target,x=a.xOrigin,_=a.yOrigin,b=a.xOffset,T=a.yOffset,M=a.forceCSS,E=parseFloat(s),S=parseFloat(l),w,A,R,L,P;d=parseFloat(d),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,d+=u),d||c?(d*=v,c*=v,w=g(d)*m,A=h(d)*m,R=h(d-c)*-f,L=g(d-c)*f,c&&(u*=v,P=r(c-u),P=p(1+P*P),R*=P,L*=P,u&&(P=r(u),P=p(1+P*P),w*=P,A*=P)),w=Object(i.u)(w),A=Object(i.u)(A),R=Object(i.u)(R),L=Object(i.u)(L)):(w=m,L=f,A=R=0),(E&&!~(s+'').indexOf('px')||S&&!~(l+'').indexOf('px'))&&(E=Y(y,'x',s,'px'),S=Y(y,'y',l,'px')),(x||_||b||T)&&(E=Object(i.u)(E+x-(x*w+_*R)+b),S=Object(i.u)(S+_-(x*A+_*L)+T)),(n||o)&&(P=y.getBBox(),E=Object(i.u)(E+n/100*P.width),S=Object(i.u)(S+o/100*P.height)),P='matrix('+w+','+A+','+R+','+L+','+E+','+S+')',y.setAttribute('transform',P),M&&(y.style[N]=P)},he=function(e,t,r,a,n){var o=360,l=Object(i.k)(n),p=parseFloat(n)*(l&&~n.indexOf('rad')?s:1),c=p-a,u=a+c+'deg',m,g;return l&&(m=n.split('_')[1],'short'===m&&(c%=o,c!==c%(o/2)&&(c+=0>c?o:-o)),'cw'===m&&0>c?c=(c+o*d)%o-~~(c/o)*o:'ccw'===m&&0<c&&(c=(c-o*d)%o-~~(c/o)*o)),e._pt=g=new i.b(e._pt,t,r,a,c,M),g.e=u,g.u='deg',e._props.push(r),g},ye=function(e,t){for(var r in t)e[r]=t[r];return e},xe=function(e,t,r){var a=ye({},r._gsap),n=r.style,s,l,d,p,c,u,m,g;for(l in a.svg?(d=r.getAttribute('transform'),r.setAttribute('transform',''),n[N]=t,s=se(r,1),j(r,N),r.setAttribute('transform',d)):(d=getComputedStyle(r)[N],n[N]=t,s=se(r,1),n[N]=d),o)d=a[l],p=s[l],d!==p&&0>'perspective,force3D,transformOrigin,svgOrigin'.indexOf(l)&&(m=Object(i.x)(d),g=Object(i.x)(p),c=m===g?parseFloat(d):Y(r,l,d,g),u=parseFloat(p),e._pt=new i.b(e._pt,s,l,c,u-c,T),e._pt.u=g||0,e._props.push(l));ye(s,a)},ve,_e,be,Te,Me,Ee,Se,we;/*!
 * CSSPlugin 3.10.2
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/Object(i.g)('padding,margin,Width,Radius',function(e,a){var i='Top',t='Right',r='Bottom',n='Left',o=(3>a?[i,t,r,n]:[i+n,i+t,r+t,r+n]).map(function(t){return 2>a?e+t:'border'+t+e});ee[1<a?'border'+e:e]=function(e,t,r,i,n){var s,a;return 4>arguments.length?(s=o.map(function(t){return Z(e,t,r)}),a=s.join(' '),5===a.split(s[0]).length?s[0]:a):void(s=(i+'').split(' '),a={},o.forEach(function(e,t){return a[e]=s[t]=s[t]||s[0|(t-1)/2]}),e.init(t,a,n))}});var Ae={name:'css',register:G,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,a,n){var s=this._props,l=e.style,d=r.vars.startAt,c,u,m,g,f,h,y,p,v,_,M,w,A,R,L;for(y in Te||G(),t)if('autoRound'!==y&&(u=t[y],!(i.q[y]&&Object(i.c)(y,t,r,a,e,n))))if(f=typeof u,h=ee[y],'function'===f&&(u=u.call(r,a,e,n),f=typeof u),'string'===f&&~u.indexOf('random(')&&(u=Object(i.t)(u)),h)h(this,e,y,u,r)&&(L=1);else if('--'===y.substr(0,2))c=(getComputedStyle(e).getPropertyValue(y)+'').trim(),u+='',i.d.lastIndex=0,i.d.test(c)||(p=Object(i.x)(c),v=Object(i.x)(u)),v?p!==v&&(c=Y(e,y,c,v)+v):p&&(u+=p),this.add(l,'setProperty',c,u,a,n,0,0,y),s.push(y);else if('undefined'!==f){if(d&&y in d?(c='function'==typeof d[y]?d[y].call(r,a,e,n):d[y],Object(i.k)(c)&&~c.indexOf('random(')&&(c=Object(i.t)(c)),Object(i.x)(c+'')||(c+=i.f.units[y]||Object(i.x)(Z(e,y))||''),'='===(c+'').charAt(1)&&(c=Z(e,y))):c=Z(e,y),g=parseFloat(c),_='string'===f&&'='===u.charAt(1)&&u.substr(0,2),_&&(u=u.substr(2)),m=parseFloat(u),y in b&&('autoAlpha'===y&&(1===g&&'hidden'===Z(e,'visibility')&&m&&(g=0),X(this,l,'visibility',g?'inherit':'hidden',m?'inherit':'hidden',!m)),'scale'!==y&&'transform'!==y&&(y=b[y],~y.indexOf(',')&&(y=y.split(',')[0]))),M=y in o,!M)y in l||(y=O(y)||y);else if(w||(A=e._gsap,A.renderTransform&&!t.parseTransform||se(e,t.parseTransform),R=!1!==t.smoothOrigin&&A.smooth,w=this._pt=new i.b(this._pt,l,N,0,1,A.renderTransform,A,0,-1),w.dep=1),'scale'===y)this._pt=new i.b(this._pt,A,'scaleY',A.scaleY,(_?Object(i.p)(A.scaleY,_+m):m)-A.scaleY||0),s.push('scaleY',y),y+='X';else if('transformOrigin'===y){u=K(u),A.svg?oe(e,u,0,R,0,this):(v=parseFloat(u.split(' ')[2])||0,v!==A.zOrigin&&X(this,A,'zOrigin',A.zOrigin,v),X(this,l,y,le(c),le(u)));continue}else if('svgOrigin'===y){oe(e,u,1,R,0,this);continue}else if(y in re){he(this,A,y,g,_?Object(i.p)(g,_+u):u);continue}else if('smoothOrigin'===y){X(this,A,'smooth',A.smooth,u);continue}else if('force3D'===y){A[y]=u;continue}else if('transform'===y){xe(this,u,e);continue}if(M||(m||0===m)&&(g||0===g)&&!x.test(u)&&y in l)p=(c+'').substr((g+'').length),m||(m=0),v=Object(i.x)(u)||(y in i.f.units?i.f.units[y]:p),p!==v&&(g=Y(e,y,c,v)),this._pt=new i.b(this._pt,M?A:l,y,g,(_?Object(i.p)(g,_+m):m)-g,M||'px'!==v&&'zIndex'!==y||!1===t.autoRound?T:S),this._pt.u=v||0,p!==v&&'%'!==v&&(this._pt.b=c,this._pt.r=E);else if(!!(y in l))J.call(this,e,y,c,_?_+u:u);else if(y in e)this.add(e,y,c||e[y],_?_+u:u,a,n);else{Object(i.m)(y,u);continue}s.push(y)}L&&Object(i.v)(this)},get:Z,aliases:b,getSetter:function(e,t,r){var a=b[t];return a&&0>a.indexOf(',')&&(t=a),t in o&&t!==U&&(e._gsap.x||Z(e,'x'))?r&&Se===r?'scale'===t?C:P:(Se=r||{})&&('scale'===t?I:D):e.style&&!Object(i.l)(e.style[t])?R:~t.indexOf('-')?L:Object(i.j)(e,t)},core:{_removeProperty:j,_getMatrix:ne}};i.y.utils.checkPrefix=O,function(e,t,r,a){var n=Object(i.g)(e+','+t+','+r,function(e){o[e]=1});Object(i.g)(t,function(e){i.f.units[e]='deg',re[e]=1}),b[n[13]]=e+','+t,Object(i.g)(a,function(e){var t=e.split(':');b[t[1]]=n[t[0]]})}('x,y,z,scale,scaleX,scaleY,xPercent,yPercent','rotation,rotationX,rotationY,skewX,skewY','transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective','0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'),Object(i.g)('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',function(e){i.f.units[e]='px'}),i.y.registerPlugin(Ae)},function(e,t){'use strict';const r=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;t.b=r;const a=`
varying vec2 vUv;
uniform float dispFactor;
uniform sampler2D disp;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float texture1Alpha;
uniform float texture2Alpha;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec2 resolution;
uniform vec2 imageResolution;
uniform vec2 sliderResolution;
uniform vec2 u_rgbPosition;
uniform vec2 u_rgbVelocity;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

vec2 centeredAspectRatio(vec2 uvs, vec2 factor, vec2 ratio, vec2 distortedPosition){
  return uvs * ratio + (1.0 - ratio) * 0.5 * factor - factor /2. + 0.5 + distortedPosition;
}

void main() {
  vec2 normalizedRgbPos = u_rgbPosition / sliderResolution;
  normalizedRgbPos.y = 1. - normalizedRgbPos.y; 
  vec2 vel = u_rgbVelocity;
  float dist = distance(normalizedRgbPos + vel / sliderResolution, vUv.xy);
  float ratio = clamp(1.0 - dist * 5., 0., 1.);
  vec4 tex1 = vec4(1.);
  vec4 tex2 = vec4(1.);
  vec2 u_textureFactor = vec2(1.0);
  vec2 u_texture2Factor = vec2(1.0);
  vec2 uv = vUv; 
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);
  
  vec2 aspectRatio = vec2(
    min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
    min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  );
      
  vec2 distortedPosition1 = getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  
  uv.x -= sin(uv.y) * ratio / 100. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 100. * (vel.x + vel.y) / 7.;
  tex1.r = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).r;
  tex2.r = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).r;
    
  uv.x -= sin(uv.y) * ratio / 150. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 150. * (vel.x + vel.y) / 7.;
  tex1.g = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).g;
  tex2.g = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).g;
    
  uv.x -= sin(uv.y) * ratio / 300. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 300. * (vel.x + vel.y) / 7.;
  tex1.b = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).b;
  tex2.b = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).b;
  
  tex1.a  = texture1Alpha;
  tex2.a  = texture2Alpha;
     
  vec4 mixedTextures =  mix(tex1, tex2, dispFactor);
  gl_FragColor = mixedTextures;
}