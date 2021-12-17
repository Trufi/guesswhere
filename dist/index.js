(()=>{"use strict";var e={269:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.affineStep=void 0;var r=t(753);n.affineStep=function(e,n,t){return r.clamp((t-e)/(n-e),0,1)}},518:function(e,n){var t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},t.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.applyDefaults=void 0,n.applyDefaults=function(e,n){var r=t({},n);for(var a in e)void 0!==e[a]&&(r[a]=e[a]);return r}},684:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.circleIcon=void 0,n.circleIcon=function(e,n,t,r){return void 0===t&&(t="#000"),void 0===r&&(r=0),"data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" width="'+2*n+'" height="'+2*n+'" viewBox="0 0 '+2*n+" "+2*n+'">\n        <circle fill="'+e+'" cx="'+n+'" cy="'+n+'" r="'+n+'"/>\n        <circle fill="'+t+'" cx="'+n+'" cy="'+n+'" r="'+r+'"/>\n    </svg>')}},753:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clamp=void 0,n.clamp=function(e,n,t){return e=Math.max(e,n),Math.min(e,t)}},227:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.degToRad=void 0,n.degToRad=function(e){return e*Math.PI/180}},196:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.EventEmitter=void 0;var t=function(){function e(){this.events={}}return e.prototype.on=function(e,n){var t=this.events[e];return t||(t=this.events[e]=[]),t.push(n),this},e.prototype.once=function(e,n){var t=this,r=function(a){t.off(e,r),n.call(t,a)};return this.on(e,r),this},e.prototype.off=function(e,n){var t=this.events[e];if(!t)return this;var r=t.indexOf(n);return-1!==r&&t.splice(r,1),this},e.prototype.emit=function(e,n){var t=this.events[e];if(!t)return this;for(var r=t.slice(),a=0;a<r.length;a++)r[a].call(this,n);return this},e}();n.EventEmitter=t},692:(e,n,t)=>{n.ZY=n.Id=n.uZ=void 0;t(269),t(518),t(684);var r=t(753);Object.defineProperty(n,"uZ",{enumerable:!0,get:function(){return r.clamp}});var a=t(227);Object.defineProperty(n,"Id",{enumerable:!0,get:function(){return a.degToRad}});t(196),t(226),t(380),t(898);var o=t(635);Object.defineProperty(n,"ZY",{enumerable:!0,get:function(){return o.radToDeg}});t(521),t(800),t(244),t(415)},226:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.lerp=void 0,n.lerp=function(e,n,t){return e+t*(n-e)}},415:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.mod=void 0,n.mod=function(e,n){return e-n*Math.floor(e/n)}},380:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.nearestPointOnSegment=void 0,n.nearestPointOnSegment=function(e,n,t){var r=e[0]-n[0],a=e[1]-n[1],o=t[0]-n[0],i=t[1]-n[1],c=o*o+i*i,s=0!==c?(r*o+a*i)/c:0;return s<0?{point:n,t:0}:s>1?{point:t,t:1}:{point:[Math.round(n[0]+s*o),Math.round(n[1]+s*i)],t:s}}},898:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.pick=void 0,n.pick=function(e,n){for(var t={},r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}},635:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.radToDeg=void 0,n.radToDeg=function(e){return e/Math.PI*180}},521:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.round=void 0,n.round=function(e,n){void 0===n&&(n=0);var t=Math.pow(10,n);return Math.round(e*t)/t}},800:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.sign=void 0,n.sign=function(e){return 0==(e=+e)||Number.isNaN(e)?e:e>0?1:-1}},244:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.throttle=void 0,n.throttle=function(e,n,t){var r,a=!1;function o(){a=!1,r&&(i.apply(t,r),r=void 0)}function i(){for(var i=[],c=0;c<arguments.length;c++)i[c]=arguments[c];a?r=i:(e.apply(t,i),setTimeout(o,n),a=!0)}return i}},70:(e,n)=>{n.g=void 0,n.g=function(e,n){var t=Math.PI/180,r=e[1]*t,a=n[1]*t,o=Math.sin((n[1]-e[1])*t/2),i=Math.sin((n[0]-e[0])*t/2),c=o*o+Math.cos(r)*Math.cos(a)*i*i,s=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return Math.round(6371e3*s)}},405:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.worldSize=void 0,n.worldSize=Math.pow(2,32)},817:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.mapPointFromLngLat=void 0;var r=t(405),a=t(753),o=t(227);n.mapPointFromLngLat=function(e){var n=Math.sin(o.degToRad(e[1])),t=e[0]*r.worldSize/360,i=Math.log((1+n)/(1-n))*r.worldSize/(4*Math.PI),c=r.worldSize/2;return[a.clamp(t,-c,c),a.clamp(i,-c,c)]}},134:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.mapPointsFromMeters=void 0;var r=t(405);n.mapPointsFromMeters=function(e,n){return n*(r.worldSize/40075e3)*(1/Math.cos(e[1]*Math.PI/180))}},218:(e,n,t)=>{n.N6=n.aG=n.av=void 0;var r=t(817);Object.defineProperty(n,"av",{enumerable:!0,get:function(){return r.mapPointFromLngLat}});var a=t(769);Object.defineProperty(n,"aG",{enumerable:!0,get:function(){return a.mapPointToLngLat}});var o=t(134);Object.defineProperty(n,"N6",{enumerable:!0,get:function(){return o.mapPointsFromMeters}})},769:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.mapPointToLngLat=void 0;var r=t(405),a=t(635);n.mapPointToLngLat=function(e){var n=-2*Math.PI/r.worldSize;return[360*e[0]/r.worldSize,90-2*a.radToDeg(Math.atan(Math.exp(e[1]*n)))]}},612:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2angle=void 0,n.vec2angle=function(e){return Math.atan2(e[1],e[0])}},662:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2copy=void 0,n.vec2copy=function(e,n){e[0]=n[0],e[1]=n[1]}},75:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2create=void 0,n.vec2create=function(){return[0,0]}},93:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2cross=void 0,n.vec2cross=function(e,n,t){var r=n[0]*t[1]-n[1]*t[0];e[0]=e[1]=0,e[2]=r}},691:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2dist=void 0,n.vec2dist=function(e,n){var t=n[0]-e[0],r=n[1]-e[1];return Math.sqrt(t*t+r*r)}},451:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2dot=void 0,n.vec2dot=function(e,n){return e[0]*n[0]+e[1]*n[1]}},354:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2equals=void 0,n.vec2equals=function(e,n,t){return void 0===t&&(t=1e-6),Math.abs(e[0]-n[0])<=t&&Math.abs(e[1]-n[1])<=t}},822:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2exactEquals=void 0,n.vec2exactEquals=function(e,n){return e[0]===n[0]&&e[1]===n[1]}},862:(e,n,t)=>{n.zr=n.q4=void 0;t(612),t(662),t(75),t(93);var r=t(691);Object.defineProperty(n,"q4",{enumerable:!0,get:function(){return r.vec2dist}});t(451),t(354),t(822),t(113);var a=t(457);Object.defineProperty(n,"zr",{enumerable:!0,get:function(){return a.vec2lerp}});t(751),t(236),t(552),t(116),t(966)},113:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2length=void 0,n.vec2length=function(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}},457:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2lerp=void 0,n.vec2lerp=function(e,n,t,r){var a=n[0],o=n[1];e[0]=a+r*(t[0]-a),e[1]=o+r*(t[1]-o)}},236:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2max=void 0,n.vec2max=function(e,n,t){e[0]=Math.max(n[0],t[0]),e[1]=Math.max(n[1],t[1])}},751:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2min=void 0,n.vec2min=function(e,n,t){e[0]=Math.min(n[0],t[0]),e[1]=Math.min(n[1],t[1])}},552:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2normalize=void 0,n.vec2normalize=function(e,n){var t=n[0],r=n[1],a=t*t+r*r;a>0&&(a=1/Math.sqrt(a),e[0]=n[0]*a,e[1]=n[1]*a)}},116:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2rotate=void 0,n.vec2rotate=function(e,n,t){var r=n[0],a=n[1];e[0]=r*Math.cos(t)+a*Math.sin(t),e[1]=-r*Math.sin(t)+a*Math.cos(t)}},966:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.vec2set=void 0,n.vec2set=function(e,n,t){e[0]=n,e[1]=t}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}(()=>{var e=t(862),n=t(70),r=t(218),a=t(405),o=t(692);const i=[{name:"Абакан",center:[91.442472,53.720644]},{name:"Актау",center:[51.165153,43.655254]},{name:"Актобе",center:[57.198823,50.293668]},{name:"Алматы",center:[76.945298,43.238478]},{name:"Альметьевск",center:[52.324249,54.896379]},{name:"Анадырь",center:[177.509175,64.733016]},{name:"Армавир",center:[41.129398,44.999385]},{name:"Архангельск",center:[40.555373,64.533112]},{name:"Астрахань",center:[48.029908,46.344266]},{name:"Атырау",center:[51.905162,47.110511]},{name:"Баку",center:[49.894911,40.403705]},{name:"Балаково",center:[47.792593,52.021277]},{name:"Барнаул",center:[83.749103,53.376571]},{name:"Белгород",center:[36.584032,50.60219]},{name:"Бийск",center:[85.180282,52.533481]},{name:"Биробиджан",center:[132.922223,48.789289]},{name:"Бишкек",center:[74.606177,42.848915]},{name:"Благовещенск",center:[127.517761,50.288357]},{name:"Братск",center:[101.633527,56.152554]},{name:"Брянск",center:[34.352027,53.259082]},{name:"Великий Новгород",center:[31.268588,58.548819]},{name:"Владивосток",center:[131.887051,43.120645]},{name:"Владикавказ",center:[44.611226,42.788609]},{name:"Владимир",center:[40.411693,56.131185]},{name:"Волгоград",center:[44.428131,48.653067]},{name:"Волгодонск",center:[42.180198,47.506648]},{name:"Вологда",center:[39.891739,59.22062]},{name:"Воронеж",center:[39.200594,51.66073]},{name:"Грозный",center:[45.692289,43.337619]},{name:"Димитровград",center:[49.614949,54.215444]},{name:"Днепр",center:[34.980642,48.430727]},{name:"Екатеринбург",center:[60.61642,56.839656]},{name:"Елец",center:[38.502102,52.616061]},{name:"Иваново",center:[40.982507,56.994695]},{name:"Ижевск",center:[53.228653,56.847944]},{name:"Иркутск",center:[104.280722,52.28779]},{name:"Ишим",center:[69.499736,56.113043]},{name:"Йошкар-Ола",center:[47.887645,56.637319]},{name:"КавМинВоды",center:[43.06636,44.040538]},{name:"Казань",center:[49.130025,55.798875]},{name:"Калининград",center:[20.453339,54.723292]},{name:"Калуга",center:[36.271892,54.523258]},{name:"Каменск-Уральский",center:[61.906014,56.429551]},{name:"Камышин",center:[45.402681,50.098988]},{name:"Караганда",center:[73.086165,49.819359]},{name:"Кемерово",center:[86.061715,55.344258]},{name:"Киев",center:[30.524847,50.449812]},{name:"Кипр",center:[33.35173,35.153693]},{name:"Киров",center:[49.606628,58.615449]},{name:"Ковров",center:[41.316783,56.357671]},{name:"Когалым",center:[74.486822,62.25962]},{name:"Кокшетау",center:[69.412799,53.278812]},{name:"Комсомольск-на-Амуре",center:[137.022709,50.563999]},{name:"Костанай",center:[63.577509,53.227586]},{name:"Кострома",center:[40.926793,57.767909]},{name:"Краснодар",center:[38.971526,45.024359]},{name:"Красноярск",center:[92.830745,56.005498]},{name:"Крым",center:[34.107918,44.956077]},{name:"Кумертау",center:[55.801017,52.771907]},{name:"Курган",center:[65.341521,55.440693]},{name:"Курск",center:[36.192605,51.730617]},{name:"Кызыл",center:[94.437964,51.709145]},{name:"Ленинск-Кузнецкий",center:[86.165254,54.665675]},{name:"Липецк",center:[39.578539,52.580639]},{name:"Магадан",center:[150.830172,59.572472]},{name:"Магнитогорск",center:[58.980122,53.391732]},{name:"Майкоп",center:[40.103344,44.606457]},{name:"Махачкала",center:[47.511053,42.96703]},{name:"Миасс и Златоуст",center:[60.108214,55.046508]},{name:"Минск",center:[27.562241,53.905182]},{name:"Москва",center:[37.62017,55.753466]},{name:"Мурманская область",center:[33.081028,68.964734]},{name:"Муром",center:[42.002619,55.571832]},{name:"Набережные Челны",center:[52.401881,55.734543]},{name:"Назрань",center:[44.755936,43.245387]},{name:"Нальчик",center:[43.616207,43.484928]},{name:"Нарьян-Мар",center:[53.032927,67.63493]},{name:"Находка",center:[132.865161,42.813668]},{name:"Невинномысск",center:[41.952768,44.614933]},{name:"Нижневартовск",center:[76.572051,60.933784]},{name:"Нижний Новгород",center:[43.928022,56.301157]},{name:"Нижний Тагил",center:[59.970463,57.930736]},{name:"Новокузнецк",center:[87.118981,53.74774]},{name:"Новороссийск",center:[37.778853,44.71582]},{name:"Новосибирск",center:[82.942926,55.014458]},{name:"Новочеркасск",center:[40.086179,47.417129]},{name:"Новошахтинск",center:[39.908304,47.796148]},{name:"Новый Уренгой",center:[76.676133,66.087355]},{name:"Норильск",center:[88.195515,69.352666]},{name:"Ноябрьск",center:[75.441492,63.196893]},{name:"Нур-Султан",center:[71.436683,51.14512]},{name:"Нягань",center:[65.436864,62.144119]},{name:"ОАЭ",center:[55.25939,25.204575]},{name:"Одесса",center:[30.7344,46.474563]},{name:"Омск",center:[73.393009,54.962357]},{name:"Оренбург",center:[55.097593,51.767519]},{name:"Орск",center:[58.563619,51.210578]},{name:"Орёл",center:[36.064256,52.970866]},{name:"Ош",center:[72.818151,40.502393]},{name:"Павлодар",center:[76.97647,52.281842]},{name:"Падуя",center:[11.876437,45.398441]},{name:"Пенза",center:[44.988893,53.213469]},{name:"Пермь",center:[56.248179,58.007079]},{name:"Петрозаводск",center:[34.41835,61.780603]},{name:"Петропавловск",center:[69.167871,54.880662]},{name:"Петропавловск-Камчатский",center:[158.640665,53.054953]},{name:"Пикалево",center:[34.16737,59.519178]},{name:"Прага",center:[14.413851,50.092619]},{name:"Псков",center:[28.341237,57.815002]},{name:"Республика Алтай",center:[85.937461,51.955482]},{name:"Ростов-на-Дону",center:[39.691771,47.222099]},{name:"Рубцовск",center:[81.212626,51.516808]},{name:"Рыбинск",center:[38.835289,58.050407]},{name:"Рязань",center:[39.690839,54.612965]},{name:"Салехард",center:[66.637017,66.554484]},{name:"Самара",center:[50.180997,53.20698]},{name:"Санкт-Петербург",center:[30.315794,59.939022]},{name:"Сантьяго",center:[-70.654183,-33.444717]},{name:"Саранск",center:[45.171362,54.1965]},{name:"Саратов",center:[46.034329,51.533296]},{name:"Семей",center:[80.251818,50.40853]},{name:"Сергиев Посад",center:[38.148156,56.323063]},{name:"Серпухов",center:[37.416632,54.913661]},{name:"Сланцы",center:[28.088251,59.115281]},{name:"Смоленск",center:[32.053037,54.766268]},{name:"Сочи",center:[39.727081,43.593975]},{name:"Ставрополь",center:[41.97818,45.035209]},{name:"Старый Оскол",center:[37.889958,51.308658]},{name:"Стерлитамак",center:[55.930724,53.630499]},{name:"Сургут",center:[73.39642,61.254127]},{name:"Сыктывкар",center:[50.824122,61.678349]},{name:"Сясьстрой",center:[32.555682,60.141784]},{name:"Таганрог",center:[38.8905,47.229788]},{name:"Тамбов",center:[41.433131,52.729678]},{name:"Тараз",center:[71.367556,42.900888]},{name:"Ташкент",center:[69.242176,41.327536]},{name:"Тверь",center:[35.912778,56.849986]},{name:"Тобольск",center:[68.251102,58.197324]},{name:"Тольятти",center:[49.370176,53.530074]},{name:"Томск",center:[84.948637,56.488128]},{name:"Тула",center:[37.617257,54.193143]},{name:"Тюмень",center:[65.533853,57.199953]},{name:"Улан-Удэ",center:[107.639962,51.836038]},{name:"Ульяновск",center:[48.38901,54.307622]},{name:"Уральск",center:[51.344509,51.203177]},{name:"Уссурийск",center:[131.952012,43.797257]},{name:"Усть-Каменогорск",center:[82.628027,49.948216]},{name:"Уфа",center:[56.023289,54.773241]},{name:"Ухта",center:[53.665145,63.567234]},{name:"Хабаровск",center:[135.070113,48.479195]},{name:"Ханты-Мансийск",center:[69.026617,61.004445]},{name:"Харьков",center:[36.280511,49.991397]},{name:"Хасавюрт",center:[46.597637,43.242854]},{name:"Чебоксары",center:[47.249282,56.139692]},{name:"Челябинск",center:[61.402709,55.157389]},{name:"Черкесск",center:[42.055609,44.223696]},{name:"Чита",center:[113.490273,52.04413]},{name:"Шахты",center:[40.215904,47.717233]},{name:"Шерегеш",center:[87.973,52.941853]},{name:"Шымкент",center:[69.587036,42.315446]},{name:"Эд-Даммам",center:[49.940814,26.34199]},{name:"Элиста",center:[44.242191,46.317799]},{name:"Эр-Рияд",center:[46.6761,24.749233]},{name:"Южно-Сахалинск",center:[142.728032,46.957628]},{name:"Якутск",center:[129.707847,62.037655]},{name:"Ярославль",center:[39.891254,57.625601]}],c=e=>document.querySelector(e);function s(e,n){const t=(0,o.Id)(e[0]),r=(0,o.Id)(e[1]),a=(0,o.Id)(n[0]),i=(0,o.Id)(n[1]),c=Math.acos(Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(t-a)),s=Math.sin(.5*c)/Math.sin(c),u=Math.sin(.5*c)/Math.sin(c),d=s*Math.cos(r)*Math.cos(t)+u*Math.cos(i)*Math.cos(a),l=s*Math.cos(r)*Math.sin(t)+u*Math.cos(i)*Math.sin(a),m=s*Math.sin(r)+u*Math.sin(i),h=Math.atan2(m,Math.sqrt(d*d+l*l)),v=Math.atan2(l,d);return[(0,o.ZY)(v),(0,o.ZY)(h)]}class u{constructor(t,r,a,i){this.map=t,this.options=r,this.duration=a,this.passedTime=i,this.creationTime=Date.now(),this.length=0,this.update=()=>{const t=Date.now()-this.creationTime,r=(0,o.uZ)(t/this.duration,0,1),a=function(e,n,t,r){return t*(e/=r)*e*e+0}(t,0,this.length,this.duration),i=[this.coordinates[0]];let c=0;for(let t=1;t<this.coordinates.length;t++){const r=this.coordinates[t-1],s=this.coordinates[t],u=(0,n.g)(r,s);if(!(c+u<a)){const n=[0,0],t=(0,o.uZ)((a-c)/u,0,1);(0,e.zr)(n,r,s,t),i.push(n);break}i.push(s),c+=u}const s=l(d(c/1e3,this.passedTime/1e3));this.options.color=m(s),this.options.coordinates=i,this.polyline.destroy(),this.polyline=new mapgl.Polyline(this.map,this.options),1!==r&&requestAnimationFrame(this.update)},this.coordinates=r.coordinates,r.coordinates=[],this.polyline=new mapgl.Polyline(t,r);for(let e=1;e<this.coordinates.length;e++)this.length+=(0,n.g)(this.coordinates[e-1],this.coordinates[e]);requestAnimationFrame(this.update)}destroy(){this.polyline.destroy()}}function d(e,n){const t=1-(0,o.uZ)(e,0,3500)/3500,r=1-(0,o.uZ)(n,0,300)/300;return Math.round(1e3*t*r)}function l(e){return e>900?1:e>600?2:e>300?3:e>0?4:5}function m(e){return{1:"#00a105",2:"#84bb00",3:"#ffb100",4:"#ff8100",5:"#ff2323"}[e]}function h(e){const n=e%10,t=e%100;if(t<10||t>20){if(1===n)return"очко";if(n>=2&&n<=4)return"очка"}return"очков"}const v=3e3,{position:p,city:f}=function(){const e=i[Math.floor(Math.random()*i.length)],n=5e3*Math.random(),t=(0,r.av)(e.center),a=(0,r.N6)(e.center,n),o=2*Math.PI*Math.random();return{position:(0,r.aG)([t[0]+Math.cos(o)*a,t[1]+Math.sin(o)*a]),city:e}}(),g=new mapgl.Map("map",{key:"042b5b75-f847-4f2a-b695-b5f58adc9dfd",center:p,zoom:16,minZoom:16,zoomControl:!1,lang:"ru"});window.addEventListener("resize",(()=>g.invalidateSize()));const M=new mapgl.Map("popup-map",{key:"042b5b75-f847-4f2a-b695-b5f58adc9dfd",center:[77.23746195134629,59.957078540749734],zoom:2,maxZoom:6,zoomControl:!1,lang:"ru"}),b={fontSize:28,color:"#0e68bb",haloRadius:2,haloColor:"#fff"},_=new mapgl.Marker(g,{coordinates:p,icon:"./marker.svg",size:[30,45],anchor:[15,45],zIndex:5,label:Object.assign(Object.assign({},b),{text:"Где я?"})});let y=!1;const w=c(".timer");let P=-1,O=0;const j=()=>{-1===P&&(P=Date.now(),w.style.opacity=String(1),requestAnimationFrame(x))};function x(){requestAnimationFrame(x),y||(O=Date.now()-P,w.innerHTML=(O/1e3).toFixed(1))}setTimeout(j,1e4),g.once("idle",j);const z=c(".guess"),L=c(".popup");function F(){L.style.display="none"}L.addEventListener("mousedown",F),c(".popup-inner").addEventListener("mousedown",(e=>e.stopPropagation())),c(".popup-close").addEventListener("click",F),z.addEventListener("click",(()=>{L.style.display="",M.invalidateSize()})),c(".popup-accept").addEventListener("click",(()=>{F(),z.style.display="none",_.setLabel(),y=!0;const t=M.getCenter(),o=(0,r.av)(t),P=(0,r.av)(p),j=(L=(0,e.q4)(o,P),0===(x=Math.min(window.innerWidth,window.innerHeight)-200)?-1/0:-Math.log(256*L/(x*a.worldSize))/Math.LN2);var x,L;g.setMinZoom(2),g.setZoom(j,{duration:v,easing:"easeOutQuart"});const k=[0,0];(0,e.zr)(k,o,P,.5),g.setCenter((0,r.aG)(k),{duration:v,easing:"easeInQuart"});const I=window.innerWidth<800;I&&g.setPadding({bottom:160},{duration:v});const T=function(e,n){let t=[e,n];for(let e=0;e<10;e++){const e=[t[0]];for(let n=1;n<t.length;n++)e.push(s(t[n-1],t[n]),t[n]);t=e}return t}(p,t);new u(g,{coordinates:T,width:4,width2:7,color:"#eb4a4a",color2:"#fff",zIndex:1},v,O),g.once("moveend",(()=>{_.setLabel(Object.assign(Object.assign({},b),{text:f.name}));const e=function(e){let t,r=1/0;for(let a=0;a<i.length;a++){const o=i[a],c=(0,n.g)(o.center,e);c<5e4&&c<r&&(t=o.name,r=c)}return t}(t);new mapgl.Marker(g,{coordinates:t,icon:"./marker.svg",anchor:[15,45],zIndex:5,label:Object.assign(Object.assign({},b),{text:e||"???"})});const r=(0,n.g)(t,p)/1e3,a=d(r,O/1e3),o=l(a),s=function(e){return{1:"Превосходно",2:"Хорошо",3:"Неплохо",4:"Почти",5:"Увы"}[e]}(o),u=m(o),v=Math.round(10*r)/10,M=Math.round(O/1e3*10)/10;c(".end-text").innerHTML=`\n            <div class="end-bold end-title" style="color: ${u};">${s}!</div>\n            Ты заработал\n            <span class="end-bold">${a}</span> ${h(a)}, угадав\n            <span class="end-bold">${f.name}</span> с точностью\n            <span class="end-bold">${v}&nbsp;км</span> за\n            <span class="end-bold">${M}&nbsp;сек</span>!\n        `;const y=`Я угадал ${f.name} на карте с точностью ${v} км и заработал ${a} ${h(a)}!`;if(c(".end-restart").addEventListener("click",(()=>{gtag("event","restart",{}),window.location.reload()})),I&&navigator.share){const e=c(".end-share-button");e.style.display="",e.addEventListener("click",(()=>{navigator.share&&(navigator.share({title:"Угадай, где ты на карте?",text:y,url:"https://trufi.github.io/guesswhere/"}),gtag("event","share",{}))}))}else c(".end-share-social").innerHTML=function(e){const n=decodeURIComponent(e);return`\n        <a\n            class="resp-sharing-button__link"\n            href="https://twitter.com/intent/tweet/?text=${n}&amp;url=https%3A%2F%2Ftrufi.github.io%2Fguesswhere"\n            target="_blank"\n            rel="noopener"\n            aria-label=""\n        >\n            <div\n                class="\n                resp-sharing-button\n                resp-sharing-button--twitter\n                resp-sharing-button--small\n            "\n            >\n                <div\n                    aria-hidden="true"\n                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"\n                >\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                        <path\n                            d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"\n                        />\n                    </svg>\n                </div>\n            </div>\n        </a>\n        <a\n            class="resp-sharing-button__link"\n            href="https://vk.com/share.php?title=${n}&amp;url=https%3A%2F%2Ftrufi.github.io%2Fguesswhere&image=https%3A%2F%2Ftrufi.github.io%2Fguesswhere%2Fshare.png"\n            target="_blank"\n            rel="noopener"\n            aria-label=""\n        >\n            <div\n                class="\n                resp-sharing-button\n                resp-sharing-button--vk\n                resp-sharing-button--small\n            "\n            >\n                <div\n                    aria-hidden="true"\n                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"\n                >\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                        <path\n                            d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z"\n                        />\n                    </svg>\n                </div>\n            </div>\n        </a>\n        <a\n            class="resp-sharing-button__link"\n            href="https://telegram.me/share/url?text=${n}&amp;url=https%3A%2F%2Ftrufi.github.io%2Fguesswhere"\n            target="_blank"\n            rel="noopener"\n            aria-label=""\n        >\n            <div\n                class="\n                resp-sharing-button\n                resp-sharing-button--telegram\n                resp-sharing-button--small\n            "\n            >\n                <div\n                    aria-hidden="true"\n                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"\n                >\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                        <path\n                            d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"\n                        />\n                    </svg>\n                </div>\n            </div>\n        </a>\n    `}(y);if(w.style.display="none",c(".end").style.display="",I){const e=c(".end").clientHeight;g.setControlsLayoutPadding({bottom:e})}gtag("event","post_score",{score:a,city:f.name,distance:v,time:M})}))}))})()})();