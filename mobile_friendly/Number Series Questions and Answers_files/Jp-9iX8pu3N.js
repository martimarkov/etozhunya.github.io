if (self.CavalryLogger) { CavalryLogger.start_js(["+kc4K"]); }

__d("FBIDCheck",[],(function(a,b,c,d,e,f){"use strict";var g=/^[1-9]\d*$/;a={isUser_deprecated:function(a){if(!a||typeof a==="string"&&!g.test(a))return!1;a=parseInt(a,10);return!a?!1:a>0&&a<22e8||a>=1e14&&a<=100099999989999||a>=89e12&&a<=89999999999999||a>=6000001e7&&a<=60000019999999}};e.exports=a}),null);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f){a={get:function(){return b("SiteData").pr!=null&&b("SiteData").pr>0?b("SiteData").pr:window.devicePixelRatio||1}};e.exports=a}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.enable=function(){if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};c._getDuration=function(){return 150};c._handleStartHide=function(){var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){var b=this;c.unsubscribe();c=null;var d=function(){b._layer.finishHide()};a?this._animate(d):d()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};c._animate=function(a){var c=this._layer.getRoot();c!=null||g(0,70);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};a.forDuration=function(c){var d=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(a);d.prototype._getDuration=b("emptyFunction").thatReturns(c);return d};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("ContextualDialogXUITheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};e.exports=a}),null);
__d("ServerTime",["InitialServerTime"],(function(a,b,c,d,e,f){d(b("InitialServerTime").serverTime);var g;function a(){return Date.now()-g}function c(){return g}function d(a){g=Date.now()-a}e.exports={getMillis:a,getOffsetMillis:c,update:d,get:a,getSkew:c}}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("clamp",[],(function(a,b,c,d,e,f){function a(a,b,c){if(a<b)return b;return a>c?c:a}e.exports=a}),null);
__d("shallowEqual",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function h(a,b){if(a===b)return a!==0||b!==0||1/a===1/b;else return a!==a&&b!==b}function a(a,b){if(h(a,b))return!0;if(typeof a!=="object"||a===null||typeof b!=="object"||b===null)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(var d=0;d<c.length;d++)if(!g.call(b,c[d])||!h(a[c[d]],b[c[d]]))return!1;return!0}e.exports=a}),null);
__d("JSResource",["JSResourceReference"],(function(a,b,c,d,e,f){var g={};function h(a,b){g[a]=b}function i(a){return g[a]}function a(a){a=a;var c=i(a);if(c)return c;c=new(b("JSResourceReference"))(a);h(a,c);return c}a.Reference=b("JSResourceReference");a.loadAll=b("JSResourceReference").loadAll;e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d("IntersectionObserverFallback",["FBLogger","TimeSlice","containsNode","getElementRect","performanceNow","setInterval","throttle"],(function(a,b,c,d,e,f){"use strict";var g,h=document.documentElement,i=[];function j(a,b){var c=Math.max(a.top,b.top),d=Math.min(a.bottom,b.bottom),e=Math.max(a.left,b.left);a=Math.min(a.right,b.right);b=a-e;var f=d-c;return b>=0&&f>=0?{top:c,bottom:d,left:e,right:a,width:b,height:f}:void 0}function k(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}var l=function(a){this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||k();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect.width*this.intersectionRect.height;a?this.intersectionRatio=Number((b/a).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0};a=function(){function a(a,c){var d=this;this.THROTTLE_TIMEOUT=100;this.POLL_INTERVAL=null;this.$12=b("TimeSlice").guard(b("throttle")(function(){var a=d.$14(),c=a?d.$15():k();d.$6.forEach(function(e){var f=e.element,h=b("getElementRect")(f),i=d.$16(f),j=e.entry,k=a&&i&&!d.$2&&d.$17(f,c);e.entry=new l({intersectionRect:k,target:f,time:(g||(g=b("performanceNow")))(),boundingClientRect:h,rootBounds:c});k=e.entry;!j?d.$7.push(k):a&&i?d.$18(j,k)&&d.$7.push(k):j&&j.isIntersecting&&d.$7.push(k)});d.$7.length&&d.$1(d.takeRecords(),d)},this.THROTTLE_TIMEOUT),"IntersectionObserverFallback: checkForIntersections");this.$2=!1;try{}catch(a){this.$2=!0}c=(c=c)!=null?c:{};this.$1=a;this.$4=!1;this.$6=[];this.$7=[];this.$8=this.$9(c.rootMargin);this.thresholds=this.$10(c.threshold);this.root=(a=c.root)!=null?a:null;this.rootMargin=this.$8.map(function(a){return a.value+a.unit}).join(" ")}var c=a.prototype;c.$10=function(a){a=(a=a)!=null?a:[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(a,b,c){return a!==c[b-1]})};c.$9=function(a){a=a||"0px";a=a.split(/\s+/).map(function(a){a=/^(-?\d*\.?\d+)(px|%)$/.exec(a);return{value:parseFloat(a[1]),unit:a[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};c.$11=function(){this.$4||(this.$4=!0,this.$12(),this.POLL_INTERVAL?this.$5=b("setInterval")(this.$12,this.POLL_INTERVAL):(window.addEventListener("resize",this.$12,!0),document.addEventListener("scroll",this.$12,!0),"MutationObserver"in window&&(this.$3=new MutationObserver(this.$12),this.$3.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))};c.$13=function(){this.$4&&(this.$4=!1,this.$5&&(clearInterval(this.$5),this.$5=void 0),window.removeEventListener("resize",this.$12,!0),document.removeEventListener("scroll",this.$12,!0),this.$3&&(this.$3.disconnect(),this.$3=void 0))};c.$17=function(a,c){var d=window.getComputedStyle(a);if(!d||d.display=="none")return void 0;d=b("getElementRect")(a);d=d;a=a.parentElement;var e=!1;while(!e){var f,g=null;f=((f=a)==null?void 0:f.nodeType)==1?window.getComputedStyle(a):{};if(f.display=="none")return void 0;a==this.root||a==document?(e=!0,g=c):a!=document.body&&a!=document.documentElement&&f.overflow!="visible"&&(g=b("getElementRect")(a));if(g){d=j(g,d);if(!d)break}a=a&&a.parentElement}return d};c.$15=function(){var a;if(this.root)a=b("getElementRect")(this.root);else{var c=document.documentElement,d=document.body,e=(c==null?void 0:c.clientWidth)||(d==null?void 0:d.clientWidth);c=(c==null?void 0:c.clientHeight)||(d==null?void 0:d.clientHeight);a={top:0,left:0,right:e,width:e,bottom:c,height:c}}return this.$19(a)};c.$19=function(a){var b=this.$8.map(function(b,c){return b.unit=="px"?b.value:b.value*(c%2?a.width:a.height)/100});b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3],width:0,height:0};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};c.$18=function(a,b){a=a&&a.isIntersecting?a.intersectionRatio||0:-1;b=b.isIntersecting?b.intersectionRatio||0:-1;if(a===b)return!1;for(var c=0;c<this.thresholds.length;c++){var d=this.thresholds[c];if(d==a||d==b||d<a!==d<b)return!0}return!1};c.$14=function(){return!this.root||b("containsNode")(h,this.root)};c.$16=function(a){var c=this.root||h;return b("containsNode")(c,a)};c.$20=function(){i.indexOf(this)<0&&i.push(this)};c.$21=function(){var a=i.indexOf(this);a!=-1&&i.splice(a,1)};c.observe=function(a){if(!a){b("FBLogger")("io").warn("IntersectionObserverFallback target does not exist");return}if(this.$6.some(function(b){return b.element==a}))return;this.$20();this.$6.push({element:a,entry:null});this.$11();this.$12()};c.unobserve=function(a){this.$6=this.$6.filter(function(b){return b.element!=a}),this.$6.length||(this.$13(),this.$21())};c.disconnect=function(){this.$6=[],this.$13(),this.$21()};c.takeRecords=function(){var a=this.$7.slice();this.$7=[];return a};return a}();e.exports=a}),null);
__d("IntersectionObserver",["IntersectionObserverFallback"],(function(a,b,c,d,e,f){"use strict";a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;e.exports=a?window.IntersectionObserver:b("IntersectionObserverFallback")}),null);
__d("randomInt",["invariant"],(function(a,b,c,d,e,f,g){function a(a,b){a=b===void 0?[0,a]:[a,b];b=a[0];a=a[1];a>b||g(0,1180,a,b);var c=this.random||Math.random;return Math.floor(b+c()*(a-b))}e.exports=a}),null);
__d("JSScheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";var g={unstable_Immediate:(c=b("SchedulerFb-Internals_DO_NOT_USE")).unstable_ImmediatePriority,unstable_UserBlocking:c.unstable_UserBlockingPriority,unstable_Normal:c.unstable_NormalPriority,unstable_Low:c.unstable_LowPriority,unstable_Idle:c.unstable_IdlePriority},h=!1,i=c.unstable_scheduleCallback,j=c.unstable_cancelCallback;a.__fbNativeSetTimeout||a.setTimeout;a.__fbNativeClearTimeout||a.clearTimeout;var k={priorities:g,shouldYield:b("SchedulerFb-Internals_DO_NOT_USE").unstable_shouldYield,getCurrentPriorityLevel:b("SchedulerFb-Internals_DO_NOT_USE").unstable_getCurrentPriorityLevel,runWithPriority:b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,defer:function(a){var b=k.getCurrentPriorityLevel();return i(b,a)},next:function(a){return b("SchedulerFb-Internals_DO_NOT_USE").unstable_next(a)},getCallbackScheduler:function(){var a=k.getCurrentPriorityLevel();return function(b){return i(a,b)}},getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE:function(){var a=k.getCurrentPriorityLevel();return function(c){return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(a,c)})}},deferUserBlockingRunAtCurrentPri_DO_NOT_USE:function(a){var c=k.getCurrentPriorityLevel();return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(c,a)})},scheduleNormalPriCallback:function(a){return i(g.unstable_Normal,a)},scheduleLoggingPriCallback:function(a){return i(g.unstable_Low,a)},scheduleSpeculativeCallback:function(a){return i(g.unstable_Idle,a)},cancelCallback:function(a){j(a)},scheduleDelayedCallback_DO_NOT_USE:function(a,b,c){a=i(a,c,{delay:b});return a},cancelDelayedCallback_DO_NOT_USE:function(a){a=a;return j(a)},startEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.startLoggingProfilingEvents;typeof a=="function"&&a()},stopEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.stopLoggingProfilingEvents;return typeof a=="function"?a():null},makeSchedulerGlobalEntry:function(c,d){c===void 0&&(c=null),d===void 0&&(d=!1),c!==null&&c!==void 0&&b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c),d&&k.startEventProfiling(),a.ScheduleJSWork=function(a){return function(){for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];h?a.apply(void 0,c):k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function(){h=!0;try{a.apply(void 0,c)}finally{h=!1}})}}}};e.exports=k}),null);
__d("BanzaiLogger",["Banzai"],(function(a,b,c,d,e,f){function g(a){return{log:function(c,d){b("Banzai").post("logger:"+c,d,a)},create:g}}a=g();e.exports=a}),null);